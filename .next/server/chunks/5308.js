"use strict";
exports.id = 5308;
exports.ids = [5308];
exports.modules = {

/***/ 65308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Accordion({ title, children }) {
    const [accordionOpen, setAccordionOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: ()=>setAccordionOpen(!accordionOpen),
        className: "list-none group w-[full] h-[full] border-[1px] hover:border-[#000] border-[#ECECEC] rounded-[18px] pr-[20px] pl-[20px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-[20px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>setAccordionOpen(!accordionOpen),
                    className: "flex justify-between w-full items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: title
                        }),
                        accordionOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `opacity-50  group-hover:opacity-100 transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`,
                            width: 14,
                            height: 14,
                            alt: "plus",
                            src: "/assests/animation/minus-img.png"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `opacity-50 group-hover:opacity-100 transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`,
                            width: 14,
                            height: 14,
                            alt: "plus",
                            src: "/assests/animation/plus-img.png"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100 mt-[30px]" : "grid-rows-[0fr] opacity-0"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-hidden",
                        children: children
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ })

};
;