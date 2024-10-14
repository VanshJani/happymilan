"use strict";
exports.id = 3152;
exports.ids = [3152];
exports.modules = {

/***/ 43152:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52419);
/* harmony import */ var _common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70554);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatElement__WEBPACK_IMPORTED_MODULE_3__, _common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_4__]);
([_ChatElement__WEBPACK_IMPORTED_MODULE_3__, _common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Chats = ({ toggleInnerDrawer, HandleWide })=>{
    const [token, settoken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [Uname, SetUname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if ((0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("userName")) {
            SetUname((0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("userName"));
        } else {
            SetUname("NA");
        }
        settoken((0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("authtoken"));
    }, []);
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
    //     color: #000;
    // text-align: center;
    // font-family: Poppins;
    // font-size: 18px;
    // font-style: normal;
    // font-weight: 400;
    // line-height: normal;
    const MessageText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const MessageText2 = {
        color: "#9E9E9E",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_8__/* .getAcceptedRequestData */ .VS)());
    }, []);
    const FriendeLists = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.usersact.acceptedrequestdata);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                position: "relative",
                width: 330,
                backgroundColor: "#FFF",
                paddingLeft: "4px",
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                p: 2,
                spacing: 2,
                sx: {
                    height: "100vh"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        spacing: 2,
                        sx: {
                            paddingLeft: "10px",
                            marginTop: "-90px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    size: 47
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                spacing: 0,
                                style: {
                                    position: "relative",
                                    top: "2px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        style: UserName,
                                        children: token ? Uname : "Please Login"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: ActiveText,
                                        children: "Online"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: HandleWide,
                                    className: "absolute right-6 pt-[5px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hover:bg-[#F2F7FF] w-[35px] h-[35px] grid place-items-center rounded-full ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M4 20V13H5V18.3115L18.3115 5H13V4H20V11H19V5.68848L5.68848 19H11V20H4Z",
                                                fill: "black"
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        className: "pt-[0px] relative left-[-20px]",
                        sx: {
                            width: "330px"
                        }
                    }),
                    FriendeLists?.acceptedUsers?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                p: 1,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "Search Member",
                                            className: "pl-[20px] w-[100%] h-[40px] oultine-none focus:outline-none text-[black] border-[1px] focus:border-[#000] border-[#E3E3E3] hover:border-[#000] rounded-[20px]  text-[#727272]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hover:bg-[#F2F7FF] h-[30px] w-[30px] rounded-[100%] absolute top-[105px] mt-[4px] right-8 ml-[5px] grid place-items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                width: 14,
                                                height: 14,
                                                alt: "search",
                                                src: "/assests/dashboard/icon/Search-grad.svg",
                                                loading: "lazy"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                id: "Chat-scroll-bar",
                                className: "scrollbar",
                                p: 1,
                                spacing: 0,
                                direction: "column",
                                sx: {
                                    flexGrow: 1,
                                    overflow: "scroll",
                                    height: "100%"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    spacing: 1.5,
                                    className: "mt-[-5px]",
                                    children: FriendeLists?.acceptedUsers?.map((el, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatElement__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            toggleInnerDrawer: toggleInnerDrawer,
                                            ...el.friendList
                                        }, index);
                                    })
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full grid place-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center space-y-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid place-items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            width: 0,
                                            height: 0,
                                            alt: "chat-icon",
                                            src: "/assests/dashboard/chats/chat-icon-grad.svg",
                                            style: {
                                                height: "44px",
                                                width: "47px"
                                            },
                                            loading: "lazy"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: MessageText,
                                                className: "pb-[5px]",
                                                children: "No messages"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: MessageText2,
                                                children: "New messages will appear here."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chats);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;