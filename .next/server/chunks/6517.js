exports.id = 6517;
exports.ids = [6517];
exports.modules = {

/***/ 76517:
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
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45687);
/* harmony import */ var _CanvasPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_image_crop__WEBPACK_IMPORTED_MODULE_2__]);
react_image_crop__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// import Image from "next/image";
const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;
const ImageCropper = ({ setModalOpen, handleClose, closeModal, updateAvatar })=>{
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
            const imageElement = new Image();
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
    const handleCropComplete = (crop)=>{
        if (imgRef.current && crop.width && crop.height) {
            const canvas = previewCanvasRef.current;
            const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
            const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(imgRef.current, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, MIN_DIMENSION, MIN_DIMENSION);
        }
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
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
    const Text3 = {
        color: "#606060",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (loader.process) {
            handleClose();
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__/* .Updateprofileimageprocess */ .O1)());
        }
    }, []);
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
                                    onClick: handleClose,
                                    src: "/assests/social/close.svg"
                                })
                            })
                        ]
                    })
                })
            }),
            InputVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid place-items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "dropzone-file",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative top-[40px] rounded-[10px] grid place-items-center 2xl:w-[540px] 2xl:h-[400px] xl:w-[540px] xl:h-[325px] md:w-[300px] w-[90%] h-[325px] md:h-[325px]  bg-[#F5F5F5]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "dropzone-file",
                                    className: "cursor-pointer opacity-0 absolute",
                                    type: "file",
                                    accept: "image/*",
                                    onChange: onSelectFile
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full grid place-items-center mt-[-10%] mb-[10%]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/loginassests/register-icons/Drag-Drop.svg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[15px] lg:text-[20px]",
                                    style: Text2,
                                    children: "Upload Image"
                                })
                            ]
                        })
                    })
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
                                            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__/* .Updateprofileimage */ .Fb)(CurrentImageData, blobData));
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