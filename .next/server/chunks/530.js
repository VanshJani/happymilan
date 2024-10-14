"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 60530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ImageUpload)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82562);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);



const ImageUpload = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("register/ImageUpload", async (theimageData, thunkAPI)=>{
    try {
        thunkAPI.dispatch((0,_reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_1__/* .uploadImagesStart */ .yI)());
        // Iterate through the imageDataArray and make POST requests for each image
        theimageData.images.forEach((imageData)=>{
            const authToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
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
                    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("authtoken");
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
        thunkAPI.dispatch((0,_reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_1__/* .uploadImagesSuccess */ .mt)());
    } catch (error) {
        thunkAPI.dispatch((0,_reducers_ImageSlice__WEBPACK_IMPORTED_MODULE_1__/* .uploadImagesFailure */ .vp)());
    }
});


/***/ })

};
;