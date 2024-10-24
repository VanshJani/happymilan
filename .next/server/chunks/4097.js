"use strict";
exports.id = 4097;
exports.ids = [4097];
exports.modules = {

/***/ 84097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99419);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SKeletonProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89155);
/* harmony import */ var _commonCompo_HandleProfileUpload_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78490);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45687);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68362);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sections_HobbiesTab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(123);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79118);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26642);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50228);
/* harmony import */ var _utils_helpers_CalculateAge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16196);
/* harmony import */ var _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61106);
/* harmony import */ var _components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70330);
/* harmony import */ var _utils_helpers_getFormattedTime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72416);
/* harmony import */ var _utils_helpers_GetFormatedDate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4860);
/* harmony import */ var _components_common_Models_ViewProfile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_commonCompo_HandleProfileUpload_Modal__WEBPACK_IMPORTED_MODULE_10__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_14__]);
([_commonCompo_HandleProfileUpload_Modal__WEBPACK_IMPORTED_MODULE_10__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const AddressTab = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 2658).then(__webpack_require__.bind(__webpack_require__, 92658)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\Profile.js -> " + "./sections/AddressTab"
        ]
    }
});
const EducationTab = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 8012).then(__webpack_require__.bind(__webpack_require__, 8012)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\Profile.js -> " + "./sections/EducationTab"
        ]
    }
});
const ContactTab = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 748).then(__webpack_require__.bind(__webpack_require__, 50748)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\Profile.js -> " + "./sections/ContactTab"
        ]
    }
});
const ProfessionalTab = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 2091).then(__webpack_require__.bind(__webpack_require__, 82091)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\Profile.js -> " + "./sections/ProfessionalTab"
        ]
    }
});
const PartnerPreferenceTab = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 8848).then(__webpack_require__.bind(__webpack_require__, 98848)), {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\Profile.js -> " + "./sections/PartnerPreferenceTab"
        ]
    }
});













const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\Profile.js -> " + "react-select"
        ]
    },
    ssr: false
});
function Profile() {
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_15__/* .useDarkMode */ .v)();
    const Username = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
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
    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px"
    };
    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    };
    const InputFonts = {
        fontFamily: "Poppins"
    };
    const GeneralTab = ({ data })=>{
        const [userdata, setuserdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
            cast: data?.cast && data?.cast,
            religion: data?.religion && data.religion,
            dateOfBirth: data?.dateOfBirth && data.dateOfBirth,
            birthTime: data?.birthTime && data.birthTime,
            name: data && data.name,
            gender: data?.gender && data.gender,
            writeBoutYourSelf: data?.writeBoutYourSelf && data.writeBoutYourSelf,
            creatingProfileFor: data?.creatingProfileFor
        });
        const handleUpdateGenProfile = ()=>{
            dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .updateMyProfileData */ ._7)(userdata));
        };
        const [CharCount, setCharCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
        const [birthTime, SetBirthTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
        const handleInputChange = (e)=>{
            const value = e.target.value;
            const name = e.target.name;
            if (name === "gender") {
                setuserdata((prevValue)=>({
                        ...prevValue,
                        [name]: value
                    }));
            } else if (name === "religion") {
                const selectedReligion = _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .Religionoptions */ .R1.find((option)=>option.value === value);
                setSelectValue(selectedReligion);
                setuserdata((prevValue)=>({
                        ...prevValue,
                        [name]: value
                    }));
            } else if (name === "cast") {
                console.log("casttttt");
                console.log(userdata);
                const selectedcast = _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .subcastOption */ .ox.find((option)=>option.value === value);
                SetSubCastValue(selectedcast);
                setuserdata((prevValue)=>({
                        ...prevValue,
                        [name]: value
                    }));
            } else if (name == "birthTime") {
                // Get the current date
                const currentDate = moment_timezone__WEBPACK_IMPORTED_MODULE_12___default()();
                // Extract the date parts
                const year = currentDate.year();
                const month = String(currentDate.month() + 1).padStart(2, "0"); // Months are 0-based in moment.js
                const day = String(currentDate.date()).padStart(2, "0");
                // Combine the date with the input time (value) to form an ISO string in UTC
                const isoDateString = moment_timezone__WEBPACK_IMPORTED_MODULE_12___default()(`${year}-${month}-${day}T${value}:00`).tz("Asia/Kolkata").format();
                // Update state with the ISO date string
                setuserdata((prevValue)=>({
                        ...prevValue,
                        [name]: isoDateString
                    }));
                // Also update birth time state (if needed)
                SetBirthTime(value);
            } else if (name === "writeBoutYourSelf") {
                const maxChars = 150;
                if (value.length <= maxChars) {
                    setuserdata((prevValue)=>({
                            ...prevValue,
                            [name]: value
                        }));
                    setCharCount(value.length);
                }
            } else {
                setuserdata((prevValue)=>({
                        ...prevValue,
                        [name]: value
                    }));
            }
        };
        const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const handleEditClick = ()=>{
            setShowForm(!showForm);
        };
        const genralbtnText = {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
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
        const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data?.religion ? _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .Religionoptions */ .R1.find((option)=>option.value === data.religion) : null);
        const [SubCastValue, SetSubCastValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data?.cast ? _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .subcastOption */ .ox.find((option)=>option.value === data.cast) : null);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `w-full ${showForm ? "" : "2xl:h-[360px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]"} border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`,
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
                                        children: showForm ? "Modify General Information" : "General Information"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center",
                                        children: !showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            alt: "editIcon",
                                            width: 20,
                                            height: 20,
                                            onClick: handleEditClick,
                                            src: darkMode ? "/assests/dashboard/icon/edit-details-icon-white.svg" : "/assests/dashboard/icon/edit-details-icon.svg"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                    showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[90%]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "inline-block  2xl:flex lg:flex  2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 2xl:space-x-[12px] lg:space-x-[32px] xl:space-x-[20px]  pt-[10px]",
                                        children: _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .profileOptions */ .hX.map((options)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                id: userdata?.creatingProfileFor == options.value ? "grad-button" : "",
                                                style: genralbtnText,
                                                onClick: ()=>setuserdata(()=>{
                                                        return {
                                                            ...userdata,
                                                            creatingProfileFor: options.value
                                                        };
                                                    }),
                                                className: `2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 ml-[10px] h-[50px] ${options.id === 3 ? "2xl:w-[120px] xl:w-[110px] lg:w-[128px] w-[100px]" : "w-[100px] 2xl:w-[102px] xl:w-[90px] lg:w-[102px]"} bg-[white] rounded-[8px] border-[1px] border-[#e6e6e6]`,
                                                children: options.label
                                            }, options.id);
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%] pt-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between space-x-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: labelText,
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            children: "First Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: InputFonts,
                                                            value: userdata.name,
                                                            onChange: handleInputChange,
                                                            name: "name",
                                                            type: "text",
                                                            placeholder: "First Name",
                                                            className: "text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: labelText,
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            children: "Gender"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "space-x-[15px] flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    id: userdata.gender === "male" ? "grad-button" : "",
                                                                    onClick: ()=>handleInputChange({
                                                                            target: {
                                                                                name: "gender",
                                                                                value: "male"
                                                                            }
                                                                        }),
                                                                    style: genralbtnText,
                                                                    className: "2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[10px]",
                                                                    children: "Male"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    id: userdata.gender === "female" ? "grad-button" : "",
                                                                    onClick: ()=>handleInputChange({
                                                                            target: {
                                                                                name: "gender",
                                                                                value: "female"
                                                                            }
                                                                        }),
                                                                    style: genralbtnText,
                                                                    className: "2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[10px]",
                                                                    children: "Female"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    id: userdata.gender === "other" ? "grad-button" : "",
                                                                    onClick: ()=>handleInputChange({
                                                                            target: {
                                                                                name: "gender",
                                                                                value: "other"
                                                                            }
                                                                        }),
                                                                    style: genralbtnText,
                                                                    className: "2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[10px]",
                                                                    children: "Other"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-[20px] flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: labelText,
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            children: "Date Of Birth"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            name: "dateOfBirth",
                                                            value: userdata.dateOfBirth,
                                                            onChange: handleInputChange,
                                                            type: "date",
                                                            placeholder: "First Name",
                                                            className: "dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: labelText,
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            children: "Time of Birth"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            name: "birthTime",
                                                            onChange: handleInputChange,
                                                            value: birthTime,
                                                            type: "time",
                                                            placeholder: "First Name",
                                                            className: "dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] "
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-[20px] flex justify-between space-x-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            style: labelText,
                                                            children: "Religion"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .Religionoptions */ .R1,
                                                            defaultValue: selectValue,
                                                            placeholder: data && data.religion ? data.religion : "Choose an option",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "religion",
                                                                        value: selectedOption?.value
                                                                    }
                                                                })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: labelText,
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            children: "Caste / Sub Caste"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .subcastOption */ .ox,
                                                            defaultValue: SubCastValue,
                                                            placeholder: data && data.cast ? data.cast : "Choose an option",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "cast",
                                                                        value: selectedOption?.value
                                                                    }
                                                                })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-[20px] flex justify-between space-x-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                                    style: labelText,
                                                                    children: "Height"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                    className: "h-[50px] w-[100px] 2xl:w-[120px] xl:w-[120px] lg:w-[100px] flex justify-end",
                                                                    styles: customStyles,
                                                                    options: _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .heightoption */ .zS,
                                                                    placeholder: data?.height ? data.height : "Select",
                                                                    onChange: (selectedOption)=>handleInputChange({
                                                                            target: {
                                                                                name: "height",
                                                                                value: selectedOption?.value
                                                                            }
                                                                        })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                                    style: labelText,
                                                                    children: "Weight"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                    className: "h-[50px] w-[100px] 2xl:w-[120px] xl:w-[120px] lg:w-[100px] flex justify-end",
                                                                    placeholder: data?.weight ? data.weight : "Select",
                                                                    styles: customStyles,
                                                                    options: _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .weightoption */ .HK,
                                                                    onChange: (selectedOption)=>handleInputChange({
                                                                            target: {
                                                                                name: "weight",
                                                                                value: selectedOption?.value
                                                                            }
                                                                        })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                            style: labelText,
                                                            children: "MaritalStatus"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                            className: "h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end",
                                                            styles: customStyles,
                                                            options: _utils_options_ProfileOptions_GeneralSection__WEBPACK_IMPORTED_MODULE_16__/* .MaritalOptions */ .Q_,
                                                            placeholder: data?.maritalStatus ? data.maritalStatus : "Select",
                                                            onChange: (selectedOption)=>handleInputChange({
                                                                    target: {
                                                                        name: "maritalStatus",
                                                                        value: selectedOption?.value
                                                                    }
                                                                })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-[20px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: labelText,
                                                    className: "dark:text-[#FFF] text-[#000] pb-[10px]",
                                                    children: "Write About Yourself"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    style: InputFonts,
                                                    type: "text",
                                                    name: "writeBoutYourSelf",
                                                    value: userdata.writeBoutYourSelf,
                                                    onChange: handleInputChange,
                                                    className: "text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px]"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "dark:text-[#FFF] text-[#000]",
                                                    children: [
                                                        CharCount,
                                                        "/150"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex justify-end pb-[10px] mt-[10px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                onClick: handleUpdateGenProfile,
                                                className: "rounded-[10px] text-[white] w-[80px] h-[40px]",
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
                                    className: "w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Date of Birth"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]",
                                                    children: data?.birthTime ? (0,_utils_helpers_GetFormatedDate__WEBPACK_IMPORTED_MODULE_19__/* .getFormattedDate */ .L)(data?.dateOfBirth) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Birth of Time"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]",
                                                    children: data?.birthTime ? (0,_utils_helpers_getFormattedTime__WEBPACK_IMPORTED_MODULE_18__/* .getFormattedTime */ .x)(data?.birthTime) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Religion"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]",
                                                    children: data && data.religion ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data.religion) : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: "Caste/Sub Caste"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]",
                                                    children: data && data.cast ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data.cast) : "NA"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: `Height & Weight`
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]",
                                                    children: [
                                                        data?.height + " " + "ft" || 0,
                                                        ", \xa0",
                                                        data?.weight + " " + "kg" || 0,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: Text2,
                                                    className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                    children: `Marital Status`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    style: Text5,
                                                    className: "dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]",
                                                    children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data?.maritalStatus) || "NA"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        });
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { data, status, totalLikes } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.myprofile);
    const [token, settoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const TotalSentRequest = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.usersact.sentrequestdata);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .fetchTotalLikes */ .Pc)());
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__/* .getSentrequestData */ .qX)());
        settoken((0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.getCookie)("authtoken"));
    }, []);
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_14__/* .useSocket */ .s)();
    const [LiveLikeCount, SetLiveLikeCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    socket?.on("message", (data)=>{
        SetLiveLikeCount(data.data.data?.totalResults);
    });
    const [ActiveTab, SetActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const RenderTab = ()=>{
        switch(ActiveTab){
            case 1:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GeneralTab, {
                    data: data
                });
                break;
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddressTab, {
                    AddressID: data?.address
                });
                break;
            case 3:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactTab, {
                    data: data
                });
                break;
            case 4:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EducationTab, {});
                break;
            case 5:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfessionalTab, {});
                break;
            case 6:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_HobbiesTab__WEBPACK_IMPORTED_MODULE_13__["default"], {});
                break;
            case 7:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PartnerPreferenceTab, {
                    partnerPrefID: data?.userPartner
                });
                break;
        }
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [openProfileModal, setOpenProfileModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleOpen = ()=>{
        setIsModalOpen(false);
        setOpenProfileModal(true);
    };
    const handleClose = ()=>setOpenProfileModal(false);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = ()=>setIsModalOpen(true);
    const closeModal = ()=>setIsModalOpen(false);
    if (status === _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .STATUSES */ .n$.LOADING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SKeletonProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " dark:bg-[#18191a] 2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[0px] lg:pr-[30px] pl-[0px] pr-[20px] relative 2xl:left-[40px] xl:left-[45px] lg:left-0 left-[0px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: ` flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:w-full w-full dark:bg-[#18191a] bg-[#FFF]`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-custom-gradient w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-between pb-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>router.push("/longterm/dashboard/seting"),
                                    className: "block lg:hidden cursor-pointer pr-[20px] pt-[20px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: " h-12 w-12 text-lg text-white ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: `bx bx-cog `
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " grid place-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        // onClick={handleOpen}
                                        onClick: openModal,
                                        className: "cursor-pointer",
                                        children: token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: data?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    loading: "lazy",
                                                    alt: "userProfile",
                                                    width: 184,
                                                    height: 184,
                                                    className: " rounded-[50%] mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]",
                                                    src: data.profilePic,
                                                    style: {
                                                        objectFit: "cover"
                                                    }
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    name: (0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.getCookie)("userName"),
                                                    size: "184",
                                                    round: true
                                                })
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            name: (0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.getCookie)("userName"),
                                            size: "184",
                                            round: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pb-[10px] pt-[15px]",
                                        children: data && data.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            style: Username,
                                            className: "dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]",
                                            children: data?.name
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            style: Username,
                                            className: "dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]",
                                            children: "NA"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "dark:bg-[#18191a] space-y-[5px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pb-[10px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "flex justify-center items-center space-x-[20px] md:space-x-[40px] lg:space-x-[40px] xl:space-x-[40px] 2xl:space-x-[40px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                                                    LiveLikeCount,
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
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                                                    TotalSentRequest?.data?.data?.totalResults || 0,
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
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-[10px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "flex justify-center items-center space-x-[8px] md:space-x-[40px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-[10px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                            style: Text2,
                                                            className: "dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]",
                                                            children: [
                                                                data?.gender ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data?.gender) : "NA",
                                                                "\xa0,\xa0",
                                                                (0,_utils_helpers_CalculateAge__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(data?.dateOfBirth)
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                loading: "lazy",
                                                                alt: "bagIcon",
                                                                width: 14,
                                                                height: 12,
                                                                src: "/assests/dashboard/icon/bag-icon.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: Text2,
                                                                className: "dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]",
                                                                children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data?.userProfessional?.jobTitle) || "NA"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                loading: "lazy",
                                                                alt: "loactionIcon",
                                                                width: 10,
                                                                height: 12,
                                                                src: "/assests/dashboard/icon/location-icon.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: Text2,
                                                                className: "dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]",
                                                                children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data?.address?.currentCity) || "NA"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center pt-[10px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "dark:text-[#FFF] text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]",
                                            style: Text2,
                                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_21__/* .capitalizeFirstLetter */ .f)(data?.writeBoutYourSelf) || "About yourSelf"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "dark:bg-[#18191a] hidden lg:flex space-x-[25px] 2xl:space-x-[18px] xl:space-x-[13px] lg:space-x-[35px] pt-[20px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: ActiveTab === 1 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(1),
                                                className: `${ActiveTab === 1 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 19 18",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M9.46349 8.3715C8.24903 8.3715 7.24779 7.97749 6.45977 7.18947C5.67175 6.40145 5.27774 5.39819 5.27774 4.17969C5.27774 2.96117 5.67175 1.95992 6.45977 1.17594C7.24779 0.39198 8.24903 0 9.46349 0C10.678 0 11.6792 0.39198 12.4672 1.17594C13.2552 1.95992 13.6492 2.96117 13.6492 4.17969C13.6492 5.39819 13.2552 6.40145 12.4672 7.18947C11.6792 7.97749 10.678 8.3715 9.46349 8.3715ZM0 18V15.605C0 14.9272 0.179565 14.3368 0.538695 13.8337C0.897825 13.3306 1.36453 12.944 1.93882 12.6738C3.26693 12.0833 4.5472 11.6385 5.77963 11.3392C7.01207 11.0399 8.2399 10.8903 9.46311 10.8903C10.6863 10.8903 11.9111 11.0432 13.1373 11.3489C14.3635 11.6546 15.638 12.0991 16.9609 12.6824C17.5576 12.9518 18.0344 13.3368 18.3914 13.8374C18.7485 14.338 18.927 14.9272 18.927 15.605V18H0ZM1.43164 16.5684H17.4953V15.605C17.4953 15.2766 17.3914 14.962 17.1835 14.6611C16.9757 14.3602 16.7043 14.124 16.3694 13.9525C15.1287 13.3491 13.9583 12.9265 12.8584 12.6847C11.7585 12.4428 10.6268 12.3219 9.46349 12.3219C8.30015 12.3219 7.16003 12.4428 6.04312 12.6847C4.92622 12.9265 3.75789 13.3491 2.53815 13.9525C2.20329 14.124 1.93515 14.3602 1.73375 14.6611C1.53234 14.962 1.43164 15.2766 1.43164 15.605V16.5684ZM9.46349 6.93989C10.2513 6.93989 10.9073 6.67781 11.4314 6.15366C11.9555 5.62952 12.2176 4.97356 12.2176 4.18575C12.2176 3.39794 11.9555 2.74197 11.4314 2.21784C10.9073 1.69371 10.2513 1.43164 9.46349 1.43164C8.67568 1.43164 8.01972 1.69371 7.49558 2.21784C6.97145 2.74197 6.70938 3.39794 6.70938 4.18575C6.70938 4.97356 6.97145 5.62952 7.49558 6.15366C8.01972 6.67781 8.67568 6.93989 9.46349 6.93989Z",
                                                        fill: ActiveTab === 1 ? "white" : "black"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: ActiveTab === 2 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(2),
                                                className: `${ActiveTab === 2 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 15 18",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M7.15162 8.69498C7.57598 8.69498 7.93778 8.54389 8.23702 8.2417C8.53627 7.9395 8.68589 7.57623 8.68589 7.15188C8.68589 6.72751 8.53479 6.36571 8.23259 6.06648C7.93039 5.76723 7.56711 5.61761 7.14276 5.61761C6.7184 5.61761 6.3566 5.76871 6.05737 6.07091C5.75812 6.37311 5.60849 6.73638 5.60849 7.16073C5.60849 7.5851 5.75959 7.9469 6.06179 8.24613C6.36399 8.54537 6.72727 8.69498 7.15162 8.69498ZM7.14719 16.5761C9.12473 14.8122 10.6313 13.1302 11.6668 11.5302C12.7023 9.93022 13.22 8.53234 13.22 7.33657C13.22 5.50894 12.6396 4.00681 11.4787 2.83019C10.3178 1.65355 8.87396 1.06523 7.14719 1.06523C5.42042 1.06523 3.97659 1.65355 2.8157 2.83019C1.6548 4.00681 1.07434 5.50894 1.07434 7.33657C1.07434 8.53234 1.6009 9.93022 2.65402 11.5302C3.70714 13.1302 5.20486 14.8122 7.14719 16.5761ZM7.14719 18C4.76419 15.935 2.97724 14.0134 1.78634 12.2349C0.595445 10.4565 0 8.82368 0 7.33657C0 5.15146 0.706831 3.38242 2.12049 2.02945C3.53414 0.676484 5.20971 0 7.14719 0C9.08467 0 10.7602 0.676484 12.1739 2.02945C13.5876 3.38242 14.2944 5.15146 14.2944 7.33657C14.2944 8.82368 13.6989 10.4565 12.508 12.2349C11.3171 14.0134 9.53019 15.935 7.14719 18Z",
                                                        fill: ActiveTab === 2 ? "white" : "black"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: ActiveTab === 3 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(3),
                                                className: `w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 3 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 19 18",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M16.8456 18C14.8692 18 12.8806 17.4926 10.8797 16.4779C8.87876 15.4631 7.07263 14.1518 5.46128 12.5438C3.84994 10.9359 2.53689 9.13314 1.52212 7.13564C0.507374 5.13815 0 3.1512 0 1.17481C0 0.839154 0.111883 0.559442 0.335649 0.335676C0.559415 0.111892 0.839127 0 1.17479 0H4.2088C4.47972 0 4.71601 0.0875181 4.91768 0.262554C5.11933 0.43759 5.25012 0.673573 5.31006 0.970506L5.94548 3.82678C5.98771 4.0883 5.98158 4.32598 5.9271 4.53983C5.87261 4.75368 5.76831 4.93087 5.61419 5.07139L3.10961 7.52078C4.12846 9.21521 5.25832 10.6767 6.49919 11.9054C7.74006 13.134 9.17025 14.1903 10.7898 15.0743L13.1905 12.5837C13.3675 12.3889 13.5661 12.2534 13.786 12.1771C14.006 12.1008 14.2345 12.0892 14.4715 12.1424L17.0499 12.7104C17.3415 12.7701 17.5761 12.9083 17.7538 13.125C17.9315 13.3416 18.0204 13.6012 18.0204 13.9036V16.8252C18.0204 17.1608 17.9085 17.4406 17.6847 17.6643C17.461 17.8881 17.1813 18 16.8456 18ZM2.49669 6.42772L4.68897 4.30081C4.71622 4.27356 4.73495 4.2361 4.74517 4.18843C4.75539 4.14074 4.75709 4.09648 4.75027 4.05562L4.17002 1.36889C4.1632 1.31441 4.14107 1.27355 4.10362 1.24631C4.06615 1.21906 4.02017 1.20544 3.96569 1.20544H1.34844C1.30757 1.20544 1.27352 1.21906 1.24629 1.24631C1.21903 1.27355 1.20541 1.3076 1.20541 1.34847C1.19179 2.04587 1.29634 2.81307 1.51904 3.65007C1.74174 4.48707 2.06763 5.41295 2.49669 6.42772ZM11.9196 15.6402C12.6456 15.9971 13.4404 16.2749 14.304 16.4738C15.1675 16.6727 15.9569 16.783 16.672 16.8048C16.7128 16.8048 16.7469 16.7912 16.7741 16.7639C16.8014 16.7367 16.815 16.7026 16.815 16.6618V14.0547C16.815 14.0002 16.8014 13.9543 16.7741 13.9168C16.7469 13.8793 16.706 13.8572 16.6515 13.8504L14.2427 13.3539C14.2018 13.3471 14.166 13.3488 14.1354 13.359C14.1047 13.3692 14.0724 13.388 14.0383 13.4152L11.9196 15.6402Z",
                                                        fill: ActiveTab === 3 ? "white" : "black"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: ActiveTab === 4 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(4),
                                                className: `w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 4 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "28",
                                                    height: "18",
                                                    viewBox: "0 0 23 18",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M11.0043 18L3.61065 13.9532V7.95319L0 5.99999L11.0043 0L22.0426 5.99999V13.8957H20.7873V6.73403L18.3979 7.95319V13.9532L11.0043 18ZM11.0043 10.5766L19.3979 5.99999L11.0043 1.48508L2.64466 5.99999L11.0043 10.5766ZM11.0043 16.5766L17.1426 13.2021V8.71486L11.0043 12L4.86594 8.67018V13.2021L11.0043 16.5766Z",
                                                        fill: ActiveTab === 4 ? "white" : "black"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: ActiveTab === 5 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(5),
                                                className: `w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 5 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 20 18",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1.48354 18C1.08019 18 0.73209 17.8536 0.439254 17.5607C0.146418 17.2679 0 16.9198 0 16.5165V4.91141C0 4.50807 0.146418 4.15998 0.439254 3.86714C0.73209 3.57431 1.08019 3.42789 1.48354 3.42789H6.35939V1.48352C6.35939 1.08016 6.5058 0.732074 6.79864 0.439255C7.09146 0.146419 7.43955 0 7.8429 0H11.7C12.1034 0 12.4515 0.146419 12.7443 0.439255C13.0371 0.732074 13.1835 1.08016 13.1835 1.48352V3.42789H18.0594C18.4627 3.42789 18.8108 3.57431 19.1037 3.86714C19.3965 4.15998 19.5429 4.50807 19.5429 4.91141V16.5165C19.5429 16.9198 19.3965 17.2679 19.1037 17.5607C18.8108 17.8536 18.4627 18 18.0594 18H1.48354ZM7.52641 3.42789H12.0165V1.48352C12.0165 1.40439 11.9835 1.33185 11.9176 1.26592C11.8517 1.19997 11.7792 1.167 11.7 1.167H7.8429C7.76377 1.167 7.69124 1.19997 7.62531 1.26592C7.55938 1.33185 7.52641 1.40439 7.52641 1.48352V3.42789ZM18.3759 11.8819H11.795V13.3061H7.77959V11.8819H1.16702V16.5165C1.16702 16.5956 1.19999 16.6681 1.26592 16.7341C1.33187 16.8 1.40441 16.833 1.48354 16.833H18.0594C18.1385 16.833 18.2111 16.8 18.277 16.7341C18.3429 16.6681 18.3759 16.5956 18.3759 16.5165V11.8819ZM8.94662 12.1391H10.628V10.4578H8.94662V12.1391ZM1.16702 10.7149H7.77959V9.29078H11.795V10.7149H18.3759V4.91141C18.3759 4.83229 18.3429 4.75976 18.277 4.69381C18.2111 4.62788 18.1385 4.59491 18.0594 4.59491H1.48354C1.40441 4.59491 1.33187 4.62788 1.26592 4.69381C1.19999 4.75976 1.16702 4.83229 1.16702 4.91141V10.7149Z",
                                                        fill: ActiveTab === 5 ? "white" : "black"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: ActiveTab === 6 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(6),
                                                className: `w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 6 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 18 18",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1.08945 8.46256H4.47997C4.38767 7.6743 4.16965 6.92035 3.82591 6.20071C3.48219 5.48107 3.04737 4.86132 2.52145 4.34147C2.11579 4.92448 1.78208 5.56092 1.52034 6.2508C1.2586 6.94069 1.11497 7.67794 1.08945 8.46256ZM13.52 8.46256H16.9105C16.885 7.68401 16.7414 6.95131 16.4797 6.26447C16.2179 5.57762 15.8842 4.9427 15.4785 4.35971C14.8992 4.92691 14.451 5.55546 14.134 6.24535C13.817 6.93523 13.6123 7.6743 13.52 8.46256ZM2.52145 13.6257C3.08259 13.0585 3.52622 12.4324 3.85234 11.7474C4.17846 11.0623 4.38767 10.3257 4.47997 9.53744H1.08945C1.12103 10.3221 1.26618 11.0538 1.52489 11.7328C1.7836 12.4118 2.11579 13.0427 2.52145 13.6257ZM15.4785 13.6257C15.8842 13.0427 16.2179 12.4102 16.4797 11.7282C16.7414 11.0463 16.885 10.316 16.9105 9.53744H13.52C13.6123 10.3257 13.817 11.0623 14.134 11.7474C14.451 12.4324 14.8992 13.0585 15.4785 13.6257ZM5.56031 8.46256H8.46256V1.08945C7.4411 1.16962 6.48827 1.42073 5.60405 1.8428C4.71982 2.26487 3.93217 2.82874 3.24107 3.5344C3.89452 4.18177 4.42043 4.92874 4.8188 5.77531C5.21719 6.62187 5.46436 7.51762 5.56031 8.46256ZM9.53744 8.46256H12.4397C12.5356 7.51762 12.7837 6.62035 13.1839 5.77074C13.5841 4.92116 14.114 4.17571 14.7735 3.5344C14.0885 2.82874 13.2999 2.26487 12.4078 1.8428C11.5157 1.42073 10.5589 1.16962 9.53744 1.08945V8.46256ZM8.46256 16.9105V9.53744H5.56031C5.46436 10.4945 5.21871 11.3894 4.82337 12.222C4.42802 13.0546 3.90059 13.7915 3.24107 14.4328C3.93217 15.1385 4.70312 15.7078 5.55394 16.1408C6.40476 16.5738 7.3743 16.8304 8.46256 16.9105ZM9.53744 16.9105C10.6196 16.8304 11.5916 16.5768 12.4533 16.1499C13.3151 15.723 14.0885 15.1567 14.7735 14.451C14.114 13.8097 13.5841 13.0697 13.1839 12.2311C12.7837 11.3924 12.5356 10.4945 12.4397 9.53744H9.53744V16.9105ZM9 18C7.75627 18 6.58694 17.7635 5.492 17.2904C4.39706 16.8173 3.44454 16.1757 2.63442 15.3656C1.8243 14.5555 1.1827 13.6029 0.709628 12.508C0.236543 11.4131 0 10.2437 0 9C0 7.75628 0.236543 6.58694 0.709628 5.492C1.1827 4.39706 1.8243 3.44454 2.63442 2.63443C3.44454 1.8243 4.39706 1.1827 5.492 0.709629C6.58694 0.236544 7.75627 0 9 0C10.2437 0 11.4131 0.236544 12.508 0.709629C13.6029 1.1827 14.5555 1.8243 15.3656 2.63443C16.1757 3.44454 16.8173 4.39706 17.2904 5.492C17.7635 6.58694 18 7.75628 18 9C18 10.2437 17.7635 11.4131 17.2904 12.508C16.8173 13.6029 16.1757 14.5555 15.3656 15.3656C14.5555 16.1757 13.6029 16.8173 12.508 17.2904C11.4131 17.7635 10.2437 18 9 18Z",
                                                        fill: ActiveTab === 6 ? "white" : "black"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                id: ActiveTab === 7 ? "grad-btn" : "",
                                                onClick: ()=>SetActiveTab(7),
                                                className: `w-[200px] h-[50px] cursor-pointer  ${ActiveTab === 7 ? "bg-[#0F52BA] text-[#FFF]" : "bg-[#F8F8F8] Text-[#000]"} flex justify-center items-center space-x-[15px] rounded-[27px] hover:bg-[#F3F8FF]`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "19",
                                                        height: "18",
                                                        viewBox: "0 0 19 18",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M9.46349 8.3715C8.24903 8.3715 7.24779 7.97749 6.45977 7.18947C5.67175 6.40145 5.27774 5.39819 5.27774 4.17969C5.27774 2.96117 5.67175 1.95992 6.45977 1.17594C7.24779 0.39198 8.24903 0 9.46349 0C10.678 0 11.6792 0.39198 12.4672 1.17594C13.2552 1.95992 13.6492 2.96117 13.6492 4.17969C13.6492 5.39819 13.2552 6.40145 12.4672 7.18947C11.6792 7.97749 10.678 8.3715 9.46349 8.3715ZM0 18V15.605C0 14.9272 0.179565 14.3368 0.538695 13.8337C0.897825 13.3306 1.36453 12.944 1.93882 12.6738C3.26693 12.0833 4.5472 11.6385 5.77963 11.3392C7.01207 11.0399 8.2399 10.8903 9.46311 10.8903C10.6863 10.8903 11.9111 11.0432 13.1373 11.3489C14.3635 11.6546 15.638 12.0991 16.9609 12.6824C17.5576 12.9518 18.0344 13.3368 18.3914 13.8374C18.7485 14.338 18.927 14.9272 18.927 15.605V18H0ZM1.43164 16.5684H17.4953V15.605C17.4953 15.2766 17.3914 14.962 17.1835 14.6611C16.9757 14.3602 16.7043 14.124 16.3694 13.9525C15.1287 13.3491 13.9583 12.9265 12.8584 12.6847C11.7585 12.4428 10.6268 12.3219 9.46349 12.3219C8.30015 12.3219 7.16003 12.4428 6.04312 12.6847C4.92622 12.9265 3.75789 13.3491 2.53815 13.9525C2.20329 14.124 1.93515 14.3602 1.73375 14.6611C1.53234 14.962 1.43164 15.2766 1.43164 15.605V16.5684ZM9.46349 6.93989C10.2513 6.93989 10.9073 6.67781 11.4314 6.15366C11.9555 5.62952 12.2176 4.97356 12.2176 4.18575C12.2176 3.39794 11.9555 2.74197 11.4314 2.21784C10.9073 1.69371 10.2513 1.43164 9.46349 1.43164C8.67568 1.43164 8.01972 1.69371 7.49558 2.21784C6.97145 2.74197 6.70938 3.39794 6.70938 4.18575C6.70938 4.97356 6.97145 5.62952 7.49558 6.15366C8.01972 6.67781 8.67568 6.93989 9.46349 6.93989Z",
                                                            fill: ActiveTab === 7 ? "white" : "black"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: Text4,
                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                        children: "Partner Preference"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "dark:bg-[#18191a] hidden lg:flex pt-[10px] pb-[30px] ",
                                        children: RenderTab()
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_commonCompo_HandleProfileUpload_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                handleClose: handleClose,
                handleOpen: handleOpen,
                setOpenProfileModal: setOpenProfileModal,
                openProfileModal: openProfileModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Models_ViewProfile__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                Wsize: 347,
                Hsize: 450,
                isOpen: isModalOpen,
                onClose: closeModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        width: "347px",
                        height: "450px",
                        position: "relative",
                        borderRadius: "10px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            // width={347}
                            // height={450}
                            style: {
                                borderRadius: "10px"
                            },
                            layout: "fill" // Ensure the image fills the container
                            ,
                            objectFit: "cover" // Crop to fit without distortion
                            ,
                            alt: "profile",
                            src: data?.profilePic
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-10 absolute bottom-6 grid place-items-center w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: " flex space-x-[19px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: handleOpen,
                                        className: "w-[38px] h-[38px] grid place-items-center bg-[#ffffff] rounded-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            alt: "editIcon",
                                            width: 18,
                                            height: 18,
                                            src: darkMode ? "/assests/dashboard/icon/edit-details-icon-white.svg" : "/assests/dashboard/icon/edit-details-icon.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>console.log(""),
                                        className: "w-[38px] h-[38px] bg-[white] rounded-full grid place-items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M3.21326 13.7097C2.82684 13.7097 2.49772 13.5738 2.22589 13.302C1.95407 13.0302 1.81817 12.701 1.81817 12.3146V1.61881H0.954529V0.755173H4.40907V0.0908203H9.59089V0.755173H13.0454V1.61881H12.1818V12.3146C12.1818 12.7121 12.0487 13.044 11.7824 13.3103C11.5161 13.5766 11.1842 13.7097 10.7867 13.7097H3.21326ZM11.3182 1.61881H2.6818V12.3146C2.6818 12.4696 2.73163 12.597 2.83128 12.6966C2.93092 12.7963 3.05825 12.8461 3.21326 12.8461H10.7867C10.9196 12.8461 11.0414 12.7907 11.1521 12.68C11.2628 12.5693 11.3182 12.4475 11.3182 12.3146V1.61881ZM5.10661 11.1188H5.97027V3.34608H5.10661V11.1188ZM8.0297 11.1188H8.89335V3.34608H8.0297V11.1188Z",
                                                fill: "black"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

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


/***/ }),

/***/ 4860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getFormattedDate)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

// Utility function to get the formatted date
const getFormattedDate = (dateString)=>{
    // Parse the input date string using Moment.js
    const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateString);
    // Format the date as per your requirement (e.g., 'DD/MM/YYYY', 'MMMM Do YYYY', etc.)
    const formattedDate = date.format("YYYY-MM-DD"); // Change format as needed
    return formattedDate;
};


/***/ }),

/***/ 72416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ getFormattedTime)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68362);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);

// Utility function to get the time in Indian Standard Time (IST) format
const getFormattedTime = (isoString)=>{
    // Parse the input time and set the time zone to IST
    const time = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(isoString).tz("Asia/Kolkata");
    // Format the time as per your need (e.g., hh:mm A for 12-hour format with AM/PM)
    const formattedTime = time.format("hh:mm A"); // 12-hour format with AM/PM
    return formattedTime;
};


/***/ }),

/***/ 61106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HK: () => (/* binding */ weightoption),
/* harmony export */   Q_: () => (/* binding */ MaritalOptions),
/* harmony export */   R1: () => (/* binding */ Religionoptions),
/* harmony export */   hX: () => (/* binding */ profileOptions),
/* harmony export */   ox: () => (/* binding */ subcastOption),
/* harmony export */   zS: () => (/* binding */ heightoption)
/* harmony export */ });
const subcastOption = [
    {
        value: "brahmin",
        label: "Brahmin"
    },
    {
        value: "kshatriya",
        label: "Kshatriya"
    },
    {
        value: "vaishya",
        label: "Vaishya"
    },
    {
        value: "shudra",
        label: "Shudra"
    },
    {
        value: "jat",
        label: "Jat"
    },
    {
        value: "rajput",
        label: "Rajput"
    },
    {
        value: "kayastha",
        label: "Kayastha"
    },
    {
        value: "patel",
        label: "Patel"
    },
    {
        value: "agrawal",
        label: "Agrawal"
    },
    {
        value: "baniya",
        label: "Baniya"
    }
];
const Religionoptions = [
    {
        value: "hindu",
        label: "Hindu"
    },
    {
        value: "christianity",
        label: "Christianity"
    },
    {
        value: "islam",
        label: "Islam"
    },
    {
        value: "buddhism",
        label: "Buddhism"
    },
    {
        value: "judaism",
        label: "Judaism"
    },
    {
        value: "sikhism",
        label: "Sikhism"
    },
    {
        value: "taoism",
        label: "Taoism"
    },
    {
        value: "shinto",
        label: "Shinto"
    },
    {
        value: "jainism",
        label: "Jainism"
    },
    {
        value: "bahai",
        label: "Bah\xe1ʼ\xed Faith"
    }
];
const MaritalOptions = [
    {
        label: "Single",
        value: "single"
    },
    {
        label: "Never Married",
        value: "never-married"
    },
    {
        label: "Married",
        value: "married"
    }
];
const profileOptions = [
    {
        id: 1,
        label: "My Self",
        value: "mySelf"
    },
    {
        id: 2,
        label: "My Son",
        value: "mySon"
    },
    {
        id: 3,
        label: "My Daughter",
        value: "myDaughter"
    },
    {
        id: 4,
        label: "My Brother",
        value: "myBrother"
    },
    {
        id: 5,
        label: "My Friend",
        value: "myFriend"
    }
];
const heightoption = Array.from({
    length: 23
}, (v, k)=>{
    const value = k + 5;
    return {
        value,
        label: value.toString()
    };
});
const weightoption = Array.from({
    length: 23
}, (v, k)=>{
    const value = k + 40;
    return {
        value,
        label: value.toString()
    };
});


/***/ })

};
;