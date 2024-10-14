"use strict";
exports.id = 5426;
exports.ids = [5426];
exports.modules = {

/***/ 25426:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45687);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55395);
/* harmony import */ var _components_Model_Models_RegisterAlertModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42288);
/* harmony import */ var _components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37069);
/* harmony import */ var _components_Model_popover_MenuPop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59206);
/* harmony import */ var _components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43142);
/* harmony import */ var _components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97996);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50228);
/* harmony import */ var _components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55905);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__, _components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__, _components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import required modules















const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\recentlyviewed\\comp\\RecentViewUser.js -> " + "../../../../_components/Model/Models/ShareModal"
        ]
    },
    ssr: false
});
const ShowMore = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\recentlyviewed\\comp\\RecentViewUser.js -> " + "../../../../_components/common/profile/UserBio"
        ]
    },
    ssr: false
});
const SendRequestBtn = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\recentlyviewed\\comp\\RecentViewUser.js -> " + "../../../../_components/common/Buttons/SendRequestBtn"
        ]
    },
    ssr: false
});
function RecentViewUser() {
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_17__/* .useDarkMode */ .v)();
    const [isRegisterModalOpen, setisRegisterModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isReportModalOpen, setisReportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isBlockModalOpen, setisBlockModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const CloseRegisterModal = ()=>{
        setisRegisterModalOpen(false);
    };
    const closeBlockModal = ()=>{
        setisBlockModalOpen(false);
    };
    const CloseReportModal = ()=>{
        setisReportModalOpen(false);
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = ()=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ProfileName = {
        color: darkMode ? "#FFF" : "#000",
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
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const Box = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const Urlmodaltext = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [openURLModal, setOpenURLModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.usersact.recentusersdata);
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const HandleRequestModal = (res)=>{
        // if (data?.data?.userProfileCompleted) {
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_10__/* .sendRequest */ ["if"])(res.id));
        setsentRequest((prevState)=>({
                ...prevState,
                [res.id]: !prevState[res.id]
            }));
        if (!sentrequest[res.id]) {
            setshortlistText("Request Sent..");
            setopenShortlistModal(true);
        } else {
            setshortlistText("Request Removed..");
            setopenShortlistModal(true);
        }
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
    };
    const HandleShortlist = (id)=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__/* .addToShortlist */ .q9)(id)); // Dispatch the action with the shortlist ID
        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
    };
    const imageFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col justify-center items-center",
                    children: data?.map((res, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: Box,
                                className: `bg-[#FFF] dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[530px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:h-[270px]  md:w-[400px]`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[350px] 2xl:w-[350px] xl:w-[350px] lg:w-[250px] md:w-[300px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-[15px] w-full ",
                                            children: res?.viewerId?.userProfilePic && res?.viewerId?.userProfilePic.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                pagination: {
                                                    clickable: true
                                                },
                                                modules: [
                                                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                ],
                                                className: "mySwiper relative 2xl:w-[197px] xl:w-[187px] lg:w-[170px] w-[185px] h-[260px]",
                                                children: res?.viewerId?.userProfilePic.slice(0, 3).map((Imageres, theindex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            placeholder: "blur",
                                                            blurDataURL: "data:...",
                                                            alt: `img${theindex + 1}`,
                                                            width: 197,
                                                            height: 258,
                                                            style: {
                                                                // width: "197px",
                                                                // height: "258px",
                                                                borderRadius: "10px",
                                                                objectFit: "cover"
                                                            },
                                                            className: "2xl:w-[197px] 2xl:h-[258px] xl:w-[197px] xl:h-[258px] lg:w-[180px] lg:h-[240px] w-[180px] h-[240px]",
                                                            src: Imageres.url,
                                                            loading: "lazy",
                                                            quality: 45
                                                        })
                                                    }, theindex))
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        backgroundColor: "#F8FBFF",
                                                        width: "197px",
                                                        height: "258px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        borderRadius: "10px"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "grid place-items-center space-y-[5px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                alt: "not-Found",
                                                                width: 34,
                                                                height: 34,
                                                                loading: "lazy",
                                                                quality: 25,
                                                                src: "/assests/dashboard/icon/NotFound-img.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "inline",
                                                                style: imageFoundText,
                                                                children: "No Image"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-[50%] ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                onClick: ()=>HandlePushUser(res?.viewerId?._id || res?.viewerId?.id),
                                                                className: "2xl:text-[18px] xl:text-[15px] text-[10px] cursor-pointer text-[#000] dark:text-[#FFF] hover:opacity-75 duration-100 break-words",
                                                                style: ProfileName,
                                                                children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.name)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: statusText,
                                                                className: "text-[#17C270] break-words",
                                                                children: res?.viewerId?.isUserActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[9px] text-[#0091FF]",
                                                                    children: "Online now"
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[9px] text-[#a6a6a6]",
                                                                    children: "Offline"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "pr-[8px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: `cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                                        user: res?.viewerId
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "cursor-pointer",
                                                                    onClick: ()=>HandleShortlist(res?.viewerId?._id || res?.viewerId?.id),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] p-[5px] rounded-[50%] relative top-[-5px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            loading: "lazy",
                                                                            width: 15,
                                                                            height: 14,
                                                                            alt: "star",
                                                                            src: "/assests/Black/Stars-2.svg"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_popover_MenuPop__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                                        res: res?.viewerId
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
                                                                        `NA,${res?.viewerId?.height}`
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                    style: ListText,
                                                                    children: res?.viewerId?.maritalStatus ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.viewerId?.maritalStatus ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.maritalStatus) : "NA , NA"
                                                                        ]
                                                                    }) : ""
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                    style: ListText,
                                                                    children: res?.viewerId?.religion ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.viewerId?.religion ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.religion) : "NA"}, ${res?.viewerId?.cast ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.cast) : "NA"}`
                                                                        ]
                                                                    }) : ""
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                    style: ListText,
                                                                    children: res?.viewerId?.address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.viewerId?.address ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.address?.currentCity) : "NA"} , ${res?.viewerId?.address ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.address?.currentCountry) : "NA"}`
                                                                        ]
                                                                    }) : ""
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                    style: ListText,
                                                                    children: res?.viewerId?.motherTongue ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.viewerId?.motherTongue ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.motherTongue) : "NA , NA"}  `
                                                                        ]
                                                                    }) : ""
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                    style: ListText,
                                                                    children: res?.viewerId?.userProfessional ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.viewerId?.userProfessional ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_19__/* .capitalizeFirstLetter */ .f)(res?.viewerId?.userProfessional.jobTitle) : "NA , NA"
                                                                        ]
                                                                    }) : ""
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShowMore, {
                                                            userid: res?.viewerId?._id || res?.viewerId?.id,
                                                            text: res?.viewerId?.writeBoutYourSelf,
                                                            maxLength: 100
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute right-0 bottom-[18px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SendRequestBtn, {
                                                    userdata: res?.viewerId?.name,
                                                    // Requeststatus={res?.friendsDetails}
                                                    RequestId: sentrequest[res?.viewerId?._id || res?.viewerId?.id],
                                                    HandleRequestModal: ()=>HandleRequestModal(res?.viewerId)
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        });
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
                isOpen: isModalOpen,
                onClose: closeModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                    open: openURLModal,
                    "aria-labelledby": "alert-dialog-title",
                    "aria-describedby": "alert-dialog-description",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
                        className: "w-[249px] h-[81px] text-center grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[14px]",
                            style: Urlmodaltext,
                            children: "URL has been copied"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                ProfileData: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_RegisterAlertModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
                title: "",
                isOpen: isRegisterModalOpen,
                onClose: CloseRegisterModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                    open: openShortlistModal,
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
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-[#fff]",
                                children: [
                                    " ",
                                    shortlistText
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentViewUser);

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