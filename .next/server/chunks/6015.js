"use strict";
exports.id = 6015;
exports.ids = [6015];
exports.modules = {

/***/ 9844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HG: () => (/* binding */ ResetEmailPasswordThirdStep),
/* harmony export */   Ir: () => (/* binding */ ResetSteps),
/* harmony export */   K6: () => (/* binding */ SubmitOTPAction),
/* harmony export */   Ln: () => (/* binding */ ResetEmailPasswordFirstStep),
/* harmony export */   NM: () => (/* binding */ SubmitPasswordAction),
/* harmony export */   bV: () => (/* binding */ ResendOTP),
/* harmony export */   eT: () => (/* binding */ SendCodeAction),
/* harmony export */   iR: () => (/* binding */ ResetEmailPasswordSecondStep)
/* harmony export */ });
/* unused harmony export ResetPasswordStep */
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77484);
// import { step } from "@material-tailwind/react";


const SendCodeAction = (credentials)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_FIRST_STEP */ .Mm_
        });
        const axios = __webpack_require__(52167);
        let data = credentials;
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/register`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("email", credentials.email);
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("uname", credentials?.name);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_FIRST_STEP_SUCCESS */ .kgb,
                payload: {
                    step: 1,
                    data: response.data,
                    message: response.data.data
                }
            });
        }).catch((error)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_FIRST_STEP_FAILURE */ .qOB,
                payload: {
                    step: 0,
                    message: error
                }
            });
            console.log(error);
        });
    };
};
const SubmitOTPAction = (Otp)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_SECOND_STEP */ .zaV
        });
        const axios = __webpack_require__(52167);
        const email = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("email");
        const DeviceToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("fcmToken");
        let data = {
            "email": email,
            "otp": Otp,
            "deviceToken": DeviceToken
        };
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/verify-otp-email`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            AfterOTPSubmit(response);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_SECOND_STEP_SUCCESS */ .Teg,
                payload: {
                    step: 2,
                    data: response.data,
                    message: response.data.message
                }
            });
        }).catch((error)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_SECOND_STEP_FAILURE */ .OjU,
                payload: {
                    step: 1,
                    message: error
                }
            });
            console.log(error);
        });
    };
};
const AfterOTPSubmit = (response)=>{
    const theData = response.data.data;
    localStorage.setItem("token", theData.tokens.access.token);
    localStorage.setItem("refoken", theData.tokens.refresh.token);
    localStorage.setItem("modal", "open");
    localStorage.setItem("platform-choose", true);
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("jwtToken", theData.tokens.access.token);
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("authtoken", theData.tokens.refresh.token);
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("email", theData.user.email);
};
const SubmitPasswordAction = (credentials)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_THIRD_STEP */ .AV9
        });
        const axios = __webpack_require__(52167);
        const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "password": credentials.password
        });
        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/update-user`,
            headers: {
                "Authorization": `Bearer ${Token}`,
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_THIRD_STEP_SUCCESS */ .V1q,
                payload: {
                    step: 3,
                    data: response.data.data,
                    message: "Signin Successfully"
                }
            });
            AfterPasswordSubmit(response);
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .SIGNUP_THIRD_STEP_FAILURE */ .QbK,
                payload: {
                    error: error,
                    message: "Something Went Wrong"
                }
            });
        });
    };
};
const AfterPasswordSubmit = (response)=>{
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("userName", response.data.userData.name);
    console.log("userInfo : ", response?.data);
    localStorage.setItem("personal", JSON.stringify(response?.data?.userData));
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)("userid", response.data.userData.id);
    localStorage.setItem("UserRegister", true);
};
const ResetSteps = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_STEPS */ .A_O,
            payload: {
                step: 0
            }
        });
    };
};
const ResendOTP = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESEND_OTP */ .xjj
        });
        const axios = __webpack_require__(52167);
        const email = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("email");
        let data = JSON.stringify({
            "email": email
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/send-verify-otp-email`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESEND_OTP_SUCCESS */ .J3l
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESEND_OTP_FAILURE */ .Nr9
            });
        });
    };
};
const ResetEmailPasswordFirstStep = (UserEmail)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_FIRST_STEP */ .Ul$
        });
        const axios = __webpack_require__(52167);
        let data = JSON.stringify({
            "email": UserEmail
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/forgot-password`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP */ .AGU
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP */ .AMR
            });
        });
    };
};
const ResetEmailPasswordSecondStep = (Credentials)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_SECOND_STEP */ .DLd
        });
        const axios = __webpack_require__(52167);
        let data = JSON.stringify({
            "email": Credentials?.email,
            "otp": Credentials?.otp
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/verify-reset-otp`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP */ .R9$
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP */ .fTE
            });
        });
    };
};
const ResetEmailPasswordThirdStep = (Credentials)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_THIRD_STEP */ .t9z
        });
        const axios = __webpack_require__(52167);
        let data = JSON.stringify({
            "password": Credentials?.password,
            "email": Credentials?.email,
            "otp": Credentials?.otp
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/auth/reset-password`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP */ .F_P
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP */ .Gei
            });
        });
    };
};
const ResetPasswordStep = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: RESET_PASSWORD_STEP
        });
    };
};


/***/ }),

/***/ 20438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ SignupSchema),
/* harmony export */   b: () => (/* binding */ PasswordSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const SignupSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(2, "Name must be at least 2 characters").max(25, "Name cannot be more than 25 characters").matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces").required("Please Enter Your Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email("Invalid email address").required("Please Enter your Email")
});
const PasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, "Password must be at least 6 characters").max(8, "Password must be at most 8 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,8}$/, "Must include letters and numbers").required("Please Enter your Password"),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_0__.string().oneOf([
        yup__WEBPACK_IMPORTED_MODULE_0__.ref("password"),
        null
    ], "Passwords must match").required("Please confirm your Password")
});


/***/ }),

/***/ 95962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Mask an email address by showing the first 3 and last 3 characters of the local part.
 * @param {string} email - The email address to be masked.
 * @returns {string} The masked email address.
 */ function maskEmail(email) {
    const [localPart, domain] = email?.split("@");
    // Determine how many characters to mask
    const visibleChars = 3;
    const maskedPartLength = localPart.length - 2 * visibleChars;
    if (maskedPartLength > 0) {
        const maskedPart = "*".repeat(maskedPartLength);
        const maskedEmail = `${localPart.substring(0, visibleChars)}${maskedPart}${localPart.substring(localPart.length - visibleChars)}@${domain}`;
        return maskedEmail;
    } else {
        // If the local part is too short to mask properly, return as is or handle differently
        return email;
    }
}
// Example usage
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskEmail);


/***/ }),

/***/ 10261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9844);



const useOtpResend = (initialCountdown = 60)=>{
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCountdown);
    const [isCounting, setIsCounting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const startCountdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setIsCounting(true);
        setCountdown(initialCountdown);
        dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_2__/* .ResendOTP */ .bV)());
    }, [
        initialCountdown
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isCounting) return;
        if (countdown === 0) {
            setIsCounting(false);
            console.log("Countdown finished");
            // Handle post-countdown logic here, like enabling the resend button
            return;
        }
        if (!isCounting || countdown <= 0) return;
        const timer = setTimeout(()=>{
            setCountdown((prevCountdown)=>prevCountdown - 1);
        }, 1000);
        if (countdown === 0) {
            setIsCounting(false);
        // Handle post-countdown logic here, like enabling the resend button
        }
        return ()=>clearTimeout(timer);
    }, [
        isCounting,
        countdown
    ]);
    return {
        countdown,
        isCounting,
        startCountdown
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOtpResend);


/***/ }),

/***/ 50167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;