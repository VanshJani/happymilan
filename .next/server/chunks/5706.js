"use strict";
exports.id = 5706;
exports.ids = [5706];
exports.modules = {

/***/ 65706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79118);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55395);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45687);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_4__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_5__]);
([_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_4__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function GridLikeUser({ theUserName, currentPage, from, user, RequestId, HandleRequestModal, RequestedStatus, userLikeDetails }) {
    const [isUserLiked, setIsUserLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isUsershortlist, setisUsershortlist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(userLikeDetails?.isLike); // Initial state comes from props
    const [isDisliked, setIsDisliked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!userLikeDetails?.isLike);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_4__/* .useSocket */ .s)();
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const handleLikeClick = ()=>{
        setIsUserLiked(!isUserLiked);
        // Toggle like state
        if (!isLiked) {
            setIsLiked(true);
            setIsDisliked(false);
            socket?.emit("createUserLike", {
                "userId": userLikeDetails?.user,
                "likedUserId": userLikeDetails?.likedUserId
            });
            setshortlistText(`You Liked ${theUserName}'s profile.`);
            setopenShortlistModal(true);
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
            dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_5__/* .CreateLikeUser */ .EG)({
                userId: user?.id,
                status: true
            }));
            setTimeout(()=>{
                dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__/* .Getlikeduserdata */ .B2)());
                if (from == "GridProfile") {
                    dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__/* .FetchGriduserdata */ .F7)(currentPage));
                } else {
                    dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__/* .GetrecentuserprofileData */ .SP)());
                }
            }, 3000);
        } else {}
    };
    const handleDislikeUser = ()=>{
        if (!isDisliked) {
            setIsLiked(false);
            setIsDisliked(true);
            socket?.emit("updateUserLike", {
                "userId": userLikeDetails?.user,
                "likedUserId": userLikeDetails?.likedUserId,
                "isLike": false
            });
            setshortlistText(`You disliked ${theUserName}'s profile.`);
            setopenShortlistModal(true);
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
            setTimeout(()=>{
                dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__/* .Getlikeduserdata */ .B2)());
                if (from == "GridProfile") {
                    dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__/* .FetchGriduserdata */ .F7)(currentPage));
                } else {
                    dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_6__/* .GetrecentuserprofileData */ .SP)());
                }
            }, 3000);
            setIsUserLiked(false);
        }
    };
    const HandleShortlist = ()=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_5__/* .addToShortlist */ .q9)(user?._id));
        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
    };
    const [OnHover, SetOnHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        LikeHover: false,
        DislikeHover: false,
        SentRequestHover: false
    });
    if (from == "UserProfile") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-[20px] pb-[10px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex space-x-[15px] justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            onClick: handleDislikeUser,
                            onMouseEnter: ()=>SetOnHover({
                                    DislikeHover: true
                                }),
                            onMouseLeave: ()=>SetOnHover({
                                    DislikeHover: false
                                }),
                            loading: "lazy",
                            alt: "ignore",
                            width: 40,
                            height: 40,
                            className: "cursor-pointer w-[40px] h-[40px]",
                            src: !isDisliked ? "/assests/gridSection/afterDislikeUser.svg" : OnHover.DislikeHover ? "/assests/gridSection/afterDislikeUser.svg" : "/assests/dashboard/icon/ignore-icon-2.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            onClick: handleLikeClick,
                            onMouseEnter: ()=>SetOnHover({
                                    LikeHover: true
                                }),
                            onMouseLeave: ()=>SetOnHover({
                                    LikeHover: false
                                }),
                            loading: "lazy",
                            alt: "like",
                            width: 40,
                            height: 40,
                            className: "cursor-pointer w-[40px] h-[40px]",
                            src: isLiked ? "/assests/animation/After-Like.svg" : OnHover.LikeHover ? "/assests/animation/After-Like.svg" : "/assests/dashboard/icon/heart-icon-2.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            onClick: HandleShortlist,
                            // onClick={() => toggleDrawer('right', true)}
                            onMouseEnter: ()=>SetOnHover({
                                    shortlisthover: true
                                }),
                            onMouseLeave: ()=>SetOnHover({
                                    shortlisthover: false
                                }),
                            loading: "lazy",
                            alt: "like",
                            width: 40,
                            height: 40,
                            className: "cursor-pointer w-[40px] h-[40px]",
                            src: isUsershortlist ? "/assests/dashboard/icon/shortlist-after-icon.svg" : OnHover.shortlisthover ? "/assests/dashboard/icon/shortlist-after-icon.svg" : "/assests/dashboard/icon/shortlist-before-icon.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            onClick: HandleRequestModal,
                            onMouseEnter: ()=>SetOnHover({
                                    SentRequestHover: true
                                }),
                            onMouseLeave: ()=>SetOnHover({
                                    SentRequestHover: false
                                }),
                            loading: "lazy",
                            alt: "send",
                            width: 40,
                            height: 40,
                            className: "cursor-pointer w-[40px] h-[40px]",
                            src: RequestId ? "/assests/dashboard/icon/send-icon-2.svg" : OnHover.SentRequestHover ? "/assests/dashboard/icon/send-icon-2.svg" : "/assests/gridSection/Grid-before-sent.svg"
                        })
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex space-x-[15px] justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: userLikeDetails?.isLike ? handleDislikeUser : handleLikeClick,
                            className: userLikeDetails?.isLike ? "Liked-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px] bg-[#9E28D7] " : "Like-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                class: userLikeDetails?.isLike ? "after-like-icon" : "the-like-icon",
                                width: "20",
                                height: "18",
                                viewBox: "0 0 20 18",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M10.1914 17.8002L8.80064 16.5341C3.86113 12.055 0.600098 9.1009 0.600098 5.4754C0.600098 2.52129 2.92119 0.200195 5.8753 0.200195C7.54418 0.200195 9.14593 0.977089 10.1914 2.20477C11.2368 0.977089 12.8386 0.200195 14.5075 0.200195C17.4616 0.200195 19.7827 2.52129 19.7827 5.4754C19.7827 9.1009 16.5216 12.055 11.5821 16.5437L10.1914 17.8002Z"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "right-swipe-icon w-[63px] h-[40px] grid place-items-center border-[1px] border-[#7045EB] rounded-[22px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                class: "right-swipe",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 18 18",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    id: "Vector",
                                    d: "M17.0949 7.89531C16.9607 7.81951 1.67321 0.142507 1.53128 0.0793316C1.33 -0.01164 0.973874 -0.026802 0.733877 0.0464809C0.460334 0.132399 0.150661 0.42553 0.0603392 0.68581C-0.00933631 0.880387 -0.0196587 1.17857 0.0345332 1.35293C0.0577595 1.41611 0.767426 2.82363 1.61128 4.48387L3.14932 7.49605L3.39447 7.53901C4.92219 7.80687 10.3802 8.7747 10.4266 8.78481C10.5092 8.80503 10.726 8.76459 6.88087 9.43172C4.96348 9.76275 3.34286 10.0458 3.27836 10.0584C3.16223 10.0812 3.15964 10.0837 1.62418 13.0883C0.780328 14.7435 0.0680802 16.1586 0.0422758 16.2293C-0.0196594 16.4163 -0.0119176 16.7069 0.0603392 16.9141C0.15066 17.1744 0.460333 17.4676 0.733877 17.5535C0.973873 17.6268 1.33 17.6117 1.53128 17.5206C1.61386 17.4853 5.14413 15.7163 9.37631 13.5937C16.7052 9.91437 17.0819 9.72232 17.2653 9.54291C17.5826 9.23714 17.6756 8.86314 17.5387 8.46642C17.4692 8.26677 17.2472 7.9787 17.0949 7.89531Z"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridLikeUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;