"use strict";
exports.id = 3277;
exports.ids = [3277];
exports.modules = {

/***/ 43728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// components/ViewProfile.js


const ViewProfile = ({ Wsize, Hsize, isOpen, onClose, children })=>{
    // Close modal on clicking outside of it
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOutsideClick = (event)=>{
            if (event.target.id === "custom-modal") {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("click", handleOutsideClick);
        } else {
            window.removeEventListener("click", handleOutsideClick);
        }
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "custom-modal",
        className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",
        style: {
            zIndex: 9999
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                borderRadius: "10px"
            },
            className: `bg-white  rounded shadow-lg w-[${Wsize}px] h-[${Hsize}px] relative`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "z-10 absolute top-3 right-3 text-xl font-bold",
                    onClick: onClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M1.26703 16L0 14.733L6.73297 8L0 1.26703L1.26703 0L8 6.73297L14.733 0L16 1.26703L9.26703 8L16 14.733L14.733 16L8 9.26703L1.26703 16Z",
                            fill: "black"
                        })
                    })
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewProfile);


/***/ })

};
;