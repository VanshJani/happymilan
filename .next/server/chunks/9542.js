"use strict";
exports.id = 9542;
exports.ids = [9542];
exports.modules = {

/***/ 29542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60820);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26642);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50228);
/* harmony import */ var _components_common_profile_UserBio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49996);
/* harmony import */ var _components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43016);
/* harmony import */ var _components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Import Swiper styles


// import required modules



const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 93207)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\cancelled\\comp\\CanceledProfile.js -> " + "../../../../_components/Model/Models/ShareModal"
        ]
    }
});








function CanceledProfile({ thedata, isauthuserID }) {
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_11__/* .useDarkMode */ .v)();
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.usersact.cancelusersdata);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [CurrentUserID, SetCurrentUserID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [CurrURL, SetCurURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const BoldText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const statusText = {
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const Box = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [openURLModal, setOpenURLModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: data?.data.map((res, index)=>{
                        // const { images } = res
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: Box,
                                    className: `flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[350px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-[15px] w-full ",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                    pagination: {
                                                        clickable: true
                                                    },
                                                    modules: [
                                                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                    ],
                                                    className: "mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                loading: "lazy",
                                                                alt: "img-1",
                                                                width: 197,
                                                                height: 258,
                                                                className: "w-[197px] h-[258px]",
                                                                style: {
                                                                    objectFit: "cover",
                                                                    borderRadius: "10px"
                                                                },
                                                                src: res?.user.id == isauthuserID ? res?.friend.profilePic : res?.user.profilePic
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                loading: "lazy",
                                                                alt: "img-2",
                                                                width: 197,
                                                                height: 258,
                                                                className: "w-[197px] h-[258px]",
                                                                src: "/assests/dashboard/ignore/ignore-2.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                loading: "lazy",
                                                                alt: "img-3",
                                                                width: 197,
                                                                height: 258,
                                                                className: "w-[197px] h-[258px]",
                                                                src: "/assests/dashboard/ignore/ignore-3.svg"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between  h-[50px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "2xl:text-[20px] xl:text-[15px] text-[15px]",
                                                                    style: ProfileName,
                                                                    children: res?.user.id == isauthuserID ? res?.friend.name : res?.user.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: statusText,
                                                                    className: `text-[#7A7A7A]`,
                                                                    children: "Offline"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "pr-[8px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "relative left-[10px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            loading: "lazy",
                                                                            alt: "couple-icon",
                                                                            width: 17,
                                                                            height: 14,
                                                                            src: "/assests/Black/Couple2.svg"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "text-[10px]",
                                                                        style: Text4,
                                                                        children: "You & Her"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            loading: "lazy",
                                                                            alt: "star-icon",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/Stars-2.svg"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                            res: res?.user.id == isauthuserID ? res?.friend : res?.user,
                                                                            Section: "cancel"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "user-card",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                id: "user-card-grid",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.user?.id === isauthuserID ? res?.friend?.age ?? "NA" : res?.user?.age ?? "NA"}, ${res?.user?.id === isauthuserID ? res?.friend?.height ?? "NA" : res?.user?.height ?? "NA"}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.user?.id === isauthuserID ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.friend?.maritalStatus) ?? "NA" : (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.user?.maritalStatus) ?? "NA"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.user?.id === isauthuserID ? `${res?.friend?.religion ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res.friend.religion) : "NA"}, ${res?.user?.cast ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res.user.cast) : "NA"}` : `${res?.friend?.religion ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res.friend.religion) : "NA"}, ${res?.user?.cast ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res.user.cast) : "NA"}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.user?.id === isauthuserID ? `${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.friend?.address?.currentCity ?? "NA")}, ${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.friend?.address?.currentCountry ?? "NA")}` : `${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.user?.address?.currentCity ?? "NA")}, ${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.user?.address?.currentCountry ?? "NA")}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.user?.id === isauthuserID ? `${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.friend?.motherTongue ?? "NA")}` : `${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.user?.motherTongue ?? "NA")}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.user?.id === isauthuserID ? `${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.friend?.userProfessional?.jobTitle ?? "NA")}` : `${(0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_15__/* .capitalizeFirstLetter */ .f)(res?.user?.userProfessional?.jobTitle ?? "NA")}`
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_profile_UserBio__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                userid: res?.user?.id === isauthuserID ? res?.friend?.id : res?.user?.id,
                                                                text: res?.user?.id === isauthuserID ? res?.friend?.writeBoutYourSelf : res?.user?.writeBoutYourSelf,
                                                                maxLength: 100
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-end items-center mt-[20px] lg:mt-0 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute right-[140px] bottom-[40px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "flex space-x-[10px] items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                        className: "text-[16px] 2xl:text-[16px] xl:text-[14px]",
                                                                        style: BoldText,
                                                                        children: "Ignored"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        loading: "lazy",
                                                                        alt: "dislike-icon",
                                                                        width: 24,
                                                                        height: 23,
                                                                        src: "/assests/Black/dislike-2.svg"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index)
                        });
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                ProfileData: data?.data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
                isOpen: isModalOpen,
                onClose: closeModal,
                data: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Dialog, {
                    open: openURLModal,
                    "aria-labelledby": "alert-dialog-title",
                    "aria-describedby": "alert-dialog-description",
                    PaperProps: {
                        style: {
                            backgroundColor: "transparent",
                            boxShadow: "none"
                        }
                    },
                    BackdropProps: {
                        style: {
                            opacity: 0,
                            backgroundColor: "none",
                            boxShadow: "none"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            padding: "17px 19px 17px 20px"
                        },
                        className: "bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[14px]",
                            style: Urlmodaltext,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("spa", {
                                className: "text-[#fff]",
                                children: " URL has been copied"
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
// src/utils/capitalize.js
const capitalizeFirstLetter = (string)=>{
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};


/***/ })

};
;