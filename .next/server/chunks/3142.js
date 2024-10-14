"use strict";
exports.id = 3142;
exports.ids = [3142];
exports.modules = {

/***/ 43142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45687);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);






function BlockModal({ isOpen, onClose, data, title }) {
    if (!isOpen) return null;
    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const CurrentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("userid");
    const HandleBlockUser = (e)=>{
        const IsUser = data?.friend?.id === CurrentUser;
        if (title == "Unblock") {
            if (e.target.name == 1) {
                onClose();
                dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__/* .Sentblockrequest */ .IP)({
                    RequestID: data?.id,
                    InitiatorUser: data?.lastInitiatorUser,
                    status: "accepted"
                }));
            } else {
                onClose();
            }
        } else {
            if (e.target.name == 1) {
                onClose();
                dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__/* .Sentblockrequest */ .IP)({
                    RequestID: data?.id,
                    InitiatorUser: IsUser ? data?.user?.id : data?.friend?.id,
                    status: "blocked"
                }));
            } else {
                onClose();
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            open: isOpen,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            className: "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {
                    className: "text-center w-[500px]  mt-[20px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "alert-dialog-description",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: LogoutModalText,
                            children: " Are you sure you want to Block This User?"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-evenly p-[20px] mb-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative right-[-10px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: HandleBlockUser,
                                name: 1,
                                id: "grad-button",
                                className: "rounded-[10px] w-[122px] h-[50px]",
                                children: "Yes"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative left-[-10px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: HandleBlockUser,
                                name: 0,
                                className: "border-[black] border-[1px] rounded-[10px] w-[122px] h-[50px]",
                                children: "No"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockModal);


/***/ })

};
;