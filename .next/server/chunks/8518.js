"use strict";
exports.id = 8518;
exports.ids = [8518];
exports.modules = {

/***/ 38518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84715);
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);




const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\seting\\comp\\Sidebar2.js -> " + "react-select"
        ]
    },
    ssr: false
});




function Icon({ id, open }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 2,
        stroke: "currentColor",
        className: `${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        })
    });
}
function Sidebar2() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const handleOpen = (value)=>setOpen(open === value ? 0 : value);
    const [openDialog, setopenDialog] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setopenDialog(true);
    };
    const handleClose = ()=>{
        setopenDialog(false);
    };
    const customStyles = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
                width: "300px",
                height: "50px",
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                borderColor: state.isFocused ? "black" : provided.borderColor,
                "&:hover": {
                    borderColor: "black"
                },
                boxShadow: state.isFocused ? "none" : provided.boxShadow
            }),
        indicatorSeparator: (provided)=>({
                ...provided,
                display: "none",
                paddingRight: "20px"
            })
    };
    const options = [
        {
            value: "option1",
            label: "Option 1"
        },
        {
            value: "option2",
            label: "Option 2"
        },
        {
            value: "option3",
            label: "Option 3"
        }
    ];
    const [toggle, settoggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hide");
    const [deleteToggle, setdeleteToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const Text1 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Text2 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full grid place-items-center ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[85%]  xl:mt-[90px]  md:hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: " text-[16px]  text-[#716969] font-medium",
                                    children: "Account Setting"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    width: 30,
                                    height: 30,
                                    onClick: ()=>router.back(),
                                    className: "cursor-pointer w-[30px] h-[30px]",
                                    src: "/assests/common/arrow-back.svg"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[30px] ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                                open: open === 1,
                                style: {
                                    borderBottom: "1px solid  #E0E0E0"
                                },
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                    id: 1,
                                    open: open
                                }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionHeader, {
                                        className: "border-none text-[16px] font-medium",
                                        onClick: ()=>handleOpen(1),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-[30px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "18",
                                                    height: "14",
                                                    viewBox: "0 0 18 14",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        id: "Vector",
                                                        d: "M7.09638 5.82178C6.30995 5.82178 5.64996 5.5471 5.11641 4.99772C4.58286 4.44835 4.31608 3.75274 4.31608 2.91089C4.31608 2.08752 4.58286 1.39653 5.11641 0.83792C5.64996 0.279306 6.30995 0 7.09638 0C7.8828 0 8.54279 0.279306 9.07634 0.83792C9.6099 1.39653 9.87667 2.08752 9.87667 2.91089C9.87667 3.75274 9.6099 4.44835 9.07634 4.99772C8.54279 5.5471 7.8828 5.82178 7.09638 5.82178ZM0 13.6119V12.3089C0 11.8284 0.114742 11.431 0.344227 11.1168C0.573712 10.8026 0.909113 10.5347 1.35043 10.3129C2.32133 9.85083 3.22161 9.49967 4.05129 9.25941C4.88097 9.01914 5.89599 8.89901 7.09638 8.89901H7.29497C7.35675 8.89901 7.42295 8.88977 7.49356 8.87129C7.45826 9.00066 7.43178 9.11155 7.41412 9.20396C7.39647 9.29637 7.37882 9.39802 7.36117 9.50891H7.09638C5.98426 9.50891 5.01336 9.60594 4.18368 9.8C3.35401 9.99406 2.50668 10.3406 1.6417 10.8396C1.21803 11.0614 0.935592 11.2878 0.79437 11.5188C0.653149 11.7498 0.582538 12.0132 0.582538 12.3089V13.002H7.38765C7.4053 13.0944 7.43178 13.196 7.46708 13.3069C7.50239 13.4178 7.53769 13.5195 7.573 13.6119H0ZM13.9544 14L13.875 12.7802C13.522 12.7248 13.1865 12.6046 12.8688 12.4198C12.5511 12.235 12.2863 12.004 12.0744 11.7267L11.0682 12.1426L10.9094 11.8931L11.8096 11.1723C11.6861 10.8766 11.6243 10.5347 11.6243 10.1465C11.6243 9.75842 11.6861 9.40726 11.8096 9.09307L10.9358 8.34455L11.0947 8.09505L12.0744 8.53861C12.2686 8.2429 12.529 8.00726 12.8556 7.83168C13.1821 7.65611 13.522 7.54059 13.875 7.48515L13.9544 6.26535H14.2722L14.3516 7.48515C14.687 7.54059 15.018 7.65611 15.3446 7.83168C15.6712 8.00726 15.9404 8.23366 16.1522 8.51089L17.1319 8.09505L17.2643 8.31683L16.3905 9.06535C16.5317 9.40386 16.6023 9.7611 16.6023 10.1371C16.6023 10.513 16.5317 10.8581 16.3905 11.1723L17.2908 11.8931L17.1584 12.1426L16.1522 11.7267C15.9227 12.004 15.6491 12.235 15.3313 12.4198C15.0136 12.6046 14.687 12.7248 14.3516 12.7802L14.2722 14H13.9544ZM14.0892 12.0871C14.6349 12.0871 15.0798 11.9015 15.424 11.5302C15.7683 11.1589 15.9404 10.6969 15.9404 10.1441C15.9404 9.57277 15.7675 9.10693 15.4217 8.74653C15.0759 8.38614 14.6302 8.20594 14.0845 8.20594C13.5565 8.20594 13.1159 8.38696 12.7629 8.749C12.4098 9.11102 12.2333 9.57769 12.2333 10.149C12.2333 10.7018 12.4106 11.163 12.7652 11.5327C13.1198 11.9023 13.5612 12.0871 14.0892 12.0871ZM7.09638 5.21188C7.71422 5.21188 8.23497 4.99472 8.65864 4.5604C9.0823 4.12607 9.29413 3.57624 9.29413 2.91089C9.29413 2.26403 9.0823 1.71881 8.65864 1.27525C8.23497 0.831683 7.71422 0.609901 7.09638 0.609901C6.47853 0.609901 5.95778 0.831683 5.53411 1.27525C5.11045 1.71881 4.89862 2.26403 4.89862 2.91089C4.89862 3.57624 5.11045 4.12607 5.53411 4.5604C5.95778 4.99472 6.47853 5.21188 7.09638 5.21188Z",
                                                        fill: "#000"
                                                    })
                                                })
                                            }),
                                            "Credentials"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionBody, {
                                        className: "text-[14px] font-normal",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]",
                                                children: "See information about your account, download an archive of your data, or learn about your account deactivation options"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%] h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-[15px] xl:mt-[20px] flex  ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "text-[15px] xl:text-[16px] mb-[5px] w-[95%]  font-medium",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                width: 20,
                                                                height: 20,
                                                                src: "/assests/dashboard/icon/edit-details-icon.svg"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                            className: "focus:outline-none  text-[14px] w-[95%] ",
                                                            type: "email",
                                                            variant: "static",
                                                            placeholder: "jit*****@gmail.com"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[15px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-[20px] flex  ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "text-[15px] xl:text-[16px] mb-[5px] w-[95%]  font-medium",
                                                                children: "Password"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                width: 20,
                                                                height: 20,
                                                                src: "/assests/dashboard/icon/edit-details-icon.svg"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                        className: "focus:outline-none text-[14px] w-[95%] ",
                                                        type: "passwoed",
                                                        variant: "static",
                                                        placeholder: "***"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[15px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-[20px] flex  ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "text-[15px] xl:text-[16px] mb-[5px] w-[95%] font-medium",
                                                                children: "Mobile Number"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                width: 20,
                                                                height: 20,
                                                                src: "/assests/dashboard/icon/edit-details-icon.svg"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                            className: "text-[14px] w-[95%] focus:outline-none  ",
                                                            type: "contact number",
                                                            variant: "static",
                                                            placeholder: "****902"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[15px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                                open: open === 2,
                                style: {
                                    borderBottom: "1px solid  #E0E0E0"
                                },
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                    id: 2,
                                    open: open
                                }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionHeader, {
                                        className: "border-none text-[16px] font-medium",
                                        onClick: ()=>handleOpen(2),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-[30px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    width: 22,
                                                    height: 14,
                                                    src: "/assests/dashboard/seting/delete-profile-icon.svg"
                                                })
                                            }),
                                            "Hide/Delete Profile"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionBody, {
                                        className: "text-[14px] font-normal",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]",
                                                children: "See information about your account, download an archive of your data, or learn about your account deactivation options"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "hidden mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[20px] xl:mt-[25px] w-[270px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mt-[20px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                        className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                                                                        children: "Hide Profile"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                        className: "text-[14px] xl:text-[14px] font-medium",
                                                                        children: [
                                                                            "Your Profile is currently",
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-[#0F52BA]",
                                                                                children: "Visible"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-[20px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "h-[32px] lg:h-[45px] xl:h-[50px] rounded-full absolute right-2 xl:right-[80px] mt-[-70px]",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "relative flex left-0 lg:left-[80px]",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                onClick: ()=>settoggle("hide"),
                                                                                className: `${toggle === "hide" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"}  w-[90px] h-[40px] rounded-[8px] `,
                                                                                children: "Hide"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                onClick: ()=>settoggle("show"),
                                                                                className: `${toggle === "show" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"} w-[90px] h-[40px] rounded-[8px] `,
                                                                                children: "Show"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    toggle == "hide" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-[50px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "text-[14px] xl:text-[16px]  font-medium",
                                                                children: "How long would you like to hide your Profile for?"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "w-full lg:w-[640px] xl:w-[698px] mt-[10px] text-[12px] font-medium text-[#949494]",
                                                                children: "Hiding your Profile will make it invisible temporarily. Other members will not be able to send you Invitations or Messages or chat."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-[10px] w-[250px] h-[50px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicSelect, {
                                                                    className: "bg-[#F9F9F9] h-[50px] w-full flex justify-end",
                                                                    styles: customStyles,
                                                                    Label: "S",
                                                                    options: options
                                                                })
                                                            })
                                                        ]
                                                    }) : "",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: " mt-[30px] xl:mt-[40px] w-[370px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-[20px] flex place-items-center mb-[300px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "text-[15px] xl:text-[16px] font-medium mb-[5px] ",
                                                                children: "Hide Profile"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "absolute right-2 xl:right-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>setdeleteToggle(!deleteToggle),
                                                                    className: `text-[14px] xl:text-[16px] font-medium w-[150px] xl:w-[190px] h-[45px] mt-[5px]  rounded-[10px] ${!deleteToggle ? "bg-[#D90202] text-[#FFF]" : "bg-[#F9F9F9] text-[#000]"}`,
                                                                    children: "Delete My Profile"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "absolute mt-[200px] ",
                                                                children: deleteToggle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-[13px] xl:text-[14px] font-medium",
                                                                            children: " Let us know why you wish to delete your Profile? "
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                            className: "select mt-[25px] relative  px-[20px] focus:outline-none border-1 bg-[#F9F9F9]  border-[#CDCDCD] w-[370px] lg:w-[640px] xl:w-[700px]  h-[50px] rounded-[8px]",
                                                                            variant: "static",
                                                                            Label: "Select",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                children: "Found my Match on RishtaForever.com"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: " mt-[20px] xl:mt-[30px] w-full lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "absolute  right-0",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    onClick: handleClickOpen,
                                                                                    className: " w-[160px] xl:w-[190px] h-[50px] mt-[30px] rounded-[10px] bg-[#0F52BA]",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                        className: " text-[14px] xl:text-[16px] font-medium text-[#fff]",
                                                                                        children: "Proceed to Delete"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                    open: openDialog,
                                                                                    onClose: handleClose,
                                                                                    "aria-labelledby": "alert-dialog-title",
                                                                                    "aria-describedby": "alert-dialog-description",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "flex flex-col space-y-[40px] justify-center w-[370px] h-[264px] rounded-[10px] border-[1px] border-[#DDD] bg-[#FFF]",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                                        style: Text1,
                                                                                                        children: "Are you sure want"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        style: Text2,
                                                                                                        children: "Delete Your Profile?"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                className: "text-center space-x-[20px]",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "bg-[#F0F0F0] w-[126px] h-[50px] rounded-[8px]",
                                                                                                        onClick: handleClose,
                                                                                                        children: "Not Now"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "bg-[#0F52BA] w-[126px] h-[50px] text-[#FFF] rounded-[8px]",
                                                                                                        onClick: handleClose,
                                                                                                        children: "Yes, Delete "
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }) : null
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                                open: open === 3,
                                style: {
                                    borderBottom: "1px solid  #E0E0E0"
                                },
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                    id: 3,
                                    open: open
                                }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionHeader, {
                                        className: "border-none text-[16px] font-medium",
                                        onClick: ()=>handleOpen(3),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-[30px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    width: 14,
                                                    height: 14,
                                                    src: "/assests/dashboard/seting/email-alert.svg"
                                                })
                                            }),
                                            "Privacy Setting"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionBody, {
                                        className: "text-[14px] font-normal",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]",
                                                children: "See information about your account, download an archive of your data, or learn about your account deactivation options"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[15px]  font-medium mb-[5px]",
                                                        children: "Select Display Name"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mt-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-center items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "w-[15.5px]  h-[15.5px] ",
                                                                        type: "radio",
                                                                        id: "Rihan Gajjar",
                                                                        name: "os"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        for: "Rihan Gajjar",
                                                                        className: "ml-[10px] text-[13px]   ",
                                                                        children: "Rihan Gajjar"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "ml-[150px] sm:ml-[200px]  flex justify-center items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "w-[15.5px]   h-[15.5px] ",
                                                                        type: "radio",
                                                                        id: "Rihan G",
                                                                        name: "os"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        for: "Rihan G",
                                                                        className: "ml-[10px] text-[13px]   ",
                                                                        children: "R Gajjar"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex mt-[10px]",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-center items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "w-[15.5px]   h-[15.5px] ",
                                                                        type: "radio",
                                                                        id: "R Gajjar",
                                                                        name: "os"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        for: "R Gajjar",
                                                                        className: "ml-[10px] text-[13px]   ",
                                                                        children: "Rihan G"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "ml-[179px] sm:ml-[229px]   flex justify-center items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "w-[15.5px]   h-[15.5px] ",
                                                                        type: "radio",
                                                                        id: "Profile ID",
                                                                        name: "os"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        for: "Profile ID",
                                                                        className: "ml-[10px] text-[13px]   ",
                                                                        children: "Profile ID: SH00289943"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                                                        children: "Who can see your mobile Number?"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[20px] flex",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                    type: "radio",
                                                                    id: "mobile1",
                                                                    name: "mobile number"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    for: "Profile",
                                                                    className: "ml-[10px] text-[13px] xl:text-[14px]  ",
                                                                    children: "Visible to all"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[10px] flex",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                    type: "radio",
                                                                    id: " mobile2",
                                                                    name: "mobile number"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    for: " Privacy",
                                                                    className: "ml-[10px] text-[13px] xl:text-[14px]  ",
                                                                    children: "Only visible to registered Members"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%] h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                                                        children: "Who can see your email address?"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[20px] flex",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                    type: "radio",
                                                                    id: "email1",
                                                                    name: "email address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    for: "Profile",
                                                                    className: "ml-[10px] text-[13px] xl:text-[14px]  ",
                                                                    children: "Visible to all"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[10px] flex",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                    type: "radio",
                                                                    id: " email2",
                                                                    name: "email address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    for: " Privacy",
                                                                    className: "ml-[10px] text-[13px] xl:text-[14px]  ",
                                                                    children: "Only visible to registered Members"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-[15px] xl:text-[16px] font-medium mb-[5px]",
                                                        children: "Profile Privacy"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[10px] flex",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                    type: "radio",
                                                                    id: "Profile",
                                                                    name: "profile privacy"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    for: "Profile",
                                                                    className: "ml-[10px] text-[13px] xl:text-[14px] mt-[12px] ",
                                                                    children: [
                                                                        "Visible to all, including unregistered visitors",
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-[10px]",
                                                                            children: "(Photo and Name will not be visible on Profile)"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-[10px] flex",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    className: "w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]",
                                                                    type: "radio",
                                                                    id: " Privacy",
                                                                    name: "profile privacy"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    for: " Privacy",
                                                                    className: "ml-[10px] text-[13px] xl:text-[14px]  ",
                                                                    children: "Only visible to registered Members"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                                open: open === 4,
                                style: {
                                    borderBottom: "1px solid  #E0E0E0"
                                },
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                    id: 4,
                                    open: open
                                }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionHeader, {
                                        className: "border-none text-[16px] font-medium",
                                        onClick: ()=>handleOpen(4),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-[30px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    width: 11,
                                                    height: 14,
                                                    src: "/assests/dashboard/seting/privacy-icon.svg"
                                                })
                                            }),
                                            "Email/SMS Alert Setting"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.AccordionBody, {
                                        className: "text-[14px] font-normal",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]",
                                                children: "See information about your account, download an archive of your data, or learn about your account deactivation options"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px] w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[25px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[15px] xl:text-[16px] font-medium ",
                                                    children: "My Alerts Manager"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "w-[580px] lg:w-[640px] xl:w-[700px] text-[11px] xl:text-[12px]  font-medium mt-[10px]",
                                                children: "Manage your subscriptions to HappyMilan.com alerts on email listed below."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[25px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[15px] xl:text-[16px] font-medium ",
                                                    children: "Match Mail & Photo Match Mail"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-[20px] flex ",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] ",
                                                            type: "checkbox",
                                                            id: "send",
                                                            name: "mail"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            for: "send",
                                                            className: "ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px] font-medium  ",
                                                            children: "Send me Broader Matches if there are no new Preferred Matches"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " mt-[25px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[16px] font-medium ",
                                                    children: "Email Alert"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px]  flex ",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: " flex justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] ",
                                                                type: "radio",
                                                                id: "Daily",
                                                                name: "hello"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                for: "Daily",
                                                                className: "ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px] font-medium ",
                                                                children: "Daily"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "ml-[200px]  flex justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] ",
                                                                type: "radio",
                                                                id: "Tri-Weekly",
                                                                name: "hello"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                for: "Tri-Weekly",
                                                                className: "ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ",
                                                                children: "Tri-Weekly"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-[20px] flex ",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: " flex justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] ",
                                                                type: "radio",
                                                                id: "Weekly",
                                                                name: "hello"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                for: "Weekly",
                                                                className: "ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ",
                                                                children: "Weekly"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "ml-[189px] xl:ml-[188px] flex justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] rounded-none ",
                                                                type: "radio",
                                                                id: "Unsubscribe",
                                                                name: "hello"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                for: "Unsubscribe",
                                                                className: "ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ",
                                                                children: "Unsubscribe"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar2);


/***/ })

};
;