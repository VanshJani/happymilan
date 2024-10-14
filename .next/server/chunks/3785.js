"use strict";
exports.id = 3785;
exports.ids = [3785];
exports.modules = {

/***/ 83785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55395);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45687);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96331);
/* harmony import */ var _components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_9__, _store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_12__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_9__, _store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Import Swiper styles

// Import Swiper styles

// import required modules









// Dynamic imports
const SendRequestBtn = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\shortlists\\comp\\UserProfile.js -> " + "../../../../_components/common/Buttons/SendRequestBtn"
        ]
    },
    ssr: false
});
const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\shortlists\\comp\\UserProfile.js -> " + "../../../../_components/Model/Models/ShareModal"
        ]
    },
    ssr: false
});
const ProfileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\shortlists\\comp\\UserProfile.js -> " + "../../../../_components/Model/popover/MenuPop"
        ]
    },
    ssr: false
});
const ReportModal = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\shortlists\\comp\\UserProfile.js -> " + "../../../../_components/Model/Models/ReportModal"
        ]
    },
    ssr: false
});
const BlockUserModal = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\shortlists\\comp\\UserProfile.js -> " + "../../../../_components/Model/Models/BlockModal"
        ]
    },
    ssr: false
});
function UserProfile() {
    const [isBlockModalOpen, setisBlockModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [CurrURL, SetCurURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const openBlockModal = ()=>{
        setisBlockModalOpen(true);
    };
    const closeBlockModal = ()=>{
        setisBlockModalOpen(false);
    };
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [blockprofile, setblockprofile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openModal = ()=>{
        setIsModalOpen(true);
        handleClose();
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const BoldText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const statusText = {
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const Box = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    //For TextOverflow
    const MAX_CHARACTERS = 100; // Define your maximum character limit
    const handleTextOverflow = (text)=>{
        if (text.length > MAX_CHARACTERS) {
            return text.slice(0, MAX_CHARACTERS) + "..."; // Truncate the text if it exceeds the limit
        } else {
            return text; // Return the original text if it doesn't exceed the limit
        }
    };
    //For Report 
    const [isReportModalOpen, setisReportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const OpenReportModal = ()=>{
        setisReportModalOpen(true);
        setAnchorEl(null);
    };
    const CloseReportModal = ()=>{
        setisReportModalOpen(false);
    };
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    // const { data, shortlistUserdata, status } = useSelector((state) => state.shortlistdata)
    const { userData, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.shortlistusers);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const Pages = {
        currentPage: currentPage
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_12__/* .fetchshortlistUsers */ .LO)(Pages));
    }, [
        currentPage
    ]);
    const HandleRemoveShortlist = (res)=>{
        const shortlistdata = userData.find((data)=>data?.id === res?.id);
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_9__/* .RemoveShortlist */ .ky)(res?.id));
        setshortlistText("Shortlisted has been removed");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
            dispatch((0,_store_matrimoney_services_slices_getShortlistUsersSlice__WEBPACK_IMPORTED_MODULE_12__/* .fetchshortlistUsers */ .LO)());
        }, 800);
        console.log(shortlistdata?.id);
    };
    const HandleRequestModal = (res)=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_10__/* .sendRequest */ ["if"])(res?.id));
        setsentRequest((prevState)=>({
                ...prevState,
                [res.id]: !prevState[res.id]
            }));
        if (!sentrequest[res.id]) {
            setshortlistText("Request Sent..");
            setopenShortlistModal(true);
        } else {
            setshortlistText("Request Removed..");
            setopenShortlistModal(true);
        }
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
    };
    if (status == "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Box,
                            className: `ml-[50px] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[350px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-[15px] w-full ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                            className: "relative top-[-70px]",
                                            width: 197,
                                            height: 400
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between  h-[50px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                        variant: "text",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "2xl:text-[20px] xl:text-[15px] text-[15px]",
                                                            style: ProfileName,
                                                            children: "Rohan Patel"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "pr-[8px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                className: "relative left-[10px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    alt: "couple-icon",
                                                                    width: 17,
                                                                    height: 14,
                                                                    src: "/assests/Black/Couple2.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                className: "text-[10px]",
                                                                style: Text4,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "You & Her"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    width: 15,
                                                                    height: 14,
                                                                    alt: "star",
                                                                    src: "/assests/Black/filled-star.svg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    width: 3,
                                                                    height: 14,
                                                                    alt: "more",
                                                                    src: "/assests/Black/3Dots.svg",
                                                                    className: "cursor-pointer",
                                                                    variant: "contained"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    id: "user-card",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        id: "user-card-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                variant: "text",
                                                                sx: {
                                                                    fontSize: "14px"
                                                                },
                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                style: ListText,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        alt: "mark",
                                                                        width: 15,
                                                                        height: 14,
                                                                        src: "/assests/Black/RightTick.svg",
                                                                        className: "inline pr-[5px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: `'32,5'3`
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                variant: "text",
                                                                sx: {
                                                                    fontSize: "14px"
                                                                },
                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                style: ListText,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        alt: "mark",
                                                                        width: 15,
                                                                        height: 14,
                                                                        src: "/assests/Black/RightTick.svg",
                                                                        className: "inline pr-[5px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: `Hindu,Patel`
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                variant: "text",
                                                                sx: {
                                                                    fontSize: "14px"
                                                                },
                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                style: ListText,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        alt: "mark",
                                                                        width: 15,
                                                                        height: 14,
                                                                        src: "/assests/Black/RightTick.svg",
                                                                        className: "inline pr-[5px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Gujarati, Hindi"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                variant: "text",
                                                                sx: {
                                                                    fontSize: "14px"
                                                                },
                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                style: ListText,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        alt: "mark",
                                                                        width: 15,
                                                                        height: 14,
                                                                        src: "/assests/Black/RightTick.svg",
                                                                        className: "inline pr-[5px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Never Married"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                variant: "text",
                                                                sx: {
                                                                    fontSize: "14px"
                                                                },
                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                style: ListText,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        alt: "mark",
                                                                        width: 15,
                                                                        height: 14,
                                                                        src: "/assests/Black/RightTick.svg",
                                                                        className: "inline pr-[5px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Ahmedabad,Gujarat"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                variant: "text",
                                                                sx: {
                                                                    fontSize: "14px"
                                                                },
                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                style: ListText,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                        alt: "mark",
                                                                        width: 15,
                                                                        height: 14,
                                                                        src: "/assests/Black/RightTick.svg",
                                                                        className: "inline pr-[5px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Software Engineer"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                        variant: "p",
                                                        style: Text3,
                                                        className: "text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "I'd describe myself as someone who's reliable, trendy,"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                    variant: "p",
                                                    className: "text-[16px] 2xl:text-[16px] xl:text-[14px]",
                                                    style: BoldText,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Are you impressed?"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                    height: 50,
                                                    className: `w-[134px] h-[40px] rounded-[10px]   text-[#000]`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Send Request",
                                                            " "
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex pb-[20px] space-x-[20px] justify-center pt-[10px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        width: 51,
                                        height: 50,
                                        alt: "like",
                                        className: "cursor-pointer",
                                        src: "/assests/animation/After-Like.svg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        width: 51,
                                        height: 50,
                                        alt: "like",
                                        className: "cursor-pointer",
                                        src: "/assests/animation/After-Like.svg"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: userData.map((res, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: Box,
                                    className: `bg-[#FFF] dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[350px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-[15px] w-full ",
                                                children: res?.shortlistId?.userProfilePic && res?.shortlistId?.userProfilePic.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                    pagination: {
                                                        clickable: true
                                                    },
                                                    modules: [
                                                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                    ],
                                                    className: "mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]",
                                                    children: res?.shortlistId?.userProfilePic.slice(0, 3).map((Imageres, theindex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                placeholder: "blur",
                                                                blurDataURL: "data:...",
                                                                alt: `img${theindex + 1}`,
                                                                width: 197,
                                                                height: 258,
                                                                style: {
                                                                    width: "197px",
                                                                    height: "258px",
                                                                    borderRadius: "10px",
                                                                    objectFit: "cover"
                                                                },
                                                                className: "w-[197px] h-[258px]",
                                                                src: Imageres.url,
                                                                loading: "lazy"
                                                            })
                                                        }, theindex))
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundColor: "#F8FBFF",
                                                            width: "197px",
                                                            height: "258px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            borderRadius: "10px"
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "grid place-items-center space-y-[5px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    loading: "lazy",
                                                                    alt: "not-Found",
                                                                    width: 34,
                                                                    height: 34,
                                                                    src: "/assests/dashboard/icon/NotFound-img.svg"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "inline",
                                                                    style: ImageNotFoundText,
                                                                    children: "No Image"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between  h-[50px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    onClick: ()=>HandlePushUser(res.id),
                                                                    className: "2xl:text-[20px] xl:text-[15px] text-[15px] cursor-pointer text-[#000] dark:text-[#FFF]",
                                                                    style: ProfileName,
                                                                    children: res?.shortlistId?.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: statusText,
                                                                    className: `text-[#17C270]`,
                                                                    children: "Online now"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "pr-[8px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "couple-icon",
                                                                                    width: 17,
                                                                                    height: 14,
                                                                                    src: "/assests/Black/Couple2.svg"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "relative top-[-2px] text-[10px] text-[#000] dark:text-[#FFF]",
                                                                                    style: Text4,
                                                                                    children: "Match Score"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "cursor-pointer",
                                                                        onClick: ()=>HandleRemoveShortlist(res),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                width: 15,
                                                                                height: 14,
                                                                                alt: "star",
                                                                                src: "/assests/Black/filled-star.svg"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileMenu, {
                                                                            SetCurURL: SetCurURL,
                                                                            openBlockModal: openBlockModal,
                                                                            OpenReportModal: OpenReportModal,
                                                                            openModal: openModal,
                                                                            res: res
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            id: "user-card",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                id: "user-card-grid",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `'32,5'3`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.shortlistId?.maritalStatus ? res?.shortlistId?.maritalStatus : "NA , NA"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.shortlistId?.religion ? res?.shortlistId?.religion : "NA"}, ${res?.shortlistId?.cast ? res?.shortlistId?.cast : "NA"}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.shortlistId?.address ? res?.shortlistId?.address?.currentCity : "NA"} , ${res?.shortlistId?.address ? res?.shortlistId?.address?.currentCountry : "NA"}`
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            `${res?.shortlistId?.motherTongue ? res?.shortlistId?.motherTongue : "NA , NA"}  `
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                        style: ListText,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                loading: "lazy",
                                                                                alt: "mark",
                                                                                width: 15,
                                                                                height: 14,
                                                                                src: "/assests/Black/RightTick.svg",
                                                                                className: "inline pr-[5px]"
                                                                            }),
                                                                            res?.shortlistId?.userProfessional ? res?.shortlistId?.userProfessional?.jobTitle : "NA , NA"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                style: Text3,
                                                                className: "text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] pr-[10px]",
                                                                children: [
                                                                    handleTextOverflow(res?.shortlistId?.writeBoutYourSelf ? res?.shortlistId?.writeBoutYourSelf : "NA"),
                                                                    res?.shortlistId?.writeBoutYourSelf && res?.shortlistId?.writeBoutYourSelf.length > MAX_CHARACTERS && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-[#0F52BA]",
                                                                        children: [
                                                                            " ",
                                                                            "more",
                                                                            " "
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute right-0 mt-[-10px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SendRequestBtn, {
                                                        RequestId: sentrequest[res?.shortlistId?.id],
                                                        HandleRequestModal: ()=>HandleRequestModal(res)
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index)
                        });
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
                isOpen: isModalOpen,
                onClose: closeModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                ProfileData: userData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReportModal, {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockUserModal, {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                    open: openShortlistModal,
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
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-[#fff]",
                                children: [
                                    " ",
                                    shortlistText
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;