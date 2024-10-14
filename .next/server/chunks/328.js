"use strict";
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 70328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_hooks_UserActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57484);
/* harmony import */ var _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96556);
/* harmony import */ var _components_layout_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59220);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_hooks_UserActivity__WEBPACK_IMPORTED_MODULE_3__, _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_4__, _components_layout_SideBar__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_7__]);
([_utils_hooks_UserActivity__WEBPACK_IMPORTED_MODULE_3__, _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_4__, _components_layout_SideBar__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// Dynamically import components
const UserStory = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\Layout.js -> " + "../_components/Container/UserStory"
        ]
    },
    ssr: false
});
const SearchUsers = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\Layout.js -> " + "./dashboard/commonCompo/SearchParams/SearcheUsers"
        ]
    },
    ssr: false
});
const SidePanel = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\Layout.js -> " + "../../components/long-term/common/SideSections/SidePanel"
        ]
    },
    ssr: false
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\Layout.js -> " + "../_components/layout/Footer"
        ]
    },
    ssr: false
});
const Layout = ({ Section, Show, children })=>{
    (0,_utils_hooks_UserActivity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Memoize the token to prevent unnecessary API calls
    const token = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken"), []);
    // Handle search functionality
    const handleSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (searchTerm)=>{
        setSearchTerm(searchTerm);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(`${"https://stag.mntech.website/api"}/v1/user/user/userUniqueId/${searchTerm?.toLowerCase()}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setSearchResults(response?.data.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }, [
        token
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                handleSearch: handleSearch
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
            Section !== "profile" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "main-centerlized-content",
                className: "flex justify-center flex-col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "first-child",
                    className: "pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "h-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "story-centerlized-content",
                                className: "h-[60px] pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserStory, {})
                            }),
                            searchTerm === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: children
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: searchResults.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[48vw] h-screen grid place-items-center relative left-[-55px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "No search results"
                                        })
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "translate-x-[10px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchUsers, {
                                        searchResults: searchResults
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidePanel, {
                                Section: Section
                            })
                        ]
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${Show ? "" : "hidden"} pt-[100px]`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_1__]);
_ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// hooks/useUserActivity.js


// import { useSocket } from '../contexts/SocketContext';
const useUserActivity = ()=>{
    const { socket, isUserActive } = (0,_ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (socket) {
            if (isUserActive) {
                socket.emit("userActive");
            } else {
                socket.emit("userInActive");
            }
        }
    }, [
        socket,
        isUserActive
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserActivity);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;