"use strict";
exports.id = 2254;
exports.ids = [2254];
exports.modules = {

/***/ 72254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);







function Credentials() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
        setActiveTab(1);
    };
    const [Email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [MobileNumberOfUser, setMobileNumberOfUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const renderTabContent = ()=>{
        const [Loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
        const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(4).fill(""));
        const [otp2, setOtp2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
        const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
        const handleChange = (index, value)=>{
            const newOtp = [
                ...otp
            ];
            newOtp[index] = value;
            setOtp(newOtp);
            setOtp2(newOtp);
            if (value && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        };
        const handleKeyDown = (index, e)=>{
            if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
                inputRefs.current[index - 1].focus();
            }
        };
        const [Email2, setEmail2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
        const [ChnagedEmail, SetChangedEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
            currentEmail: "",
            NewEmail: ""
        });
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            // Get the data from local storage
            const localStorageData = localStorage.getItem("email");
            if (localStorageData) {
                // Parse the JSON string to convert it into an object
                // const userData = JSON.parse(localStorageData);
                // Extract the user email from the userData object
                // const userEmail = userData?.user;
                SetChangedEmail((prev)=>({
                        ...prev,
                        currentEmail: localStorageData
                    }));
                if (localStorageData) {
                    // Split the email address into username and domain parts
                    const [username, domain] = localStorageData.split("@");
                    const [username2, domain2] = ChnagedEmail.currentEmail.split("@");
                    // Get the first three characters of the username
                    const truncatedUsername = username.substring(0, 3);
                    const truncatedUsername2 = username2.substring(0, 3);
                    // Construct the masked email address
                    const maskedEmail = `${truncatedUsername}*****@${domain}`;
                    const maskedEmail2 = `${truncatedUsername2}*****@${domain2}`;
                    // Update the state with the masked email
                    setEmail(maskedEmail);
                    setEmail2(maskedEmail2);
                }
            }
        }, [
            activeTab,
            setActiveTab,
            SetChangedEmail
        ]);
        const handleEmailChange = (e)=>{
            SetChangedEmail((prev)=>({
                    ...prev,
                    NewEmail: e.target.value
                }));
        };
        const HandleTabclick = ()=>{
            if (activeTab == 1) {
                console.log(ChnagedEmail);
                setLoading(true);
                const axios = __webpack_require__(52167);
                let data = JSON.stringify({
                    "email": ChnagedEmail.currentEmail
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
                    setLoading(false);
                    setActiveTab(activeTab + 1);
                }).catch((error)=>{
                    setLoading(false);
                    console.log(error);
                });
            } else if (activeTab == 2) {
                const otpNumber = parseInt(otp2.join(""), 10);
                console.log(otpNumber);
                setLoading(true);
                const axios = __webpack_require__(52167);
                let data = JSON.stringify({
                    "email": ChnagedEmail.currentEmail,
                    "newMail": ChnagedEmail.NewEmail,
                    "otp": otpNumber
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
                    setLoading(false);
                    localStorage.setItem("user", ChnagedEmail.NewEmail);
                    localStorage.setItem("email", ChnagedEmail.NewEmail);
                    setActiveTab(activeTab + 1);
                }).catch((error)=>{
                    setLoading(false);
                    console.log(error);
                });
            }
            console.log(ChnagedEmail);
        // setActiveTab(activeTab + 1);
        };
        switch(activeTab){
            case 1:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center",
                                children: "Update Email"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[30px] lg:mt-[35px] xl:mt-[40px] font-medium",
                            children: "Current Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%] w-full hover:border-[black]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] outline-none text-[12px] lg:text-[14px]  xl:text-[16px] placeholder:text-[black]",
                            // placeholder="jit*****@gmail.com" 
                            value: Email
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[20px] lg:mt-[25px] xl:mt-[30px] font-medium",
                            children: "New Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            onChange: handleEmailChange,
                            className: " rounded-[10px] px-[15px] h-[37px] lg:h-[43px] mt-[1%] xl:h-[50px] border-[1px] border-[#E6E6E6] hover:border-[black] w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-[5%] mt-[15px] lg:mt-[25px] xl:mt-[30px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleClose,
                                    className: "text-[12px] lg:text-[14px] xl:text-[16px] w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] border-[1px] border-[#8225AF] hover:bg-[#F3F8FF]",
                                    children: "Not Now"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: HandleTabclick,
                                    className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]",
                                    children: Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            loading: "lazy",
                                            alt: "loader",
                                            width: 25,
                                            height: 25,
                                            className: "animate-spin inline ",
                                            src: "/assests/animation/loaderIcon.svg"
                                        })
                                    }) : "Continue"
                                })
                            ]
                        })
                    ]
                });
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[10%] lg:px-[5%] 2xl:px-[10%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center",
                                        children: "Verification Code"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mt-[10px]  ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "  text-[10px] lg:text-[11px] xl:text-[12px] text-center   font-medium",
                                            children: [
                                                "Verification code sent ",
                                                Email2
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[black] flex gap-[2%] w-[100%] mt-[62px] md:mt-[67px] lg:mt-[82px] xl:mt-[92px]",
                                children: otp.map((digit, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: (el)=>inputRefs.current[index] = el,
                                            type: "text",
                                            className: "border-b-[1px] border-b-[#000] text-[#000] outline-none  w-full  text-center",
                                            maxLength: 1,
                                            value: digit,
                                            onChange: (e)=>handleChange(index, e.target.value),
                                            onKeyDown: (e)=>handleKeyDown(index, e)
                                        }, index)
                                    });
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[20px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: " text-[10px] lg:text-[13px] xl:text-[14px] text-center md:w-[300px] text-[#0F52BA] font-medium",
                                    children: "Resend in 57 sec "
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[27px] md:mt-[30px] lg:mt-[45px] xl:mt-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: HandleTabclick,
                                    className: "w-[45%] h-[37px] lg:h-[43px] xl:h-[50px]  rounded-[23px]  text-[12px] lg:text-[14px] xl:text-[16px] text-[white]",
                                    children: Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            loading: "lazy",
                                            alt: "loader",
                                            width: 25,
                                            height: 25,
                                            className: "animate-spin inline ",
                                            src: "/assests/animation/loaderIcon.svg"
                                        })
                                    }) : "Confirm"
                                })
                            })
                        ]
                    })
                });
            case 3:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[10%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center mt-[20px] xl:mt-[30px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0",
                                            height: "0",
                                            viewBox: "0 0 44 44",
                                            className: "w-[40px] lg:w-[44px] h-[44px]",
                                            fill: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M18.4838 31.5522L34.1188 15.9171L32.3889 14.1872L18.4838 28.0923L11.5171 21.1256L9.78719 22.8556L18.4838 31.5522ZM22.0082 44C18.966 44 16.1058 43.4227 13.4276 42.2682C10.7494 41.1136 8.41975 39.5466 6.43861 37.5674C4.45751 35.5881 2.88913 33.2607 1.73348 30.585C0.577826 27.9093 0 25.0504 0 22.0082C0 18.966 0.577276 16.1058 1.73183 13.4276C2.88642 10.7494 4.45335 8.41975 6.43262 6.43861C8.41188 4.45751 10.7393 2.88913 13.415 1.73348C16.0907 0.577828 18.9496 0 21.9918 0C25.034 0 27.8942 0.577275 30.5724 1.73183C33.2506 2.88642 35.5803 4.45335 37.5614 6.43262C39.5425 8.41188 41.1109 10.7393 42.2665 13.415C43.4222 16.0907 44 18.9496 44 21.9918C44 25.034 43.4227 27.8942 42.2682 30.5724C41.1136 33.2506 39.5466 35.5803 37.5674 37.5614C35.5881 39.5425 33.2607 41.1109 30.585 42.2665C27.9093 43.4222 25.0504 44 22.0082 44ZM22 41.5556C27.4593 41.5556 32.0833 39.6611 35.8722 35.8722C39.6611 32.0833 41.5556 27.4593 41.5556 22C41.5556 16.5407 39.6611 11.9167 35.8722 8.12778C32.0833 4.33889 27.4593 2.44444 22 2.44444C16.5407 2.44444 11.9167 4.33889 8.12778 8.12778C4.33889 11.9167 2.44444 16.5407 2.44444 22C2.44444 27.4593 4.33889 32.0833 8.12778 35.8722C11.9167 39.6611 16.5407 41.5556 22 41.5556Z",
                                                fill: "#0F52BA"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[47px] md:mt-[45px] lg:mt-[65px] xl:mt-[70px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[12px] lg:text-[16px] xl:text-[18px] font-medium",
                                    children: "Email has been updarted"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[47px] md:mt-[45px] lg:mt-[60px] xl:mt-[70px] mb-[27px] xl:mb-[33px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: handleClose,
                                    className: "w-[30%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white]",
                                        children: "OK"
                                    })
                                })
                            })
                        ]
                    })
                });
        }
    };
    const [openModal, setOpenModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handleClickOpenModal = ()=>{
        setOpenModal(true);
    };
    const handleCloseModal = ()=>{
        setOpenModal(false);
        setActiveTab2(1);
    };
    const [activeTab2, setActiveTab2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const renderTabContent2 = ()=>{
        const [Loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
        const [userPassword, SetusersPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
            currentPassword: "",
            NewPassword: "",
            confirmPassword: ""
        });
        const HandlePasswordChange = (e)=>{
            const { value, name } = e.target;
            SetusersPassword((prev)=>{
                return {
                    ...prev,
                    [name]: value
                };
            });
        };
        const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(4).fill(""));
        const [otp2, setOtp2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
        const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
        const handleChange = (index, value)=>{
            const newOtp = [
                ...otp
            ];
            newOtp[index] = value;
            setOtp(newOtp);
            setOtp2(newOtp);
            if (value && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        };
        const handleKeyDown = (index, e)=>{
            if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
                inputRefs.current[index - 1].focus();
            }
        };
        const [showPassword, setshowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
            inptut1: false,
            inptut2: false,
            inptut3: false
        });
        const HandleShowPassword = (e)=>{
            const { name } = e.target;
            setshowPassword((prev)=>{
                return {
                    ...prev,
                    [name]: !prev[name]
                };
            });
        };
        const HandleActiveTab2 = ()=>{
            if (activeTab2 == 1) {
                // console.log(ChnagedEmail)
                setLoading(true);
                const axios = __webpack_require__(52167);
                const currentEmail = localStorage.getItem("email");
                let data = JSON.stringify({
                    "email": currentEmail
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
                    setLoading(false);
                    setActiveTab2(activeTab2 + 1);
                }).catch((error)=>{
                    setLoading(false);
                    console.log(error);
                });
            } else if (activeTab2 == 2) {
                const otpNumber = parseInt(otp2.join(""), 10);
                // console.log(otpNumber)
                setLoading(true);
                const axios = __webpack_require__(52167);
                const currentEmail = localStorage.getItem("email");
                let data = JSON.stringify({
                    "email": currentEmail,
                    "password": userPassword.NewPassword,
                    "otp": otpNumber
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
                    setLoading(false);
                    setActiveTab2(activeTab2 + 1);
                }).catch((error)=>{
                    setLoading(false);
                    console.log(error);
                });
            }
        };
        switch(activeTab2){
            case 1:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center",
                                children: "Update Password"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[20px] lg:mt-[25px] xl:mt-[30px] font-medium",
                            children: "Enter Current Password"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "currentPassword",
                                    value: userPassword.currentPassword,
                                    onChange: HandlePasswordChange,
                                    type: showPassword?.inptut1 ? "text" : "password",
                                    className: " w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    name: "inptut1",
                                    alt: "show-password",
                                    onClick: HandleShowPassword,
                                    width: 18,
                                    height: 14,
                                    className: "absolute right-[60px] mt-[-0px]",
                                    src: showPassword?.inptut1 ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[10px] lg:mt-[15px] xl:mt-[20px] font-medium",
                            children: "New Password"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "NewPassword",
                                    value: userPassword.NewPassword,
                                    onChange: HandlePasswordChange,
                                    type: showPassword?.inptut2 ? "text" : "password",
                                    className: " w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    name: "inptut2",
                                    alt: "show-password",
                                    onClick: HandleShowPassword,
                                    width: 18,
                                    height: 14,
                                    className: "absolute right-[60px] mt-[-0px]",
                                    src: showPassword?.inptut2 ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[10px] lg:mt-[15px] xl:mt-[20px] font-medium",
                            children: "Confirm Password"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "confirmPassword",
                                    value: userPassword.confirmPassword,
                                    onChange: HandlePasswordChange,
                                    type: showPassword?.inptut3 ? "text" : "password",
                                    className: " w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    name: "inptut3",
                                    alt: "show-password",
                                    onClick: HandleShowPassword,
                                    width: 18,
                                    height: 14,
                                    className: "absolute right-[60px] mt-[-0px]",
                                    src: showPassword?.inptut3 ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-[5%] mt-[15px] lg:mt-[20px] xl:mt-[30px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleCloseModal,
                                    className: "w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] border-[1px] border-[#8225AF] hover:bg-[#F3F8FF]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[12px] lg:text-[14px] xl:text-[16px] ",
                                        children: "Not Now"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: HandleActiveTab2,
                                    className: "w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white]",
                                        children: "Continue"
                                    })
                                })
                            ]
                        })
                    ]
                });
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[10%] lg:px-[5%] 2xl:px-[10%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center",
                                        children: "Verification Code"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mt-[10px]  ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "  text-[10px] lg:text-[11px] xl:text-[12px] text-center   font-medium",
                                            children: [
                                                "Verification code sent ",
                                                Email
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[black] flex gap-[2%] w-[100%] mt-[62px] md:mt-[67px] lg:mt-[82px] xl:mt-[92px]",
                                children: otp.map((digit, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: (el)=>inputRefs.current[index] = el,
                                            type: "text",
                                            className: "border-b-[1px] border-b-[#000] text-[#000] outline-none  w-full  text-center",
                                            maxLength: 1,
                                            value: digit,
                                            onChange: (e)=>handleChange(index, e.target.value),
                                            onKeyDown: (e)=>handleKeyDown(index, e)
                                        }, index)
                                    });
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[20px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: " text-[10px] lg:text-[13px] xl:text-[14px] text-center md:w-[300px] text-[#0F52BA] font-medium",
                                    children: "Resend in 57 sec "
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[27px] md:mt-[30px] lg:mt-[45px] xl:mt-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: HandleActiveTab2,
                                    className: "w-[45%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]  text-[12px] lg:text-[14px] xl:text-[16px] text-[white]",
                                    children: Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            loading: "lazy",
                                            alt: "loader",
                                            width: 25,
                                            height: 25,
                                            className: "animate-spin inline ",
                                            src: "/assests/animation/loaderIcon.svg"
                                        })
                                    }) : "Confirm"
                                })
                            })
                        ]
                    })
                });
            case 3:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[10%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center mt-[40px] xl:mt-[60px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0",
                                            height: "0",
                                            viewBox: "0 0 44 44",
                                            className: "w-[40px] lg:w-[44px] h-[44px]",
                                            fill: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M18.4838 31.5522L34.1188 15.9171L32.3889 14.1872L18.4838 28.0923L11.5171 21.1256L9.78719 22.8556L18.4838 31.5522ZM22.0082 44C18.966 44 16.1058 43.4227 13.4276 42.2682C10.7494 41.1136 8.41975 39.5466 6.43861 37.5674C4.45751 35.5881 2.88913 33.2607 1.73348 30.585C0.577826 27.9093 0 25.0504 0 22.0082C0 18.966 0.577276 16.1058 1.73183 13.4276C2.88642 10.7494 4.45335 8.41975 6.43262 6.43861C8.41188 4.45751 10.7393 2.88913 13.415 1.73348C16.0907 0.577828 18.9496 0 21.9918 0C25.034 0 27.8942 0.577275 30.5724 1.73183C33.2506 2.88642 35.5803 4.45335 37.5614 6.43262C39.5425 8.41188 41.1109 10.7393 42.2665 13.415C43.4222 16.0907 44 18.9496 44 21.9918C44 25.034 43.4227 27.8942 42.2682 30.5724C41.1136 33.2506 39.5466 35.5803 37.5674 37.5614C35.5881 39.5425 33.2607 41.1109 30.585 42.2665C27.9093 43.4222 25.0504 44 22.0082 44ZM22 41.5556C27.4593 41.5556 32.0833 39.6611 35.8722 35.8722C39.6611 32.0833 41.5556 27.4593 41.5556 22C41.5556 16.5407 39.6611 11.9167 35.8722 8.12778C32.0833 4.33889 27.4593 2.44444 22 2.44444C16.5407 2.44444 11.9167 4.33889 8.12778 8.12778C4.33889 11.9167 2.44444 16.5407 2.44444 22C2.44444 27.4593 4.33889 32.0833 8.12778 35.8722C11.9167 39.6611 16.5407 41.5556 22 41.5556Z",
                                                fill: "#0F52BA"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[47px] md:mt-[45px] lg:mt-[63px] xl:mt-[80px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[12px] lg:text-[16px] xl:text-[18px] font-medium",
                                    children: "Password has been changed"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[9px] lg:text-[11px] xl:text-[12px] font-medium",
                                    children: "please login again to confirm the credentials"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[47px] md:mt-[45px] lg:mt-[63px] xl:mt-[80px] mb-[32px] xl:mb-[37px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: handleCloseModal,
                                    className: "w-[30%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white]",
                                        children: "OK"
                                    })
                                })
                            })
                        ]
                    })
                });
        }
    };
    const [modelOpen, setModelOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handleClickShow = ()=>{
        setModelOpen(true);
    };
    const handleHideModel = ()=>{
        setModelOpen(false);
        setActiveTab3(1);
    };
    const [activeTab3, setActiveTab3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const HandleTabclick3 = ()=>{
        setActiveTab3(activeTab + 1);
    };
    const renderTabContent3 = ()=>{
        const [Loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
        const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(4).fill(""));
        const [otp2, setOtp2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
        const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
        const handleChange = (index, value)=>{
            const newOtp = [
                ...otp
            ];
            newOtp[index] = value;
            setOtp(newOtp);
            setOtp2(newOtp);
            if (value && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        };
        const handleKeyDown = (index, e)=>{
            if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
                inputRefs.current[index - 1].focus();
            }
        };
        const [ChnagedEmail, SetChangedEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
            currentEmail: "",
            mobileNumber: "",
            currentMobileNumber: ""
        });
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            const localStorageData = localStorage.getItem("email");
            const currentMobileNumberOfuser = localStorage.getItem("mobilenumber");
            setMobileNumberOfUser(currentMobileNumberOfuser);
            if (localStorageData) {
                SetChangedEmail((prev)=>({
                        ...prev,
                        currentEmail: localStorageData,
                        currentMobileNumber: currentMobileNumberOfuser
                    }));
            }
        }, [
            activeTab,
            setActiveTab,
            SetChangedEmail
        ]);
        const HandleNumberInput = (e)=>{
            SetChangedEmail((prev)=>({
                    ...prev,
                    mobileNumber: e.target.value
                }));
        };
        const HandleTabclick3 = ()=>{
            if (activeTab3 == 1) {
                console.log(ChnagedEmail);
                setLoading(true);
                const axios = __webpack_require__(52167);
                let data = JSON.stringify({
                    "email": ChnagedEmail.currentEmail
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
                    setLoading(false);
                    setActiveTab3(activeTab3 + 1);
                }).catch((error)=>{
                    setLoading(false);
                    console.log(error);
                });
            } else if (activeTab3 == 2) {
                const otpNumber = parseInt(otp2.join(""), 10);
                console.log(otpNumber);
                setLoading(true);
                const axios = __webpack_require__(52167);
                let data = JSON.stringify({
                    "email": ChnagedEmail.currentEmail,
                    "mobileNumber": ChnagedEmail.mobileNumber,
                    "otp": otpNumber
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
                    setLoading(false);
                    setActiveTab3(activeTab3 + 1);
                }).catch((error)=>{
                    setLoading(false);
                    console.log(error);
                });
            }
            console.log(ChnagedEmail);
        // setActiveTab(activeTab + 1);
        };
        switch(activeTab3){
            case 1:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center",
                                children: "Update Mobile Number"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[30px] lg:mt-[35px] xl:mt-[40px] font-medium",
                            children: "Current Mobile Number"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: ChnagedEmail?.currentMobileNumber,
                                className: "outline-none text-[12px] lg:text-[14px]  xl:text-[16px] placeholder:text-[black]",
                                placeholder: "********92"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[10px] xl:text-[12px] mt-[20px] lg:mt-[25px] xl:mt-[30px] font-medium",
                            children: "New Mobile Number"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "mobileNumber",
                                onChange: HandleNumberInput,
                                className: "outline-none text-[12px] lg:text-[14px]  xl:text-[16px] "
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-[5%] mt-[15px] lg:mt-[25px] xl:mt-[30px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleHideModel,
                                    className: "w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] border-[1px] border-[#8225AF] hover:bg-[#F3F8FF]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[12px] lg:text-[14px] xl:text-[16px] ",
                                        children: "Not Now"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: HandleTabclick3,
                                    className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]",
                                    children: Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            loading: "lazy",
                                            alt: "loader",
                                            width: 25,
                                            height: 25,
                                            className: "animate-spin inline ",
                                            src: "/assests/animation/loaderIcon.svg"
                                        })
                                    }) : "Submit"
                                })
                            ]
                        })
                    ]
                });
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[10%] lg:px-[5%] 2xl:px-[10%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center",
                                        children: "Verification Code"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " mt-[10px]  ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "  text-[10px] lg:text-[11px] xl:text-[12px] text-center   font-medium",
                                            children: "Verification code sent roh******tel@gmail.com"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[black] flex gap-[2%] w-[100%] mt-[62px] md:mt-[67px] lg:mt-[82px] xl:mt-[92px]",
                                children: otp.map((digit, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: (el)=>inputRefs.current[index] = el,
                                            type: "text",
                                            className: "border-b-[1px] border-b-[#000] text-[#000] outline-none  w-full  text-center",
                                            maxLength: 1,
                                            value: digit,
                                            onChange: (e)=>handleChange(index, e.target.value),
                                            onKeyDown: (e)=>handleKeyDown(index, e)
                                        }, index)
                                    });
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[20px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: " text-[10px] lg:text-[13px] xl:text-[14px] text-center md:w-[300px] text-[#0F52BA] font-medium",
                                    children: "Resend in 57 sec "
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[27px] md:mt-[30px] lg:mt-[45px] xl:mt-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: HandleTabclick3,
                                    className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[45%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]",
                                    children: Loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            loading: "lazy",
                                            alt: "loader",
                                            width: 25,
                                            height: 25,
                                            className: "animate-spin inline ",
                                            src: "/assests/animation/loaderIcon.svg"
                                        })
                                    }) : "Confirm"
                                })
                            })
                        ]
                    })
                });
            case 3:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-[10%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[13px] lg:text-[16px] xl:text-[20px]  text-center"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center mt-[20px] xl:mt-[30px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0",
                                            height: "0",
                                            viewBox: "0 0 44 44",
                                            className: "w-[40px] lg:w-[44px] h-[44px]",
                                            fill: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M18.4838 31.5522L34.1188 15.9171L32.3889 14.1872L18.4838 28.0923L11.5171 21.1256L9.78719 22.8556L18.4838 31.5522ZM22.0082 44C18.966 44 16.1058 43.4227 13.4276 42.2682C10.7494 41.1136 8.41975 39.5466 6.43861 37.5674C4.45751 35.5881 2.88913 33.2607 1.73348 30.585C0.577826 27.9093 0 25.0504 0 22.0082C0 18.966 0.577276 16.1058 1.73183 13.4276C2.88642 10.7494 4.45335 8.41975 6.43262 6.43861C8.41188 4.45751 10.7393 2.88913 13.415 1.73348C16.0907 0.577828 18.9496 0 21.9918 0C25.034 0 27.8942 0.577275 30.5724 1.73183C33.2506 2.88642 35.5803 4.45335 37.5614 6.43262C39.5425 8.41188 41.1109 10.7393 42.2665 13.415C43.4222 16.0907 44 18.9496 44 21.9918C44 25.034 43.4227 27.8942 42.2682 30.5724C41.1136 33.2506 39.5466 35.5803 37.5674 37.5614C35.5881 39.5425 33.2607 41.1109 30.585 42.2665C27.9093 43.4222 25.0504 44 22.0082 44ZM22 41.5556C27.4593 41.5556 32.0833 39.6611 35.8722 35.8722C39.6611 32.0833 41.5556 27.4593 41.5556 22C41.5556 16.5407 39.6611 11.9167 35.8722 8.12778C32.0833 4.33889 27.4593 2.44444 22 2.44444C16.5407 2.44444 11.9167 4.33889 8.12778 8.12778C4.33889 11.9167 2.44444 16.5407 2.44444 22C2.44444 27.4593 4.33889 32.0833 8.12778 35.8722C11.9167 39.6611 16.5407 41.5556 22 41.5556Z",
                                                fill: "#0F52BA"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[47px] md:mt-[45px] lg:mt-[65px] xl:mt-[70px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[12px] lg:text-[16px] xl:text-[18px] font-medium",
                                    children: "Mobile number has been updated"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-[47px] md:mt-[45px] lg:mt-[60px] xl:mt-[70px] mb-[27px] xl:mb-[33px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "grad-button",
                                    onClick: handleHideModel,
                                    className: "w-[30%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white]",
                                        children: "OK"
                                    })
                                })
                            })
                        ]
                    })
                });
        }
    };
    const TextHeading = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex mt-[-17px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        id: "setting-text-grad",
                        className: "text-[15px] xl:text-[16px]  ml-[0px]",
                        children: "Login Details"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-[500px] lg:w-[640px] xl:w-[700px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        style: TextHeading,
                        className: " mt-[20px]",
                        children: "This menu enables users to update and manage authentication info, ensuring secure access to the account or system"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " mt-[20px] xl:mt-[25px] w-[500px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[15px] xl:mt-[20px] flex  ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[15px] xl:text-[16px] mb-[5px] w-[550px] lg:w-[620px] xl:w-[680px] font-medium",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: handleClickOpen,
                                    className: "cursor-pointer hover:bg-[#F3F8FF] p-[6px] rounded-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        alt: "edit",
                                        loading: "lazy",
                                        className: "",
                                        onClick: handleClickOpen,
                                        width: 20,
                                        height: 20,
                                        src: "/assests/dashboard/icon/edit-details-icon.svg"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "focus:outline-none",
                            BackdropProps: {
                                style: {
                                    opacity: 1
                                }
                            },
                            open: open,
                            onClose: handleClose,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "boxshadow",
                                    className: "bg-[white] py-[1%] xl:py-[2%] px-[1%] xl:px-[2.5%] 2xl:px-[3%] w-[80%] md:w-[30%]  rounded-[6px] absolute right-[10%] md:right-[33%] top-[45%] md:top-[22%] lg:top-[22%]",
                                    children: renderTabContent()
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    className: "focus:outline-none border-none  text-[14px] w-[550px] lg:w-[620px] xl:w-[680px]",
                                    variant: "static",
                                    // placeholder={Email} 
                                    value: Email
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "absolute mt-[20px] ml-[175px]",
                                    src: "/assests/dashboard/seting/Verified-icon.svg"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " mt-[15px] xl:mt-[20px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[20px] flex  ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[15px] xl:text-[16px] mb-[5px] w-[550px] lg:w-[620px] xl:w-[680px] font-medium",
                                    children: "Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: handleClickOpenModal,
                                    className: "cursor-pointer hover:bg-[#F3F8FF] p-[6px] rounded-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        alt: "icon",
                                        loading: "lazy",
                                        onClick: handleClickOpenModal,
                                        width: 20,
                                        height: 20,
                                        src: "/assests/dashboard/icon/edit-details-icon.svg"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "focus:outline-none ",
                            BackdropProps: {
                                style: {
                                    opacity: 1
                                }
                            },
                            open: openModal,
                            onClose: handleCloseModal,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "boxshadow",
                                    className: "bg-[white] py-[1%] xl:py-[2%] px-[1%] xl:px-[2.5%] 2xl:px-[3%] w-[80%] md:w-[30%]  rounded-[6px] absolute right-[10%] md:right-[33%] top-[45%] md:top-[22%] lg:top-[22%]",
                                    children: renderTabContent2()
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                            type: "password",
                            className: "focus:outline-none border-none text-[14px] w-[550px] lg:w-[620px] xl:w-[680px]",
                            variant: "static",
                            placeholder: "*****"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " mt-[15px] xl:mt-[20px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[20px] flex  ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[15px] xl:text-[16px] mb-[5px] w-[550px] lg:w-[620px] xl:w-[680px] font-medium",
                                    children: "Mobile Number"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: handleClickShow,
                                    className: "cursor-pointer hover:bg-[#F3F8FF] p-[6px] rounded-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        alt: "icon",
                                        loading: "lazy",
                                        onClick: handleClickShow,
                                        width: 20,
                                        height: 20,
                                        src: "/assests/dashboard/icon/edit-details-icon.svg"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "focus:outline-none ",
                            BackdropProps: {
                                style: {
                                    opacity: 1
                                }
                            },
                            open: modelOpen,
                            onClose: handleHideModel,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "boxshadow",
                                    className: "bg-[white] py-[1%] xl:py-[2%] px-[1%] xl:px-[2.5%] 2xl:px-[3%] w-[80%] md:w-[30%]  rounded-[6px] absolute right-[10%] md:right-[33%] top-[45%] md:top-[22%] lg:top-[22%]",
                                    children: renderTabContent3()
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    className: "border-none text-[14px] w-[550px] focus:outline-none  lg:w-[620px] xl:w-[680px]",
                                    variant: "static",
                                    value: MobileNumberOfUser
                                }),
                                MobileNumberOfUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "absolute mt-[18px] ml-[170px]",
                                    src: "/assests/dashboard/seting/Verified-icon.svg",
                                    alt: "Verified Icon"
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " mt-[15px] xl:mt-[20px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Credentials);


/***/ })

};
;