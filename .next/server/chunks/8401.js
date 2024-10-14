"use strict";
exports.id = 8401;
exports.ids = [8401];
exports.modules = {

/***/ 58401:
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
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50228);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26642);
/* harmony import */ var _components_Dating_register_sections_MusltiSelectDating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49298);
/* harmony import */ var _store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45755);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_6__]);
_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function HobbySectionInfo() {
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .useDarkMode */ .v)();
    const options = [
        {
            value: "reading",
            label: "Reading"
        },
        {
            value: "traveling",
            label: "Traveling"
        },
        {
            value: "cooking",
            label: "Cooking"
        },
        {
            value: "sports",
            label: "Sports"
        },
        {
            value: "music",
            label: "Music"
        },
        {
            value: "gaming",
            label: "Gaming"
        },
        {
            value: "photography",
            label: "Photography"
        },
        {
            value: "art",
            label: "Art"
        },
        {
            value: "gardening",
            label: "Gardening"
        },
        {
            value: "dancing",
            label: "Dancing"
        }
    ];
    const [showForm, setshowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { details } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.user); // Ensure this is pointing to the correct part of the Redux state
    const [selectedInterests, setSelectedInterests] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const HobbyValue = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const FildsTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [UpdatedData, setUpdatedData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        hobbies: []
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setUpdatedData((prev)=>({
                hobbies: selectedInterests
            }));
    }, [
        selectedInterests
    ]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const UpdateData = ()=>{
        dispatch((0,_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_6__/* .updateUserDetails */ .ek)(UpdatedData));
        setshowForm(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `space-y-[20px] w-full ${!showForm ? "h-[168px]" : "h-[250px]"} rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Hobbies & Interests"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center",
                                    children: !showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: "editIcon",
                                        width: 20,
                                        height: 20,
                                        onClick: ()=>setshowForm(!showForm),
                                        src: darkMode ? "/assests/dashboard/icon/edit-details-icon-white.svg" : "/assests/dashboard/icon/edit-details-icon.svg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        loading: "lazy",
                                        alt: "modifyIcon",
                                        width: 15,
                                        height: 15,
                                        onClick: ()=>setshowForm(!showForm),
                                        src: darkMode ? "/assests/profile/cross-edit-icon-white.svg" : "/assests/profile/cross-edit-icon.svg"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-[1px] bg-[#F1F1F1]"
                }),
                showForm ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: FildsTitle,
                                        children: "Purpose"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dating_register_sections_MusltiSelectDating__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        options: options,
                                        setSelectedValues: setSelectedInterests
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid place-items-end w-full mt-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: UpdateData,
                                className: "w-[100px] h-[40px] rounded-[20px] bg-custom-gradient text-[#FFF] hover:opacity-75",
                                children: "Update"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex space-x-[15px]",
                            children: details?.hobbies?.map((res, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]",
                                    style: HobbyValue,
                                    children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(res)
                                }, index);
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HobbySectionInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;