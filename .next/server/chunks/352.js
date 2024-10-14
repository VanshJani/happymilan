exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 60352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45687);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function PhotoGrid({ handleClickOpen }) {
    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const imageStyle = {
        objectFit: "cover"
    };
    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    };
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if (event.keyCode === 37) {
                swiperRef.current.swiper.slidePrev();
            } else if (event.keyCode === 39) {
                swiperRef.current.swiper.slideNext();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const selector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.myprofile);
    const loader = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.usersact.deleteimagedata);
    const [openLogoutModal, setOpenLogoutModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [userdeletedata, SetuserDeleteData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleClickDeleteImageModal = (res)=>{
        setOpenLogoutModal(true);
        SetuserDeleteData(res);
    };
    const handleCloseLogout = ()=>{
        setOpenLogoutModal(false);
    };
    const HandleLogout = (e)=>{
        if (e.target.name != "stay") {
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_8__/* .Deleteimage */ .sS)(userdeletedata));
            setOpenLogoutModal(false);
        }
        setOpenLogoutModal(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            loader.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    pagination: {
                        clickable: true
                    },
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                    ],
                    className: "mySwiper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[381px] w-[300px] grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid place-items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-4 h-4 rounded-full animate-pulse bg-[#a78bfa]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-4 h-4 rounded-full animate-pulse bg-[#a78bfa]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-4 h-4 rounded-full animate-pulse bg-[#a78bfa]"
                                    })
                                ]
                            })
                        })
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    pagination: {
                        clickable: true
                    },
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                    ],
                    className: "mySwiper",
                    ref: swiperRef,
                    children: selector && selector.data && selector.data.userProfilePic && selector.data.userProfilePic.length > 0 ? selector.data.userProfilePic.map((res, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "right-[10px] mt-[10px] z-[10] absolute",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        loading: "lazy",
                                        onClick: ()=>handleClickDeleteImageModal(res),
                                        alt: "delete",
                                        width: 24,
                                        height: 24,
                                        src: "/assests/dashboard/icon/Trash-icon.svg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    style: imageStyle,
                                    onClick: ()=>handleClickOpen(res, index),
                                    alt: "user-images",
                                    className: "space-x-[10px] rounded-[10px] h-[381px] w-[300px] cursor-pointer",
                                    src: res?.url
                                })
                            ]
                        }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            backgroundColor: "#F8FBFF"
                        },
                        className: "h-[381px] w-[300px] grid place-items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid place-items-center space-y-[5px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    loading: "lazy",
                                    alt: "no-found",
                                    width: 34,
                                    height: 34,
                                    src: "/assests/dashboard/icon/Photo-NotFound.svg"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "inline",
                                    style: ImageNotFoundText,
                                    children: "No Photos Found"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Dialog, {
                open: openLogoutModal,
                onClose: handleCloseLogout,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.DialogContent, {
                        className: "text-center w-[400px] mt-[20px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "alert-dialog-description",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: LogoutModalText,
                                children: "Are you sure you want to delete the image?"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-evenly p-[20px] mb-[20px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: HandleLogout,
                                    name: "stay",
                                    id: "grad-button",
                                    className: "rounded-[24px] w-[122px] h-[50px]",
                                    children: "No"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: HandleLogout,
                                    name: "exit",
                                    className: "border-[black] border-[1px] rounded-[24px] w-[122px] h-[50px]",
                                    children: "Yes"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62996:
/***/ (() => {



/***/ }),

/***/ 58722:
/***/ (() => {



/***/ })

};
;