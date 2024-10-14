"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 16507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        strategy: "jwt"
    },
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn ({ account, profile }) {
            // if (account.provider === "google") {
            //   // After Google sign-in, send the Google account token to your backend to get your JWT
            //   const response = await fetch(`${process.env.BACKEND_API_URL}/login/google`, {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //       accessToken: account.access_token, // Google access token
            //       idToken: account.id_token, // Google ID token
            //     })
            //   });
            //   const data = await response.json();
            //   // If the backend returns a JWT, store it in the session
            //   if (data?.token) {
            //     account.token = data.token;
            //     return true;
            //   }
            //   return false;
            // }
            return true;
        },
        async jwt ({ token, account }) {
            // Attach the custom JWT from your backend to the token
            if (account?.token) {
                token.jwt = account.token;
            }
            return token;
        },
        async session ({ session, token }) {
            // Attach the custom JWT to the session, so you can use it in the frontend
            session.jwt = token.jwt;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(16507));
module.exports = __webpack_exports__;

})();