"use strict";
exports.id = 7993;
exports.ids = [7993];
exports.modules = {

/***/ 47993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40362);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);



const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\seting\\deleteprofile\\comp\\Deleteprofile.js -> " + "react-select"
        ]
    },
    ssr: false
});








function DeleteProfile() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
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
    const options1 = [
        {
            value: "oneWeek",
            label: "1 Week"
        },
        {
            value: "twoWeek",
            label: "2 Week"
        },
        {
            value: "oneMonth",
            label: "1 Week"
        },
        {
            value: "threeMonth",
            label: "3 Week"
        },
        {
            value: "sixMonth",
            label: "6 Week"
        }
    ];
    const options2 = [
        {
            value: "found-my-match",
            label: "Found My Match"
        },
        {
            value: "wants-to-take-break",
            label: "Wants to take a break"
        },
        {
            value: "not-satisfied-by-matches",
            label: "Not Satisfied by matches"
        },
        {
            value: "other-reason",
            label: "Other Reason"
        }
    ];
    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleModelOpen = ()=>{
        setOpenModel(true);
    };
    const handleModelClose = ()=>{
        setOpenModel(false);
    };
    const [modelShow, setModelShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleModelShow = ()=>{
        setModelShow(true);
    };
    const handleModelHide = ()=>{
        setModelShow(false);
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { loading, data, closemodal } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userseting.Profilehide);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((0,cookies_next__WEBPACK_IMPORTED_MODULE_8__.getCookie)("authtoken")) {} else {
            router.push("/login");
        }
    }, [
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (closemodal) {
            setOpenModel(false);
            setModelShow(false);
            dispatch((0,_store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_7__/* .Hidemyprofileclosemodel */ .mP)());
        // console.log("Calling....")
        }
    }, [
        closemodal
    ]);
    const [SelectHideDuration, SetselectHideduration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isProfileHide: true,
        timeForProfileHide: ""
    });
    const HandleSelectHideDuration = (data)=>{
        SetselectHideduration((prev)=>({
                ...prev,
                timeForProfileHide: data.value
            }));
    };
    const HanldeHideProfile = ()=>{
        dispatch((0,_store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_7__/* .Hidemyprofile */ .zk)(SelectHideDuration));
        console.log(SelectHideDuration);
    };
    const [SelectDeleteReason, SetselectDeleteReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isProfileDelete: true,
        reasonForProfileDelete: ""
    });
    const HanldeSelectDeleteReason = (data)=>{
        SetselectDeleteReason((prev)=>({
                ...prev,
                reasonForProfileDelete: data.value
            }));
    };
    const HanldeDeleteProfile = ()=>{
        dispatch((0,_store_actions_UserSettingAction__WEBPACK_IMPORTED_MODULE_7__/* .Hidemyprofile */ .zk)(SelectDeleteReason));
        console.log(SelectDeleteReason);
    };
    const TextHeading = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mt-[-17px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    id: "setting-text-grad",
                    className: "text-[15px] xl:text-[16px]  ml-[0px]",
                    children: "Profile Setting"
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
                className: "mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                            children: "Hide Profile"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[12px] xl:text-[14px] text-[#7C7878] font-medium mt-[1.5%]",
                            children: "Taking this action makes your profile temporarily invisible. Invites or chats are inaccessible"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mt-[5%] justify-between place-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[300px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                        className: "w-[100%] h-[40px] xl:h-[50px]  mt-[10px]  text-[16px] placeholder:text-[black]",
                                        styles: customStyles,
                                        placeholder: " Select Duration",
                                        options: options1,
                                        onChange: HandleSelectHideDuration
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleModelOpen,
                                            id: SelectHideDuration?.timeForProfileHide ? "grad-button" : "DisableBTN",
                                            disabled: !SelectHideDuration?.timeForProfileHide,
                                            className: "text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[120px] h-[40px] xl:h-[50px] rounded-[25px]",
                                            children: "Hide"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "",
                                            BackdropProps: {
                                                style: {
                                                    opacity: 1
                                                }
                                            },
                                            open: openModel,
                                            onClose: ()=>handleModelOpen(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                position: "absolute",
                                                className: " focus:outline-none",
                                                top: "32%",
                                                left: "38%",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    className: "bg-[#fff]    w-[370px] h-[264px] rounded-[10px] border-[1px] border-[#DDD]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[100%] h-[100%] ",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center p-[50px]",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "mt-[10px]",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            className: "text-[20px]",
                                                                            children: "Are you sure want"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-[14px]",
                                                                            children: "Hide Your Profile?"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex gap-[15px] mt-[40px]",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            onClick: handleModelClose,
                                                                            className: "text-[16px] w-[126px] h-[40px] xl:h-[50px] border-[1px] border-[#0F52BA] rounded-[23px]",
                                                                            children: "Not Now"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            id: "grad-button",
                                                                            onClick: HanldeHideProfile,
                                                                            className: "text-[16px] text-[#fff] w-[126px] h-[40px] xl:h-[50px]  rounded-[23px]",
                                                                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                    alt: "loader",
                                                                                    width: 25,
                                                                                    height: 25,
                                                                                    className: "animate-spin inline ",
                                                                                    src: "/assests/animation/loaderIcon.svg"
                                                                                })
                                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    "Yes, Hide",
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mt-[30px] xl:mt-[40px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                            children: "Delete your profile"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[12px] xl:text-[14px] text-[#7C7878] font-medium mt-[1.5%]",
                            children: "You'll lose all profile details, Match interactions, and paid memberships permanently."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mt-[5%] justify-between place-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[300px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                        className: "w-[100%] h-[40px] xl:h-[50px]  mt-[10px]  text-[16px] placeholder:text-[black]",
                                        styles: customStyles,
                                        placeholder: " Select Reason",
                                        options: options2,
                                        onChange: HanldeSelectDeleteReason
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleModelShow,
                                            id: SelectDeleteReason?.reasonForProfileDelete ? "grad-button" : "DisableBTN",
                                            disabled: !SelectDeleteReason?.reasonForProfileDelete,
                                            className: " text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[120px] h-[40px] xl:h-[50px] rounded-[25px]",
                                            children: "Delete"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "",
                                            BackdropProps: {
                                                style: {
                                                    opacity: 1
                                                }
                                            },
                                            open: modelShow,
                                            onClose: ()=>handleModelShow(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                position: "absolute",
                                                className: " focus:outline-none",
                                                top: "32%",
                                                left: "38%",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    className: "bg-[#fff]    w-[370px] h-[264px] rounded-[10px] border-[1px] border-[#DDD]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[100%] h-[100%] ",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center p-[50px]",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "mt-[10px]",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            className: "text-[20px]",
                                                                            children: "Are you sure want"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-[14px]",
                                                                            children: "Delete Your Profile?"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex gap-[15px] mt-[40px]",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            onClick: handleModelHide,
                                                                            className: "hover:bg-[#EFF5FF] text-[16px] w-[126px] h-[40px] xl:h-[50px] border-[1px] border-[#0F52BA] rounded-[23px]",
                                                                            children: "Not Now"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            id: "grad-button",
                                                                            onClick: HanldeDeleteProfile,
                                                                            className: "text-[16px] text-[#fff] w-[126px] h-[40px] xl:h-[50px]  rounded-[23px]",
                                                                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                    alt: "loader",
                                                                                    width: 25,
                                                                                    height: 25,
                                                                                    className: "animate-spin inline ",
                                                                                    src: "/assests/animation/loaderIcon.svg"
                                                                                })
                                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    "Yes, Delete",
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteProfile);


/***/ })

};
;