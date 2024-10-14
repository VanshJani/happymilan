"use strict";
exports.id = 4457;
exports.ids = [4457];
exports.modules = {

/***/ 64457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




function RecordingInput({ recordingDuration, HanldeVoiceChat, handleStopVoice }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                backgroundColor: "#FFF"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                fullWidth: true,
                direction: "row",
                sx: {
                    border: "1px solid #DADADA",
                    borderRadius: "25px",
                    paddingBottom: "8px",
                    paddingTop: "8px",
                    background: "#FFF"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        sx: {
                            marginLeft: "20px"
                        },
                        className: "animate-pulse",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "12",
                            height: "16",
                            viewBox: "0 0 12 16",
                            fill: "none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M5.89474 10.1053C7.29263 10.1053 8.41263 8.97684 8.41263 7.57895L8.42105 2.52632C8.42105 1.12842 7.29263 0 5.89474 0C4.49684 0 3.36842 1.12842 3.36842 2.52632V7.57895C3.36842 8.97684 4.49684 10.1053 5.89474 10.1053ZM10.3579 7.57895C10.3579 10.1053 8.21895 11.8737 5.89474 11.8737C3.57053 11.8737 1.43158 10.1053 1.43158 7.57895H0C0 10.4505 2.29053 12.8253 5.05263 13.2379V16H6.73684V13.2379C9.49895 12.8337 11.7895 10.4589 11.7895 7.57895H10.3579Z",
                                fill: "#FF0000"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "p",
                        sx: {
                            display: "grid",
                            width: "50px",
                            placeItems: "center",
                            paddingLeft: "10px",
                            position: "relative",
                            top: "1px"
                        },
                        children: [
                            "0:",
                            recordingDuration
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        sx: {
                            marginRight: "auto",
                            position: "absolute",
                            right: "100px"
                        },
                        className: "   w-[35px] h-[35px]",
                        onClick: handleStopVoice,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            width: 30,
                            height: 30,
                            alt: "stop",
                            src: "/assests/chat/stop-red-icon.png"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordingInput);


/***/ })

};
;