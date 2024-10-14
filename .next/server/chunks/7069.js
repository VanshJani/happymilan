"use strict";
exports.id = 7069;
exports.ids = [7069];
exports.modules = {

/***/ 37069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Models_ReportModal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./store/reducers/SpamReportReducer.js
var SpamReportReducer = __webpack_require__(50595);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(48982);
// EXTERNAL MODULE: ./store/type.js
var type = __webpack_require__(77484);
;// CONCATENATED MODULE: ./store/actions/SpamuserAction.js


const UpdateSpamUser = (data)=>({
        type: "UPDATE_SPAM_USER",
        payload: data
    });
const PostSpamUser = (spamdetails)=>{
    return async (dispatch)=>{
        dispatch({
            type: type/* POST_SPAM_REPORT_USER */.Knw
        });
        const axios = __webpack_require__(52167);
        const token = (0,external_cookies_next_.getCookie)("authtoken");
        const data = {
            "spamUserId": spamdetails?.spamUserId,
            "reason": spamdetails?.reason
        };
        if (spamdetails?.remark) {
            data.remark = spamdetails.remark;
        }
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/spam/create-spam`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: type/* POST_SPAM_REPORT_USER_SUCCESS */.Stt
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: type/* POST_SPAM_REPORT_USER_FAILURE */.Ysm
            });
        });
    };
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./pages/_components/Model/Models/ReportModal.js








const DynamicSelect = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Model\\Models\\ReportModal.js -> " + "react-select"
        ]
    },
    ssr: false
});
const Comp1 = ({ handleNextClick, SetSelectedText, onClose })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const Heading = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const customStyles = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
                width: "500px",
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
    const reportReasons = [
        {
            value: "scam-or-fraud",
            label: "Scam or Fraud"
        },
        {
            value: "its-spam",
            label: "Spam or Scam"
        },
        {
            value: "harassment_bullying",
            label: "Harassment or Bullying"
        },
        {
            value: "impersonation",
            label: "Impersonation"
        },
        {
            value: "privacy_violation",
            label: "Privacy Violation"
        },
        {
            value: "misinformation_fake_news",
            label: "Misinformation or Fake News"
        },
        {
            value: "violence_threats",
            label: "Violence or Threats"
        },
        {
            value: "copyright_infringement",
            label: "Copyright Infringement"
        },
        {
            value: "other",
            label: "Other"
        }
    ];
    // "\"reason\" must be one of [just-dont-like-it, its-spam, nudity-or-sexual-activity, bullying-or-harassment, scam-or-fraud]"
    const spamUserData = (0,external_react_redux_.useSelector)((state)=>state.Spamuser.SpamUserdata);
    const handleSelectReport = (e)=>{
        const value = e.target.value;
        dispatch((0,SpamReportReducer/* updateSpamUserdata */.G3)({
            ...spamUserData,
            reason: value?.value
        }));
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `relative  bg-white rounded-lg shadow-lg p-6 w-[588px] md:h-[80%] ${spamUserData?.reason === "other" ? "lg:h-[380px]" : "lg:h-[341px]"}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-center w-full",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                style: Heading,
                                onClick: ()=>SetiscurrentPage(iscurrentPage + 1),
                                children: "Report"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 24,
                                    height: 24,
                                    alt: "close-icon",
                                    className: "cursor-pointer",
                                    onClick: onClose,
                                    loading: "lazy",
                                    src: "/assests/social/close.svg"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            width: "90%",
                            height: "1px",
                            backgroundColor: "#EDEDED"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid place-items-center space-y-[50px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "w-full space-y-[10px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "relative left-[30px] mt-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        style: TitleText,
                                        className: "text-[16px] text-[#000]",
                                        children: "Please select the problems"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full grid place-items-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(DynamicSelect, {
                                        className: "h-[50px] w-[500px] flex justify-end",
                                        styles: customStyles,
                                        options: reportReasons,
                                        // onChange={handleSelectReport}
                                        onChange: (selectedOption)=>handleSelectReport({
                                                target: {
                                                    name: "reason",
                                                    value: selectedOption
                                                }
                                            })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    style: {
                                        display: spamUserData?.reason === "other" ? "" : "none"
                                    },
                                    className: `grid place-items-center`,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                        placeholder: "Write a Reason (Optional)",
                                        style: {
                                            resize: "none",
                                            outline: "none",
                                            paddingTop: "10px",
                                            paddingLeft: "20px",
                                            fontSize: "14px",
                                            width: "500px",
                                            height: "50px",
                                            borderRadius: "10px",
                                            border: "1px solid #e6e6e6"
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: handleNextClick,
                                id: "grad-button",
                                className: "rounded-[10px] w-[500px] h-[50px] rounded-[23px]",
                                children: "Continue"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const Comp2 = ({ handleNextClick, isSelctedText, onClose })=>{
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Heading = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `relative z-10 bg-white rounded-lg shadow-lg p-6 w-[588px] md:h-[80%] lg:h-[370px] `,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-center w-full",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                style: Heading,
                                onClick: ()=>SetiscurrentPage(iscurrentPage + 1),
                                children: "Report"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 24,
                                    height: 24,
                                    alt: "close-icon",
                                    className: "cursor-pointer",
                                    onClick: onClose,
                                    loading: "lazy",
                                    src: "/assests/social/close.svg"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            width: "90%",
                            height: "1px",
                            backgroundColor: "#EDEDED"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid place-items-center space-y-[50px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full space-y-[10px]",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: " grid place-items-center ",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "w-[500px] space-y-[20px] pl-[10px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-[20px]",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                style: TitleText,
                                                className: "text-[16px] text-[#000]",
                                                children: isSelctedText
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            style: ListText,
                                            className: "text-[14px] space-y-[20px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                    children: "We don't allow things such as:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "list-disc pl-[25px] space-y-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: "Encouraging people to engage with content under false pretences"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: "Directing people away from HappyMilan through the misleading use of links"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: handleNextClick,
                                id: "grad-button",
                                className: "rounded-[10px] w-[500px] h-[50px]  rounded-[23px]",
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const Comp3 = ({ handleNextClick, onClose })=>{
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Heading = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const spamUserData = (0,external_react_redux_.useSelector)((state)=>state.Spamuser.SpamUserdata);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `relative z-10 bg-white rounded-lg shadow-lg p-6 w-[588px] md:h-[80%] lg:h-[438px]`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-center w-full",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                style: Heading,
                                onClick: ()=>SetiscurrentPage(iscurrentPage + 1),
                                children: "Thanks for letting us know"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 24,
                                    height: 24,
                                    alt: "close-icon",
                                    className: "cursor-pointer",
                                    loading: "lazy",
                                    onClick: onClose,
                                    src: "/assests/social/close.svg"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            width: "90%",
                            height: "1px",
                            backgroundColor: "#EDEDED"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid place-items-center space-y-[50px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full space-y-[10px]",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: " grid place-items-center ",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "w-[500px] space-y-[20px] pl-[10px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-[500px] text-center mt-[20px]",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                style: ListText,
                                                className: "text-[14px] text-[#A3A3A3]",
                                                children: "We’ll use this information to improve our process. We may also use it to find and remove more spam."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            style: ListText,
                                            className: "text-[14px] space-y-[20px] text-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                style: TitleText,
                                                className: "text-[14px]",
                                                children: "One More Step You Can Take"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "grid place-items-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 34,
                                                height: 34,
                                                loading: "lazy",
                                                src: "/assests/dashboard/icon/Block-not-found.svg"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                    style: ListText,
                                                    className: "text-[14px]",
                                                    children: [
                                                        "Block ",
                                                        spamUserData?.UserName,
                                                        " Profile"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                    style: ListText,
                                                    className: "text-[12px] text-[#A3A3A3]",
                                                    children: "You won’t able to see or contact each other"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: handleNextClick,
                                id: "grad-button",
                                className: "rounded-[10px] w-[500px] h-[50px]  rounded-[23px]",
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
function ReportModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const spamUserData = (0,external_react_redux_.useSelector)((state)=>state.Spamuser.SpamUserdata);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [iscurrentPage1, SetiscurrentPage1] = (0,external_react_.useState)(0);
    const [isSelctedText, SetSelectedText] = (0,external_react_.useState)("");
    const handleNextClick = ()=>{
        if (iscurrentPage1 >= 2) {
            onClose();
            dispatch(PostSpamUser(spamUserData));
        } else {
            SetiscurrentPage1(iscurrentPage1 + 1);
        }
    };
    const renderTabContent = ()=>{
        switch(iscurrentPage1){
            case 0:
                return /*#__PURE__*/ jsx_runtime.jsx(Comp1, {
                    handleNextClick: handleNextClick,
                    onClose: onClose,
                    SetSelectedText: SetSelectedText
                });
            case 1:
                return /*#__PURE__*/ jsx_runtime.jsx(Comp2, {
                    handleNextClick: handleNextClick,
                    onClose: onClose,
                    isSelctedText: isSelctedText
                });
            case 2:
                return /*#__PURE__*/ jsx_runtime.jsx(Comp3, {
                    handleNextClick: handleNextClick,
                    onClose: onClose
                });
            default:
                "";
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Modal, {
            open: isOpen,
            onClose: onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            MenuListProps: {
                "aria-labelledby": "fade-button"
            },
            sx: {
                display: "grid",
                placeItems: "center"
            },
            children: renderTabContent()
        })
    });
}
// export default ReportModal;
/* harmony default export */ const Models_ReportModal = (ReportModal);


/***/ })

};
;