import { getCookie } from "cookies-next";
import { GET_DATING_USERS_FAILURE, GET_DATING_USERS_REQUEST, GET_DATING_USERS_SUCCESS } from "../../types"

export const GetDatingUsers = () => {

    return async (dispatch) => {

        dispatch({ type: GET_DATING_USERS_REQUEST })

        const axios = require('axios');
        const Token = getCookie("authtoken")
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/getUserByGenderDating`,
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_DATING_USERS_SUCCESS,
                    payload: response.data?.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_DATING_USERS_FAILURE
                })
                console.log(error);
            });

    }
}