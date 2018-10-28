import axios from 'axios';
const SERVER_URL = 'http://localhost:3001';


export function getProfile(data) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/handleuser/getuserprofile',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': data.jwt,
                }
            }
        })
            .then(function (response) {

                if (response.status == 200)
                    dispatch({ type: 'GET_PROFILE_SUCCESS', payload: response.data.profileData });
                else
                    dispatch({ type: 'GET_PROFILE_FAILURE', payload: response.data.profileData });
            })
            .catch(function (response) {
                dispatch({ type: 'GET_PROFILE_FAILURE', payload: response.profileData });
            });
    }
}