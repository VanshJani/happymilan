"use strict";
exports.id = 6609;
exports.ids = [6609];
exports.modules = {

/***/ 16609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4115);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledBadge = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Badge)(()=>({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""'
            }
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0
            }
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledBadge);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;