"use strict";
exports.id = 8490;
exports.ids = [8490];
exports.modules = {

/***/ 78490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sample_components_ImageCropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sample_components_ImageCropper__WEBPACK_IMPORTED_MODULE_2__]);
_sample_components_ImageCropper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ProfileModal = ({ handleClose, handleOpen, setOpenProfileModal, openProfileModal, setModalOpen, updateAvatar, closeModal })=>{
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "45%",
        height: "574px",
        outline: "none",
        bgcolor: "background.paper",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        open: openProfileModal,
        onClose: handleClose,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: style,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sample_components_ImageCropper__WEBPACK_IMPORTED_MODULE_2__["default"], {
                updateAvatar: updateAvatar,
                closeModal: closeModal,
                setModalOpen: setModalOpen,
                handleClose: handleClose
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;