import axios from 'axios';
const SERVER_URL = 'http://localhost:3001';


export function writeComment(data) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/comments/writecomment',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {

                if (response.status == 201) {
                    let payload = response.data.comment;
                    dispatch({ type: 'WRITE_COMMENT_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'WRITE_COMMENT_FAILURE', payload: {} });
            })
            .catch(function (response) {
                console.log(response);
                dispatch({ type: 'WRITE_COMMENT_FAILURE', payload: {} });
            });
    }
}

export function getAllComments(data) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/comments/getAllComments',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(function (response) {
                if (response.status == 200) {
                    let payload = { userPosts: response.data.comments };
                    dispatch({ type: 'GET_ALL_COMMENTS_SUCCESS', payload: payload });
                }
                else
                    dispatch({ type: 'GET_ALL_COMMENTS_FAILURE', payload: {} });
            })
            .catch(function (response) {
                dispatch({ type: 'GET_ALL_COMMENTS_FAILURE', payload: {} });
            });
    }
}