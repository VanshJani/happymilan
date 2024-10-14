exports.id = 4831;
exports.ids = [4831];
exports.modules = {

/***/ 14831:
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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55395);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45687);
/* harmony import */ var _components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43016);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_Buttons_LikeUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55146);
/* harmony import */ var _common_Buttons_SendRequestBtn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26361);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50228);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_6__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_10__, _common_Buttons_LikeUser__WEBPACK_IMPORTED_MODULE_14__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_6__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_10__, _common_Buttons_LikeUser__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















// import ProfileMenu from "../../../components/long-term/common/Model/ProfileMenu";
// Dynamically imported components
const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../Model/Models/ShareModal"
        ]
    },
    ssr: false
});
const RegisterAlertModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../Model/Models/RegisterAlertModal"
        ]
    },
    ssr: false
});
const ReportModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../Model/Models/ReportModal"
        ]
    },
    ssr: false
});
const ProfileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../Model/popover/MenuPop"
        ]
    },
    ssr: false
});
const BlockUserModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../Model/Models/BlockModal"
        ]
    },
    ssr: false
});
const MatchScoreModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../Model/Models/MatchScoreModal"
        ]
    },
    ssr: false
});
const ShowMore = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserProfile.js -> " + "../common/profile/UserBio"
        ]
    },
    ssr: false
});
function SampleUserProfile() {
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state?.alluser.Ifinit);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Store combined users here
    const [loadingMore, setLoadingMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Track if loading more data
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Reference to Swiper instance
    const totalPages = data?.data?.[0]?.totalPages || 1;
    // Load initial data (first page) when the component mounts
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_10__/* .userDatas */ .WZ)({
            page: 1
        })); // Load the first page on mount
    }, [
        dispatch
    ]);
    // Update the users list when userData changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data?.data?.[0]?.paginatedResults) {
            if (currentPage === 1) {
                // On the first page, replace users
                setUsers(data?.data[0].paginatedResults);
            } else {
                // On subsequent pages, append users
                setUsers((prevUsers)=>[
                        ...prevUsers,
                        ...data.data[0].paginatedResults
                    ]);
            }
            setLoadingMore(false); // Stop loading after data is appended
        }
    }, [
        data,
        currentPage
    ]);
    // Function to load more data when the user reaches the 9th card
    const loadMoreData = ()=>{
        if (currentPage < totalPages && !loadingMore) {
            setLoadingMore(true); // Start loading more
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage); // Increment the current page
            dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_10__/* .userDatas */ .WZ)({
                page: nextPage
            })); // Fetch the next page
        }
    };
    // Handle slide change event to check if we need to load more data
    const handleSlideChange = ()=>{
        const swiperInstance = swiperRef.current.swiper;
        const activeIndex = swiperInstance.realIndex;
        // If the user is on the 9th slide (0-based index), load more data
        if (activeIndex === users.length - 2) {
            loadMoreData();
        }
    };
    const { darkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_16__/* .useDarkMode */ .v)();
    const [ActiveLike, setActiveLike] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const statusText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    };
    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const Box = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [CurrURL, SetCurURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [UserID, SetUserID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
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
    const OpenRegisterModal = (res)=>{
        setData(res);
        setisRegisterModalOpen(true);
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
    const likeloading = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.usersact.LikedUsersData.likeloading);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__/* .Getlikeduserdata */ .B2)());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            // Check if the left arrow key is pressed
            if (event.keyCode === 37) {
                swiperRef.current.swiper.slidePrev();
            } else if (event.keyCode === 39) {
                swiperRef.current.swiper.slideNext();
            }
        };
        // Add event listener for keydown
        document.addEventListener("keydown", handleKeyDown);
        // Remove event listener when component is unmounted
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const swiperRef = useRef(null);
    const HandleShortlist = (id)=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_10__/* .addToShortlist */ .q9)(id)); // Dispatch the action with the shortlist ID
        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
        swiperRef.current.swiper.slideNext();
    };
    const thedata = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.myprofile);
    const HandleRequestModal = (res)=>{
        if (thedata?.data?.userProfileCompleted) {
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__/* .sendRequest */ ["if"])(res._id));
            setsentRequest((prevState)=>({
                    ...prevState,
                    [res._id]: !prevState[res._id]
                }));
            if (!sentrequest[res._id]) {
                setshortlistText(`You sent a request to ${res?.name}`);
                setopenShortlistModal(true);
            } else {
                setshortlistText("Request Removed..");
                setopenShortlistModal(true);
            }
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
        } else {
            OpenRegisterModal();
        }
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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const HandlePushUser = (res)=>{
        router.push(`/longterm/dashboard/${res}`);
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_11__/* .Postrecentuserprofile */ .yD)(res));
    };
    if (currentPage === 1 && loading && users.length === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " grid place-items-center w-[10px] lg:w-[40px] 2xl:w-[40px] xl:w-[40px] h-[294px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "custom-prev-button",
                                className: "Prevbtn relative left-[20px] md:left-[10px]  2xl:left-0 xl:left-[20px] rounded-l-full grid place-items-center cursor-pointer hover:bg-[#F1F6FF]",
                                style: {
                                    width: "35px",
                                    height: "70.993px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    width: 7,
                                    height: 14,
                                    className: "",
                                    alt: "next-light",
                                    src: "/assests/gridSection/Prev-Data.svg"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            ref: swiperRef,
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation
                            ],
                            className: " w-[600px] relative lg:left-[-10px] 2xl:left-[0px] xl:left-[10px] 2xl:w-[650px] 2xl:h-full xl:w-[560px] lg:w-[560px]  xl:h-full",
                            navigation: {
                                prevEl: "#custom-prev-button",
                                nextEl: "#custom-next-button"
                            },
                            onSlideChange: handleSlideChange,
                            children: users?.map((res, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: Box,
                                            className: `dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:h-[270px] lg:w-[530px] md:w-[400px] bg-[#FFF]`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-[350px] 2xl:w-[350px] xl:w-[350px] lg:w-[250px] md:w-[300px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "p-[15px] w-full ",
                                                        children: res.userProfilePic && res.userProfilePic.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                            pagination: {
                                                                clickable: true
                                                            },
                                                            modules: [
                                                                swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination
                                                            ],
                                                            className: "mySwiper relative 2xl:w-[197px] xl:w-[187px] lg:w-[170px] w-[185px] h-[260px]",
                                                            children: res.userProfilePic.slice(0, 3).map((Imageres, theindex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        placeholder: "blur",
                                                                        blurDataURL: "data:...",
                                                                        alt: `img${theindex + 1}`,
                                                                        width: 197,
                                                                        height: 258,
                                                                        style: {
                                                                            borderRadius: "10px",
                                                                            objectFit: "cover"
                                                                        },
                                                                        className: "2xl:w-[197px] 2xl:h-[258px] xl:w-[197px] xl:h-[258px] lg:w-[180px] lg:h-[240px] w-[180px] h-[240px]",
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
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "w-[50%] ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            onClick: ()=>HandlePushUser(res._id),
                                                                            className: "2xl:text-[18px] xl:text-[15px] text-[10px] cursor-pointer text-[#000] dark:text-[#FFF] hover:opacity-75 duration-100 break-words",
                                                                            style: ProfileName,
                                                                            children: (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.name)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            style: statusText,
                                                                            className: "text-[#17C270] break-words",
                                                                            children: res?.isUserActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[9px] text-[#0091FF]",
                                                                                children: "Online now"
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[9px] text-[#a6a6a6]",
                                                                                children: "Offline"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "pr-[8px]",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                        className: "flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: `cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MatchScoreModal, {
                                                                                    user: res
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "cursor-pointer",
                                                                                onClick: ()=>HandleShortlist(res._id),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] p-[5px] rounded-[50%] relative top-[-5px]",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                        loading: "lazy",
                                                                                        width: 15,
                                                                                        height: 14,
                                                                                        alt: "star",
                                                                                        src: "/assests/Black/Stars-2.svg"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileMenu, {
                                                                                    SetUserID: SetUserID,
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
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                        loading: "lazy",
                                                                                        alt: "mark",
                                                                                        width: 15,
                                                                                        height: 14,
                                                                                        src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                        className: "inline pr-[5px]"
                                                                                    }),
                                                                                    `${res?.age},${res?.height}`
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                                style: ListText,
                                                                                children: res?.maritalStatus ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            loading: "lazy",
                                                                                            alt: "mark",
                                                                                            width: 15,
                                                                                            height: 14,
                                                                                            src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                            className: "inline pr-[5px]"
                                                                                        }),
                                                                                        res.maritalStatus ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.maritalStatus) : "NA , NA"
                                                                                    ]
                                                                                }) : ""
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                                style: ListText,
                                                                                children: res?.religion ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            loading: "lazy",
                                                                                            alt: "mark",
                                                                                            width: 15,
                                                                                            height: 14,
                                                                                            src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                            className: "inline pr-[5px]"
                                                                                        }),
                                                                                        `${res.religion ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.religion) : "NA"}, ${res.cast ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.cast) : "NA"}`
                                                                                    ]
                                                                                }) : ""
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                                style: ListText,
                                                                                children: res?.address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            loading: "lazy",
                                                                                            alt: "mark",
                                                                                            width: 15,
                                                                                            height: 14,
                                                                                            src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                            className: "inline pr-[5px]"
                                                                                        }),
                                                                                        `${res.address ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.address.currentCity) : "NA"} , ${res.address ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.address.currentCountry) : "NA"}`
                                                                                    ]
                                                                                }) : ""
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                                style: ListText,
                                                                                children: res?.motherTongue ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            loading: "lazy",
                                                                                            alt: "mark",
                                                                                            width: 15,
                                                                                            height: 14,
                                                                                            src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                            className: "inline pr-[5px]"
                                                                                        }),
                                                                                        `${res.motherTongue ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.motherTongue) : "NA , NA"}  `
                                                                                    ]
                                                                                }) : ""
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]",
                                                                                style: ListText,
                                                                                children: res?.userProfessional ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            loading: "lazy",
                                                                                            alt: "mark",
                                                                                            width: 15,
                                                                                            height: 14,
                                                                                            src: darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg",
                                                                                            className: "inline pr-[5px]"
                                                                                        }),
                                                                                        res.userProfessional ? (0,_utils_form_Captitelize__WEBPACK_IMPORTED_MODULE_18__/* .capitalizeFirstLetter */ .f)(res.userProfessional.jobTitle) : "NA , NA"
                                                                                    ]
                                                                                }) : ""
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShowMore, {
                                                                        userid: res?._id,
                                                                        text: res?.writeBoutYourSelf,
                                                                        maxLength: 100
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute right-6 bottom-[18px]",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Buttons_SendRequestBtn__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                                            userdata: res?.name,
                                                                            Requeststatus: res?.friendsDetails,
                                                                            RequestId: sentrequest[res._id],
                                                                            HandleRequestModal: ()=>HandleRequestModal(res)
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "relative top-[10px]",
                                                                        children: likeloading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "animate-pulse w-[63px] h-[40px] bg-gray-200 rounded-[22px]"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Buttons_LikeUser__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                                                ActiveLike: ActiveLike,
                                                                                setActiveLike: setActiveLike,
                                                                                userId: res._id,
                                                                                TheUsername: res?.name,
                                                                                userdata: res
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "z-8 relative  right-[20px] xl:right-[10px] 2xl:right-[10px]  grid place-items-center w-[10px] lg:w-[40px] h-[294px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "custom-next-button",
                                className: "Prevbtn rounded-r-full grid place-items-center cursor-pointer  hover:bg-[#F1F6FF]",
                                style: {
                                    width: "35px",
                                    height: "70.993px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    width: 7,
                                    height: 14,
                                    className: "transform scale-x-[-1]",
                                    alt: "next-light",
                                    src: "/assests/gridSection/Prev-Data.svg"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
                UserID: UserID,
                isOpen: isModalOpen,
                onClose: closeModal,
                data: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RegisterAlertModal, {
                title: Data,
                isOpen: isRegisterModalOpen,
                onClose: CloseRegisterModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReportModal, {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal,
                ReportData: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockUserModal, {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Dialog, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SampleUserProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45687);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55395);
/* harmony import */ var _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79118);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__]);
([_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__, _ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LikeUser = ({ setActiveLike, userId, TheUsername })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.usersact.LikedUsersData);
    const [isUserLiked, setIsUserLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isUserDisliked, setIsUserDisliked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data?.results) {
            const liked = data.results.some((item)=>item.likedUserId === userId && item.isLike);
            const disliked = data.results.some((item)=>item.likedUserId === userId && !item.isLike);
            setIsUserLiked(liked);
            setIsUserDisliked(disliked);
        }
    }, [
        data,
        userId
    ]);
    const currentUserId = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("userid");
    const socket = (0,_ContextProvider_SocketContext__WEBPACK_IMPORTED_MODULE_7__/* .useSocket */ .s)();
    const [isAnimated, setIsAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const handleLikeUser = ()=>{
        if (!isUserLiked) {
            socket?.emit("createUserLike", {
                "userId": currentUserId,
                "likedUserId": userId
            });
            dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__/* .CreateLikeUser */ .EG)({
                userId: userId,
                status: true
            }));
            setshortlistText(`You liked ${TheUsername}'s profile.`);
            setopenShortlistModal(true);
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
            setIsUserLiked(true);
            setIsUserDisliked(false);
            setTimeout(()=>{
                dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_5__/* .Getlikeduserdata */ .B2)());
            }, 3000);
            setIsAnimated(true);
            setTimeout(()=>{
                setIsAnimated(false);
            }, 500);
        }
    };
    const handleDislikeUser = ()=>{
        if (!isUserDisliked) {
            const res = data.results.find((item)=>item?.likedUserId === userId);
            console.log("\uD83D\uDE80 ~ handleDislikeUser ~ res:", res);
            socket?.emit("updateUserLike", {
                "userId": currentUserId,
                "likedUserId": res?.likedUserId,
                "isLike": false
            });
            setshortlistText(`You disliked ${TheUsername}'s profile.`);
            setopenShortlistModal(true);
            setTimeout(()=>{
                setopenShortlistModal(false);
            }, 900);
            dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_6__/* .UnlikeTheUser */ .Fl)(res));
            setIsUserLiked(false);
            setIsUserDisliked(true);
        }
    };
    const [HoverAnimation, SetHoverAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [DislikeHover, SetDislikeHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden",
                        children: isUserDisliked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "Like-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]",
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
                        }) : DislikeHover ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            onMouseEnter: ()=>SetDislikeHover(true),
                            onMouseLeave: ()=>SetDislikeHover(false),
                            loading: "lazy",
                            width: 50,
                            height: 50,
                            alt: "dislike",
                            onClick: handleDislikeUser,
                            src: "/assests/animation/filled-dislike.svg"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            onMouseEnter: ()=>SetDislikeHover(true),
                            onMouseLeave: ()=>SetDislikeHover(false),
                            width: "50",
                            height: "50",
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            onClick: handleDislikeUser,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    id: "Group 1509",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            id: "Ellipse 53",
                                            cx: "20",
                                            cy: "20",
                                            r: "19.5",
                                            stroke: "url(#paint0_linear_4122_346)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Vector",
                                            d: "M22.6134 11.3336H14.9334C14.2251 11.3336 13.6193 11.7603 13.3633 12.3747L10.7862 18.3907C10.7094 18.587 10.6667 18.7918 10.6667 19.0136V20.7203C10.6667 21.659 11.4347 22.427 12.3734 22.427H17.7579L16.9473 26.3267L16.9217 26.5998C16.9217 26.9496 17.0667 27.2739 17.2971 27.5043L18.2017 28.4003L23.8251 22.7768C24.1323 22.4696 24.3201 22.043 24.3201 21.5736V13.0403C24.3201 12.1016 23.5521 11.3336 22.6134 11.3336ZM22.6134 21.5736L18.9099 25.2771L20.0534 20.7203H12.3734V19.0136L14.9334 13.0403H22.6134V21.5736ZM26.0267 11.3336H29.4401V21.5736H26.0267V11.3336Z",
                                            fill: "url(#paint1_linear_4122_346)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "paint0_linear_4122_346",
                                            x1: "2.5",
                                            y1: "-3.5",
                                            x2: "40",
                                            y2: "43.5",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    stopColor: "#0F52BA"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "0.979167",
                                                    stopColor: "#8225AF"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "paint1_linear_4122_346",
                                            x1: "12",
                                            y1: "9",
                                            x2: "26",
                                            y2: "31.5",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    stopColor: "#0F52BA"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "1",
                                                    stopColor: "#8126AF"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: isUserLiked ? handleDislikeUser : handleLikeUser,
                            className: isUserLiked ? "Liked-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px] bg-[#9E28D7] " : "Like-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                class: isUserLiked ? "after-like-icon" : "the-like-icon",
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
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Dialog, {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
// src/utils/capitalize.js
const capitalizeFirstLetter = (string)=>{
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};


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