"use strict";
exports.id = 5877;
exports.ids = [5877];
exports.modules = {

/***/ 65877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7354);
/* harmony import */ var _store_actions_ImageUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60530);
/* harmony import */ var _store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99419);










function UploadImage({ formData, updateFormData: updateFormData1, openUpload, handleCloseUpload }) {
    const TextTitle = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const Activity = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text4 = {
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    };
    const Text6 = {
        fontFamily: "Poppins",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    };
    const Text7 = {
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [Uname, SetUname] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const name = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userName");
        SetUname(name);
    }, []);
    // const activeTab = 2
    const [activeTab, SetActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const [PreviewImage, SetPreviewImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { userProfile, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.form?.formData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const CloseTheModal = ()=>{
        handleCloseUpload();
        if (PreviewImage.length > 0) {} else {
            SetActiveTab(1);
        }
    };
    const HandleNext = ()=>{
        SetActiveTab(activeTab + 1);
        if (activeTab === 2) {
            handleCloseUpload();
            console.log(PreviewImage);
            dispatch((0,_store_actions_ImageUpload__WEBPACK_IMPORTED_MODULE_8__/* .ImageUpload */ .U)(userProfile));
            setTimeout(()=>{
                dispatch((0,_store_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_9__/* .fetchMyProfileData */ .di)());
                updateFormData1({
                    ...formData,
                    userProfile: {
                        ...formData.userProfile,
                        images: [],
                        bufferdata: ""
                    }
                });
                SetPreviewImage([]);
            }, 2000);
            SetActiveTab(1);
        }
    };
    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((acceptedFiles)=>{
        if (acceptedFiles.length > 5) {
            alert("Please select only 5 images");
            return;
        }
        const selectedImages2 = Array.from(acceptedFiles).map((file, index)=>({
                id: index,
                key: file.name,
                contentType: file.type,
                data: URL.createObjectURL(file),
                isProfile: false
            }));
        SetPreviewImage((prev)=>[
                ...prev,
                ...selectedImages2
            ]);
        acceptedFiles.forEach((file)=>{
            const reader = new FileReader();
            reader.onabort = ()=>console.log("file reading was aborted");
            reader.onerror = ()=>console.log("file reading has failed");
            reader.onload = ()=>{
                // const binaryData = reader.result;
                updateFormData1({
                    ...formData,
                    userProfile: {
                        ...formData.userProfile,
                        images: [
                            ...selectedImages2
                        ],
                        bufferdata: URL.createObjectURL(file)
                    }
                });
                SetActiveTab(activeTab + 1);
            };
            reader.readAsArrayBuffer(file);
        });
    }, []);
    const UploadComponent = ()=>{
        const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)({
            onDrop
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center space-y-[20px] w-[526px] h-[330px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[10px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ...getRootProps(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            alt: "drag-drop",
                            width: 63,
                            height: 44,
                            src: "/loginassests/register-icons/Drag-Drop.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...getInputProps(),
                        className: "hidden"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "dark:text-[#FFF] text-[#000]",
                                style: Text4,
                                children: "Select Photos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "dark:text-[#FFF] text-[#000]",
                                style: Text2,
                                children: "Or drag and drop a file"
                            })
                        ]
                    })
                ]
            })
        });
    };
    const HandleRemove = (index)=>{
        const updatedPreviewImage = PreviewImage.filter((item)=>item.data !== index);
        // Update the state with the filtered array
        SetPreviewImage(updatedPreviewImage);
    };
    const PreviewComponent = ()=>{
        const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)({
            onDrop
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[526px] h-[330px] bg-[#F5F5F5] dark:bg-[#242526] rounded-[10px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex space-x-[20px]",
                    children: [
                        PreviewImage.map((res, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer w-[150px] h-[150px] lg:w-[130px] lg:h-[130px] rounded-[10px] mt-[10px] ml-[10px]",
                                    style: {
                                        backgroundImage: `url(${res.data})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    },
                                    id: "photo-grid-item",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        onClick: ()=>HandleRemove(res.data),
                                        className: "z-[1] cursor-pointer relative ml-[80%] lg:ml-[78%] mt-[5%]",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "12",
                                                fill: "black",
                                                "fill-opacity": "0.4"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M14.1111 10.3333V15.8889H9.66667V10.3333H14.1111ZM13.2778 7H10.5L9.94444 7.55556H8V8.66667H15.7778V7.55556H13.8333L13.2778 7ZM15.2222 9.22222H8.55556V15.8889C8.55556 16.5 9.05556 17 9.66667 17H14.1111C14.7222 17 15.2222 16.5 15.2222 15.8889V9.22222Z",
                                                fill: "white"
                                            })
                                        ]
                                    })
                                }, index)
                            });
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[10px] h-[130px] w-[130px]  rounded-[10px] flex flex-col justify-center items-center dark:bg-[#303133]  bg-[#EBEBEB]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ...getRootProps(),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: "drag-drop",
                                        width: 35,
                                        height: 35,
                                        src: "/loginassests/register-icons/Drag-Drop.svg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    ...getInputProps(),
                                    className: "hidden"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center mt-[5px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "dark:text-[#FFF] text-[#000]",
                                            style: Text6,
                                            children: "Select Photos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "dark:text-[#FFF] text-[#000]",
                                            style: Text7,
                                            children: "Or drag and drop a file"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
    const RenderComponent = ()=>{
        switch(activeTab){
            case 1:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadComponent, {});
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviewComponent, {});
            default:
                return null;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            open: openUpload,
            onClose: handleCloseUpload,
            className: "flex justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {
                className: "dark:bg-[#303133] ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-[20px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "dark:text-[#FFF]",
                                        style: TextTitle,
                                        children: "Upload Photo"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "close-icon",
                                        onClick: CloseTheModal,
                                        className: "w-[24px] h-[24px] cursor-pointer",
                                        src: "/assests/social/close.svg"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                RenderComponent(),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pt-[20px] flex space-x-[28px] justify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            style: Text3,
                                            onClick: CloseTheModal,
                                            className: "w-[126px] h-[44px] rounded-[24px] hover:bg-[#F3F8FF] bg-[#FFF] border-[1px] border-[#0F52BA] text-[#000]",
                                            children: "Close"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            id: "grad-btn",
                                            style: Text3,
                                            onClick: HandleNext,
                                            className: "w-[126px] h-[44px] rounded-[24px] bg-[#0F52BA] border-[1px] border-[#0F52BA] text-[#FFF]",
                                            children: "Publish"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
// export default UploadImage
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)((state)=>({
        formData: state.form.formData
    }), {
    updateFormData: _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_7__/* .updateFormData */ .Zv
})(UploadImage));


/***/ })

};
;