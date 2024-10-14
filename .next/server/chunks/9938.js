"use strict";
exports.id = 9938;
exports.ids = [9938];
exports.modules = {

/***/ 99938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eR: () => (/* binding */ LabelStyle2),
/* harmony export */   fW: () => (/* binding */ CareerPageStyle),
/* harmony export */   gF: () => (/* binding */ LabelStyle),
/* harmony export */   hs: () => (/* binding */ LabelStyle3)
/* harmony export */ });
/* unused harmony exports customStyles, customStyle2, HobbycustomStyle, customStyle3 */
const customStyles = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "10px",
            paddingLeft: "8px",
            width: "300px",
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
        }),
    menu: (provided, state)=>({
            ...provided,
            overflow: "auto",
            paddingBottom: "20px"
        })
};
const customStyle2 = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "10px",
            paddingLeft: "8px",
            width: "155px",
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
const HobbycustomStyle = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "10px",
            paddingLeft: "8px",
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
const CareerPageStyle = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "10px",
            paddingLeft: "8px",
            height: "50px",
            borderRadius: "10px",
            border: "1px solid #CDCDCD",
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
const customStyle3 = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "10px",
            paddingLeft: "8px",
            width: "133px",
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
const LabelStyle = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "0px",
            paddingLeft: "0px",
            borderRadius: "0px",
            borderColor: "black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: "border-color 0.3s ease-in-out",
            "&:hover": {
                borderBottomColor: state.isFocused ? "black" : "#C0C0C0"
            }
        }),
    valueContainer: (provided)=>({
            ...provided,
            paddingLeft: "0px"
        }),
    input: (provided)=>({
            ...provided,
            paddingLeft: "0px"
        }),
    placeholder: (provided, state)=>({
            ...provided,
            paddingLeft: "0px"
        }),
    indicatorSeparator: ()=>({
            display: "none"
        })
};
const LabelStyle2 = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "0px",
            paddingLeft: "0px",
            borderRadius: "0px",
            borderColor: "black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: "border-color 0.3s ease-in-out",
            "&:hover": {
                borderBottomColor: state.isFocused ? "black" : "#C0C0C0"
            }
        }),
    valueContainer: (provided)=>({
            ...provided,
            paddingLeft: "0px",
            position: "relative",
            top: "0px"
        }),
    input: (provided)=>({
            ...provided,
            paddingLeft: "0px"
        }),
    placeholder: (provided, state)=>({
            ...provided,
            paddingLeft: "0px",
            position: "relative",
            top: "0px"
        }),
    indicatorSeparator: ()=>({
            display: "none"
        })
};
const LabelStyle3 = {
    control: (provided, state)=>({
            ...provided,
            paddingRight: "0px",
            paddingLeft: "0px",
            borderRadius: "0px",
            borderColor: "black",
            width: "100%",
            height: "50px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: "border-color 0.3s ease-in-out",
            "&:hover": {
                borderBottomColor: state.isFocused ? "black" : "#C0C0C0"
            }
        }),
    valueContainer: (provided)=>({
            ...provided,
            paddingLeft: "0px",
            position: "relative",
            top: "0px"
        }),
    input: (provided)=>({
            ...provided,
            paddingLeft: "0px"
        }),
    placeholder: (provided, state)=>({
            ...provided,
            paddingLeft: "0px",
            position: "relative",
            top: "0px"
        }),
    indicatorSeparator: ()=>({
            display: "none"
        })
};


/***/ })

};
;