"use strict";
exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 60812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_Buttons_UpgradeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88722);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_reducers_Authreducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91168);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_reducers_Authreducer__WEBPACK_IMPORTED_MODULE_7__]);
_store_reducers_Authreducer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import { checkUserPlan } from '../../../../store/slices/authSlice';
function UpgradeValidation(WrappedComponent) {
    const Text = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return (props)=>{
        const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
        const { hasPlan, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (status === "idle") {
                dispatch((0,_store_reducers_Authreducer__WEBPACK_IMPORTED_MODULE_7__/* .checkUserPlan */ .kg)());
            }
        }, [
            dispatch,
            status
        ]);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (status === "succeeded" && !hasPlan) {}
        }, [
            hasPlan,
            router,
            status
        ]);
        if (status === "loading") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Loading..."
            });
        }
        return hasPlan ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
            ...props
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                className: "bg-[#FFF] w-full h-full grid place-items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    className: "grid place-items-center space-y-[10px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            width: 0,
                            height: 0,
                            alt: "lock",
                            src: "/assests/profile/Lock-gradient.svg",
                            loading: "lazy",
                            className: "w-[18.151px] h-[24px]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: Text,
                            children: "Upgrade to send & receive messages."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_UpgradeButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            IconSize: 17,
                            BtnSizeH: 40,
                            BtnSizeW: 110
                        })
                    ]
                })
            })
        });
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpgradeValidation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;