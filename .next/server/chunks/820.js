"use strict";
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 60820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_icons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26725);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50228);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93207);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43142);
/* harmony import */ var _pages_components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37069);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_reducers_SpamReportReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50595);
/* harmony import */ var _pages_components_Model_Models_CancelRequestModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_5__]);
_pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function ProfileMenu({ Credentials, res, Section }) {
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .useDarkMode */ .v)();
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
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [UserData, SetUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [CurrURL, SetCurURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Block Modal Section -- start
    const [blockprofile, setblockprofile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isBlockModalOpen, setisBlockModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openBlockModal = ()=>{
        setisBlockModalOpen(true);
    };
    const closeBlockModal = ()=>{
        setisBlockModalOpen(false);
    };
    // Block Modal Section -- End
    // Report Modal Section - Start
    // Manages the opening and closing of the report modal, and updates spam user data upon reporting
    // State to manage the visibility of the report modal
    const [isReportModalOpen, setisReportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Redux dispatch hook and spam user data from the store
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const spamUserData = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.Spamuser.SpamUserdata);
    // Function to open the report modal
    const OpenReportModal = ()=>{
        setisReportModalOpen(true);
    };
    // Function to close the report modal
    const CloseReportModal = ()=>{
        setisReportModalOpen(false);
    };
    // Function to handle report action
    // This closes the current modal, opens the report modal, and updates spam user data in the Redux store
    const ReportModalHandle = ()=>{
        handleClose(); // Close the current modal
        OpenReportModal(); // Open the report modal
        // Dispatch updated spam user data to the store
        dispatch((0,_store_reducers_SpamReportReducer__WEBPACK_IMPORTED_MODULE_10__/* .updateSpamUserdata */ .G3)({
            ...spamUserData,
            spamUserId: res?.id,
            UserName: res?.firstName + " " + res?.lastName
        }));
    };
    // Report Modal Section - End
    const handleClick = (event, res)=>{
        SetUserData(res);
        setAnchorEl(event.currentTarget);
        const userId = res?.id || res?._id || "";
        const currentUrl = window.location.href;
        // Remove "/sent" from the URL if it exists
        const newUrl = currentUrl.replace(/\/(sent|accepted|cancelled|deleted|newrequest)/g, "");
        // Append userId to the modified URL
        const urlWithUserId = `${newUrl}/${userId}`;
        SetCurURL(urlWithUserId);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [openURLModal, setOpenURLModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const HandleOpenShareModal = ()=>{
        openModal();
        handleClose();
    };
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = (e)=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const handleCopyURL = ()=>{
        setOpenURLModal(true);
        navigator.clipboard.writeText(CurrURL);
        handleClose();
        setTimeout(()=>{
            setOpenURLModal(false);
        }, 1000);
    };
    const SecntSection = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    };
    const AcceptedSection = ()=>{
        const [isCancelModalOpen, setisCancelModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const closeCancelModal = ()=>{
            setisCancelModalOpen(false);
        };
        const HandleUnfriend = ()=>{
            setisCancelModalOpen(true);
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: HandleUnfriend,
                    style: Text3,
                    className: "cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " ml-[20px] flex space-x-[24px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                loading: "lazy",
                                alt: "copy",
                                width: 14,
                                height: 14,
                                src: "/assests/Black/UnfriendUser.svg"
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Unfriend ",
                                    UserData?.name ? UserData?.name : ""
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_Model_Models_CancelRequestModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    data: Credentials,
                    isOpen: isCancelModalOpen,
                    onClose: closeCancelModal
                })
            ]
        });
    };
    const renderSection = ()=>{
        switch(Section){
            case "sent":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SecntSection, {});
            case "accepted":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AcceptedSection, {});
            default:
                return "";
        }
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
                    children: darkMode ? _utils_icons_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.more.dark : _utils_icons_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.more.light
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Popover, {
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
                    className: `flex flex-col items-center bg-[#FFF] rounded-[10px] w-[220px] h-[full] pb-[10px] `,
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                    onClick: handleCopyURL,
                                    style: Text3,
                                    className: "cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                renderSection()
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
                isOpen: isModalOpen,
                onClose: closeModal,
                data: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal,
                ReportData: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;