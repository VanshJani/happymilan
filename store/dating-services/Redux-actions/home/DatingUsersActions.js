import { getCookie } from "cookies-next";
import { GET_ACCEPTED_DATING_REQUEST_DATA_FAILURE, GET_ACCEPTED_DATING_REQUEST_DATA_REQUEST, GET_ACCEPTED_DATING_REQUEST_DATA_SUCCESS, GET_DATING_USER_BY_ID_FALIURE, GET_DATING_USER_BY_ID_REQUEST, GET_DATING_USER_BY_ID_SUCCESS, GET_DATING_USERS_FAILURE, GET_DATING_USERS_REQUEST, GET_DATING_USERS_SUCCESS } from "../../types"
import { GET_ACCEPTED_REQUEST_DATA, GET_ACCEPTED_REQUEST_DATA_FAILURE, GET_ACCEPTED_REQUEST_DATA_SUCCESS, GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "../../../type";

export const GetDatingUsers = (Currentpage) => {
    console.log("🚀 ~ GetDatingUsers ~ page:", Currentpage?.page)

    return async (dispatch) => {

        dispatch({ type: GET_DATING_USERS_REQUEST })

        const axios = require('axios');
        const Token = getCookie("authtoken")
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            // url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/getUserByGenderDating?page=${page?.page || 1}`,
            url: `https://stag.mntech.website/api/v1/user/user/getUserByGenderDatingAge?page=${Currentpage?.page}`,
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

export const GetDatingUserById = (UserID) => {
    console.log("🚀 ~ GetDatingUserById ~ UserID:", UserID)

    return async (dispatch) => {

        dispatch({ type: GET_DATING_USER_BY_ID_REQUEST })

        const axios = require('axios');
        const Token = getCookie("authtoken")
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/get-dating-user/${UserID}`,
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_DATING_USER_BY_ID_SUCCESS,
                    payload: response.data?.data[0]
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_DATING_USER_BY_ID_FALIURE
                })
                console.log(error);
            });

    }
}

export const GetNewRequestDataDating = () => {
    return async (dispatch) => {
        dispatch({ type: GET_REQUEST })
        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-frd-dating-req-v2?appUsesType=dating`,
            headers: {
                'Authorization': `Bearer ${token} `
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: GET_REQUEST_SUCCESS, payload: response.data?.data });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: GET_REQUEST_FAILURE, payload: error });
            });

    }
}


export const getAcceptedRequestDatingData = (viewType, pages) => {
    console.log("🚀 ~ getAcceptedRequestData ~ pages:", pages)
    return async (dispatch) => {
        dispatch({ type: GET_ACCEPTED_DATING_REQUEST_DATA_REQUEST });

        try {
            const axios = require('axios');
            const token = getCookie("authtoken");

            const limit = viewType === 'grid' ? 6 : 10;

            if (!token) {
                throw new Error('Authentication token is missing.');
            }

            const config = {
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-frd-mobile?appUsesType=dating&page=${pages}&limit=${limit}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios(config);
            console.log("🚀 ~ return ~ response:", response.data.data)

            dispatch({
                type: GET_ACCEPTED_DATING_REQUEST_DATA_SUCCESS,
                payload: {
                    data: response.data?.data,
                    totalPages: response?.data.data.totalPages,
                    currentPage: response?.data.data.page,
                    limit: response?.data.data.limit,
                    pagesdata: response?.data.data,
                    acceptedUsers: response.data?.data?.results
                }
            });
        } catch (error) {
            console.error('Error fetching accepted request data:', error);
            dispatch({ type: GET_ACCEPTED_DATING_REQUEST_DATA_FAILURE, payload: error.message });
        }
    };
};