"use strict";
exports.id = 9974;
exports.ids = [9974];
exports.modules = {

/***/ 59974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_safetyConsentActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49033);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__]);
_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Safetytips({ UserDetails }) {
    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const TipsText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [Tab, SetTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const SafetyCheck = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.chatSafetyConsent.safetyConsent);
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__/* .UserContext */ .S);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userid");
    const HandleNext = ()=>{
        // SetTab(Tab+1)
        if (Tab >= 2) {
            SetTab(0);
            const data = {
                senderId: currentUser,
                receiverId: userData.id,
                primaryConsent: true
            };
            dispatch((0,_store_actions_safetyConsentActions__WEBPACK_IMPORTED_MODULE_3__/* .UpdateMessageConsentStatus */ .a)(data));
        } else {
            SetTab(Tab + 1);
        }
    };
    const RenderTabContent = ()=>{
        switch(Tab){
            case 0:
                return "Do not share your mobile number, personal details, bank detail or address until trust has been established.";
            case 1:
                return "Avoid meeting at unknown places. If you choose to go, inform a trusted person about your plans.";
            case 2:
                return "Share your live location with your parents for easy tracking during difficult times.";
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full grid place-items-center ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "2xl:w-[333px] 2xl:h-[272px] xl:w-[300px] xl:h-[200px] lg:w-[300px] lg:h-[200px] w-[333px] h-[272px]  rounded-[14px] border-[1px] border-[#E5BDF8] bg-[#FAF0FF]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col items-center space-y-[31px]",
                    id: "Tips-content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-[25px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex space-x-[9px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "15",
                                            height: "16",
                                            viewBox: "0 0 15 16",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M7.66667 0H7V3H7.66667V0Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M3.9328 0.799967L3.35547 1.1333L4.85547 3.7313L5.4328 3.39797L3.9328 0.799967Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M1.15755 3.38678L0.824219 3.96411L3.42222 5.46411L3.75555 4.88678L1.15755 3.38678Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M3 7H0V7.66667H3V7Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M3.39908 9.23278L0.800781 10.7322L1.13398 11.3096L3.73228 9.81018L3.39908 9.23278Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M11.2435 9.20489L10.9102 9.78223L13.5082 11.2822L13.8415 10.7049L11.2435 9.20489Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M14.668 7H11.668V7.66667H14.668V7Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M13.4925 3.35962L10.8945 4.85962L11.2279 5.43695L13.8259 3.93695L13.4925 3.35962Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M10.7064 0.824552L9.20703 3.42285L9.78443 3.75605L11.2838 1.15775L10.7064 0.824552Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M8.1 15.1L7.86667 15.3333H6.8L6.56667 15.1C6.5 15.0333 6.43333 15 6.33333 15H6V15.6667H6.2L6.43333 15.9C6.5 15.9667 6.56667 16 6.66667 16H8C8.1 16 8.16667 15.9667 8.23333 15.9L8.46667 15.6667H8.66667V15H8.33333C8.23333 15 8.16667 15.0333 8.1 15.1Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M9.33203 12.3335H5.33203V13.0002H9.33203V12.3335Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M9.33203 13.6665H5.33203V14.3332H9.33203V13.6665Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M7.33464 3.6665C5.3013 3.6665 3.66797 5.29984 3.66797 7.33317C3.66797 8.33317 4.06797 9.29984 4.8013 9.99984C5.13464 10.3665 5.33464 10.8332 5.33464 11.3332V11.6665H6.0013V11.3332C6.0013 10.6665 5.76797 9.99984 5.26797 9.49984C4.66797 8.93317 4.33464 8.1665 4.33464 7.33317C4.33464 5.6665 5.66797 4.33317 7.33464 4.33317C9.0013 4.33317 10.3346 5.6665 10.3346 7.33317C10.3346 8.1665 10.0013 8.93317 9.4013 9.49984C8.9013 9.99984 8.66797 10.6665 8.66797 11.3332V11.6665H9.33464V11.3332C9.33464 10.8332 9.53464 10.3665 9.86797 9.99984C10.6013 9.29984 11.0013 8.33317 11.0013 7.33317C11.0013 5.29984 9.36797 3.6665 7.33464 3.6665Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M6.99961 11.6668H7.66628V9.46676L8.56628 8.56676L8.09961 8.1001L7.33294 8.86676L6.56628 8.1001L6.09961 8.56676L6.99961 9.46676V11.6668Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M7.66667 5.33333C7.66667 5.13333 7.53333 5 7.33333 5C6.03333 5 5 6.03333 5 7.33333C5 7.53333 5.13333 7.66667 5.33333 7.66667C5.53333 7.66667 5.66667 7.53333 5.66667 7.33333C5.66667 6.4 6.4 5.66667 7.33333 5.66667C7.53333 5.66667 7.66667 5.53333 7.66667 5.33333Z",
                                                    fill: "black"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        style: Title,
                                        children: "Safety Tips"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "w-[279px]",
                                    style: TipsText,
                                    children: RenderTabContent()
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex space-x-[9px]",
                            children: [
                                0,
                                1,
                                2
                            ].map((res)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `rounded-[50%] w-[10px] h-[10px] bg-[#8225AF] ${Tab == res ? "" : "opacity-[0.1]"}`
                                    })
                                });
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `${Tab >= 2 ? "w-[147px]" : "w-[73px]"} h-[34px] bg-[#0F52BA] rounded-[23px] text-[#FFF]`,
                                onClick: HandleNext,
                                children: SafetyCheck?.loading ? "Loading.." : Tab >= 2 ? "I agree, start chat" : "Next"
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Safetytips);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ UpdateMessageConsentStatus),
/* harmony export */   u: () => (/* binding */ SafetyConsentAction)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77484);


const SafetyConsentAction = (ReceiverID)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_SAFETY_CONSENT_REQUEST */ .qRu
        });
        const axios = __webpack_require__(52167);
        // const currentuserId = getCookie("userid")
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/message-consent/get-message-consent/${ReceiverID}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_SAFETY_CONSENT_SUCCESS */ .FR3,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_SAFETY_CONSENT_FAILURE */ .eFm
            });
        });
    };
};
const UpdateMessageConsentStatus = (ReceivedData)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .POST_SAFETY_CONSENT_REQUEST */ .rZC
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let data = JSON.stringify(ReceivedData);
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/message-consent/create-message-consent`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .POST_SAFETY_CONSENT_SUCCESS */ .m1s,
                payload: response.data
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .POST_SAFETY_CONSENT_FAILURE */ .eUi
            });
        });
    };
};


/***/ })

};
;