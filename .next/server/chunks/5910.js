"use strict";
exports.id = 5910;
exports.ids = [5910];
exports.modules = {

/***/ 35910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function CategorySection() {
    const CategoryTitle = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    };
    const Categories = [
        {
            id: 1,
            title: "Meet New Friends",
            imageURL: "/dating/sections/category/Friends-category.jpg"
        },
        {
            id: 2,
            title: "Looking for Love",
            imageURL: "/dating/sections/category/Love-category.jpg"
        },
        {
            id: 3,
            title: "Movie Date",
            imageURL: "/dating/sections/category/MovieDate-category.jpg"
        },
        {
            id: 4,
            title: "Foodies",
            imageURL: "/dating/sections/category/Foodies-category.jpg"
        },
        {
            id: 5,
            title: "Travel Buddies",
            imageURL: "/dating/sections/category/Travel-category.jpg"
        },
        {
            id: 6,
            title: "Game Lover",
            imageURL: "/dating/sections/category/Gamer-category.jpg"
        },
        {
            id: 7,
            title: "Chit-Chat",
            imageURL: "/dating/sections/category/chitChat-category.jpg"
        },
        {
            id: 7,
            title: "Adventurous",
            imageURL: "/dating/sections/category/Adventurous-category.jpg"
        }
    ];
    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full grid place-items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-[20px] flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "w-full flex justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: SectionTitle,
                                        children: "Browse By Categories"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "grid grid-cols-2 gap-4",
                        children: Categories.map((category)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "cursor-pointer relative w-[272px] h-[160px] rounded-[10px] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        width: 272,
                                        height: 160,
                                        className: "rounded-[10px]",
                                        loading: "lazy",
                                        alt: "Friends",
                                        src: category?.imageURL
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-0 bg-black opacity-50"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute bottom-0 left-0 w-full text-white text-center p-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: CategoryTitle,
                                            className: "font-bold",
                                            children: category?.title
                                        })
                                    })
                                ]
                            }, category?.id);
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySection);


/***/ })

};
;