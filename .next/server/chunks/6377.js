"use strict";
exports.id = 6377;
exports.ids = [6377];
exports.modules = {

/***/ 26377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OTPInp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80635);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9844);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_Schema_SignupSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20438);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_helpers_ResendCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10261);
/* harmony import */ var _utils_helpers_MaskedEmail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95962);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_10__);












function NewUser({ SetOtpBoxActive }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const inpText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const BottomText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const ErrorsText = {
        color: "red",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "9px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const { step, message, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state?.signUp);
    const UsernameTab = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(()=>{
        const initialValues = {
            name: "",
            email: ""
        };
        const { values, handleChange, handleBlur, touched, handleSubmit, errors } = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
            initialValues: initialValues,
            validationSchema: _utils_Schema_SignupSchema__WEBPACK_IMPORTED_MODULE_7__/* .SignupSchema */ .I,
            onSubmit: (values)=>{
                dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_5__/* .SendCodeAction */ .eT)(values));
            }
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "space-y-[17px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: "/assests/login/email-icon.svg",
                                                alt: "user",
                                                width: 16,
                                                height: 14,
                                                className: "absolute mt-[17px] ml-[20px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Enter Your Name",
                                                name: "name",
                                                value: values.name,
                                                onChange: handleChange,
                                                className: `w-[300px] h-[50px] border-[1px] border-[#E6E6E6] ${errors.name && touched.name ? "border-[red]" : "hover:border-[#000]  focus:border-[#000]"}  outline-none rounded-[25px] pl-[50px]`,
                                                style: inpText
                                            })
                                        ]
                                    }),
                                    errors.name && touched.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: ErrorsText,
                                        children: errors.name
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: "/assests/login/user-icon.svg",
                                                alt: "email",
                                                width: 18,
                                                height: 14,
                                                className: "absolute mt-[18px] ml-[20px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                placeholder: "Enter Your Email or Mobile",
                                                name: "email",
                                                value: values.email,
                                                autoComplete: "off",
                                                onChange: handleChange,
                                                className: `w-[300px] h-[50px] border-[1px] border-[#E6E6E6] ${errors.email && touched.email ? "border-[red]" : "hover:border-[#000]  focus:border-[#000]"} outline-none rounded-[25px] pl-[50px]`,
                                                style: inpText
                                            })
                                        ]
                                    }),
                                    errors.email && touched.email ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: ErrorsText,
                                        children: errors.email
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        id: "grad-button",
                        onClick: handleSubmit,
                        className: "w-[300px] h-[50px] rounded-[25px]",
                        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            loading: "lazy",
                            alt: "loader",
                            width: 25,
                            height: 25,
                            className: "animate-spin inline relative left-[0px]",
                            src: "/assests/animation/loaderIcon.svg"
                        }) : "Send Code"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center w-[233px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: BottomText,
                        children: [
                            "By creating account, I Agee to Happy Milan ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[#0F52BA]",
                                children: "Privacy Policy "
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[#0F52BA]",
                                children: "T&C"
                            })
                        ]
                    })
                })
            ]
        });
    });
    const OTPTab = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(()=>{
        const [Email, SetEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
        const { step, message, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state?.signUp);
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            SetEmail((0,cookies_next__WEBPACK_IMPORTED_MODULE_10__.getCookie)("email"));
        }, []);
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            const handleBeforeUnload = (event)=>{
                // Modern browsers require returnValue to be set
                event.preventDefault();
                event.returnValue = ""; // Some browsers require this line for compatibility
            };
            window.addEventListener("beforeunload", handleBeforeUnload);
            // Cleanup the event listener when the component unmounts
            return ()=>{
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }, []);
        const { countdown, isCounting, startCountdown } = (0,_utils_helpers_ResendCode__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(60);
        const Title = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
        };
        const EmailText = {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        };
        const ResendText = {
            color: "#A3A3A3",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        };
        const ResendCode = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        };
        const HandleChangeStep = ()=>{
            const isConfirmed = window.confirm("Are you sure you want to delete this item?");
            if (isConfirmed) {
                dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_5__/* .ResetSteps */ .Ir)());
            } else {}
        };
        const [CurrentOTP, SetCurrentOTP] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
        const HandleSubmit = (otp)=>{
            SetCurrentOTP(otp);
        };
        const SubmitOTP = ()=>{
            dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_5__/* .SubmitOTPAction */ .K6)(CurrentOTP));
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-[50px] flex flex-col justify-evenly items-center h-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[11px] mt-[5px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Title,
                                children: "Verify Email"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative flex space-x-[12px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        style: EmailText,
                                        className: "text-[#AEAEAE]",
                                        children: [
                                            "OTP sent on ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-[#000]",
                                                children: Email ? (0,_utils_helpers_MaskedEmail__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(Email) : ""
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        width: 11,
                                        height: 11,
                                        alt: "edit",
                                        className: "cursor-pointer",
                                        onClick: HandleChangeStep,
                                        src: "/assests/login/edit-icon.svg"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OTPInp__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        length: 4,
                        onOtpSubmit: HandleSubmit
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: isCounting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            style: ResendText,
                            children: [
                                "Resend in ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-[#000]",
                                    children: [
                                        countdown,
                                        "\xa0Sec."
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: ResendCode,
                            className: "cursor-pointer",
                            onClick: startCountdown,
                            children: "Resend Code"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: SubmitOTP,
                            id: "grad-button",
                            className: "w-[300px] h-[50px] rounded-[25px]",
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                loading: "lazy",
                                alt: "loader",
                                width: 25,
                                height: 25,
                                className: "animate-spin inline relative left-[0px]",
                                src: "/assests/animation/loaderIcon.svg"
                            }) : "Confirm"
                        })
                    })
                ]
            })
        });
    });
    const PasswordTab = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(()=>{
        const { step, message, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state?.signUp);
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            const handleBeforeUnload = (event)=>{
                // Modern browsers require returnValue to be set
                event.preventDefault();
                event.returnValue = ""; // Some browsers require this line for compatibility
            };
            window.addEventListener("beforeunload", handleBeforeUnload);
            // Cleanup the event listener when the component unmounts
            return ()=>{
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }, []);
        const initialState = {
            password: "",
            confirmPassword: ""
        };
        const { values, handleChange, handleBlur, touched, errors, handleSubmit } = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
            initialValues: initialState,
            validationSchema: _utils_Schema_SignupSchema__WEBPACK_IMPORTED_MODULE_7__/* .PasswordSchema */ .b,
            onSubmit: (values)=>{
                dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_5__/* .SubmitPasswordAction */ .NM)(values));
            }
        });
        const HintText = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        };
        const [ShowPass, SetShowPass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
            password: false,
            confirmPassword: false
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-[40px] flex flex-col justify-evenly items-center h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Set Your Password"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "space-y-[17px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                onClick: ()=>SetShowPass({
                                                        ...ShowPass,
                                                        password: !ShowPass.password
                                                    }),
                                                width: 18,
                                                height: 18,
                                                alt: "password",
                                                className: "absolute left-[auto] ml-[260px] mt-[15px]",
                                                src: ShowPass.password ? "/assests/login/view-pass.png" : "/assests/login/hide-pass.png"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: ShowPass.password ? "text" : "password",
                                                name: "password",
                                                onChange: handleChange,
                                                value: values.password,
                                                placeholder: "Choose Password",
                                                className: "inline w-[300px] h-[50px] outline-none border-[1px] border-[#E6E6E6] hover:border-[#000] focus:border-[#000] pl-[23px] rounded-[25px] pr-[50px]"
                                            })
                                        ]
                                    }),
                                    errors.password && touched.password ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: ErrorsText,
                                        children: errors.password
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                onClick: ()=>SetShowPass({
                                                        ...ShowPass,
                                                        confirmPassword: !ShowPass.confirmPassword
                                                    }),
                                                width: 18,
                                                height: 18,
                                                alt: "password",
                                                className: "absolute left-[auto] ml-[260px] mt-[15px]",
                                                src: ShowPass.confirmPassword ? "/assests/login/view-pass.png" : "/assests/login/hide-pass.png"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: ShowPass.confirmPassword ? "text" : "password",
                                                name: "confirmPassword",
                                                onChange: handleChange,
                                                value: values.confirmPassword,
                                                placeholder: "Confirm Password",
                                                className: "w-[300px] h-[50px] outline-none border-[1px] border-[#E6E6E6] hover:border-[#000] focus:border-[#000] pl-[23px] rounded-[25px] pr-[50px]"
                                            })
                                        ]
                                    }),
                                    errors.confirmPassword && touched.confirmPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: ErrorsText,
                                        children: errors.confirmPassword
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleSubmit,
                        id: "grad-button",
                        className: "w-[300px] h-[50px] rounded-[25px]",
                        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            loading: "lazy",
                            alt: "loader",
                            width: 25,
                            height: 25,
                            className: "animate-spin inline relative left-[0px]",
                            src: "/assests/animation/loaderIcon.svg"
                        }) : "Register"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-[250px] text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: HintText,
                        children: [
                            "Hints : ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[#878787]",
                                children: "Must be 6-8 characters long, including numbers and letters"
                            })
                        ]
                    })
                })
            ]
        });
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        SetOtpBoxActive(step > 0);
        if (step > 2) {
            router.push("/login/1");
            setTimeout(()=>{
                dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_5__/* .ResetSteps */ .Ir)());
            }, 400);
        }
    }, [
        step
    ]);
    const RenderTab = ()=>{
        switch(step){
            case 0:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UsernameTab, {});
            case 1:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OTPTab, {});
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordTab, {});
            default:
                return null;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-[30px] flex flex-col items-center justify-evenly h-full space-y-[28px]",
            children: RenderTab()
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewUser);


/***/ })

};
;