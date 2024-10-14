"use strict";
exports.id = 2589;
exports.ids = [2589];
exports.modules = {

/***/ 79534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93207);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_4__]);
_pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ProfileMoreSection({ data }) {
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const openModal = (e)=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);
    const [CurrentUserID, SetCurrentUserID] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    // const [Username,SetUsername] = useState("")
    const [UserData, SetUserData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const handleClick = (event, res)=>{
        SetUserData(data);
        setAnchorEl(event.currentTarget);
        SetCurrentUserID(data?._id || data?.res);
        const userId = data?._id || data?.id;
        const currentUrl = window.location.href;
        const urlWithUserId = `${currentUrl}/${userId}`;
    // SetCurURL(urlWithUserId);
    // if (MenuTitle != "accepted") {
    // }
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [openURLModal, setOpenURLModal] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const handleClickOpen = ()=>{
        const userId = CurrentUserID;
        const currentUrl = window.location.href;
        const urlWithUserId = `${currentUrl}/${userId}`;
        navigator.clipboard.writeText(urlWithUserId).then(()=>{
            setOpenURLModal(true);
            handleClose(); // Reset copied state after 2 seconds
        }).catch((error)=>console.error("Failed to copy URL: ", error));
        setTimeout(()=>{
            setOpenURLModal(false);
        }, 800);
    };
    const HandleOpenShareModal = ()=>{
        openModal();
        handleClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: handleClick,
                className: " cursor-pointer absolute flex justify-end top-0 right-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "23",
                    height: "22",
                    viewBox: "0 0 23 22",
                    fill: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M11.1364 18C10.8168 18 10.5475 17.8887 10.3285 17.666C10.1095 17.4434 10 17.1758 10 16.8631C10 16.5545 10.1097 16.2856 10.329 16.0563C10.5484 15.827 10.8148 15.7124 11.1283 15.7124C11.448 15.7124 11.7173 15.8275 11.9363 16.0577C12.1553 16.2879 12.2648 16.5577 12.2648 16.8673C12.2648 17.1768 12.1553 17.443 11.9363 17.6658C11.7173 17.8886 11.4507 18 11.1364 18ZM11.1364 12.1381C10.8168 12.1381 10.5475 12.0284 10.3285 11.809C10.1095 11.5897 10 11.3232 10 11.0098C10 10.6901 10.1097 10.4208 10.329 10.2018C10.5484 9.98281 10.8148 9.87332 11.1283 9.87332C11.448 9.87332 11.7173 9.98281 11.9363 10.2018C12.1553 10.4208 12.2648 10.6874 12.2648 11.0016C12.2648 11.3213 12.1553 11.5906 11.9363 11.8096C11.7173 12.0286 11.4507 12.1381 11.1364 12.1381ZM11.1364 6.29899C10.8168 6.29899 10.5475 6.18595 10.3285 5.95988C10.1095 5.73381 10 5.46204 10 5.14458C10 4.82712 10.1097 4.55699 10.329 4.33419C10.5484 4.1114 10.8148 4 11.1283 4C11.448 4 11.7173 4.11234 11.9363 4.33701C12.1553 4.56168 12.2648 4.83196 12.2648 5.14785C12.2648 5.46687 12.1553 5.73848 11.9363 5.96268C11.7173 6.18689 11.4507 6.29899 11.1364 6.29899Z",
                        fill: "black"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                id: id,
                open: open,
                anchorEl: anchorEl,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                PaperProps: {
                    style: {
                        border: "none",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        borderRadius: "10px",
                        marginLeft: "-15px",
                        marginTop: "5px"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `flex flex- col items-center bg-[#FFF] rounded-[10px] w-[220px] h-[150px] `,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: " w-full flex flex-col justify-center items-center space-y-[0px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: Text3,
                                    onClick: HandleOpenShareModal,
                                    className: "w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                loading: "lazy",
                                                alt: "icon",
                                                width: 13,
                                                height: 14,
                                                src: "/assests/dashboard/icon/share-icon.svg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Share Profile"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: Text3,
                                    onClick: ()=>openBlockModal(UserData),
                                    className: " cursor-pointer hover:bg-[#F2F7FF] w-full p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                loading: "lazy",
                                                alt: "icon",
                                                width: 14,
                                                height: 14,
                                                src: "/assests/dashboard/icon/block-icon.svg"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Block ",
                                                    data?.name ? data?.name : ""
                                                ]
                                            }),
                                            " ",
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: Text3,
                                    className: "cursor-pointer w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                loading: "lazy",
                                                alt: "icon",
                                                width: 14,
                                                height: 14,
                                                src: "/assests/dashboard/icon/report-icon.svg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: " Report this profile"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: Text3,
                                    className: "cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " ml-[20px] flex space-x-[24px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                loading: "lazy",
                                                alt: "icon",
                                                width: 12,
                                                height: 14,
                                                src: "/assests/dashboard/icon/copy-icon.svg"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Copy URL"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                    open: openURLModal,
                    "aria-labelledby": "alert-dialog-title",
                    "aria-describedby": "alert-dialog-description",
                    PaperProps: {
                        style: {
                            backgroundColor: "transparent",
                            boxShadow: "none"
                        }
                    },
                    BackdropProps: {
                        style: {
                            opacity: 0,
                            backgroundColor: "none",
                            boxShadow: "none"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            padding: "17px 19px 17px 20px"
                        },
                        className: "bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[14px]",
                            style: Urlmodaltext,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("spa", {
                                className: "text-[#fff]",
                                children: " URL has been copied"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
                isOpen: isModalOpen,
                onClose: closeModal
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileMoreSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_dating_services_Redux_actions_home_DatingUsersActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81551);
/* harmony import */ var _components_Dating_common_Models_ProfileMoreSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_Dating_common_Models_ProfileMoreSection__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_Dating_common_Models_ProfileMoreSection__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SwipeCard = ({ card, onSwipe })=>{
    const handleDragEnd = (event, info)=>{
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        // Decrease the threshold for triggering a swipe
        if (offset > 100 || velocity > 500) {
            onSwipe("right");
            console.log("Right", card);
        } else if (offset < -100 || velocity < -500) {
            onSwipe("left");
            console.log("Left", card);
        }
    };
    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    };
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px"
    };
    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px"
    };
    const [ActiveImageSlide, SetActiveImageSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dating_common_Models_ProfileMoreSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    data: card
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px] rounded-xl shadow-lg",
                drag: "x",
                dragConstraints: {
                    left: 0,
                    right: 0
                },
                dragSnapToOrigin: true,
                onDragEnd: handleDragEnd,
                initial: {
                    scale: 1
                },
                animate: {
                    x: 0
                },
                whileTap: {
                    scale: 1.05
                },
                onClick: (e)=>e.preventDefault(),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative 2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden absolute top-[10px] left-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex space-x-[6px]",
                                children: card?.scrollImage?.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>SetActiveImageSlide(index),
                                        className: `w-[66px] h-[2px] rounded-[20px] ${index === ActiveImageSlide ? "bg-[#FFF]" : "bg-[#FFF] opacity-40"}`
                                    }, index))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: card?.profilePic || "https://studiomarcofischer.com/images/portrait-men/portrait-men-004-studiomarcofischer.jpg",
                            alt: "Profile",
                            className: "2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px] object-cover rounded-xl"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute bottom-[30px] space-y-[5px] text-[white] ml-[20px] 2xl:ml-[30px] xl:ml-[30px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: Text2,
                                            className: "text-[10px]",
                                            children: "online"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[20px]",
                                    style: Text1,
                                    children: card?.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[10px]",
                                    style: Text2,
                                    children: "Male 36, 4’ 5” | Ahmedabad (2.1 km)"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const SwiperCardNext = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    // const datingUsers = useSelector((state) => state.datingusers?.Paginated?.userData[0]?.paginatedResults || []);
    const datingUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.rangeuser?.users[0]?.paginatedResults || []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_dating_services_Redux_actions_home_DatingUsersActions__WEBPACK_IMPORTED_MODULE_4__/* .GetDatingUsers */ .W)());
    }, []);
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const handleSwipe = (direction)=>{
        if (direction === "right" || direction === "left") {
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % datingUsers?.length);
        }
    };
    const handleButtonClick = (action)=>{
        if (action === "like") {
            console.log("Liked:", datingUsers?.[currentIndex]?.name);
            handleSwipe("right");
        } else if (action === "dislike") {
            console.log("Disliked:", datingUsers?.[currentIndex]?.name);
            handleSwipe("left");
        }
    };
    const prevCardIndex = (currentIndex - 1 + datingUsers?.length) % datingUsers?.length;
    const nextCardIndex = (currentIndex + 1) % datingUsers?.length;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-[20px] top-3 relative flex items-center space-x-[20px] justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-x-[20px] flex items-center justify-center h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-[91px] h-[104px]",
                    children: currentIndex > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: "w-[91px] h-[104px] opacity-50",
                        initial: {
                            scale: 0.8,
                            opacity: 0.5
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: datingUsers?.[prevCardIndex]?.profilePic || "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg",
                            alt: "Previous Profile",
                            className: "w-full h-full object-cover rounded-xl opacity-30"
                        })
                    })
                }),
                datingUsers?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwipeCard, {
                    card: datingUsers?.[currentIndex],
                    onSwipe: handleSwipe
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "w-[91px] h-[104px] opacity-50",
                    initial: {
                        scale: 0.8,
                        opacity: 0.5
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: datingUsers?.[nextCardIndex]?.profilePic || "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg",
                        alt: "Next Profile",
                        className: "w-full h-full object-cover rounded-xl opacity-50"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "left-[-20px] absolute bottom-[-60px] w-full flex justify-center space-x-[12px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>handleButtonClick("dislike"),
                                className: "w-[63px] h-[44px] grid place-items-center",
                                id: "Reject-dating",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "reject-icon-dt",
                                    width: "20",
                                    height: "18",
                                    viewBox: "0 0 20 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Vector",
                                        d: "M12.9216 0H5.00156C4.27116 0 3.64636 0.44 3.38236 1.0736L0.724762 7.2776C0.645562 7.48 0.601562 7.6912 0.601562 7.92V9.68C0.601562 10.648 1.39356 11.44 2.36156 11.44H7.91436L7.07836 15.4616L7.05196 15.7432C7.05196 16.104 7.20156 16.4384 7.43916 16.676L8.37196 17.6L14.1712 11.8008C14.488 11.484 14.6816 11.044 14.6816 10.56V1.76C14.6816 0.792 13.8896 0 12.9216 0ZM16.4416 0V10.56H19.9616V0H16.4416Z"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[63px] h-[44px] grid place-items-center",
                                id: "cancel-dating",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "cancel-icon-dt",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 15 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Vector",
                                        d: "M1.85225 14.9045L0 13.0523L5.6 7.45225L0 1.85225L1.85225 0L7.45225 5.6L13.0522 0L14.9045 1.85225L9.3045 7.45225L14.9045 13.0523L13.0522 14.9045L7.45225 9.3045L1.85225 14.9045Z"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>handleButtonClick("like"),
                                className: "Like-button w-[63px] h-[44px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    class: "the-like-icon",
                                    width: "20",
                                    height: "18",
                                    viewBox: "0 0 20 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M10.1914 17.8002L8.80064 16.5341C3.86113 12.055 0.600098 9.1009 0.600098 5.4754C0.600098 2.52129 2.92119 0.200195 5.8753 0.200195C7.54418 0.200195 9.14593 0.977089 10.1914 2.20477C11.2368 0.977089 12.8386 0.200195 14.5075 0.200195C17.4616 0.200195 19.7827 2.52129 19.7827 5.4754C19.7827 9.1009 16.5216 12.055 11.5821 16.5437L10.1914 17.8002Z"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>handleSwipe("right"),
                                className: "right-swipe-icon w-[63px] h-[44px] grid place-items-center border-[1px] border-[#7045EB] rounded-[22px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    class: "right-swipe",
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Vector",
                                        d: "M17.0949 7.89531C16.9607 7.81951 1.67321 0.142507 1.53128 0.0793316C1.33 -0.01164 0.973874 -0.026802 0.733877 0.0464809C0.460334 0.132399 0.150661 0.42553 0.0603392 0.68581C-0.00933631 0.880387 -0.0196587 1.17857 0.0345332 1.35293C0.0577595 1.41611 0.767426 2.82363 1.61128 4.48387L3.14932 7.49605L3.39447 7.53901C4.92219 7.80687 10.3802 8.7747 10.4266 8.78481C10.5092 8.80503 10.726 8.76459 6.88087 9.43172C4.96348 9.76275 3.34286 10.0458 3.27836 10.0584C3.16223 10.0812 3.15964 10.0837 1.62418 13.0883C0.780328 14.7435 0.0680802 16.1586 0.0422758 16.2293C-0.0196594 16.4163 -0.0119176 16.7069 0.0603392 16.9141C0.15066 17.1744 0.460333 17.4676 0.733877 17.5535C0.973873 17.6268 1.33 17.6117 1.53128 17.5206C1.61386 17.4853 5.14413 15.7163 9.37631 13.5937C16.7052 9.91437 17.0819 9.72232 17.2653 9.54291C17.5826 9.23714 17.6756 8.86314 17.5387 8.46642C17.4692 8.26677 17.2472 7.9787 17.0949 7.89531Z"
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwiperCardNext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ GetDatingUsers)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22931);


const GetDatingUsers = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_1__/* .GET_DATING_USERS_REQUEST */ .WO
        });
        const axios = __webpack_require__(52167);
        const Token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/user/getUserByGenderDating`,
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_1__/* .GET_DATING_USERS_SUCCESS */ .P7,
                payload: response.data?.data
            });
        }).catch((error)=>{
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_1__/* .GET_DATING_USERS_FAILURE */ .jQ
            });
            console.log(error);
        });
    };
};


/***/ })

};
;