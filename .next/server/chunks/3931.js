"use strict";
exports.id = 3931;
exports.ids = [3931];
exports.modules = {

/***/ 93931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function StoryView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [isHover, SetisHover] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const GotoStory = ()=>{
        router.push("/successstories/story");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative 2xl:w-[715px] xl:w-[635px]  xl:w-[615px] m-[10px] flex justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "p-[5px] relative 2xl:left-[40px] xl:left-[55px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: Text2,
                            className: "text-[16px] text-[#000] dark:text-[#FFF]",
                            children: "Success Stories"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex space-x-[10px] relative right-[50px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onMouseEnter: ()=>SetisHover(true),
                            onMouseLeave: ()=>SetisHover(false),
                            onClick: ()=>router.push("/successstories"),
                            className: "flex items-center space-x-[16px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: Text2,
                                    className: `cursor-pointer text-[16px] dark:text-[#FFF]  ${isHover ? "text-[#000]" : "text-[#BABABA]"}`,
                                    children: "More Stories"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "cursor-pointer",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "8",
                                    height: "14",
                                    viewBox: "0 0 8 14",
                                    fill: "none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z",
                                        fill: isHover ? "#000" : "#E1E1E1"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative 2xl:left-[0px] xl:left-[53px] left-[40px] top-[20px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inline-flex justify-center items-center lg:flex md:justify-center  flex-wrap space-x-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "cursor-pointer",
                                onClick: GotoStory,
                                alt: "story-1",
                                loading: "lazy",
                                width: 197,
                                height: 290,
                                src: "/assests/storySec/stry-1.svg"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "cursor-pointer",
                                onClick: GotoStory,
                                alt: "story-2",
                                loading: "lazy",
                                width: 197,
                                height: 290,
                                src: "/assests/storySec/stry-2.svg"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "cursor-pointer",
                                onClick: GotoStory,
                                alt: "story-3",
                                loading: "lazy",
                                width: 197,
                                height: 290,
                                src: "/assests/storySec/stry-3.svg"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryView);


/***/ })

};
;