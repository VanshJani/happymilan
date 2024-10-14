"use strict";
exports.id = 4275;
exports.ids = [4275];
exports.modules = {

/***/ 34275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96331);
/* harmony import */ var _components_common_Features_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11443);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26642);
/* harmony import */ var _components_common_animation_GridSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_4__]);
_store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function GridUserProfile() {
    const profileStyles = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            ProfileName: {
                color: "#000",
                fontFamily: "Poppins",
                fontWeight: "600",
                lineHeight: "normal"
            },
            ListText: {
                color: "#000",
                fontFamily: "Poppins",
                fontWeight: "400",
                lineHeight: "24px"
            },
            Text4: {
                color: "#000",
                fontFamily: "Poppins",
                fontWeight: "400",
                lineHeight: "12px"
            },
            ProfileCard: {
                borderRadius: "10px",
                background: "#FFF",
                boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
            }
        }), []);
    const theuserData = [
        {
            id: 1,
            userName: "Ajay Sharma",
            profilePic: "/assests/dashboard/profile/1.svg",
            Activestatus: true,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 2,
            userName: "Rahul Verma",
            profilePic: "/assests/dashboard/profile/2.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 3,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/3.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 4,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/4.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 5,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/5.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 6,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/6.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        }
    ];
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { userData, totalPages, limit, pagesdata, loading, error, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.shortlistusers);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const Pages = {
        currentPage: currentPage
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_4__/* .fetchshortlistUsers */ .LO)(Pages));
    }, [
        currentPage
    ]);
    const handlePageChange = (page)=>{
        setCurrentPage(page);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ""
                        }),
                        status === "loading" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_GridSkeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                userData?.map((res, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: profileStyles?.ProfileCard,
                                        className: "inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between pt-[10px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "pl-[10px] flex space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    alt: "icon-1",
                                                                    width: 17,
                                                                    height: 14,
                                                                    src: "/assests/Black/Couple2.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "text-[10px]",
                                                                style: profileStyles?.Text4,
                                                                children: "You & Her "
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "pr-[10px] flex space-x-[30px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    alt: "shortlist",
                                                                    width: 15,
                                                                    height: 14,
                                                                    src: "/assests/Black/Stars-2.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    alt: "more",
                                                                    width: 3,
                                                                    height: 14,
                                                                    src: "/assests/Black/3Dots.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: "w-[100px] h-[100px] rounded-[50%]",
                                                    href: `/longterm/dashboard/${res?.shortlistId?._id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80",
                                                        children: res?.shortlistId?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                quality: 45,
                                                                loading: "lazy",
                                                                alt: "profile-pic",
                                                                width: 100,
                                                                height: 100,
                                                                style: {
                                                                    objectFit: "cover"
                                                                },
                                                                className: "w-[100px] h-[100px] rounded-[50%]",
                                                                src: res?.shortlistId?.profilePic
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                name: res?.shortlistId?.name,
                                                                round: true,
                                                                size: "100"
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        href: `/longterm/dashboard/${res?.shortlistId?._id}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: profileStyles?.ProfileName,
                                                            className: "text-[18px]",
                                                            children: res?.shortlistId?.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: profileStyles?.ListText,
                                                        className: "text-[14px]",
                                                        children: `32, ${res?.shortlistId?.height ? res?.shortlistId?.height : "NA"}`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: profileStyles?.ListText,
                                                        className: "text-[14px]",
                                                        children: `${res?.shortlistId?.religion ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(res?.shortlistId?.religion) : "NA"} , ${res?.shortlistId?.cast ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(res?.shortlistId?.cast) : "NA"}`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: profileStyles?.ListText,
                                                        className: "text-[14px]",
                                                        children: res?.shortlistId?.maritalStatus ? res?.shortlistId?.maritalStatus : "NA"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex space-x-[15px] justify-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            alt: "ignore",
                                                            width: 40,
                                                            height: 40,
                                                            className: "w-[40px] h-[40px]",
                                                            src: "/assests/dashboard/icon/ignore-icon-2.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            alt: "like",
                                                            width: 40,
                                                            height: 40,
                                                            className: "w-[40px] h-[40px]",
                                                            src: "/assests/dashboard/icon/heart-icon-2.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            alt: "send",
                                                            width: 40,
                                                            height: 40,
                                                            className: "w-[40px] h-[40px]",
                                                            src: "/assests/dashboard/icon/send-icon-2.svg"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index);
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Features_Pagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    currentPage: currentPage,
                    totalPages: totalPages,
                    onPageChange: handlePageChange,
                    darkMode: false
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridUserProfile);

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