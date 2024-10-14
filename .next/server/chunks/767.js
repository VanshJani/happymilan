"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 30767:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50228);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55395);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45687);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__]);
_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function MoreSuggestion() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_5__/* .useDarkMode */ .v)();
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.alluser?.MoreSuggestion);
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const handleLoadMoreUsers = ()=>{
        if (data?.data?.[0]?.currentPage === data?.data?.[0]?.totalPages) {
            setPage(1);
        } else {
            setPage((prev)=>prev + 1);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__/* .FetchMoreSuggestiondata */ .z2)({
            page: page
        }));
    }, [
        setPage,
        page
    ]);
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const handleRequestModal = async (user)=>{
        try {
            await dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_7__/* .sendRequest */ ["if"])(user._id));
            setsentRequest((prevState)=>({
                    ...prevState,
                    [user._id]: !prevState[user._id]
                }));
            if (!sentrequest[user._id]) {
                setshortlistText(`You sent a request to ${user?.name}`);
                setopenShortlistModal(true);
            } else {
                setshortlistText("Request Removed..");
                setopenShortlistModal(true);
            }
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
        } catch (error) {
            console.error("Error sending request:", error);
        }
    };
    const LikeUserBtn = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ RequestStatus, requestId, handleRequestModal })=>{
        const [onHover, setOnHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                onMouseEnter: ()=>setOnHover(true),
                onMouseLeave: ()=>setOnHover(false),
                onClick: handleRequestModal,
                quality: 25,
                loading: "lazy",
                alt: "suggestion",
                width: 27,
                height: 27,
                src: requestId || RequestStatus?.status === "requested" || RequestStatus?.status === "accepted" ? "/assests/common/suggestion-mark-icon.svg" : onHover ? "/assests/dashboard/icon/send-icon-2.svg" : "/assests/gridSection/Grid-before-sent.svg"
            })
        });
    });
    const Text7 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Text8 = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const RequestBox = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-[20px] 2xl:w-[300px] xl:w-[280px] h-full bg-[#FFF] dark:bg-[#242526]",
        style: RequestBox,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: Text8,
                className: "text-[#000] dark:text-[#FFF]",
                children: "More Suggestion"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-[25px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex flex-col space-y-[22px]",
                            children: loading ? [
                                1,
                                2,
                                3
                            ].map((res, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-between items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-[20px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                                                        variant: "circular",
                                                        animation: "wave",
                                                        className: "rounded-[50%] animate-pulse",
                                                        style: {
                                                            height: "42px",
                                                            width: "40px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover"
                                                        },
                                                        width: 42,
                                                        height: 42,
                                                        alt: "request-1"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-[2px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                                                            variant: "h3",
                                                            className: "w-[100px] h-[20px]",
                                                            style: Text7,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Rohan Patel"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                                                            variant: "h4",
                                                            className: "h-[18px]",
                                                            style: Text7
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                                                            variant: "h4",
                                                            className: "h-[15.5px]",
                                                            style: Text7
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, index)) : (data?.data?.[0]?.paginatedResults?.map((res, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex space-x-[20px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: res?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            href: `/longterm/dashboard/${res._id}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                quality: 40,
                                                                loading: "lazy",
                                                                className: "rounded-[50%] hover:opacity-90 duration-100",
                                                                style: {
                                                                    height: "42px",
                                                                    width: "40px",
                                                                    borderRadius: "50%",
                                                                    objectFit: "cover"
                                                                },
                                                                width: 42,
                                                                height: 42,
                                                                alt: "request-1",
                                                                src: res.profilePic
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            name: res?.name,
                                                            round: true,
                                                            size: "42"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                href: `/longterm/dashboard/${res._id}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "text-[#000] dark:text-[#FFF] hover:opacity-75 duration-100",
                                                                    style: Text7,
                                                                    children: res.name
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                className: "text-[#000] dark:text-[#FFF]",
                                                                style: Text8,
                                                                children: [
                                                                    res?.gender === "male" ? "M" : res?.gender === "female" ? "F" : "NA",
                                                                    ", 29, ",
                                                                    res?.userProfessional ? res?.userProfessional?.jobTitle : "NA"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                className: "text-[#AEAEAE] dark:text-[#FFF]",
                                                                style: Text8,
                                                                children: [
                                                                    res?.address ? res?.address?.currentCity : "NA",
                                                                    ", ",
                                                                    res?.address ? res?.address?.currentCountry : "NA"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LikeUserBtn, {
                                                requestId: sentrequest[res?._id],
                                                handleRequestModal: ()=>handleRequestModal(res),
                                                user: res,
                                                RequestStatus: res?.friendsDetails
                                            })
                                        ]
                                    })
                                }, res._id)))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            id: darkMode ? "Gradient-btn-2" : "",
                            onClick: handleLoadMoreUsers,
                            disabled: loading,
                            className: `${darkMode ? "" : "border-[1px] border-[#8225AF]"} hover:bg-[#F3F8FF] mt-[20px] w-[100%] h-[40px] rounded-[22px] text-[#000] dark:text-[#FFF]`,
                            children: loading ? "Loading..." : "Load More"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreSuggestion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;