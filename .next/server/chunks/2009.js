"use strict";
exports.id = 2009;
exports.ids = [2009];
exports.modules = {

/***/ 22009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70554);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50228);
/* harmony import */ var _utils_icons_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26725);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_7__]);
_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* __next_internal_client_entry_do_not_use__ default auto */ 












function CommonNavbar({ background }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const isBlogActive = router.pathname.startsWith("/blog");
    const isSuccessActive = router.pathname.startsWith("/successstories");
    const isLoginActive = router.pathname.startsWith("/login");
    const { darkMode, toggleDarkMode } = (0,_ContextProvider_DarkModeContext__WEBPACK_IMPORTED_MODULE_9__/* .useDarkMode */ .v)();
    const myProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)((state)=>state.myprofile?.data);
    const befText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const aftText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const MenuNameText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "22px"
    };
    const MenuIDText = {
        color: "#50545A",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px"
    };
    const MenuLinkText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [openLogoutModal, setOpenLogoutModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    const handleClickOpenLogout = ()=>{
        setOpenLogoutModal(true);
    };
    const handleCloseLogout = ()=>{
        setOpenLogoutModal(false);
    };
    const HandleLogout = (e)=>{
        if (e.target.name === "stay") {
            setOpenLogoutModal(false);
        } else {
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__/* .logoutuser */ .rS)());
            router.push("/login");
        }
    };
    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    };
    const Text4 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const [openNav, setOpenNav] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        window.addEventListener("resize", ()=>window.innerWidth >= 960 && setOpenNav(false));
    }, []);
    const [token, settoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        settoken((0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookie)("jwtToken"));
    }, []);
    const [OpenProfileModal, setOpenProfileModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const HandleOpenMenu = ()=>{
        setOpenProfileModal(true);
    };
    const handleClose = ()=>{
        setOpenProfileModal(false);
    };
    const BoxSdow2 = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
    };
    const MobileNavList = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: "p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]",
                style: {
                    color: `${router.pathname === "/aboutus" ? "#0F52BA" : ""}`,
                    backgroundColor: `${router.pathname === "/aboutus" ? "rgba(15, 82, 186, 0.05)" : ""}`,
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    style: {
                        color: `${router.pathname === "/aboutus" ? "#0F52BA" : "#000"}`
                    },
                    href: "/aboutus",
                    className: "flex items-center",
                    children: "About Happy Milan"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                className: "p-1 lg:w-[62px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]",
                style: {
                    color: `${isBlogActive ? "#0F52BA" : ""}`,
                    backgroundColor: `${isBlogActive ? "rgba(15, 82, 186, 0.05)" : ""}`,
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    style: {
                        color: `${isBlogActive ? "#0F52BA" : "#000"}`
                    },
                    href: "/blog",
                    className: "flex items-center",
                    children: "Blogs"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: "p-1 font-normal rounded-[10px] ",
                style: {
                    color: `${isSuccessActive ? "#0F52BA" : ""}`,
                    backgroundColor: `${isSuccessActive ? "rgba(15, 82, 186, 0.05)" : ""}`,
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    style: {
                        color: `${isSuccessActive ? "#0F52BA" : "#000"}`
                    },
                    href: "/successstories",
                    className: "flex items-center",
                    children: "Success Stories"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: "p-1 font-normal rounded-[10px] rounded-[10px]",
                style: {
                    color: `${isLoginActive ? "#0F52BA" : ""}`,
                    backgroundColor: `${isLoginActive ? "rgba(15, 82, 186, 0.05)" : ""}`,
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/login",
                    className: "flex items-center",
                    style: {
                        color: `${isLoginActive ? "#0F52BA" : "#000"}`
                    },
                    children: [
                        "Member Login",
                        " ",
                        !isLoginActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            loading: "lazy",
                            width: 16,
                            height: 16,
                            alt: "icon",
                            src: "/assests/Black/Vector.svg",
                            className: "mr-4  relative left-[15px]"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "mr-4  relative left-[15px]",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                id: "Vector",
                                d: "M2.77895 12.7773C3.61998 12.1976 4.45669 11.7482 5.28907 11.4292C6.12146 11.1101 7.02511 10.9506 8 10.9506C8.97489 10.9506 9.8807 11.1101 10.7174 11.4292C11.5541 11.7482 12.393 12.1976 13.234 12.7773C13.8462 12.068 14.3009 11.3191 14.5984 10.5305C14.8958 9.7419 15.0445 8.8984 15.0445 8C15.0445 6.0135 14.3671 4.34278 13.0122 2.98784C11.6572 1.63292 9.9865 0.955456 8 0.955456C6.0135 0.955456 4.34278 1.63292 2.98784 2.98784C1.63292 4.34278 0.955455 6.0135 0.955455 8C0.955455 8.8984 1.10633 9.7419 1.40809 10.5305C1.70984 11.3191 2.1668 12.068 2.77895 12.7773ZM7.99543 8.47773C7.23842 8.47773 6.60162 8.2179 6.08503 7.69825C5.56842 7.17862 5.31012 6.54029 5.31012 5.78328C5.31012 5.02628 5.56994 4.38948 6.08959 3.87287C6.60923 3.35628 7.24756 3.09799 8.00457 3.09799C8.76158 3.09799 9.39838 3.35781 9.91497 3.87744C10.4316 4.39708 10.6899 5.0354 10.6899 5.79242C10.6899 6.54943 10.4301 7.18623 9.91041 7.70282C9.39077 8.21943 8.75244 8.47773 7.99543 8.47773ZM8.00985 16C6.90099 16 5.8607 15.7911 4.88896 15.3733C3.91724 14.9555 3.06839 14.383 2.34241 13.6559C1.61644 12.9287 1.04455 12.0815 0.626738 11.1142C0.208913 10.1469 0 9.10834 0 7.99844C0 6.88854 0.208913 5.85047 0.626738 4.88422C1.04455 3.91796 1.61701 3.07126 2.34413 2.34413C3.07126 1.61702 3.91847 1.04455 4.88576 0.626739C5.85306 0.208913 6.89166 0 8.00156 0C9.11145 0 10.1495 0.208913 11.1158 0.626739C12.082 1.04455 12.9287 1.61702 13.6559 2.34413C14.383 3.07126 14.9555 3.91819 15.3733 4.8849C15.7911 5.85161 16 6.88669 16 7.99015C16 9.09901 15.7911 10.1393 15.3733 11.111C14.9555 12.0828 14.383 12.9316 13.6559 13.6576C12.9287 14.3836 12.0818 14.9555 11.1151 15.3733C10.1484 15.7911 9.11331 16 8.00985 16ZM8 15.0445C8.78272 15.0445 9.55466 14.9201 10.3158 14.6713C11.0769 14.4224 11.7938 14.02 12.4664 13.464C11.7938 12.9695 11.0815 12.5862 10.3296 12.3142C9.5776 12.0421 8.80108 11.9061 8 11.9061C7.19892 11.9061 6.42105 12.0408 5.66639 12.3101C4.91172 12.5795 4.20349 12.9641 3.54169 13.464C4.20889 14.02 4.92307 14.4224 5.6842 14.6713C6.44534 14.9201 7.21727 15.0445 8 15.0445ZM8.00114 7.52227C8.50456 7.52227 8.9193 7.35888 9.24535 7.03208C9.5714 6.70527 9.73443 6.29016 9.73443 5.78673C9.73443 5.28329 9.57102 4.86855 9.24421 4.5425C8.91742 4.21645 8.5023 4.05342 7.99886 4.05342C7.49544 4.05342 7.0807 4.21683 6.75465 4.54363C6.4286 4.87043 6.26557 5.28554 6.26557 5.78898C6.26557 6.29241 6.42898 6.70715 6.75579 7.0332C7.08258 7.35925 7.4977 7.52227 8.00114 7.52227Z",
                                fill: "#0F52BA"
                            })
                        })
                    ]
                })
            })
        ]
    });
    const LoginText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const navList = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: ` ${router.pathname == "/aboutus" ? "bg-[#F2F7FF]" : "hover:bg-[#F2F7FF] "} p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    style: router.pathname == "/aboutus" ? aftText : befText,
                    href: "/aboutus",
                    className: "flex items-center",
                    children: "About Happy Milan"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                className: "hover:bg-[#F2F7FF] p-1 lg:w-[55px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    style: isBlogActive ? aftText : befText,
                    href: "/blog",
                    className: "flex items-center",
                    children: "Blogs"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                id: "nav-links",
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: ` ${isSuccessActive ? "bg-[#F2F7FF]" : "hover:bg-[#F2F7FF]"}  p-1 lg:grid place-items-center font-normal poppins lg:h-[30px] rounded-[17px]`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    style: isSuccessActive ? aftText : befText,
                    href: "/successstories",
                    className: "flex items-center pl-[5px] pr-[5px]",
                    children: "Success Stories"
                })
            }),
            !token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                    id: "nav-links",
                    as: "li",
                    variant: "small",
                    color: "blue-gray",
                    className: "p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]",
                    style: {
                        color: `${isLoginActive ? "#0F52BA" : ""}`,
                        backgroundColor: `${isLoginActive ? "rgba(15, 82, 186, 0.05)" : ""}`,
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/login",
                            passHref: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                style: LoginText,
                                id: "grad-button",
                                className: "flex items-center justify-evenly rounded-full w-[92px] h-[39px]",
                                children: [
                                    "Login",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        loading: "lazy",
                                        width: 18,
                                        height: 18,
                                        alt: "icon",
                                        src: "/assests/Black/Vector-2.svg",
                                        className: ""
                                    })
                                ]
                            })
                        })
                    })
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: HandleOpenMenu,
                        className: "cursor-pointer h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            size: 30
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Modal, {
                        id: "fade-menu",
                        MenuListProps: {
                            "aria-labelledby": "fade-button"
                        },
                        BackdropProps: {
                            style: {
                                opacity: 0
                            }
                        },
                        open: OpenProfileModal,
                        onClose: handleClose,
                        sx: {
                            outline: "none"
                        },
                        style: {
                            outline: "none",
                            position: "absolute",
                            right: "50px",
                            top: "70px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                            sx: {
                                outline: "none"
                            },
                            className: "absolute right-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-[20px] w-[278px] h-[296px]",
                                style: BoxSdow2,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-evenly h-full pl-[24px] pr-[24px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-[-10px] space-y-[10px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                    size: 60
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "relative left-[5px] space-y-[5px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    style: MenuNameText,
                                                                    children: myProfile?.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: MenuIDText,
                                                                    children: [
                                                                        "ID: ",
                                                                        myProfile?.userUniqueId?.toUpperCase()
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-[1px] w-[90%] bg-[#EBEBEB]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                onClick: ()=>router.push("/longterm/dashboard"),
                                                className: "hover:bg-[#F3F8FF] dark:hover:bg-[#18191a] rounded-[100px] p-[10px] cursor-pointer flex space-x-[15px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: darkMode ? _utils_icons_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.myprofile.dark : _utils_icons_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.myprofile.light
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            style: MenuLinkText,
                                                            children: "Dashboard"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: handleClickOpenLogout,
                                            className: " flex justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                id: darkMode ? "Gradient-logout-btn-2" : "",
                                                className: "w-[230px] h-[44px] border-[1px] border-[#EBEBEB] text-[black] dark:text-[#FFF] dark:bg-[#141516] dark:border-[1px] dark:border-[#FFF] bg-[#FFF] hover:bg-[#F3F8FF] rounded-[22px]",
                                                style: Text4,
                                                children: "Log Out"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Dialog, {
                                            open: openLogoutModal,
                                            onClose: handleCloseLogout,
                                            "aria-labelledby": "alert-dialog-title",
                                            "aria-describedby": "alert-dialog-description",
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.DialogContent, {
                                                    className: "text-center w-[400px] mt-[20px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        id: "alert-dialog-description",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: LogoutModalText,
                                                            children: " Are you sure you want to exit?"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-evenly p-[20px] mb-[20px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: HandleLogout,
                                                                name: "stay",
                                                                id: "grad-button",
                                                                className: "rounded-[23px] w-[122px] h-[50px]",
                                                                children: "Stay"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: HandleLogout,
                                                                name: "exit",
                                                                className: "border-[#8225AF] hover:bg-[#F3F8FF] border-[1px] rounded-[23px] w-[122px] h-[50px]",
                                                                children: "Log out"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.AppBar, {
            sx: {
                boxShadow: "none"
            },
            className: `z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `,
            style: {
                backgroundColor: background ? background : "#FFF"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                            className: "mr-4 cursor-pointer py-1.5 lg:ml-[50px] font-medium",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: [
                                    "  ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        loading: "lazy",
                                        width: 148,
                                        height: 36,
                                        alt: "logo",
                                        src: "/heroSec/Happy-milan2.svg"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${token ? "w-[100%]" : "w-[100%]"} hidden lg:block `,
                                    children: navList
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                    variant: "text",
                                    className: "ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",
                                    ripple: false,
                                    onClick: ()=>setOpenNav(!openNav),
                                    children: openNav ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        className: "h-6 w-6",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        style: {
                                            color: "black"
                                        },
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        style: {
                                            color: "black"
                                        },
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Collapse, {
                    open: openNav,
                    children: MobileNavList
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonNavbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;