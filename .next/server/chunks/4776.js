"use strict";
exports.id = 4776;
exports.ids = [4776];
exports.modules = {

/***/ 44776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_AuthNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22009);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7354);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_dating_services_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_AuthNavbar__WEBPACK_IMPORTED_MODULE_3__]);
_components_layout_AuthNavbar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* __next_internal_client_entry_do_not_use__ default auto */ 








const profileOptions = [
    {
        id: 1,
        type: "marriage",
        title: "Long Term",
        description: "By creating this profile, you can find compatible partners for marriage and lifelong companionship.",
        defaultImg: "/assests/login/long-term.svg",
        hoverImg: "/assests/login/long-term-white.svg"
    },
    {
        id: 2,
        type: "dating",
        title: "Date",
        description: "By creating this profile, you can discover profiles for casual relationships.",
        defaultImg: "/assests/login/date.svg",
        hoverImg: "/assests/login/dating-white.svg"
    },
    {
        id: 3,
        type: "friendship",
        title: "Friendship",
        description: "By creating this profile, you can find friends and connect with groups for trips and activities.",
        defaultImg: "/assests/login/date.svg",
        hoverImg: "/assests/login/dating-white.svg"
    }
];
function Comp({ formData, updateFormData: updateFormData1 }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [activebtn, setActivebtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.getCookie)("authtoken");
    // useEffect(() => {
    //     if (!Token) {
    //         router.push('/login')
    //     }
    // }, [router])
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const handleSubmit = ()=>{
        if (activebtn === 0) return;
        const selectedOption = profileOptions.find((option)=>option.id === activebtn);
        const { type } = selectedOption;
        if (type === "marriage") {
            // updateFormData({
            //     ...formData,
            //     general: {
            //         ...formData.general,
            //         appUsesType: type,
            //     },
            // });
            dispatch((0,_store_dating_services_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_8__/* .PostAppUsesType */ .DJ)(type));
        } else {
            dispatch((0,_store_dating_services_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_8__/* .PostAppUsesType */ .DJ)(type));
        }
        localStorage.setItem("UserProfile", type);
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.setCookie)("UserProfile", type);
        localStorage.setItem("UserRegister", true);
        localStorage.setItem("platform-choose", false);
        if (type === "marriage") {
            router.push("/longterm/dashboard");
        } else {
            router.push("/dating/register/profileselect");
        }
    };
    const TitleText = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const Text = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Text2 = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_AuthNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-[50px] w-full h-full grid place-items-center pt-[130px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: TitleText,
                            className: "text-center font-poppins text-[34px] font-medium",
                            children: "I want to create a profile for"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex space-x-[27px]",
                            children: profileOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onClick: ()=>setActivebtn(option.id),
                                    onMouseEnter: ()=>setHover(option.id),
                                    onMouseLeave: ()=>setHover(null),
                                    className: `${activebtn === option.id ? "bg-custom-gradient" : ""} cursor-pointer duration-150 group hover:bg-custom-gradient w-[230px] h-[230px] rounded-[20px] border-[1px] border-[#8225AF]`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col justify-evenly items-center h-full w-full text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    width: 45,
                                                    height: 45,
                                                    alt: option.title,
                                                    src: hover === option.id || activebtn === option.id ? option.hoverImg : option.defaultImg
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text,
                                                    className: `select-none ${activebtn === option.id ? "text-[#FFF]" : "group-hover:text-[#FFF] text-[#000]"}`,
                                                    children: option.title
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: Text2,
                                                className: "w-[180px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: `select-none ${activebtn === option.id ? "text-[#FFF]" : "group-hover:text-[#FFF] text-[#000]"}`,
                                                    children: option.description
                                                })
                                            })
                                        ]
                                    })
                                }, option.id))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-[50px] w-full text-center",
                        children: activebtn > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleSubmit,
                            className: "text-[#FFF] rounded-[20px] w-[147px] h-[50px] bg-custom-gradient",
                            children: "Start Explore"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)((state)=>({
        formData: state.form.formData
    }), {
    updateFormData: _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_5__/* .updateFormData */ .Zv
})(Comp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;