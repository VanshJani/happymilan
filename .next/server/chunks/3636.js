"use strict";
exports.id = 3636;
exports.ids = [3636];
exports.modules = {

/***/ 3636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43016);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26642);
/* harmony import */ var _store_matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81174);
/* harmony import */ var _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60820);
/* harmony import */ var _components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_10__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_11__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_10__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import required modules









function SentRequest() {
    const profileStyles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            BoldText: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
            },
            ProfileName: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal"
            },
            statusText: {
                fontFamily: "Poppins",
                fontSize: "8px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "12px"
            },
            Text3: {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            ListText: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px"
            },
            Text4: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "12px"
            },
            Box: {
                borderRadius: "10px",
                background: "#FFF",
                boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
            },
            Urlmodaltext: {
                color: "#000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal"
            },
            ImageNotFoundText: {
                color: "#B3CBF1",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
            }
        }), []);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { userData, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.getsentrequestdata);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Initial fetch
        dispatch((0,_store_matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_10__/* .fetchFriends */ .nm)("ListView", {
            currentPage: 1
        }));
    }, [
        dispatch
    ]);
    if (status == "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: userData?.map((res, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: profileStyles?.Box,
                                    className: `flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[350px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-[15px] w-full ",
                                                children: res?.friend?.userProfilePic && res?.friend?.userProfilePic.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                    pagination: {
                                                        clickable: true
                                                    },
                                                    modules: [
                                                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                    ],
                                                    className: "mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]",
                                                    children: res?.friend?.userProfilePic.slice(0, 3).map((Imageres, theindex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                placeholder: "blur",
                                                                blurDataURL: "data:...",
                                                                alt: `img${theindex + 1}`,
                                                                width: 197,
                                                                height: 258,
                                                                style: {
                                                                    width: "197px",
                                                                    height: "258px",
                                                                    borderRadius: "10px",
                                                                    objectFit: "cover"
                                                                },
                                                                className: "w-[197px] h-[258px]",
                                                                src: Imageres.url,
                                                                loading: "lazy"
                                                            })
                                                        }, theindex))
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundColor: "#F8FBFF",
                                                            width: "197px",
                                                            height: "258px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "grid place-items-center space-y-[5px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    alt: "not-Found",
                                                                    width: 34,
                                                                    height: 34,
                                                                    src: "/assests/dashboard/icon/NotFound-img.svg"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "inline",
                                                                    style: profileStyles?.ImageNotFoundText,
                                                                    children: "No Image"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between  h-[50px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: `/longterm/dashboard/${res.id || res?._id}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                        className: "2xl:text-[20px] xl:text-[15px] text-[15px]",
                                                                        style: profileStyles?.ProfileName,
                                                                        children: res?.friend?.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: profileStyles?.statusText,
                                                                    className: `text-[#7A7A7A]`,
                                                                    children: "Online now"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "pr-[8px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "couple-icon",
                                                                                    width: 17,
                                                                                    height: 14,
                                                                                    src: "/assests/Black/Couple2.svg"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "relative top-[-2px] text-[10px] text-[#000] dark:text-[#FFF]",
                                                                                    style: profileStyles?.Text4,
                                                                                    children: "Match Score"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                width: 15,
                                                                                height: 14,
                                                                                alt: "star",
                                                                                src: "/assests/Black/Stars-2.svg"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                            res: res?.friend,
                                                                            Section: "sent"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "user-card",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                id: "user-card-grid",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                        style: profileStyles?.ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `'32,5'3`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                        style: profileStyles?.ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.friend?.religion || "NA"}, ${res?.friend?.cast || "NA"}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                        style: profileStyles?.ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.friend?.motherTongue || "NA , NA"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                        style: profileStyles?.ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.friend?.maritalStatus || "NA , NA"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                        style: profileStyles?.ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_13__/* .capitalizeFirstLetter */ .f)(res?.friend?.address?.currentCity) || "NA",
                                                                            " , ",
                                                                            (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_13__/* .capitalizeFirstLetter */ .f)(res?.friend?.address?.currentCountry) || "NA"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                        style: profileStyles?.ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_13__/* .capitalizeFirstLetter */ .f)(res?.friend?.userProfessional?.jobTitle) || "NA , NA"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                style: profileStyles?.Text3,
                                                                className: "text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] ",
                                                                children: [
                                                                    res?.friend?.writeBoutYourSelf || "NA",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-[#0F52BA]",
                                                                        children: " more "
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "absolute  bottom-[40px] flex space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "text-[16px] 2xl:text-[16px] xl:text-[14px]",
                                                                    style: profileStyles?.BoldText,
                                                                    children: "Sent"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    alt: "img",
                                                                    width: 23,
                                                                    height: 23,
                                                                    src: "/assests/dashboard/icon/accepted-right.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index)
                        });
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                ProfileData: userData
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SentRequest);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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