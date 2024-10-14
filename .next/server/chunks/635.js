"use strict";
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 80635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react/prop-types */ 

const OtpInput = ({ length = 4, onOtpSubmit = ()=>{} })=>{
    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(length).fill(""));
    const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const InputText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);
    const handleChange = (index, e)=>{
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [
            ...otp
        ];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        // submit trigger
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
        // Move to next input if current field is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };
    const handleClick = (index)=>{
        inputRefs.current[index].setSelectionRange(1, 1);
        // optional
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };
    const handleKeyDown = (index, e)=>{
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: otp.map((value, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                ref: (input)=>inputRefs.current[index] = input,
                value: value,
                onChange: (e)=>handleChange(index, e),
                onClick: ()=>handleClick(index),
                onKeyDown: (e)=>handleKeyDown(index, e),
                placeholder: "0",
                style: InputText,
                className: `border-b-[1px] ${value ? "border-b-[black]" : "border-b-[#DCDCDC]"} outline-none  w-[58px] pb-[10px] ml-[10px] text-center`
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtpInput);


/***/ })

};
;