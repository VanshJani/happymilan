"use strict";
exports.id = 1827;
exports.ids = [1827];
exports.modules = {

/***/ 23771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q8: () => (/* binding */ ReplyMsg),
/* harmony export */   RL: () => (/* binding */ DocMsg),
/* harmony export */   V5: () => (/* binding */ LinkMsg),
/* harmony export */   Xj: () => (/* binding */ VideoMsg),
/* harmony export */   r3: () => (/* binding */ AudioMessage),
/* harmony export */   w8: () => (/* binding */ TextMsg),
/* harmony export */   y1: () => (/* binding */ MediaMsg)
/* harmony export */ });
/* unused harmony exports Safetytips, TypingMessage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13332);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53941);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79118);
/* harmony import */ var _utils_helpers_GetMessageTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__]);
([_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const messageText = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
};
const Message_options = [
    {
        title: "Reply"
    },
    // {
    //     title: "React to message",
    // },
    // {
    //     title: "Forward message",
    // },
    // {
    //     title: "Star message",
    // },
    {
        title: "Report"
    },
    {
        title: "Delete Message"
    }
];
const DocMsg = ({ el, menu })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        justifyContent: el.incoming ? "start" : "end",
        children: el.incoming ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    alt: "img",
                    width: 40,
                    height: 40,
                    className: "mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]",
                    src: "/assests/dashboard/request/req-6.svg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 1.5,
                    sx: {
                        backgroundColor: el.incoming ? "#EAEAEA" : "#EAEAEA",
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                p: 2,
                                spacing: 3,
                                direction: "row",
                                alignItems: "center",
                                sx: {
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 1
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: messageText,
                                        variant: "caption",
                                        children: "Abstract.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            "stroke-width": "2",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            className: "lucide lucide-arrow-down-to-line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M12 17V3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "m6 11 6 6 6-6"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M19 21H5"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                style: messageText,
                                variant: "body2",
                                sx: {
                                    color: el.incoming ? theme.palette.text : "#fff"
                                },
                                children: el.message
                            })
                        ]
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 1.5,
                    sx: {
                        backgroundColor: el.incoming ? theme.palette.background.default : "#EAEAEA",
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                p: 2,
                                spacing: 3,
                                direction: "row",
                                alignItems: "center",
                                sx: {
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 1
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: messageText,
                                        variant: "caption",
                                        children: "Abstract.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Download Icon"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                style: messageText,
                                variant: "body2",
                                sx: {
                                    color: el.incoming ? theme.palette.text : "#fff"
                                },
                                children: el.message
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    alt: "img",
                    width: 40,
                    height: 40,
                    className: " w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]",
                    src: "/assests/dashboard/request/req-6.svg"
                })
            ]
        })
    });
};
const LinkMsg = ({ el, menu })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        justifyContent: el.incoming ? "start" : "end",
        children: el.incoming ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    alt: "img",
                    width: 40,
                    height: 40,
                    className: "mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]",
                    src: "/assests/dashboard/request/req-6.svg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 1.5,
                    sx: {
                        backgroundColor: el.incoming ? theme.palette.background.default : "#EAEAEA",
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            p: 2,
                            spacing: 3,
                            alignItems: "start",
                            sx: {
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: el.preview,
                                    alt: el.message,
                                    style: {
                                        maxHeight: 210,
                                        borderRadius: "10px"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            style: messageText,
                                            variant: "subtitle2",
                                            children: "Creating Chat App"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            style: messageText,
                                            variant: "subtitle2",
                                            sx: {
                                                color: theme.palette.primary.main
                                            },
                                            component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
                                            to: "//https://www.youtube.com",
                                            children: "www.youtube.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    style: messageText,
                                    variant: "body2",
                                    color: el.incoming ? theme.palette.text : "#fff",
                                    children: el.message
                                })
                            ]
                        })
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 1.5,
                    sx: {
                        backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            p: 2,
                            spacing: 3,
                            alignItems: "start",
                            sx: {
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: el.preview,
                                    alt: el.message,
                                    style: {
                                        maxHeight: 210,
                                        borderRadius: "10px"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            style: messageText,
                                            variant: "subtitle2",
                                            children: "Creating Chat App"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            style: messageText,
                                            variant: "subtitle2",
                                            sx: {
                                                color: theme.palette.primary.main
                                            },
                                            component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
                                            to: "//https://www.youtube.com",
                                            children: "www.youtube.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    style: messageText,
                                    variant: "body2",
                                    color: el.incoming ? theme.palette.text : "#fff",
                                    children: el.message
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    alt: "img",
                    width: 40,
                    height: 40,
                    className: "mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]",
                    src: "/assests/dashboard/request/req-6.svg"
                })
            ]
        })
    });
};
const ReplyMsg = ({ el, menu })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        justifyContent: el.incoming ? "start" : "end",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            p: 1.5,
            sx: {
                backgroundColor: el.incoming ? theme.palette.background.default : "#EAEAEA",
                borderRadius: 1.5,
                width: "max-content"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        p: 2,
                        direction: "column",
                        spacing: 3,
                        alignItems: "center",
                        sx: {
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            style: messageText,
                            variant: "body2",
                            color: theme.palette.text,
                            children: el.message
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        style: messageText,
                        variant: "body2",
                        color: el.incoming ? theme.palette.text : "#000",
                        children: el.reply
                    })
                ]
            })
        })
    });
};
const MediaMsg = ({ menu, userMessage, Outgoing, sendAt, Top, setTop, onDeleteMessage })=>{
    const getMessageTime1 = (sendAt)=>{
        const timeDifference = Date.now() - sendAt;
        if (timeDifference < 3600000) {
            return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(sendAt).fromNow(); // Format time as "X minutes ago"
        } else {
            return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(sendAt).format("HH:mm"); // Format time as "HH:mm"
        }
    };
    const messageTime = getMessageTime1(sendAt);
    const TimeText = {
        color: "#C8C8C8",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const scroll = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        scroll.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        userMessage.message
    ]);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const handleImageClick = ()=>{
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen();
        } else if (imgRef.current.mozRequestFullScreen) {
            imgRef.current.mozRequestFullScreen();
        } else if (imgRef.current.webkitRequestFullscreen) {
            imgRef.current.webkitRequestFullscreen();
        } else if (imgRef.current.msRequestFullscreen) {
            imgRef.current.msRequestFullscreen();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Outgoing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                id: "Chat-scroll-bar",
                ref: scroll,
                direction: "row",
                justifyContent: "end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        p: 2,
                        sx: {
                            backgroundColor: "#F8E8FF",
                            borderRadius: 1.5,
                            width: "max-content"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "chat-image",
                                    ref: imgRef,
                                    onClick: handleImageClick,
                                    width: 0,
                                    height: 0,
                                    src: userMessage.fileUrl,
                                    style: {
                                        cursor: "pointer",
                                        objectFit: "cover",
                                        maxHeight: 210,
                                        borderRadius: "10px"
                                    },
                                    alt: "Description",
                                    quality: 45,
                                    layout: "responsive" // Adjust image layout (fill, fixed, intrinsic, responsive)
                                    ,
                                    loading: "lazy" // Adjust image loading behavior (lazy, eager)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    direction: "col",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            style: messageText,
                                            variant: "body2",
                                            color: "#000",
                                            children: userMessage.message.length > 65 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    userMessage.message.slice(0, 65),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " ",
                                                    userMessage.message.slice(65)
                                                ]
                                            }) : userMessage.message
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            className: "pl-[20px]",
                                            style: TimeText,
                                            variant: "body2",
                                            color: "#000",
                                            children: messageTime
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageOptions, {
                        data: userMessage,
                        onDeleteMessage: onDeleteMessage
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                id: "Chat-scroll-bar",
                ref: scroll,
                direction: "row",
                justifyContent: "start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 2,
                    sx: {
                        backgroundColor: "#E1EDFF",
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                width: 0,
                                height: 0,
                                src: userMessage.fileUrl,
                                sizes: "max-height: 210px",
                                style: {
                                    objectFit: "cover",
                                    maxHeight: 210,
                                    borderRadius: "10px"
                                },
                                alt: "Description",
                                quality: 45,
                                layout: "responsive" // Adjust image layout (fill, fixed, intrinsic, responsive)
                                ,
                                loading: "lazy" // Adjust image loading behavior (lazy, eager)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                direction: "col",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: messageText,
                                        variant: "body2",
                                        color: "#000",
                                        children: userMessage.message
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: TimeText,
                                        variant: "body2",
                                        color: "#000",
                                        children: messageTime
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
const VideoMsg = ({ menu, userMessage, Outgoing, sendAt, Top, setTop, onDeleteMessage })=>{
    const getMessageTime1 = (sendAt)=>{
        const timeDifference = Date.now() - sendAt;
        if (timeDifference < 3600000) {
            return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(sendAt).fromNow(); // Format time as "X minutes ago"
        } else {
            return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(sendAt).format("HH:mm"); // Format time as "HH:mm"
        }
    };
    const messageTime = getMessageTime1(sendAt);
    const TimeText = {
        color: "#C8C8C8",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const scroll = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        scroll.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        userMessage.message
    ]);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const handleImageClick = ()=>{
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen();
        } else if (imgRef.current.mozRequestFullScreen) {
            imgRef.current.mozRequestFullScreen();
        } else if (imgRef.current.webkitRequestFullscreen) {
            imgRef.current.webkitRequestFullscreen();
        } else if (imgRef.current.msRequestFullscreen) {
            imgRef.current.msRequestFullscreen();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Outgoing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                id: "Chat-scroll-bar",
                ref: scroll,
                direction: "row",
                justifyContent: "end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        p: 2,
                        sx: {
                            backgroundColor: "#F8E8FF",
                            borderRadius: 1.5,
                            width: "max-content"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                    id: "chat-video",
                                    width: "100%",
                                    height: "auto",
                                    src: userMessage.fileUrl,
                                    style: {
                                        cursor: "pointer",
                                        objectFit: "cover",
                                        maxHeight: 210,
                                        borderRadius: "10px"
                                    },
                                    alt: "Description",
                                    quality: 45,
                                    controls: true,
                                    preload: "metadata" // Preload metadata to get video dimensions and duration
                                    ,
                                    children: "Your browser does not support the video tag."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    direction: "col",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            style: messageText,
                                            variant: "body2",
                                            color: "#000",
                                            children: userMessage.message.length > 65 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    userMessage.message.slice(0, 65),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " ",
                                                    userMessage.message.slice(65)
                                                ]
                                            }) : userMessage.message
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            className: "pl-[20px]",
                                            style: TimeText,
                                            variant: "body2",
                                            color: "#000",
                                            children: messageTime
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageOptions, {
                        data: userMessage,
                        onDeleteMessage: onDeleteMessage
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                id: "Chat-scroll-bar",
                ref: scroll,
                direction: "row",
                justifyContent: "start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 2,
                    sx: {
                        backgroundColor: "#E1EDFF",
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                id: "chat-video",
                                width: "100%",
                                height: "auto",
                                src: userMessage.fileUrl,
                                style: {
                                    cursor: "pointer",
                                    objectFit: "cover",
                                    maxHeight: 210,
                                    borderRadius: "10px"
                                },
                                alt: "Description",
                                quality: 45,
                                controls: true,
                                preload: "metadata" // Preload metadata to get video dimensions and duration
                                ,
                                children: "Your browser does not support the video tag."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                direction: "col",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: messageText,
                                        variant: "body2",
                                        color: "#000",
                                        children: userMessage.message
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: TimeText,
                                        variant: "body2",
                                        color: "#000",
                                        children: messageTime
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
const TextMsg = ({ el, Outgoing, userMessage, sendAt, onDeleteMessage })=>{
    const TimeText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        Opacity: "0.6"
    };
    const scroll = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        scroll.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        userMessage.message
    ]);
    const [showFullMessage, setShowFullMessage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const handleToggleMessage = ()=>{
        setShowFullMessage(!showFullMessage);
    };
    const MAX_LENGTH = 80; // Adjust this to your preferred length
    const isLongMessage = userMessage?.message?.length > MAX_LENGTH;
    const displayedMessage = showFullMessage ? userMessage?.message : userMessage?.message?.substring(0, MAX_LENGTH);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Outgoing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            ref: scroll,
            id: "Chat-scroll-bar",
            direction: "row",
            justifyContent: "end",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    p: 2,
                    sx: {
                        backgroundColor: "#F8E8FF",
                        borderRadius: "18px",
                        maxWidth: showFullMessage ? "50%" : "50%",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                        overflowWrap: "break-word"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "body2",
                        color: "#000",
                        children: [
                            displayedMessage,
                            isLongMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                onClick: handleToggleMessage,
                                style: {
                                    color: "blue",
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    showFullMessage ? " Show less" : "...Read more"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-[5px] text-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            style: TimeText,
                                            children: (0,_utils_helpers_GetMessageTime__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(sendAt)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            width: 15,
                                            height: 15,
                                            src: "/assests/chat/receive-tick.svg",
                                            loading: "lazy",
                                            alt: "receive"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageOptions, {
                        onDeleteMessage: onDeleteMessage,
                        data: userMessage
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            id: "Chat-scroll-bar",
            ref: scroll,
            direction: "row",
            justifyContent: "start",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                p: 2,
                sx: {
                    backgroundColor: "#E1EDFF",
                    borderRadius: "18px",
                    maxWidth: showFullMessage ? "50%" : "50%",
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    overflowWrap: "break-word"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "body2",
                    color: "#000",
                    children: [
                        displayedMessage,
                        isLongMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: handleToggleMessage,
                            style: {
                                color: "blue",
                                cursor: "pointer"
                            },
                            children: showFullMessage ? " Show less" : "...Read more"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-[5px] text-right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: TimeText,
                                    children: (0,_utils_helpers_GetMessageTime__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(sendAt)
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TextMsg)));
// const TimeLine = ({ el }) => {
//     const theme = useTheme();
//     return <Stack direction='row' alignItems='center' justifyContent='space-between'>
//         <Divider width='46%' />
//         <Typography style={messageText} variant='caption' sx={{ color: theme.palette.text }}>
//             {el.text}
//         </Typography>
//         <Divider width='46%' />
//     </Stack>
// }
const MessageOptions = ({ data, onDeleteMessage })=>{
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__/* .useSocket */ .s)();
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const HanldeEvent = (e)=>{
        if (e.title == "Delete Message") {
            onDeleteMessage(data.id);
            const objectdata = {
                "from": data.from,
                "to": data.to,
                "messageId": data.id,
                "messageDeletedAll": true
            };
            socket.emit("DeleteMessage", objectdata);
            socket.emit("getLastConversation", {
                from: data.from,
                to: data.to
            });
            socket.emit("getLastConversation", {
                to: data.from,
                from: data.to
            });
            setAnchorEl(null);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                id: "basic-button",
                "aria-controls": open ? "basic-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": open ? "true" : undefined,
                onClick: handleClick,
                size: 10,
                xmlns: "http://www.w3.org/2000/svg",
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                className: "lucide lucide-ellipsis-vertical",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "12",
                        cy: "12",
                        r: "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "12",
                        cy: "5",
                        r: "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "12",
                        cy: "19",
                        r: "1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                id: "basic-menu",
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                MenuListProps: {
                    "aria-labelledby": "basic-button"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    spacing: 1,
                    px: 1,
                    children: Message_options.map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                            onClick: ()=>HanldeEvent(el),
                            children: el.title
                        }))
                })
            })
        ]
    });
};
const Safetytips = ()=>{
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
    const [Tab, SetTab] = useState(0);
    const HandleNext = ()=>{
        // SetTab(Tab+1)
        if (Tab >= 2) {
            SetTab(0);
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
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "w-full h-full grid place-items-center mt-[20px] pt-[50px]",
            children: /*#__PURE__*/ _jsx("div", {
                className: "2xl:w-[333px] 2xl:h-[272px] xl:w-[300px] xl:h-[200px] lg:w-[300px] lg:h-[200px] w-[333px] h-[272px]  rounded-[14px] border-[1px] border-[#E5BDF8] bg-[#FAF0FF]",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "w-full h-full flex flex-col items-center space-y-[31px]",
                    id: "Tips-content",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "mt-[25px]",
                            children: /*#__PURE__*/ _jsxs("ul", {
                                className: "flex space-x-[9px]",
                                children: [
                                    /*#__PURE__*/ _jsx("li", {
                                        children: /*#__PURE__*/ _jsxs("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "15",
                                            height: "16",
                                            viewBox: "0 0 15 16",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M7.66667 0H7V3H7.66667V0Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M3.9328 0.799967L3.35547 1.1333L4.85547 3.7313L5.4328 3.39797L3.9328 0.799967Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M1.15755 3.38678L0.824219 3.96411L3.42222 5.46411L3.75555 4.88678L1.15755 3.38678Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M3 7H0V7.66667H3V7Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M3.39908 9.23278L0.800781 10.7322L1.13398 11.3096L3.73228 9.81018L3.39908 9.23278Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M11.2435 9.20489L10.9102 9.78223L13.5082 11.2822L13.8415 10.7049L11.2435 9.20489Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M14.668 7H11.668V7.66667H14.668V7Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M13.4925 3.35962L10.8945 4.85962L11.2279 5.43695L13.8259 3.93695L13.4925 3.35962Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M10.7064 0.824552L9.20703 3.42285L9.78443 3.75605L11.2838 1.15775L10.7064 0.824552Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M8.1 15.1L7.86667 15.3333H6.8L6.56667 15.1C6.5 15.0333 6.43333 15 6.33333 15H6V15.6667H6.2L6.43333 15.9C6.5 15.9667 6.56667 16 6.66667 16H8C8.1 16 8.16667 15.9667 8.23333 15.9L8.46667 15.6667H8.66667V15H8.33333C8.23333 15 8.16667 15.0333 8.1 15.1Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M9.33203 12.3335H5.33203V13.0002H9.33203V12.3335Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M9.33203 13.6665H5.33203V14.3332H9.33203V13.6665Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M7.33464 3.6665C5.3013 3.6665 3.66797 5.29984 3.66797 7.33317C3.66797 8.33317 4.06797 9.29984 4.8013 9.99984C5.13464 10.3665 5.33464 10.8332 5.33464 11.3332V11.6665H6.0013V11.3332C6.0013 10.6665 5.76797 9.99984 5.26797 9.49984C4.66797 8.93317 4.33464 8.1665 4.33464 7.33317C4.33464 5.6665 5.66797 4.33317 7.33464 4.33317C9.0013 4.33317 10.3346 5.6665 10.3346 7.33317C10.3346 8.1665 10.0013 8.93317 9.4013 9.49984C8.9013 9.99984 8.66797 10.6665 8.66797 11.3332V11.6665H9.33464V11.3332C9.33464 10.8332 9.53464 10.3665 9.86797 9.99984C10.6013 9.29984 11.0013 8.33317 11.0013 7.33317C11.0013 5.29984 9.36797 3.6665 7.33464 3.6665Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M6.99961 11.6668H7.66628V9.46676L8.56628 8.56676L8.09961 8.1001L7.33294 8.86676L6.56628 8.1001L6.09961 8.56676L6.99961 9.46676V11.6668Z",
                                                    fill: "black"
                                                }),
                                                /*#__PURE__*/ _jsx("path", {
                                                    d: "M7.66667 5.33333C7.66667 5.13333 7.53333 5 7.33333 5C6.03333 5 5 6.03333 5 7.33333C5 7.53333 5.13333 7.66667 5.33333 7.66667C5.53333 7.66667 5.66667 7.53333 5.66667 7.33333C5.66667 6.4 6.4 5.66667 7.33333 5.66667C7.53333 5.66667 7.66667 5.53333 7.66667 5.33333Z",
                                                    fill: "black"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("li", {
                                        style: Title,
                                        children: "Safety Tips"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            children: /*#__PURE__*/ _jsx("ul", {
                                children: /*#__PURE__*/ _jsx("li", {
                                    className: "w-[279px]",
                                    style: TipsText,
                                    children: RenderTabContent()
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "flex space-x-[9px]",
                            children: [
                                0,
                                1,
                                2
                            ].map((res)=>{
                                return /*#__PURE__*/ _jsx(_Fragment, {
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: `rounded-[50%] w-[10px] h-[10px] bg-[#8225AF] ${Tab == res ? "" : "opacity-[0.1]"}`
                                    })
                                });
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            children: /*#__PURE__*/ _jsx("button", {
                                className: `${Tab >= 2 ? "w-[147px]" : "w-[73px]"} h-[34px] bg-[#0F52BA] rounded-[23px] text-[#FFF]`,
                                onClick: HandleNext,
                                children: Tab >= 2 ? "I agree, start chat" : "Next"
                            })
                        })
                    ]
                })
            })
        })
    });
};
const TypingMessage = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Stack, {
            direction: "row",
            justifyContent: "start",
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    alt: "img",
                    width: 40,
                    height: 40,
                    className: "mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]",
                    src: "/assests/dashboard/request/req-6.svg"
                }),
                /*#__PURE__*/ _jsx(Box, {
                    p: 1.5,
                    sx: {
                        backgroundColor: "#F0F0F0",
                        borderRadius: 1.5,
                        width: "max-content"
                    },
                    children: /*#__PURE__*/ _jsx(Typography, {
                        variant: "body2",
                        color: "#000",
                        children: "Typing...."
                    })
                })
            ]
        })
    });
};
const AudioMessage = ({ el, Outgoing, userMessage, sendAt, onDeleteMessage })=>{
    const { userData, updateUser } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_6__/* .UserContext */ .S);
    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const handlePlay = ()=>{
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    const handlePause = ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };
    const handlePlayPause = ()=>{
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };
    const handleTimeUpdate = ()=>{
        if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            setCurrentTime(isFinite(currentTime) ? currentTime : 0);
            setDuration(isFinite(duration) ? duration : 0);
        }
    };
    const handleSeek = (e)=>{
        if (audioRef.current) {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
        }
    };
    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const audioElement = audioRef.current;
        const handleLoadedMetadata = ()=>{
            if (audioElement) {
                setDuration(isFinite(audioElement.duration) ? audioElement.duration : 0);
            }
        };
        if (audioElement) {
            audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
            audioElement.addEventListener("timeupdate", handleTimeUpdate);
        }
        return ()=>{
            if (audioElement) {
                audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
                audioElement.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, []);
    // #audio-img #audio-button
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Outgoing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            id: "Chat-scroll-bar",
            direction: "row",
            sx: {
                marginRight: "10px"
            },
            justifyContent: "end",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#F8E8FF",
                        width: "261px",
                        height: "53px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "10px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            style: {
                                marginLeft: "10px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "22",
                                height: "22",
                                viewBox: "0 0 22 22",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M5.05013 21.8167H2.2168C1.60291 21.8167 1.09527 21.616 0.69388 21.2146C0.292491 20.8132 0.0917969 20.3056 0.0917969 19.6917V10.9083C0.0917969 9.39722 0.37513 7.98056 0.941797 6.65833C1.50846 5.33611 2.28763 4.17917 3.2793 3.1875C4.27096 2.19583 5.42791 1.41667 6.75013 0.85C8.07235 0.283333 9.48902 0 11.0001 0C12.5112 0 13.9279 0.283333 15.2501 0.85C16.5724 1.41667 17.7293 2.19583 18.721 3.1875C19.7126 4.17917 20.4918 5.33611 21.0585 6.65833C21.6251 7.98056 21.9085 9.39722 21.9085 10.9083V19.6917C21.9085 20.3056 21.7078 20.8132 21.3064 21.2146C20.905 21.616 20.3974 21.8167 19.7835 21.8167H16.9501V13.8833H20.9168V10.9083C20.9168 8.14583 19.9546 5.80243 18.0303 3.87812C16.106 1.95382 13.7626 0.991667 11.0001 0.991667C8.23763 0.991667 5.89423 1.95382 3.96992 3.87812C2.04562 5.80243 1.08346 8.14583 1.08346 10.9083V13.8833H5.05013V21.8167ZM4.05846 14.875H1.08346V19.6917C1.08346 19.975 1.20152 20.2347 1.43763 20.4708C1.67374 20.7069 1.93346 20.825 2.2168 20.825H4.05846V14.875ZM17.9418 14.875V20.825H19.7835C20.0668 20.825 20.3265 20.7069 20.5626 20.4708C20.7987 20.2347 20.9168 19.975 20.9168 19.6917V14.875H17.9418Z",
                                        fill: "url(#paint0_linear_607_198)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "paint0_linear_607_198",
                                            x1: "-2.5",
                                            y1: "-5.5",
                                            x2: "22",
                                            y2: "26.5",
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
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "audio-button",
                                onClick: handlePlayPause,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: isPlaying ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assests/song/Pause-icon.svg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assests/song/Play-icon.svg"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "audioStack",
                            className: "pt-[15px]",
                            style: {
                                position: "relative",
                                right: "5px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "range",
                                    id: "AudioRange",
                                    min: "0",
                                    max: duration,
                                    value: currentTime,
                                    onChange: handleSeek
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                    ref: audioRef,
                                    src: userMessage?.fileUrl
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    direction: "row",
                                    className: "flex justify-between text-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: formatDuration(currentTime)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: formatDuration(duration)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageOptions, {
                    data: userMessage,
                    onDeleteMessage: onDeleteMessage
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            id: "Chat-scroll-bar",
            direction: "row",
            justifyContent: "start",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                id: "Chat-scroll-bar",
                direction: "row",
                sx: {
                    marginRight: "10px"
                },
                justifyContent: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#E1EDFF",
                        width: "261px",
                        height: "53px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "10px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            style: {
                                marginLeft: "10px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "22",
                                height: "22",
                                viewBox: "0 0 22 22",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M5.05013 21.8167H2.2168C1.60291 21.8167 1.09527 21.616 0.69388 21.2146C0.292491 20.8132 0.0917969 20.3056 0.0917969 19.6917V10.9083C0.0917969 9.39722 0.37513 7.98056 0.941797 6.65833C1.50846 5.33611 2.28763 4.17917 3.2793 3.1875C4.27096 2.19583 5.42791 1.41667 6.75013 0.85C8.07235 0.283333 9.48902 0 11.0001 0C12.5112 0 13.9279 0.283333 15.2501 0.85C16.5724 1.41667 17.7293 2.19583 18.721 3.1875C19.7126 4.17917 20.4918 5.33611 21.0585 6.65833C21.6251 7.98056 21.9085 9.39722 21.9085 10.9083V19.6917C21.9085 20.3056 21.7078 20.8132 21.3064 21.2146C20.905 21.616 20.3974 21.8167 19.7835 21.8167H16.9501V13.8833H20.9168V10.9083C20.9168 8.14583 19.9546 5.80243 18.0303 3.87812C16.106 1.95382 13.7626 0.991667 11.0001 0.991667C8.23763 0.991667 5.89423 1.95382 3.96992 3.87812C2.04562 5.80243 1.08346 8.14583 1.08346 10.9083V13.8833H5.05013V21.8167ZM4.05846 14.875H1.08346V19.6917C1.08346 19.975 1.20152 20.2347 1.43763 20.4708C1.67374 20.7069 1.93346 20.825 2.2168 20.825H4.05846V14.875ZM17.9418 14.875V20.825H19.7835C20.0668 20.825 20.3265 20.7069 20.5626 20.4708C20.7987 20.2347 20.9168 19.975 20.9168 19.6917V14.875H17.9418Z",
                                        fill: "url(#paint0_linear_607_198)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "paint0_linear_607_198",
                                            x1: "-2.5",
                                            y1: "-5.5",
                                            x2: "22",
                                            y2: "26.5",
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
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "audio-button",
                                onClick: handlePlayPause,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: isPlaying ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "../assests/song/Pause-icon.svg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "../assests/song/Play-icon.svg"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "audioStack",
                            className: "pt-[15px]",
                            style: {
                                position: "relative",
                                right: "5px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "range",
                                    id: "AudioRange",
                                    min: "0",
                                    max: duration,
                                    value: currentTime,
                                    onChange: handleSeek
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                    ref: audioRef,
                                    src: userMessage?.fileUrl
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    direction: "row",
                                    className: "flex justify-between text-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: formatDuration(currentTime)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: formatDuration(duration)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
// should not be default export, because we need to export multiple things


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21827:
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
/* harmony import */ var _data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23771);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53941);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79118);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_6__]);
([_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__, _ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Message = ()=>{
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const currentUserID = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userid");
    const { userData } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ContextProvider_UsersConversationContext__WEBPACK_IMPORTED_MODULE_5__/* .UserContext */ .S);
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_6__/* .useSocket */ .s)();
    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setMessages([]);
    }, [
        userData
    ]);
    const onDeleteMessage = (msgId)=>{
        setMessages((prevMessages)=>prevMessages.filter((message)=>message.id !== msgId));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!socket) return;
        const getLastConversation = ()=>{
            socket.emit("getLastConversation", {
                from: currentUserID,
                to: userData.id
            });
            socket.emit("getLastConversation", {
                to: currentUserID,
                from: userData.id
            });
        };
        getLastConversation();
        socket.on("message", (data)=>{
            if (data?.data?.message === "file upload url generated") {
                setMessages((prev)=>{
                    return [
                        ...prev,
                        data.data?.chatMessage
                    ];
                });
            }
            if (data?.data?.message === "messages received") {
                setMessages((prevMessages)=>{
                    const newMessages = data.data.sendMessage.results.filter((newMsg)=>!prevMessages.some((prevMsg)=>prevMsg.id === newMsg.id));
                    return [
                        ...prevMessages,
                        ...newMessages
                    ].sort((a, b)=>new Date(a.sendAt) - new Date(b.sendAt));
                });
            }
        });
        return ()=>{
            socket.off("message");
            socket.off("getLastConversation");
        };
    }, [
        socket,
        currentUserID,
        userData
    ]);
    const groupMessagesByTime = (messages)=>{
        const groupedMessages = messages.reduce((acc, message)=>{
            const messageDate = moment__WEBPACK_IMPORTED_MODULE_7___default()(message.sendAt).startOf("day");
            const now = moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf("day");
            let label;
            if (messageDate.isSame(now, "day")) {
                label = "Today";
            } else if (messageDate.isSame(now.subtract(1, "days"), "day")) {
                label = "Yesterday";
            } else {
                label = messageDate.format("MMMM D, YYYY");
            }
            if (!acc[label]) {
                acc[label] = [];
            }
            acc[label].push(message);
            return acc;
        }, {});
        return Object.keys(groupedMessages).map((label)=>({
                label,
                messages: groupedMessages[label]
            }));
    };
    const handleScroll = ()=>{
        if (chatContainerRef.current.scrollTop === 0) {
        // Fetch previous messages or implement infinite scrolling
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const container = chatContainerRef.current;
        container?.addEventListener("scroll", handleScroll);
        return ()=>{
            container?.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const renderMessage = (message)=>{
        const isOutgoing = message.from === currentUserID;
        switch(message.type){
            case "image":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .MediaMsg */ .y1, {
                    el: message,
                    Outgoing: isOutgoing,
                    sendAt: message.sendAt,
                    userMessage: message,
                    onDeleteMessage: onDeleteMessage
                }, message.id);
            case "doc":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .DocMsg */ .RL, {
                    el: message
                }, message.id);
            case "link":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .LinkMsg */ .V5, {
                    el: message
                }, message.id);
            case "reply":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .ReplyMsg */ .Q8, {
                    el: message
                }, message.id);
            case "text":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .TextMsg */ .w8, {
                    el: message,
                    Outgoing: isOutgoing,
                    sendAt: message.sendAt,
                    userMessage: message,
                    onDeleteMessage: onDeleteMessage
                }, message.id);
            case "audio":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .AudioMessage */ .r3, {
                    el: message,
                    Outgoing: isOutgoing,
                    sendAt: message.sendAt,
                    userMessage: message,
                    onDeleteMessage: onDeleteMessage
                }, message.id);
            case "video":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .VideoMsg */ .Xj, {
                    el: message,
                    Outgoing: isOutgoing,
                    sendAt: message.sendAt,
                    userMessage: message,
                    onDeleteMessage: onDeleteMessage
                }, message.id);
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_Msgtypes__WEBPACK_IMPORTED_MODULE_3__/* .TextMsg */ .w8, {
                    el: message,
                    Outgoing: isOutgoing,
                    userMessage: message.message
                }, message.id);
        }
    };
    const renderMessageGroups = ()=>{
        const groupedMessages = groupMessagesByTime(messages);
        return groupedMessages.map(({ label, messages })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            textAlign: "center",
                            color: "gray",
                            position: "relative",
                            marginTop: "10px",
                            marginBottom: "10px"
                        },
                        children: label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                            children: messages.map(renderMessage)
                        })
                    })
                ]
            }, label));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        p: 3,
        id: "Chat-scroll-bar",
        style: {
            overflowY: "scroll"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            spacing: 3,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                id: "Chat-scroll-bar",
                ref: chatContainerRef,
                children: renderMessageGroups()
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getMessageTime = (sendAt)=>{
    const timeDifference = Date.now() - sendAt;
    if (timeDifference < 3600000) {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(sendAt).fromNow(); // Format time as "X minutes ago"
    } else {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(sendAt).format("LT"); // Format time as "HH:mm"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMessageTime);


/***/ })

};
;