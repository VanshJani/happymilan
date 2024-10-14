"use strict";
exports.id = 8797;
exports.ids = [8797];
exports.modules = {

/***/ 8797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_icons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26725);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50228);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






function ProductsListModal() {
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .useDarkMode */ .v)();
    const [OpenProductList, SetOpenProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const HandleOpenProductList = ()=>{
        SetOpenProductList(true);
    };
    const handleCloseProductList = ()=>{
        SetOpenProductList(false);
    };
    const BoxStyle = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
    };
    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "14px"
    };
    const Text2 = {
        color: "#A6A4A4",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px"
    };
    const GototPage = (res)=>{
        if (res != "") {
            window.open("https://hmbusiness-eace6.web.app/", "_blank");
            SetOpenProductList(false);
        } else {}
    // window.open('https://hmbusiness-eace6.web.app/', "_blank")
    // SetOpenProductList(false)
    };
    const ProductDataList = [
        {
            id: 1,
            name: "Proxale",
            content: "Explore Nearby Services",
            image: "/assests/product-assests/proffers.svg",
            IconWidth: "36.874px",
            IconHeight: "",
            Url_Link: "https://hmbusiness-eace6.web.app/"
        },
        {
            id: 2,
            name: "Trendigo",
            content: "Shop for Men & Women",
            image: "/assests/product-assests/Trendigo.svg",
            IconWidth: "36.874px",
            IconHeight: "",
            Url_Link: ""
        },
        {
            id: 3,
            name: "AdsKaro",
            content: "Daily Ads Services",
            image: "/assests/product-assests/adskaro.svg",
            IconWidth: "42.507px",
            IconHeight: "",
            Url_Link: ""
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: HandleOpenProductList,
                    className: "cursor-pointer  rounded-full dark:hover:bg-[#383838] hover:bg-[#F3F8FF] p-[8px]",
                    children: darkMode ? _utils_icons_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z["nav-dots-menu"].dark : _utils_icons_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z["nav-dots-menu"].light
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Modal, {
                    id: "fade-menu",
                    MenuListProps: {
                        "aria-labelledby": "fade-button"
                    },
                    BackdropProps: {
                        style: {
                            opacity: 0
                        }
                    },
                    open: OpenProductList,
                    onClose: handleCloseProductList,
                    sx: {
                        outline: "none"
                    },
                    style: {
                        outline: "none",
                        position: "absolute",
                        right: "140px",
                        top: "70px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            outline: "none"
                        },
                        className: "absolute right-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[320px] h-[240px]",
                            style: BoxStyle,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "",
                                children: ProductDataList.map((res, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>GototPage(res.Url_Link),
                                        className: `${res?.id != 2 ? "border-[1px] border-b-[#EEEEEE]" : ""} hover:bg-[#F2F7FF] cursor-pointer flex  w-[100%] h-[80px]`,
                                        style: {
                                            borderRadius: `${res?.id != 3 ? "" : "0 0 10px 10px"}`
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full flex justify-evenly items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        width: 0,
                                                        height: 0,
                                                        src: res?.image,
                                                        alt: "proffers",
                                                        className: ` h-[32px]`,
                                                        loading: "lazy",
                                                        style: {
                                                            width: res?.IconWidth
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-[5px] w-[166px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: Text1,
                                                            children: res?.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: Text2,
                                                            children: res?.content
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 20 20",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M11.077 10L7.24365 6.1667L7.83344 5.5769L12.2566 10L7.83344 14.4232L7.24365 13.8334L11.077 10Z",
                                                            fill: "#BEBEBE"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsListModal);


/***/ })

};
;