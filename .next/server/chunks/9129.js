"use strict";
exports.id = 9129;
exports.ids = [9129];
exports.modules = {

/***/ 79129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




function GeneralSection() {
    const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
        loadableGenerated: {
            modules: [
                "newuser\\tabs\\GeneralSection.js -> " + "react-select"
            ]
        },
        ssr: false
    });
    const options = [
        {
            value: "option1",
            label: "Option 1"
        },
        {
            value: "option2",
            label: "Option 2"
        },
        {
            value: "option3",
            label: "Option 3"
        }
    ];
    const options2 = [
        {
            value: "option1",
            label: "Option 1"
        },
        {
            value: "option2",
            label: "Option 2"
        },
        {
            value: "option3",
            label: "Option 3"
        }
    ];
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
    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const btnstyle = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const HandleTabclick = ()=>{
        setActiveTab(activeTab + 1);
    };
    const [selectedGender, setSelectedGender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("male");
    const HandleGendertab = (text)=>{
        setSelectedGender(text);
    };
    const [selectedInterest, setSelectInterest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const HandleInterestedrtab = (text)=>{
        setSelectInterest(text);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-[33px] gap-y-[30px] flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[#000]",
                            style: Text1,
                            children: "General Details"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-[1px] w-[74px] bg-[#17C270]"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "2xl:pb-0 xl:pb-0 md: pb-[100px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[#000] pb-[10px]",
                                style: Text2,
                                children: "First Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "First Name",
                                className: "outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[300px] border-[1px] border-[#B5B5B5] pl-[10px] rounded-[8px] "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[#000] pb-[10px]",
                                style: Text2,
                                children: "Date of Birth"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "date",
                                className: "outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#B5B5B5] pl-[10px] rounded-[8px] "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-[300px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[#000] pb-[10px]",
                                style: Text2,
                                children: "Gender"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-x-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        value: "male",
                                        style: btnstyle,
                                        onClick: ()=>HandleGendertab("male"),
                                        className: ` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#FFF] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "male" ? "bg-[#0F52BA]" : "bg-[#F9F9F9] text-black"}`,
                                        children: "Male"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        value: "female",
                                        onClick: ()=>HandleGendertab("female"),
                                        style: btnstyle,
                                        className: ` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "female" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`,
                                        children: "Female"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        value: "other",
                                        onClick: ()=>HandleGendertab("other"),
                                        style: btnstyle,
                                        className: ` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "other" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`,
                                        children: "Other"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-[300px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[#000] pb-[10px]",
                                style: Text2,
                                children: "Interested In"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-x-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        value: "male",
                                        style: btnstyle,
                                        onClick: ()=>HandleInterestedrtab("male"),
                                        className: ` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#FFF] w-[87px] h-[50px] rounded-[8px] ${selectedInterest === "male" ? "bg-[#0F52BA]" : "bg-[#F9F9F9] text-black"}`,
                                        children: "Male"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        value: "female",
                                        onClick: ()=>HandleInterestedrtab("female"),
                                        style: btnstyle,
                                        className: ` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedInterest === "female" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`,
                                        children: "Female"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        value: "other",
                                        onClick: ()=>HandleInterestedrtab("other"),
                                        style: btnstyle,
                                        className: ` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedInterest === "other" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`,
                                        children: "Other"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[#000] pb-[10px]",
                                style: Text2,
                                children: "Religion"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center space-x-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                    className: "h-[50px] w-[300px] flex justify-end",
                                    styles: customStyles,
                                    options: options
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[#000] pb-[10px]",
                                style: Text2,
                                children: "Current City"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center space-x-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                    className: "h-[50px] w-[300px] flex justify-end",
                                    styles: customStyles,
                                    options: options2
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSection);


/***/ })

};
;