import axios from 'axios';
const SERVER_URL = 'http://localhost:3001';

export function getAllUserPosts(userData) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/posts/getAllUserPosts',
            data: userData,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {
                console.log(response.data);
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

//home posts
export function getRecentPosts(data) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/posts/getRecentPosts',
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
                    dispatch({ type: 'GET_RECENT_POSTS_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'GET_RECENT_POSTS_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                dispatch({ type: 'GET_RECENT_POSTS_FAILURE', payload: response.data });
            });
    }
}

export function deletePost(data)
{
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/posts/deletePost',
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
                    dispatch({ type: 'DELETE_POST_SUCCESS',payload: response.data });
                }
                else
                    dispatch({ type: 'DELETE_POST_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                console.log(response);
                dispatch({ type: 'DELETE_POST_FAILURE', payload: response.data });
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
                    let payload = { userPosts: response.data.post };
                    dispatch({ type: 'GET_POST_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'GET_POST_FAILURE', payload: response.data });
            })
            .catch(function (response) {
                console.log(response);
                dispatch({ type: 'GET_PoST_FAILURE', payload: response.data });
            });
    }
}


