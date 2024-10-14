exports.id = 7611;
exports.ids = [7611];
exports.modules = {

/***/ 67611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Import Swiper styles


// import required modules



function PricingBox2() {
    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const PlanText = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "28px"
    };
    const TabsText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const data = [
        {
            label: "Silver",
            value: "dashboard",
            curval: "dashboard"
        },
        {
            label: "Gold",
            value: "profile",
            curval: "profile"
        },
        {
            label: "Platinum",
            value: "settings",
            curval: "settings"
        }
    ];
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "py-6 dark:bg-gray-800 dark:text-gray-100",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container p-4 mx-auto sm:p-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-12 space-y-4 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Title,
                                className: "text-4xl font-semibold",
                                children: "Hi Riya, Upgrade Your Profile"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pt-[10px] 2xl:pt-[40px] xl:pt-[30px] lg:pt-[20px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-[#F5FAFF] rounded-[25px] w-[300px] h-[40px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        id: currentTab === 1 ? "grad-btn" : "",
                                                        onClick: ()=>setCurrentTab(1),
                                                        className: `cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] h-[40px] ${currentTab === 1 ? "bg-[#0F52BA] text-[white]" : "text-black"} `,
                                                        children: "Silver"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        id: currentTab === 2 ? "grad-btn" : "",
                                                        onClick: ()=>setCurrentTab(2),
                                                        className: `cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] h-[40px] ${currentTab === 2 ? "bg-[#0F52BA] text-[white]" : "text-black"} `,
                                                        children: "Gold"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        id: currentTab === 3 ? "grad-btn" : "",
                                                        onClick: ()=>setCurrentTab(3),
                                                        className: `cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] h-[40px] ${currentTab === 3 ? "bg-[#0F52BA] text-[white]" : "text-black"} `,
                                                        children: "Platinum"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "pricebox-2-main",
                        className: "relative left-[10px] w-full place-items-center grid max-w-md grid-cols-1 gap-6 pt-[0px] auto-rows-fr lg:grid-cols-3 lg:max-w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                pagination: {
                                    clickable: true
                                },
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                ],
                                className: "mySwiper relative w-[300px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        className: "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[280px] flex flex-col overflow-hidden border-[1px] border-[#0F52BA] rounded-[20px] dark:border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center px-2 py-[10px]  space-y-4 dark:bg-gray-800",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            style: PlanText,
                                                            className: "text-lg font-medium text-[#0F52BA]",
                                                            children: [
                                                                "One ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[black]",
                                                                    children: "Month Plan "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: " flex justify-center space-x-[26px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px]",
                                                                    children: "INR 718.00"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]",
                                                                    children: "20% Off"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: Text3,
                                                                    className: "text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]",
                                                                    children: "INR 599.00"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]",
                                                                    children: "Per month INR 200.00"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center relative 2xl:top-0 xl:top-0 lg:top-[10px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[90%] h-[1px] bg-[#EAEAEA]"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "relative right-[10px] self-stretch flex-1 items-center justify-center space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] items-center flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[26px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                            style: Text4,
                                                                            className: "relative right-[16px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: [
                                                                                "Message to",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[#0F52BA]",
                                                                                    children: " 10 Profiles"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] items-center  flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[10px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                            style: Text4,
                                                                            className: "text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: [
                                                                                "Send request to ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[#0F52BA]",
                                                                                    children: "10 Profiles"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] relative right-[43.85px] items-center flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[10px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            style: Text4,
                                                                            className: "text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: "Online Support"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                id: "grad-btn",
                                                                style: TabsText,
                                                                onClick: ()=>router.push("/longterm/dashboard/upgrade/1"),
                                                                className: "relative top-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[20px]",
                                                                children: "Select This Plan"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[280px] flex flex-col overflow-hidden border-[1px] border-[#0F52BA] rounded-[20px] dark:border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center px-2 py-[10px]  space-y-4 dark:bg-gray-800",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            style: PlanText,
                                                            className: "text-lg font-medium text-[#0F52BA]",
                                                            children: [
                                                                "Two ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[black]",
                                                                    children: "Month Plan "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: " flex justify-center space-x-[26px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px]",
                                                                    children: "INR 1079.00"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]",
                                                                    children: "20% Off"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: Text3,
                                                                    className: "text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]",
                                                                    children: "INR 899.00"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]",
                                                                    children: "Per month INR 300.00"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center relative 2xl:top-0 xl:top-0 lg:top-[10px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[90%] h-[1px] bg-[#EAEAEA]"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "relative right-[10px] self-stretch flex-1 items-center justify-center space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] items-center flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[26px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                            style: Text4,
                                                                            className: "relative right-[16px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: [
                                                                                "Message to",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[#0F52BA]",
                                                                                    children: " 10 Profiles"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] items-center  flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[10px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                            style: Text4,
                                                                            className: "text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: [
                                                                                "Send request to ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[#0F52BA]",
                                                                                    children: "10 Profiles"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] relative right-[43.85px] items-center flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[10px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            style: Text4,
                                                                            className: "text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: "Online Support"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                id: "grad-btn",
                                                                style: TabsText,
                                                                onClick: ()=>router.push("/longterm/dashboard/upgrade/1"),
                                                                className: "relative top-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[20px]",
                                                                children: "Select This Plan"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[280px] flex flex-col overflow-hidden border-[1px] border-[#0F52BA] rounded-[20px] dark:border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center px-2 py-[10px]  space-y-4 dark:bg-gray-800",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            style: PlanText,
                                                            className: "text-lg font-medium text-[#0F52BA]",
                                                            children: [
                                                                "Three ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[black]",
                                                                    children: "Month Plan "
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: " flex justify-center space-x-[26px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px]",
                                                                    children: "INR 1319.00"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]",
                                                                    children: "20% Off"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: Text3,
                                                                    className: "text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]",
                                                                    children: "INR 1199.00"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: TabsText,
                                                                    className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]",
                                                                    children: "Per month INR 300.00"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center relative 2xl:top-0 xl:top-0 lg:top-[10px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[90%] h-[1px] bg-[#EAEAEA]"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "relative right-[10px] self-stretch flex-1 items-center justify-center space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] items-center flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[26px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                            style: Text4,
                                                                            className: "relative right-[16px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: [
                                                                                "Message to",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[#0F52BA]",
                                                                                    children: " 30 Profiles"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] items-center  flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[10px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                            style: Text4,
                                                                            className: "text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: [
                                                                                "Send request to ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[#0F52BA]",
                                                                                    children: "30 Profiles"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "w-[300px] relative right-[43.85px] items-center flex justify-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            alt: "verify-tick",
                                                                            width: 14,
                                                                            height: 14,
                                                                            className: "relative right-[10px] w-[14px] h-[14px]",
                                                                            src: "/assests/dashboard/menu/verfied-tick.svg"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            style: Text4,
                                                                            className: "text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                                            children: "Online Support"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                id: "grad-btn",
                                                                style: TabsText,
                                                                onClick: ()=>router.push("/longterm/dashboard/upgrade/1"),
                                                                className: "relative top-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[20px]",
                                                                children: "Select This Plan"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            id: "doItText",
                            style: TabsText,
                            className: "cursor-pointer text-[#0F52BA]  text-[14px]",
                            onClick: ()=>router.back(),
                            children: "I’ll do it later"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingBox2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62996:
/***/ (() => {



/***/ }),

/***/ 58722:
/***/ (() => {



/***/ })

};
;