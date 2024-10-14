"use strict";
exports.id = 4858;
exports.ids = [4858];
exports.modules = {

/***/ 64858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57988);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53941);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ContextProvider_ChatSetingContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__]);
([_store_reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import { updateFormData } from '../../../../store/actions/registerUser';




function UploadContent({ formData, updateFormData, handleSendMessage, setMessage }) {
    const { userData } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__/* .UserContext */ .S);
    const { settings } = (0,_ContextProvider_ChatSetingContext__WEBPACK_IMPORTED_MODULE_7__/* .useChatSettings */ .g)();
    const { isMinimized } = settings;
    const [openProfileModal, setOpenProfileModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClick = ()=>{
        setOpenProfileModal(true);
        updateFormData({
            uploadChatImage: {
                imagesdata: "",
                bufferdata: ""
            }
        });
    };
    const handleClose = ()=>setOpenProfileModal(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        if (acceptedFiles.length > 1) {
            alert("Please select only one file");
            return;
        }
        const selectedFile = acceptedFiles[0];
        const userId = userData?.id;
        dispatch((0,_store_reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__/* .setUploadUIVisibility */ .k4)({
            userId,
            isVisible: true
        }));
        const fileData = {
            id: selectedFile?.name,
            key: selectedFile?.name,
            contentType: selectedFile?.type,
            data: URL.createObjectURL(selectedFile),
            isProfile: false
        };
        updateFormData({
            uploadChatImage: {
                imagesdata: fileData,
                bufferdata: URL.createObjectURL(selectedFile) // Keep the file itself in bufferdata
            }
        });
        handleClose();
    }, [
        dispatch,
        updateFormData,
        userData?.id
    ]);
    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_3__.useDropzone)({
        onDrop,
        maxFiles: 1
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Modal, {
                id: "fade-menu",
                MenuListProps: {
                    "aria-labelledby": "fade-button"
                },
                BackdropProps: {
                    style: {
                        opacity: 0
                    }
                },
                open: openProfileModal,
                onClose: handleClose,
                sx: {
                    outline: "none"
                },
                style: {
                    outline: "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                    sx: {
                        position: "absolute",
                        bottom: "110px",
                        right: isMinimized ? undefined : "230px",
                        left: isMinimized ? "340px" : undefined,
                        height: "150px",
                        width: "200px",
                        background: "#FFF",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        borderRadius: "10px"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex flex-col justify-evenly  h-full pl-[5px] pr-[5px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                ...getRootProps(),
                                className: "p-[10px]  rounded-[10px] hover:bg-[#F1F6FF] cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ...getInputProps(),
                                        type: "file",
                                        className: "cursor-pointer opacity-0 w-[11px] absolute"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-[20px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[20px] h-[20px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    "stroke-width": "1.5",
                                                    stroke: "currentColor",
                                                    class: "size-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Image"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                ...getRootProps(),
                                className: "p-[10px]  rounded-[10px] hover:bg-[#F1F6FF] cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ...getInputProps(),
                                        type: "file",
                                        className: "cursor-pointer opacity-0 w-[11px] absolute"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-[20px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[20px] h-[20px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    "stroke-width": "1.5",
                                                    stroke: "currentColor",
                                                    class: "size-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Video"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-[10px]  rounded-[10px] hover:bg-[#F1F6FF] cursor-pointer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[20px] h-[20px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1.5",
                                                stroke: "currentColor",
                                                class: "size-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Audio"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "cursor-pointer",
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "11",
                    height: "20",
                    viewBox: "0 0 11 20",
                    fill: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M11 14.55C11 16.0694 10.4625 17.3576 9.3875 18.4145C8.3125 19.4715 7.01667 20 5.5 20C3.98333 20 2.6875 19.4792 1.6125 18.4375C0.5375 17.3958 -1.69746e-07 16.1167 -2.36042e-07 14.6L-7.05939e-07 3.85C-7.52218e-07 2.79125 0.379533 1.88489 1.1386 1.13092C1.89768 0.376974 2.81018 -1.22837e-07 3.8761 -1.6943e-07C4.94203 -2.16023e-07 5.85417 0.376974 6.6125 1.13092C7.37083 1.88489 7.75 2.79125 7.75 3.85L7.75 13.725C7.75 14.362 7.53216 14.9004 7.09648 15.3402C6.66079 15.7801 6.12746 16 5.49648 16C4.86549 16 4.33333 15.7708 3.9 15.3125C3.46667 14.8542 3.25 14.3083 3.25 13.675L3.25 3.85L4.25 3.85L4.25 13.7C4.25 14.05 4.36938 14.3542 4.60813 14.6125C4.84686 14.8708 5.14269 15 5.49563 15C5.84854 15 6.14583 14.875 6.3875 14.625C6.62917 14.375 6.75 14.075 6.75 13.725L6.75 3.85C6.75 3.052 6.47259 2.3775 5.91777 1.8265C5.36297 1.2755 4.68381 1 3.88027 1C3.07676 1 2.39583 1.2755 1.8375 1.8265C1.27917 2.3775 0.999999 3.052 0.999999 3.85L1 14.65C1 15.8667 1.44062 16.8958 2.32187 17.7375C3.20313 18.5792 4.2625 19 5.5 19C6.75 19 7.8125 18.5708 8.6875 17.7125C9.5625 16.8542 10 15.8083 10 14.575L10 3.85L11 3.85L11 14.55Z",
                        fill: "black"
                    })
                })
            })
        ]
    });
}
// export default UploadContent
// export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(UploadContent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;