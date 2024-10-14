"use strict";
exports.id = 6833;
exports.ids = [6833];
exports.modules = {

/***/ 66833:
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
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26642);
/* harmony import */ var _utils_helpers_CalculateAge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16196);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);






function ProfileDetails({ data }) {
    const { details } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.user); // Ensure this is pointing to the correct part of the Redux state
    const Text2 = {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-4 pb-[10px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex justify-center items-center space-x-[20px] md:space-x-[40px] lg:space-x-[40px] xl:space-x-[40px] 2xl:space-x-[40px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        loading: "lazy",
                                        alt: "heartIcon",
                                        width: 16,
                                        height: 14,
                                        src: "/assests/dashboard/icon/heart-icon.svg"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        style: Text3,
                                        id: "live-count",
                                        className: "dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                        children: [
                                            0,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: Text2,
                                                className: "pl-[5px] text-[14px] text-[#8B8B8B]",
                                                children: " Likes "
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        loading: "lazy",
                                        alt: "upIcon",
                                        width: 14,
                                        height: 14,
                                        src: "/assests/dashboard/icon/up-arrow.svg"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        style: Text3,
                                        className: "dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                        children: [
                                            0,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: Text2,
                                                className: "pl-[5px] text-[14px] text-[#8B8B8B]",
                                                children: "Sent"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        loading: "lazy",
                                        alt: "downIcon",
                                        width: 14,
                                        height: 14,
                                        src: "/assests/dashboard/icon/down-arrow.svg"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        style: Text3,
                                        className: "dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                        children: [
                                            0,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: Text2,
                                                className: "pl-[5px] text-[14px] text-[#8B8B8B]",
                                                children: "Received"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[1px] w-full bg-[#EDEDED]"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full pt-[10px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "translate-x-[10px] w-full flex justify-center items-center space-x-[8px] md:space-x-[50px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center space-x-[10px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        style: Text2,
                                        className: "dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]",
                                        children: [
                                            data?.gender ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_4__/* .capitalizeFirstLetter */ .f)(data?.gender) : "NA",
                                            "\xa0,\xa0",
                                            (0,_utils_helpers_CalculateAge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(data?.dateOfBirth) || "NA"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            loading: "lazy",
                                            alt: "bagIcon",
                                            width: 14,
                                            height: 12,
                                            src: "/assests/dashboard/icon/bag-icon.svg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            style: Text2,
                                            className: "dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]",
                                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_4__/* .capitalizeFirstLetter */ .f)(details?.datingData[0]?.Occupation) || "NA"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            loading: "lazy",
                                            alt: "loactionIcon",
                                            width: 10,
                                            height: 12,
                                            src: "/assests/dashboard/icon/location-icon.svg"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            style: Text2,
                                            className: "dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]",
                                            children: [
                                                (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_4__/* .capitalizeFirstLetter */ .f)(details?.datingData[0]?.Ethnicity) || "NA",
                                                " , ",
                                                (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_4__/* .capitalizeFirstLetter */ .f)(details?.datingData[0]?.CurrentlyLiving) || ""
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center pt-[13px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "dark:text-[#FFF] text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]",
                            style: Text2,
                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_4__/* .capitalizeFirstLetter */ .f)(data?.writeBoutYourSelf) || "About yourSelf"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileDetails);


/***/ }),

/***/ 16196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// utils/helpers/calculateAge.js
/**
 * Calculates the age based on the provided birthdate.
 * @param {string} birthdate - The birthdate in the format 'YYYY-MM-DD'.
 * @returns {number} - The calculated age.
 */ function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || monthDifference === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateAge);


/***/ })

};
;