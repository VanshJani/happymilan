"use strict";
exports.id = 7965;
exports.ids = [7965];
exports.modules = {

/***/ 97965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61040);
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_razorpay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26642);








function UpgradePage() {
    const Styling = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>({
            TitleText: {
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
            },
            Text1: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            Text2: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal"
            },
            Text3: {
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal"
            },
            Text4: {
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            btnText: {
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            btnText2: {
                fontFamily: "Poppins",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            ListText: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "28px"
            }
        }));
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { loading, data, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.upgradeplans.ChoosedPlan);
    const [Razorpay] = react_razorpay__WEBPACK_IMPORTED_MODULE_5___default()();
    const PayNow = async ()=>{
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        try {
            const response = await axios.post(`${"https://stag.mntech.website/api"}/v1/user/razorpay/order`, {
                planId: data?.id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "true"
                }
            });
            const callbackUrl = `${"https://stag.mntech.website/api"}/v1/user/razorpay/is-order-complete?authToken=${token}&paymentHistoryToken=${response.data.paymentHistoryToken}`;
            const options = {
                key: "rzp_live_2SoKzqAUA6FY69",
                name: "Acme Corp",
                description: "Test Transaction",
                // "order_id": response.data.data.id,
                order_id: response.data.id,
                callback_url: callbackUrl,
                theme: {
                    color: "#3399cc"
                }
            };
            const rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", (response)=>{
                console.log(response.error);
            // Handle payment failure here
            });
            rzp1.open();
        // e.preventDefault();
        } catch (error) {
            // Handle error
            console.log("=== var error ===>", error);
        }
    };
    const SkeletonLoad = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pb-[40px] 2xl:space-y-[30px] xl:space-y-[18px] lg:space-y-[20px] space-y-[10px] w-full h-full grid place-items-center 2xl:mt-[100px] xl:mt-[80px] lg:mt-[70px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-[5px]    2xl:w-[650px] 2xl:h-[435px]   xl:w-[550px] xl:h-[350px]   lg:w-[650px] lg:h-[435px]   w-[650px] h-[435px]   border border-gray-200  shadow animate-pulse md:p-6 dark:border-gray-700   rounded-[18px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] w-full flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pl-[10px] flex flex-col    2xl:space-y-[14px]   xl:space-y-[12px]   lg:space-y-[10px]   space-y-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "h-[11px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[10px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-[10px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "h-[27px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pr-[10px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "h-[25px] bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-[5px]"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pl-[10px]    2xl:space-y-[20px]   xl:space-y-[15px]   space-y-[20px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "space-y-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            style: Styling?.ListText,
                                            className: "2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            style: Styling?.ListText,
                                            className: "2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            style: Styling?.ListText,
                                            className: "2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 "
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pl-[10px] space-y-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "h-[10px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pr-[10px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"
                                })
                            })
                        ]
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "pb-[40px] 2xl:space-y-[30px] xl:space-y-[18px] lg:space-y-[20px] space-y-[10px] w-full h-full grid place-items-center 2xl:mt-[100px] xl:mt-[80px] lg:mt-[70px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        style: Styling?.TitleText,
                        children: "Your Plan Summary"
                    })
                }),
                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkeletonLoad, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-[5px]    2xl:w-[650px] 2xl:h-[435px]   xl:w-[550px] xl:h-[350px]   lg:w-[650px] lg:h-[435px]   w-[650px] h-[435px]   border-[1px] border-[#0F52BA] rounded-[18px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] w-full flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pl-[10px] flex flex-col    2xl:space-y-[14px]   xl:space-y-[12px]   lg:space-y-[10px]   space-y-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px]",
                                            style: Styling?.Text1,
                                            children: [
                                                "Selected Plan",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "2xl:text-[20px] xl:text-[14px] lg:text-[14px] text-[14px]",
                                            style: Styling?.Text2,
                                            children: [
                                                (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(data?.planName),
                                                " :",
                                                " ",
                                                data?.planDuration === "monthly" ? "One Month" : "One Year"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>router.back(),
                                            style: Styling?.btnText2,
                                            className: "cursor-pointer hover:bg-[#F3F8FF] w-[112px] h-[27px] border-[1px] border-[#8225AF] rounded-[25px]",
                                            children: "Change Plan"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pr-[10px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[14px]",
                                        style: Styling?.Text2,
                                        children: [
                                            "INR ",
                                            data?.price,
                                            ".00"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full grid place-items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pl-[10px]    2xl:space-y-[20px]   xl:space-y-[15px]   space-y-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        style: Styling?.Text3,
                                        children: "Benefits You’ll Received"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                style: Styling?.ListText,
                                                className: "2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        alt: "verify-tick",
                                                        width: 14,
                                                        height: 14,
                                                        className: "w-[14px] h-[14px]",
                                                        src: "/assests/dashboard/menu/verfied-tick.svg"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        children: [
                                                            " Message to ",
                                                            data?.allowNumberOfProfile,
                                                            " Profiles"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                style: Styling?.ListText,
                                                className: "2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        alt: "verify-tick",
                                                        width: 14,
                                                        height: 14,
                                                        className: "w-[14px] h-[14px]",
                                                        src: "/assests/dashboard/menu/verfied-tick.svg"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        children: [
                                                            "Send request to ",
                                                            data?.allowNumberOfRequest,
                                                            " Profiles"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                style: Styling?.ListText,
                                                className: "2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        alt: "verify-tick",
                                                        width: 14,
                                                        height: 14,
                                                        className: "w-[14px] h-[14px]",
                                                        src: "/assests/dashboard/menu/verfied-tick.svg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: "Online Support"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full grid place-items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pl-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "2xl:text-[20px] xl:text-[14px] lg:text-[14px] text-[14px]",
                                            style: Styling?.Text2,
                                            children: "You’ll Pay Only"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: Styling?.Text4,
                                            children: "Included All taxes (18% GST)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pr-[10px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[14px]",
                                        style: Styling?.Text2,
                                        children: [
                                            "INR ",
                                            data?.price,
                                            ".00"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        id: "grad-button",
                        style: Styling?.btnText,
                        onClick: PayNow,
                        className: "w-[142px] 2xl:h-[50px] xl:h-[40px] lg:h-[40px] h-[40px] rounded-[25px]",
                        children: "Pay Now"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpgradePage);


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