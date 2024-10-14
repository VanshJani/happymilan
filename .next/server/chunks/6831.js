"use strict";
exports.id = 6831;
exports.ids = [6831];
exports.modules = {

/***/ 6831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_1__]);
_security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ContactTab = ({ data })=>{
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid place-items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Mobile Number"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: [
                                    "+",
                                    " ",
                                    data && data?.mobileNumber ? data?.mobileNumber && data.mobileNumber : "NA"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Home Number"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: [
                                    "+",
                                    " ",
                                    data && data?.homeMobileNumber ? data?.homeMobileNumber && data.homeMobileNumber : "NA"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Email Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: data && data?.email ? data?.email && data.email : "NA"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactTab));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;