"use strict";
exports.id = 4822;
exports.ids = [4822];
exports.modules = {

/***/ 84822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45687);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50228);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65706);
/* harmony import */ var _common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84036);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_common_Features_Pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11443);
/* harmony import */ var _components_common_animation_GridSkeleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35998);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55395);
/* harmony import */ var _Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_10__, _common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_11__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_15__, _Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__]);
([_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_10__, _common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_11__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_15__, _Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















// Dynamically imported components
const ShareModal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>__webpack_require__.e(/* import() */ 3207).then(__webpack_require__.bind(__webpack_require__, 93207)), {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserGridProfile.js -> " + "../Model/Models/ShareModal"
        ]
    }
});
const RegisterAlertModal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>__webpack_require__.e(/* import() */ 2288).then(__webpack_require__.bind(__webpack_require__, 42288)), {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserGridProfile.js -> " + "../Model/Models/RegisterAlertModal"
        ]
    }
});
const ReportModal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserGridProfile.js -> " + "../Model/Models/ReportModal"
        ]
    },
    ssr: false
});
const ProfileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserGridProfile.js -> " + "../Model/popover/MenuPop"
        ]
    },
    ssr: false
});
const BlockUserModal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "_components\\Container\\UserGridProfile.js -> " + "../Model/Models/BlockModal"
        ]
    },
    ssr: false
});
function UserGridProfile() {
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_8__/* .useDarkMode */ .v)();
    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
    };
    const ProfileCard = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    };
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state?.alluser?.Ifinit);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [page, setpage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const NextPage = (page)=>{
        setpage(page);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_15__/* .userDatas */ .WZ)({
            page
        })); // Load the first page on mount
    }, [
        page,
        dispatch
    ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const thedata = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.myprofile);
    const HandleRequestModal = (res)=>{
        if (thedata.data.userProfileCompleted) {
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_4__/* .sendRequest */ ["if"])(res.id));
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
        } else {
            OpenRegisterModal();
        }
    };
    // Popup Data
    const [CurrURL, SetCurURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isRegisterModalOpen, setisRegisterModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isReportModalOpen, setisReportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isBlockModalOpen, setisBlockModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
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
    const HandleVisitProfile = (res)=>{
        router.push(`/longterm/dashboard/${res?.id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-[90%] xl:w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ""
                            }),
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_GridSkeleton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: // UserGridProfile
                                data?.data?.[0]?.paginatedResults?.map((user, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: ProfileCard,
                                        className: "inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between pt-[10px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "pl-[10px] flex space-x-[10px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: `cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                                user: user
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "pr-[10px] flex space-x-[30px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Buttons_ShortlistUser__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                        UserId: user?.id
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileMenu, {
                                                                    Sections: "Grid",
                                                                    SetCurURL: SetCurURL,
                                                                    openBlockModal: openBlockModal,
                                                                    OpenReportModal: OpenReportModal,
                                                                    openModal: openModal,
                                                                    res: user
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>HandleVisitProfile(user),
                                                className: "flex justify-center ",
                                                children: user?.profilePic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        quality: 45,
                                                        loading: "lazy",
                                                        alt: "profile-pic",
                                                        width: 100,
                                                        height: 100,
                                                        style: {
                                                            objectFit: "cover"
                                                        },
                                                        className: "w-[100px] h-[100px] rounded-[50%]",
                                                        src: user?.profilePic
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                        name: user?.name,
                                                        round: true,
                                                        size: "100"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        style: ProfileName,
                                                        className: " text-[#000] dark:text-[#FFF] text-[18px]",
                                                        children: user?.name
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        style: ListText,
                                                        className: " text-[#000] dark:text-[#FFF] text-[14px]",
                                                        children: [
                                                            user?.age ? user?.age : "NA",
                                                            ", ",
                                                            user?.height ? user?.height : "NA",
                                                            "”"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        style: ListText,
                                                        className: " text-[#000] dark:text-[#FFF] text-[14px]",
                                                        children: [
                                                            user?.religion ? user?.religion : "NA",
                                                            ", ",
                                                            user?.cast ? user?.cast : "NA"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: ListText,
                                                        className: " text-[#000] dark:text-[#FFF] text-[14px]",
                                                        children: user?.maritalStatus ? user?.maritalStatus : "NA"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                userLikeDetails: user?.userLikeDetails,
                                                RequestedStatus: user?.friendsDetails,
                                                RequestId: sentrequest[user?.id ? user?.id : user?._id],
                                                HandleRequestModal: ()=>HandleRequestModal(user),
                                                from: "GridProfile",
                                                currentPage: page,
                                                user: user
                                            }, index)
                                        ]
                                    }, user.id);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Features_Pagination__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        currentPage: data?.data?.[0]?.currentPage,
                        totalPages: data?.data?.[0]?.totalPages,
                        onPageChange: NextPage,
                        darkMode: false,
                        URL: "/longterm/dashboard/"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareModal, {
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
                onClose: CloseReportModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockUserModal, {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserGridProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;