"use strict";
exports.id = 8848;
exports.ids = [8848];
exports.modules = {

/***/ 98848:
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
/* harmony import */ var _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7354);
/* harmony import */ var _components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70330);








const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\sections\\PartnerPreferenceTab.js -> " + "react-select"
        ]
    },
    ssr: false
});
const PartnerPreferenceTab = ({ partnerPrefID, formData, updateFormData: updateFormData1 })=>{
    const disptach = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // disptach(getPartnerpreferencedata(partnerPrefID))
        disptach((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__/* .fetchPartnerPrefdata */ .yr)());
    }, []);
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile.profileData.PartnerPrefData);
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
    const options = [
        {
            value: 1,
            label: "1"
        },
        {
            value: 2,
            label: "2"
        },
        {
            value: 3,
            label: "3"
        },
        {
            value: 4,
            label: "4"
        },
        {
            value: 5,
            label: "5"
        },
        {
            value: 6,
            label: "6"
        },
        {
            value: 7,
            label: "7"
        },
        {
            value: 8,
            label: "8"
        },
        {
            value: 9,
            label: "9"
        },
        {
            value: 10,
            label: "10"
        },
        {
            value: 11,
            label: "11"
        },
        {
            value: 12,
            label: "12"
        },
        {
            value: 13,
            label: "13"
        },
        {
            value: 14,
            label: "14"
        },
        {
            value: 15,
            label: "15"
        },
        {
            value: 16,
            label: "16"
        },
        {
            value: 17,
            label: "17"
        },
        {
            value: 18,
            label: "18"
        },
        {
            value: 19,
            label: "19"
        },
        {
            value: 20,
            label: "20"
        }
    ];
    const Country = [
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
            value: "china",
            label: "China"
        },
        {
            value: "myanmar",
            label: "Myanmar"
        },
        {
            value: "nepal",
            label: "Nepal"
        },
        {
            value: "sri-lanka",
            label: "Sri-lanka"
        },
        {
            value: "pakistan",
            label: "Pakistan"
        },
        {
            value: "afghanistan",
            label: "Afghanistan"
        }
    ];
    const states = [
        {
            value: "gujarat",
            label: "Gujarat"
        },
        {
            value: "assam",
            label: "Assam"
        },
        {
            value: "andhra-pradesh",
            label: "Andhra Pradesh"
        },
        {
            value: "arunachal-pradesh",
            label: "Arunachal Pradesh"
        },
        {
            value: "bihar",
            label: "Bihar"
        },
        {
            value: "chhattisgarh",
            label: "Chhattisgarh"
        },
        {
            value: "goa",
            label: "Goa"
        },
        {
            value: "haryana",
            label: "Haryana"
        },
        {
            value: "himachal-pradesh",
            label: "Himachal Pradesh"
        },
        {
            value: "jharkhand",
            label: "Jharkhand"
        },
        {
            value: "karnataka",
            label: "Karnataka"
        },
        {
            value: "kerala",
            label: "Kerala"
        },
        {
            value: "madhya-pradesh",
            label: "Madhya Pradesh"
        },
        {
            value: "maharashtra",
            label: "Maharashtra"
        },
        {
            value: "manipur",
            label: "Manipur"
        },
        {
            value: "meghalaya",
            label: "Meghalaya"
        },
        {
            value: "mizoram",
            label: "Mizoram"
        },
        {
            value: "nagaland",
            label: "Nagaland"
        },
        {
            value: "odisha",
            label: "Odisha"
        },
        {
            value: "punjab",
            label: "Punjab"
        },
        {
            value: "rajasthan",
            label: "Rajasthan"
        },
        {
            value: "sikkim",
            label: "Sikkim"
        },
        {
            value: "tamil-nadu",
            label: "Tamil Nadu"
        },
        {
            value: "telangana",
            label: "Telangana"
        },
        {
            value: "uttar-pradesh",
            label: "Uttar Pradesh"
        },
        {
            value: "uttarakhand",
            label: "Uttarakhand"
        },
        {
            value: "west-bengal",
            label: "West Bengal"
        },
        {
            value: "alberta",
            label: "Alberta"
        },
        {
            value: "british-columbia",
            label: "British Columbia"
        },
        {
            value: "manitoba",
            label: "Manitoba"
        },
        {
            value: "new-brunswick",
            label: "New Brunswick"
        },
        {
            value: "newfound-land",
            label: "Newfound Land"
        },
        {
            value: "nova-scotia",
            label: "Nova Scotia"
        },
        {
            value: "ontario",
            label: "Ontario"
        },
        {
            value: "prince-edward-island",
            label: "Prince Edward Island"
        },
        {
            value: "quebec",
            label: "Quebec"
        },
        {
            value: "saskatchewan",
            label: "Saskatchewan"
        },
        {
            value: "alabama",
            label: "Alabama"
        },
        {
            value: "alaska",
            label: "Alaska"
        },
        {
            value: "arizona",
            label: "Arizona"
        },
        {
            value: "arkansas",
            label: "Arkansas"
        },
        {
            value: "california",
            label: "California"
        },
        {
            value: "colorado",
            label: "Colorado"
        },
        {
            value: "connecticut",
            label: "Connecticut"
        },
        {
            value: "delaware",
            label: "Delaware"
        },
        {
            value: "florida",
            label: "Florida"
        },
        {
            value: "georgia",
            label: "Georgia"
        },
        {
            value: "hawaii",
            label: "Hawaii"
        },
        {
            value: "idaho",
            label: "Idaho"
        },
        {
            value: "illinois",
            label: "Illinois"
        }
    ];
    const city = [
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
    const incomeOptions = [
        {
            value: "1L-10L",
            label: "1 LPA to 10 LPA"
        },
        {
            value: "10L-20L",
            label: "10 LPA to 20 LPA"
        },
        {
            value: "20L-30L",
            label: "20 LPA to 30 LPA"
        },
        {
            value: "30L-40L",
            label: "30 LPA to 40 LPA"
        },
        {
            value: "40L-50L",
            label: "40 LPA to 50 LPA"
        },
        {
            value: "50L+",
            label: "50 LPA and above"
        }
    ];
    const dietOptions = [
        {
            value: "vegetarian",
            label: "Vegetarian"
        },
        {
            value: "non_vegetarian",
            label: "Non-Vegetarian"
        }
    ];
    const creativeOption = [
        {
            value: "writing",
            label: "writing"
        },
        {
            value: "painting",
            label: "Painting"
        }
    ];
    const FunOptions = [
        {
            value: "movie",
            label: "Movie"
        },
        {
            value: "sports",
            label: "Sports"
        },
        {
            value: "biking",
            label: "Biking"
        },
        {
            value: "music",
            label: "Music"
        },
        {
            value: "socialMedia",
            label: "Social Media"
        }
    ];
    const { status, partnerpref } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.form?.formData);
    const customStyles = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
                width: "100%",
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
    const customStyles2 = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
                width: "100px",
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
    const handleInputChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        if (name == "heightmin") {
            updateFormData1({
                partnerpref: {
                    ...formData.partnerpref,
                    height: {
                        ...formData.partnerpref.height,
                        min: value
                    }
                }
            });
        } else if (name == "heightmax") {
            updateFormData1({
                partnerpref: {
                    ...formData.partnerpref,
                    height: {
                        ...formData.partnerpref.height,
                        max: value
                    }
                }
            });
        } else if (name == "agemin") {
            updateFormData1({
                partnerpref: {
                    ...formData.partnerpref,
                    age: {
                        ...formData.partnerpref.age,
                        min: value
                    }
                }
            });
        } else if (name == "agemax") {
            updateFormData1({
                partnerpref: {
                    ...formData.partnerpref,
                    age: {
                        ...formData.partnerpref.age,
                        max: value
                    }
                }
            });
        } else if (name == "income") {
            updateFormData1({
                partnerpref: {
                    ...formData.partnerpref,
                    [name]: value
                }
            });
        } else {
            const values = value?.map((item)=>item.value);
            disptach((0,_store_actions_registerUser__WEBPACK_IMPORTED_MODULE_6__/* .updatePartnerPref */ .kj)(name, values));
        }
    };
    const SubmitChanges = ()=>{
        setShowForm(false);
        disptach((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_5__/* .updateMyPartnerPrefdata */ .yi)({
            partnerPrefId: data?.id,
            UpdatedDataforPartnerPrefdata: partnerpref
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-full ${showForm ? "h-[900px]" : "h-[400px]"} border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`,
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
                                    children: showForm ? "Modify Partner Preference" : "Partner Preference"
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
                                    className: "w-[90%] flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px]",
                                                    style: labelText,
                                                    children: "Choose Age"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                styles: customStyles2,
                                                                options: options,
                                                                placeholder: "min",
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "agemin",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: labelText,
                                                                children: "To"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                styles: customStyles2,
                                                                options: options,
                                                                placeholder: "max",
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "agemax",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px]",
                                                    style: labelText,
                                                    children: "Choose Height"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                styles: customStyles2,
                                                                options: options,
                                                                placeholder: "min",
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "heightmin",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: labelText,
                                                                children: "To"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                styles: customStyles2,
                                                                options: options,
                                                                placeholder: "max",
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "heightmax",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%] h-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-[15px] py-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[#000] pb-[10px]",
                                                        style: labelText,
                                                        children: "Choose country"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: Country,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "country",
                                                                    value: selectedOption
                                                                }
                                                            }),
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[#000] pb-[10px]",
                                                        style: labelText,
                                                        children: "Choose state"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: states,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "state",
                                                                    value: selectedOption
                                                                }
                                                            }),
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[#000] pb-[10px]",
                                                        style: labelText,
                                                        children: "Choose City"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: city,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "city",
                                                                    value: selectedOption
                                                                }
                                                            }),
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[#000] pb-[10px]",
                                                        style: labelText,
                                                        children: "Prefer Income"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: incomeOptions,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "income",
                                                                    value: selectedOption?.value
                                                                }
                                                            }),
                                                        isSearchable: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        style: labelText,
                                                        className: "pb-[10px]",
                                                        children: "Creative"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: creativeOption,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "creative",
                                                                    value: selectedOption
                                                                }
                                                            }),
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        style: labelText,
                                                        className: "pb-[10px]",
                                                        children: "Fun"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: FunOptions,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "fun",
                                                                    value: selectedOption
                                                                }
                                                            }),
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        style: labelText,
                                                        className: "pb-[10px]",
                                                        children: "Prefer Diet"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                        options: dietOptions,
                                                        placeholder: "Select..",
                                                        styles: customStyles,
                                                        onChange: (selectedOption)=>handleInputChange({
                                                                target: {
                                                                    name: "diet",
                                                                    value: selectedOption
                                                                }
                                                            }),
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%] flex justify-end pb-[10px] mt-[10px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        onClick: SubmitChanges,
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
                                                    children: "Age"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: [
                                                        data?.age?.min,
                                                        " - ",
                                                        data?.age?.max
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Prefer Height"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: [
                                                        data?.height?.min,
                                                        " to ",
                                                        data?.height?.max,
                                                        " ft"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Prefer City State"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "flex",
                                                    children: data?.state.map((val)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                style: Text5,
                                                                className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                                children: [
                                                                    val,
                                                                    " ,"
                                                                ]
                                                            })
                                                        });
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Prefer Country"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "flex",
                                                    children: data?.country.map((val)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                style: Text5,
                                                                className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                                children: [
                                                                    val,
                                                                    " ,"
                                                                ]
                                                            })
                                                        });
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Prefer Income"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: data?.income
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Creative"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "flex",
                                                    children: data?.creative.map((val)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                style: Text5,
                                                                className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                                children: [
                                                                    val,
                                                                    " ,"
                                                                ]
                                                            })
                                                        });
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Fun"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "flex",
                                                    children: data?.fun.map((val)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                style: Text5,
                                                                className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                                children: [
                                                                    val,
                                                                    " ,"
                                                                ]
                                                            })
                                                        });
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Prefer Diet"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "flex",
                                                    children: data?.diet.map((val)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                style: Text5,
                                                                className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                                children: [
                                                                    val,
                                                                    " ,"
                                                                ]
                                                            })
                                                        });
                                                    })
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
// export default PartnerPreferenceTab;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)((state)=>({
        formData: state.form.formData
    }), {
    updateFormData: _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_6__/* .updateFormData */ .Zv
})(PartnerPreferenceTab));


/***/ })

};
;