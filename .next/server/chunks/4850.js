"use strict";
exports.id = 4850;
exports.ids = [4850];
exports.modules = {

/***/ 4850:
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
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65768);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45687);
/* harmony import */ var _components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43016);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_common_profile_UserBio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49996);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50228);
/* harmony import */ var _components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import required modules

// Import Swiper styles


// import required modules



const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 3207).then(__webpack_require__.bind(__webpack_require__, 93207)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\blocked\\comp\\BlockedUser.js -> " + "../../../../_components/Model/Models/ShareModal"
        ]
    }
});







const MatchScoreModal = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\blocked\\comp\\BlockedUser.js -> " + "../../../../_components/Model/Models/MatchScoreModal"
        ]
    },
    ssr: false
});


const BlockUserModal = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\blocked\\comp\\BlockedUser.js -> " + "../../../../_components/Model/Models/BlockModal"
        ]
    },
    ssr: false
});
function BlockedUser() {
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_15__/* .useDarkMode */ .v)();
    const [isBlockModalOpen, setisBlockModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [UserData, SetUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const openBlockModal = ()=>{
        // SetUserData(res)
        setisBlockModalOpen(true);
    };
    const closeBlockModal = ()=>{
        setisBlockModalOpen(false);
    };
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const isCurrentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_13__.getCookie)("userid");
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = ()=>{
        setIsModalOpen(true);
        handleClose();
    };
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
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
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
    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const [openURLModal, setOpenURLModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setOpenURLModal(true);
        setTimeout(()=>{
            setOpenURLModal(false);
            handleClose();
        }, 2000);
    };
    const handleClick = (event, res)=>{
        setAnchorEl(event.currentTarget);
        SetUserData(res);
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__/* .getblockuserdata */ .JK)());
    }, []);
    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.usersact);
    const HandleUnblockUser = (res)=>{};
    if (data?.loading == true) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: data?.blockedusersdata?.data.map((res, index)=>{
                        // const { images } = res
                        const IsUser = res?.friend?.id === isCurrentUser;
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
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                    pagination: {
                                                        clickable: true
                                                    },
                                                    modules: [
                                                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                    ],
                                                    className: "mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            placeholder: "blur",
                                                            blurDataURL: "data:...",
                                                            alt: `img`,
                                                            width: 197,
                                                            height: 258,
                                                            style: {
                                                                width: "197px",
                                                                height: "258px",
                                                                borderRadius: "10px",
                                                                objectFit: "cover"
                                                            },
                                                            className: "w-[197px] h-[258px]",
                                                            // src={res.user.profilePic} 
                                                            src: IsUser ? res?.user?.profilePic : res?.friend?.profilePic,
                                                            loading: "lazy"
                                                        })
                                                    })
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
                                                                    children: IsUser ? res?.user?.name : res?.friend?.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: statusText,
                                                                    className: res.Activestatus ? `text-[#17C270]` : `text-[#7A7A7A]`,
                                                                    children: res.Activestatus ? "Online now" : "Offline"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "pr-[8px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: `cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MatchScoreModal, {
                                                                            user: res?.user
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "cursor-pointer",
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
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                width: 3,
                                                                                height: 14,
                                                                                alt: "more",
                                                                                src: "/assests/Black/3Dots.svg",
                                                                                className: "cursor-pointer",
                                                                                "aria-describedby": id,
                                                                                variant: "contained",
                                                                                onClick: (event)=>handleClick(event, res)
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Popover__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                id: id,
                                                                                open: open,
                                                                                anchorEl: anchorEl,
                                                                                onClose: handleClose,
                                                                                anchorOrigin: {
                                                                                    vertical: "top",
                                                                                    horizontal: "left"
                                                                                },
                                                                                transformOrigin: {
                                                                                    vertical: "top",
                                                                                    horizontal: "right"
                                                                                },
                                                                                PaperProps: {
                                                                                    style: {
                                                                                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                                                        borderRadius: "10px",
                                                                                        marginLeft: "-10px"
                                                                                    } // Add this to remove the shadow
                                                                                },
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "bg-[#FFF] rounded-[10px] w-[128px] h-[150px]",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                        className: "flex flex-col justify-center space-y-[12px] ml-[12px] ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                                style: Text3,
                                                                                                onClick: openModal,
                                                                                                className: "cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[15px]",
                                                                                                children: [
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                                        loading: "lazy",
                                                                                                        alt: "share-icon",
                                                                                                        width: 13,
                                                                                                        height: 14,
                                                                                                        src: "/assests/dashboard/icon/share-icon.svg"
                                                                                                    }),
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        children: "Share"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                                style: Text3,
                                                                                                onClick: openBlockModal,
                                                                                                className: "cursor-pointer flex  items-center space-x-[12px] text-[14px]",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                                        width: "14",
                                                                                                        height: "14",
                                                                                                        viewBox: "0 0 14 14",
                                                                                                        fill: "none",
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                            id: "Vector",
                                                                                                            d: "M7 14C6.03167 14 5.12167 13.8162 4.27 13.4488C3.41833 13.0813 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.91875 10.5817 0.55125 9.73C0.18375 8.87833 0 7.96833 0 7C0 6.03167 0.18375 5.12167 0.55125 4.27C0.91875 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.91875 4.27 0.55125C5.12167 0.18375 6.03167 0 7 0C7.96833 0 8.87833 0.18375 9.73 0.55125C10.5817 0.91875 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0813 3.41833 13.4488 4.27C13.8162 5.12167 14 6.03167 14 7C14 7.96833 13.8162 8.87833 13.4488 9.73C13.0813 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0813 9.73 13.4488C8.87833 13.8162 7.96833 14 7 14ZM7 12.95C8.66104 12.95 10.068 12.3736 11.2208 11.2208C12.3736 10.068 12.95 8.66104 12.95 7C12.95 6.29228 12.8275 5.61076 12.5825 4.95546C12.3375 4.30015 11.9933 3.70417 11.55 3.1675L3.1675 11.55C3.6925 12.005 4.28454 12.3521 4.94363 12.5913C5.60272 12.8304 6.28818 12.95 7 12.95ZM2.4675 10.8325L10.8325 2.4675C10.2958 2.0125 9.69985 1.6625 9.04454 1.4175C8.38924 1.1725 7.70772 1.05 7 1.05C5.33896 1.05 3.93203 1.6264 2.77921 2.77921C1.6264 3.93203 1.05 5.33896 1.05 7C1.05 7.71182 1.17833 8.39727 1.435 9.05637C1.69167 9.71546 2.03583 10.3075 2.4675 10.8325Z",
                                                                                                            fill: "red"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "text-[red]",
                                                                                                        children: "Unblock"
                                                                                                    }),
                                                                                                    " "
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                                style: Text3,
                                                                                                className: "cursor-pointer flex  items-center space-x-[12px] text-[14px]",
                                                                                                children: [
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                                        loading: "lazy",
                                                                                                        alt: "report",
                                                                                                        width: 14,
                                                                                                        height: 14,
                                                                                                        src: "/assests/dashboard/icon/report-icon.svg"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        children: " Report"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                                onClick: handleClickOpen,
                                                                                                style: Text3,
                                                                                                className: "cursor-pointer flex  items-center space-x-[12px] text-[14px]",
                                                                                                children: [
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                                        loading: "lazy",
                                                                                                        alt: "copy-icon",
                                                                                                        width: 12,
                                                                                                        height: 14,
                                                                                                        src: "/assests/dashboard/icon/copy-icon.svg"
                                                                                                    }),
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        children: "Copy URL"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
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
                                                                            "32, 5'3"
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
                                                                            IsUser ? res?.user?.religion ? res.user.religion : "NA" : res?.friend?.religion ? res.friend.religion : "NA",
                                                                            ", ",
                                                                            IsUser ? res?.user?.cast ? res.user.cast : "NA" : res?.friend?.cast ? res.friend.cast : "NA"
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
                                                                            IsUser ? res?.user?.motherTongue ? res.user.motherTongue : "NA, NA" : res?.friend?.motherTongue ? res.friend.motherTongue : "NA, NA"
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
                                                                            IsUser ? res?.user?.maritalStatus ? res.user.maritalStatus : "NA, NA" : res?.friend?.maritalStatus ? res.friend.maritalStatus : "NA, NA"
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
                                                                            res?.address ? res?.address?.currentCity : "NA",
                                                                            ", ",
                                                                            res?.address ? res.address.currentCountry : "NA"
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
                                                                            res?.userProfessional ? res?.userProfessional?.currentDesignation : "NA, NA"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_profile_UserBio__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                                userid: IsUser ? res?.user.id : res?.friend.id,
                                                                text: IsUser ? res?.user?.writeBoutYourSelf ? res?.user?.writeBoutYourSelf : "NA" : res?.friend?.writeBoutYourSelf ? res?.friend?.writeBoutYourSelf : "NA",
                                                                maxLength: 100
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-end items-center mt-[20px] lg:mt-0 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "flex space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "text-[16px] 2xl:text-[16px] xl:text-[14px]",
                                                                    style: BoldText,
                                                                    children: "Blocked by You"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    loading: "lazy",
                                                                    alt: "block",
                                                                    width: 23,
                                                                    height: 23,
                                                                    src: "/assests/Black/block-2.svg"
                                                                })
                                                            })
                                                        ]
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                ProfileData: data?.blockedusersdata?.data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
                isOpen: isModalOpen,
                onClose: closeModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockUserModal, {
                title: "Unblock",
                data: UserData,
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Dialog, {
                    open: openURLModal,
                    "aria-labelledby": "alert-dialog-title",
                    "aria-describedby": "alert-dialog-description",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.DialogContent, {
                        className: "w-[249px] h-[81px] text-center grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[14px]",
                            style: Urlmodaltext,
                            children: "URL has been copied"
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockedUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;