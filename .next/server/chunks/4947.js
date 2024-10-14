exports.id = 4947;
exports.ids = [4947];
exports.modules = {

/***/ 96263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useChatSettings),
/* harmony export */   q: () => (/* binding */ ChatSettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// context/ChatSettingsContext.js


// Create context
const ChatSettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Provider component
const ChatSettingsProvider = ({ children })=>{
    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        theme: "light",
        isMinimized: false
    });
    // Load settings from localStorage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedSettings = localStorage.getItem("chatSettings");
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);
    // Save settings to localStorage whenever they change
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("chatSettings", JSON.stringify(settings));
    }, [
        settings
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatSettingsContext.Provider, {
        value: {
            settings,
            setSettings
        },
        children: children
    });
};
// Custom hook for easier usage
const useChatSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChatSettingsContext);


/***/ }),

/***/ 50228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ DarkModeProvider),
/* harmony export */   v: () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// DarkModeContext.js


const DarkModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const DarkModeProvider = ({ children })=>{
    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Function to toggle dark mode
    const toggleDarkMode = ()=>{
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode)); // Store mode in local storage
    };
    // Effect to set initial mode from local storage on component mount
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedMode = JSON.parse(localStorage.getItem("darkMode"));
        if (savedMode !== null) {
            setDarkMode(savedMode);
        }
    }, []);
    // Add or remove 'dark' class from documentElement based on dark mode state
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Cleanup function to remove event listener
        return ()=>{
            document.documentElement.classList.remove("dark");
        };
    }, [
        darkMode
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkModeContext.Provider, {
        value: {
            darkMode,
            toggleDarkMode
        },
        children: children
    });
};
let useDarkMode = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DarkModeContext);


/***/ }),

/***/ 79118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useSocket),
/* harmony export */   w: () => (/* binding */ SocketProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14612);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useSocket = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);
const SocketProvider = ({ children })=>{
    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)("authtoken");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (token) {
            const newSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io.connect(`${"https://stag.mntech.website"}`, {
                path: "/api/socket.io",
                query: {
                    token: token
                }
            });
            newSocket.on("connect", ()=>{
                console.log("Connected to socket");
            });
            setSocket(newSocket);
            return ()=>{
                newSocket.disconnect();
            };
        }
    }, [
        token
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocketContext.Provider, {
        value: socket,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ UserActivityProvider),
/* harmony export */   s: () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// contexts/SocketContext.js




const SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const useSocket = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(SocketContext);
const UserActivityProvider = ({ children })=>{
    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [isUserActive, setIsUserActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const newSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io.connect(`${"https://stag.mntech.website"}`, {
            path: "/api/socket.io",
            query: {
                token: Token
            }
        });
        newSocket.on("connect", ()=>{});
        setSocket(newSocket);
        newSocket?.on("onlineUser", (data)=>{});
        const handleActivity = ()=>{
            setIsUserActive(true);
            newSocket.emit("userActive");
        };
        const handleInactivity = ()=>{
            setIsUserActive(false);
            newSocket.emit("userInActive");
        };
        window.addEventListener("focus", handleActivity);
        window.addEventListener("blur", handleInactivity);
        window.addEventListener("beforeunload", handleInactivity);
        return ()=>{
            newSocket.close();
            window.removeEventListener("focus", handleActivity);
            window.removeEventListener("blur", handleInactivity);
            window.removeEventListener("beforeunload", handleInactivity);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocketContext.Provider, {
        value: {
            socket,
            isUserActive
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ UserContext),
/* harmony export */   x: () => (/* binding */ UsersConversationProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// Create the context
const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
// Create the context provider component
const UsersConversationProvider = ({ children })=>{
    // Define state to store user data
    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // Define functions to update user data
    const updateUser = (newData)=>{
        console.log("\uD83D\uDE80 ~ updateUser ~ newData:", newData);
        setUserData(newData);
    };
    // Value object to provide to consuming components
    const value = {
        userData,
        updateUser
    };
    // Return the context provider with its value
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: value,
        children: children
    });
};
// Export the context and its provider


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81922);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_hooks_useFcmToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1726);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50228);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53941);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79118);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10245);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ContextProvider_ChatSetingContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96263);
/* harmony import */ var _ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__, _utils_hooks_useFcmToken__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_10__, _ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_14__]);
([_store_store__WEBPACK_IMPORTED_MODULE_4__, _utils_hooks_useFcmToken__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_10__, _ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const { fcmToken, notificationPermissionStatus } = (0,_utils_hooks_useFcmToken__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    // Use the token as needed
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (fcmToken) {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.setCookie)("fcmToken", fcmToken, {
                path: "/",
                maxAge: 604800
            }); // Set the token in a cookie with a 7-day expiration (maxAge is in seconds)
            console.log("FCM token stored in cookie:", fcmToken);
        // You can perform further actions with the FCM token here
        }
    }, [
        fcmToken
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "HappyMilan"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Your meta description goes hereerrr"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
                store: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_5__.SessionProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_8__/* .DarkModeProvider */ .W, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_10__/* .SocketProvider */ .w, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__/* .UsersConversationProvider */ .x, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContextProvider_ChatSetingContext__WEBPACK_IMPORTED_MODULE_13__/* .ChatSettingsProvider */ .q, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContextProvider_UserActivityContext__WEBPACK_IMPORTED_MODULE_14__/* .UserActivityProvider */ .G, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                ...pageProps
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
// _document.js


class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    className: "dark:bg-[#18191a]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 55395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EG: () => (/* binding */ CreateLikeUser),
/* harmony export */   Fl: () => (/* binding */ UnlikeTheUser),
/* harmony export */   G_: () => (/* binding */ FETCH_ALL_USERS_REQUEST),
/* harmony export */   HC: () => (/* binding */ UNLIKE_USER),
/* harmony export */   Nw: () => (/* binding */ SEND_REQUEST),
/* harmony export */   UH: () => (/* binding */ ADD_NEW_SHORTLIST),
/* harmony export */   Uq: () => (/* binding */ FETCH_ALL_USERS_PAGINATED_REQUEST),
/* harmony export */   WZ: () => (/* binding */ userDatas),
/* harmony export */   Wo: () => (/* binding */ REMOVE_REQUEST),
/* harmony export */   Wx: () => (/* binding */ MARK_SHORTLISTS_AS_SEEN),
/* harmony export */   _w: () => (/* binding */ ADD_TO_SHORTLIST),
/* harmony export */   cc: () => (/* binding */ FETCH_ALL_USERS_PAGINATED_SUCCESS),
/* harmony export */   kG: () => (/* binding */ FETCH_ALL_USERS_PAGINATED_FAILURE),
/* harmony export */   ky: () => (/* binding */ RemoveShortlist),
/* harmony export */   mU: () => (/* binding */ FETCH_ALL_USERS_SUCCESS),
/* harmony export */   q9: () => (/* binding */ addToShortlist),
/* harmony export */   v0: () => (/* binding */ LIKE_USER),
/* harmony export */   y7: () => (/* binding */ FETCH_ALL_USERS_FAILURE),
/* harmony export */   z2: () => (/* binding */ FetchMoreSuggestiondata)
/* harmony export */ });
/* unused harmony exports ADD_TO_SHORTLIST_REQUEST, ADD_TO_SHORTLIST_SUCCESS, ADD_TO_SHORTLIST_FAILURE, likeUser, unlikeUser, sendRequest, removeRequest, fetchallusersPagination */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UsersAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45687);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/allUsersActions.js





const FETCH_ALL_USERS_REQUEST = "FETCH_ALL_USERS_REQUEST";
const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
const FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE";
const FETCH_ALL_USERS_PAGINATED_REQUEST = "FETCH_ALL_USERS_PAGINATED_REQUEST";
const FETCH_ALL_USERS_PAGINATED_SUCCESS = "FETCH_ALL_USERS_PAGINATED_SUCCESS";
const FETCH_ALL_USERS_PAGINATED_FAILURE = "FETCH_ALL_USERS_PAGINATED_FAILURE";
const ADD_TO_SHORTLIST_REQUEST = "ADD_TO_SHORTLIST_REQUEST";
const ADD_TO_SHORTLIST_SUCCESS = "ADD_TO_SHORTLIST_SUCCESS";
const ADD_TO_SHORTLIST_FAILURE = "ADD_TO_SHORTLIST_FAILURE";
const ADD_NEW_SHORTLIST = "ADD_NEW_SHORTLIST";
const MARK_SHORTLISTS_AS_SEEN = "MARK_SHORTLISTS_AS_SEEN";
const ADD_TO_SHORTLIST = "ADD_TO_SHORTLIST";
const LIKE_USER = "LIKE_USER";
const UNLIKE_USER = "UNLIKE_USER";
const SEND_REQUEST = "SEND_REQUEST";
const REMOVE_REQUEST = "REMOVE_REQUEST";
const likeUser = (userId)=>({
        type: LIKE_USER,
        payload: userId
    });
const CreateLikeUser = (user)=>{
    return async (dispatch)=>{
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
        let data = JSON.stringify({
            "likedUserId": user?.userId,
            "isLike": user?.status
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/like/create-like`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: LIKE_USER,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const UnlikeTheUser = (Postdata)=>{
    console.log("\uD83D\uDE80 ~ UnlikeTheUser ~ Postdata:", Postdata);
    return async (dispatch)=>{
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
        let data = JSON.stringify({
            "likedUserId": Postdata.likedUserId,
            "isLike": false
        });
        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/like/update-like/${Postdata.id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: LIKE_USER,
                payload: response.data
            });
            dispatch((0,_UsersAction__WEBPACK_IMPORTED_MODULE_3__/* .Getlikeduserdata */ .B2)());
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const unlikeUser = (userId)=>({
        type: UNLIKE_USER,
        payload: userId
    });
const sendRequest = (userId)=>({
        type: SEND_REQUEST,
        payload: userId
    });
const removeRequest = (userId)=>({
        type: REMOVE_REQUEST,
        payload: userId
    });
const fetchallusersPagination = (CurrentPage)=>async (dispatch)=>{
        dispatch({
            type: FETCH_ALL_USERS_PAGINATED_REQUEST
        });
        try {
            const token = getCookie("authtoken");
            const response = await axios.get(`${"https://stag.mntech.website/api"}/v1/user/user/getUserByGender?page=${CurrentPage}&limit=6`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = response?.data?.data;
            dispatch({
                type: FETCH_ALL_USERS_PAGINATED_SUCCESS,
                // payload: response?.data?.data,
                payload: {
                    userData: data?.users,
                    totalPages: data?.totalPages,
                    currentPage: data?.currentPage
                }
            });
        } catch (error) {
            dispatch({
                type: FETCH_ALL_USERS_PAGINATED_FAILURE,
                payload: error.message
            });
        }
    };
//Add Shortlist 
const addNewShortlist = ()=>({
        type: ADD_NEW_SHORTLIST
    });
const addToShortlist = (shortlistId)=>async (dispatch)=>{
        dispatch({
            type: ADD_TO_SHORTLIST_REQUEST
        });
        try {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"https://stag.mntech.website/api"}/v1/user/shortlist/create-shortlist`, {
                shortlistId
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            // Dispatch success action if the request is successful
            dispatch({
                type: ADD_TO_SHORTLIST_SUCCESS,
                payload: response.data
            });
            dispatch(addNewShortlist());
        } catch (error) {
            // Dispatch failure action if there's an error
            dispatch({
                type: ADD_TO_SHORTLIST_FAILURE,
                payload: error.message
            });
        }
    };
const RemoveShortlist = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("shortlist/removeshortlist", async (shortlistid, thunkAPI)=>{
    const url = `${"https://stag.mntech.website/api"}/v1/user/shortlist/delete-short-list/${shortlistid}`;
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
    const config = {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };
    fetch(url, config).then((response)=>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }).then((data)=>{
        console.log(JSON.stringify(data));
    }).catch((error)=>{
        console.error("Fetch error:", error);
    });
});
//for infinit Scroll 
const userDatas = (page)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_4__/* .GET_INFINIT_SCROLL_USER_REQUEST */ .uXC
        });
        try {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://stag.mntech.website/api"}/v1/user/user/getUserByGender?page=${page?.page}&limit=6`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_4__/* .GET_INFINIT_SCROLL_USER_SUCCESS */ .Ynn,
                payload: response?.data
            });
        } catch (error) {
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_4__/* .GET_INFINIT_SCROLL_USER_FAILURE */ .Cqb,
                payload: error.message
            });
        }
    };
};
const FetchMoreSuggestiondata = (page)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_4__/* .GET_MORESUGGESTION_USERS_REQUEST */ .bB6
        });
        try {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://stag.mntech.website/api"}/v1/user/user/getUserByGender?page=${page?.page}&limit=3`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_4__/* .GET_MORESUGGESTION_USERS_SUCCESS */ .Ca$,
                payload: response?.data
            });
        } catch (error) {
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_4__/* .GET_MORESUGGESTION_USERS_FAILURE */ .psl,
                payload: error.message
            });
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mi: () => (/* binding */ fetchUserById),
/* harmony export */   gt: () => (/* binding */ FETCH_USER_BY_ID_REQUEST),
/* harmony export */   im: () => (/* binding */ FETCH_USER_BY_ID_FAILURE),
/* harmony export */   zS: () => (/* binding */ FETCH_USER_BY_ID_SUCCESS)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FETCH_USER_BY_ID_REQUEST = "FETCH_USER_BY_ID_REQUEST";
const FETCH_USER_BY_ID_SUCCESS = "FETCH_USER_BY_ID_SUCCESS";
const FETCH_USER_BY_ID_FAILURE = "FETCH_USER_BY_ID_FAILURE";
const fetchUserById = (id)=>async (dispatch)=>{
        dispatch({
            type: FETCH_USER_BY_ID_REQUEST
        });
        const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/user/${id}`,
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        };
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].request(config).then((response)=>{
            dispatch({
                type: FETCH_USER_BY_ID_SUCCESS,
                payload: response?.data?.data[0]
            });
        }).catch((error)=>{
            dispatch({
                type: FETCH_USER_BY_ID_FAILURE,
                payload: error.message
            });
        });
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B2: () => (/* binding */ Getlikeduserdata),
/* harmony export */   ED: () => (/* binding */ acceptRequest),
/* harmony export */   F7: () => (/* binding */ FetchGriduserdata),
/* harmony export */   Fb: () => (/* binding */ Updateprofileimage),
/* harmony export */   IP: () => (/* binding */ Sentblockrequest),
/* harmony export */   JK: () => (/* binding */ getblockuserdata),
/* harmony export */   O1: () => (/* binding */ Updateprofileimageprocess),
/* harmony export */   O7: () => (/* binding */ Uploadmystory),
/* harmony export */   QN: () => (/* binding */ rejectRequest),
/* harmony export */   SP: () => (/* binding */ GetrecentuserprofileData),
/* harmony export */   VS: () => (/* binding */ getAcceptedRequestData),
/* harmony export */   XP: () => (/* binding */ getFriendsList),
/* harmony export */   _l: () => (/* binding */ Getallstatus),
/* harmony export */   cS: () => (/* binding */ DeleteMystatus),
/* harmony export */   "if": () => (/* binding */ sendRequest),
/* harmony export */   k: () => (/* binding */ Cancelfriendrequest),
/* harmony export */   k$: () => (/* binding */ Uploadmystorymodal),
/* harmony export */   p3: () => (/* binding */ GetMatchScore),
/* harmony export */   qX: () => (/* binding */ getSentrequestData),
/* harmony export */   rI: () => (/* binding */ Getcancelrequestdata),
/* harmony export */   rS: () => (/* binding */ logoutuser),
/* harmony export */   sS: () => (/* binding */ Deleteimage),
/* harmony export */   vj: () => (/* binding */ getEducationData),
/* harmony export */   yD: () => (/* binding */ Postrecentuserprofile)
/* harmony export */ });
/* unused harmony exports requestSuccess, requestFailure, getRequestSuccess, getRequestFailure, acceptRequestSuccess, acceptRequestFailure, rejectRequestSuccess, rejectRequestFailure, getEducationDataSuccess, getEducationDataFailure, updateEducationData, updateEducationDataSuccess, updateEducationDataFailure, getProfessionalData, getProfessionalSuccess, getProfessionalFailure, getPartnerpreferencedata, getPartnerpreferenceSuccess, getPartnerpreferenceFailure, GetNotifications, getAcceptedRequestDataSuccess, getAcceptedRequestDataFailure, getSentrequestDataSuccess, getSentrequestDataFailure, getblockuserdatasuccess, getblockuserdatafailure, FetchUserDataById, Sentblockrequestsuccess, Sentblockrequestfailure, Cancelfriendrequestsuccess, Cancelfriendrequestfailure, Updateprofileimagesuccess, Updateprofileimagefailure, Getcancelrequestdatasuccess, Getcancelrequestdatafailure, Deleteimagesuccess, Deleteimagefailure, Postrecentuserprofilesuccess, Postrecentuserprofilefailure, GetrecentuserprofiledataSuccess, GetrecentuserprofiledataFailure, Updateaddressdata, Updateaddressdatasuccess, Updateaddressdatafailure, Uploadmystorysuccess, Uploadmystoryfailure, Getallstatusfailure */
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77484);
/* harmony import */ var _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99419);




const sendRequest = (requestData)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .SEND_REQUEST */ .Nwi
        });
        const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        const axios = __webpack_require__(52167);
        let data = JSON.stringify({
            "friend": requestData,
            "user": currentUser
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/create-friend`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .REQUEST_SUCCESS */ .Gz2,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const requestSuccess = (response)=>({
        type: REQUEST_SUCCESS,
        payload: response
    });
const requestFailure = (error)=>({
        type: REQUEST_FAILURE,
        payload: error
    });
const getFriendsList = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST */ .kE3
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-frd-requests`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.request(config);
        response.data.data.forEach(async (element)=>{
            const url = `${"https://stag.mntech.website/api"}/v1/user/user/${element.id}`;
            try {
                const fetchResponse = await fetch(url);
                if (!fetchResponse.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await fetchResponse.json();
            } catch (error) {
                console.error("There was a problem with your fetch operation:", error);
            }
        });
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST_SUCCESS */ .B9X,
            payload: response.data
        });
    };
};
const getRequestSuccess = (response)=>({
        type: GET_REQUEST_SUCCESS,
        payload: response
    });
const getRequestFailure = (error)=>({
        type: GET_REQUEST_FAILURE,
        payload: error
    });
const acceptRequest = (requestData)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .ACCEPT_REQUEST */ .kfD
        });
        const axios = __webpack_require__(52167);
        const currentuserId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "user": currentuserId,
            "request": requestData.id || requestData._id,
            "status": "accepted"
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/respond-friend-req`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .ACCEPT_REQUEST_SUCCESS */ .uv8,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const acceptRequestSuccess = (respsone)=>({
        type: ACCEPT_REQUEST_SUCCESS,
        payload: respsone
    });
const acceptRequestFailure = (error)=>({
        type: ACCEPT_REQUEST_FAILURE,
        payload: error
    });
const rejectRequest = (requestData)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .REJECT_REQUEST */ .Wfq
        });
        console.log(requestData);
        const axios = __webpack_require__(52167);
        const currentuserId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "user": currentuserId,
            "request": requestData.id,
            "status": "rejected"
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/respond-friend-req`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .REJECT_REQUEST_SUCCESS */ .Drg,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const rejectRequestSuccess = (respsone)=>({
        type: REJECT_REQUEST_SUCCESS,
        payload: respsone
    });
const rejectRequestFailure = (error)=>({
        type: REJECT_REQUEST_FAILURE,
        payload: error
    });
const getEducationData = (requestData)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_EDUCATION_DATA */ .l12
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/userEducation/${requestData}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_EDUCATION_DATA_SUCCESS */ .okh,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const getEducationDataSuccess = (response)=>({
        type: GET_EDUCATION_DATA_SUCCESS,
        payload: response
    });
const getEducationDataFailure = (error)=>({
        type: GET_EDUCATION_DATA_FAILURE,
        payload: error
    });
const updateEducationData = (userid, alldata)=>{
    return async (dispatch)=>{
        dispatch({
            type: UPDATE_EDUCATION_DATA
        });
        const axios = __webpack_require__(52167);
        const token = getCookie("authtoken");
        let data = JSON.stringify(alldata);
        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/userEducation/${userid}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: UPDATE_EDUCATION_DATA_SUCCESS,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const updateEducationDataSuccess = (response)=>({
        type: UPDATE_EDUCATION_DATA_SUCCESS,
        payload: response
    });
const updateEducationDataFailure = (error)=>({
        type: UPDATE_EDUCATION_DATA_FAILURE,
        payload: error
    });
const getProfessionalData = (requestData)=>{
    return async (dispatch)=>{
        dispatch({
            type: GET_PROFESSIONAL_DATA
        });
        const axios = __webpack_require__(52167);
        const token = getCookie("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/userProfessionalDetail/getbyid/${requestData}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: GET_PROFESSIONAL_DATA_SUCCESS,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const getProfessionalSuccess = (response)=>({
        type: GET_PROFESSIONAL_DATA_SUCCESS,
        payload: response
    });
const getProfessionalFailure = (error)=>({
        type: GET_PROFESSIONAL_DATA_FAILURE,
        payload: error
    });
const getPartnerpreferencedata = (requestData)=>{
    return async (dispatch)=>{
        dispatch({
            type: GET_PARTNERPREFERENCE_DATA
        });
        const axios = __webpack_require__(52167);
        const token = getCookie("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/user/partner/${requestData}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: GET_PARTNERPREFERENCE_DATA_SUCCESS,
                payload: response.data.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const getPartnerpreferenceSuccess = (response)=>({
        type: GET_PROFESSIONAL_DATA_SUCCESS,
        payload: response
    });
const getPartnerpreferenceFailure = (error)=>({
        type: GET_PROFESSIONAL_DATA_FAILURE,
        payload: error
    });
const getAcceptedRequestData = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ACCEPTED_REQUEST_DATA */ .uYO
        });
        try {
            const axios = __webpack_require__(52167);
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
            if (!token) {
                throw new Error("Authentication token is missing.");
            }
            const config = {
                method: "get",
                // url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-frds`,
                url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-frd-mobile`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const response = await axios(config);
            console.log("\uD83D\uDE80 ~ return ~ response:", response.data.data);
            // const currentUser = getCookie("userid");
            // if (!currentUser) {
            //     throw new Error('User ID is missing.');
            // }
            // const friendRequests = response.data.data
            //     .map((res) => {
            //         if (res?.user?.id && res?.friend?.id) {
            //             return currentUser === res.friend.id ? res.user : res.friend;
            //         }
            //         return null;
            //     })
            //     .filter((user) => user !== null); // Filter out any null values
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ACCEPTED_REQUEST_DATA_SUCCESS */ ._cx,
                payload: {
                    data: response.data?.data,
                    acceptedUsers: response.data?.data?.results
                }
            });
        } catch (error) {
            console.error("Error fetching accepted request data:", error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ACCEPTED_REQUEST_DATA_FAILURE */ .xFV,
                payload: error.message
            });
        }
    };
};
const GetNotifications = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: GET_REQUEST_DATA
        });
        try {
            const axios = __webpack_require__(52167);
            const token = getCookie("authtoken");
            if (!token) {
                throw new Error("Authentication token is missing.");
            }
            const config = {
                method: "get",
                url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-frd-mobile`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const response = await axios(config);
            console.log("\uD83D\uDE80 ~ return ~ response:", response.data.data);
            dispatch({
                type: GET_REQUEST_DATA_SUCCESS,
                payload: {
                    data: response.data?.data
                }
            });
        } catch (error) {
            console.error("Error fetching accepted request data:", error);
            dispatch({
                type: GET_REQUEST_DATA_FAILURE,
                payload: error.message
            });
        }
    };
};
const fetchUserDataBatch = async (batchIds)=>{
    const fetchPromises = batchIds.map((id)=>FetchUserDataById(id));
    return Promise.all(fetchPromises);
};
const getAcceptedRequestDataSuccess = (response)=>({
        type: GET_ACCEPTED_REQUEST_DATA_SUCCESS,
        payload: response
    });
const getAcceptedRequestDataFailure = (error)=>({
        type: GET_ACCEPTED_REQUEST_DATA_FAILURE,
        payload: error
    });
const getSentrequestData = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SENTREQUEST_DATA */ .B4x
        });
        const axios = __webpack_require__(52167);
        const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-request-sentv2`,
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SENTREQUEST_DATA_SUCCESS */ .V8p,
                payload: {
                    data: response.data,
                    total
                }
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SENTREQUEST_DATA_FAILURE */ .AiW,
                payload: error.message
            });
        });
    };
};
const getSentrequestDataSuccess = (response)=>({
        type: GET_SENTREQUEST_DATA_SUCCESS,
        payload: response
    });
const getSentrequestDataFailure = (error)=>({
        type: GET_SENTREQUEST_DATA_FAILURE,
        payload: error
    });
const logoutuser = ()=>{
    // Use router for redirection
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .LOGOUT_USER */ .WbN
        }); // Dispatch to Redux to update the state
        try {
            // Clear all cookies
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("authtoken", {
                path: "/"
            });
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("email", {
                path: "/"
            });
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("jwtToken", {
                path: "/"
            });
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("userName", {
                path: "/"
            });
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("data", {
                path: "/"
            });
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("userid", {
                path: "/"
            });
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)("UserProfile", {
                path: "/"
            });
            // Clear local storage
            localStorage.clear();
            // Optional: Redirect to the login page after logout
            // Redirect to login page after logout
            window.location.href = "/login";
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
};
const getblockuserdata = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_BLOCK_USERDATA */ .vrV
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-block-list`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_BLOCK_USERDATA_SUCCESS */ .Ykm,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const getblockuserdatasuccess = (response)=>({
        type: GET_BLOCK_USERDATA_SUCCESS,
        payload: response
    });
const getblockuserdatafailure = (error)=>({
        type: GET_BLOCK_USERDATA_FAILURE,
        payload: error
    });
const FetchUserDataById = async (userId)=>{
    try {
        const token = getCookie("authtoken");
        if (!token) {
            throw new Error("Token not found");
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/user/${userId}`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            // Handle unauthorized access (e.g., redirect to login page or refresh token)
            throw new Error("Unauthorized");
        } else {
            console.error("API request failed:", response.statusText);
            throw new Error("API request failed");
        }
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        throw error;
    }
};
const Sentblockrequest = (requestData, OtherUserId)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .SENT_BLOCK_REQUEST */ .D4m
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "user": OtherUserId,
            "request": requestData,
            "status": "blocked"
        });
        let config = {
            method: "PUT",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/respond-friend-req`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .SENT_BLOCK_REQUEST_SUCCESS */ .f1h,
                payload: response.data
            });
        // dispatch({type : GET_REQUEST })
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const Sentblockrequestsuccess = (response)=>({
        type: SENT_BLOCK_REQUEST_SUCCESS,
        payload: response
    });
const Sentblockrequestfailure = (error)=>({
        type: SENT_BLOCK_REQUEST_FAILURE,
        payload: error
    });
const Cancelfriendrequest = (requestData, curUser)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .CANCEL_FRIEND_REQUEST */ .pi7
        });
        const axios = __webpack_require__(52167);
        const currentuserId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "user": curUser,
            "request": requestData,
            "status": "removed"
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/respond-friend-req`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .CANCEL_FRIEND_REQUEST_SUCCESS */ .JHc,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const Cancelfriendrequestsuccess = (response)=>({
        type: CANCEL_FRIEND_REQUEST_SUCCESS,
        payload: response
    });
const Cancelfriendrequestfailure = (error)=>({
        type: CANCEL_FRIEND_REQUEST_FAILURE,
        payload: error
    });
const Updateprofileimage = (requestdata, seconddata)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE */ .O4t
        });
        try {
            const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
            // Assuming requestdata is the image data you want to send in the request
            const data = {
                "key": requestdata.key,
                "contentType": requestdata.contentType,
                "isProfilePic": true,
                "profileType": "profileImage"
            };
            // Construct the fetch options
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify(data)
            };
            // Make the fetch request
            fetch(`${"https://stag.mntech.website/api"}/v1/s3/presignedurl/`, options).then((response)=>{
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            }).then((data)=>{
                // Handle the response data here (e.g., update UI, etc.)
                fetch(seconddata.blob).then((response)=>response.blob()).then((blobData)=>{
                    const axios = __webpack_require__(52167);
                    let config = {
                        method: "put",
                        maxBodyLength: Infinity,
                        url: data.data.url,
                        headers: {
                            "Content-Type": "image/jpeg",
                            "x-amz-acl": "public-read"
                        },
                        data: blobData
                    };
                    axios.request(config).then((response)=>{
                        dispatch({
                            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE_SUCCESS */ .BxE
                        });
                        dispatch((0,_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .fetchMyProfileData */ .di)());
                    }).catch((error)=>{
                        console.log(error);
                    });
                });
            }).catch((error)=>{
                console.error("There was a problem with your fetch operation:", error);
            });
        } catch (error) {
            // Handle any errors that occurred outside of the fetch
            console.error("Error:", error);
        }
    };
};
const Updateprofileimagesuccess = (response)=>({
        type: UPDATE_PROFILE_IMAGE_SUCCESS,
        payload: response
    });
const Updateprofileimagefailure = (error)=>({
        type: UPDATE_PROFILE_IMAGE_FAILURE,
        payload: error
    });
const Getcancelrequestdata = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_CANCELREQUEST_DATA */ .aHB
        });
        const axios = __webpack_require__(52167);
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-rejected-frds`,
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_CANCELREQUEST_DATA_SUCCESS */ .XTX,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const Getcancelrequestdatasuccess = (response)=>({
        type: GET_CANCELREQUEST_DATA_SUCCESS,
        payload: response
    });
const Getcancelrequestdatafailure = (error)=>({
        type: GET_CANCELREQUEST_DATA_FAILURE,
        payload: error
    });
const Deleteimage = (imagedata)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_IMAGE */ .S1t
        });
        const axios = __webpack_require__(52167);
        const currentuserId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        let data = JSON.stringify({
            "profileImageUrl": imagedata.url,
            "name": imagedata.name
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/user/delete-profile-image/${currentuserId}`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_IMAGE_SUCCESS */ .YYL
            });
            dispatch((0,_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .fetchMyProfileData */ .di)());
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const Deleteimagesuccess = (response)=>({
        type: DELETE_IMAGE_SUCCESS,
        payload: response
    });
const Deleteimagefailure = (error)=>({
        type: DELETE_IMAGE_FAILURE,
        payload: error
    });
const Updateprofileimageprocess = ()=>({
        type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE_PROCESS */ .mJ6
    });
const Postrecentuserprofile = (visitedUserId)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .POST_RECENT_USERPROFILE */ .ccb
        });
        const axios = __webpack_require__(52167);
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify({
            "viewerId": visitedUserId
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/profile-viewer/create-profile-viewer`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .POST_RECENT_USERPROFILE_SUCCESS */ .etF
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .POST_RECENT_USERPROFILE_SUCCESS */ .etF,
                payload: error
            });
        });
    };
};
const Postrecentuserprofilesuccess = ()=>({
        type: POST_RECENT_USERPROFILE_SUCCESS
    });
const Postrecentuserprofilefailure = (error)=>({
        type: POST_RECENT_USERPROFILE_FAILURE,
        payload: error
    });
const GetrecentuserprofileData = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_RECENT_USERPROFILE_DATA */ .JZ9
        });
        const axios = __webpack_require__(52167);
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        const currentUserId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        let config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/profile-viewer/get-profile-viewer/${currentUserId}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            }
        };
        axios.request(config).then((response)=>{
            // const filteredData = response.data.data
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_RECENT_USERPROFILE_DATA_SUCCESS */ .OqK,
                payload: response.data.data
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_RECENT_USERPROFILE_DATA_FAILURE */ .HUJ,
                payload: error
            });
        });
    };
};
const GetrecentuserprofiledataSuccess = (response)=>({
        type: GET_RECENT_USERPROFILE_DATA_SUCCESS,
        payload: response
    });
const GetrecentuserprofiledataFailure = (error)=>({
        type: GET_RECENT_USERPROFILE_DATA_FAILURE,
        payload: error
    });
const Updateaddressdata = (addressDataId)=>{
    return async (dispatch)=>{
        dispatch({
            type: UPDATE_ADDRESS_DATA
        });
    };
};
const Updateaddressdatasuccess = (response)=>({
        type: UPDATE_ADDRESS_DATA_SUCCESS,
        payload: response
    });
const Updateaddressdatafailure = (response)=>({
        type: UPDATE_ADDRESS_DATA_FAILURE,
        payload: response
    });
const FetchGriduserdata = (currentPage)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_GRID_USER_DATA_REQUEST */ .lG
        });
        try {
            const axios = __webpack_require__(52167);
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
            let config = {
                method: "get",
                maxBodyLength: Infinity,
                url: `${"https://stag.mntech.website/api"}/v1/user/user/paginated?page=${currentPage}&limit=6`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            axios.request(config).then((response)=>{
                const data = response.data;
                dispatch({
                    type: _type__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_GRID_USER_DATA_REQUEST_SUCCESS */ .w7j,
                    payload: {
                        userData: data.data.results,
                        totalPages: data.data.totalPages,
                        currentPage: data.data.page,
                        pagesdata: data.data
                    }
                });
            }).catch((error)=>{
                console.log(error);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
};
const Getlikeduserdata = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_USERS_PROFILE_DATA */ .leq
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        const userId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        let data = "";
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            // url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/like/get-like/${userId}`,
            url: `${"https://stag.mntech.website/api"}/v1/user/like/getlike/${userId}?limit=50`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log("\uD83D\uDE80 ~ .then ~ response:", response);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_USERS_PROFILE_DATA_SUCCESS */ .Sqh,
                payload: response.data.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
//For Story Upload 
const Uploadmystory = (requestdata, seconddata, theblob, Caption)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY */ .rJX
        });
        try {
            const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
            // Assuming requestdata is the image data you want to send in the request
            const data = {
                "key": requestdata.imagesdata.key,
                "contentType": requestdata.imagesdata.contentType,
                "isProfilePic": false,
                // "caption": Caption ? Caption : "",
                "caption": Caption,
                "profileType": "statusImage"
            };
            const data2 = {
                "key": requestdata.imagesdata.key,
                "contentType": requestdata.imagesdata.contentType,
                "isProfilePic": false,
                // "caption": Caption ? Caption : "",
                "profileType": "statusImage"
            };
            // Construct the fetch options
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify(Caption ? data : data2)
            };
            // Make the fetch request
            fetch(`${"https://stag.mntech.website/api"}/v1/s3/presignedurl/`, options).then((response)=>{
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            }).then((data)=>{
                // Handle the response data here (e.g., update UI, etc.)
                console.log("Response from server:", data);
                fetch(seconddata).then((response)=>response.blob()).then((blobData)=>{
                    const axios = __webpack_require__(52167);
                    let config = {
                        method: "put",
                        maxBodyLength: Infinity,
                        url: data.data.url,
                        headers: {
                            "Content-Type": "image/jpeg",
                            "x-amz-acl": "public-read"
                        },
                        data: blobData
                    };
                    axios.request(config).then((response)=>{
                        dispatch({
                            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY_SUCCESS */ .ZY3
                        });
                        // dispatch({ type: UPLOAD_MY_STORY_MODAL })
                        dispatch(Getallstatus());
                        dispatch((0,_reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .fetchMyProfileData */ .di)());
                    }).catch((error)=>{
                        console.log(error);
                    });
                });
            }).catch((error)=>{
                console.error("There was a problem with your fetch operation:", error);
            });
        } catch (error) {
            // Handle any errors that occurred outside of the fetch
            console.error("Error:", error);
        }
    };
};
const Uploadmystorysuccess = (response)=>({
        type: UPLOAD_MY_STORY_SUCCESS,
        payload: response
    });
const Uploadmystoryfailure = (error)=>({
        type: UPLOAD_MY_STORY_FAILURE,
        payload: error
    });
const Uploadmystorymodal = ()=>({
        type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY_MODAL */ .INY
    });
const Getallstatus = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ALL_STATUS */ .Zl_
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/status/get-all-status`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            const mystory = response.data.data.filter((item)=>item.userId.id == currentUser);
            const allstatus = response.data.data.filter((item)=>item.userId.id != currentUser);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ALL_STATUS_SUCCESS */ .tPz,
                payload: {
                    mystory,
                    allstatus
                }
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const Getallstatusfailure = (error)=>({
        type: GET_ALL_STATUS_FAILURE,
        payload: error
    });
const DeleteMystatus = (StatusID)=>{
    return async (dispatch)=>{
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = "";
        let config = {
            method: "delete",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/status/delete-status/${StatusID}`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            dispatch(Getallstatus());
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_MY_STATUS_SUCCESS */ .S47
            });
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_STATUS_MODAL */ .fjP
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
// GET_ALL_STATUS_SUCCESS
//Get match score 
const GetMatchScore = (MatchID)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_MATCH_SCORE */ .nrb
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/user/get-match-user/${MatchID}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_MATCH_SCORE_SUCCESS */ .K1_,
                payload: response?.data?.data[0]
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_MATCH_SCORE_FAILURE */ .km4
            });
        });
    };
};


/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E0: () => (/* binding */ updateGeneralInfo),
/* harmony export */   Rf: () => (/* binding */ updateProffessionalData),
/* harmony export */   T8: () => (/* binding */ updateURLs),
/* harmony export */   Wp: () => (/* binding */ UploadImages3),
/* harmony export */   Zv: () => (/* binding */ updateFormData),
/* harmony export */   cF: () => (/* binding */ updateHobbies),
/* harmony export */   cy: () => (/* binding */ updatePartnerPrefData),
/* harmony export */   i1: () => (/* binding */ updateAddressData),
/* harmony export */   ke: () => (/* binding */ updatehobbiesData),
/* harmony export */   kj: () => (/* binding */ updatePartnerPref),
/* harmony export */   s8: () => (/* binding */ updateEducationData)
/* harmony export */ });
/* unused harmony exports removeUploadData, REGISTER_USER, VERIFY_OTP, SET_PASSWORD, REGISTRATION_SUCCESS, REGISTRATION_FAILURE */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77484);



const updateFormData = (data)=>({
        type: "UPDATE_FORM_DATA",
        payload: data
    });
const removeUploadData = ()=>({
        type: "REMOVE_UPLOAD_DATA"
    });
const REGISTER_USER = "REGISTER_USER";
const VERIFY_OTP = "VERIFY_OTP";
const SET_PASSWORD = "SET_PASSWORD";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";
const updateGeneralInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updateGeneralInfo", async (generalData, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const updatedGeneralData = {
            ...generalData,
            userProfileCompleted: true
        };
        const requestOptions = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGeneralData)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        localStorage.setItem("flName", result.userData.firstName + " " + result.userData.lastName);
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateAddressData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updateaddressInfo", async (addressData, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addressData)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/address`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateEducationData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updateeducationInfo", async (edducationdata, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edducationdata)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/userEducation`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateProffessionalData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updateProffessionalInfo", async (proffesionaldata, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(proffesionaldata)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/userProfessionalDetail`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updatePartnerPrefData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updatepartnerpref", async (partnerpref, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(partnerpref)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/partner`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updatehobbiesData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updatehobbiesInfo", async (hobbiesInfo, thunkAPI)=>{
    const axios = __webpack_require__(52167);
    const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
    let data = hobbiesInfo;
    let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${"https://stag.mntech.website/api"}/v1/user/auth/update-user`,
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        data: data
    };
    axios.request(config).then((response)=>{
    // console.log(JSON.stringify(response.data));
    }).catch((error)=>{
    // console.log(error);
    });
});
const updateURLs = (urls)=>({
        type: "register/updateURLs",
        payload: urls
    });
const UploadImages3 = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/uploadimages3", async (theimageData, thunkAPI)=>{
    // Iterate through the imageDataArray and make POST requests for each image
    theimageData.images.forEach((imageData)=>{
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        // Assuming imageData is the image data you want to send in the request
        const data = {
            "key": imageData.key,
            "contentType": imageData.contentType,
            "isProfilePic": imageData.isProfile
        };
        // Construct the fetch options
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: JSON.stringify(data)
        };
        // Make the fetch request
        fetch(`${"https://stag.mntech.website/api"}/v1/s3/presignedurl/`, options).then((response)=>{
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then((data)=>{
            if (data.status === "Success") {
                const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
                // Fetch the image data from the Blob URL
                fetch(imageData.data).then((response)=>response.blob()).then((blobData)=>{
                    // Now you have the binary image data in `blobData`
                    // You can proceed to send it in your request
                    const formData = new FormData();
                    formData.append("image", blobData);
                    // Make your request with Axios
                    const axios = __webpack_require__(52167);
                    let config = {
                        method: "put",
                        maxBodyLength: Infinity,
                        url: data.data.url,
                        headers: {
                            "Content-Type": "image/jpeg",
                            "x-amz-acl": "public-read"
                        },
                        data: blobData
                    };
                    axios.request(config).then((response)=>{
                    // console.log(JSON.stringify(response.data));
                    }).catch((error)=>{
                    // console.log(error);
                    });
                }).catch((error)=>{
                    console.error("There was a problem with your fetch operation:", error);
                });
            // })
            } else {
            // console.log("ERROR");
            }
        }).catch((error)=>{
            console.error("There was a problem with your fetch operation:", error);
        });
    });
// console.log("Waiting for images...")
});
const updateHobbies = (category, values)=>({
        type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_HOBBIES_VALUES */ .DhE,
        payload: {
            category,
            values
        }
    });
const updatePartnerPref = (key, values)=>({
        type: _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PARTNER_PREF */ .XVW,
        payload: {
            key,
            values
        }
    });


/***/ }),

/***/ 17689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cw: () => (/* binding */ DatingGenerealInfo),
/* harmony export */   DJ: () => (/* binding */ PostAppUsesType),
/* harmony export */   Ew: () => (/* binding */ DatingImageUpload),
/* harmony export */   Rp: () => (/* binding */ updateDatingFormData),
/* harmony export */   UA: () => (/* binding */ DatingPreferencesInfo),
/* harmony export */   XZ: () => (/* binding */ DatingAdditionalInfo),
/* harmony export */   aN: () => (/* binding */ DatingHobbyInfo)
/* harmony export */ });
/* unused harmony exports removeDatingUploadData, addAppUsesType, updateHobbies */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82562);




const updateDatingFormData = (data)=>({
        type: "UPDATE_DATING_FORM_DATA",
        payload: data
    });
const removeDatingUploadData = ()=>({
        type: "REMOVE_DATING_UPLOAD_DATA"
    });
const addAppUsesType = (appUsesType)=>({
        type: "ADD_APPUSES_TYPE",
        payload: appUsesType
    });
const updateHobbies = (category, values)=>({
        type: UPDATE_DATING_HOBBIES_VALUES,
        payload: {
            category,
            values
        }
    });
const DatingGenerealInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/dating/register/datingGeneralinfo", async (generalData, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const updatedGeneralData = {
            ...generalData?.general,
            userProfileCompleted: true
        };
        const requestOptions = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGeneralData)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        localStorage.setItem("flName", result.userData.firstName + " " + result.userData.lastName);
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const PostAppUsesType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/platform/usertype", async (generalData, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const updatedGeneralData = {
            appUsesType: generalData
        };
        const requestOptions = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGeneralData)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        // localStorage.setItem("flName", result.userData.firstName + " " + result.userData.lastName)
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const DatingAdditionalInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/dating/register/datingAdditionalinfo", async (addressdata, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const updatedGeneralData = {
            ...addressdata
        };
        const requestOptions = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGeneralData)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const DatingHobbyInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/dating/register/datingHobbyinfo", async (Hobbyinfo, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const updatedGeneralData = {
            hobbies: Hobbyinfo
        };
        const requestOptions = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGeneralData)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const DatingImageUpload = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/ImageUpload", async (theimageData, thunkAPI)=>{
    try {
        thunkAPI.dispatch((0,_reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_2__/* .uploadImagesStart */ .yI)());
        // Iterate through the imageDataArray and make POST requests for each image
        theimageData.images.forEach((imageData)=>{
            const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
            if (imageData.contentType == "video/mp4") {
                console.log("Video File");
            } else {
                console.log("Image File");
            }
            // Assuming imageData is the image data you want to send in the request
            const data = {
                "key": imageData.key,
                "contentType": imageData.contentType,
                "isProfilePic": imageData.isProfile,
                // "profileType": "profileVideo"
                "profileType": imageData.contentType == "video/mp4" ? "profileVideo" : "profileImage"
            };
            // Construct the fetch options
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify(data)
            };
            // Make the fetch request
            fetch(`${"https://stag.mntech.website/api"}/v1/s3/presignedurl/`, options).then((response)=>{
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            }).then((data)=>{
                console.log(JSON.stringify(data));
                if (data.status === "Success") {
                    console.log("After Success", data.data.url);
                    console.log("Buffer data : ", theimageData.bufferdata);
                    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
                    // Fetch the image data from the Blob URL
                    fetch(imageData.data).then((response)=>response.blob()).then((blobData)=>{
                        // Now you have the binary image data in `blobData`
                        // You can proceed to send it in your request
                        const formData = new FormData();
                        formData.append("image", blobData);
                        // Make your request with Axios
                        const axios = __webpack_require__(52167);
                        let config = {
                            method: "put",
                            maxBodyLength: Infinity,
                            url: data.data.url,
                            headers: {
                                "Content-Type": imageData.contentType,
                                "x-amz-acl": "public-read"
                            },
                            data: blobData
                        };
                        axios.request(config).then((response)=>{
                            console.log(JSON.stringify(response.data));
                        }).catch((error)=>{
                            console.log(error);
                        });
                    }).catch((error)=>{
                        console.error("There was a problem with your fetch operation:", error);
                    });
                } else {
                    console.log("ERROR");
                }
            }).catch((error)=>{
                console.error("There was a problem with your fetch operation:", error);
            });
        });
        console.log("Waiting for images...");
        thunkAPI.dispatch((0,_reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_2__/* .uploadImagesSuccess */ .mt)());
    } catch (error) {
        thunkAPI.dispatch((0,_reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_2__/* .uploadImagesFailure */ .vp)());
    }
});
const DatingPreferencesInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/dating/register/datingPreferencesinfo", async (preferencedata, thunkAPI)=>{
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Token not found");
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(preferencedata)
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/dating-partner/`, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});


/***/ }),

/***/ 30101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22931);

const initialState = {
    users: [],
    loading: false,
    error: null,
    Paginated: {
        loading: false,
        userData: [],
        totalPages: 0,
        currentPage: 0,
        limit: 0
    },
    Sections: {
        generalSection: {
            loading: false,
            data: [],
            error: null
        }
    }
};
const GetDatingUsersReducer = (state = initialState, action)=>{
    switch(action.type){
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DATING_USERS_REQUEST */ .WO:
            {
                return {
                    ...state,
                    Paginated: {
                        ...state.Paginated,
                        loading: true
                    }
                };
            }
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DATING_USERS_SUCCESS */ .P7:
            {
                return {
                    ...state,
                    Paginated: {
                        ...state.Paginated,
                        loading: false,
                        userData: action.payload
                    }
                };
            }
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DATING_USERS_FAILURE */ .jQ:
            {
                return {
                    ...state,
                    Paginated: {
                        ...state.Paginated,
                        loading: false,
                        error: "something Went Wrong !"
                    }
                };
            }
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_GENERAL_SECTION_REQUEST */ .Ni:
            {
                return {
                    ...state,
                    Sections: {
                        ...state.Sections,
                        generalSection: {
                            loading: true
                        }
                    }
                };
            }
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_GENERAL_SECTION_SUCCESS */ .lZ:
            {
                return {
                    ...state,
                    Sections: {
                        ...state.Sections,
                        generalSection: {
                            loading: false,
                            data: action.payload
                        }
                    }
                };
            }
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_GENERAL_SECTION_FALIURE */ .Hl:
            {
                return {
                    ...state,
                    Sections: {
                        ...state.Sections,
                        generalSection: {
                            loading: false,
                            error: "Something went wrong !"
                        }
                    }
                };
            }
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetDatingUsersReducer);


/***/ }),

/***/ 45755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ek: () => (/* binding */ updateUserDetails),
/* harmony export */   r3: () => (/* binding */ fetchUserDetails)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Fetch user details
const fetchUserDetails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("dating/user/fetchUserDetails", async ()=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/me`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data.user;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
// Update user details
const updateUserDetails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("dating/user/updateUserDetails", async (updatedData)=>{
    console.log("\uD83D\uDE80 ~ updateUserDetails ~ updatedData:", updatedData);
    // const response = await axios.post('/api/user/update', updatedData); // Your API endpoint for updating user data
    // return response.data;
    try {
        const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
        if (!authToken) {
            throw new Error("Authentication token not found. Please login.");
        }
        // Prepare the updated data payload
        // Prepare the request options
        const requestOptions = {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        };
        // Send the PUT request to update user data
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        // Handle response errors
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized access. Please login again.");
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }
        // Parse and return the updated data
        const result = await response.json();
        console.log("\uD83D\uDE80 ~ updateUserDetails ~ result.userData:", result.userData);
        return result.userData;
    } catch (error) {
        console.error("Error updating data:", error.message);
        throw error; // Re-throw to handle further up in the application
    }
});
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        details: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        // Handle fetching user details
        builder.addCase(fetchUserDetails.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchUserDetails.fulfilled, (state, action)=>{
            state.loading = false;
            state.details = action.payload;
        });
        builder.addCase(fetchUserDetails.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
        // Handle updating user details
        builder.addCase(updateUserDetails.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(updateUserDetails.fulfilled, (state, action)=>{
            state.loading = false;
            state.details = {
                ...state.details,
                ...action.payload
            }; // Update details after editing
        });
        builder.addCase(updateUserDetails.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G1: () => (/* binding */ setAgeRange),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   uh: () => (/* binding */ fetchUsers)
/* harmony export */ });
/* unused harmony exports datinguserSlice, fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const datinguserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "datingUsers",
    initialState: {
        users: [],
        minAge: 20,
        maxAge: 30,
        loading: false,
        error: null
    },
    reducers: {
        setAgeRange: (state, action)=>{
            state.minAge = action.payload.minAge;
            state.maxAge = action.payload.maxAge;
        },
        fetchUsersRequest: (state)=>{
            state.loading = true;
        },
        fetchUsersSuccess: (state, action)=>{
            state.users = action.payload;
            state.loading = false;
        },
        fetchUsersFailure: (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        }
    }
});
const { setAgeRange, fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = datinguserSlice.actions;
const fetchUsers = (minAge, maxAge)=>async (dispatch)=>{
        console.log("\uD83D\uDE80 ~ fetchUsers ~ maxAge:", maxAge);
        console.log("\uD83D\uDE80 ~ fetchUsers ~ minAge:", minAge);
        dispatch(fetchUsersRequest());
        try {
            const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
            let data = JSON.stringify({
                minAge,
                maxAge
            });
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "https://stag.mntech.website/api/v1/user/user/getUserByGenderDatingAge",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Token}`
                },
                data: data
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].request(config);
            dispatch(fetchUsersSuccess(response.data?.data));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (datinguserSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AB: () => (/* binding */ DatingformReducer)
/* harmony export */ });
/* unused harmony exports ImagePreview, FormSlice, setFormValidation, setUploadUIVisibility */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99419);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77484);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22931);
/* harmony import */ var _Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17689);





const initialState = {
    newShortlists: 0,
    register: {
        email: "",
        name: "",
        otp: "",
        password: ""
    },
    datingForm: {
        userType: {
            appUsesType: ""
        },
        status: _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.IDLE,
        general: {
            firstName: "",
            lastName: "",
            motherTongue: "",
            gender: "",
            // Ethnicity: "",
            dateOfBirth: "",
            // birthTime: "",
            religion: "",
            height: "",
            datingData: [
                {
                    Ethnicity: "",
                    interestedIn: []
                }
            ],
            // currentcity: "",
            // countryofliving: "",
            writeBoutYourSelf: ""
        },
        address: {
            datingData: [
                {
                    educationLevel: "",
                    CurrentlyLiving: "",
                    Occupation: ""
                }
            ],
            mobileNumber: ""
        },
        // 144 * 91 = 13,104
        contact: {
            mobileCode: "",
            mobileNumber: "",
            homeCode: "",
            homeMobileNumber: ""
        },
        education: {
            degree: "",
            collage: "",
            city: "",
            state: "",
            country: ""
        },
        professional: {
            jobTitle: "",
            jobType: "",
            companyName: "",
            currentSalary: "",
            workCity: "",
            workCountry: ""
        },
        allhobbies: {
            hobbies: [
                {
                    "category": "Creative",
                    "values": []
                },
                {
                    "category": "Fun",
                    "values": []
                },
                {
                    "category": "Fitness",
                    "values": []
                }
            ]
        },
        hobby: {
            hobbyval: []
        },
        upload: {
            images: [],
            bufferdata: []
        },
        uploadStory: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: ""
        },
        uploadChatImage: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: ""
        },
        uploadChatVideo: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: ""
        },
        UploadChatContent: {
            ContentType: "",
            uploadChatVideo: {
                imagesdata: {},
                bufferdata: "",
                CaptionText: ""
            },
            uploadChatImage: {
                imagesdata: {},
                bufferdata: "",
                CaptionText: ""
            }
        },
        partnerpref: {
            age: {
                min: 0,
                max: 0
            },
            // distanceRange: {
            //   min: 0,
            //   max: 0
            // },
            interestedIn: [],
            preferredLocation: []
        },
        userProfile: {
            images: [],
            bufferdata: []
        },
        isFormValid: true
    }
};
const ImagePreview = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/imagepreview", async (imgdata, thunkAPI)=>{
    // console.log(imgdata);
    console.log(imgdata);
});
const DatingformReducer = (state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_DATING_FORM_DATA":
            return {
                ...state,
                datingForm: {
                    ...state.datingForm,
                    ...action.payload
                }
            };
        case "ADD_APPUSES_TYPE":
            return {
                ...state,
                datingForm: {
                    ...state.datingForm,
                    userType: {
                        ...state.datingForm.userType,
                        appUsesType: action.payload // Update appUsesType with the payload
                    }
                }
            };
        case "REMOVE_UPLOAD_DATA":
            return {
                ...state,
                UploadChatContent: {
                    ContentType: "",
                    uploadChatVideo: {
                        imagesdata: {},
                        bufferdata: "",
                        CaptionText: ""
                    },
                    uploadChatImage: {
                        imagesdata: {},
                        bufferdata: "",
                        CaptionText: ""
                    }
                }
            };
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .UPDATE_DATING_HOBBIES_VALUES */ .$A:
            return {
                ...state,
                datingForm: {
                    ...state.datingForm,
                    allhobbies: {
                        ...state.datingForm.allhobbies,
                        hobbies: state.datingForm.allhobbies.hobbies.map((hobby)=>hobby.category?.toLowerCase() === action.payload.category?.toLowerCase() ? {
                                ...hobby,
                                values: [
                                    ...new Set([
                                        ...hobby.values,
                                        ...action.payload.values
                                    ])
                                ]
                            } : hobby)
                    }
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_4__/* .UPDATE_PARTNER_PREF */ .XVW:
            const { key, values } = action.payload;
            return {
                ...state,
                datingForm: {
                    ...state.datingForm,
                    partnerpref: {
                        ...state.datingForm.partnerpref,
                        [key]: Array.isArray(state.datingForm.partnerpref[key]) ? [
                            ...new Set([
                                ...state.datingForm.partnerpref[key],
                                ...values
                            ])
                        ] : values
                    }
                }
            };
        default:
            return state;
    }
};
const FormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "Form",
    initialState,
    reducers: {
        updateDatingFormData: (state, action)=>{
            state.datingForm = {
                ...state.datingForm,
                ...action.payload
            };
        },
        setFormValidation: (state, action)=>{
            state.isFormValid = action.payload;
        },
        setUploadUIVisibility (state, action) {
            const { userId, isVisible } = action.payload;
            state[userId] = isVisible;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingGenerealInfo */ .Cw.pending, (state)=>{
            // Handle pending state if needed
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingGenerealInfo */ .Cw.fulfilled, (state)=>{
            // Handle pending state if needed
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingGenerealInfo */ .Cw.rejected, (state)=>{
            // Handle pending state if needed
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingAdditionalInfo */ .XZ.pending, (state)=>{
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingAdditionalInfo */ .XZ.fulfilled, (state)=>{
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingAdditionalInfo */ .XZ.rejected, (state)=>{
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingHobbyInfo */ .aN.pending, (state)=>{
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingHobbyInfo */ .aN.fulfilled, (state)=>{
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_Redux_actions_register_registerAction__WEBPACK_IMPORTED_MODULE_2__/* .DatingHobbyInfo */ .aN.rejected, (state)=>{
            state.datingForm.status = _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.ERROR;
        });
    }
});
const { setFormValidation, setUploadUIVisibility } = FormSlice.actions;


/***/ }),

/***/ 22931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $A: () => (/* binding */ UPDATE_DATING_HOBBIES_VALUES),
/* harmony export */   Hl: () => (/* binding */ UPDATE_GENERAL_SECTION_FALIURE),
/* harmony export */   Ni: () => (/* binding */ UPDATE_GENERAL_SECTION_REQUEST),
/* harmony export */   P7: () => (/* binding */ GET_DATING_USERS_SUCCESS),
/* harmony export */   WO: () => (/* binding */ GET_DATING_USERS_REQUEST),
/* harmony export */   jQ: () => (/* binding */ GET_DATING_USERS_FAILURE),
/* harmony export */   lZ: () => (/* binding */ UPDATE_GENERAL_SECTION_SUCCESS)
/* harmony export */ });
// export const UPDATE_DATING_FORM_DATA = "UPDATE_DATING_FORM_DATA"
// export const 
const UPDATE_DATING_HOBBIES_VALUES = "UPDATE_DATING_HOBBIES_VALUES";
const GET_DATING_USERS_REQUEST = "GET_DATING_USERS_REQUEST";
const GET_DATING_USERS_SUCCESS = "GET_DATING_USERS_SUCCESS";
const GET_DATING_USERS_FAILURE = "GET_DATING_USERS_FAILURE";
const UPDATE_GENERAL_SECTION_REQUEST = "UPDATE_GENERAL_SECTION_REQUEST";
const UPDATE_GENERAL_SECTION_SUCCESS = "UPDATE_GENERAL_SECTION_SUCCESS";
const UPDATE_GENERAL_SECTION_FALIURE = "UPDATE_GENERAL_SECTION_FALIURE";


/***/ }),

/***/ 81174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nm: () => (/* binding */ fetchFriends)
/* harmony export */ });
/* unused harmony exports incrementPage, resetFriends, fetchFriendsRequest, fetchFriendsSuccess, fetchFriendsFailure */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Thunk for fetching friends Pending--v2
const fetchFriends = (View, Pages)=>async (dispatch, getState)=>{
        console.log("\uD83D\uDE80 ~ fetchFriends ~ Pages:", Pages?.currentPage);
        dispatch(fetchFriendsRequest());
        try {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
            const config = {
                method: "get",
                // url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-request-sentv2?page=${Pages?.currentPage || 1}&limit=${View === "Gridview" ? "6" : "10"}`,
                url: `${"https://stag.mntech.website/api"}/v1/user/friend/get-request-sentv2`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].request(config);
            const data = response.data;
            dispatch(fetchFriendsSuccess({
                userData: data.data.results,
                totalPages: data.data.totalPages,
                currentPage: data.data.page,
                limit: data.data.limit,
                pagesdata: data.data
            }));
        } catch (error) {
            dispatch(fetchFriendsFailure(error.message));
        }
    };
// Slice
const friendsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "friends",
    initialState: {
        userData: [],
        totalPages: 1,
        currentPage: 1,
        limit: 0,
        pagesdata: "",
        loading: false,
        error: null,
        status: "idle"
    },
    reducers: {
        incrementPage: (state)=>{
            state.currentPage += 1;
        },
        resetFriends: (state)=>{
            state.userData = [];
            state.currentPage = 1;
            state.pagesdata = "";
            state.totalPages = 1;
        },
        fetchFriendsRequest: (state)=>{
            state.status = "loading";
            state.loading = true;
        },
        fetchFriendsSuccess: (state, action)=>{
            state.status = "succeeded";
            state.loading = false;
            state.userData = action.payload.userData; // Append only new data
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.pagesdata = action.payload.pagesdata;
        },
        fetchFriendsFailure: (state, action)=>{
            state.status = "failed";
            state.loading = false;
            state.error = action.payload;
        }
    }
});
const { incrementPage, resetFriends, fetchFriendsRequest, fetchFriendsSuccess, fetchFriendsFailure } = friendsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (friendsSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LO: () => (/* binding */ fetchshortlistUsers),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports incrementPage, resetFriends, fetchshortlistrequest, fetchshortlistsuccess, fetchshortlistfaliure */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Thunk for fetching friends
const fetchshortlistUsers = (Pages)=>async (dispatch, getState)=>{
        dispatch(fetchshortlistrequest());
        try {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
            const LoginUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userid");
            const config = {
                method: "get",
                url: `${"https://stag.mntech.website/api"}/v1/user/shortlist/get-short-list-paginat/${LoginUserID}?limit=6`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].request(config);
            const data = response.data;
            dispatch(fetchshortlistsuccess({
                userData: data.data.results,
                totalPages: data.data.totalPages,
                currentPage: data.data.page,
                limit: data.data.limit,
                pagesdata: data.data
            }));
        } catch (error) {
            dispatch(fetchshortlistfaliure(error.message));
        }
    };
// Slice
const shortlistusersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "shortlist",
    initialState: {
        userData: [],
        totalPages: 1,
        currentPage: 1,
        limit: 0,
        pagesdata: "",
        loading: false,
        error: null,
        status: "idle"
    },
    reducers: {
        incrementPage: (state)=>{
            state.currentPage += 1;
        },
        resetFriends: (state)=>{
            state.userData = [];
            state.currentPage = 1;
            state.pagesdata = "";
            state.totalPages = 1;
        },
        fetchshortlistrequest: (state)=>{
            state.status = "loading";
            state.loading = true;
        },
        fetchshortlistsuccess: (state, action)=>{
            state.status = "succeeded";
            state.loading = false;
            state.userData = action.payload.userData; // Append only new data
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.pagesdata = action.payload.pagesdata;
        },
        fetchshortlistfaliure: (state, action)=>{
            state.status = "failed";
            state.loading = false;
            state.error = action.payload;
        }
    }
});
const { incrementPage, resetFriends, fetchshortlistrequest, fetchshortlistsuccess, fetchshortlistfaliure } = shortlistusersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortlistusersSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   kg: () => (/* binding */ checkUserPlan)
/* harmony export */ });
/* unused harmony exports setToken, logout */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// slices/authSlice.js



// import { setCookie, getCookie } from 'cookie-next';
const checkUserPlan = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/checkUserPlan", async ()=>{
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
    if (!token) {
        return {
            success: false,
            message: "No token found"
        };
    }
    const config = {
        method: "get",
        url: `${"https://stag.mntech.website/api"}/v1/user/user/checkPlan`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
    console.log("data-- ", response.data.data);
    const obj = {
        message: "No subscription found for the user",
        success: false
    };
    return obj;
});
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState: {
        token: (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("token") || null,
        hasPlan: false,
        status: "idle",
        error: null
    },
    reducers: {
        setToken: (state, action)=>{
            state.token = action.payload;
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("token", action.payload);
        },
        logout: (state)=>{
            state.token = null;
            state.hasPlan = false;
            state.status = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(checkUserPlan.pending, (state)=>{
            state.status = "loading";
        }).addCase(checkUserPlan.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.hasPlan = action.payload.success;
        }).addCase(checkUserPlan.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});
const { setToken, logout } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99419);
/* harmony import */ var _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55395);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_2__]);
_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ShortlistData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "shortlist",
    initialState: {
        status: _MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.IDLE,
        data: null,
        shortlistUserdata: [],
        error: ""
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_2__/* .RemoveShortlist */ .ky.pending, (state, action)=>{
            state.status = _MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.LOADING;
        }).addCase(_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_2__/* .RemoveShortlist */ .ky.fulfilled, (state, action)=>{
            state.status = _MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.IDLE;
        }).addCase(_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_2__/* .RemoveShortlist */ .ky.rejected, (state, action)=>{
            state.status = _MyProfile__WEBPACK_IMPORTED_MODULE_1__/* .STATUSES */ .n$.ERROR;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortlistData.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55395);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__]);
_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// reducers/allUsersReducer.js


const initialState = {
    users: [],
    loading: false,
    error: null,
    data: [],
    Paginated: {
        loading: false,
        userData: [],
        totalPages: 0,
        currentPage: 0,
        limit: 0
    },
    Ifinit: {
        data: [],
        page: 1,
        loading: false,
        error: ""
    },
    MoreSuggestion: {
        data: [],
        page: 1,
        loading: false,
        error: ""
    }
};
const allUsersReducer = (state = initialState, action)=>{
    switch(action.type){
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_USERS_REQUEST */ .G_:
            return {
                ...state,
                loading: true,
                error: null
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_USERS_SUCCESS */ .mU:
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_USERS_FAILURE */ .y7:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_USERS_PAGINATED_REQUEST */ .Uq:
            return {
                ...state,
                Paginated: {
                    ...state.Paginated,
                    loading: true
                }
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_USERS_PAGINATED_SUCCESS */ .cc:
            return {
                ...state,
                Paginated: {
                    ...state.Paginated,
                    userData: action.payload.userData,
                    totalPages: action.payload.totalPages,
                    currentPage: action.payload.currentPage,
                    limit: action.payload.limit,
                    loading: false
                }
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_ALL_USERS_PAGINATED_FAILURE */ .kG:
            return {
                ...state,
                Paginated: {
                    ...state.Paginated,
                    loading: false
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_INFINIT_SCROLL_USER_REQUEST */ .uXC:
            {
                return {
                    ...state,
                    Ifinit: {
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_INFINIT_SCROLL_USER_SUCCESS */ .Ynn:
            {
                return {
                    ...state,
                    Ifinit: {
                        data: action.payload,
                        loading: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_INFINIT_SCROLL_USER_FAILURE */ .Cqb:
            {
                return {
                    ...state,
                    Ifinit: {
                        loading: false,
                        error: "Something Went Wrong.."
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_MORESUGGESTION_USERS_REQUEST */ .bB6:
            {
                return {
                    ...state,
                    MoreSuggestion: {
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_MORESUGGESTION_USERS_SUCCESS */ .Ca$:
            {
                return {
                    ...state,
                    MoreSuggestion: {
                        loading: false,
                        data: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_MORESUGGESTION_USERS_FAILURE */ .psl:
            {
                return {
                    ...state,
                    MoreSuggestion: {
                        loading: false,
                        error: "Something Went Wrong"
                    }
                };
            }
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_SHORTLIST */ ._w:
            // Logic to add user to shortlist
            return {
                ...state
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .LIKE_USER */ .v0:
            // Logic to like a user
            return {
                ...state
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .UNLIKE_USER */ .HC:
            // Logic to unlike a user
            return {
                ...state
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .SEND_REQUEST */ .Nw:
            // Logic to send a request to a user
            return {
                ...state
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_REQUEST */ .Wo:
            // Logic to remove a request sent to a user
            return {
                ...state
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allUsersReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_GetingUserById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_GetingUserById__WEBPACK_IMPORTED_MODULE_0__]);
_actions_GetingUserById__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialState = {
    user: null,
    loading: false,
    error: ""
};
const userByIdReducer = (state = initialState, action)=>{
    switch(action.type){
        case _actions_GetingUserById__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_USER_BY_ID_REQUEST */ .gt:
            return {
                ...state,
                loading: true,
                error: null
            };
        case _actions_GetingUserById__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_USER_BY_ID_SUCCESS */ .zS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            };
        case _actions_GetingUserById__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_USER_BY_ID_FAILURE */ .im:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userByIdReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mt: () => (/* binding */ uploadImagesSuccess),
/* harmony export */   vp: () => (/* binding */ uploadImagesFailure),
/* harmony export */   yI: () => (/* binding */ uploadImagesStart)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
// redux/slices/imageSlice.js

const initialState = {
    isLoading: false,
    error: null
};
const imageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "images",
    initialState,
    reducers: {
        uploadImagesStart (state) {
            state.isLoading = true;
            state.error = null;
        },
        uploadImagesSuccess (state) {
            state.isLoading = false;
            state.error = null;
        },
        uploadImagesFailure (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
const { uploadImagesStart, uploadImagesSuccess, uploadImagesFailure } = imageSlice.actions;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (imageSlice.reducer);


/***/ }),

/***/ 99419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ updateMyProfessionalData),
/* harmony export */   Mf: () => (/* binding */ fetchproffessionalData),
/* harmony export */   N3: () => (/* binding */ FetchMyEducationData),
/* harmony export */   Pc: () => (/* binding */ fetchTotalLikes),
/* harmony export */   QR: () => (/* binding */ fetchAdressData),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _7: () => (/* binding */ updateMyProfileData),
/* harmony export */   di: () => (/* binding */ fetchMyProfileData),
/* harmony export */   eM: () => (/* binding */ updateMyHobbies),
/* harmony export */   "in": () => (/* binding */ updateMyEducationData),
/* harmony export */   lh: () => (/* binding */ updateMyAddressData),
/* harmony export */   n$: () => (/* binding */ STATUSES),
/* harmony export */   xL: () => (/* binding */ fetchMyhoobies),
/* harmony export */   yi: () => (/* binding */ updateMyPartnerPrefdata),
/* harmony export */   yr: () => (/* binding */ fetchPartnerPrefdata)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);


const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
});
const updateMyProfileData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/updateData", async (updatedData, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append("Content-Type", "application/json"); // Add content type for updating data
            const requestOptions = {
                method: "PUT",
                headers: myHeaders,
                body: JSON.stringify(updatedData),
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                // console.log("UPDATE :",result.userData.name)
                localStorage.setItem("userName", result.userData.name);
                (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.setCookie)("userName", result.userData.name);
                return result.data;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateMyEducationData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/updateMyEducationData", async ({ EducationId, UpdatedDataforEducation }, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json"); // Add content type for updating data
        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(UpdatedDataforEducation),
            redirect: "follow"
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/userEducation/${EducationId}`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            throw new Error("Unauthorized");
        } else {
            console.error("API request failed:", response.statusText);
            throw new Error("API request failed");
        }
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateMyAddressData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/UpdateMyAdress", async ({ AdressID, UpdatedDataforAddress }, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json"); // Add content type for updating data
        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(UpdatedDataforAddress),
            redirect: "follow"
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/address/${AdressID}`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            throw new Error("Unauthorized");
        } else {
            console.error("API request failed:", response.statusText);
            throw new Error("API request failed");
        }
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateMyProfessionalData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/updateMyProfessionalData", async ({ ProfessionalId, UpdatedDataforProfessional }, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json"); // Add content type for updating data
        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(UpdatedDataforProfessional),
            redirect: "follow"
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/userProfessionalDetail/${ProfessionalId}`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            throw new Error("Unauthorized");
        } else {
            console.error("API request failed:", response.statusText);
            throw new Error("API request failed");
        }
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const updateMyPartnerPrefdata = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/updatePartnerPrefdata", async ({ partnerPrefId, UpdatedDataforPartnerPrefdata }, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json"); // Add content type for updating data
        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(UpdatedDataforPartnerPrefdata),
            redirect: "follow"
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/partner/${partnerPrefId}`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            throw new Error("Unauthorized");
        } else {
            console.error("API request failed:", response.statusText);
            throw new Error("API request failed");
        }
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
// url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`,
const updateMyHobbies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/updatemyhobbies", async (hobbiesInfo, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json"); // Add content type for updating data
        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(hobbiesInfo),
            redirect: "follow"
        };
        const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/update-user`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            return result.userData.hobbies;
        } else if (response.status === 401) {
            throw new Error("Unauthorized");
        } else {
            console.error("API request failed:", response.statusText);
            throw new Error("API request failed");
        }
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
});
const initialState = {
    status: STATUSES.IDLE,
    data: null,
    totalLikes: 0,
    error: null,
    profileData: {
        adressData: {
            loading: false,
            data: null,
            error: null
        },
        EducationData: {
            loading: false,
            data: null,
            error: null
        },
        ProfessionalData: {
            loading: false,
            data: null,
            error: null
        },
        PartnerPrefData: {
            loading: false,
            data: null,
            error: null
        },
        HobbiesData: {
            loading: false,
            data: null,
            error: null
        }
    }
};
const MyPofileData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "myProfile",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchMyProfileData.pending, (state)=>{
            state.status = STATUSES.LOADING;
        }).addCase(fetchMyProfileData.fulfilled, (state, action)=>{
            state.status = STATUSES.IDLE;
            state.data = action.payload;
        }).addCase(fetchMyProfileData.rejected, (state, action)=>{
            state.status = STATUSES.ERROR;
            state.error = action.error.message;
        }).addCase(fetchTotalLikes.pending, (state)=>{
            state.status = STATUSES.LOADING;
        }).addCase(fetchTotalLikes.fulfilled, (state, action)=>{
            state.status = STATUSES.IDLE, state.totalLikes = action.payload;
        }).addCase(fetchTotalLikes.rejected, (state, action)=>{
            state.status = STATUSES.ERROR, state.error = action.payload;
        }).addCase(updateMyProfileData.pending, (state)=>{
            state.status = STATUSES.LOADING;
        }).addCase(updateMyProfileData.fulfilled, (state, action)=>{
            state.status = STATUSES.IDLE;
            console.log("action :", action.payload);
        }).addCase(updateMyProfileData.rejected, (state, action)=>{
            state.status = STATUSES.ERROR;
            state.error = action.error.message;
        }).addCase(FetchMyEducationData.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    EducationData: {
                        ...state.profileData.EducationData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(FetchMyEducationData.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    EducationData: {
                        ...state.profileData.EducationData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(FetchMyEducationData.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    EducationData: {
                        ...state.profileData.EducationData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(updateMyEducationData.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    EducationData: {
                        ...state.profileData.EducationData,
                        loading: STATUSES.LOADING,
                        error: null
                    }
                }
            })).addCase(updateMyEducationData.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    EducationData: {
                        ...state.profileData.EducationData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(updateMyEducationData.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    EducationData: {
                        ...state.profileData.EducationData,
                        loading: STATUSES.ERROR,
                        error: action.payload
                    }
                }
            })).addCase(fetchproffessionalData.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    ProfessionalData: {
                        ...state.profileData.ProfessionalData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(fetchproffessionalData.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    ProfessionalData: {
                        ...state.profileData.ProfessionalData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(fetchproffessionalData.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    ProfessionalData: {
                        ...state.profileData.ProfessionalData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(updateMyProfessionalData.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    ProfessionalData: {
                        ...state.profileData.ProfessionalData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(updateMyProfessionalData.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    ProfessionalData: {
                        ...state.profileData.ProfessionalData,
                        loading: STATUSES.IDLE,
                        data: action.payload
                    }
                }
            })).addCase(updateMyAddressData.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    adressData: {
                        ...state.profileData.adressData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(updateMyAddressData.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    adressData: {
                        ...state.profileData.adressData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(updateMyAddressData.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    adressData: {
                        ...state.profileData.adressData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(fetchAdressData.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    adressData: {
                        ...state.profileData.adressData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(fetchAdressData.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    adressData: {
                        ...state.profileData.adressData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(fetchAdressData.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    adressData: {
                        ...state.profileData.adressData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(fetchPartnerPrefdata.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    PartnerPrefData: {
                        ...state.profileData.PartnerPrefData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(fetchPartnerPrefdata.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    PartnerPrefData: {
                        ...state.profileData.PartnerPrefData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(fetchPartnerPrefdata.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    PartnerPrefData: {
                        ...state.profileData.PartnerPrefData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(updateMyPartnerPrefdata.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    PartnerPrefData: {
                        ...state.profileData.PartnerPrefData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(updateMyPartnerPrefdata.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    PartnerPrefData: {
                        ...state.profileData.PartnerPrefData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(updateMyPartnerPrefdata.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    PartnerPrefData: {
                        ...state.profileData.PartnerPrefData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(fetchMyhoobies.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    HobbiesData: {
                        ...state.profileData.HobbiesData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(fetchMyhoobies.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    HobbiesData: {
                        ...state.profileData.HobbiesData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(fetchMyhoobies.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    HobbiesData: {
                        ...state.profileData.HobbiesData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            })).addCase(updateMyHobbies.pending, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    HobbiesData: {
                        ...state.profileData.HobbiesData,
                        loading: STATUSES.LOADING,
                        data: null,
                        error: null
                    }
                }
            })).addCase(updateMyHobbies.fulfilled, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    HobbiesData: {
                        ...state.profileData.HobbiesData,
                        loading: STATUSES.IDLE,
                        data: action.payload,
                        error: null
                    }
                }
            })).addCase(updateMyHobbies.rejected, (state, action)=>({
                ...state,
                profileData: {
                    ...state.profileData,
                    HobbiesData: {
                        ...state.profileData.HobbiesData,
                        loading: STATUSES.ERROR,
                        data: null,
                        error: action.payload
                    }
                }
            }));
    }
});
const fetchMyhoobies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/fetchmyhobbies", async ()=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/me`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data?.user?.hobbies;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
const fetchMyProfileData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/fetchData", async ()=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/auth/me`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data.user;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
const fetchTotalLikes = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/fetchLikes", async ()=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const currentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userid");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/like/get-user-likes-paginated/${currentUserID}`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                console.log(result.data);
                return result.data.totalResults;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
//MyProfile - Education Tab
const FetchMyEducationData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/FetchMyEducationData", async ()=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const CurrentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userid");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/userEducation/${CurrentUserID}`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
//MyProfile - Professional Tab
const fetchproffessionalData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/ProfessionalTab", async ()=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const CurrentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userid");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/userProfessionalDetail/getbyid/${CurrentUserID}`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
const fetchAdressData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/AddressTab", async (addressID, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const CurrentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userid");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/address/${addressID}`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
const fetchPartnerPrefdata = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("myProfile/PartnerprefData", async (partnerId, thunkAPI)=>{
    try {
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
        const CurrentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("userid");
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(`${"https://stag.mntech.website/api"}/v1/user/partner/getByUser/${CurrentUserID}`, requestOptions);
            if (response.ok) {
                const result = await response.json();
                return result.data;
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                console.error("API request failed:", response.statusText);
                throw new Error("API request failed");
            }
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPofileData.reducer);


/***/ }),

/***/ 29422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ markshortlistseen),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55395);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__]);
_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const markshortlistseen = ()=>({
        type: _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .MARK_SHORTLISTS_AS_SEEN */ .Wx
    });
const initialState = {
    newShortlists: 0
};
const NotificationReducer = (state = initialState, action)=>{
    switch(action.type){
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .ADD_NEW_SHORTLIST */ .UH:
            return {
                ...state,
                newShortlists: state.newShortlists + 1
            };
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_0__/* .MARK_SHORTLISTS_AS_SEEN */ .Wx:
            return {
                ...state,
                newShortlists: 0
            };
        // ... handle other action types as needed
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ searchformReducer)
/* harmony export */ });
/* unused harmony export SearchFormSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77484);


const initialState = {
    minAge: 0,
    maxAge: 0,
    minHeight: 0,
    maxHeight: 0,
    minWeight: 0,
    maxWeight: 0,
    maritalStatus: [],
    religion: [],
    community: [],
    stateofLiving: [],
    motherTongue: [],
    currentCountry: [],
    currentCity: [],
    saveSearch: "",
    loading: false,
    searchResults: null,
    error: null,
    Searchsave: {
        loading: false,
        error: "",
        data: []
    }
};
const searchformReducer = (state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_SEARCH_DATA":
            return {
                ...state,
                ...action.payload
            };
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_SAVESEARCH_DATA */ .iFM:
            return {
                ...state,
                Searchsave: {
                    loading: true,
                    data: [],
                    error: ""
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_SAVESEARCH_DATA_SUCCESS */ .R07:
            return {
                ...state,
                Searchsave: {
                    loading: false,
                    data: action.payload,
                    error: ""
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_SAVESEARCH_DATA_FAILURE */ .bS_:
            return {
                ...state,
                Searchsave: {
                    loading: false,
                    data: [],
                    error: ""
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_SAVESEARCH_DATA */ .FRr:
            return {
                ...state,
                Searchsave: {
                    ...state.Searchsave,
                    loading: true,
                    error: ""
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_SAVESEARCH_DATA_SUCCESS */ .MHL:
            return {
                ...state,
                Searchsave: {
                    ...state.Searchsave,
                    loading: false,
                    error: ""
                }
            };
        default:
            return state;
    }
};
const SearchFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "SearchForm",
    initialState,
    reducers: {
        updateSearchData: (state, action)=>{
            state.formData = {
                ...state.formData,
                ...action.payload
            };
        },
        setFormValidation: (state, action)=>{
            state.isFormValid = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addMatcher((action)=>action.type.endsWith("/pending"), (state, action)=>{
            state.loading = true; // Set loading state to true when any pending action occurs
        }).addMatcher((action)=>action.type.endsWith("/rejected"), (state, action)=>{
            state.loading = false; // Set loading state to false when any rejected action occurs
            state.error = action.error.message; // Set error message from action payload
        }).addMatcher((action)=>action.type.endsWith("/fulfilled"), (state, action)=>{
            state.loading = false; // Set loading state to false when any fulfilled action occurs
            state.searchResults = action.payload; // Set search results from action payload
        });
    }
});


/***/ }),

/***/ 5796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77484);

const initialState = {
    step: 0,
    loading: false,
    message: "",
    userData: {
        name: "",
        email: "",
        otp: "",
        password: ""
    },
    ResetPassword: {
        step: 0,
        loading: false,
        error: "",
        message: ""
    }
};
const SignupReducer = (state = initialState, action)=>{
    switch(action.type){
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_FIRST_STEP */ .Mm_:
            {
                return {
                    ...state,
                    loading: true
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_FIRST_STEP_SUCCESS */ .kgb:
            {
                return {
                    ...state,
                    loading: false,
                    step: 1,
                    message: action.payload.message
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_FIRST_STEP_FAILURE */ .qOB:
            {
                return {
                    ...state,
                    loading: false,
                    message: "Something Went Wrong !"
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_SECOND_STEP */ .zaV:
            {
                return {
                    ...state,
                    loading: true
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_SECOND_STEP_SUCCESS */ .Teg:
            {
                return {
                    ...state,
                    step: 2,
                    loading: false,
                    message: action.payload.message
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_SECOND_STEP_FAILURE */ .OjU:
            {
                return {
                    ...state,
                    loading: false,
                    message: "Something Went Wrong !"
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_THIRD_STEP */ .AV9:
            {
                return {
                    ...state,
                    loading: true
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_THIRD_STEP_SUCCESS */ .V1q:
            {
                return {
                    ...state,
                    step: 3,
                    loading: false,
                    message: action.payload.message
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .SIGNUP_THIRD_STEP_FAILURE */ .QbK:
            {
                return {
                    ...state,
                    loading: false,
                    message: "Something Went Wrong !"
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_STEPS */ .A_O:
            {
                return {
                    ...state,
                    step: 0
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_FIRST_STEP */ .Ul$:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP */ .AGU:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: false,
                        step: 1
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP */ .AMR:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: false,
                        error: "Something Went Wrong"
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_SECOND_STEP */ .DLd:
            {
                return {
                    ...state,
                    loading: true
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP */ .R9$:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: false,
                        step: 2
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP */ .fTE:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: false,
                        error: "Something Went Wrong !"
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_THIRD_STEP */ .t9z:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP */ .F_P:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: false,
                        step: 3
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP */ .Gei:
            {
                return {
                    ...state,
                    ResetPassword: {
                        ...state.ResetPassword,
                        loading: false,
                        error: "Something Went Wrong !"
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .RESET_PASSWORD_STEP */ .N8s:
            {
                return {
                    step: 0,
                    loading: false,
                    message: "",
                    userData: {
                        name: "",
                        email: "",
                        otp: "",
                        password: ""
                    },
                    ResetPassword: {
                        step: 0,
                        loading: false,
                        error: "",
                        message: ""
                    }
                };
            }
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupReducer);


/***/ }),

/***/ 50595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G3: () => (/* binding */ updateSpamUserdata),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export setFormValidation */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77484);
// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     SpamUserdata: {
//         spamUserId: "",
//         reason: "",
//         remark: ""
//     },
//     error: null,
//     loading: false
// };
// export const SpamUserForm = (state = initialState, action) => {
//     switch (action.type) {
//         case 'UPDATE_SPAM_USER_DATA':
//             return {
//                 ...state,
//                 ...action.payload, // Merging payload directly into the state
//             };
//         default:
//             return state;
//     }
// };
// export const SpamuserSlice = createSlice({
//     name: "Spamuser",
//     initialState,
//     reducers: {
//         updateSpamUserdata: (state, action) => {
//             state.SpamUserdata = { ...state.SpamUserdata, ...action.payload };
//         },
//         setFormValidation: (state, action) => {
//             state.isFormValid = action.payload;
//         },
//     },
// });


const initialState = {
    SpamUserdata: {
        spamUserId: "",
        reason: "",
        remark: "",
        UserName: ""
    },
    error: null,
    loading: false
};
const SpamuserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "Spamuser",
    initialState,
    reducers: {
        updateSpamUserdata: (state, action)=>{
            state.SpamUserdata = {
                ...state.SpamUserdata,
                ...action.payload
            };
        },
        setFormValidation: (state, action)=>{
            state.isFormValid = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_type__WEBPACK_IMPORTED_MODULE_1__/* .POST_SPAM_REPORT_USER */ .Knw, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(_type__WEBPACK_IMPORTED_MODULE_1__/* .POST_SPAM_REPORT_USER_SUCCESS */ .Stt, (state)=>{
            state.loading = false;
            state.error = null;
            state.SpamUserdata = {
                spamUserId: "",
                reason: "",
                remark: ""
            };
        }).addCase(_type__WEBPACK_IMPORTED_MODULE_1__/* .POST_SPAM_REPORT_USER_FAILURE */ .Ysm, (state)=>{
            state.loading = false;
            state.error = null;
        });
    }
});
const { updateSpamUserdata, setFormValidation } = SpamuserSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpamuserSlice.reducer);


/***/ }),

/***/ 75852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77484);

const initialState = {
    loading: false,
    data: null,
    error: null,
    plans: {
        loading: false,
        data: null,
        error: null
    },
    ChoosedPlan: {
        loading: false,
        data: null,
        error: null
    }
};
const UpgradePlansReducer = (state = initialState, action)=>{
    switch(action.type){
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPGRADE_PLANS */ .Kyc:
            return {
                ...state,
                plans: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPGRADE_PLANS_SUCCESS */ .pq$:
            return {
                ...state,
                plans: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPGRADE_PLANS_FAILURE */ .S8K:
            return {
                ...state,
                plans: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPGRADE_PLANS_BY_ID */ .M2Y:
            return {
                ...state,
                ChoosedPlan: {
                    loading: true
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPGRADE_PLANS_BY_ID_SUCCESS */ .DK9:
            return {
                ...state,
                ChoosedPlan: {
                    loading: false,
                    data: action.payload
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPGRADE_PLANS_BY_ID_FAILURE */ .cX8:
            return {
                ...state,
                ChoosedPlan: {
                    loading: false,
                    error: action.payload
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PLANS_BY_NAME_REQUEST */ .O0G:
            return {
                ...state,
                plans: {
                    loading: true
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PLANS_BY_NAME_SUCCESS */ .J8w:
            return {
                ...state,
                plans: {
                    loading: false,
                    data: action.payload
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PLANS_BY_NAME_FAILURE */ .XRk:
            return {
                ...state,
                plans: {
                    loading: false,
                    error: "Something Went Wrong !"
                }
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpgradePlansReducer);


/***/ }),

/***/ 30794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qb: () => (/* binding */ imageReducer)
/* harmony export */ });
/* unused harmony exports UPLOAD_IMAGE, uploadImage */
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
// Action creator
const uploadImage = (imageData)=>({
        type: UPLOAD_IMAGE,
        payload: imageData
    });
// Reducer
const initialState = {
    imageData: null
};
const imageReducer = (state = initialState, action)=>{
    switch(action.type){
        case UPLOAD_IMAGE:
            return {
                ...state,
                imageData: action.payload
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 13039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77484);
/* harmony import */ var _MyProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99419);
/* harmony import */ var _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55395);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_1__]);
_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// reducers/userReducer.js



const initialState = {
    loading: false,
    data: null,
    requestdata: {
        loading: false,
        data: null
    },
    error: null,
    educationdata: null,
    addressdata: {
        loading: false,
        data: null,
        error: null
    },
    professionaldata: null,
    partnerprefferencedata: {
        loading: false,
        data: null,
        error: null
    },
    acceptedrequestdata: {
        loading: false,
        data: null,
        acceptedUsers: null
    },
    notifications: {
        loading: false,
        data: null,
        error: ""
    },
    sentrequestdata: {
        data: null,
        sentUsersdata: null //Pending--v2
    },
    blockuserdata: {
        data: null,
        blockusersdata: null
    },
    cancelrequestdata: {
        data: null
    },
    profileimageupdate: {
        loading: false,
        process: false,
        data: null
    },
    cancelusersdata: {
        loading: false,
        data: null
    },
    deleteimagedata: {
        loading: false,
        error: null
    },
    recentusersdata: {
        data: null,
        loading: false,
        error: null
    },
    searchusersprofiledata: {
        data: null,
        loading: false,
        error: null
    },
    UserGridData: {
        userData: null,
        totalPages: 1,
        currentPage: 1,
        pagesdata: "",
        loading: false,
        error: null
    },
    LikedUsersData: {
        data: null,
        likeloading: false,
        error: null
    },
    UsersStorydata: {
        data: [],
        mystory: [],
        loading: false,
        mystorydeleted: false,
        CloseModal: false,
        error: null
    },
    StoryUpload: {
        loading: false,
        error: null,
        modalClose: false
    },
    MatchScore: {
        loading: false,
        matchScore: null,
        error: ""
    }
};
const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .SEND_REQUEST */ .Nwi:
            return {
                ...state,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .REQUEST_SUCCESS */ .Gz2:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .REQUEST_FAILURE */ ._1:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST */ .kE3:
            return {
                ...state,
                // loading: true,
                requestdata: {
                    loading: true,
                    data: null
                },
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST_SUCCESS */ .B9X:
            return {
                ...state,
                // loading: false,
                requestdata: {
                    loading: false,
                    data: action.payload
                },
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST_FAILURE */ .h3w:
            return {
                ...state,
                // loading: false,
                requestdata: {
                    loading: false,
                    data: null
                },
                error: action.payload
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .ACCEPT_REQUEST */ .kfD:
            return {
                ...state,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .ACCEPT_REQUEST_SUCCESS */ .uv8:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .ACCEPT_REQUEST_FAILURE */ .SLY:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .REJECT_REQUEST */ .Wfq:
            return {
                ...state,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .REJECT_REQUEST_SUCCESS */ .Drg:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .REJECT_REQUEST_FAILURE */ .n_q:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_EDUCATION_DATA */ .l12:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_EDUCATION_DATA_SUCCESS */ .okh:
            {
                return {
                    ...state,
                    loading: false,
                    educationdata: action.payload,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_EDUCATION_DATA_FAILURE */ .wrd:
            {
                return {
                    ...state,
                    loading: false,
                    educationdata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_EDUCATION_DATA */ .iDq:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_EDUCATION_DATA_SUCCESS */ .Hib:
            {
                return {
                    ...state,
                    loading: false,
                    // educationdata: action.payload,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_EDUCATION_DATA_FAILURE */ ._hb:
            {
                return {
                    ...state,
                    loading: false,
                    educationdata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PROFESSIONAL_DATA */ .MBe:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PROFESSIONAL_DATA_SUCCESS */ .TUX:
            {
                return {
                    ...state,
                    loading: false,
                    professionaldata: action.payload,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PROFESSIONAL_DATA_FAILURE */ .ecN:
            {
                return {
                    ...state,
                    loading: false,
                    professionaldata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFESSIONAL_DATA */ .w0D:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFESSIONAL_DATA_SUCCESS */ .qbO:
            {
                return {
                    ...state,
                    loading: false,
                    professionaldata: action.payload,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFESSIONAL_DATA_FAILURE */ .hcD:
            {
                return {
                    ...state,
                    loading: false,
                    professionaldata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PARTNERPREFERENCE_DATA */ .Ou8:
            {
                return {
                    ...state,
                    // loading: true,
                    // error: null
                    partnerprefferencedata: {
                        loading: true,
                        data: null,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PARTNERPREFERENCE_DATA_SUCCESS */ .PrS:
            {
                return {
                    ...state,
                    // loading: false,
                    // error: null
                    partnerprefferencedata: {
                        loading: false,
                        data: action.payload,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_PARTNERPREFERENCE_DATA_FAILURE */ .$20:
            {
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                    partnerprefferencedata: {
                        loading: false,
                        data: null,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PARTNERPREFERENCE_DATA */ .Xvt:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PARTNERPREFERENCE_DATA_SUCCESS */ .ksR:
            {
                return {
                    ...state,
                    loading: false,
                    partnerprefferencedata: action.payload,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PARTNERPREFERENCE_DATA_FAILURE */ .f8q:
            {
                return {
                    ...state,
                    loading: false,
                    partnerprefferencedata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ACCEPTED_REQUEST_DATA */ .uYO:
            {
                return {
                    ...state,
                    loading: true,
                    acceptedrequestdata: {
                        ...state.acceptedrequestdata,
                        loading: true
                    },
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ACCEPTED_REQUEST_DATA_SUCCESS */ ._cx:
            {
                return {
                    ...state,
                    loading: false,
                    acceptedrequestdata: {
                        data: action.payload.data,
                        acceptedUsers: action.payload.acceptedUsers,
                        loading: false
                    },
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ACCEPTED_REQUEST_DATA_FAILURE */ .xFV:
            {
                return {
                    ...state,
                    loading: false,
                    acceptedrequestdata: {
                        ...state.acceptedrequestdata,
                        loading: false
                    },
                    partnerprefferencedata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST_DATA */ .VU1:
            {
                return {
                    ...state,
                    notifications: {
                        ...state.notifications,
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST_DATA_SUCCESS */ .$lw:
            {
                return {
                    ...state,
                    notifications: {
                        ...state.notifications,
                        data: action.payload,
                        loading: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_REQUEST_DATA */ .VU1:
            {
                return {
                    ...state,
                    notifications: {
                        ...state.notifications,
                        loading: false,
                        error: "Something Went Wrong"
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SENTREQUEST_DATA */ .B4x:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SENTREQUEST_DATA_SUCCESS */ .V8p:
            {
                return {
                    ...state,
                    loading: false,
                    sentrequestdata: {
                        data: action.payload.data
                    },
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SENTREQUEST_DATA_FAILURE */ .AiW:
            {
                return {
                    ...state,
                    loading: false,
                    partnerprefferencedata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_BLOCK_USERDATA */ .vrV:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_BLOCK_USERDATA_SUCCESS */ .Ykm:
            {
                return {
                    ...state,
                    loading: false,
                    blockedusersdata: action.payload,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_BLOCK_USERDATA_FAILURE */ .tVS:
            {
                return {
                    ...state,
                    loading: false,
                    blockedusersdata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .SENT_BLOCK_REQUEST */ .D4m:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .SENT_BLOCK_REQUEST_SUCCESS */ .f1h:
            {
                return {
                    ...state,
                    loading: false,
                    blockuserdata: {
                        data: action.payload,
                        blockusersdata: action.payload
                    },
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .SENT_BLOCK_REQUEST_FAILURE */ .Nir:
            {
                return {
                    ...state,
                    loading: false,
                    blockedusersdata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .CANCEL_FRIEND_REQUEST */ .pi7:
            {
                return {
                    ...state,
                    loading: true,
                    cancelrequestdata: null,
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .CANCEL_FRIEND_REQUEST_SUCCESS */ .JHc:
            {
                return {
                    ...state,
                    loading: false,
                    cancelrequestdata: {
                        data: action.payload
                    },
                    error: null
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .CANCEL_FRIEND_REQUEST_FAILURE */ .JwC:
            {
                return {
                    ...state,
                    loading: false,
                    cancelrequestdata: null,
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE */ .O4t:
            {
                return {
                    ...state,
                    profileimageupdate: {
                        ...state.profileimageupdate,
                        loading: true,
                        process: false,
                        data: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE_SUCCESS */ .BxE:
            {
                return {
                    ...state,
                    profileimageupdate: {
                        ...state.profileimageupdate,
                        loading: false,
                        process: true,
                        data: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE_PROCESS */ .mJ6:
            return {
                ...state,
                profileimageupdate: {
                    ...state.profileimageupdate,
                    process: false
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_PROFILE_IMAGE_FAILURE */ .P0B:
            {
                return {
                    ...state,
                    profileimageupdate: {
                        ...state.profileimageupdate,
                        loading: false,
                        process: false,
                        data: null
                    },
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_CANCELREQUEST_DATA */ .aHB:
            {
                return {
                    ...state,
                    cancelusersdata: {
                        loading: true,
                        data: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_CANCELREQUEST_DATA_SUCCESS */ .XTX:
            {
                return {
                    ...state,
                    cancelusersdata: {
                        loading: false,
                        data: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_CANCELREQUEST_DATA_FAILURE */ .AV$:
            {
                return {
                    ...state,
                    cancelusersdata: {
                        loading: false,
                        data: null
                    },
                    error: action.payload
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_IMAGE */ .S1t:
            {
                return {
                    ...state,
                    deleteimagedata: {
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_IMAGE_SUCCESS */ .YYL:
            {
                return {
                    ...state,
                    deleteimagedata: {
                        loading: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_IMAGE_FAILURE */ .Ej0:
            {
                return {
                    ...state,
                    deleteimagedata: {
                        loading: false,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .POST_RECENT_USERPROFILE */ .ccb:
            {
                return {
                    ...state
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .POST_RECENT_USERPROFILE_SUCCESS */ .etF:
            {
                return {
                    ...state
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .POST_RECENT_USERPROFILE_FAILURE */ .UVm:
            {
                return {
                    ...state
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_RECENT_USERPROFILE_DATA */ .JZ9:
            {
                return {
                    ...state,
                    recentusersdata: {
                        data: null,
                        loading: true,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_RECENT_USERPROFILE_DATA_SUCCESS */ .OqK:
            {
                return {
                    ...state,
                    recentusersdata: {
                        data: action.payload,
                        loading: false,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_RECENT_USERPROFILE_DATA_FAILURE */ .HUJ:
            {
                return {
                    ...state,
                    recentusersdata: {
                        data: null,
                        loading: false,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SEARCHUSERS_DATA */ .h09:
            {
                return {
                    ...state,
                    searchusersprofiledata: {
                        data: null,
                        loading: true,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SEARCHUSERS_DATA_SUCCESS */ .P9M:
            {
                return {
                    ...state,
                    searchusersprofiledata: {
                        data: action.payload,
                        loading: false,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_SEARCHUSERS_DATA_FAILURE */ .$nZ:
            {
                return {
                    ...state,
                    searchusersprofiledata: {
                        data: null,
                        loading: false,
                        error: action.payload
                    }
                };
            }
        case _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_1__/* .LIKE_USER */ .v0:
            {}
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_GRID_USER_DATA_REQUEST */ .lG:
            {
                return {
                    ...state,
                    UserGridData: {
                        data: null,
                        currentPage: 0,
                        totalPages: 0,
                        pagesdata: "",
                        loading: true,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_GRID_USER_DATA_REQUEST_SUCCESS */ .w7j:
            {
                return {
                    ...state,
                    UserGridData: {
                        data: action.payload.userData,
                        totalPages: action.payload.totalPages,
                        currentPage: action.payload.currentPage,
                        pagesdata: action.payload.pagesdata,
                        loading: false,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_GRID_USER_DATA_REQUEST_FAILURE */ .z3E:
            {
                return {
                    ...state,
                    UserGridData: {
                        data: null,
                        totalPages: 0,
                        currentPage: 0,
                        pagesdata: "",
                        loading: false,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_USERS_PROFILE_DATA */ .leq:
            {
                return {
                    ...state,
                    LikedUsersData: {
                        data: null,
                        likeloading: true,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_USERS_PROFILE_DATA_SUCCESS */ .Sqh:
            {
                return {
                    ...state,
                    LikedUsersData: {
                        data: action.payload,
                        likeloading: false,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_USERS_PROFILE_DATA */ .leq:
            {
                return {
                    ...state,
                    LikedUsersData: {
                        data: null,
                        likeloading: false,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ALL_STATUS */ .Zl_:
            {
                return {
                    ...state,
                    UsersStorydata: {
                        data: null,
                        mystory: null,
                        mystorydeleted: false,
                        CloseModal: false,
                        loading: true,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ALL_STATUS_SUCCESS */ .tPz:
            {
                return {
                    ...state,
                    UsersStorydata: {
                        data: action.payload.allstatus,
                        mystory: action.payload.mystory,
                        mystorydeleted: false,
                        CloseModal: true,
                        loading: false,
                        error: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_ALL_STATUS_FAILURE */ .Ood:
            {
                return {
                    ...state,
                    UsersStorydata: {
                        data: null,
                        mystory: null,
                        loading: false,
                        CloseModal: true,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_MY_STATUS */ .y_1:
            {}
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_MY_STATUS_SUCCESS */ .S47:
            {
                return {
                    ...state,
                    UsersStorydata: {
                        ...state.UsersStorydata,
                        mystorydeleted: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_STATUS_MODAL */ .fjP:
            {
                return {
                    ...state,
                    UsersStorydata: {
                        ...state.UsersStorydata,
                        mystorydeleted: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY */ .rJX:
            {
                return {
                    ...state,
                    StoryUpload: {
                        loading: true,
                        error: null,
                        modalClose: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY_SUCCESS */ .ZY3:
            {
                return {
                    ...state,
                    StoryUpload: {
                        loading: false,
                        error: null,
                        modalClose: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY_FAILURE */ .tGh:
            {
                return {
                    ...state,
                    StoryUpload: {
                        loading: false,
                        error: action.payload,
                        modalClose: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_MY_STORY_MODAL */ .INY:
            {
                return {
                    ...state,
                    StoryUpload: {
                        loading: false,
                        error: null,
                        modalClose: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_MATCH_SCORE */ .nrb:
            {
                return {
                    ...state,
                    MatchScore: {
                        loading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_MATCH_SCORE_SUCCESS */ .K1_:
            {
                return {
                    ...state,
                    MatchScore: {
                        loading: false,
                        matchScore: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_2__/* .GET_MATCH_SCORE_FAILURE */ .km4:
            {
                return {
                    ...state,
                    MatchScore: {
                        error: action.payload
                    }
                };
            }
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77484);

const initialState = {
    loading: false,
    data: null,
    error: null,
    Profilehide: {
        loading: false,
        error: null,
        data: null,
        closemodal: false
    },
    privacyquestions: {
        loading: false,
        error: null,
        data: null
    },
    DisplayName: {
        NameChangeloading: false,
        error: null,
        status: ""
    }
};
const Userseting = (state = initialState, action)=>{
    switch(action.type){
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .HIDE_MY_PROFILE */ .HUs:
            return {
                ...state,
                Profilehide: {
                    loading: true,
                    error: null,
                    data: null,
                    closemodal: false
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .HIDE_MY_PROFILE_SUCCESS */ .C5r:
            {
                return {
                    ...state,
                    Profilehide: {
                        loading: false,
                        error: null,
                        closemodal: true,
                        data: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .HIDE_MY_PROFILE_FAILURE */ .KYL:
            {
                return {
                    ...state,
                    Profilehide: {
                        loading: false,
                        error: action.payload,
                        data: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .HIDE_MY_PROFILE_CLOSEMODAL */ .H4k:
            {
                return {
                    ...state,
                    Profilehide: {
                        ...state.Profilehide,
                        closemodal: false
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PRIVACY_QUESTIONS */ .PE3:
            {
                return {
                    ...state,
                    privacyquestions: {
                        loading: true,
                        error: null,
                        data: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PRIVACY_QUESTIONS_SUCCESS */ .LZm:
            {
                return {
                    ...state,
                    privacyquestions: {
                        loading: false,
                        error: null,
                        data: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PRIVACY_QUESTIONS_FAILURE */ .RGw:
            {
                return {
                    ...state,
                    privacyquestions: {
                        loading: false,
                        error: action.payload,
                        data: null
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_DISPLAY_NAME */ .kr:
            {
                return {
                    ...state,
                    DisplayName: {
                        NameChangeloading: true
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_DISPLAY_NAME_SUCCESS */ .gaY:
            {
                return {
                    ...state,
                    DisplayName: {
                        NameChangeloading: false,
                        status: "Success"
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_DISPLAY_NAME_FAILURE */ .lzQ:
            {
                return {
                    ...state,
                    DisplayName: {
                        NameChangeloading: false,
                        error: action.payload
                    }
                };
            }
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_DISPLAY_STATUS */ .ry4:
            {
                return {
                    ...state,
                    DisplayName: {
                        // NameChangeloading: false,
                        status: ""
                    }
                };
            }
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Userseting);


/***/ }),

/***/ 19872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77484);
// reducers/UserStoryView.js

const initialState = {
    StoryViews: {
        data: null,
        loading: false,
        error: null
    }
};
const UserStoryView = (state = initialState, action)=>{
    switch(action.type){
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .VIEW_STORY_POST */ .jLs:
            return {
                ...state.StoryViews,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .VIEW_STORY_POST_SUCCESS */ .SMV:
            return {
                ...state.StoryViews,
                loading: false,
                data: action.payload,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .VIEW_STORY_POST_FAILURE */ .R68:
            return {
                ...state.StoryViews,
                loading: false,
                data: null,
                error: action.payload
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_STORY_VIEWS_DETAILS */ .uqe:
            return {
                ...state.StoryViews,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_STORY_VIEWS_DETAILS_SUCCESS */ .Bcb:
            return {
                ...state.StoryViews,
                loading: false,
                data: action.payload,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_STORY_VIEWS_DETAILS_FAILURE */ .pzG:
            return {
                ...state.StoryViews,
                loading: false,
                data: null,
                error: "error..."
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserStoryView);


/***/ }),

/***/ 31649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jz: () => (/* binding */ loginAsync),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   q$: () => (/* binding */ resetError)
/* harmony export */ });
/* unused harmony export login */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, socket_io_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// store/slices/authSlice.js



// import { useSocket } from '../../ContextProvider/SocketContext';

// Define an async thunk to handle the login request
const loginAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/dashboard/myprofile", async (credentials)=>{
    const deviceToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("fcmToken");
    const UserCredentials = {
        "email": credentials.email,
        "password": credentials.password,
        "deviceToken": deviceToken
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"https://stag.mntech.website/api"}/v1/user/auth/login`, UserCredentials);
    return response.data;
//  return console.log(response.data)
});
// Create the authentication slice
const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
});
const loginAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        status: STATUSES.IDLE,
        error: null,
        handleError: null,
        userId: null,
        ResetPassword: {
            email: "",
            otp: "",
            password: ""
        }
    },
    reducers: {
        resetError (state) {
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginAsync.pending, (state)=>{
            state.status = STATUSES.LOADING;
            state.handleError = null;
            state.error = null; // Clear any previous errors
        }).addCase(loginAsync.fulfilled, (state, action)=>{
            state.status = STATUSES.IDLE;
            state.handleError = null;
            const data = action.payload.data;
            // Store user data in state
            state.user = data.user.name;
            state.userId = data.user.id;
            // Set cookies and local storage data (consider moving this logic outside of the reducer)
            setCookiesAndLocalStorage(data);
            SocketConnect(data);
            // You might want to reset the error state upon successful login
            state.error = null;
        }).addCase(loginAsync.rejected, (state, action)=>{
            state.status = STATUSES.ERROR;
            state.handleError = STATUSES.ERROR;
            // Provide more descriptive error messages based on different rejection reasons
            state.error = action.error.message || "Authentication Error: Please check your email and password and try again.";
        });
    }
});
function SocketConnect(data) {
    // const socket = useSocket();
    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io.connect(`${"https://stag.mntech.website"}`, {
        path: "/api/socket.io",
        query: {
            token: data.tokens.refresh.token
        }
    });
    socket.on("connect", ()=>{
        console.log("Connected to socket");
    });
    socket?.on("onlineUser", (data)=>{
        console.log("Data from socket : ", data);
    });
    socket?.emit("userActive");
}
function setCookiesAndLocalStorage(data) {
    localStorage.setItem("personal", JSON.stringify(data?.user));
    const objectData = {
        userid: data.user.id,
        token: data.tokens.access.token,
        refreshToken: data.tokens.refresh.token,
        user: data.user.email,
        email: data.user.email,
        fullName: `${data.user.firstName} ${data.user.lastName}`,
        tokens: data.tokens
    };
    localStorage.setItem("authdata", JSON.stringify(objectData));
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("userid", data.user.id, {
        secure: true
    });
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("UserProfile", data.user?.appUsesType || "marriage", {
        path: "/",
        secure: "production" === "production",
        sameSite: "Strict"
    });
    localStorage.setItem("token", data.tokens.access.token);
    localStorage.setItem("refoken", data.tokens.refresh.token);
    localStorage.setItem("user", data.user.email, {
        secure: true
    });
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("mobilenumber", data.user.mobileNumber);
    localStorage.setItem("flName", `${data.user.firstName} ${data.user.lastName}`);
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("jwtToken", data.tokens.access.token, {
        secure: true
    });
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("authtoken", data.tokens.refresh.token, {
        secure: true
    });
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("email", data.user.email, {
        secure: true
    });
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("userName", data.user.name, {
        secure: true
    });
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("data", JSON.stringify(data.tokens), {
        secure: true
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginAuth.reducer);
// Export the login action
const { login, resetError } = loginAuth.actions;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aB: () => (/* binding */ formReducer),
/* harmony export */   k4: () => (/* binding */ setUploadUIVisibility)
/* harmony export */ });
/* unused harmony exports ImagePreview, FormSlice, setFormValidation */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_registerUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7354);
/* harmony import */ var _MyProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99419);
/* harmony import */ var _actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55395);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77484);
/* harmony import */ var _utils_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_3__]);
_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DefaultName = (0,_utils_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_4__/* .getNameFromLocalStorage */ .e6)("personal");
const initialState = {
    newShortlists: 0,
    register: {
        email: "",
        name: "",
        otp: "",
        password: ""
    },
    formData: {
        // Initialize your form fields here
        userType: {
            appUsesType: ""
        },
        status: _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.IDLE,
        general: {
            // appUsesType: "",
            creatingProfileFor: "",
            firstName: "",
            lastName: "",
            // motherTongue: "",
            maritalStatus: "",
            gender: "",
            // dateOfBirth: "",
            // birthTime: "",
            religion: "",
            cast: "",
            height: "",
            weight: "",
            // currentcity: "",
            // countryofliving: "",
            writeBoutYourSelf: ""
        },
        address: {
            currentResidenceAddress: "",
            currentCity: "",
            currentCountry: "",
            currentState: ""
        },
        contact: {
            mobileCode: "",
            mobileNumber: "",
            homeCode: "",
            homeMobileNumber: ""
        },
        education: {
            degree: "",
            collage: "",
            city: "",
            state: "",
            country: ""
        },
        professional: {
            jobTitle: "",
            jobType: "",
            companyName: "",
            currentSalary: "",
            workCity: "",
            workCountry: ""
        },
        allhobbies: {
            hobbies: [
                {
                    "category": "Creative",
                    "values": []
                },
                {
                    "category": "Fun",
                    "values": []
                },
                {
                    "category": "Fitness",
                    "values": []
                }
            ]
        },
        hobby: {
            hobbyval: []
        },
        upload: {
            images: [],
            bufferdata: []
        },
        uploadStory: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: ""
        },
        uploadChatImage: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: ""
        },
        uploadChatVideo: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: ""
        },
        UploadChatContent: {
            ContentType: "",
            uploadChatVideo: {
                imagesdata: {},
                bufferdata: "",
                CaptionText: ""
            },
            uploadChatImage: {
                imagesdata: {},
                bufferdata: "",
                CaptionText: ""
            }
        },
        partnerpref: {
            age: {
                min: "",
                max: ""
            },
            height: {
                min: "",
                max: ""
            },
            country: [],
            state: [],
            city: [],
            income: 0,
            creative: [],
            fun: [],
            diet: []
        },
        userProfile: {
            images: [],
            bufferdata: []
        },
        isFormValid: true
    }
};
const ImagePreview = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/imagepreview", async (imgdata, thunkAPI)=>{
    // console.log(imgdata);
    console.log(imgdata);
});
const formReducer = (state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_FORM_DATA":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
            };
        case "REMOVE_UPLOAD_DATA":
            return {
                ...state,
                UploadChatContent: {
                    ContentType: "",
                    uploadChatVideo: {
                        imagesdata: {},
                        bufferdata: "",
                        CaptionText: ""
                    },
                    uploadChatImage: {
                        imagesdata: {},
                        bufferdata: "",
                        CaptionText: ""
                    }
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_5__/* .UPDATE_HOBBIES_VALUES */ .DhE:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    allhobbies: {
                        ...state.formData.allhobbies,
                        hobbies: state.formData.allhobbies.hobbies.map((hobby)=>hobby.category?.toLowerCase() === action.payload.category?.toLowerCase() ? {
                                ...hobby,
                                values: [
                                    ...new Set([
                                        ...hobby.values,
                                        ...action.payload.values
                                    ])
                                ]
                            } : hobby)
                    }
                }
            };
        case _type__WEBPACK_IMPORTED_MODULE_5__/* .UPDATE_PARTNER_PREF */ .XVW:
            const { key, values } = action.payload;
            return {
                ...state,
                formData: {
                    ...state.formData,
                    partnerpref: {
                        ...state.formData.partnerpref,
                        [key]: Array.isArray(state.formData.partnerpref[key]) ? [
                            ...new Set([
                                ...state.formData.partnerpref[key],
                                ...values
                            ])
                        ] : values
                    }
                }
            };
        default:
            return state;
    }
};
const FormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "form",
    initialState,
    reducers: {
        updateFormData: (state, action)=>{
            state.formData = {
                ...state.formData,
                ...action.payload
            };
        },
        setFormValidation: (state, action)=>{
            state.isFormValid = action.payload;
        },
        setUploadUIVisibility (state, action) {
            const { userId, isVisible } = action.payload;
            state[userId] = isVisible;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateGeneralInfo */ .E0.pending, (state)=>{
            // Handle pending state if needed
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateGeneralInfo */ .E0.rejected, (state, action)=>{
            // Handle success state if needed
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateGeneralInfo */ .E0.fulfilled, (state, action)=>{
            // Handle success state if needed
            state.formData.general = {
                ...state.formData.general,
                ...action.payload
            };
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateAddressData */ .i1.pending, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateAddressData */ .i1.rejected, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateAddressData */ .i1.fulfilled, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateEducationData */ .s8.pending, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateEducationData */ .s8.rejected, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateEducationData */ .s8.fulfilled, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateProffessionalData */ .Rf.pending, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateProffessionalData */ .Rf.rejected, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateProffessionalData */ .Rf.fulfilled, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .UploadImages3 */ .Wp.pending, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.LOADING;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .UploadImages3 */ .Wp.rejected, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.ERROR;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .UploadImages3 */ .Wp.fulfilled, (state, action)=>{
            state.formData.status = _MyProfile__WEBPACK_IMPORTED_MODULE_2__/* .STATUSES */ .n$.IDLE;
        });
        builder.addCase(ImagePreview.fulfilled, (state, action)=>{
            // Update the images array with the payload from the action
            state.formData.upload.images = action.payload;
        });
        builder.addCase(_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_3__/* .ADD_NEW_SHORTLIST */ .UH, (state)=>{
            state.newShortlists += 1;
        });
        builder.addCase(_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_3__/* .MARK_SHORTLISTS_AS_SEEN */ .Wx, (state)=>{
            state.newShortlists = 0;
        });
        builder.addCase(_actions_registerUser__WEBPACK_IMPORTED_MODULE_1__/* .updateURLs */ .T8.fulfilled, (state, action)=>{
            state.formData.upload.bufferdata = action.payload;
        });
    }
});
const { setFormValidation, setUploadUIVisibility } = FormSlice.actions;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77484);

const initialState = {
    safetyConsent: null,
    loading: false,
    error: null
};
const SafetyConsentReducer = (state = initialState, action)=>{
    switch(action.type){
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_SAFETY_CONSENT_REQUEST */ .qRu:
            return {
                safetyConsent: null,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_SAFETY_CONSENT_SUCCESS */ .FR3:
            return {
                safetyConsent: action.payload,
                loading: false,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_SAFETY_CONSENT_FAILURE */ .eFm:
            return {
                safetyConsent: null,
                loading: false,
                error: "Something went wrong!"
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .POST_SAFETY_CONSENT_REQUEST */ .rZC:
            return {
                safetyConsent: null,
                loading: true,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .POST_SAFETY_CONSENT_SUCCESS */ .m1s:
            return {
                safetyConsent: action.payload,
                loading: false,
                error: null
            };
        case _type__WEBPACK_IMPORTED_MODULE_0__/* .POST_SAFETY_CONSENT_FAILURE */ .eUi:
            return {
                safetyConsent: null,
                loading: false,
                error: "Something went wrong!"
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafetyConsentReducer);


/***/ }),

/***/ 81922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducers_loginReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31649);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57988);
/* harmony import */ var _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99419);
/* harmony import */ var _reducers_GetingAlluser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11412);
/* harmony import */ var _reducers_GetingUserByIdReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86780);
/* harmony import */ var _reducers_GetShortlistList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49698);
/* harmony import */ var _reducers_NotificationReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29422);
/* harmony import */ var _reducers_UserReducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13039);
/* harmony import */ var _reducers_UploadImagereducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30794);
/* harmony import */ var _reducers_SearchUsersReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73717);
/* harmony import */ var _reducers_UserSettingReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70194);
/* harmony import */ var _reducers_safetyConsentReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2103);
/* harmony import */ var _reducers_Authreducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91168);
/* harmony import */ var _reducers_SpamReportReducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50595);
/* harmony import */ var _reducers_UserStoryView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19872);
/* harmony import */ var _reducers_UpgradeReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75852);
/* harmony import */ var _reducers_SignUpReducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5796);
/* harmony import */ var _matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81174);
/* harmony import */ var _matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96331);
/* harmony import */ var _dating_services_Redux_reducer_register_datingRegisterReducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(18255);
/* harmony import */ var _dating_services_Redux_reducer_home_DatingUsersReducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(30101);
/* harmony import */ var _dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(45755);
/* harmony import */ var _dating_services_Redux_reducer_home_datinguserSlice__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95469);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_loginReducer__WEBPACK_IMPORTED_MODULE_0__, _reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__, _reducers_GetingAlluser__WEBPACK_IMPORTED_MODULE_4__, _reducers_GetingUserByIdReducer__WEBPACK_IMPORTED_MODULE_5__, _reducers_GetShortlistList__WEBPACK_IMPORTED_MODULE_6__, _reducers_NotificationReducer__WEBPACK_IMPORTED_MODULE_7__, _reducers_UserReducers__WEBPACK_IMPORTED_MODULE_8__, _reducers_Authreducer__WEBPACK_IMPORTED_MODULE_13__, _matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_18__, _matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_19__, _dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_22__, _dating_services_Redux_reducer_home_datinguserSlice__WEBPACK_IMPORTED_MODULE_23__]);
([_reducers_loginReducer__WEBPACK_IMPORTED_MODULE_0__, _reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__, _reducers_GetingAlluser__WEBPACK_IMPORTED_MODULE_4__, _reducers_GetingUserByIdReducer__WEBPACK_IMPORTED_MODULE_5__, _reducers_GetShortlistList__WEBPACK_IMPORTED_MODULE_6__, _reducers_NotificationReducer__WEBPACK_IMPORTED_MODULE_7__, _reducers_UserReducers__WEBPACK_IMPORTED_MODULE_8__, _reducers_Authreducer__WEBPACK_IMPORTED_MODULE_13__, _matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_18__, _matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_19__, _dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_22__, _dating_services_Redux_reducer_home_datinguserSlice__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// store/store.js
























// import { datinguserSlice } from './dating-services/Redux-reducer/home/datinguserSlice';
// import { datinguserSlice } fro./dating-services/Redux-reducer/home/datinguserSlicecer';
// import FetchDatingUsersReducer from './dating-services/Redux-reducer/home/FetchDatingUsersReducer';
const datingReducers = {
    user: _dating_services_Redux_reducer_home_MyprofileReducer__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP,
    rangeuser: _dating_services_Redux_reducer_home_datinguserSlice__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP
};
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
    reducer: {
        auth: _reducers_Authreducer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP,
        storyviews: _reducers_UserStoryView__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
        login: _reducers_loginReducer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP,
        uploadreducer: _reducers_UploadImagereducer__WEBPACK_IMPORTED_MODULE_9__/* .imageReducer */ .qb,
        form: _reducers_registerReducer__WEBPACK_IMPORTED_MODULE_2__/* .formReducer */ .aB,
        Spamuser: _reducers_SpamReportReducer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,
        searchform: _reducers_SearchUsersReducer__WEBPACK_IMPORTED_MODULE_10__/* .searchformReducer */ .a,
        myprofile: _reducers_MyProfile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        alluser: _reducers_GetingAlluser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        userById: _reducers_GetingUserByIdReducer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        shortlistdata: _reducers_GetShortlistList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        notificatin: _reducers_NotificationReducer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
        userseting: _reducers_UserSettingReducer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
        usersact: _reducers_UserReducers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        upgradeplans: _reducers_UpgradeReducer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
        chatSafetyConsent: _reducers_safetyConsentReducer__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
        signUp: _reducers_SignUpReducer__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
        getsentrequestdata: _matrimoney_services_slices_UserSentRequestPagination__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP,
        shortlistusers: _matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP,
        datingregister: _dating_services_Redux_reducer_register_datingRegisterReducer__WEBPACK_IMPORTED_MODULE_20__/* .DatingformReducer */ .AB,
        datingusers: _dating_services_Redux_reducer_home_DatingUsersReducer__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
        ...datingReducers
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $20: () => (/* binding */ GET_PARTNERPREFERENCE_DATA_FAILURE),
/* harmony export */   $lw: () => (/* binding */ GET_REQUEST_DATA_SUCCESS),
/* harmony export */   $nZ: () => (/* binding */ GET_SEARCHUSERS_DATA_FAILURE),
/* harmony export */   AGU: () => (/* binding */ RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP),
/* harmony export */   AMR: () => (/* binding */ RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP),
/* harmony export */   AV$: () => (/* binding */ GET_CANCELREQUEST_DATA_FAILURE),
/* harmony export */   AV9: () => (/* binding */ SIGNUP_THIRD_STEP),
/* harmony export */   A_O: () => (/* binding */ RESET_STEPS),
/* harmony export */   AiW: () => (/* binding */ GET_SENTREQUEST_DATA_FAILURE),
/* harmony export */   B4x: () => (/* binding */ GET_SENTREQUEST_DATA),
/* harmony export */   B9X: () => (/* binding */ GET_REQUEST_SUCCESS),
/* harmony export */   Bcb: () => (/* binding */ GET_STORY_VIEWS_DETAILS_SUCCESS),
/* harmony export */   BxE: () => (/* binding */ UPDATE_PROFILE_IMAGE_SUCCESS),
/* harmony export */   C5r: () => (/* binding */ HIDE_MY_PROFILE_SUCCESS),
/* harmony export */   Ca$: () => (/* binding */ GET_MORESUGGESTION_USERS_SUCCESS),
/* harmony export */   Cqb: () => (/* binding */ GET_INFINIT_SCROLL_USER_FAILURE),
/* harmony export */   D4m: () => (/* binding */ SENT_BLOCK_REQUEST),
/* harmony export */   DK9: () => (/* binding */ GET_UPGRADE_PLANS_BY_ID_SUCCESS),
/* harmony export */   DLd: () => (/* binding */ RESET_EMAIL_PASSWORD_SECOND_STEP),
/* harmony export */   DhE: () => (/* binding */ UPDATE_HOBBIES_VALUES),
/* harmony export */   Drg: () => (/* binding */ REJECT_REQUEST_SUCCESS),
/* harmony export */   Ej0: () => (/* binding */ DELETE_IMAGE_FAILURE),
/* harmony export */   FR3: () => (/* binding */ FETCH_SAFETY_CONSENT_SUCCESS),
/* harmony export */   FRr: () => (/* binding */ DELETE_SAVESEARCH_DATA),
/* harmony export */   F_P: () => (/* binding */ RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP),
/* harmony export */   Gei: () => (/* binding */ RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP),
/* harmony export */   Gz2: () => (/* binding */ REQUEST_SUCCESS),
/* harmony export */   H4k: () => (/* binding */ HIDE_MY_PROFILE_CLOSEMODAL),
/* harmony export */   HUJ: () => (/* binding */ GET_RECENT_USERPROFILE_DATA_FAILURE),
/* harmony export */   HUs: () => (/* binding */ HIDE_MY_PROFILE),
/* harmony export */   Hib: () => (/* binding */ UPDATE_EDUCATION_DATA_SUCCESS),
/* harmony export */   INY: () => (/* binding */ UPLOAD_MY_STORY_MODAL),
/* harmony export */   J3l: () => (/* binding */ RESEND_OTP_SUCCESS),
/* harmony export */   J8w: () => (/* binding */ GET_PLANS_BY_NAME_SUCCESS),
/* harmony export */   JHc: () => (/* binding */ CANCEL_FRIEND_REQUEST_SUCCESS),
/* harmony export */   JZ9: () => (/* binding */ GET_RECENT_USERPROFILE_DATA),
/* harmony export */   JwC: () => (/* binding */ CANCEL_FRIEND_REQUEST_FAILURE),
/* harmony export */   K1_: () => (/* binding */ GET_MATCH_SCORE_SUCCESS),
/* harmony export */   KYL: () => (/* binding */ HIDE_MY_PROFILE_FAILURE),
/* harmony export */   Knw: () => (/* binding */ POST_SPAM_REPORT_USER),
/* harmony export */   Kyc: () => (/* binding */ GET_UPGRADE_PLANS),
/* harmony export */   LZm: () => (/* binding */ GET_PRIVACY_QUESTIONS_SUCCESS),
/* harmony export */   M2Y: () => (/* binding */ GET_UPGRADE_PLANS_BY_ID),
/* harmony export */   MBe: () => (/* binding */ GET_PROFESSIONAL_DATA),
/* harmony export */   MHL: () => (/* binding */ DELETE_SAVESEARCH_DATA_SUCCESS),
/* harmony export */   Mm_: () => (/* binding */ SIGNUP_FIRST_STEP),
/* harmony export */   N8s: () => (/* binding */ RESET_PASSWORD_STEP),
/* harmony export */   Nir: () => (/* binding */ SENT_BLOCK_REQUEST_FAILURE),
/* harmony export */   Nr9: () => (/* binding */ RESEND_OTP_FAILURE),
/* harmony export */   Nwi: () => (/* binding */ SEND_REQUEST),
/* harmony export */   O0G: () => (/* binding */ GET_PLANS_BY_NAME_REQUEST),
/* harmony export */   O4t: () => (/* binding */ UPDATE_PROFILE_IMAGE),
/* harmony export */   OjU: () => (/* binding */ SIGNUP_SECOND_STEP_FAILURE),
/* harmony export */   Ood: () => (/* binding */ GET_ALL_STATUS_FAILURE),
/* harmony export */   OqK: () => (/* binding */ GET_RECENT_USERPROFILE_DATA_SUCCESS),
/* harmony export */   Ou8: () => (/* binding */ GET_PARTNERPREFERENCE_DATA),
/* harmony export */   P0B: () => (/* binding */ UPDATE_PROFILE_IMAGE_FAILURE),
/* harmony export */   P9M: () => (/* binding */ GET_SEARCHUSERS_DATA_SUCCESS),
/* harmony export */   PE3: () => (/* binding */ GET_PRIVACY_QUESTIONS),
/* harmony export */   PrS: () => (/* binding */ GET_PARTNERPREFERENCE_DATA_SUCCESS),
/* harmony export */   QbK: () => (/* binding */ SIGNUP_THIRD_STEP_FAILURE),
/* harmony export */   R07: () => (/* binding */ FETCH_SAVESEARCH_DATA_SUCCESS),
/* harmony export */   R68: () => (/* binding */ VIEW_STORY_POST_FAILURE),
/* harmony export */   R9$: () => (/* binding */ RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP),
/* harmony export */   RGw: () => (/* binding */ GET_PRIVACY_QUESTIONS_FAILURE),
/* harmony export */   S1t: () => (/* binding */ DELETE_IMAGE),
/* harmony export */   S47: () => (/* binding */ DELETE_MY_STATUS_SUCCESS),
/* harmony export */   S8K: () => (/* binding */ GET_UPGRADE_PLANS_FAILURE),
/* harmony export */   SLY: () => (/* binding */ ACCEPT_REQUEST_FAILURE),
/* harmony export */   SMV: () => (/* binding */ VIEW_STORY_POST_SUCCESS),
/* harmony export */   Sqh: () => (/* binding */ LIKED_USERS_PROFILE_DATA_SUCCESS),
/* harmony export */   Stt: () => (/* binding */ POST_SPAM_REPORT_USER_SUCCESS),
/* harmony export */   TQg: () => (/* binding */ POST_SAVESEARCH_DATA),
/* harmony export */   TUX: () => (/* binding */ GET_PROFESSIONAL_DATA_SUCCESS),
/* harmony export */   Teg: () => (/* binding */ SIGNUP_SECOND_STEP_SUCCESS),
/* harmony export */   UVm: () => (/* binding */ POST_RECENT_USERPROFILE_FAILURE),
/* harmony export */   Ul$: () => (/* binding */ RESET_EMAIL_PASSWORD_FIRST_STEP),
/* harmony export */   V1q: () => (/* binding */ SIGNUP_THIRD_STEP_SUCCESS),
/* harmony export */   V8p: () => (/* binding */ GET_SENTREQUEST_DATA_SUCCESS),
/* harmony export */   VU1: () => (/* binding */ GET_REQUEST_DATA),
/* harmony export */   WbN: () => (/* binding */ LOGOUT_USER),
/* harmony export */   Wfq: () => (/* binding */ REJECT_REQUEST),
/* harmony export */   XRk: () => (/* binding */ GET_PLANS_BY_NAME_FAILURE),
/* harmony export */   XTX: () => (/* binding */ GET_CANCELREQUEST_DATA_SUCCESS),
/* harmony export */   XVW: () => (/* binding */ UPDATE_PARTNER_PREF),
/* harmony export */   Xvt: () => (/* binding */ UPDATE_PARTNERPREFERENCE_DATA),
/* harmony export */   YYL: () => (/* binding */ DELETE_IMAGE_SUCCESS),
/* harmony export */   Ykm: () => (/* binding */ GET_BLOCK_USERDATA_SUCCESS),
/* harmony export */   Ynn: () => (/* binding */ GET_INFINIT_SCROLL_USER_SUCCESS),
/* harmony export */   Ysm: () => (/* binding */ POST_SPAM_REPORT_USER_FAILURE),
/* harmony export */   ZY3: () => (/* binding */ UPLOAD_MY_STORY_SUCCESS),
/* harmony export */   Zl_: () => (/* binding */ GET_ALL_STATUS),
/* harmony export */   _1: () => (/* binding */ REQUEST_FAILURE),
/* harmony export */   _cx: () => (/* binding */ GET_ACCEPTED_REQUEST_DATA_SUCCESS),
/* harmony export */   _hb: () => (/* binding */ UPDATE_EDUCATION_DATA_FAILURE),
/* harmony export */   aHB: () => (/* binding */ GET_CANCELREQUEST_DATA),
/* harmony export */   bB6: () => (/* binding */ GET_MORESUGGESTION_USERS_REQUEST),
/* harmony export */   bS_: () => (/* binding */ FETCH_SAVESEARCH_DATA_FAILURE),
/* harmony export */   cX8: () => (/* binding */ GET_UPGRADE_PLANS_BY_ID_FAILURE),
/* harmony export */   ccb: () => (/* binding */ POST_RECENT_USERPROFILE),
/* harmony export */   eFm: () => (/* binding */ FETCH_SAFETY_CONSENT_FAILURE),
/* harmony export */   eUi: () => (/* binding */ POST_SAFETY_CONSENT_FAILURE),
/* harmony export */   ecN: () => (/* binding */ GET_PROFESSIONAL_DATA_FAILURE),
/* harmony export */   etF: () => (/* binding */ POST_RECENT_USERPROFILE_SUCCESS),
/* harmony export */   f1h: () => (/* binding */ SENT_BLOCK_REQUEST_SUCCESS),
/* harmony export */   f8q: () => (/* binding */ UPDATE_PARTNERPREFERENCE_DATA_FAILURE),
/* harmony export */   fTE: () => (/* binding */ RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP),
/* harmony export */   fjP: () => (/* binding */ DELETE_STATUS_MODAL),
/* harmony export */   gaY: () => (/* binding */ UPDATE_DISPLAY_NAME_SUCCESS),
/* harmony export */   h09: () => (/* binding */ GET_SEARCHUSERS_DATA),
/* harmony export */   h3w: () => (/* binding */ GET_REQUEST_FAILURE),
/* harmony export */   hcD: () => (/* binding */ UPDATE_PROFESSIONAL_DATA_FAILURE),
/* harmony export */   iDq: () => (/* binding */ UPDATE_EDUCATION_DATA),
/* harmony export */   iFM: () => (/* binding */ FETCH_SAVESEARCH_DATA),
/* harmony export */   ik_: () => (/* binding */ POST_SAVESEARCH_DATA_SUCCESS),
/* harmony export */   jLs: () => (/* binding */ VIEW_STORY_POST),
/* harmony export */   kE3: () => (/* binding */ GET_REQUEST),
/* harmony export */   kfD: () => (/* binding */ ACCEPT_REQUEST),
/* harmony export */   kgb: () => (/* binding */ SIGNUP_FIRST_STEP_SUCCESS),
/* harmony export */   km4: () => (/* binding */ GET_MATCH_SCORE_FAILURE),
/* harmony export */   kr: () => (/* binding */ UPDATE_DISPLAY_NAME),
/* harmony export */   ksR: () => (/* binding */ UPDATE_PARTNERPREFERENCE_DATA_SUCCESS),
/* harmony export */   l12: () => (/* binding */ GET_EDUCATION_DATA),
/* harmony export */   lG: () => (/* binding */ FETCH_GRID_USER_DATA_REQUEST),
/* harmony export */   leq: () => (/* binding */ LIKED_USERS_PROFILE_DATA),
/* harmony export */   lzQ: () => (/* binding */ UPDATE_DISPLAY_NAME_FAILURE),
/* harmony export */   m1s: () => (/* binding */ POST_SAFETY_CONSENT_SUCCESS),
/* harmony export */   mJ6: () => (/* binding */ UPDATE_PROFILE_IMAGE_PROCESS),
/* harmony export */   n_q: () => (/* binding */ REJECT_REQUEST_FAILURE),
/* harmony export */   nrb: () => (/* binding */ GET_MATCH_SCORE),
/* harmony export */   okh: () => (/* binding */ GET_EDUCATION_DATA_SUCCESS),
/* harmony export */   pi7: () => (/* binding */ CANCEL_FRIEND_REQUEST),
/* harmony export */   pq$: () => (/* binding */ GET_UPGRADE_PLANS_SUCCESS),
/* harmony export */   psl: () => (/* binding */ GET_MORESUGGESTION_USERS_FAILURE),
/* harmony export */   pzG: () => (/* binding */ GET_STORY_VIEWS_DETAILS_FAILURE),
/* harmony export */   qOB: () => (/* binding */ SIGNUP_FIRST_STEP_FAILURE),
/* harmony export */   qRu: () => (/* binding */ FETCH_SAFETY_CONSENT_REQUEST),
/* harmony export */   qbO: () => (/* binding */ UPDATE_PROFESSIONAL_DATA_SUCCESS),
/* harmony export */   rJX: () => (/* binding */ UPLOAD_MY_STORY),
/* harmony export */   rZC: () => (/* binding */ POST_SAFETY_CONSENT_REQUEST),
/* harmony export */   ry4: () => (/* binding */ UPDATE_DISPLAY_STATUS),
/* harmony export */   t9z: () => (/* binding */ RESET_EMAIL_PASSWORD_THIRD_STEP),
/* harmony export */   tGh: () => (/* binding */ UPLOAD_MY_STORY_FAILURE),
/* harmony export */   tPz: () => (/* binding */ GET_ALL_STATUS_SUCCESS),
/* harmony export */   tVS: () => (/* binding */ GET_BLOCK_USERDATA_FAILURE),
/* harmony export */   uXC: () => (/* binding */ GET_INFINIT_SCROLL_USER_REQUEST),
/* harmony export */   uYO: () => (/* binding */ GET_ACCEPTED_REQUEST_DATA),
/* harmony export */   uqe: () => (/* binding */ GET_STORY_VIEWS_DETAILS),
/* harmony export */   uv8: () => (/* binding */ ACCEPT_REQUEST_SUCCESS),
/* harmony export */   vrV: () => (/* binding */ GET_BLOCK_USERDATA),
/* harmony export */   w0D: () => (/* binding */ UPDATE_PROFESSIONAL_DATA),
/* harmony export */   w7j: () => (/* binding */ FETCH_GRID_USER_DATA_REQUEST_SUCCESS),
/* harmony export */   wrd: () => (/* binding */ GET_EDUCATION_DATA_FAILURE),
/* harmony export */   xFV: () => (/* binding */ GET_ACCEPTED_REQUEST_DATA_FAILURE),
/* harmony export */   xjj: () => (/* binding */ RESEND_OTP),
/* harmony export */   y_1: () => (/* binding */ DELETE_MY_STATUS),
/* harmony export */   z3E: () => (/* binding */ FETCH_GRID_USER_DATA_REQUEST_FAILURE),
/* harmony export */   zaV: () => (/* binding */ SIGNUP_SECOND_STEP)
/* harmony export */ });
/* unused harmony exports GET_ADDRESS_DATA, GET_ADDRESS_DATA_SUCCESS, GET_ADDRESS_DATA_FAILURE, UPDATE_ADDRESS_DATA, UPDATE_ADDRESS_DATA_SUCCESS, UPDATE_ADDRESS_DATA_FAILURE, LOGOUT_USER_SUCCESS, UPDATE_PRIVACY_QUESTIONS, UPDATE_PRIVACY_QUESTIONS_SUCCESS, UPDATE_PRIVACY_QUESTIONS_FAILURE, LIKED_USERS_PROFILE_DATA_FAILURE, DELETE_MY_STATUS_FAILURE, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, POST_SAVESEARCH_DATA_FAILURE, DELETE_SAVESEARCH_DATA_FAILURE, GET_REQUEST_DATA_FAILURE */
const SEND_REQUEST = "SEND_REQUEST";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILURE = "REQUEST_FAILURE";
const GET_REQUEST = "GET_REQUEST";
const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE";
const ACCEPT_REQUEST = "ACCEPT_REQUEST";
const ACCEPT_REQUEST_SUCCESS = "ACCEPT_REQUEST";
const ACCEPT_REQUEST_FAILURE = "ACCEPT_REQUEST";
const REJECT_REQUEST = "REJECT_REQUEST";
const REJECT_REQUEST_SUCCESS = "REJECT_REQUEST";
const REJECT_REQUEST_FAILURE = "REJECT_REQUEST";
const GET_EDUCATION_DATA = "GET_EDUCATION_DATA";
const GET_EDUCATION_DATA_SUCCESS = "GET_EDUCATION_DATA_SUCCESS";
const GET_EDUCATION_DATA_FAILURE = "GET_EDUCATION_DATA_FAILURE";
const GET_ADDRESS_DATA = "GET_ADDRESS_DATA";
const GET_ADDRESS_DATA_SUCCESS = "GET_ADDRESS_DATA_SUCCESS";
const GET_ADDRESS_DATA_FAILURE = "GET_ADDRESS_DATA_FAILURE";
const GET_PROFESSIONAL_DATA = "GET_PROFESSIONAL_DATA";
const GET_PROFESSIONAL_DATA_SUCCESS = "GET_PROFESSIONAL_DATA_SUCCESS";
const GET_PROFESSIONAL_DATA_FAILURE = "GET_PROFESSIONAL_DATA_FAILURE";
const GET_SENTREQUEST_DATA = "GET_SENTREQUEST_DATA";
const GET_SENTREQUEST_DATA_SUCCESS = "GET_SENTREQUEST_DATA_SUCCESS";
const GET_SENTREQUEST_DATA_FAILURE = "GET_SENTREQUEST_DATA_FAILURE";
const GET_PARTNERPREFERENCE_DATA = "GET_PARTNERPREFERENCE_DATA";
const GET_PARTNERPREFERENCE_DATA_SUCCESS = "GET_PARTNERPREFERENCE_DATA_SUCCESS";
const GET_PARTNERPREFERENCE_DATA_FAILURE = "GET_PARTNERPREFERENCE_DATA_FAILURE";
const GET_ACCEPTED_REQUEST_DATA = "GET_ACCEPTED_REQUEST_DATA";
const GET_ACCEPTED_REQUEST_DATA_SUCCESS = "GET_ACCEPTED_REQUEST_DATA_SUCCESS";
const GET_ACCEPTED_REQUEST_DATA_FAILURE = "GET_ACCEPTED_REQUEST_DATA_FAILURE";
const UPDATE_EDUCATION_DATA = "UPDATE_EDUCATION_DATA";
const UPDATE_EDUCATION_DATA_SUCCESS = "UPDATE_EDUCATION_DATA_SUCCESS";
const UPDATE_EDUCATION_DATA_FAILURE = "UPDATE_EDUCATION_DATA_FAILURE";
const UPDATE_ADDRESS_DATA = "UPDATE_ADDRESS_DATA";
const UPDATE_ADDRESS_DATA_SUCCESS = "UPDATE_ADDRESS_DATA_SUCCESS";
const UPDATE_ADDRESS_DATA_FAILURE = "UPDATE_ADDRESS_DATA_FAILURE";
const UPDATE_PROFESSIONAL_DATA = "UPDATE_PROFESSIONAL_DATA";
const UPDATE_PROFESSIONAL_DATA_SUCCESS = "UPDATE_PROFESSIONAL_DATA_SUCCESS";
const UPDATE_PROFESSIONAL_DATA_FAILURE = "UPDATE_PROFESSIONAL_DATA_FAILURE";
const UPDATE_PARTNERPREFERENCE_DATA = "UPDATE_PARTNERPREFERENCE_DATA";
const UPDATE_PARTNERPREFERENCE_DATA_SUCCESS = "UPDATE_PARTNERPREFERENCE_DATA_SUCCESS";
const UPDATE_PARTNERPREFERENCE_DATA_FAILURE = "UPDATE_PARTNERPREFERENCE_DATA_FAILURE";
const LOGOUT_USER = "LOGOUT_USER";
const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
const GET_BLOCK_USERDATA = "GET_BLOCK_USERDATA";
const GET_BLOCK_USERDATA_SUCCESS = "GET_BLOCK_USERDATA_SUCCESS";
const GET_BLOCK_USERDATA_FAILURE = "GET_BLOCK_USERDATA_FAILURE";
const SENT_BLOCK_REQUEST = "SENT_BLOCK_REQUEST";
const SENT_BLOCK_REQUEST_SUCCESS = "SENT_BLOCK_REQUEST_SUCCESS";
const SENT_BLOCK_REQUEST_FAILURE = "SENT_BLOCK_REQUEST_FAILURE";
const CANCEL_FRIEND_REQUEST = "CANCEL_FRIEND_REQUEST";
const CANCEL_FRIEND_REQUEST_SUCCESS = "CANCEL_FRIEND_REQUEST_SUCCESS";
const CANCEL_FRIEND_REQUEST_FAILURE = "CANCEL_FRIEND_REQUEST_FAILURE";
const UPDATE_PROFILE_IMAGE = "UPDATE_PROFILE_IMAGE";
const UPDATE_PROFILE_IMAGE_SUCCESS = "UPDATE_PROFILE_IMAGE_SUCCESS";
const UPDATE_PROFILE_IMAGE_FAILURE = "UPDATE_PROFILE_IMAGE_FAILURE";
const UPDATE_PROFILE_IMAGE_PROCESS = "UPDATE_PROFILE_IMAGE_PROCESS";
const GET_CANCELREQUEST_DATA = "GET_CANCELREQUEST_DATA";
const GET_CANCELREQUEST_DATA_SUCCESS = "GET_CANCELREQUEST_DATA_SUCCESS";
const GET_CANCELREQUEST_DATA_FAILURE = "GET_CANCELREQUEST_DATA_FAILURE";
const DELETE_IMAGE = "DELETE_IMAGE";
const DELETE_IMAGE_SUCCESS = "DELETE_IMAGE_SUCCESS";
const DELETE_IMAGE_FAILURE = "DELETE_IMAGE_FAILURE";
const POST_RECENT_USERPROFILE = "POST_RECENT_USERPROFILE";
const POST_RECENT_USERPROFILE_SUCCESS = "POST_RECENT_USERPROFILE_SUCCESS";
const POST_RECENT_USERPROFILE_FAILURE = "POST_RECENT_USERPROFILE_FAILURE";
const GET_RECENT_USERPROFILE_DATA = "GET_RECENT_USERPROFILE_DATA";
const GET_RECENT_USERPROFILE_DATA_SUCCESS = "GET_RECENT_USERPROFILE_DATA_SUCCESS";
const GET_RECENT_USERPROFILE_DATA_FAILURE = "GET_RECENT_USERPROFILE_DATA_FAILURE";
const GET_SEARCHUSERS_DATA = "GET_SEARCHUSERS_DATA";
const GET_SEARCHUSERS_DATA_SUCCESS = "GET_SEARCHUSERS_DATA_SUCCESS";
const GET_SEARCHUSERS_DATA_FAILURE = "GET_SEARCHUSERS_DATA_FAILURE";
const HIDE_MY_PROFILE = "HIDE_MY_PROFILE";
const HIDE_MY_PROFILE_SUCCESS = "HIDE_MY_PROFILE_SUCCESS";
const HIDE_MY_PROFILE_FAILURE = "HIDE_MY_PROFILE_FAILURE";
const HIDE_MY_PROFILE_CLOSEMODAL = "HIDE_MY_PROFILE_CLOSEMODAL";
const GET_PRIVACY_QUESTIONS = "GET_PRIVACY_QUESTIONS";
const GET_PRIVACY_QUESTIONS_SUCCESS = "GET_PRIVACY_QUESTIONS_SUCCESS";
const GET_PRIVACY_QUESTIONS_FAILURE = "GET_PRIVACY_QUESTIONS_FAILURE";
const UPDATE_PRIVACY_QUESTIONS = "UPDATE_PRIVACY_QUESTIONS";
const UPDATE_PRIVACY_QUESTIONS_SUCCESS = "UPDATE_PRIVACY_QUESTIONS_SUCCESS";
const UPDATE_PRIVACY_QUESTIONS_FAILURE = "UPDATE_PRIVACY_QUESTIONS_FAILURE";
const FETCH_GRID_USER_DATA_REQUEST = "FETCH_GRID_USER_DATA_REQUEST";
const FETCH_GRID_USER_DATA_REQUEST_SUCCESS = "FETCH_GRID_USER_DATA_REQUEST_SUCCESS";
const FETCH_GRID_USER_DATA_REQUEST_FAILURE = "FETCH_GRID_USER_DATA_REQUEST_FAILURE";
const LIKED_USERS_PROFILE_DATA = "LIKED_USERS_PROFILE_DATA";
const LIKED_USERS_PROFILE_DATA_SUCCESS = "LIKED_USERS_PROFILE_DATA_SUCCESS";
const LIKED_USERS_PROFILE_DATA_FAILURE = "LIKED_USERS_PROFILE_DATA_FAILURE";
const UPLOAD_MY_STORY = "UPLOAD_MY_STORY";
const UPLOAD_MY_STORY_SUCCESS = "UPLOAD_MY_STORY_SUCCESS";
const UPLOAD_MY_STORY_FAILURE = "UPLOAD_MY_STORY_FAILURE";
const UPLOAD_MY_STORY_MODAL = "UPLOAD_MY_STORY_MODAL";
const GET_ALL_STATUS = "GET_ALL_STATUS";
const GET_ALL_STATUS_SUCCESS = "GET_ALL_STATUS_SUCCESS";
const GET_ALL_STATUS_FAILURE = "GET_ALL_STATUS_FAILURE";
const DELETE_MY_STATUS = "DELETE_MY_STATUS";
const DELETE_MY_STATUS_SUCCESS = "DELETE_MY_STATUS_SUCCESS";
const DELETE_MY_STATUS_FAILURE = "DELETE_MY_STATUS_FAILURE";
const DELETE_STATUS_MODAL = "DELETE_STATUS_MODAL";
const FETCH_SAFETY_CONSENT_REQUEST = "FETCH_SAFETY_CONSENT_REQUEST";
const FETCH_SAFETY_CONSENT_SUCCESS = "FETCH_SAFETY_CONSENT_SUCCESS";
const FETCH_SAFETY_CONSENT_FAILURE = "FETCH_SAFETY_CONSENT_FAILURE";
const POST_SAFETY_CONSENT_REQUEST = "POST_SAFETY_CONSENT_REQUEST";
const POST_SAFETY_CONSENT_SUCCESS = "POST_SAFETY_CONSENT_SUCCESS";
const POST_SAFETY_CONSENT_FAILURE = "POST_SAFETY_CONSENT_FAILURE";
const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
const GET_UPGRADE_PLANS = "GET_UPGRADE_PLANS";
const GET_UPGRADE_PLANS_SUCCESS = "GET_UPGRADE_PLANS_SUCCESS";
const GET_UPGRADE_PLANS_FAILURE = "GET_UPGRADE_PLANS_FAILURE";
const GET_UPGRADE_PLANS_BY_ID = "GET_UPGRADE_PLAN_BY_ID";
const GET_UPGRADE_PLANS_BY_ID_SUCCESS = "GET_UPGRADE_PLAN_BY_ID_SUCCESS";
const GET_UPGRADE_PLANS_BY_ID_FAILURE = "GET_UPGRADE_PLAN_BY_ID_FAILURE";
const UPDATE_HOBBIES_VALUES = "UPDATE_HOBBIES_VALUES";
const UPDATE_PARTNER_PREF = "UPDATE_PARTNER_PREF";
const FETCH_SAVESEARCH_DATA = "FETCH_SAVESEARCH_DATA";
const FETCH_SAVESEARCH_DATA_SUCCESS = "FETCH_SAVESEARCH_DATA_SUCCESS";
const FETCH_SAVESEARCH_DATA_FAILURE = "FETCH_SAVESEARCH_DATA_FAILURE";
const POST_SAVESEARCH_DATA = "POST_SAVESEARCH_DATA";
const POST_SAVESEARCH_DATA_SUCCESS = "POST_SAVESEARCH_DATA_SUCCESS";
const POST_SAVESEARCH_DATA_FAILURE = "POST_SAVESEARCH_DATA_FAILURE";
const DELETE_SAVESEARCH_DATA = "DELETE_SAVESEARCH_DATA";
const DELETE_SAVESEARCH_DATA_SUCCESS = "DELETE_SAVESEARCH_DATA_SUCCESS";
const DELETE_SAVESEARCH_DATA_FAILURE = "DELETE_SAVESEARCH_DATA_FAILURE";
const POST_SPAM_REPORT_USER = "POST_SPAM_REPORT_USER";
const POST_SPAM_REPORT_USER_SUCCESS = "POST_SPAM_REPORT_USER_SUCCESS";
const POST_SPAM_REPORT_USER_FAILURE = "POST_SPAM_REPORT_USER_FAILURE";
const VIEW_STORY_POST = "VIEW_STORY_POST";
const VIEW_STORY_POST_SUCCESS = "VIEW_STORY_POST_SUCCESS";
const VIEW_STORY_POST_FAILURE = "VIEW_STORY_POST_FAILURE";
const GET_STORY_VIEWS_DETAILS = "GET_STORY_VIEWS_DETAILS";
const GET_STORY_VIEWS_DETAILS_SUCCESS = "GET_STORY_VIEWS_DETAILS_SUCCESS";
const GET_STORY_VIEWS_DETAILS_FAILURE = "GET_STORY_VIEWS_DETAILS_FAILURE";
const GET_MATCH_SCORE = "GET_MATCH_SCORE";
const GET_MATCH_SCORE_SUCCESS = "GET_MATCH_SCORE_SUCCESS";
const GET_MATCH_SCORE_FAILURE = "GET_MATCH_SCORE_FAILURE";
const UPDATE_DISPLAY_NAME = "UPDATE_DISPLAY_NAME";
const UPDATE_DISPLAY_NAME_SUCCESS = "UPDATE_DISPLAY_NAME_SUCCESS";
const UPDATE_DISPLAY_NAME_FAILURE = "UPDATE_DISPLAY_NAME_FAILURE";
const UPDATE_DISPLAY_STATUS = "UPDATE_DISPLAY_STATUS";
const SIGNUP_FIRST_STEP = "SIGNUP_FIRST_STEP";
const SIGNUP_FIRST_STEP_SUCCESS = "SIGNUP_FIRST_STEP_SUCCESS";
const SIGNUP_FIRST_STEP_FAILURE = "SIGNUP_FIRST_STEP_FAILURE";
const SIGNUP_SECOND_STEP = "SIGNUP_SECOND_STEP";
const SIGNUP_SECOND_STEP_SUCCESS = "SIGNUP_SECOND_STEP_SUCCESS";
const SIGNUP_SECOND_STEP_FAILURE = "SIGNUP_SECOND_STEP_FAILURE";
const SIGNUP_THIRD_STEP = "SIGNUP_THIRD_STEP";
const SIGNUP_THIRD_STEP_SUCCESS = "SIGNUP_THIRD_STEP_SUCCESS";
const SIGNUP_THIRD_STEP_FAILURE = "SIGNUP_THIRD_STEP_FAILURE";
const RESET_STEPS = "RESET_STEPS";
const RESEND_OTP = "RESEND_OTP";
const RESEND_OTP_SUCCESS = "RESEND_OTP_SUCCESS";
const RESEND_OTP_FAILURE = "RESEND_OTP_FAILURE";
const RESET_EMAIL_PASSWORD_FIRST_STEP = "RESET_EMAIL_PASSWORD_FIRST_STEP";
const RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP = "RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP";
const RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP = "RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP";
const RESET_EMAIL_PASSWORD_SECOND_STEP = "RESET_EMAIL_PASSWORD_SECOND_STEP";
const RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP = "RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP";
const RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP = "RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP";
const RESET_EMAIL_PASSWORD_THIRD_STEP = "RESET_EMAIL_PASSWORD_THIRD_STEP";
const RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP = "RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP";
const RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP = "RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP";
const RESET_PASSWORD_STEP = "RESET_PASSWORD_STEP";
const GET_PLANS_BY_NAME_REQUEST = "GET_PLANS_BY_NAME_REQUEST";
const GET_PLANS_BY_NAME_SUCCESS = "GET_PLANS_BY_NAME_SUCCESS";
const GET_PLANS_BY_NAME_FAILURE = "GET_PLANS_BY_NAME_FAILURE";
const GET_INFINIT_SCROLL_USER_REQUEST = "GET_INFINIT_SCROLL_USER_REQUEST";
const GET_INFINIT_SCROLL_USER_SUCCESS = "GET_INFINIT_SCROLL_USER_SUCCESS";
const GET_INFINIT_SCROLL_USER_FAILURE = "GET_INFINIT_SCROLL_USER_FAILURE";
const GET_MORESUGGESTION_USERS_REQUEST = "GET_MORESUGGESTION_USERS_REQUEST";
const GET_MORESUGGESTION_USERS_SUCCESS = "GET_MORESUGGESTION_USERS_SUCCESS";
const GET_MORESUGGESTION_USERS_FAILURE = "GET_MORESUGGESTION_USERS_FAILURE";
const GET_REQUEST_DATA = "GET_REQUEST_DATA";
const GET_REQUEST_DATA_SUCCESS = "GET_REQUEST_DATA_SUCCESS";
const GET_REQUEST_DATA_FAILURE = "GET_REQUEST_DATA_FAILURE";


/***/ }),

/***/ 43946:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
firebase_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const firebaseConfig = {
    apiKey: "AIzaSyBJSX4ki9Vu7gikcoC3fNkcozsImsnvgc0",
    authDomain: "fir-notification-test-2.firebaseapp.com",
    projectId: "fir-notification-test-2",
    storageBucket: "fir-notification-test-2.appspot.com",
    messagingSenderId: "562359368016",
    appId: "1:562359368016:web:62b3757003bbcc7d3ed455",
    measurementId: "G-NRWZ26RX6W"
};
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (firebaseApp)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e6: () => (/* binding */ getNameFromLocalStorage)
/* harmony export */ });
/* unused harmony exports getLocalStorageData, setLocalStorageData, updateLocalStorageData, getEmailFromLocalStorage, updateEmailInLocalStorage, updateNameInLocalStorage */
// utils/localStorage.js
const getLocalStorageData = (key)=>{
    if (false) {}
    return null;
};
const setLocalStorageData = (key, value)=>{
    if (false) {}
};
const updateLocalStorageData = (key, update)=>{
    const data = getLocalStorageData(key);
    if (data) {
        const updatedData = {
            ...data,
            ...update
        };
        setLocalStorageData(key, updatedData);
    }
};
const getEmailFromLocalStorage = (key)=>{
    const data = getLocalStorageData(key);
    return data?.email || null;
};
const updateEmailInLocalStorage = (key, email)=>{
    updateLocalStorageData(key, {
        email
    });
};
const getNameFromLocalStorage = (key)=>{
    const data = getLocalStorageData(key);
    return data?.name || null;
};
const updateNameInLocalStorage = (key, name)=>{
    updateLocalStorageData(key, {
        name
    });
};


/***/ }),

/***/ 1726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33512);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_messaging__WEBPACK_IMPORTED_MODULE_1__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_messaging__WEBPACK_IMPORTED_MODULE_1__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useFcmToken = ()=>{
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [notificationPermissionStatus, setNotificationPermissionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const retrieveToken = async ()=>{
            try {
                if (false) {}
            } catch (error) {
                console.log("An error occurred while retrieving token:", error);
            }
        };
        retrieveToken();
    }, []);
    return {
        fcmToken: token,
        notificationPermissionStatus
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFcmToken);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10245:
/***/ (() => {



/***/ })

};
;