"use strict";
exports.id = 7085;
exports.ids = [7085];
exports.modules = {

/***/ 77085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50228);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26642);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99938);
/* harmony import */ var _utils_options_Register_ProfessionalSectionOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53755);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45755);
/* harmony import */ var _utils_options_Register_EducationSectionOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_8__]);
_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(null, {
    loadableGenerated: {
        modules: [
            "dating\\dashboard\\profile\\Sections\\Additionalinfo.js -> " + "react-select"
        ]
    },
    ssr: false
});
function Additionalinfo() {
    // const { data, status, totalLikes } = useSelector((state) => state?.myprofile);
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__/* .useDarkMode */ .v)();
    const FildsTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const FiledsValue = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const [showForm, setshowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { details } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.user); // Ensure this is pointing to the correct part of the Redux state
    const [UpdatedData, setUpdatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        currentSalary: "",
        datingData: [
            {
                educationLevel: "",
                Occupation: ""
            }
        ]
    });
    // UseEffect that updates `updatedData` when `details` changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (details) {
            setUpdatedData({
                currentSalary: details?.currentSalary,
                datingData: [
                    {
                        ...details?.datingData[0],
                        educationLevel: details?.datingData[0]?.educationLevel || "",
                        Occupation: details?.datingData[0]?.Occupation || ""
                    }
                ]
            });
        }
    }, [
        details
    ]); // Add `details` as a dependency
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === "Occupation") {
            setUpdatedData((prev)=>({
                    ...prev,
                    datingData: [
                        {
                            ...prev.datingData[0],
                            Occupation: value
                        }
                    ]
                }));
        } else if (name === "educationLevel") {
            setUpdatedData((prev)=>({
                    ...prev,
                    datingData: [
                        {
                            ...prev.datingData[0],
                            educationLevel: value
                        }
                    ]
                }));
        } else {
            setUpdatedData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const UpdateData = ()=>{
        dispatch((0,_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_8__/* .updateUserDetails */ .ek)(UpdatedData));
        setshowForm(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `space-y-[20px] w-full ${!showForm ? "h-[240px]" : "h-full"}  rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Professional Details"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center",
                                    children: !showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        alt: "editIcon",
                                        width: 20,
                                        height: 20,
                                        onClick: ()=>setshowForm(!showForm),
                                        src: darkMode ? "/assests/dashboard/icon/edit-details-icon-white.svg" : "/assests/dashboard/icon/edit-details-icon.svg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                    className: "flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid place-items-center w-full h-[1px] bg-[#F1F1F1]"
                    })
                }),
                showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-8 pb-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "pt-4 flex justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            className: " w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[260px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "absolute top-[-16px]",
                                                    style: FildsTitle,
                                                    children: "Education Level"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "w-[260px]",
                                                    placeholder: UpdatedData?.datingData[0].educationLevel,
                                                    styles: _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_5__/* .LabelStyle */ .gF,
                                                    options: _utils_options_Register_EducationSectionOptions__WEBPACK_IMPORTED_MODULE_9__/* .DegreeOption */ .KQ,
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "educationLevel",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            className: " w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[260px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "absolute top-[-16px]",
                                                    style: FildsTitle,
                                                    children: "Occupation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "w-[260px]",
                                                    placeholder: UpdatedData?.datingData[0].Occupation,
                                                    styles: _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_5__/* .LabelStyle */ .gF,
                                                    options: _utils_options_Register_ProfessionalSectionOptions__WEBPACK_IMPORTED_MODULE_6__/* .occupationOptions */ .jO,
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "Occupation",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "the-input-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            id: "currentSalary",
                                            name: "currentSalary",
                                            onChange: handleInputChange,
                                            required: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            for: "currentSalary",
                                            className: "label",
                                            children: "Annual Salary"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "underline"
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
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "space-y-[5px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: FildsTitle,
                                                        children: "Education Level"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        style: FiledsValue,
                                                        children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_10__/* .capitalizeFirstLetter */ .f)(details?.datingData[0]?.educationLevel) || "NA"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "space-y-[5px] w-[150px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: FildsTitle,
                                                        children: "Occupation"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        style: FiledsValue,
                                                        children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_10__/* .capitalizeFirstLetter */ .f)(details?.datingData[0]?.Occupation) || "NA"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "space-y-[5px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: FildsTitle,
                                                    children: "Annual Income"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: FiledsValue,
                                                    children: details?.currentSalary || "NA"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Additionalinfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;