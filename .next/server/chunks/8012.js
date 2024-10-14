"use strict";
exports.id = 8012;
exports.ids = [8012];
exports.modules = {

/***/ 8012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45687);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99419);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26642);
/* harmony import */ var _components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70330);










const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\sections\\EducationTab.js -> " + "react-select"
        ]
    },
    ssr: false
});
function EducationTab() {
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile.profileData.EducationData);
    const status = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.usersact);
    const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookie)("userid");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__/* .getEducationData */ .vj)(currentUser));
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_7__/* .FetchMyEducationData */ .N3)());
    }, []);
    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleEditClick = ()=>{
        setShowForm(!showForm);
    };
    const labelText = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const customStyles = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
                width: "300px",
                height: "50px",
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                borderColor: state.isFocused ? "black" : provided.borderColor,
                "&:hover": {
                    borderColor: "black"
                },
                boxShadow: state.isFocused ? "none" : provided.boxShadow
            }),
        indicatorSeparator: (provided)=>({
                ...provided,
                display: "none",
                paddingRight: "20px"
            })
    };
    const StateOptions = [
        {
            value: "ca",
            label: "California"
        },
        {
            value: "ny",
            label: "New York"
        },
        {
            value: "tx",
            label: "Texas"
        },
        {
            value: "fl",
            label: "Florida"
        },
        {
            value: "il",
            label: "Illinois"
        }
    ];
    const CollageOptions = [
        {
            value: "harvard",
            label: "Harvard"
        },
        {
            value: "stanford",
            label: "Stanford"
        },
        {
            value: "mit",
            label: "MIT"
        },
        {
            value: "caltech",
            label: "Caltech"
        },
        {
            value: "oxford",
            label: "Oxford"
        }
    ];
    const CityOptions = [
        {
            value: "ahmedabad",
            label: "Ahmedabad"
        },
        {
            value: "surat",
            label: "Surat"
        },
        {
            value: "vadodara",
            label: "Vadodara"
        },
        {
            value: "rajkot",
            label: "Rajkot"
        },
        {
            value: "jamnagar",
            label: "Jamnagar"
        }
    ];
    const DegreeOption = [
        {
            value: "bs",
            label: "Bachelor of Science (B.S.)"
        },
        {
            value: "ba",
            label: "Bachelor of Arts (B.A.)"
        },
        {
            value: "ms",
            label: "Master of Science (M.S.)"
        },
        {
            value: "mba",
            label: "Master of Business Administration (MBA)"
        },
        {
            value: "phd",
            label: "Doctor of Philosophy (Ph.D.)"
        }
    ];
    const CountryOptions = [
        {
            value: "india",
            label: "India"
        },
        {
            value: "usa",
            label: "United States"
        },
        {
            value: "uk",
            label: "United Kingdom"
        },
        {
            value: "canada",
            label: "Canada"
        },
        {
            value: "australia",
            label: "Australia"
        }
    ];
    const [AllData, SetAllData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        degree: data?.degree ? data.degree : "",
        collage: data?.collage ? data.collage : "",
        city: data?.city ? data.city : "",
        state: data?.state ? data.state : "",
        country: data?.country ? data.country : ""
    });
    const handleInputChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        SetAllData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const HandleSubmit = ()=>{
        // console.log(AllData)
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_7__/* .updateMyEducationData */ ["in"])({
            EducationId: data?.id,
            UpdatedDataforEducation: AllData
        }));
        // dispatch(updateEducationData(data?.id, AllData))
        // { EducationId, UpdatedDataforEducation }
        setShowForm(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-full  ${showForm ? "h-[450px]" : "h-[369px]"}  border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pt-[10px] grid place-items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "w-[90%] flex justify-between items-center m-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: Text2,
                                    className: "dark:text-[#FFF] text-[16px]",
                                    children: showForm ? "Modify Education Information" : "Education Details"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center",
                                    children: !showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: "editIcon",
                                        width: 20,
                                        height: 20,
                                        onClick: handleEditClick,
                                        src: "/assests/dashboard/icon/edit-details-icon.svg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        loading: "lazy",
                                        alt: "modifyIcon",
                                        width: 15,
                                        height: 15,
                                        onClick: handleEditClick,
                                        src: "/assests/profile/cross-edit-icon.svg"
                                    })
                                })
                            })
                        ]
                    })
                }),
                loading == "loading" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                loading: "lazy",
                                alt: "loader",
                                width: 25,
                                height: 25,
                                className: "animate-spin inline relative left-[0px]",
                                src: "/assests/animation/gradient-loader.svg"
                            })
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%] pt-[20px] flex justify-between space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px]",
                                                    style: labelText,
                                                    children: "Degree"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                    styles: customStyles,
                                                    options: DegreeOption,
                                                    placeholder: data?.degree ? data.degree : "",
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "degree",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px]",
                                                    style: labelText,
                                                    children: "College/University"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                    styles: customStyles,
                                                    options: CollageOptions,
                                                    placeholder: data?.collage ? data.collage : "",
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "collage",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%] pt-[20px] flex justify-between space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px]",
                                                    style: labelText,
                                                    children: "City"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                    styles: customStyles,
                                                    options: CityOptions,
                                                    placeholder: data?.city ? data.city : "",
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "city",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px]",
                                                    style: labelText,
                                                    children: "State"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                    styles: customStyles,
                                                    options: StateOptions,
                                                    placeholder: data?.state ? data.state : "",
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "state",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%] pt-[20px] flex justify-between space-x-[20px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-[#000] pb-[10px]",
                                                style: labelText,
                                                children: "Country"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                styles: customStyles,
                                                options: CountryOptions,
                                                placeholder: data?.country ? data.country : "",
                                                onChange: (selectedOption)=>handleInputChange({
                                                        target: {
                                                            name: "country",
                                                            value: selectedOption?.value
                                                        }
                                                    })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%] flex justify-end pb-[10px] mt-[10px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        onClick: HandleSubmit,
                                        children: "Save"
                                    })
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF]  2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Degree"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF]  2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.degree ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(data.degree) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF]  2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "College/University"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF]  2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.collage ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(data.collage) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF]  2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "City"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF]  2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.city ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(data.city) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF]  2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "State"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF]  2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.state ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(data.state) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF]  2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Country"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF]  2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.country ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(data.country) : "NA"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EducationTab);


/***/ })

};
;