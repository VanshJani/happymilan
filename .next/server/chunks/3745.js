exports.id = 3745;
exports.ids = [3745];
exports.modules = {

/***/ 90754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function UploadImage() {
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text3 = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [ImagesData, SetImagesData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [ImageHover, SetImageHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        UploadImageHover: false
    });
    const HandleDeleteImage = (res, indexval)=>{
        const FilteredData = ImagesData?.filter((item, index)=>index !== indexval);
        SetImagesData(FilteredData);
    };
    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((acceptedFiles)=>{
        // Check if more than 5 files are selected
        if (acceptedFiles.length > 3) {
            alert("Please select only 3 images");
            return;
        }
        // Filter for valid files based on type and size
        const validFiles = acceptedFiles.filter((file)=>{
            const isValidType = file.type.startsWith("image/") || file.type.startsWith("video/");
            const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
            // Show alerts for invalid files
            if (!isValidType) {
                alert(`Invalid file type: ${file.name}`);
            } else if (!isValidSize) {
                alert(`File size exceeds 10MB: ${file.name}`);
            }
            return isValidType && isValidSize;
        });
        // Stop processing if some files are invalid
        if (validFiles.length === 0) {
            return;
        }
        // Generate the selectedFiles object with unique IDs
        const selectedFiles = validFiles.map((file, index)=>({
                id: index,
                key: file.name,
                contentType: file.type,
                data: URL.createObjectURL(file),
                isProfile: false
            }));
        // Update ImagesData once after all files are read
        SetImagesData((prev)=>prev.length === 0 ? selectedFiles : [
                ...prev,
                ...selectedFiles
            ]);
        // Process the valid files using FileReader
        validFiles.forEach((file)=>{
            const reader = new FileReader();
            reader.onabort = ()=>console.log("File reading was aborted");
            reader.onerror = ()=>console.log("File reading has failed");
            reader.onload = ()=>{
            // Process file content here if needed
            };
            reader.readAsArrayBuffer(file); // You can adjust this if you need the file content later
        });
    }, [
        ImagesData
    ]);
    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_3__.useDropzone)({
        onDrop
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative top-[80px] flex h-full justify-center flex-wrap w-full lg:w-full 2xl:w-[300px] xl:w-[415px]  pt-[0px] lg:pt-0  gap-y-[20px] gap-x-[17px]",
            children: ImagesData?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                        pagination: {
                            clickable: true
                        },
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination
                        ],
                        className: "mySwiper w-[300px] h-[350px] border-[1px] rounded-[10px] border-gray-300",
                        children: ImagesData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                className: "",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[300px] h-[350px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            className: "absolute top-[15px] z-10 right-[20px] cursor-pointer",
                                            onClick: ()=>HandleDeleteImage(item, index),
                                            loading: "lazy",
                                            alt: "delete",
                                            width: 24,
                                            height: 24,
                                            src: "/assests/dashboard/icon/Trash-icon.svg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: item?.data,
                                            alt: "Image description",
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "rounded-[10px]"
                                        })
                                    ]
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex justify-end mt-[5px] ${ImagesData.length >= 3 ? "hidden" : ""}`,
                        ...getRootProps(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...getInputProps(),
                                className: "hidden"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onMouseEnter: ()=>SetImageHover({
                                        UploadImageHover: true
                                    }),
                                onMouseLeave: ()=>SetImageHover({
                                        UploadImageHover: false
                                    }),
                                alt: "drag-drop",
                                width: 34.818,
                                height: 24,
                                className: "cursor-pointer w-[34.818px] h-[24px]",
                                src: ImageHover.UploadImageHover ? "/assests/profile/after-imageupload-icon.svg" : "/assests/profile/before-imageupload-icon.svg"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ...getRootProps(),
                        className: "border-dashed border-[1px] border-[#B5B5B5] w-[45%] lg:w-[300px] h-[266px] rounded-[8px] ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...getInputProps(),
                                className: "hidden"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-center flex-col items-center h-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        loading: "lazy",
                                        alt: "add-pic",
                                        width: 24,
                                        height: 24,
                                        src: "/assests/stories/gradient-drag-icon.svg",
                                        className: "  h-[31.473px]  w-[31.47px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "w-[92px] text-center text-[12px] text-[#000] pt-[10px]",
                                        style: TitleText,
                                        children: "Select or drag Wedding Photo"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: Text3,
                            children: "Max. 3 Photos (JPEG, PNG)"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62996:
/***/ (() => {



/***/ }),

/***/ 58722:
/***/ (() => {



/***/ }),

/***/ 50167:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;