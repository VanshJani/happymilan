"use strict";
exports.id = 6937;
exports.ids = [6937];
exports.modules = {

/***/ 11443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Pagination = ({ URL, currentPage, totalPages, onPageChange, darkMode })=>{
    const renderButtons = ()=>{
        const buttons = [];
        const maxButtonsToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);
        if (endPage - startPage + 1 < maxButtonsToShow) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }
        for(let i = startPage; i <= endPage; i++){
            buttons.push(// <Link key={i} href={`${URL}?page=${i}`} className='inline-block'>
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: currentPage === i ? "grid-active-btn" : darkMode ? "DarkPagination" : "pagination-count",
                onClick: ()=>onPageChange(i),
                className: "duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full",
                children: i
            }, i));
        }
        return buttons;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " relative left-[-5px] lg:left-[0px] flex pt-[50px] space-x-[40px] justify-center items-center w-[90%] 2xl:w-full xl:w-full",
        children: [
            currentPage > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>onPageChange(currentPage - 1),
                className: "duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] dark:border-[#FFF] border-[black] grid place-items-center rounded-full",
                children: darkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 7,
                    height: 14,
                    alt: "prev-dark",
                    src: "/assests/gridSection/Prev-Data-dark.svg"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 7,
                    height: 14,
                    alt: "prev-light",
                    src: "/assests/gridSection/Prev-Data.svg"
                })
            }),
            renderButtons(),
            currentPage < totalPages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>onPageChange(currentPage + 1),
                className: "duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] dark:border-[#FFF] border-[black] grid place-items-center rounded-full",
                children: darkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 7,
                    height: 14,
                    className: "transform scale-x-[-1]",
                    alt: "next-dark",
                    src: "/assests/gridSection/Prev-Data-dark.svg"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 7,
                    height: 14,
                    className: "transform scale-x-[-1]",
                    alt: "next-light",
                    src: "/assests/gridSection/Prev-Data.svg"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 35998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const ProfileCardSkeleton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme })=>({
        width: "180px",
        height: "327px",
        backgroundColor: "#FFF",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px"
    }));
const SkeletonWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme })=>({
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
        "& > div": {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
        }
    }));
const ProfileSkeletonLoader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            ...Array(6)
        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProfileCardSkeleton, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "text",
                        width: 120,
                        height: 30
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "circular",
                        width: 102,
                        height: 102
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "text",
                        width: 110,
                        height: 24
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "text",
                        width: 90,
                        height: 20
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "text",
                        width: 90,
                        height: 20
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SkeletonWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "circular"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "circular"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
                                variant: "circular"
                            })
                        ]
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileSkeletonLoader);


/***/ })

};
;