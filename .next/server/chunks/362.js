"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 40362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DP: () => (/* binding */ Getprivacyquestions),
/* harmony export */   bV: () => (/* binding */ UpdateDisplayName),
/* harmony export */   mP: () => (/* binding */ Hidemyprofileclosemodel),
/* harmony export */   zk: () => (/* binding */ Hidemyprofile)
/* harmony export */ });
/* unused harmony exports Hidemyprofilesuccess, Hidemyprofilefailure, Getprivacyquestionssuccess, Getprivacyquestionsfailure, Updateprivacyquestions, Updateprivacyquestionssuccess, Updateprivacyquestionsfailure */
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77484);
/* harmony import */ var _UsersAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45687);



const Hidemyprofile = (credetials)=>{
    return (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .HIDE_MY_PROFILE */ .HUs
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        const userID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        let config = {
            method: "delete",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/user`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .HIDE_MY_PROFILE_SUCCESS */ .C5r,
                payload: response.data
            });
            dispatch((0,_UsersAction__WEBPACK_IMPORTED_MODULE_1__/* .logoutuser */ .rS)());
        }).catch((error)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .HIDE_MY_PROFILE_FAILURE */ .KYL,
                payload: error
            });
            console.log(error);
        });
    // const Credentials = {
    //     "profileHideAndDelete": {
    //         "isProfileDelete": credetials?.isProfileDelete,
    //         "reasonForProfileDelete": credetials?.reasonForProfileDelete
    //     }
    // }
    // let config = {
    //     method: 'put',
    //     maxBodyLength: Infinity,
    //     url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     },
    //     data: Credentials
    // };
    // axios.request(config)
    //     .then((response) => {
    //         console.log(JSON.stringify(response.data));
    //         dispatch({ type: HIDE_MY_PROFILE_SUCCESS, payload: response.data })
    //         dispatch(logoutuser())
    //     })
    //     .catch((error) => {
    //         dispatch({ type: HIDE_MY_PROFILE_FAILURE, payload: error })
    //         console.log(error);
    //     });
    };
};
const Hidemyprofilesuccess = (response)=>({
        type: HIDE_MY_PROFILE_SUCCESS,
        payload: response
    });
const Hidemyprofilefailure = (error)=>({
        type: HIDE_MY_PROFILE_FAILURE,
        payload: error
    });
const Hidemyprofileclosemodel = ()=>({
        type: _type__WEBPACK_IMPORTED_MODULE_2__/* .HIDE_MY_PROFILE_CLOSEMODAL */ .H4k
    });
const Getprivacyquestions = ()=>{
    return (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PRIVACY_QUESTIONS */ .PE3
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/privacy/get-privacy-for-current-user`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PRIVACY_QUESTIONS_SUCCESS */ .LZm,
                payload: response.data.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const Getprivacyquestionssuccess = (response)=>({
        type: GET_PRIVACY_QUESTIONS_SUCCESS,
        payload: response
    });
const Getprivacyquestionsfailure = (error)=>({
        type: GET_PRIVACY_QUESTIONS_FAILURE,
        payload: error
    });
const Updateprivacyquestions = ()=>{
    return (dispatch)=>{
        dispatch({
            type: UPDATE_PRIVACY_QUESTIONS
        });
    };
};
const Updateprivacyquestionssuccess = (response)=>({
        type: UPDATE_PRIVACY_QUESTIONS_SUCCESS,
        payload: response
    });
const Updateprivacyquestionsfailure = (error)=>({
        type: UPDATE_PRIVACY_QUESTIONS_FAILURE,
        payload: error
    });
const UpdateDisplayName = (SelectedDisplayName)=>{
    return (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_DISPLAY_NAME */ .kr
        });
        const axios = __webpack_require__(52167);
        const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "name": SelectedDisplayName
        });
        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/update-user/`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_DISPLAY_NAME_SUCCESS */ .gaY,
                payload: response.data
            });
            setTimeout(()=>{
                dispatch({
                    type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_DISPLAY_STATUS */ .ry4
                });
            }, 500);
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_DISPLAY_NAME_FAILURE */ .lzQ,
                payload: error
            });
        });
    };
};


/***/ })

};
;