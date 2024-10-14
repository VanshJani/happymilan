"use strict";
exports.id = 7818;
exports.ids = [7818];
exports.modules = {

/***/ 77818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26642);
/* harmony import */ var _security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_2__]);
_security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function LocationTab({ data }) {
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
                className: "w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Current Residing Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: data && data.address?.currentResidenceAddress ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_3__/* .capitalizeFirstLetter */ .f)(data?.address?.currentResidenceAddress) : "NA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[14px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Current City"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: data && data.address?.currentCity ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_3__/* .capitalizeFirstLetter */ .f)(data?.address?.currentCity) : "NA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Current Residing Country"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: data && data.address?.currentCountry ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_3__/* .capitalizeFirstLetter */ .f)(data?.address?.currentCountry) : "NA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Text2,
                                className: "2xl:text-[14px] xl:text-[12px] text-[12px]",
                                children: "Permanent Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Text5,
                                className: "2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                children: "NA"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationTab));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
// src/utils/capitalize.js
const capitalizeFirstLetter = (string)=>{
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};


/***/ })

};
;