"use strict";
exports.id = 9996;
exports.ids = [9996];
exports.modules = {

/***/ 49996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const ShowMore = ({ text, userid, maxLength = 100, className = "" })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const toggleShowMore = ()=>{
        router.push(`dashboard/${userid}`);
    };
    const truncatedText = text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px] ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] pr-[10px]",
            children: [
                truncatedText,
                text?.length > maxLength && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "cursor-pointer underline text-[#0F52BA] cursor-pointer",
                    onClick: toggleShowMore,
                    children: "more"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowMore);


/***/ })

};
;