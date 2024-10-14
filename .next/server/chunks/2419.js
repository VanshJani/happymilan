"use strict";
exports.id = 2419;
exports.ids = [2419];
exports.modules = {

/***/ 52419:
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
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53941);
/* harmony import */ var _components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_4__, _components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_5__]);
([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_4__, _components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






//single chat element
const ChatElement = ({ toggleInnerDrawer, isUserActive, id, _id, name, profilePic })=>{
    const Username2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Activity2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const userStatus = {
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_4__/* .UserContext */ .S);
    const [selectedUser, SetSelectedUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const CurrentChatUser = id || _id;
        SetSelectedUser(CurrentChatUser);
    }, [
        userData,
        updateUser,
        selectedUser,
        SetSelectedUser
    ]);
    const HandleOpenChat = ()=>{
        if (toggleInnerDrawer) {
            const thedata = {
                userName: name,
                profilePic: profilePic,
                ActiveUser: isUserActive,
                id: id || _id
            };
            SetSelectedUser(thedata.id);
            toggleInnerDrawer();
            updateUser(thedata);
        } else {
            const thedata = {
                userName: name,
                profilePic: profilePic,
                ActiveUser: isUserActive,
                id: id || _id
            };
            SetSelectedUser(thedata.id);
            updateUser(thedata);
        }
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            width: "100%",
            borderRadius: 1
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                spacing: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        borderRadius: "40.5px"
                    },
                    onClick: HandleOpenChat,
                    className: `${userData?.id == selectedUser ? "bg-[#F4F9FF]" : ""} z-100  hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center`,
                    children: [
                        profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            overlap: "circular",
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            },
                            variant: "dot",
                            invisible: !isUserActive,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                alt: "img",
                                width: 47,
                                height: 47,
                                className: " w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]",
                                style: {
                                    objectFit: "cover",
                                    borderRadius: "50%"
                                },
                                src: profilePic,
                                loading: "lazy"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_StyleBadge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            overlap: "circular",
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            },
                            variant: "dot",
                            invisible: !isUserActive,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-[#F8FBFF] grid place-items-center",
                                style: {
                                    height: "44px",
                                    width: "44px",
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
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    style: Username2,
                                    children: [
                                        name,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: userStatus,
                                            className: "text-[#A7A7A7] ml-[5px]",
                                            children: "1h ago"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Activity2,
                                    className: "text-[12px] 2xl:text-[11px] xl:text-[10px]",
                                    children: " Hi, I am busy now. Can I talk..."
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatElement);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;