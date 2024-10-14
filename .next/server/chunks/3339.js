"use strict";
exports.id = 3339;
exports.ids = [3339];
exports.modules = {

/***/ 23339:
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
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45687);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19318);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65706);
/* harmony import */ var _utils_icons_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26725);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50228);
/* harmony import */ var _utils_helpers_CalculateAge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16196);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60820);
/* harmony import */ var _Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97996);
/* harmony import */ var _common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_7__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_12__, _Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_13__, _common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_14__]);
([_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_7__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_12__, _Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_13__, _common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function RecentlyView() {
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_9__/* .useDarkMode */ .v)();
    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const ProfileCard = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const ImagenotFound = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    // Fetch user profile data on component mount
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__/* .GetrecentuserprofileData */ .SP)());
    }, [
        dispatch
    ]); // Add dispatch to the dependency array as it's a stable function
    // Get the data and loading state from the store
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.usersact.recentusersdata);
    // State for shuffled data
    const [shuffleData, setShuffleData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // Shuffle data whenever the `data` changes
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data) {
            setShuffleData(lodash_shuffle__WEBPACK_IMPORTED_MODULE_6___default()(data)); // Assuming shuffledata is a function that processes the data
        }
    }, [
        data
    ]); // Depend on `data`, not `dispatch`
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative 2xl:left-[50px] ",
                children: data?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    style: Text3,
                    className: "dark:text-[#FFF] relative 2xl:left-[10px] xl:left-[65px] lg:left-[20px] text-[16px]",
                    children: "Recently Viewed"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " inline-block space-y-[10px] relative 2xl:left-[-10px] left-[5px] pt-[10px] lg:flex flex-wrap xl:justify-center 2xl:justify-center space-x-[10px] 2xl:space-x-[25px] xl:space-x-[15px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            0,
                            1,
                            2
                        ].map((res, Index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: ProfileCard,
                                className: "bg-[#FFF] dark:bg-[#242526] inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px rounded-[10px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center pt-[10px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                            variant: "text",
                                            width: 120,
                                            className: "pl-[10px] flex space-x-[10px]"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                            variant: "circular",
                                            alt: "profile",
                                            style: {
                                                objectFit: "cover"
                                            },
                                            width: 102,
                                            height: 102,
                                            className: "w-[102px] h-[102px] rounded-[50%]",
                                            src: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center grid place-items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                variant: "h1",
                                                width: 110,
                                                style: ProfileName,
                                                className: "text-[18px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                variant: "text",
                                                width: 90,
                                                style: ListText,
                                                className: "text-[14px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                variant: "text",
                                                width: 90,
                                                style: ListText,
                                                className: "text-[14px]"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-[15px] justify-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                    variant: "circular",
                                                    alt: "ignore",
                                                    width: 40,
                                                    height: 40,
                                                    className: "w-[40px] h-[40px]",
                                                    src: "/assests/dashboard/icon/ignore-icon-2.svg"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                    variant: "circular",
                                                    alt: "like",
                                                    width: 40,
                                                    height: 40,
                                                    className: "w-[40px] h-[40px]",
                                                    src: "/assests/dashboard/icon/heart-icon-2.svg"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                    variant: "circular",
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
                            }, Index);
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: shuffleData?.slice(0, 3).map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: ProfileCard,
                                className: "inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between pt-[10px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "pl-[10px] flex space-x-[10px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                        user: item?.viewerId
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "pr-[10px] flex space-x-[30px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                                UserId: item?.viewerId?.id
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            res: item?.viewerId
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center ",
                                        children: item?.viewerId?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: `/longterm/dashboard/${item?.viewerId?.id}`,
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
                                                    src: item?.viewerId?.profilePic
                                                })
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: `/longterm/dashboard/${item?.viewerId?.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    name: item?.viewerId?.name,
                                                    round: true,
                                                    size: "100"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: `/longterm/dashboard/${item?.viewerId?.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: ProfileName,
                                                    className: " text-[#000] dark:text-[#FFF] text-[18px]",
                                                    children: item?.viewerId?.name
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                style: ListText,
                                                className: " text-[#000] dark:text-[#FFF] text-[14px]",
                                                children: [
                                                    (0,_utils_helpers_CalculateAge__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(item?.viewerId?.dateOfBirth),
                                                    ", 5’3”"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: ListText,
                                                className: " text-[#000] dark:text-[#FFF] text-[14px]",
                                                children: item?.viewerId?.religion ? item?.viewerId?.religion : "hindu, patel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: ListText,
                                                className: " text-[#000] dark:text-[#FFF] text-[14px]",
                                                children: item?.viewerId?.maritalStatus ? item?.viewerId?.maritalStatus : "NA"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        from: "GridProfile",
                                        theUserName: item?.viewerId?.name,
                                        user: item?.viewerId,
                                        theid: item?.viewerId
                                    }, index)
                                ]
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentlyView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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