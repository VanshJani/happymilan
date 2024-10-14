"use strict";
exports.id = 3207;
exports.ids = [3207];
exports.modules = {

/***/ 93207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58797);
/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_share__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2017);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_share__WEBPACK_IMPORTED_MODULE_4__]);
react_share__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ShareModal({ isOpen, onClose, data }) {
    if (!isOpen) return null;
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const SocialText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const Btntext = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const [Copied, IsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(data).then(()=>{
            IsCopied(true);
            setTimeout(()=>{
                IsCopied(false);
            }, 2000);
        }).catch((error)=>console.error("Failed to copy:", error));
    };
    const NewTabOpen = ()=>{
        const url = data;
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed inset-0 flex items-center justify-center z-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-black opacity-50"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl md:h-[80%] lg:h-[359px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:w-[500px] w-full items-center flex  justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "place-items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: " relative 2xl:left-[10px] xl:left-[8px] text-[14px] text-[black]",
                                            style: TitleText,
                                            children: "Share with Friends"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            width: 24,
                                            height: 24,
                                            alt: "close-icon",
                                            className: "cursor-pointer",
                                            onClick: onClose,
                                            loading: "lazy",
                                            src: "/assests/social/close.svg"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-[30px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[520px] gap-y-[20px] gap-x-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "group grid place-items-center space-y-[5px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_1__.WhatsappShareButton, {
                                                        url: data,
                                                        title: "Check out this profile!",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_1__.WhatsappIcon, {
                                                            size: 40,
                                                            style: {
                                                                borderRadius: "50%"
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        style: SocialText,
                                                        className: "text-[12px]  group-hover:text-[black] text-[#a9acb4]",
                                                        children: "Whatsapp"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "group grid place-items-center space-y-[5px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        width: 40,
                                                        height: 40,
                                                        loading: "lazy",
                                                        src: "/assests/social/icons8-messenger.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        style: SocialText,
                                                        className: "text-[12px]  group-hover:text-[black] text-[#a9acb4]",
                                                        children: "Messenger"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "group grid place-items-center space-y-[5px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_4__.FacebookShareButton, {
                                                        url: data,
                                                        title: "Check out this profile!",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon, {
                                                            size: 40,
                                                            style: {
                                                                borderRadius: "50%"
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        style: SocialText,
                                                        className: "text-[12px]  group-hover:text-[black] text-[#a9acb4]",
                                                        children: "Facebook"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "group grid place-items-center space-y-[5px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        width: 35,
                                                        height: 35,
                                                        loading: "lazy",
                                                        src: "/assests/social/icons8-gmail.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        style: SocialText,
                                                        className: "text-[12px]  group-hover:text-[black] text-[#a9acb4]",
                                                        children: "Gmail"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "group grid place-items-center space-y-[5px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_4__.TwitterShareButton, {
                                                        url: `https://happymilanweb.web.app/`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            width: 35,
                                                            height: 35,
                                                            loading: "lazy",
                                                            src: "/assests/social/icons8-twitterx.svg"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        style: SocialText,
                                                        className: "text-[12px]  group-hover:text-[black] text-[#a9acb4]",
                                                        children: "twitterx"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center mt-[35px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full  lg:w-[500px] grid place-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: data,
                                        type: "text",
                                        className: "text-[14px] outline-none border-none bg-[#F7F7F7] rounded-[8px] w-full pr-[80px] pl-[10px]  h-[50px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleCopy,
                                        id: "grad-btn",
                                        class: "relative right-[-210px] top-[-43px] text-[#FFF] dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5  bg-white border-gray-200 border",
                                        children: !Copied ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            id: "default-message",
                                            class: "inline-flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    class: "w-3 h-3 me-1.5",
                                                    "aria-hidden": "true",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#FFF",
                                                    viewBox: "0 0 18 20",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "text-xs font-semibold",
                                                    children: "Copy"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            id: "success-message",
                                            class: " inline-flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    class: "w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5",
                                                    "aria-hidden": "true",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 16 12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        stroke: "#FFF",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M1 5.917 5.724 10.5 15 1.5"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "text-xs font-semibold text-[#FFF] dark:text-blue-500",
                                                    children: "Copied"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "group grid place-items-center mt-[-20px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: Btntext,
                                    // onClick={() => window.open(data, "_blank")}
                                    onClick: NewTabOpen,
                                    className: "w-[500px] h-[50px] border-[1px] group-hover:border-[black] duration-150 border-[#B9BABC] rounded-[10px] bg-[white] outline-none group-hover:text-[#3c41b5]",
                                    children: "Visit page (opens in new tab)"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;