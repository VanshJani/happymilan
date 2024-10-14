"use strict";
exports.id = 7806;
exports.ids = [7806];
exports.modules = {

/***/ 17806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40362);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _function_DisplayNameSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24915);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);










function PrivacySeting() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.userseting.privacyquestions);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_4__/* .Getprivacyquestions */ .DP)());
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Update local state when 'data' changes
        setFormData(data);
    }, [
        data
    ]);
    // const [originalFormData, setOriginalFormData] = useState(data);
    //  const [Loading, setLoading] = useState(false);
    const [changedQuestionId, setChangedQuestionId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [showbtn, setshowbtn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleOptionChange = (questionIndex, optionIndex)=>{
        setshowbtn(true);
        // Update the selected option in the state
        const updatedFormData = [
            ...formData
        ];
        updatedFormData[questionIndex].options.forEach((option, index)=>{
            option.isSelected = index === optionIndex;
        });
        setFormData(updatedFormData);
        // Set the ID of the changed question
        setChangedQuestionId(updatedFormData[questionIndex].id);
    };
    const { NameChangeloading, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state?.userseting.DisplayName);
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log("start");
        if (status != "") {
            console.log("done");
            setshowbtn(false);
            setopenShortlistModal(true);
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
        }
    }, [
        status
    ]);
    const postDataToApi = ()=>{
        dispatch((0,_store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_4__/* .UpdateDisplayName */ .bV)(SelectedDisplayName));
    };
    const TextHeading = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [SelectedDisplayName, SetSelectedDisplayName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const HandleChangeUserName = (e)=>{
        // dispatch(UpdateDisplayName(e.target.value))
        SetSelectedDisplayName(e.target.value);
        setshowbtn(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-[80px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex mt-[-17px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            id: "setting-text-grad",
                            className: "text-[15px] xl:text-[16px]  ml-[0px]",
                            children: "Privacy Setting"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[500px] lg:w-[640px] xl:w-[700px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: TextHeading,
                            className: " mt-[20px]",
                            children: "This menu enables users to conceal or delete their profile from public visibility"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_function_DisplayNameSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        HandleChangeUserName: HandleChangeUserName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " mt-[10px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                    }),
                    loading ? " " : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                formData?.map((question, questionIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-[20px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-[15px] xl:text-[16px] font-medium mb-[20px]",
                                                children: question.question
                                            }),
                                            question.options.map((option, optionIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-[15px] flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                type: "radio",
                                                                id: `${questionIndex}-${optionIndex}`,
                                                                name: `question-${questionIndex}`,
                                                                checked: option.isSelected,
                                                                onChange: ()=>handleOptionChange(questionIndex, optionIndex)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: `${questionIndex}-${optionIndex}`,
                                                                className: "ml-[10px] text-[13px] xl:text-[14px]",
                                                                children: option.option
                                                            })
                                                        ]
                                                    })
                                                }, optionIndex)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                                            })
                                        ]
                                    }, questionIndex)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-end mt-[10px]",
                                        children: showbtn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: postDataToApi,
                                            id: "grad-button",
                                            className: "w-[100px] h-[40px] rounded-[22px]",
                                            children: "Save"
                                        }) : ""
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                open: openShortlistModal,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                PaperProps: {
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none"
                    }
                },
                BackdropProps: {
                    style: {
                        opacity: 0,
                        backgroundColor: "none",
                        boxShadow: "none"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        padding: "17px 19px 17px 20px"
                    },
                    className: "bg-[#333333] w-[full] rounded-[100px] text-center grid place-items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[14px]",
                        style: Urlmodaltext,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-[#fff]",
                            children: [
                                " ",
                                "Your Display Name Has Been Updated!"
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacySeting);


/***/ })

};
;