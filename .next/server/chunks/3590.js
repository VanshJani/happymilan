"use strict";
exports.id = 3590;
exports.ids = [3590];
exports.modules = {

/***/ 63590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function SearchBar({ SelectedValue, setResults }) {
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SelectedValue);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInput(SelectedValue);
    }, [
        SelectedValue
    ]);
    const fetchData = (value)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((json)=>{
            const results = json.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            setResults(results);
        });
    };
    const handleChange = (value)=>{
        setInput(value);
        fetchData(value);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            placeholder: "Enter Here",
            className: "outline-none pl-[20px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[50px] rounded-[10px]",
            value: input,
            onChange: (e)=>handleChange(e.target.value)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);


/***/ })

};
;