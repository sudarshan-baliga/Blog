import axios from 'axios';
const SERVER_URL = 'http://localhost:3001';

export default function signin(data) {
    let loginData = {
        'userName': data.userName,
        'password': data.password,
    };
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/handleuser/signin',
            data: loginData,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {

                if (response.data.auth == 'True') {
                    let payload = { auth: 'True', 'userData': response.data.userData, 'jwt': response.data.jwt };
                    dispatch({ type: 'SIGNIN_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                console.log(response, 'err');
                dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            });
    }
}

export function SignOut() {
    console.log("action Logout");
    return { type: 'SIGNOUT', payload: '' };
}



export function SendPost(data) {
    console.log(data);
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/posts/writePost',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': data.jwt,
                }
            }
        })
            .then(function (response) {

                if (response.data.auth == 'True')
                    dispatch({ type: 'SEND_POST_SUCCESS', payload: response.data.userData });
                else
                    dispatch({ type: 'SEND_POST_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            });
    }
}


//changeStatus for required items
export function changeStatus(data){
    console.log(data);
    return (dispatch) => {
        dispatch(data.type, data.payload);
    }
}