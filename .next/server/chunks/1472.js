"use strict";
exports.id = 1472;
exports.ids = [1472];
exports.modules = {

/***/ 11472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__]);
_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SideBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const menuItem = [
        {
            id: 1,
            path: "/longterm/dashboard/seting/credentials",
            name: "Login Details",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "privacy",
                width: 11,
                height: 14,
                src: "/assests/dashboard/seting/privacy-icon.svg"
            }),
            icon2: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "privacy",
                width: 11,
                height: 14,
                src: "/assests/dashboard/seting/privacy-icon-2.svg"
            })
        },
        {
            id: 2,
            path: "/longterm/dashboard/seting/deleteprofile",
            name: "Profile Setting",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                alt: "delete",
                loading: "lazy",
                width: 13,
                height: 14,
                src: "/assests/dashboard/seting/before-profile-seting.svg"
            }),
            icon2: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                alt: "delete",
                loading: "lazy",
                width: 13,
                height: 14,
                src: "/assests/dashboard/seting/after-profile-seting.svg"
            })
        },
        {
            id: 3,
            path: "/longterm/dashboard/seting/privacyseting",
            name: "Privacy Setting",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "privacy",
                width: 11,
                height: 14,
                src: "/assests/dashboard/seting/before-privacy-seting.svg"
            }),
            icon2: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "privacy",
                width: 11,
                height: 14,
                src: "/assests/dashboard/seting/after-privacy-seting.svg"
            })
        },
        {
            id: 4,
            path: "/longterm/dashboard/seting/emailalert",
            name: "Notifications",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "email",
                width: 14,
                height: 14,
                src: "/assests/dashboard/seting/before-notification-seting.svg"
            }),
            icon2: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "email",
                width: 14,
                height: 14,
                src: "/assests/dashboard/seting/after-notification-seting.svg"
            })
        },
        {
            id: 5,
            path: "/longterm/dashboard/seting/plans",
            name: "Plan Details",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "email",
                width: 14,
                height: 14,
                src: "/assests/dashboard/seting/before-plans-details.svg"
            }),
            icon2: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "email",
                width: 14,
                height: 14,
                src: "/assests/dashboard/seting/after-plans-details.svg"
            })
        },
        {
            id: 6,
            path: "/longterm/dashboard/seting/kyc",
            name: "KYC Details",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "email",
                width: 14,
                height: 14,
                src: "/assests/dashboard/seting/before-kyc-icon.svg"
            }),
            icon2: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                loading: "lazy",
                alt: "email",
                width: 14,
                height: 14,
                src: "/assests/dashboard/seting/after-kyc-icon.svg"
            })
        }
    ];
    const TextTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                id: "separator-sidebar",
                className: " hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0",
                "aria-label": "Sidebar",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-[18px] mt-[40px] h-full flex flex-col space-y-[10px] overflow-y-auto bg-[#FFF] dark:bg-gray-800",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: TextTitle,
                                children: "Account Setting"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "left-0",
                            children: menuItem.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "cursor-pointer link flex mt-[20px] ",
                                    activeclassname: "active",
                                    children: [
                                        router.pathname === item.path ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon w-[30px]",
                                            children: item.icon2
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon w-[30px]",
                                            children: item.icon
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: router.pathname === item.path ? "Seting-menu-grad" : "Seting-menu-grad-before",
                                            className: `mt-[-4px] ml-[5px]`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: item.path,
                                                children: item.name
                                            })
                                        })
                                    ]
                                }))
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;