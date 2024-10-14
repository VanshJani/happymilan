"use strict";
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 10679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pt: () => (/* binding */ GenderOption),
/* harmony export */   Q_: () => (/* binding */ MaritalOptions),
/* harmony export */   gG: () => (/* binding */ CasteOptions),
/* harmony export */   hX: () => (/* binding */ profileOptions),
/* harmony export */   ix: () => (/* binding */ religionOptions),
/* harmony export */   yB: () => (/* binding */ motherTongueOption)
/* harmony export */ });
/* unused harmony exports heightoptionFun, weightoptionFun */
const heightoptionFun = (start, end)=>{
    const options = [];
    for(let i = start; i <= end; i++){
        options.push({
            value: i,
            label: i.toString()
        });
    }
    return options;
};
const weightoptionFun = (start, end)=>{
    const options = [];
    for(let i = start; i <= end; i++){
        options.push({
            value: i,
            label: i.toString()
        });
    }
    return options;
};
const GenderOption = [
    {
        value: "male",
        label: "Male"
    },
    {
        value: "female",
        label: "Female"
    },
    {
        value: "other",
        label: "Other"
    }
];
const CasteOptions = [
    {
        value: "brahmin",
        label: "Brahmin"
    },
    {
        value: "kshatriya",
        label: "Kshatriya"
    },
    {
        value: "vaishya",
        label: "Vaishya"
    },
    {
        value: "shudra",
        label: "Shudra"
    },
    {
        value: "jain",
        label: "Jain"
    }
];
const motherTongueOption = [
    {
        value: "english",
        label: "English"
    },
    {
        value: "hindi",
        label: "Hindi"
    },
    {
        value: "gujarati",
        label: "Gujarati"
    }
];
const religionOptions = [
    {
        value: "hindu",
        label: "Hinduism"
    },
    {
        value: "muslim",
        label: "Islam"
    },
    {
        value: "sikh",
        label: "Sikhism"
    }
];
const profileOptions = [
    {
        label: "My Self",
        value: "mySelf"
    },
    {
        label: "My Son",
        value: "mySon"
    },
    {
        label: "My Daughter",
        value: "myDaughter"
    },
    {
        label: "My Brother",
        value: "myBrother"
    },
    {
        label: "My Friend",
        value: "myFriend"
    }
];
const MaritalOptions = [
    {
        label: "Single",
        value: "single"
    },
    {
        label: "Never Married",
        value: "never-married"
    },
    {
        label: "Married",
        value: "married"
    }
];


/***/ })

};
;