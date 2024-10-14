"use strict";
exports.id = 2091;
exports.ids = [2091];
exports.modules = {

/***/ 82091:
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
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99419);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26642);
/* harmony import */ var _components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70330);








const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\sections\\ProfessionalTab.js -> " + "react-select"
        ]
    },
    ssr: false
});
const ProfessionalTab = ()=>{
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile.profileData.ProfessionalData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__/* .fetchproffessionalData */ .Mf)());
    }, []);
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
    const [AllData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        jobType: data?.jobType ? data.jobType : "NA",
        companyName: data?.companyName ? data.companyName : "NA",
        currentSalary: data?.currentSalary ? data.currentSalary : "NA",
        workCity: data?.workCity ? data.workCity : "NA",
        workCountry: data?.workCountry ? data.workCountry : "NA"
    });
    const jobTypeOptions = [
        {
            value: "full_time",
            label: "Full-time"
        },
        {
            value: "part_time",
            label: "Part-time"
        },
        {
            value: "contract",
            label: "Contract"
        },
        {
            value: "internship",
            label: "Internship"
        },
        {
            value: "remote",
            label: "Remote"
        }
    ];
    const currentDesignationOptions = [
        {
            value: "junior_engineer",
            label: "Junior Engineer"
        },
        {
            value: "senior_analyst",
            label: "Senior Analyst"
        },
        {
            value: "team_lead",
            label: "Team Lead"
        },
        {
            value: "project_manager",
            label: "Project Manager"
        },
        {
            value: "director",
            label: "Director"
        }
    ];
    const currentcityOption = [
        {
            value: "ahmedabad",
            label: "Ahmedabad"
        },
        {
            value: "surat",
            label: "Surat"
        },
        {
            value: "toronto",
            label: "Toronto"
        }
    ];
    const countryoflivingOptions = [
        {
            value: "india",
            label: "India"
        },
        {
            value: "us",
            label: "United States"
        },
        {
            value: "canada",
            label: "Canada"
        },
        {
            value: "mexico",
            label: "Mexico"
        }
    ];
    // ProfessionalId, UpdatedDataforProfessional
    const [AllProfessionalData, SetAllProfessionalData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        jobTitle: "",
        jobType: "",
        companyName: "",
        currentSalary: ""
    });
    const handleInputChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        SetAllProfessionalData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const UpdateDataBtn = ()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__/* .updateMyProfessionalData */ .EB)({
            ProfessionalId: data?.id,
            UpdatedDataforProfessional: AllProfessionalData
        }));
        setShowForm(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-full ${showForm ? "h-[450px]" : "h-[369px]"} border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`,
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
                                    children: showForm ? "Modify Professional Details" : "Professional Details"
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
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[90%] pt-[20px] flex justify-between space-x-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "text-[#000] pb-[10px]",
                                                            style: labelText,
                                                            children: "Current Designation (Job Title)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: currentDesignationOptions,
                                                            placeholder: data?.jobTitle ? data.jobTitle : "",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "jobTitle",
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
                                                            children: "Job Type"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: jobTypeOptions,
                                                            placeholder: data?.jobType ? data.jobType : "",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "jobType",
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
                                                            children: "Company Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            onChange: handleInputChange,
                                                            type: "text",
                                                            name: "companyName",
                                                            placeholder: data?.companyName ? data.companyName : "Enter Name Here",
                                                            className: "outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "text-[#000] pb-[10px]",
                                                            style: labelText,
                                                            children: "Annual Salary"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "number",
                                                            onChange: handleInputChange,
                                                            name: "currentSalary",
                                                            placeholder: data?.currentSalary ? data.currentSalary : "",
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end border-[1px] rounded-[10px] outline-none pl-[20px] border-[#e6e6e6]"
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
                                                            children: "Work In City"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: currentcityOption,
                                                            placeholder: data?.workCity ? data.workCity : "",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "workCity",
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
                                                            children: "Work In Country"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: countryoflivingOptions,
                                                            placeholder: data?.workCountry ? data.workCountry : "",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "workCountry",
                                                                        value: selectedOption?.value
                                                                    }
                                                                })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%] flex justify-end pb-[10px] mt-[10px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        onClick: UpdateDataBtn,
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
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Current Designation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.jobTitle ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(data.jobTitle) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Job Type"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.jobType ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(data.jobType) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Company Name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.companyName ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(data.companyName) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Annual Salary"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.currentSalary ? data.currentSalary : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Work in City"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.workCity ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(data.workCity) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Work in Country"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.workCountry ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_7__/* .capitalizeFirstLetter */ .f)(data.workCountry) : "NA"
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfessionalTab);


/***/ })

};
;