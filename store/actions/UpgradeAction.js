import { getCookie } from "cookies-next";
import { GET_PLANS_BY_NAME_FAILURE, GET_PLANS_BY_NAME_REQUEST, GET_PLANS_BY_NAME_SUCCESS, GET_UPGRADE_PLANS, GET_UPGRADE_PLANS_BY_ID, GET_UPGRADE_PLANS_BY_ID_FAILURE, GET_UPGRADE_PLANS_BY_ID_SUCCESS, GET_UPGRADE_PLANS_FAILURE, GET_UPGRADE_PLANS_SUCCESS } from "../type"

export const GetupgradePlans = (currentPage) => {
    return async (dispatch) => {
        dispatch({ type: GET_UPGRADE_PLANS })

        try {
            const axios = require('axios');
            const token = getCookie("authtoken")

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/plan/get-plan`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': 'true',

                }
            };

            axios.request(config)
                .then((response) => {

                    dispatch({
                        type: GET_UPGRADE_PLANS_SUCCESS,
                        payload: response.data.data, // You can dispatch any relevant data received from the response
                    });

                    // console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    dispatch({
                        type: GET_UPGRADE_PLANS_FAILURE,
                        payload: error.message, // You can pass any error message received from the API response
                    });
                });


        } catch (error) {
            // Dispatch failure action if there's an error
            dispatch({
                type: ADD_TO_SHORTLIST_FAILURE,
                payload: error.message, // You can pass any error message received from the API response
            });
        }


    }
}


export const GetPlansByName = (PlanName) => {
    return async (dispatch) => {

        dispatch({ type: GET_PLANS_BY_NAME_REQUEST })
        const axios = require('axios');
        const token = getCookie('authtoken')

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/plan/get-plan-by-name/${PlanName}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: GET_PLANS_BY_NAME_SUCCESS, payload: response.data })

            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: GET_PLANS_BY_NAME_FAILURE })
            });

    }
}

export const getPlansByID = (PlanID) => {
    return async (dispatch) => {
        dispatch({ type: GET_UPGRADE_PLANS_BY_ID })

        const axios = require('axios');
        const AuthToken = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/plan/get-plan/${PlanID}`,
            headers: {
                'Authorization': `Bearer ${AuthToken}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_UPGRADE_PLANS_BY_ID_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: GET_UPGRADE_PLANS_BY_ID_FAILURE,
                    payload: error.message
                })
            });

    }
}