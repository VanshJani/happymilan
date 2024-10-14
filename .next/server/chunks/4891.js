exports.id = 4891;
exports.ids = [4891];
exports.modules = {

/***/ 84891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72606);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52782);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CanvasPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67455);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_image_crop__WEBPACK_IMPORTED_MODULE_2__]);
react_image_crop__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ASPECT_RATIO = 1;
const MIN_DIMENSION = 100;
const ImageCropper = ({ setModalOpen, closeModal, updateAvatar })=>{
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const previewCanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [crop, setCrop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        aspect: ASPECT_RATIO,
        unit: "%",
        width: MIN_DIMENSION,
        height: MIN_DIMENSION
    });
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ImageData, SetImageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [InputVisible, setInputVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const onSelectFile = (e)=>{
        if (e.target.files.length > 0) {
            // Hide the input element
            setInputVisible(false);
        }
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            const blobUrl = URL.createObjectURL(file);
            SetImageData(file);
            const imageData = {
                contentType: file.type,
                data: blobUrl,
                id: 0,
                key: file.name,
                size: file.size
            };
            const imageElement = new (next_image__WEBPACK_IMPORTED_MODULE_5___default())();
            const imageUrl = reader.result?.toString() || "";
            imageElement.src = imageUrl;
            imageElement.addEventListener("load", (e)=>{
                if (error) setError("");
                const { naturalWidth, naturalHeight } = e.currentTarget;
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setError("Image must be at least 150 x 150 pixels.");
                    return setImgSrc("");
                }
            });
            setImgSrc(imageUrl);
        });
        reader.readAsDataURL(file);
    };
    const onImageLoad = (e)=>{
        const { width, height } = e.currentTarget;
        const cropWidthInPercent = MIN_DIMENSION / width * 100;
        const crop = (0,react_image_crop__WEBPACK_IMPORTED_MODULE_2__.makeAspectCrop)({
            unit: "%",
            width: cropWidthInPercent
        }, ASPECT_RATIO, width, height);
        const centeredCrop = (0,react_image_crop__WEBPACK_IMPORTED_MODULE_2__.centerCrop)(crop, width, height);
        setCrop(centeredCrop);
    };
    const loader = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.usersact.profileimageupdate);
    const SpanStyle = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const Text2 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px" /* 133.333% */ 
    };
    const Text1 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal" /* 133.333% */ 
    };
    const Text3 = {
        color: "#606060",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid place-items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "2xl:w-[540px]  xl:w-[540px]  w-[90%]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "",
                                    style: SpanStyle,
                                    children: "Upload Photo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: "close-icon",
                                    className: "w-[24px] h-[24px] cursor-pointer",
                                    onClick: closeModal,
                                    src: "/assests/social/close.svg"
                                })
                            })
                        ]
                    })
                })
            }),
            InputVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:pb-[20px] lg:pb-0 flex flex-col justify-center items-center space-y-[20px] w-full h-full   md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[230px] 2xl:w-[526px] 2xl:h-[330px] xl:w-[526px] xl:h-[330px] bg-[#F5F5F5] rounded-[10px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    htmlFor: "dropzone-file",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "dropzone-file",
                            className: "cursor-pointer opacity-0 absolute",
                            type: "file",
                            accept: "image/*",
                            onChange: onSelectFile
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-[10%] lg:mt-0 md:w-[60px] md:h-[60px] lg:w-auto lg:h-auto 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                alt: "drag-drop",
                                width: 63,
                                height: 44,
                                src: "/loginassests/register-icons/Drag-Drop.svg"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: Text1,
                                    className: "2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px]",
                                    children: "Select Photos"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Text2,
                                    children: "Or drag and drop a file"
                                })
                            ]
                        })
                    ]
                })
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-400 text-xs",
                children: error
            }),
            imgSrc && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid place-items-center relative top-[40px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "2xl:w-[540px] 2xl:h-[325px] xl:w-[540px] xl:h-[325px] w-[90%] h-[325px] bg-[#000] rounded-[10px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_image_crop__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    crop: crop,
                                    onChange: (pixelCrop, percentCrop)=>setCrop(percentCrop),
                                    circularCrop: true,
                                    keepSelection: true,
                                    aspect: ASPECT_RATIO,
                                    minWidth: MIN_DIMENSION,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        ref: imgRef,
                                        src: imgSrc,
                                        alt: "Upload",
                                        style: {
                                            maxHeight: "325px"
                                        },
                                        onLoad: onImageLoad
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center pt-[20px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: Text3,
                                    children: "Adjust the round object to set your photo"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center relative top-[80px] space-x-[30px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "cursor-pointer w-[125px] h-[49px] rounded-[10px]  bg-[#FFF] border-[1px] border-[black]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "cursor-pointer w-[100px] opacity-0 absolute",
                                        type: "file",
                                        accept: "image/*",
                                        onChange: onSelectFile
                                    }),
                                    "Change"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                id: "grad-button",
                                className: "cursor-pointer w-[125px] h-[49px] rounded-[10px]",
                                onClick: ()=>{
                                    (0,_CanvasPreview__WEBPACK_IMPORTED_MODULE_6__["default"])(imgRef.current, previewCanvasRef.current, (0,react_image_crop__WEBPACK_IMPORTED_MODULE_2__.convertToPixelCrop)(crop, imgRef.current.width, imgRef.current.height));
                                    const canvas = previewCanvasRef.current;
                                    canvas.toBlob((blob)=>{
                                        if (blob) {
                                            const urldata = URL.createObjectURL(blob);
                                            const CurrentImageData = {
                                                key: ImageData.name,
                                                contentType: ImageData.type,
                                                data: urldata
                                            };
                                            const blobData = {
                                                size: blob.size,
                                                type: blob.type,
                                                blob: URL.createObjectURL(blob)
                                            };
                                        }
                                    }, "image/jpeg");
                                },
                                children: [
                                    "Upload",
                                    loader.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "loader",
                                        width: 25,
                                        height: 25,
                                        className: " w-[25px] h-[25px] animate-spin inline relative left-[5px]",
                                        src: "/assests/animation/loaderIcon.svg"
                                    }) : ""
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                ref: previewCanvasRef,
                style: {
                    display: "none"
                },
                width: MIN_DIMENSION,
                height: MIN_DIMENSION
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCropper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52782:
/***/ (() => {



/***/ })

};
;