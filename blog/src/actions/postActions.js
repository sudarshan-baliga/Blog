import axios from 'axios';
const SERVER_URL = 'http://localhost:3001';

export default function getAllPosts() {

}

export function getAllUserPosts(userData) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/posts/getAllUserPost',
            data: userData,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    let payload = { userPosts: response.data.posts };
                    dispatch({ type: 'GET_ALL_USER_POSTS_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'GET_ALL_USER_POSTS_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                dispatch({ type: 'GET_ALL_USER_POSTS_FAILURE', payload: response.data });
            });
    }
}

export function getPost(data) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/posts/getPost',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    let payload = { userPosts: response.data.posts };
                    dispatch({ type: 'GET_PoST_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'GET_PoST_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                dispatch({ type: 'GET_PoST_FAILURE', payload: response.data });
            });
    }
}