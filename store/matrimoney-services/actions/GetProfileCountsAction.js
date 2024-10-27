import { getCookie } from 'cookies-next';
import { GET_PROFILE_COUNT_FAILURE, GET_PROFILE_COUNT_REQUEST, GET_PROFILE_COUNT_SUCCESS } from '../../type';

export const GetProfilesCount = (UserID) => {
    console.log("🚀 ~ GetProfilesCount ~ UserID:", UserID)

    return async (dispatch) => {

        dispatch({ type: GET_PROFILE_COUNT_REQUEST })

        const axios = require('axios');
        const Token = getCookie("authtoken")
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/getStatusCount`,
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_PROFILE_COUNT_SUCCESS,
                    payload: {
                        Likes: response.data.totalLikes,
                        Sent: response.data.totalRequestsSent,
                        Accepted: response.data.totalAcceptedRequests
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_PROFILE_COUNT_FAILURE
                })
                console.log(error);
            });

    }
}