exports.id = 4637;
exports.ids = [4637];
exports.modules = {

/***/ 84637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55395);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45687);
/* harmony import */ var _components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43016);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_common_Buttons_SendRequestBtn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26361);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50228);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Model_popover_MenuPop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59206);
/* harmony import */ var _components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(43142);
/* harmony import */ var _components_Model_Models_RegisterAlertModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42288);
/* harmony import */ var _components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_7__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_7__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import required modules
const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 3207).then(__webpack_require__.bind(__webpack_require__, 93207)));



















function Searchprofile() {
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_16__/* .useDarkMode */ .v)();
    const ProfileName = {
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
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const Box = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [CurrURL, SetCurURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isRegisterModalOpen, setisRegisterModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isReportModalOpen, setisReportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isBlockModalOpen, setisBlockModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const openModal = (e)=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const CloseRegisterModal = ()=>{
        setisRegisterModalOpen(false);
    };
    const openBlockModal = ()=>{
        setisBlockModalOpen(true);
    };
    const closeBlockModal = ()=>{
        setisBlockModalOpen(false);
    };
    const OpenReportModal = ()=>{
        setisReportModalOpen(true);
    };
    const CloseReportModal = ()=>{
        setisReportModalOpen(false);
    };
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const HandleShortlist = (id)=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__/* .addToShortlist */ .q9)(id)); // Dispatch the action with the shortlist ID
        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
    };
    const HandleRequestModal = (res)=>{
        // if (data?.data?.userProfileCompleted) {
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__/* .sendRequest */ ["if"])(res._id));
        setsentRequest((prevState)=>({
                ...prevState,
                [res._id]: !prevState[res._id]
            }));
        if (!sentrequest[res._id]) {
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
    const imageFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const HandlePushUser = (res)=>{
        router.push(`/longterm/dashboard/${res}`);
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__/* .Postrecentuserprofile */ .yD)(res));
    };
    const MAX_CHARACTERS = 100; // Define your maximum character limit
    const handleTextOverflow = (text)=>{
        if (text.length > MAX_CHARACTERS) {
            return text.slice(0, MAX_CHARACTERS) + "..."; // Truncate the text if it exceeds the limit
        } else {
            return text; // Return the original text if it doesn't exceed the limit
        }
    };
    const { loading, data } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.usersact.searchusersprofiledata);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col mt-[-8px]",
                    children: [
                        data?.map((res, Index)=>{
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
                                                    children: res.userProfilePic && res.userProfilePic.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                                        pagination: {
                                                            clickable: true
                                                        },
                                                        modules: [
                                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination
                                                        ],
                                                        className: "mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]",
                                                        children: res.userProfilePic.slice(0, 3).map((Imageres, theindex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
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
                                                                    loading: "lazy",
                                                                    quality: 45
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
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        alt: "not-Found",
                                                                        width: 34,
                                                                        height: 34,
                                                                        loading: "lazy",
                                                                        quality: 25,
                                                                        src: "/assests/dashboard/icon/NotFound-img.svg"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                        className: "inline",
                                                                        style: imageFoundText,
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
                                                                        children: res.name
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
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
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
                                                                            onClick: ()=>HandleShortlist(res.id || res?._id),
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    alt: "star",
                                                                                    src: "/assests/Black/Stars-2.svg"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_popover_MenuPop__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "mark",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                    className: "inline pr-[5px]"
                                                                                }),
                                                                                `'32,5'3`
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                            style: ListText,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "mark",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                    className: "inline pr-[5px]"
                                                                                }),
                                                                                res.maritalStatus ? res.maritalStatus : "NA , NA"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                            style: ListText,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "mark",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                    className: "inline pr-[5px]"
                                                                                }),
                                                                                `${res.religion ? res.religion : "NA"}, ${res.cast ? res.cast : "NA"}`
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                            style: ListText,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "mark",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                    className: "inline pr-[5px]"
                                                                                }),
                                                                                `${res.address ? res.address.currentCity : "NA"} , ${res.address ? res.address.currentCountry : "NA"}`
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                            style: ListText,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "mark",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                    className: "inline pr-[5px]"
                                                                                }),
                                                                                `${res.motherTongue ? res.motherTongue : "NA , NA"}  `
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                            style: ListText,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    loading: "lazy",
                                                                                    alt: "mark",
                                                                                    width: 15,
                                                                                    height: 14,
                                                                                    src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                    className: "inline pr-[5px]"
                                                                                }),
                                                                                res.userProfessional ? res.userProfessional.jobTitle : "NA , NA"
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
                                                                        handleTextOverflow(res.writeBoutYourSelf ? res.writeBoutYourSelf : "NA"),
                                                                        res.writeBoutYourSelf && res.writeBoutYourSelf.length > MAX_CHARACTERS && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
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
                                                        className: "absolute right-0 mt-[0px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_SendRequestBtn__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                            RequestId: sentrequest[res?._id],
                                                            HandleRequestModal: ()=>HandleRequestModal(res)
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, Index)
                            });
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-5 relative  right-[20px] xl:right-[10px] 2xl:right-[10px]  grid place-items-center w-[10px] lg:w-[40px] h-[294px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "custom-next-button",
                                className: "w-[35px] h-[70px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    loading: "lazy",
                                    alt: "next-icon",
                                    width: 55,
                                    height: 91,
                                    src: darkMode ? "/assests/dashboard/icon/next-card-btn-white.svg" : "/assests/dashboard/icon/next-card-btn.svg"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
                isOpen: isModalOpen,
                onClose: closeModal,
                data: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_RegisterAlertModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
                title: Data,
                isOpen: isRegisterModalOpen,
                onClose: CloseRegisterModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_20__["default"], {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Dialog, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchprofile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69176:
/***/ (() => {



/***/ }),

/***/ 62996:
/***/ (() => {



/***/ }),

/***/ 58722:
/***/ (() => {



/***/ })

};
;