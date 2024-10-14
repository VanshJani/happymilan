"use strict";
exports.id = 2737;
exports.ids = [2737];
exports.modules = {

/***/ 31929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Counter = ({ from, to, duration = 6 })=>{
    const [hasAnimated, setHasAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const springConfig = {
        duration: duration * 1000,
        stiffness: 300,
        damping: 30
    };
    const count = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(from, springConfig);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !hasAnimated) {
                count.set(to);
                setHasAnimated(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.1
        });
        observer.observe(ref.current);
        return ()=>observer.disconnect();
    }, [
        count,
        to,
        hasAnimated
    ]);
    const animatedValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(count, (value)=>Math.round(value));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        style: {
            fontSize: "2rem",
            fontWeight: "bold"
        },
        children: animatedValue
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



function Slider() {
    const [renderKey, setRenderKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRenderKey((prevKey)=>prevKey + 1);
    }, []);
    const row2 = [
        "/heroSec/slider/upi-logo.svg",
        "/heroSec/slider/phonepe-logo.svg",
        "/heroSec/slider/visa-logo.svg",
        "/heroSec/slider/g-pay-logo.svg",
        "/heroSec/slider/master-card-logo.svg"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Marquee, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarqueeGroup2, {
                        children: row2.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageGroup, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                                    src: el
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarqueeGroup2, {
                        children: row2.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageGroup, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                                    src: el
                                })
                            }, index))
                    })
                ]
            })
        })
    }, renderKey);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);
const AppContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Marquee = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;
const scrollX = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const common = styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;
const MarqueeGroup2 = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;
const ImageGroup = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: grid;
  place-items: center;
`;
const Image = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
`;


/***/ }),

/***/ 19548:
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
/* harmony import */ var _components_common_animation_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31929);
/* harmony import */ var _components_common_animation_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94074);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_Features_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65308);
/* harmony import */ var _layout_GlobalFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43307);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_animation_Counter__WEBPACK_IMPORTED_MODULE_3__]);
_components_common_animation_Counter__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function NewLand() {
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Show button when page is scrolled up to a certain height
        const toggleVisibility = ()=>{
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const GradientTextLi = (styled_components__WEBPACK_IMPORTED_MODULE_9___default().li)`
     fontFamily: "Poppins",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px", /* 159.091% */
        background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent', // Ensure text color is transparent
    `;
    const GradientText = {
        fontFamily: "Poppins",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px",
        /* 159.091% */ background: "linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent"
    };
    const GradientText2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px",
        /* 129.63% */ background: "linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)",
        backgroundClip: "text",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent"
    };
    const ContentText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Bgcolor = {
        background: "linear-gradient(285deg, #8225AF -2.3%, #0F52BA 106.84%)"
    };
    const List = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Text1 = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineWeight: "70px"
    };
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const TitleText3 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px" /* 109.375% */ 
    };
    const MonthPlan = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Price = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    };
    const PaymentList = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const ProductName = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    };
    const ProductList = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px"
    };
    const AccordingBodyList = (styled_components__WEBPACK_IMPORTED_MODULE_9___default().ul)`
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
    const profilesData = [
        {
            id: 1,
            name: "long-term",
            title: "Long Term",
            content: "By creating this profile, you can find compatible partners for marriage and lifelong companionship",
            image: "/heroSec/longTerm-img.jpg"
        },
        {
            id: 2,
            name: "dating",
            title: "Dating",
            content: "By creating this profile, you can discover profiles for casual relationships",
            image: "/heroSec/profiles/dating-img.jpg"
        },
        {
            id: 3,
            name: "friendship",
            title: "Friendship",
            content: "By creating this profile, you can find friends and connect with groups for trips and activities.",
            image: "/heroSec/profiles/friendship-img.jpg"
        }
    ];
    const [activeProfile, setActiveProfile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(profilesData[0]); // Start with the first profile
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    // Handle manual change
    const handleProfileChange = (index)=>{
        if (index >= 0 && index < profilesData.length) {
            setCurrentIndex(index);
            setActiveProfile(profilesData[index]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>{
                const nextIndex = (prevIndex + 1) % profilesData.length;
                setActiveProfile(profilesData[nextIndex]);
                return nextIndex;
            });
        }, 4000); // Change every 5 seconds
        return ()=>clearInterval(interval); // Clear interval on component unmount
    }, []);
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [ProfileType, SetProfileType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setToken((0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("jwtToken"));
        SetProfileType((0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("UserProfile"));
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const GotoLogin = ()=>{
        if (!token) {
            router.push("/login");
        } else {
            if (ProfileType == "dating") {
                router.push("/dating/dashboard");
            } else {
                router.push("/longterm/dashboard");
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${isVisible ? "fixed" : "hidden"} bottom-10 right-10`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    id: "grad-button",
                    onClick: scrollToTop,
                    className: "Scroll-Top-Btn",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            height: "1.2em",
                            className: "Scroll-top-arrow",
                            viewBox: "0 0 512 512",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "Scroll-Top-text",
                            children: "Back to Top"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[100px] w-full h-full bg-[#FFF]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-[40px] 2xl:space-y-[40px] xl:space-y-[20px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-[55px] 2xl:space-y-[55px] xl:space-y-[45px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-black text-center font-poppins font-bold leading-[50px] 2xl:text-[54px] xl:text-[40px] text-[40px]",
                                    children: "Single App, Multiple Choices. "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "flex justify-center space-x-[20px]",
                                        children: profilesData.map((profile, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>handleProfileChange(index),
                                                    name: profile?.name,
                                                    className: `text-center font-poppins font-normal leading-normal 2xl:w-[134px] 2xl:h-[50px] xl:w-[120px] xl:h-[40px] w-[134px] h-[50px] 2xl:text-[16px] xl:text-[14px] text-[16px]  rounded-[32px]  border-[1px] border-[#000] ${index == currentIndex ? "bg-[#000] text-[#FFF]" : " text-[#000] bg-[#FFF] hover:bg-[#EFF5FF] hover:text-[#000]"}`,
                                                    children: profile?.title
                                                })
                                            });
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between pr-[0px] 2xl:pl-[200px] xl:pl-[160px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-[20px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "w-full space-y-[23px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        style: GradientText,
                                                        children: activeProfile?.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "w-[483px]",
                                                        style: ContentText,
                                                        children: activeProfile?.content
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "space-x-[25px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: GotoLogin,
                                                                id: "grad-button",
                                                                className: "w-[158px] h-[50px] rounded-[32px]",
                                                                children: token ? "Explore Now" : "Create Profile"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>router.push("/longterm/features"),
                                                                className: "w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]",
                                                                children: "Learn More"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                width: 0,
                                                height: 0,
                                                alt: "img-1",
                                                src: activeProfile?.image,
                                                loading: "lazy",
                                                className: `w-[auto] 2xl:h-[385px] xl:h-[330px] h-[300px] relative right-[80px]`
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: Bgcolor,
                                    className: "w-[100%] h-[553px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-evenly items-center pt-[115px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "space-y-[26px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "w-[400px] 2xl:text-[54px] xl:text-[40px] text-[40px]",
                                                            style: Text1,
                                                            children: [
                                                                "India’s ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                "  Most Secured Social Site"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "w-[468px] text-[18px] text-[#FFF]",
                                                            style: Text3,
                                                            children: "Connect with your chosen profiles and build stronger relationships"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "space-y-[60px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "flex space-x-[63px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        width: 0,
                                                                        height: 0,
                                                                        alt: "privacy",
                                                                        loading: "lazy",
                                                                        src: "/heroSec/icon/icon-1.svg",
                                                                        className: "w-[33.827px] h-[38px]"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: List,
                                                                    className: "2xl:text-[28px] xl:text-[22px] text-[24px]",
                                                                    children: "100% Privacy"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "flex space-x-[63px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        width: 0,
                                                                        height: 0,
                                                                        alt: "privacy",
                                                                        loading: "lazy",
                                                                        src: "/heroSec/icon/icon-3.svg",
                                                                        className: "w-[33.827px] h-[38px]"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: List,
                                                                    className: "2xl:text-[28px] xl:text-[22px] text-[24px]",
                                                                    children: "Zero Fake Profiles"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "flex space-x-[63px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        width: 0,
                                                                        height: 0,
                                                                        alt: "privacy",
                                                                        loading: "lazy",
                                                                        src: "/heroSec/icon/icon-2.svg",
                                                                        className: "w-[33.827px] h-[38px]"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: List,
                                                                    className: "2xl:text-[28px] xl:text-[22px] text-[24px]",
                                                                    children: "Fully Secured"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "flex space-x-[63px]",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        width: 0,
                                                                        height: 0,
                                                                        alt: "privacy",
                                                                        loading: "lazy",
                                                                        src: "/heroSec/icon/icon-4.svg",
                                                                        className: "w-[33.827px] h-[38px]"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: List,
                                                                    className: "2xl:text-[28px] xl:text-[22px] text-[24px]",
                                                                    children: "Verified Profiles"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full pb-[20px] pt-[80px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full justify-evenly items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-[40px] w-[400px] space-y-[40px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                id: "gradient-Text-style",
                                                style: GradientText2,
                                                className: "2xl:text-[54px] xl:text-[45px] lg:text-[40px]",
                                                children: "Chat anytime you want"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: Text3,
                                                className: "text-[#000] 2xl:text-[18px] xl:text-[16px] lg:text-[18px] text-[18px]",
                                                children: "Connect with your chosen profiles and build stronger relationships"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "flex space-x-[70px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "space-y-[8px] flex flex-col justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 0,
                                                                height: 0,
                                                                alt: "emoji",
                                                                src: "/heroSec/icon/emoji-icon.svg",
                                                                loading: "lazy",
                                                                className: "w-[30px] h-[30px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-[14px] text-center text-[#000]",
                                                                style: Text3,
                                                                children: "Emoji"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "space-y-[8px] flex flex-col justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 0,
                                                                height: 0,
                                                                alt: "img",
                                                                src: "/heroSec/icon/img-icon.svg",
                                                                loading: "lazy",
                                                                className: "w-[30px] h-[30px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-[14px] text-center text-[#000]",
                                                                style: Text3,
                                                                children: "Image"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "space-y-[8px] flex flex-col justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 0,
                                                                height: 0,
                                                                alt: "mic",
                                                                src: "/heroSec/icon/mic-icon.svg",
                                                                loading: "lazy",
                                                                className: "w-[30px] h-[30px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-[14px] text-center text-[#000]",
                                                                style: Text3,
                                                                children: "Audio"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "space-y-[8px] flex flex-col justify-center items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 0,
                                                                height: 0,
                                                                alt: "video-call",
                                                                src: "/heroSec/icon/video-call-icon.svg",
                                                                loading: "lazy",
                                                                className: "w-[30px] h-[30px]"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-[14px] text-center text-[#000]",
                                                                style: Text3,
                                                                children: "Video"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "flex space-x-[25px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: GotoLogin,
                                                            className: "text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] bg-[#000] text-[#FFF]",
                                                            children: "Start Chat"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#000] text-[#000] hover:bg-[#EFF5FF]",
                                                            onClick: ()=>router.push("/chat-features"),
                                                            children: "Learn More"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            width: 0,
                                            height: 0,
                                            alt: "chat-ui",
                                            loading: "lazy",
                                            src: "/heroSec/assests/chat-img-1.svg",
                                            className: "2xl:w-[530px] 2xl:h-[530px] xl:w-[490px] xl:h-[490px] lg:w-[530px] lg:h-[530px] w-[530px] h-[530px]"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-[#FDF8FF] pt-[50px] w-full h-[774px] flex flex-col justify-evenly items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center space-y-[12px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "2xl:text-[50px] xl:text-[50px] text-[40px]",
                                            style: TitleText3,
                                            children: "We offered most affordable plans"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-[18px] text-[#000]",
                                            style: Text3,
                                            children: "Connect with your chosen profiles and build stronger relationships"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[80%] text-center space-y-[90px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "flex justify-evenly w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: MonthPlan,
                                                                children: "One Month Plan"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex items-center justify-center space-x-[5px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        style: Price,
                                                                        children: "Rs."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_Counter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                            from: 0,
                                                                            to: 399,
                                                                            duration: 6
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "w-[1px] h-[72px] bg-[#ADADAD]"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: MonthPlan,
                                                                children: "Two Month Plan"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex items-center justify-center space-x-[5px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        style: Price,
                                                                        children: "Rs."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_Counter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                            from: 0,
                                                                            to: 599,
                                                                            duration: 6
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "w-[1px] h-[72px] bg-[#ADADAD]"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: MonthPlan,
                                                                children: "Three Month Plan"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex items-center justify-center space-x-[5px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        style: Price,
                                                                        children: "Rs."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_Counter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                            from: 0,
                                                                            to: 799,
                                                                            duration: 6
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>token ? router.push("/longterm/dashboard/upgrade") : router.push("/login"),
                                                className: "text-center font-poppins font-normal leading-normal w-[212px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]",
                                                children: "Discover More Plans"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full text-center space-y-[40px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: PaymentList,
                                                children: "We accept"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full flex justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_animation_Slider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-b-[1px] border-b-[#E9E9E9] pb-[60px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "2xl:text-[50px] xl:text-[40px] text-[60px] text-black font-poppins  font-bold leading-[70px]",
                                        children: "Frequently Asked Questions"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "flex flex-col items-center space-y-[13px] mt-[80px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "w-[70%]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Features_Accordion__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                title: "How do I create an account on HappyMilan?",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AccordingBodyList, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                "Step 1: Click on",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-[#0F52BA]",
                                                                    children: " “Sign up.”"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                "Step 2: Enter your",
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "text-[#0F52BA]",
                                                                    children: [
                                                                        " ",
                                                                        "“Email or mobile number.”"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "Step 3: Choose a password."
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                "Step 4: Select the registration type, either",
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "text-[#0F52BA]",
                                                                    children: [
                                                                        " ",
                                                                        "“Marriage or Dating”"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mt-[30px]",
                                                            children: "after selection of registration type , you’ll be redirecting to your own dashboard and at this stage you’ll have successfully registered on HappyMilan. But you’ll be restricted to send request until you don’t complete the registration form. Once we’ve all the information, we’ll be able to give you perfect suggestion matches based on your information."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mt-[21px]",
                                                            children: "Wish you’ll have great experience on HappyMilan.com"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "w-[70%]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Features_Accordion__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                title: "Is HappyMilan for Long Term, Dating and Friendship?",
                                                children: "HappyMilan is a social networking website that caters to both categories: matrimony and dating. Users can select either option when registering"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "What are top features of HappyMilan?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    className: `opacity-50 transform origin-center transition duration-200 ease-out`,
                                                    width: 14,
                                                    height: 14,
                                                    alt: "plus",
                                                    src: "/assests/animation/plus-img.png"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "How can I manage my profile?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    className: `opacity-50 transform origin-center transition duration-200 ease-out`,
                                                    width: 14,
                                                    height: 14,
                                                    alt: "plus",
                                                    src: "/assests/animation/plus-img.png"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Can I cancel the membership?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    className: `opacity-50 transform origin-center transition duration-200 ease-out`,
                                                    width: 14,
                                                    height: 14,
                                                    alt: "plus",
                                                    src: "/assests/animation/plus-img.png"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Can I delete my account?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    className: `opacity-50 transform origin-center transition duration-200 ease-out`,
                                                    width: 14,
                                                    height: 14,
                                                    alt: "plus",
                                                    src: "/assests/animation/plus-img.png"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pt-[65px] text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>router.push("/faq"),
                                        className: "w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF] text-center font-poppins font-normal leading-normal",
                                        children: "Learn More"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-[80px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center pt-[80px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "2xl:text-[50px] xl:text-[40px] text-[60px] text-black font-poppins  font-bold leading-[70px]",
                                        children: "Discover more apps"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "flex justify-evenly ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col justify-evenly w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 0,
                                                            height: 0,
                                                            alt: "proffers",
                                                            src: "/assests/product-assests/proffers.svg",
                                                            className: "w-[50.702px] h-[44px]"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: ProductName,
                                                                children: "Proxale"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                style: ProductList,
                                                                children: "Explore Nearby Services"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-end pr-[31px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 25.667,
                                                            height: 26.341,
                                                            alt: "arrow-icon",
                                                            src: "/heroSec/icon/arrow-icon.svg"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col justify-evenly w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 0,
                                                            height: 0,
                                                            alt: "Trendigo",
                                                            src: "/assests/product-assests/Trendigo.svg",
                                                            className: "w-[33.885px] h-[44px]"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: ProductName,
                                                                children: "Trendigo"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                style: ProductList,
                                                                children: "Shop for Men & Women"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-end pr-[31px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 25.667,
                                                            height: 26.341,
                                                            alt: "arrow-icon",
                                                            src: "/heroSec/icon/arrow-icon.svg"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col justify-evenly w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 0,
                                                            height: 0,
                                                            alt: "proffers",
                                                            src: "/assests/product-assests/adskaro.svg",
                                                            className: "w-[57.538px] h-[44px]"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: ProductName,
                                                                children: "AdsKaro"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                style: ProductList,
                                                                children: "Daily Ads Services"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-end pr-[31px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 25.667,
                                                            height: 26.341,
                                                            alt: "arrow-icon",
                                                            src: "/heroSec/icon/arrow-icon.svg"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full pt-[100px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-[229px] bg-[#FDF8FF]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center pr-[100px] pl-[100px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " space-y-[37px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[24px] text-[#000]",
                                                    style: Text3,
                                                    children: "Your gateway to the limitless potentials, Download App"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "flex space-x-[40px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 0,
                                                                height: 0,
                                                                alt: "google-play",
                                                                loading: "lazy",
                                                                className: "w-[148.5px] h-[44px]",
                                                                src: "/heroSec/assests/play-store.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                width: 0,
                                                                height: 0,
                                                                alt: "google-play",
                                                                loading: "lazy",
                                                                className: "w-[148.5px] h-[44px]",
                                                                src: "/heroSec/assests/app-store.svg"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative top-[30px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                width: 0,
                                                height: 0,
                                                alt: "app",
                                                loading: "lazy",
                                                src: "https://happymilan.vercel.app/heroSec/assests/app-frame.svg",
                                                className: "w-[160.043px] h-[auto]"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_GlobalFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewLand);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;