"use strict";
exports.id = 2658;
exports.ids = [2658];
exports.modules = {

/***/ 92658:
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
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99419);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26642);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50228);
/* harmony import */ var _components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70330);





const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\sections\\AddressTab.js -> " + "react-select"
        ]
    },
    ssr: false
});





const AddressTab = ({ AddressID })=>{
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_7__/* .useDarkMode */ .v)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .fetchAdressData */ .QR)(AddressID?.id));
    }, []);
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile.profileData.adressData);
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
    const InputFonts = {
        fontFamily: "Poppins"
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
                backgroundColor: darkMode ? "#141516" : "#FFF",
                borderColor: state.isFocused ? "black" : provided.borderColor,
                "&:hover": {
                    borderColor: darkMode ? "#787878" : "black"
                },
                boxShadow: state.isFocused ? "none" : provided.boxShadow
            }),
        indicatorSeparator: (provided)=>({
                ...provided,
                display: "none",
                paddingRight: "20px"
            })
    };
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
    // Countries
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
    const [CurrentAddressData, SetCurrentAddressData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        currentResidenceAddress: data?.currentResidenceAddress ? data.currentResidenceAddress : "",
        currentCity: data?.currentCity ? data.currentCity : "",
        currentCountry: data?.currentCountry ? data.currentCountry : ""
    });
    const handleInputChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        // updateFormData({
        //   address: { ...formData.address, [name]: value }
        // });
        SetCurrentAddressData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const SaveUpdateDataBtn = ()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .updateMyAddressData */ .lh)({
            AdressID: AddressID?.id,
            UpdatedDataforAddress: CurrentAddressData
        }));
        setShowForm(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-full ${showForm ? "h-[460px]" : "2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]"} border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`,
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
                                    children: showForm ? "Modify Address Details" : "Address Details"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center",
                                    children: !showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: "editIcon",
                                        width: 20,
                                        height: 20,
                                        onClick: handleEditClick,
                                        src: darkMode ? "/assests/dashboard/icon/edit-details-icon-white.svg" : "/assests/dashboard/icon/edit-details-icon.svg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        loading: "lazy",
                                        alt: "modifyIcon",
                                        width: 15,
                                        height: 15,
                                        onClick: handleEditClick,
                                        src: darkMode ? "/assests/profile/cross-edit-icon-white.svg" : "/assests/profile/cross-edit-icon.svg"
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
                            className: " flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                style: labelText,
                                                className: "dark:text-[#FFF] pb-[10px]",
                                                children: "Current Residing Address"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                style: InputFonts,
                                                name: "currentResidenceAddress",
                                                onChange: handleInputChange,
                                                value: CurrentAddressData.currentResidenceAddress,
                                                type: "text",
                                                className: "hover:border-[#000] text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px]"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%] pt-[20px] flex justify-between space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] dark:text-[#FFF] pb-[10px]",
                                                    style: labelText,
                                                    children: "Current City"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "dark:text-[#FFF] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                    styles: customStyles,
                                                    options: currentcityOption,
                                                    placeholder: CurrentAddressData.currentCity,
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "currentCity",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px] dark:text-[#FFF]",
                                                    style: labelText,
                                                    children: "Country of Living"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                    className: "dark:text-[#FFF] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                    styles: customStyles,
                                                    options: countryoflivingOptions,
                                                    placeholder: CurrentAddressData.currentCountry,
                                                    onChange: (selectedOption)=>handleInputChange({
                                                            target: {
                                                                name: "currentCountry",
                                                                value: selectedOption?.value
                                                            }
                                                        })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%]  pt-[20px] space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[#000] pb-[10px] dark:text-[#FFF]",
                                                    style: labelText,
                                                    children: "Same as current address"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]  rounded-[10px] h-[50px] dark:bg-[#141516] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] dark:border-[1px] dark:border-[#787878]  dark:text-[#FFF] bg-[#F8F8F8]",
                                                                children: "Add Your Origin"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative left-[-15px] flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "ml-[-10px]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                                        className: "border-none  rounded-[4px] bg-[#F3F3F3]"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                        className: "dark:text-[#FFF]",
                                                                        children: "Same as current address"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex justify-end pb-[10px] mt-[10px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                onClick: SaveUpdateDataBtn,
                                                children: "Save"
                                            })
                                        })
                                    ]
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
                                    className: "w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Current Residing Address"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: CurrentAddressData?.currentResidenceAddress ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(CurrentAddressData.currentResidenceAddress) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Current City"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: CurrentAddressData?.currentCity ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(CurrentAddressData.currentCity) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Current Residing Country"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                    children: CurrentAddressData?.currentCountry ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_9__/* .capitalizeFirstLetter */ .f)(CurrentAddressData.currentCountry) : "NA"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressTab);


/***/ })

};
;