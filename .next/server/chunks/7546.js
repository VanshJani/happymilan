"use strict";
exports.id = 7546;
exports.ids = [7546];
exports.modules = {

/***/ 47546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6576);
/* harmony import */ var _UIChatFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11552);
/* harmony import */ var _UIChatmessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21827);
/* harmony import */ var _security_Chat_Safetytips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59974);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_safetyConsentActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49033);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53941);
/* harmony import */ var _security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatHeader__WEBPACK_IMPORTED_MODULE_3__, _UIChatFooter__WEBPACK_IMPORTED_MODULE_4__, _UIChatmessage__WEBPACK_IMPORTED_MODULE_5__, _security_Chat_Safetytips__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__, _security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_10__]);
([_ChatHeader__WEBPACK_IMPORTED_MODULE_3__, _UIChatFooter__WEBPACK_IMPORTED_MODULE_4__, _UIChatmessage__WEBPACK_IMPORTED_MODULE_5__, _security_Chat_Safetytips__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__, _security_Chat_withUpgradeValidation__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// import withUpgradeValidation from '../../../validateFun/Chat/withUpgradeValidation';
function UIConversation({ UserDetails }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const SafetyCheck = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.chatSafetyConsent.safetyConsent);
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_9__/* .UserContext */ .S);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_actions_safetyConsentActions__WEBPACK_IMPORTED_MODULE_8__/* .SafetyConsentAction */ .u)(userData.id));
    }, []);
    // let isUpgrade = true;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            height: "100%",
            maxHeight: "100vh",
            width: "auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                SafetyCheck?.data && SafetyCheck.data.length > 0 && SafetyCheck.data.some((item)=>!item.primaryConsent) || SafetyCheck?.data.length === 0 ? // Render safety tips if any item in the array has primaryConsent as false or if the array is empty
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: "bg-[#FFF] w-full h-full grid place-items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_security_Chat_Safetytips__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        UserDetails: UserDetails
                    })
                }) : // Render chat messages if all items in the array have primaryConsent as true
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    id: "sidebarScroll",
                    className: "bg-[#FFF] scrollbar",
                    width: "100%",
                    sx: {
                        flexGrow: 1,
                        height: "100vh",
                        overflowY: "scroll"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UIChatmessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        menu: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UIChatFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            ]
        })
    });
}
// export default UIConversation;
// export default UIConversation;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIConversation); // export default UpgradeValidation(UIConversation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;