import { getCookie } from 'cookies-next';
import { GET_DATING_CATEGORY_FALIURE, GET_DATING_CATEGORY_REQUEST, GET_DATING_CATEGORY_SUCCESS } from '../../types';

export const GetDatingCategoryUsers = (category) => {
    console.log("🚀 ~ GetDatingCategoryUsers ~ category:", category)

    return async (dispatch) => {

        dispatch({ type: GET_DATING_CATEGORY_REQUEST })

        const axios = require('axios');
        const Token = getCookie("authtoken")

        let data = JSON.stringify({
            "interestedIn": category
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://stag.mntech.website/api/v1/user/user/getUser-list-by-interest',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_DATING_CATEGORY_SUCCESS,
                    payload: response.data?.data?.[0]
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_DATING_CATEGORY_FALIURE
                })
                console.log(error);
            });

    }
}

// const axios = require('axios');
// let data = '{\r\n    "interestedIn": "foodies"\r\n}';

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://stag.mntech.website/api/v1/user/user/getUser-list-by-interest?page=1',
//   headers: { },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
