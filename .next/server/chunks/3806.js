"use strict";
exports.id = 3806;
exports.ids = [3806];
exports.modules = {

/***/ 3806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CelebratingModal({ isOpen, onClose, title }) {
    const Heading = {
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: "normal",
        fontStyle: "normal",
        textAlign: "center"
    };
    const Text = {
        fontFamily: "Poppins",
        fontWeight: "400",
        lineHeight: "normal",
        fontStyle: "normal",
        letterSpacing: "0px",
        textAlign: "center"
    };
    const backgroundImageUrl = 'url("/assests/common/Celebration-bg.svg")';
    const divStyle = {
        backgroundImage: backgroundImageUrl,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "14px 14px 0 0"
    };
    const ContentObj = [
        {
            id: 1,
            Title: "Explore Matches",
            content: "Boost your profile by sharing more about yourself, your interests, and your ideal partner. A detailed profile improves your chances of finding the perfect match"
        },
        {
            id: 2,
            Title: "Stay Safe and Secure",
            content: "Your privacy is our priority. Take advantage of our security features, and be assured that your information is in safe hands"
        },
        {
            id: 3,
            Title: "Complete Your Profile",
            content: "Your privacy is our priority. Take advantage of our security features, and be assured that your information is in safe hands"
        }
    ];
    const [currentContentIndex, setCurrentContentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleNext = ()=>{
        if (currentContentIndex < ContentObj.length - 1) {
            setCurrentContentIndex(currentContentIndex + 1);
        }
    };
    const handlePrev = ()=>{
        if (currentContentIndex > 0) {
            setCurrentContentIndex(currentContentIndex - 1);
        }
    };
    const BtnText = {
        fontFamily: "Poppins",
        fontWeight: "400",
        lineHeight: "normal",
        fontStyle: "normal",
        letterSpacing: "0px",
        textAlign: "center",
        opacity: currentContentIndex === ContentObj.length - 1 ? "" : "0.30"
    };
    const CongratsText = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed inset-0 flex items-center justify-center",
            style: {
                zIndex: 9999
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-black opacity-50"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "z-[50] 2xl:w-[450px] 2xl:h-[516px] xl:w-[350px] xl:h-[400px] bg-[#FFF] rounded-[14px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: divStyle,
                            className: "2xl:w-[450px] xl:w-[350px] 2xl:h-[111px] xl:h-[80px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid place-items-center w-full h-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            alt: "celebration-gif",
                                            className: "noImage-select",
                                            src: "/assests/animation/celebration-animation.gif"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[18px] noImage-select",
                                        style: CongratsText,
                                        children: "Congratulations"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid place-items-center 2xl:space-y-[50px] xl:space-y-[30px] lg:space-y-[50px] 2xl:mt-[40px] xl:mt-[30px] lg:mt-[50px]",
                            id: "content-of-modal",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "2xl:text-[24px] xl:text-[20px] lg:text-[24px]",
                                        style: Heading,
                                        children: ContentObj[currentContentIndex].Title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center 2xl:w-[357px] xl:w-[300px] lg:w-[357px] h-[84px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[14px] 2xl:text-[14px] xl:text-[12px] lg:text-[14px]",
                                        style: Text,
                                        children: ContentObj[currentContentIndex].content
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-x-[20px] flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${currentContentIndex == 0 ? "bg-[#8225AF]" : "bg-[#E8E8E8]"} w-[42px] h-[1px]`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${currentContentIndex == 1 ? "bg-[#8225AF]" : "bg-[#E8E8E8]"} w-[42px] h-[1px]`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${currentContentIndex == 2 ? "bg-[#8225AF]" : "bg-[#E8E8E8]"} w-[42px] h-[1px]`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between  w-full items-center pl-[30px] pr-[30px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[50px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handlePrev,
                                                children: currentContentIndex > 0 ? "Prev" : ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[130px] 2xl:w-[130px] xl:w-[110px] 2xl:h-[60px] xl:h-[40px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: onClose,
                                                disabled: currentContentIndex != ContentObj.length - 1,
                                                id: "grad-button",
                                                style: BtnText,
                                                className: "text-[16px] xl:w-[100px] xl:h-[40px] 2xl:w-[120px] 2xl:h-[50px] w-[120px] h-[50px] rounded-[25px]",
                                                children: "Let’s do it"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[50px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handleNext,
                                                children: currentContentIndex < ContentObj.length - 1 ? "Next" : ""
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CelebratingModal);


/***/ })

};
;