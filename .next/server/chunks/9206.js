"use strict";
exports.id = 9206;
exports.ids = [9206];
exports.modules = {

/***/ 59206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50228);
/* harmony import */ var _utils_icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducers_SpamReportReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50595);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);








const ProfileMenu = ({ HandleCancelRequest, MenuTitle, res, SetCurURL, openModal, OpenReportModal, openBlockModal, Sections })=>{
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__/* .useDarkMode */ .v)();
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(null);
    const [CurrentUserID, SetCurrentUserID] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    // const [Username,SetUsername] = useState("")
    const [UserData, SetUserData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const handleClick = (event, res)=>{
        SetUserData(res);
        setAnchorEl(event.currentTarget);
        SetCurrentUserID(res._id);
        const userId = res._id;
        const currentUrl = window.location.href;
        const urlWithUserId = `${currentUrl}/${userId}`;
        SetCurURL(urlWithUserId);
        if (MenuTitle != "accepted") {}
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [blockprofile, setblockprofile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [openURLModal, setOpenURLModal] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const handleClickOpen = ()=>{
        const userId = CurrentUserID;
        const currentUrl = window.location.href;
        const urlWithUserId = `${currentUrl}/${userId}`;
        navigator.clipboard.writeText(urlWithUserId).then(()=>{
            setOpenURLModal(true);
            handleClose(); // Reset copied state after 2 seconds
        }).catch((error)=>console.error("Failed to copy URL: ", error));
        setTimeout(()=>{
            setOpenURLModal(false);
        }, 800);
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const spamUserData = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.Spamuser.SpamUserdata);
    const ReportModalHandle = ()=>{
        handleClose();
        OpenReportModal();
        dispatch((0,_store_reducers_SpamReportReducer__WEBPACK_IMPORTED_MODULE_6__/* .updateSpamUserdata */ .G3)({
            ...spamUserData,
            spamUserId: res.id ? res?.id : res?._id,
            UserName: res?.firstName + " " + res?.lastName
        }));
    };
    const HandleOpenShareModal = ()=>{
        openModal();
        handleClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: (event)=>handleClick(event, res),
                className: "grid place-items-center cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] relative top-[-8px] rounded-[10px] h-[30px] w-[16px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-describedby": id,
                    variant: "contained",
                    className: "cursor-pointer",
                    onClick: (event)=>handleClick(event, res),
                    children: darkMode ? _utils_icons_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.more.dark : _utils_icons_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.more.light
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Popover, {
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
                        border: "none",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        borderRadius: "10px",
                        marginLeft: "-10px"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: ` flex flex- col items-center bg-[#FFF] rounded-[10px] w-[220px] ${MenuTitle ? "h-[180px]" : "h-[150px]"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "w-full flex flex-col justify-center items-center space-y-[0px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: Text3,
                                    onClick: HandleOpenShareModal,
                                    className: "w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                loading: "lazy",
                                                alt: "icon",
                                                width: 13,
                                                height: 14,
                                                src: "/assests/dashboard/icon/share-icon.svg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Share Profile"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: Text3,
                                    onClick: ()=>openBlockModal(UserData),
                                    className: " cursor-pointer hover:bg-[#F2F7FF] w-full p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            blockprofile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-[red]",
                                                        children: [
                                                            "Unblock ",
                                                            UserData?.name ? UserData?.name : ""
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        loading: "lazy",
                                                        alt: "icon",
                                                        width: 14,
                                                        height: 14,
                                                        src: "/assests/dashboard/icon/block-icon.svg"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            "Block ",
                                                            UserData?.name ? UserData?.name : ""
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onClick: ReportModalHandle,
                                    style: Text3,
                                    className: "cursor-pointer w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                loading: "lazy",
                                                alt: "icon",
                                                width: 14,
                                                height: 14,
                                                src: "/assests/dashboard/icon/report-icon.svg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: " Report this profile"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onClick: handleClickOpen,
                                    style: Text3,
                                    className: "cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                loading: "lazy",
                                                alt: "icon",
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
                                }),
                                MenuTitle == "accepted" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: HandleCancelRequest,
                                        style: Text3,
                                        className: "cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " ml-[20px] flex space-x-[24px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    loading: "lazy",
                                                    alt: "copy",
                                                    width: 14,
                                                    height: 14,
                                                    src: "/assests/Black/UnfriendUser.svg"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Unfriend"
                                                })
                                            ]
                                        })
                                    })
                                }) : ""
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
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
};
// export default ProfileMenu;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileMenu);


/***/ })

};
;