"use strict";
exports.id = 5234;
exports.ids = [5234];
exports.modules = {

/***/ 55234:
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
/* harmony import */ var _components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43016);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45687);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55395);
/* harmony import */ var _components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97996);
/* harmony import */ var _components_common_profile_UserBio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49996);
/* harmony import */ var _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60820);
/* harmony import */ var _components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__, _components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_12__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_14__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__, _store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__, _components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_12__, _components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Import Swiper styles


// import required modules











function Request() {
    const { data, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.usersact.requestdata);
    const HandleShortlist = (id)=>{
        dispatch((0,_store_actions_GetingAlluser__WEBPACK_IMPORTED_MODULE_11__/* .addToShortlist */ .q9)(id)); // Dispatch the action with the shortlist ID
        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
        }, 800);
    };
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
    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */ 
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
    const [openShortlistModal, setopenShortlistModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [shortlistText, setshortlistText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const HanldeAccept = (res)=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_9__/* .acceptRequest */ .ED)(res));
        setshortlistText("Shortlisted has been removed");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_9__/* .getFriendsList */ .XP)());
        }, 800);
    };
    const HanldeReject = (res)=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_9__/* .rejectRequest */ .QN)(res));
        setshortlistText("Shortlisted has been removed");
        setopenShortlistModal(true);
        setTimeout(()=>{
            setopenShortlistModal(false);
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_9__/* .getFriendsList */ .XP)());
        }, 800);
    };
    const [hoveredProfile, setHoveredProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [hoveredRejectButton, sethoveredRejectButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_shader_UserprofileSkeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: data && data.data && data.data.map((res, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: Box,
                                className: `flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[350px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-[15px] w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                pagination: {
                                                    clickable: true
                                                },
                                                modules: [
                                                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                ],
                                                className: "mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]",
                                                children: res?.user?.userProfilePic?.slice(0, 3).map((Imageres, theindex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            alt: `img${theindex + 1}`,
                                                            // onClick={HandleShow}
                                                            width: 197,
                                                            height: 258,
                                                            className: "w-[197px] h-[258px]",
                                                            src: Imageres?.url,
                                                            style: {
                                                                borderRadius: "10px",
                                                                objectFit: "cover"
                                                            },
                                                            loading: "lazy",
                                                            quality: 45
                                                        })
                                                    }, theindex))
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
                                                                className: "2xl:text-[20px] xl:text-[15px] text-[15px]",
                                                                style: ProfileName,
                                                                children: res.user?.name
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Model_Models_MatchScoreModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                        user: res?.user
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        onClick: ()=>HandleShortlist(res.user.id),
                                                                        className: "cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            loading: "lazy",
                                                                            width: 15,
                                                                            height: 14,
                                                                            alt: "star",
                                                                            src: "/assests/Black/Stars-2.svg"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_long_term_common_Model_ProfileMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                        res: res?.user
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
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                    style: ListText,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            alt: "img",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/RightTick.svg",
                                                                            className: "inline pr-[5px]"
                                                                        }),
                                                                        " ",
                                                                        `${res?.user?.age ?? "NA"}, ${res?.user?.height ?? "NA"}`
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                    style: ListText,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            alt: "img",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/RightTick.svg",
                                                                            className: "inline pr-[5px]"
                                                                        }),
                                                                        `${res?.user?.maritalStatus ?? "NA"}`
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                    style: ListText,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            alt: "img",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/RightTick.svg",
                                                                            className: "inline pr-[5px]"
                                                                        }),
                                                                        `${res?.user?.religion ?? "NA"}, ${res?.user?.cast ?? "NA"}`
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                    style: ListText,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            alt: "img",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/RightTick.svg",
                                                                            className: "inline pr-[5px]"
                                                                        }),
                                                                        `${res?.user?.address?.currentCity ?? "NA"}, ${res?.user?.address?.currentCountry ?? "NA"}`
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                    style: ListText,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            alt: "img",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/RightTick.svg",
                                                                            className: "inline pr-[5px]"
                                                                        }),
                                                                        `${res?.user?.motherTongue ?? "NA"}`
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "text-[14px] 2xl:text-[14px] xl:text-[13px]",
                                                                    style: ListText,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            alt: "img",
                                                                            width: 15,
                                                                            height: 14,
                                                                            src: "/assests/Black/RightTick.svg",
                                                                            className: "inline pr-[5px]"
                                                                        }),
                                                                        `${res?.user?.userProfessional?.jobTitle ?? "NA"}`
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_profile_UserBio__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                            userid: res?.user?._id || res?.user?.id,
                                                            text: res?.user?.writeBoutYourSelf,
                                                            maxLength: 100
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] lg:mt-0 mr-[20px] space-x-[10px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[16px] 2xl:text-[16px] xl:text-[14px]",
                                                        style: BoldText,
                                                        children: "Want to accept?"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex space-x-[21px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: ()=>HanldeAccept(res),
                                                                onMouseEnter: ()=>setHoveredProfile(index),
                                                                onMouseLeave: ()=>setHoveredProfile(null),
                                                                className: `${hoveredProfile === index ? "bg-custom-gradient" : ""}  cursor-pointer w-[40px]  h-[40px] grid place-items-center rounded-full border-[1px] border-[#0F52BA]`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "12",
                                                                    viewBox: "0 0 18 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M5.65147 12L0 6.34853L0.637477 5.73308L5.65147 10.747L16.3765 0L17.014 0.637506L5.65147 12Z",
                                                                        fill: hoveredProfile === index ? "white" : "black"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: ()=>HanldeReject(res),
                                                                onMouseEnter: ()=>sethoveredRejectButton(index),
                                                                onMouseLeave: ()=>sethoveredRejectButton(null),
                                                                className: `${hoveredRejectButton === index ? "bg-custom-gradient" : ""} w-[40px] h-[40px] grid place-items-center rounded-full border-[1px] border-[#0F52BA]`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    className: "SVG-hover",
                                                                    width: "12",
                                                                    height: "12",
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M0.529793 12L0 11.4702L5.47021 6L0 0.529793L0.529793 0L6 5.47021L11.4702 0L12 0.529793L6.52979 6L12 11.4702L11.4702 12L6 6.52979L0.529793 12Z",
                                                                        fill: hoveredRejectButton === index ? "white" : "black"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index);
                    })
                })
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Error_ProfileDataNotFound__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                ProfileData: data?.data
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Request);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;