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
            url: SERVER_URL + '/signin',
            data: loginData,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {
                if (response.data.auth == 'True')
                    dispatch({ type: 'SIGNIN_SUCCESS', payload: response.data.userData });
                else
                    dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            });
    }
}

export function SignOut() {
    console.log("action Logout");
    return { type: 'SIGNOUT', payload: '' };
}



export function SendPost(data) {
    console.log("reached action sendpost", data);
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/writePost',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {
                console.log("fake")
                if (response.data.auth == 'True')
                    dispatch({ type: 'SIGNIN_SUCCESS', payload: response.data.userData });
                else
                    dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                dispatch({ type: 'SIGNIN_FAILURE', payload: response.data });
            });
    }
}
