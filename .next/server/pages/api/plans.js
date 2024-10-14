"use strict";
(() => {
var exports = {};
exports.id = 8583;
exports.ids = [8583];
exports.modules = {

/***/ 48982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 88439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// pages/api/plans.js


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("authtoken");
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"https://stag.mntech.website/api"}/v1/user/plan/get-plan`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.error("Error fetching plans:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else {
        res.status(405).json({
            error: "Method Not Allowed"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(88439));
module.exports = __webpack_exports__;

})();