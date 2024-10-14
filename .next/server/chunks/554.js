"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 70554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__]);
_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function ProfileImage({ size }) {
    const [token, settoken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [isDataFetched, setIsDataFetched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_8__/* .useSocket */ .s)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        settoken(token);
        if (!isDataFetched) {
            dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__/* .fetchMyProfileData */ .di)());
            setIsDataFetched(true);
        }
    }, []);
    const { data, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile);
    if (!isDataFetched) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
                variant: "circular",
                alt: "userProfile",
                width: size,
                height: size,
                style: {
                    height: "45px",
                    width: "45px"
                },
                className: " rounded-[50%] mt-[5px] lg:mt-0 w-[47px] h-[47px]"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: data?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                    alt: "userProfile",
                    loading: "lazy",
                    quality: 45,
                    width: 0,
                    height: 0,
                    style: {
                        height: size,
                        width: size,
                        objectFit: "cover"
                    },
                    className: " rounded-[50%] mt-[5px] lg:mt-0 w-[47px] h-[47px]",
                    src: data.profilePic
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                name: (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userName"),
                size: size,
                round: true
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
            name: (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userName"),
            size: size,
            round: true
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;