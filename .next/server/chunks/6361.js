exports.id = 6361;
exports.ids = [6361];
exports.modules = {

/***/ 67140:
/***/ ((module) => {

// Exports
module.exports = {
	"BoldText": "styles_BoldText__i118R",
	"ProfileName": "styles_ProfileName__WE2tm",
	"statusText": "styles_statusText__TePbS",
	"slidePage": "styles_slidePage__vkx2k",
	"slideIn": "styles_slideIn__X1igL",
	"ChatSidebar": "styles_ChatSidebar__1qt_q",
	"container": "styles_container__Ae1kQ",
	"sidebar": "styles_sidebar__fuE3V",
	"chatRoom": "styles_chatRoom__rW2mr",
	"customscrollbar": "styles_customscrollbar__l9xeE",
	"seting-plans-text": "styles_seting-plans-text__fQCMf",
	"imageWrapper": "styles_imageWrapper__CQsSd"
};


/***/ }),

/***/ 26361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67140);
/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




function SendRequestBtn({ Requeststatus, RequestId, HandleRequestModal }) {
    const BoldText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const RequestText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Requeststatus?.status === "accepted" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex space-x-[10px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: `${(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().BoldText)} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`,
                                children: "Accepted"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                loading: "lazy",
                                alt: "accepted",
                                width: 23,
                                height: 23,
                                src: "/assests/dashboard/icon/accepted-right.svg"
                            })
                        })
                    ]
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]",
                        style: BoldText
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        id: RequestId || Requeststatus?.status == "requested" ? "req-sent" : "Req-btn",
                        className: `group hover:opacity-90 w-[134px] h-[40px] rounded-[22px] ${RequestId || Requeststatus?.status == "requested" ? "bg-[#EDEDED] text-[black]" : " hover:text-[#FFF] text-[#000]"}  text-[#000] hover:text-[#FFF]`,
                        style: RequestText,
                        onClick: HandleRequestModal,
                        children: [
                            RequestId || Requeststatus?.status == "requested" ? "Sent" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "flex justify-center space-x-[16px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "group-hover:text-[#FFF]",
                                            children: "Send Request"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "icon-parent",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                class: "theicon",
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
                                    ]
                                })
                            }),
                            " "
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendRequestBtn);


/***/ })

};
;