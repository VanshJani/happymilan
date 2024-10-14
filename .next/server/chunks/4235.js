"use strict";
exports.id = 4235;
exports.ids = [4235];
exports.modules = {

/***/ 64235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function HobbySection() {
    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        lineHeight: "normal"
    };
    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const btnText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        border: "1px solid #E8E8E8"
    };
    const sections = [
        {
            hobbies: [
                "Writing",
                "Play Instrument",
                "Poetry",
                "Cooking",
                "Painting",
                "Gardening",
                "Singing",
                "DIY crafts",
                "Blogging",
                "Photography",
                "Dancing",
                "Content Creation"
            ]
        },
        {
            title: "Fun",
            hobbies: [
                "Movie",
                "Sports",
                "Biking",
                "Music",
                "Social Media",
                "Clubbing",
                "Travelling",
                "Shopping",
                "Gaming",
                "Reading",
                "Binge-Watching",
                "Theater & Events"
            ]
        },
        {
            title: "Fitness",
            hobbies: [
                "Running",
                "Cycling",
                "Yoga",
                "Walking",
                "Working Out",
                "Trekking",
                "Aerobics/Zumba",
                "Swimming"
            ]
        }
    ];
    const [selectedHobbies, setSelectedHobbies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const HobbySection = ({ title, hobbies })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-between relative top-[3px] mt-[16px]  ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "relative font-semibold top-[-15px]",
                        style: Text1,
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap lg:w-[680px]  mt-[10px] relative top-[-10px]",
                    children: hobbies.map((res)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `pl-[18px] mr-[8px] mt-[8px] text-left pl-[10px] duration-500 w-[170px] 2xl:w-[216px] xl:w-[216px] lg:w-[207px] md:w-[210px] h-[40px] rounded-[8px] hover:bg-[#0F52BA] hover:text-white ${selectedHobbies.includes(res) ? "bg-[#0F52BA] text-white" : ""}`,
                                    style: btnText,
                                    onClick: ()=>handleHobbyClick(res),
                                    children: res
                                })
                            })
                        });
                    })
                })
            ]
        });
    };
    const handleHobbyClick = (hobby)=>{
        if (selectedHobbies.includes(hobby)) {
            setSelectedHobbies(selectedHobbies.filter((item)=>item !== hobby));
        } else {
            if (selectedHobbies.length < 5) {
                setSelectedHobbies([
                    ...selectedHobbies,
                    hobby
                ]);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-[33px] gap-y-[30px] flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: TitleText,
                            children: "Hobbies and Interest"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-[1px] w-[100%] bg-[#17C270]"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "2xl:w-[664px] xl:w-[664px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " lg:w-[664px] flex justify-between mt-[30px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-semibold",
                                style: Text1,
                                children: "Creative"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "mr-[-55px] lg:mr-[0px] 2xl:ml-[0px] xl-mr-[0px]",
                                style: Text1,
                                children: [
                                    "Selected :",
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "w-full font-bold",
                                        children: [
                                            selectedHobbies.length,
                                            "/5"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            paddingBottom: "190px"
                        },
                        children: sections.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HobbySection, {
                                        title: section.title,
                                        hobbies: section.hobbies,
                                        selectedHobbies: selectedHobbies,
                                        handleHobbyClick: handleHobbyClick
                                    }, section.title),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "w-[90%]  lg:w-[664px] h-[1px] bg-[#ECECEC]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pb-[12px]"
                                    })
                                ]
                            }))
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HobbySection);


/***/ })

};
;