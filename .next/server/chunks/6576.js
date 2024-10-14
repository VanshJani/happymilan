"use strict";
exports.id = 6576;
exports.ids = [6576];
exports.modules = {

/***/ 6576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37069);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79118);
/* harmony import */ var _components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__, _components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_9__]);
([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__, _components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MessageOptions = ({ userData, HandleOpenProfile, OpenReportModal })=>{
    const Message_options = [
        {
            title: "View Profile",
            name: "viewprofile"
        },
        // {
        //     title: "Block",
        //     name: "block"
        // },
        {
            title: "Report User",
            name: "report"
        },
        {
            title: "Star message"
        },
        {
            title: "Report"
        },
        {
            title: "Delete Message"
        }
    ];
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const HanldeEvent = (e)=>{
        switch(e.name){
            case "viewprofile":
                HandleOpenProfile();
                break;
            case "block":
                console.log("block profile");
                break;
            case "report":
                OpenReportModal();
                break;
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "basic-button",
                "aria-controls": open ? "basic-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": open ? "true" : undefined,
                onClick: handleClick,
                alt: "img",
                width: 4,
                height: 16,
                className: "cursor-pointer 2xl:w-auto 2xl:h-auto xl:w-[5px] xl:h-[14px]",
                src: "/assests/dashboard/chats/chat-more-icon.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                id: "basic-menu",
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                MenuListProps: {
                    "aria-labelledby": "basic-button"
                },
                style: {
                    marginLeft: "-25px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    sx: {
                        borderRadius: "20px",
                        padding: "10px"
                    },
                    spacing: 1,
                    px: 1,
                    children: Message_options.slice(0, 2).map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                            name: el?.name,
                            onClick: ()=>HanldeEvent(el),
                            children: el.title
                        }))
                })
            })
        ]
    });
};
const Header = ()=>{
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__/* .useSocket */ .s)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__/* .UserContext */ .S);
    const [userTyping, SetUserTyping] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("authtoken");
    socket?.on("typing", (data)=>{
        // Check if the typing event is for the current user
        if (data.from != currentUser) {
            // Update UI to indicate that the user is typing
            SetUserTyping(true);
        }
    });
    socket?.on("stopTyping", (data)=>{
        SetUserTyping(false);
    // Check if the stopTyping event is for the current user
    });
    const HandleOpenProfile = ()=>{
        router.push(`/longterm/dashboard/${userData?.id}`);
    };
    const ActiveText = {
        color: "#0091FF",
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const UserName = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const ImagenotFound = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "6px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const [isReportModalOpen, setisReportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [UserActive, UserInActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    const OpenReportModal = ()=>{
        setisReportModalOpen(true);
    };
    const CloseReportModal = ()=>{
        setisReportModalOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                p: 2,
                sx: {
                    width: "100%",
                    backgroundColor: "#FFF",
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    alignItems: "center",
                    direction: "row",
                    style: {
                        marginLeft: "5px"
                    },
                    justifyContent: "space-between",
                    sx: {
                        width: "100%",
                        height: "100%"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                className: "cursor-pointer",
                                onClick: HandleOpenProfile,
                                children: userData?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    overlap: "circular",
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    },
                                    variant: "dot",
                                    invisible: !userData?.ActiveUser,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        loading: "lazy",
                                        width: 47,
                                        height: 47,
                                        alt: "profile-image",
                                        style: {
                                            objectFit: "cover",
                                            borderRadius: "50%"
                                        },
                                        className: "w-[47px] h-[47px]",
                                        src: userData?.profilePic
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    overlap: "circular",
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    },
                                    variant: "dot",
                                    invisible: !userData?.ActiveUser,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-[#F8FBFF] grid place-items-center",
                                        style: {
                                            height: "47px",
                                            width: "47px",
                                            borderRadius: "50%",
                                            objectFit: "cover"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                loading: "lazy",
                                                alt: "not-found",
                                                width: 16,
                                                height: 16,
                                                src: "/assests/dashboard/icon/NotFound-img.svg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "relative top-[-5px]",
                                                style: ImagenotFound,
                                                children: "No Image"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                spacing: 0,
                                style: {
                                    position: "relative",
                                    top: "1px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        style: UserName,
                                        children: userData?.userName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: ActiveText,
                                        children: userTyping ? "Typing..." : userData?.ActiveUser ? "Online" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#a6a6a6]",
                                            children: "Offline"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute right-10 mt-[10px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageOptions, {
                                        OpenReportModal: OpenReportModal,
                                        HandleOpenProfile: HandleOpenProfile,
                                        userData: userData
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                className: "mt-[0px] bg-[#e3e3e3]",
                sx: {
                    backgroundColor: "#e3e3e3"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;