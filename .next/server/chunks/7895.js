"use strict";
exports.id = 7895;
exports.ids = [7895];
exports.modules = {

/***/ 9893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const EmojiPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Conversation\\Chat\\EmojiPicker.js -> " + "emoji-picker-react"
        ]
    },
    ssr: false
});
function EmojiPickerInp({ pickerRef, HandleEmojiSelect, openPicker }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        ref: pickerRef,
        sx: {
            display: openPicker ? "inline" : "none",
            zIndex: 10,
            position: "fixed",
            bottom: 120,
            right: "auto"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmojiPicker, {
            onEmojiClick: HandleEmojiSelect
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiPickerInp);


/***/ }),

/***/ 11552:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _RecordingInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64457);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53941);
/* harmony import */ var _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7354);
/* harmony import */ var _EmojiPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9893);
/* harmony import */ var _UploadContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64858);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99648);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79118);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_7__, _UploadContent__WEBPACK_IMPORTED_MODULE_10__, axios__WEBPACK_IMPORTED_MODULE_11__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_12__, socket_io_client__WEBPACK_IMPORTED_MODULE_13__]);
([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_7__, _UploadContent__WEBPACK_IMPORTED_MODULE_10__, axios__WEBPACK_IMPORTED_MODULE_11__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_12__, socket_io_client__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ChatInput = ({ HandleStopVoice, HanldeVoiceChat, setOpenPicker, StartVoice, socket, message, handleSendMessage, setMessage, updateFormData: updateFormData1, formData })=>{
    const { imagesdata, bufferdata } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.form.formData.uploadChatImage);
    const HanldeRemoveImage = ()=>{
        updateFormData1({
            ...formData,
            uploadChatImage: {
                imagesdata: "",
                bufferdata: "",
                CaptionText: ""
            }
        });
    };
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_7__/* .UserContext */ .S);
    const handleTyping = async (e)=>{
        const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userid");
        const fromUserId = currentUser;
        const toUserId = userData.id;
        const data = {
            from: fromUserId,
            to: toUserId
        };
        socket.emit("typing", data); // Emit the "typing" event to the server
        if (e.key === "Enter") {
            console.log("Hello");
            handleSendMessage();
        }
    };
    const handleStopTyping = ()=>{
        const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userid");
        const fromUserId = currentUser; // Replace with the actual sender user ID
        const toUserId = userData.id; // Replace with the actual recipient user ID
        const data = {
            from: fromUserId,
            to: toUserId
        };
        socket.emit("stopTyping", data);
    // Emit the "typing" event to the server
    };
    const [recordingDuration, setRecordingDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    let fun = true;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let intervalId;
        if (StartVoice) {
            intervalId = setInterval(()=>{
                setRecordingDuration((prevDuration)=>prevDuration + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
            setRecordingDuration(0);
        }
        return ()=>clearInterval(intervalId); // Clean up the interval on component unmount or when startVoice changes
    }, [
        StartVoice
    ]);
    if (StartVoice) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecordingInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
            handleStopVoice: HandleStopVoice,
            handleVoiceChat: HanldeVoiceChat,
            recordingDuration: recordingDuration
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            backgroundColor: "#FFF",
            borderRadius: "10px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            sx: {
                backgroundColor: "#ECECEC",
                borderRadius: "25px"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    sx: {
                        display: bufferdata == "" ? "none" : "",
                        paddingLeft: "10px",
                        borderRadius: "10px 10px 0 0",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        height: "100%",
                        backgroundColor: "#ECECEC"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            onClick: HanldeRemoveImage,
                            className: "z-[1] cursor-pointer absolute ml-[90px] mt-[10px]",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "12",
                                    fill: "black",
                                    "fill-opacity": "0.4"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M14.1111 10.3333V15.8889H9.66667V10.3333H14.1111ZM13.2778 7H10.5L9.94444 7.55556H8V8.66667H15.7778V7.55556H13.8333L13.2778 7ZM15.2222 9.22222H8.55556V15.8889C8.55556 16.5 9.05556 17 9.66667 17H14.1111C14.7222 17 15.2222 16.5 15.2222 15.8889V9.22222Z",
                                    fill: "white"
                                })
                            ]
                        }),
                        imagesdata?.contentType?.startsWith("video") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                width: 100,
                                height: 100,
                                controls: true,
                                style: {
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    height: "120px",
                                    width: "120px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: bufferdata,
                                        type: imagesdata?.contentType
                                    }),
                                    "Your browser does not support the video tag."
                                ]
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                loading: "lazy",
                                width: 100,
                                height: 100,
                                alt: "user-image",
                                style: {
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    height: "120px",
                                    width: "120px"
                                },
                                src: bufferdata
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    style: {
                        border: "1px solid #DADADA",
                        paddingLeft: "50px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        borderRadius: "25px",
                        backgroundColor: "#FFF"
                    },
                    onKeyDown: handleTyping,
                    onBlur: handleStopTyping,
                    value: message,
                    fullWidth: true,
                    onChange: (e)=>setMessage(e.target.value),
                    placeholder: "Write a message...",
                    variant: "filled"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "absolute bottom-[70px] ml-[24px]",
                    onClick: ()=>{
                        setOpenPicker((prev)=>!prev);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "ml-[-10px]",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M13.6803 8.46153C14.0259 8.46153 14.318 8.34056 14.5566 8.09861C14.7952 7.85665 14.9145 7.56284 14.9145 7.21719C14.9145 6.87155 14.7936 6.57942 14.5516 6.34081C14.3096 6.10221 14.0158 5.98292 13.6702 5.98292C13.3245 5.98292 13.0324 6.10389 12.7938 6.34583C12.5552 6.5878 12.4359 6.8816 12.4359 7.22725C12.4359 7.5729 12.5569 7.86503 12.7988 8.10364C13.0408 8.34223 13.3346 8.46153 13.6803 8.46153ZM6.32981 8.46153C6.67545 8.46153 6.96758 8.34056 7.20619 8.09861C7.44481 7.85665 7.56411 7.56284 7.56411 7.21719C7.56411 6.87155 7.44313 6.57942 7.20117 6.34081C6.9592 6.10221 6.6654 5.98292 6.31975 5.98292C5.9741 5.98292 5.68197 6.10389 5.44336 6.34583C5.20477 6.5878 5.08547 6.8816 5.08547 7.22725C5.08547 7.5729 5.20644 7.86503 5.44839 8.10364C5.69035 8.34223 5.98416 8.46153 6.32981 8.46153ZM10 15.4274C11.0598 15.4274 12.036 15.135 12.9284 14.5502C13.8209 13.9655 14.4915 13.1895 14.9402 12.2222H13.8333C13.4259 12.9074 12.8843 13.4491 12.2083 13.8472C11.5324 14.2454 10.7963 14.4444 10 14.4444C9.2037 14.4444 8.46759 14.2454 7.79167 13.8472C7.11574 13.4491 6.57407 12.9074 6.16667 12.2222H5.05983C5.50854 13.1895 6.17912 13.9655 7.07158 14.5502C7.96403 15.135 8.94017 15.4274 10 15.4274ZM10.0037 20C8.62089 20 7.3208 19.7376 6.10344 19.2128C4.88609 18.688 3.82716 17.9757 2.92664 17.0761C2.02614 16.1764 1.31324 15.1185 0.787944 13.9023C0.262648 12.6861 0 11.3865 0 10.0037C0 8.62089 0.262398 7.3208 0.787195 6.10344C1.31201 4.88609 2.02425 3.82716 2.92392 2.92664C3.82358 2.02614 4.88152 1.31324 6.09772 0.787945C7.31394 0.262649 8.61346 0 9.99628 0C11.3791 0 12.6792 0.262398 13.8966 0.787194C15.1139 1.31201 16.1728 2.02425 17.0734 2.92392C17.9739 3.82358 18.6868 4.88152 19.2121 6.09772C19.7374 7.31394 20 8.61346 20 9.99628C20 11.3791 19.7376 12.6792 19.2128 13.8966C18.688 15.1139 17.9757 16.1728 17.0761 17.0734C16.1764 17.9739 15.1185 18.6868 13.9023 19.2121C12.6861 19.7374 11.3865 20 10.0037 20ZM10 18.8889C12.4815 18.8889 14.5833 18.0278 16.3056 16.3056C18.0278 14.5833 18.8889 12.4815 18.8889 10C18.8889 7.51852 18.0278 5.41667 16.3056 3.69444C14.5833 1.97222 12.4815 1.11111 10 1.11111C7.51852 1.11111 5.41667 1.97222 3.69444 3.69444C1.97222 5.41667 1.11111 7.51852 1.11111 10C1.11111 12.4815 1.97222 14.5833 3.69444 16.3056C5.41667 18.0278 7.51852 18.8889 10 18.8889Z",
                            fill: "black"
                        })
                    })
                })
            ]
        })
    });
};
const ChatFooter = ({ formData, updateFormData: updateFormData1 })=>{
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [openPicker, setOpenPicker] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [startVoice, setStartVoice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const recorderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const audioChunks = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
    const currentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userid");
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_7__/* .UserContext */ .S);
    const { imagesdata, bufferdata } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.form.formData.uploadChatImage);
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_12__/* .useSocket */ .s)();
    const pickerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleClickOutside = (event)=>{
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setOpenPicker(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setMessage("");
    }, [
        userData,
        updateUser
    ]);
    const handleSendMessage = ()=>{
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("authtoken");
        const newSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_13__.io.connect(`${"https://stag.mntech.website"}`, {
            path: "/api/socket.io",
            query: {
                token: token
            }
        });
        newSocket.on("connect", ()=>{
            console.log("Connected to socket");
        });
        if (!currentUserID) {
            console.error("User not logged in");
            return;
        }
        if (bufferdata) {
            console.log("Sending image or video");
            updateFormData1({
                ...formData,
                uploadChatImage: {
                    ...formData.uploadChatImage,
                    CaptionText: message
                }
            });
            const chatContent = {
                from: currentUserID,
                to: userData.id,
                message: message || "",
                fileName: imagesdata.key,
                type: imagesdata?.contentType.startsWith("video") ? "video" : "image"
            };
            const chatContentObj = {
                from: currentUserID,
                to: userData.id,
                fileName: imagesdata.key,
                type: imagesdata?.contentType.startsWith("video") ? "video" : "image"
            };
            newSocket.emit("uploadContent", message ? chatContent : chatContentObj);
            const handleSocketMessage = (data)=>{
                console.log("Socket message received");
                if (data.data.message !== "messages received") {
                    fetch(imagesdata.data).then((response)=>response.blob()).then((blob)=>{
                        const config = {
                            method: "put",
                            maxBodyLength: Infinity,
                            url: data.data?.result.url,
                            headers: {
                                "Content-Type": imagesdata?.contentType,
                                "x-amz-acl": "public-read"
                            },
                            data: blob
                        };
                        axios__WEBPACK_IMPORTED_MODULE_11__["default"].request(config).then(()=>{
                            const chatContent2 = {
                                from: currentUserID,
                                to: userData?.id,
                                message: message || "",
                                fileName: imagesdata?.key,
                                type: imagesdata?.contentType.startsWith("video") ? "video" : "image"
                            };
                            newSocket.emit("sendMessage", chatContent2);
                            resetFormData();
                            setMessage("");
                        }).catch((error)=>{
                            console.error(error);
                            resetFormData();
                            setMessage("");
                        });
                    }).catch((error)=>{
                        console.error("Error fetching blob:", error);
                        resetFormData();
                        setMessage("");
                    });
                }
            };
            newSocket.off("message", handleSocketMessage);
            newSocket.on("message", handleSocketMessage);
        } else if (message.trim() !== "") {
            console.log("Sending text message");
            const objmsg = {
                to: userData?.id,
                from: currentUserID,
                message: message
            };
            socket.emit("sendMessage", objmsg);
            setMessage("");
        }
    };
    const resetFormData = ()=>{
        updateFormData1({
            uploadChatImage: {
                imagesdata: "",
                bufferdata: "",
                CaptionText: ""
            }
        });
    };
    const handleEmojiSelect = (emoji)=>{
        setMessage((prevMessage)=>prevMessage + emoji.emoji);
    };
    const handleVoiceChat = async ()=>{
        if (startVoice) {
            handleStopVoice();
        } else {
            setStartVoice(true);
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                recorderRef.current = new MediaRecorder(stream);
                recorderRef.current.ondataavailable = (e)=>audioChunks.current.push(e.data);
                recorderRef.current.start();
            } catch (err) {
                console.error("Error accessing microphone:", err);
                setStartVoice(false);
            }
        }
    };
    const uploadAndEmitAudioBlob = ()=>{
        if (audioChunks.current.length === 0) return;
        console.log("Audio-chunk", audioChunks.current);
        const blob = new Blob(audioChunks.current, {
            type: "audio/webm"
        });
        const chatContent = {
            "from": currentUserID,
            "to": userData.id,
            "fileName": "audio.webm",
            "type": "audio"
        };
        socket.emit("uploadContent", chatContent);
        socket.on("message", (data)=>{
            if (!data.data?.result?.url) {
                console.error("Missing upload URL in response!");
                return;
            }
            const uploadUrl = data.data.result.url;
            const config = {
                method: "put",
                maxBodyLength: Infinity,
                url: uploadUrl,
                headers: {
                    "Content-Type": blob.type,
                    "x-amz-acl": "public-read"
                },
                data: blob
            };
            axios__WEBPACK_IMPORTED_MODULE_11__["default"].request(config).then(()=>{
                const chatContent2 = {
                    "from": currentUserID,
                    "to": userData.id,
                    "message": message,
                    "fileName": "audio",
                    "type": blob.type
                };
                socket.emit("sendMessage", chatContent2);
                setMessage("");
                audioChunks.current = [];
            }).catch((error)=>{
                console.error("Error uploading blob:", error);
            });
        });
    };
    const handleStopVoice = ()=>{
        if (recorderRef.current && recorderRef.current.state === "recording") {
            recorderRef.current.stop();
            recorderRef.current.onstop = ()=>{
                uploadAndEmitAudioBlob();
                recorderRef.current.stream.getTracks().forEach((track)=>track.stop());
                recorderRef.current = null;
                audioChunks.current = [];
                setStartVoice(false);
            };
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return ()=>{
            if (recorderRef.current) {
                recorderRef.current.stream.getTracks().forEach((track)=>track.stop());
                recorderRef.current = null;
            }
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        p: 2,
        sx: {
            width: "100%",
            backgroundColor: "#FFF"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                alignItems: "center",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        sx: {
                            background: "none",
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EmojiPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                pickerRef: pickerRef,
                                HandleEmojiSelect: handleEmojiSelect,
                                openPicker: openPicker
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatInput, {
                                HandleStopVoice: handleStopVoice,
                                HanldeVoiceChat: handleVoiceChat,
                                formData: formData,
                                updateFormData: updateFormData1,
                                socket: socket,
                                StartVoice: startVoice,
                                handleSendMessage: handleSendMessage,
                                setMessage: setMessage,
                                message: message,
                                setOpenPicker: setOpenPicker
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            height: 48,
                            width: 48,
                            borderRadius: 1.5
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            sx: {
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                onClick: startVoice ? handleStopVoice : handleSendMessage,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    loading: "lazy",
                                    alt: "send-message",
                                    width: 29,
                                    height: 24,
                                    src: "/assests/chat/Send-Icon.svg"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "chat-input-list-items",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-[20px] ml-[10px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex space-x-[30px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "23",
                                        height: "20",
                                        viewBox: "0 0 23 20",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M11.2464 15.8221C12.5244 15.8221 13.5978 15.3878 14.4663 14.5192C15.3349 13.6506 15.7693 12.5773 15.7693 11.2993C15.7693 10.0212 15.3349 8.94912 14.4663 8.08294C13.5978 7.21675 12.5244 6.78366 11.2464 6.78366C9.96834 6.78366 8.89622 7.21675 8.03003 8.08294C7.16384 8.94912 6.73075 10.0212 6.73075 11.2993C6.73075 12.5773 7.16384 13.6506 8.03003 14.5192C8.89622 15.3878 9.96834 15.8221 11.2464 15.8221ZM11.2464 14.8606C10.2328 14.8606 9.38702 14.5204 8.70912 13.8402C8.03125 13.1599 7.69231 12.3129 7.69231 11.2993C7.69231 10.2857 8.03125 9.43991 8.70912 8.76203C9.38702 8.08414 10.2328 7.74519 11.2464 7.74519C12.26 7.74519 13.107 8.08414 13.7873 8.76203C14.4675 9.43991 14.8077 10.2857 14.8077 11.2993C14.8077 12.3129 14.4675 13.1599 13.7873 13.8402C13.107 14.5204 12.26 14.8606 11.2464 14.8606ZM1.73075 20C1.2504 20 0.841844 19.8316 0.505094 19.4949C0.168364 19.1582 0 18.7496 0 18.2692V4.32931C0 3.85015 0.168364 3.4419 0.505094 3.10456C0.841844 2.76723 1.2504 2.59856 1.73075 2.59856H5.72356L8.02884 0H14.4712L16.7764 2.59856H20.7693C21.2484 2.59856 21.6567 2.76723 21.994 3.10456C22.3313 3.4419 22.5 3.85015 22.5 4.32931V18.2692C22.5 18.7496 22.3313 19.1582 21.994 19.4949C21.6567 19.8316 21.2484 20 20.7693 20H1.73075ZM20.7693 19.0385C20.9936 19.0385 21.1779 18.9664 21.3221 18.8221C21.4664 18.6779 21.5385 18.4936 21.5385 18.2692V4.32931C21.5385 4.12098 21.4664 3.9407 21.3221 3.78847C21.1779 3.63622 20.9936 3.56009 20.7693 3.56009H16.3341L14.0288 0.961531H8.47116L6.16588 3.56009H1.73075C1.5064 3.56009 1.3221 3.63622 1.17788 3.78847C1.03365 3.9407 0.961531 4.12098 0.961531 4.32931V18.2692C0.961531 18.4936 1.03365 18.6779 1.17788 18.8221C1.3221 18.9664 1.5064 19.0385 1.73075 19.0385H20.7693Z",
                                            fill: "black"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    updateFormData: updateFormData1,
                                    formData: formData
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "cursor-pointer",
                                    onClick: handleVoiceChat,
                                    children: startVoice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "14",
                                        height: "20",
                                        viewBox: "0 0 14 20",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M7 11.4286C6.34188 11.4286 5.78847 11.2088 5.33975 10.7692C4.89103 10.3297 4.66667 9.78754 4.66667 9.14286V2.28571C4.66667 1.64103 4.89103 1.09891 5.33975 0.659344C5.78847 0.219782 6.34188 0 7 0C7.65812 0 8.21153 0.219782 8.66025 0.659344C9.10897 1.09891 9.33333 1.64103 9.33333 2.28571V9.14286C9.33333 9.78754 9.10897 10.3297 8.66025 10.7692C8.21153 11.2088 7.65812 11.4286 7 11.4286ZM6.41667 20V15.9802C4.58889 15.8161 3.0625 15.0843 1.8375 13.7846C0.6125 12.485 0 10.9377 0 9.14286H1.16667C1.16667 10.7238 1.73542 12.0714 2.87292 13.1857C4.01042 14.3 5.38611 14.8571 7 14.8571C8.61389 14.8571 9.98958 14.3 11.1271 13.1857C12.2646 12.0714 12.8333 10.7238 12.8333 9.14286H14C14 10.9377 13.3875 12.485 12.1625 13.7846C10.9375 15.0843 9.41111 15.8161 7.58333 15.9802V20H6.41667ZM7 10.2857C7.33056 10.2857 7.60764 10.1762 7.83125 9.95714C8.05486 9.7381 8.16667 9.46667 8.16667 9.14286V2.28571C8.16667 1.9619 8.05486 1.69048 7.83125 1.47143C7.60764 1.25238 7.33056 1.14286 7 1.14286C6.66944 1.14286 6.39236 1.25238 6.16875 1.47143C5.94514 1.69048 5.83333 1.9619 5.83333 2.28571V9.14286C5.83333 9.46667 5.94514 9.7381 6.16875 9.95714C6.39236 10.1762 6.66944 10.2857 7 10.2857Z",
                                                fill: "url(#paint0_linear_607_216)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                                    id: "paint0_linear_607_216",
                                                    x1: "4.01326e-07",
                                                    y1: "-8.5",
                                                    x2: "14",
                                                    y2: "23",
                                                    gradientUnits: "userSpaceOnUse",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                            stopColor: "#0F52BA"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                            offset: "1",
                                                            stopColor: "#8225AF"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "14",
                                        height: "20",
                                        viewBox: "0 0 14 20",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M7 11.4286C6.34188 11.4286 5.78847 11.2088 5.33975 10.7692C4.89103 10.3297 4.66667 9.78754 4.66667 9.14286V2.28571C4.66667 1.64103 4.89103 1.09891 5.33975 0.659344C5.78847 0.219782 6.34188 0 7 0C7.65812 0 8.21153 0.219782 8.66025 0.659344C9.10897 1.09891 9.33333 1.64103 9.33333 2.28571V9.14286C9.33333 9.78754 9.10897 10.3297 8.66025 10.7692C8.21153 11.2088 7.65812 11.4286 7 11.4286ZM6.41667 20V15.9802C4.58889 15.8161 3.0625 15.0843 1.8375 13.7846C0.6125 12.485 0 10.9377 0 9.14286H1.16667C1.16667 10.7238 1.73542 12.0714 2.87292 13.1857C4.01042 14.3 5.38611 14.8571 7 14.8571C8.61389 14.8571 9.98958 14.3 11.1271 13.1857C12.2646 12.0714 12.8333 10.7238 12.8333 9.14286H14C14 10.9377 13.3875 12.485 12.1625 13.7846C10.9375 15.0843 9.41111 15.8161 7.58333 15.9802V20H6.41667ZM7 10.2857C7.33056 10.2857 7.60764 10.1762 7.83125 9.95714C8.05486 9.7381 8.16667 9.46667 8.16667 9.14286V2.28571C8.16667 1.9619 8.05486 1.69048 7.83125 1.47143C7.60764 1.25238 7.33056 1.14286 7 1.14286C6.66944 1.14286 6.39236 1.25238 6.16875 1.47143C5.94514 1.69048 5.83333 1.9619 5.83333 2.28571V9.14286C5.83333 9.46667 5.94514 9.7381 6.16875 9.95714C6.39236 10.1762 6.66944 10.2857 7 10.2857Z",
                                            fill: "black"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)((state)=>({
        formData: state.form.formData
    }), {
    updateFormData: _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_8__/* .updateFormData */ .Zv
})(ChatFooter));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;