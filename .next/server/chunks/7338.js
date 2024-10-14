"use strict";
exports.id = 7338;
exports.ids = [7338];
exports.modules = {

/***/ 17338:
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
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45687);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65706);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37069);
/* harmony import */ var _components_Model_Models_RegisterAlertModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42288);
/* harmony import */ var _components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93207);
/* harmony import */ var _components_Model_popover_MenuPop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59206);
/* harmony import */ var _components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43142);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_5__, _components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_9__]);
([_components_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_5__, _components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function SearchUsers({ searchResults }) {
    const thedata = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.myprofile);
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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const HandlePushUser = (res)=>{
        router.push(`/longterm/dashboard/${res}`);
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_3__/* .Postrecentuserprofile */ .yD)(res));
    };
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
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
    const ProfileCard = {
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
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const [sentrequest, setsentRequest] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const HandleRequestModal = (res)=>{
        if (thedata.data.userProfileCompleted) {
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_3__/* .sendRequest */ ["if"])(res.id));
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ""
                        }),
                        searchResults?.map((user, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: ProfileCard,
                                    className: "inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between pt-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "pl-[10px] flex space-x-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 17,
                                                                height: 14,
                                                                src: "/assests/Black/Couple2.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "text-[10px]",
                                                            style: Text4,
                                                            children: "You & Her "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "pr-[10px] flex space-x-[30px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 15,
                                                                height: 14,
                                                                src: "/assests/Black/Stars-2.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_popover_MenuPop__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                                            className: "flex justify-center cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                onClick: ()=>HandlePushUser(user?.id),
                                                width: 102,
                                                height: 102,
                                                style: {
                                                    objectFit: "cover"
                                                },
                                                className: "w-[102px] h-[102px] rounded-[50%] hover:opacity-90 duration-100",
                                                src: user?.profilePic ? user.profilePic : ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    onClick: ()=>HandlePushUser(user?.id),
                                                    style: ProfileName,
                                                    className: "cursor-pointer text-[18px] hover:opacity-75 duration-100",
                                                    children: user?.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: ListText,
                                                    className: "text-[14px]",
                                                    children: "32, 5’3”"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: ListText,
                                                    className: "text-[14px]",
                                                    children: `${user?.religion ? user.religion : "NA"} , ${user?.cast ? user.cast : "NA"}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: ListText,
                                                    className: "text-[14px]",
                                                    children: user?.maritalStatus ? user.maritalStatus : "NA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Buttons_GridLikeUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            RequestId: sentrequest[user?.id],
                                            HandleRequestModal: ()=>HandleRequestModal(user),
                                            from: "GridProfile",
                                            user: user
                                        }, index)
                                    ]
                                })
                            });
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_ShareModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
                isOpen: isModalOpen,
                onClose: closeModal,
                data: CurrURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_RegisterAlertModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                title: Data,
                isOpen: isRegisterModalOpen,
                onClose: CloseRegisterModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_ReportModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
                title: "helo",
                isOpen: isReportModalOpen,
                onClose: CloseReportModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_BlockModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                isOpen: isBlockModalOpen,
                onClose: closeBlockModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;