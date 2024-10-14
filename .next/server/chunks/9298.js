"use strict";
exports.id = 9298;
exports.ids = [9298];
exports.modules = {

/***/ 49298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99938);



const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\Dating\\register\\sections\\MusltiSelectDating.js -> " + "react-select"
        ]
    },
    ssr: false
});
 // Adjust the path as needed
const ReusableMultiSelect = ({ options, placeholder = "Select your options", styles = _utils_options_styles_SelectBoxStyle__WEBPACK_IMPORTED_MODULE_3__/* .LabelStyle3 */ .hs, setSelectedValues// Custom styles or default styles
 })=>{
    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [datastore, setDatastore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const selectedValues = selectedOptions.map((option)=>option.value);
        setDatastore(selectedValues);
        setSelectedValues(selectedValues);
    }, [
        selectedOptions
    ]);
    // Handle selection
    const handleSelectChange = (selected)=>{
        setSelectedOptions(selected || []);
    };
    // Handle removal of selected option
    const handleRemoveOption = (optionToRemove)=>{
        setSelectedOptions(selectedOptions.filter((option)=>option.value !== optionToRemove.value));
    };
    // Filter options to not show already selected options
    const filteredOptions = options.filter((option)=>!selectedOptions.some((selectedOption)=>selectedOption.value === option.value));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                options: filteredOptions,
                isMulti: true,
                value: selectedOptions,
                onChange: handleSelectChange,
                placeholder: placeholder,
                components: {
                    MultiValueContainer
                },
                styles: styles,
                closeMenuOnSelect: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "selected-options mt-2 flex flex-wrap",
                children: selectedOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-gray-200 text-gray-700 rounded-full px-4 py-1 mr-2 mb-2 cursor-pointer",
                        onClick: ()=>handleRemoveOption(option),
                        children: [
                            option.label,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-2",
                                children: "\xd7"
                            })
                        ]
                    }, option.value))
            })
        ]
    });
};
// Custom MultiValueContainer to hide selected items in the input
const MultiValueContainer = ({ children, ...props })=>{
    return null; // Hide selected options in the input itself
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReusableMultiSelect);


/***/ })

};
;