"use strict";
exports.id = 4915;
exports.ids = [4915];
exports.modules = {

/***/ 24915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26642);




function DisplayNameSelect({ HandleChangeUserName }) {
    const UserNames = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.myprofile?.data);
    const getInitials = (firstName, lastName)=>{
        if (UserNames?.name === `${firstName?.charAt(0)} ${lastName}`) {
            return `${lastName?.charAt(0)} ${firstName}`;
        } else {
            return `${firstName?.charAt(0)} ${lastName}`;
        }
    };
    const generateRandomName = (firstName, lastName, cast)=>{
        const names = [
            firstName,
            lastName,
            cast
        ];
        const randomFirst = names[Math.floor(Math.random() * names.length)];
        const randomLast = names[Math.floor(Math.random() * names.length)];
        return `${randomFirst} ${randomLast}`;
    };
    const [randomName, setRandomName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (UserNames) {
            const defaultRandomName = generateRandomName(UserNames?.firstName, UserNames?.lastName, UserNames?.cast);
            setRandomName(defaultRandomName);
        }
    }, [
        UserNames
    ]);
    const handleRandomNameClick = ()=>{
        const newRandomName = generateRandomName(UserNames?.firstName, UserNames?.lastName, UserNames?.cast);
        setRandomName(newRandomName);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mt-[20px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                    children: "Select Display Name"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-[20px] flex place-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px]",
                            type: "radio",
                            id: UserNames?.name,
                            name: "os",
                            value: UserNames?.name,
                            onChange: HandleChangeUserName,
                            defaultChecked: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: UserNames?.name,
                            className: "ml-[10px] text-[13px] xl:text-[14px]",
                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_3__/* .capitalizeFirstLetter */ .f)(UserNames?.name)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-[15px] flex place-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px]",
                            type: "radio",
                            id: `${getInitials(UserNames?.firstName, UserNames?.lastName)}`,
                            value: `${getInitials(UserNames?.firstName, UserNames?.lastName)}`,
                            name: "os",
                            onChange: HandleChangeUserName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: `${getInitials(UserNames?.firstName, UserNames?.lastName)}`,
                            className: "ml-[10px] text-[13px] xl:text-[14px]",
                            children: `${getInitials(UserNames?.firstName, UserNames?.lastName)}`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-[15px] flex place-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px]",
                            type: "radio",
                            id: randomName,
                            value: randomName,
                            name: "os",
                            onChange: HandleChangeUserName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: randomName,
                            className: "ml-[10px] text-[13px] xl:text-[14px]",
                            children: randomName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-[15px] ml-[10px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "cursor-pointer",
                                onClick: handleRandomNameClick,
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayNameSelect);


/***/ }),

/***/ 26642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
// src/utils/capitalize.js
const capitalizeFirstLetter = (string)=>{
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};


/***/ })

};
;