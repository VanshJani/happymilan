"use strict";
exports.id = 4037;
exports.ids = [4037];
exports.modules = {

/***/ 84037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SignUp_OTPInp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80635);
/* harmony import */ var _utils_helpers_ResendCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10261);
/* harmony import */ var _utils_helpers_MaskedEmail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95962);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Schema_SignupSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20438);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9844);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77484);














function ResetPassword() {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        outline: "none",
        bgcolor: "background.paper",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        p: 4
    };
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const [allCred, SetallCred] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        email: "",
        password: "",
        otp: ""
    });
    const EmailBox = ()=>{
        const [Email, SetEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
        const SendCode = ()=>{
            dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_9__/* .ResetEmailPasswordFirstStep */ .Ln)(Email));
            SetallCred((prev)=>({
                    ...prev,
                    email: Email
                })) // store Email Cookie 
            ;
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-[420px] h-[280px] bg-[#FFF] rounded-[20px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full w-full text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col justify-evenly items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Reset your password"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: "/assests/login/user-icon.svg",
                                    alt: "email",
                                    width: 18,
                                    height: 14,
                                    className: "absolute mt-[18px] ml-[20px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Enter your Email or Mobile",
                                    value: Email,
                                    onChange: (e)=>SetEmail(e.target.value),
                                    className: "pl-[50px] w-[300px] h-[50px] border-[1px] border-[#E6E6E6] rounded-[25px] hover:border-[#000] focus:border-[#000] outline-none"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "grad-button",
                                onClick: SendCode,
                                className: "w-[300px] h-[50px] rounded-[25px]",
                                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    loading: "lazy",
                                    alt: "loader",
                                    width: 25,
                                    height: 25,
                                    className: "animate-spin inline relative left-[0px]",
                                    src: "/assests/animation/loaderIcon.svg"
                                }) : "Send Code"
                            })
                        })
                    ]
                })
            })
        });
    };
    const OTPBox = ()=>{
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
        const [Email, SetEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
        const [CurrentOTP, SetCurrentOTP] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
        const HandleSubmit = (otp)=>{
            SetCurrentOTP(otp);
        };
        const { countdown, isCounting, startCountdown } = (0,_utils_helpers_ResendCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(60);
        const SubmitOTP = ()=>{
            dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_9__/* .ResetEmailPasswordSecondStep */ .iR)({
                email: allCred.email,
                otp: CurrentOTP //OTP Save in Cookie 
            }));
            SetallCred((prev)=>({
                    ...prev,
                    otp: CurrentOTP
                })) // store Email Cookie 
            ;
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[420px] h-[280px] space-y-[50px] flex flex-col justify-evenly items-center h-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[11px] mt-[5px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Title,
                                children: "Verify Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    style: EmailText,
                                    className: "text-[#AEAEAE]",
                                    children: [
                                        "OTP sent on ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#000]",
                                            children: allCred.email ? (0,_utils_helpers_MaskedEmail__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(allCred.email) : ""
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignUp_OTPInp__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
                            id: "grad-button",
                            className: "w-[300px] h-[50px] rounded-[25px]",
                            onClick: SubmitOTP,
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
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
    };
    const PasswordBox = ()=>{
        const initialState = {
            password: "",
            confirmPassword: ""
        };
        const { values, handleChange, handleBlur, touched, errors, handleSubmit } = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
            initialValues: initialState,
            validationSchema: _utils_Schema_SignupSchema__WEBPACK_IMPORTED_MODULE_6__/* .PasswordSchema */ .b,
            onSubmit: (values)=>{
                // dispatch(ResetEmailPasswordThirdStep())
                dispatch((0,_store_actions_SignupAction__WEBPACK_IMPORTED_MODULE_9__/* .ResetEmailPasswordThirdStep */ .HG)({
                    email: allCred.email,
                    password: values.password,
                    otp: allCred.otp
                }));
            }
        });
        const ErrorsText = {
            color: "red",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "9px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        };
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
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[420px] h-[280px] space-y-[40px] flex flex-col justify-evenly items-center h-full",
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                loading: "lazy",
                                alt: "loader",
                                width: 25,
                                height: 25,
                                className: "animate-spin inline relative left-[0px]",
                                src: "/assests/animation/loaderIcon.svg"
                            }) : "Reset Password"
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
            })
        });
    };
    const SuccessModal = ()=>{
        const [isAnimated, setIsAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            // Trigger the animation when the component mounts
            setIsAnimated(true);
        }, []);
        const Text = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        };
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
        const BackToLogin = ()=>{
            router.push("/login");
            dispatch({
                type: _store_type__WEBPACK_IMPORTED_MODULE_13__/* .RESET_PASSWORD_STEP */ .N8s
            });
            handleClose();
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[420px] h-[280px] space-y-[40px] flex flex-col justify-evenly items-center h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[38px] h-[38px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            height: 38,
                            width: 38,
                            loading: "lazy",
                            alt: "right-icon",
                            className: `transform transition-transform duration-500 ease-out ${isAnimated ? "scale-100" : "scale-0"}`,
                            src: "/assests/common/resetpassword-Modal.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: Text,
                            className: "w-[278px]",
                            children: "your password has been changed successfully"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: BackToLogin,
                            id: "grad-button",
                            className: "w-[172px] h-[50px] rounded-[23px]",
                            children: "Back to login"
                        })
                    })
                ]
            })
        });
    };
    const [activeTab, SetactiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(3);
    const { loading, step } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.signUp.ResetPassword);
    const CloseTheModal = ()=>{
        dispatch({
            type: _store_type__WEBPACK_IMPORTED_MODULE_13__/* .RESET_PASSWORD_STEP */ .N8s
        });
        handleClose();
    };
    const RenderComp = ()=>{
        switch(step){
            case 0:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmailBox, {});
            case 1:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OTPBox, {});
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordBox, {});
            case 3:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessModal, {});
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                onClick: handleOpen,
                className: "select-none cursor-pointer",
                style: Text,
                children: "Reset Password"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: style,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            width: 24,
                            height: 24,
                            alt: "close-icon",
                            className: `cursor-pointer absolute right-10 ${step > 2 ? "hidden" : ""}`,
                            onClick: CloseTheModal,
                            src: "/assests/social/close.svg"
                        }),
                        RenderComp()
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);


/***/ })

};
;