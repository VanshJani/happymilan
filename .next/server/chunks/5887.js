"use strict";
exports.id = 5887;
exports.ids = [5887];
exports.modules = {

/***/ 45887:
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
/* harmony import */ var _utils_helpers_GetFormatedDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4860);
/* harmony import */ var _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99938);
/* harmony import */ var _utils_options_Register_GenralSectionOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10679);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_options_Register_EducationSectionOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73733);
/* harmony import */ var _store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45755);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26642);
/* harmony import */ var _components_Dating_register_sections_MusltiSelectDating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_10__]);
_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(null, {
    loadableGenerated: {
        modules: [
            "dating\\dashboard\\profile\\Sections\\BasicInfo.js -> " + "react-select"
        ]
    },
    ssr: false
});
function BasicInfo() {
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .useDarkMode */ .v)();
    const EnumOfInterest = {
        MEET_NEW_FRIENDS: "meet-new-friends",
        LOOKING_FOR_LOVE: "looking-for-love",
        MOVIE_DATE: "movie-date",
        FOODIES: "foodies",
        TRAVEL_BUDDIES: "travel-buddies",
        GAME_LOVER: "game-lover",
        CHITCHAT: "chit-chat",
        ADVENTUROUS: "adventurous"
    };
    const options = [
        {
            id: 1,
            label: "Meet New Friends",
            value: EnumOfInterest.MEET_NEW_FRIENDS
        },
        {
            id: 2,
            label: "Looking for Love",
            value: EnumOfInterest.LOOKING_FOR_LOVE
        },
        {
            id: 3,
            label: "Movie Date",
            value: EnumOfInterest.MOVIE_DATE
        },
        {
            id: 4,
            label: "Foodies",
            value: EnumOfInterest.FOODIES
        },
        {
            id: 5,
            label: "Travel Buddies",
            value: EnumOfInterest.TRAVEL_BUDDIES
        },
        {
            id: 6,
            label: "Game Lover",
            value: EnumOfInterest.GAME_LOVER
        },
        {
            id: 7,
            label: "Chit Chat",
            value: EnumOfInterest.CHITCHAT
        },
        {
            id: 8,
            label: "Adventurous",
            value: EnumOfInterest.ADVENTUROUS
        }
    ];
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
    const FiledsValue2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const labelText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [showForm, setshowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { details } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.user); // Ensure this is pointing to the correct part of the Redux state
    const [selectedInterests, setSelectedInterests] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [UpdatedData, setUpdatedData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        writeBoutYourSelf: "",
        gender: "",
        religion: "",
        datingData: [
            {
                interestedIn: [],
                CurrentlyLiving: "",
                Ethnicity: ""
            }
        ]
    });
    // UseEffect that updates `updatedData` when `details` changes
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (details) {
            setUpdatedData({
                name: details?.name || "",
                religion: details?.religion || "",
                writeBoutYourSelf: details?.writeBoutYourSelf || "",
                gender: details?.gender || "",
                datingData: [
                    {
                        ...details?.datingData[0],
                        interestedIn: details?.datingData[0]?.interestedIn || [],
                        Ethnicity: details?.datingData[0]?.Ethnicity || "",
                        CurrentlyLiving: details?.datingData[0]?.CurrentlyLiving || ""
                    }
                ]
            });
        }
    }, [
        details
    ]); // Add `details` as a dependency
    const [CharCount, setCharCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === "Ethnicity") {
            setUpdatedData((prev)=>({
                    ...prev,
                    datingData: [
                        {
                            ...prev.datingData[0],
                            Ethnicity: value
                        }
                    ]
                }));
        } else if (name === "CurrentlyLiving") {
            setUpdatedData((prev)=>({
                    ...prev,
                    datingData: [
                        {
                            ...prev.datingData[0],
                            CurrentlyLiving: value
                        }
                    ]
                }));
        } else if (name === "interestedIn") {
            setUpdatedData((prev)=>({
                    ...prev,
                    datingData: [
                        {
                            ...prev.datingData[0],
                            interestedIn: selectedInterests
                        }
                    ]
                }));
        } else {
            setUpdatedData((prev)=>({
                    ...prev,
                    [name]: value
                }));
            if (name === "writeBoutYourSelf") {
                setCharCount(value.length);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setUpdatedData((prev)=>({
                ...prev,
                datingData: [
                    {
                        ...prev.datingData[0],
                        interestedIn: selectedInterests
                    }
                ]
            }));
    }, [
        selectedInterests
    ]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const UpdateData = ()=>{
        dispatch((0,_store_dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_10__/* .updateUserDetails */ .ek)(UpdatedData));
        setshowForm(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `space-y-[20px] w-full ${showForm ? "h-full" : "h-[440px]"} rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px]`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Basic Info"
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
                showForm ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-[1px] bg-[#F1F1F1]"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pt-0 pb-7",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "space-y-[40px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            style: {
                                                width: "100%"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: FildsTitle,
                                                    children: "Purpose"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dating_register_sections_MusltiSelectDating__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    options: options,
                                                    setSelectedValues: setSelectedInterests
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center space-x-[20px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            width: "260px"
                                                        },
                                                        className: "the-input-container",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                value: UpdatedData?.name,
                                                                type: "text",
                                                                id: "name",
                                                                name: "name",
                                                                onChange: handleInputChange,
                                                                required: true,
                                                                style: labelText
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                for: "name",
                                                                style: labelText,
                                                                className: "label text-[16px]",
                                                                children: "First Name"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        className: " w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[260px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "absolute top-[-16px]",
                                                                style: FildsTitle,
                                                                children: "Gender"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                className: "w-[260px]",
                                                                placeholder: UpdatedData?.gender,
                                                                styles: _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_6__/* .LabelStyle */ .gF,
                                                                options: _utils_options_Register_GenralSectionOptions__WEBPACK_IMPORTED_MODULE_7__/* .GenderOption */ .Pt,
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "gender",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            clssName: "",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            width: "260px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "relative top-[-10px]",
                                                                style: labelText,
                                                                children: "Date of Birth"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                style: {
                                                                    width: "260px"
                                                                },
                                                                type: "date",
                                                                name: "dateOfBirth",
                                                                onChange: handleInputChange,
                                                                className: "pb-[5px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000]",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-[260px]",
                                                        style: {
                                                            position: "relative",
                                                            top: "5px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "absolute top-[-16px]",
                                                                style: FildsTitle,
                                                                children: "Currently Living"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                className: "w-[260px]",
                                                                placeholder: UpdatedData?.datingData[0]?.CurrentlyLiving || "Select your location",
                                                                //religion
                                                                styles: _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_6__/* .LabelStyle */ .gF,
                                                                options: _utils_options_Register_EducationSectionOptions__WEBPACK_IMPORTED_MODULE_9__/* .CountryOptions */ .Go,
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "CurrentlyLiving",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            clssName: "",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            width: "260px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "relative top-[-8px]",
                                                                style: labelText,
                                                                children: "Religion"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                style: {
                                                                    width: "260px"
                                                                },
                                                                type: "text",
                                                                value: UpdatedData?.religion,
                                                                name: "religion",
                                                                onChange: handleInputChange,
                                                                className: "pb-[5px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000]",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-[260px]",
                                                        style: {
                                                            position: "relative",
                                                            top: "5px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "absolute top-[-16px]",
                                                                style: FildsTitle,
                                                                children: "Ethnicity"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                className: "w-[260px]",
                                                                placeholder: UpdatedData?.datingData[0]?.Ethnicity || "Select your location",
                                                                styles: _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_6__/* .LabelStyle */ .gF,
                                                                options: _utils_options_Register_EducationSectionOptions__WEBPACK_IMPORTED_MODULE_9__/* .CityOptions */ .nf,
                                                                onChange: (selectedOption)=>handleInputChange({
                                                                        target: {
                                                                            name: "Ethnicity",
                                                                            value: selectedOption?.value
                                                                        }
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    className: "the-input-container",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "absolute right-[10px] text-[14px] text-[#AFAFAF]",
                                                            children: [
                                                                CharCount,
                                                                "\xa0/\xa0150"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: labelText,
                                                            value: UpdatedData?.writeBoutYourSelf,
                                                            onChange: handleInputChange,
                                                            type: "text",
                                                            id: "writeBoutYourSelf",
                                                            name: "writeBoutYourSelf",
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            for: "writeBoutYourSelf",
                                                            className: "label",
                                                            style: labelText,
                                                            children: "Short Bio"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "underline"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
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
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center w-full h-[1px] bg-[#F1F1F1]"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "space-y-[5px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: FildsTitle,
                                                    children: "Purpose"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "flex space-x-[15px]",
                                                    children: details?.datingData[0]?.interestedIn?.map((res, index)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            style: FiledsValue2,
                                                            className: "p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#F2F2F2] text-[#000]",
                                                            children: res
                                                        }, index);
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
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
                                                            children: "Date of Birth"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: FiledsValue,
                                                            children: (0,_utils_helpers_GetFormatedDate__WEBPACK_IMPORTED_MODULE_5__/* .getFormattedDate */ .L)(details?.dateOfBirth) || "NA"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "space-y-[5px] w-[150px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: FildsTitle,
                                                            children: "Currently Living"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: FiledsValue,
                                                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_12__/* .capitalizeFirstLetter */ .f)(details?.datingData?.[0]?.CurrentlyLiving) || "NA"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "space-y-[5px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: FildsTitle,
                                                        children: "Language Spoken"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "flex space-x-[15px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                style: FiledsValue2,
                                                                className: "p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#F2F2F2] text-[#000]",
                                                                children: "Casual Dating"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                style: FiledsValue2,
                                                                className: "p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#F2F2F2] text-[#000]",
                                                                children: "Meet New Friends"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
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
                                                            children: "Religion"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: FiledsValue,
                                                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_12__/* .capitalizeFirstLetter */ .f)(details?.religion) || "NA"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "space-y-[5px] w-[150px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: FildsTitle,
                                                            children: "Ethnicity"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: FiledsValue,
                                                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_12__/* .capitalizeFirstLetter */ .f)(details?.datingData?.[0]?.Ethnicity) || "NA"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicInfo);

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


/***/ })

};
;