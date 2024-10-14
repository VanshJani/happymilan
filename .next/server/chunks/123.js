exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 68160:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__RN6IY"
};


/***/ }),

/***/ 70330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68160);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);


 // Import CSS Module
const SaveButton = ({ children, onClick, type = "button", className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${className || ""}`,
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveButton);


/***/ }),

/***/ 123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7354);
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99419);
/* harmony import */ var _components_common_Buttons_SaveButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70330);








const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\profile\\comp\\sections\\HobbiesTab.js -> " + "react-select"
        ]
    },
    ssr: false
});
function HobbiesTab() {
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
    const FitnessDataoption = [
        {
            value: "Running",
            label: "Running"
        },
        {
            value: "Cycling",
            label: "Cycling"
        },
        {
            value: "Yoga",
            label: "Yoga"
        },
        {
            value: "Walking",
            label: "Walking"
        },
        {
            value: "Working Out",
            label: "Working Out"
        },
        {
            value: "Trekking",
            label: "Trekking"
        },
        {
            value: "Aerobics/Zumba",
            label: "Aerobics/Zumba"
        },
        {
            value: "Swimming",
            label: "Swimming"
        }
    ];
    const creativeOption = [
        {
            value: "Writing",
            label: "Writing"
        },
        {
            value: "PlayInstrument",
            label: "Play Instrument"
        },
        {
            value: "Poetry",
            label: "Poetry"
        }
    ];
    const FunOptions = [
        {
            value: "Movie",
            label: "Movie"
        },
        {
            value: "Sports",
            label: "Sports"
        },
        {
            value: "Biking",
            label: "Biking"
        },
        {
            value: "Music",
            label: "Music"
        },
        {
            value: "SocialMedia",
            label: "Social Media"
        }
    ];
    // const { data, status, totalLikes } = useSelector((state) => state.myprofile);
    const [TheData, SetData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { status, partnerpref } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.form?.formData);
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile.profileData?.HobbiesData);
    const { upload, allhobbies } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.form?.formData);
    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleEditClick = ()=>{
        setShowForm(!showForm);
        if (data?.[0]) {
            const Creative = creativeOption.filter((option)=>data[0]?.values.includes(option.value));
            SetData(Creative);
        }
    };
    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        lineHeight: "normal"
    };
    const customStyle = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
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
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const handleInputChange = (event)=>{
        const value = event.target.value;
        const name = event.target.name;
        const values = value.map((item)=>item.value);
        dispatch((0,_store_actions_registerUser__WEBPACK_IMPORTED_MODULE_5__/* .updateHobbies */ .cF)(name, values));
    };
    const SubmitChanges = ()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .updateMyHobbies */ .eM)(allhobbies));
        setShowForm(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_6__/* .fetchMyhoobies */ .xL)());
    }, []);
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
                                    children: showForm ? "Modify Hobbies and Interests" : "Hobbies and Interests"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center",
                                    children: !showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        loading: "lazy",
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
                showForm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-[20px] flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[90%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-semibold",
                                        style: Text1,
                                        children: "Creative"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full mt-[10px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                            options: creativeOption,
                                            placeholder: "Select..",
                                            styles: customStyle,
                                            value: TheData,
                                            onChange: (selectedOption)=>handleInputChange({
                                                    target: {
                                                        name: "creative",
                                                        value: selectedOption
                                                    }
                                                }),
                                            isSearchable: true,
                                            isMulti: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[90%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-semibold",
                                        style: Text1,
                                        children: "Fun"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full mt-[10px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                            options: FunOptions,
                                            placeholder: "Select..",
                                            styles: customStyle,
                                            onChange: (selectedOption)=>handleInputChange({
                                                    target: {
                                                        name: "fun",
                                                        value: selectedOption
                                                    }
                                                }),
                                            isSearchable: true,
                                            isMulti: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[90%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-semibold",
                                        style: Text1,
                                        children: "Fitness"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full mt-[10px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                            // defaultValue={}
                                            options: FitnessDataoption,
                                            placeholder: "Select..",
                                            styles: customStyle,
                                            onChange: (selectedOption)=>handleInputChange({
                                                    target: {
                                                        name: "fitness",
                                                        value: selectedOption
                                                    }
                                                }),
                                            isSearchable: true,
                                            isMulti: true
                                        })
                                    })
                                ]
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]",
                                children: data?.map((res)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: Text2,
                                                        className: "dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]",
                                                        children: res?.category
                                                    }),
                                                    res?.values?.map((val)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                style: Text5,
                                                                className: "dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]",
                                                                children: [
                                                                    val,
                                                                    " , "
                                                                ]
                                                            })
                                                        });
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    });
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HobbiesTab);


/***/ })

};
;