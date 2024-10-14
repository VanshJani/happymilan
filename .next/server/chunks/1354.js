"use strict";
exports.id = 1354;
exports.ids = [1354];
exports.modules = {

/***/ 61354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




function PricingBox({ handleCheckout }) {
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.upgradeplans.plans);
    const Styling = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            TabsText: {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            Text1: {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal"
            },
            Text3: {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal"
            },
            Text4: {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "28px"
            },
            DataNotFoundText: {
                color: "#B3CBF1",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
            }
        }));
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center space-x-[28px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border border-gray-200 rounded-[20px] shadow animate-pulse md:p-6 dark:border-gray-700 space-y-[15px] lg:space-y-[0px] 2xl:space-y-[18px] xl:space-y-[20px] 2xl:h-[397px] xl:h-[340px] xl:w-[240px] 2xl:w-[280px]  lg:w-[200px] lg:h-[290px] w-[280px] h-[397px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-[15px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " flex justify-center space-x-[26px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center h-[20px] p-[15px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center relative 2xl:top-[16px] xl:top-[16px] lg:top-[10px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[226px] 2xl:w-[226px] xl:w-[200px] lg:w-[180px] h-[1px] bg-[#EAEAEA]"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[10px] pt-[18px] 2xl:pt-[18px] xl:pt-[18px] lg:pt-[10px] relative 2xl:left-0 xl:left-[10px] ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center 2xl:space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] 2xl:space-x-[20px] lg:space-x-[0px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] 2xl:space-x-[20px] lg:space-x-[0px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[50px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                        })
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center space-x-[28px]",
            children: [
                data?.map((res, Index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[15px] lg:space-y-[0px] 2xl:space-y-[15px] xl:space-y-[10px] 2xl:h-[397px] xl:h-[340px] xl:w-[240px] 2xl:w-[280px] bg-[#FFF] lg:w-[200px] lg:h-[290px] w-[280px] h-[397px] rounded-[20px] border-[1px] border-[#0F52BA]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                style: Styling?.Text1,
                                className: "mt-[6px] text-[18px] 2xl:text-[18px] xl:text-[18px] lg:text-[12px]  text-[black] pt-[10px] text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#0F52BA]",
                                        children: " One "
                                    }),
                                    res?.planDuration === "yearly" ? "Year" : "Month",
                                    " Plan"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pt-[15px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " flex justify-center space-x-[26px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: Styling?.TabsText,
                                                className: "text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] line-through",
                                                children: "INR 718.00"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                style: Styling?.TabsText,
                                                className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]",
                                                children: [
                                                    res?.discount,
                                                    "% Off"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        style: Styling?.Text3,
                                        className: "text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]",
                                        children: [
                                            "INR ",
                                            res?.price,
                                            ".00"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: Styling?.TabsText,
                                        className: "text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]",
                                        children: "Per month INR 200.00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center relative 2xl:top-[16px] xl:top-[16px] lg:top-[10px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[226px] 2xl:w-[226px] xl:w-[200px] lg:w-[180px] h-[1px] bg-[#EAEAEA]"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pt-[18px] 2xl:pt-[18px] xl:pt-[18px] lg:pt-[10px] relative 2xl:left-0 xl:left-[10px] ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-center 2xl:space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                loading: "lazy",
                                                alt: "verify-tick",
                                                width: 14,
                                                height: 14,
                                                className: "2xl:w-[14px] 2xl:h-[14px] xl:w-[14px] xl:h-[14px] lg:w-[12px] lg:h-[12px] w-[14px] h-[14px]  relative 2xl:top-0 xl:top-0 lg:top-[5px]",
                                                src: "/assests/dashboard/menu/verfied-tick.svg"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                style: Styling?.Text4,
                                                className: "2xl:w-[185px] xl:w-[185px] lg:w-[150px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                children: [
                                                    "Message to",
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-[#0F52BA]",
                                                        children: [
                                                            res.allowNumberOfProfile,
                                                            " Profiles"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] 2xl:space-x-[20px] lg:space-x-[0px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                loading: "lazy",
                                                alt: "verify-tick",
                                                width: 14,
                                                height: 14,
                                                className: "2xl:w-[14px] 2xl:h-[14px] xl:w-[14px] xl:h-[14px] lg:w-[12px] lg:h-[12px] w-[14px] h-[14px]  relative 2xl:top-0 xl:top-0 lg:top-[5px]",
                                                src: "/assests/dashboard/menu/verfied-tick.svg"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                style: Styling?.Text4,
                                                className: "2xl:w-[185px] xl:w-[185px] lg:w-[150px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                children: [
                                                    "Send request to",
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-[#0F52BA]",
                                                        children: [
                                                            res.allowNumberOfRequest,
                                                            " Profiles"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] 2xl:space-x-[20px] lg:space-x-[0px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                loading: "lazy",
                                                alt: "verify-tick",
                                                width: 14,
                                                height: 14,
                                                className: "2xl:w-[14px] 2xl:h-[14px] xl:w-[14px] xl:h-[14px] lg:w-[12px] lg:h-[12px] w-[14px] h-[14px]  relative 2xl:top-0 xl:top-0 lg:top-[5px]",
                                                src: "/assests/dashboard/menu/verfied-tick.svg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                style: Styling?.Text4,
                                                className: "2xl:w-[185px] xl:w-[185px] lg:w-[150px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]",
                                                children: "Online Support"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "grad-btn",
                                style: Styling?.TabsText,
                                onClick: ()=>handleCheckout({
                                        id: 1,
                                        res: res,
                                        amount: res.price,
                                        planId: res.id
                                    }),
                                className: "relative 2xl:top-[15px] xl:top-[10px] lg:top-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[23px]",
                                children: "Select This Plan"
                            })
                        ]
                    }, Index);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${data?.length === 0 ? "" : "hidden"} h-[40vh] grid place-items-center`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[10px] grid place-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                alt: "not-found",
                                width: 34,
                                height: 34,
                                src: "/assests/dashboard/icon/NotFound-img.svg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: Styling?.DataNotFoundText,
                                children: "No Data Found"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingBox);


/***/ })

};
;