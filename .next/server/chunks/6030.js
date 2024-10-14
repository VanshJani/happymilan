"use strict";
exports.id = 6030;
exports.ids = [6030];
exports.modules = {

/***/ 16030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70554);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _longterm_dashboard_commonCompo_storyUploadcomp_components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78454);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7354);
/* harmony import */ var _store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45687);
/* harmony import */ var _longterm_dashboard_commonCompo_StoryModals_ViewStory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40908);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41243);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _store_actions_UserStoryAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40240);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_6__, _longterm_dashboard_commonCompo_storyUploadcomp_components_Modal__WEBPACK_IMPORTED_MODULE_8__]);
([_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_6__, _longterm_dashboard_commonCompo_storyUploadcomp_components_Modal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
















function UserStory({ formData, updateFormData: updateFormData1 }) {
    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };
    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    };
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const { loading, data, mystory } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.usersact.UsersStorydata);
    const [showPicker, setShowPicker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pickerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClickOutside = (event)=>{
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowPicker(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const hanldeEmojiInput = (emoji)=>{
        SetStoryCaption((prev)=>{
            return prev + emoji.emoji;
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__/* .Getallstatus */ ._l)());
    }, []);
    const [Storyimagesrc, SetStoryimagesrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        storyViewType: "",
        Data: null
    });
    const [notification, setNotification] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        right: false
    });
    const toggleNotification = (anchor, open)=>(event)=>{
            setNotification({
                ...notification,
                [anchor]: open
            });
        };
    const HandleStoryOpen = (e, res)=>{
        const name = e.currentTarget.getAttribute("name"); // Use currentTarget instead of target
        switch(name){
            case "currentUser":
                dispatch((0,_store_actions_UserStoryAction__WEBPACK_IMPORTED_MODULE_16__/* .Getstoryviewsdata */ .Z)(res?.id));
                break;
            case "users-story":
                dispatch((0,_store_actions_UserStoryAction__WEBPACK_IMPORTED_MODULE_16__/* .ViewstoryPost */ .J)(res));
                break;
            default:
                console.log("Other User ViewStory");
        }
        SetStoryimagesrc({
            storyViewType: name,
            Data: res
        });
        setNotification({
            ...notification,
            "right": true
        });
    };
    const NotificationList = (anchor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_longterm_dashboard_commonCompo_StoryModals_ViewStory__WEBPACK_IMPORTED_MODULE_13__["default"], {
            CloseBtn: toggleNotification("right", false),
            Storyimagesrc: Storyimagesrc
        });
    //For Notification
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const [imagesrc, setImagesrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [ActiveTab, SetActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const handleClose = ()=>{
        setOpen(false);
        SetActiveTab(1);
    };
    const StoryModal = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.usersact.StoryUpload);
    if (StoryModal.modalClose) {
        setOpen(false);
        SetActiveTab(1);
        dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__/* .Uploadmystorymodal */ .k$)());
    }
    const thedata = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.form.formData.uploadStory);
    const [blobData, SetBlobdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        size: null,
        type: null,
        blob: null
    });
    const [Uname, setUname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [token, settoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUname((0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.getCookie)("userName"));
        settoken((0,cookies_next__WEBPACK_IMPORTED_MODULE_7__.getCookie)("authtoken"));
    }, []);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [StoryCaption, SetStoryCaption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleInputChange = (e)=>{
        SetStoryCaption(e.target.value);
    };
    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        if (acceptedFiles.length > 1) {
            alert("Please select only one image");
            return;
        }
        const selectedImage = acceptedFiles[0];
        const imageData = {
            id: selectedImage.name,
            key: selectedImage.name,
            contentType: selectedImage.type,
            data: URL.createObjectURL(selectedImage),
            isProfile: false
        };
        SetBlobdata({
            size: selectedImage.size,
            type: selectedImage.type,
            blob: URL.createObjectURL(selectedImage)
        });
        setImagesrc(imageData.data);
        SetActiveTab(2);
        updateFormData1({
            ...formData,
            uploadStory: {
                ...formData.uploadStory,
                imagesdata: imageData,
                bufferdata: URL.createObjectURL(selectedImage)
            }
        });
    }, []);
    const HandleNext = ()=>{
        if (ActiveTab === 2) {
            dispatch((0,_store_actions_UsersAction__WEBPACK_IMPORTED_MODULE_12__/* .Uploadmystory */ .O7)(thedata, imagesrc, blobData, StoryCaption));
        } else {
            SetActiveTab(ActiveTab + 1);
        }
    };
    const HandleDeleteClick = ()=>{
        SetActiveTab(1);
        SetStoryCaption("");
        setShowPicker(false);
    };
    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_9__.useDropzone)({
        onDrop,
        maxFiles: 1
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "story-section-center",
                // className='h-[60px] flex space-x-[15px] border-[1px] border-[black]'
                className: "lg:top-0 top-20 pb-[20px] w-full lg:w-auto lg:pb-[0px] z-10 lg:z-0 bg-[white] mt-[-20px] lg:mt-0 lg:bg-none dark:bg-[#18191a] p-[5px] fixed  lg:relative left-[0px] 2xl:left-[50px] lg:left-[50px] xl:left-[60px] flex space-x-[15px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Skeleton, {
                            variant: "circular",
                            width: 47,
                            height: 47
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: mystory?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: mystory.map((res)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            name: "currentUser",
                                            onClick: (e)=>HandleStoryOpen(e, res),
                                            style: {
                                                boxSizing: "content-box"
                                            },
                                            className: "w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center border-[2px] border-[blue]",
                                            id: "story-gradient-border",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                alt: "user-1",
                                                width: 47,
                                                height: 47,
                                                style: {
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                    width: "47px",
                                                    height: "47px",
                                                    border: "2px solid transparent"
                                                },
                                                src: res?.userId?.profilePic ? res?.userId?.profilePic : "/assests/dashboard/user/1.svg"
                                            })
                                        })
                                    }))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[47px] h-[47px] bg-[#FFF] rounded-full grid place-items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                size: 47
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative left-[34px] top-[-17px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    loading: "lazy",
                                                    alt: "add-icon",
                                                    width: 18,
                                                    height: 18,
                                                    onClick: handleClickOpen,
                                                    src: "/assests/stories/Add-story-icon.svg"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default()), {
                        open: open,
                        onClose: handleClose,
                        className: "flex justify-center rounded-[20px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "dark:bg-[#18191a] rounded-[20px]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-[20px] rounded-[20px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:pb-0 pb-[20px] flex items-center justify-between space-x-[20px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                style: Text3,
                                                children: "Add Story"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: ActiveTab == 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "md:pb-[20px] lg:pb-0 flex flex-col justify-center items-center space-y-[20px] w-full h-full   md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[257px] 2xl:w-[526px] 2xl:h-[450px] xl:w-[526px] xl:h-[357px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[20px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        ...getRootProps(),
                                                        className: "mt-[10%] lg:mt-0 md:w-[60px] md:h-[60px] lg:w-auto lg:h-auto 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                ...getInputProps(),
                                                                className: "hidden"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                loading: "lazy",
                                                                alt: "drag-drop",
                                                                width: 63,
                                                                height: 44,
                                                                src: "/loginassests/register-icons/Drag-Drop.svg"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                style: Text1,
                                                                className: "dark:text-[#FFF] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px]",
                                                                children: "Select Photos"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "dark:text-[#FFF]",
                                                                style: Text2,
                                                                children: "Or drag and drop a file"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "dark:bg-[#242526] flex flex-col justify-center items-center space-y-[90px]  md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[257px] 2xl:w-[526px] 2xl:h-[450px] xl:w-[526px] xl:h-[357px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-col items-center flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: " grid place-items-center md:w-[120px] md:h-[120px] lg:h-auto lg:w-[150px] 2xl:w-[190px] 2xl:h-[241px] xl:w-[190px] xl:h-[241px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    style: {
                                                                        objectFit: "cover",
                                                                        borderRadius: "10px"
                                                                    },
                                                                    loading: "lazy",
                                                                    alt: "upload",
                                                                    width: 190,
                                                                    height: 241,
                                                                    src: imagesrc
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: HandleDeleteClick,
                                                                className: "cursor-pointer relative top-[50px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    loading: "lazy",
                                                                    alt: "delete-icon",
                                                                    width: 19.695,
                                                                    height: 22.17,
                                                                    className: "w-[19.695px] h-[22.17px]",
                                                                    src: "/assests/Black/Delete.svg"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        ref: pickerRef,
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: ()=>setShowPicker(!showPicker),
                                                                className: `absolute left-[35px] bottom-[55px]  cursor-pointer`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 1.5,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-6",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex mt-[5px]",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "w-full",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            name: "caption",
                                                                            value: StoryCaption,
                                                                            onChange: handleInputChange,
                                                                            placeholder: "Caption..",
                                                                            type: "text",
                                                                            className: "lg:mt-0 mt-[20px] pl-[50px] w-full h-[40px] 2xl:h-[50px] md:h-[30px] xl:h-[50px] lg:h-[40px] rounded-[25px] border-[1px] border-[#DADADA] focus:outline-none focus:border-[1px] focus:border-[black]"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "w-[90px] grid place-items-center",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "hover:bg-[#F2F7FF]  p-[12px] rounded-full",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                disabled: StoryModal.loading,
                                                                                onClick: HandleNext,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                    width: 26,
                                                                                    height: 26,
                                                                                    alt: "send",
                                                                                    src: "/assests/chat/Send-Icon.svg"
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: showPicker ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "absolute z-[110] left-[30px] h-[300px] top-[0px]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((emoji_picker_react__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                        onEmojiClick: hanldeEmojiInput
                                                                    })
                                                                }) : null
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Skeleton, {
                            variant: "circular",
                            width: 47,
                            height: 47
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            id: "hide-Story-scrollbar",
                            className: "relative flex overflow-y-auto  space-x-[10px] w-[60%]",
                            children: data?.map((items, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        name: "users-story",
                                        onClick: (e)=>HandleStoryOpen(e, items),
                                        style: {
                                            boxSizing: "content-box"
                                        },
                                        className: "duration-100 hover:scale-90 w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center border-[2px] border-[blue]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            alt: "user-1",
                                            width: 47,
                                            height: 47,
                                            style: {
                                                objectFit: "cover",
                                                borderRadius: "50%",
                                                width: "47px",
                                                height: "47px",
                                                border: "2px solid transparent"
                                            },
                                            src: items?.userId?.profilePic ? items?.userId?.profilePic : "/assests/dashboard/user/no-profile.svg"
                                        })
                                    })
                                }, index);
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2___default()), {
                anchor: "right",
                BackdropProps: {
                    style: {
                        opacity: 0
                    }
                },
                open: notification["right"],
                onClose: toggleNotification("right", false),
                children: NotificationList("right")
            }),
            modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_longterm_dashboard_commonCompo_storyUploadcomp_components_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                setModalOpen: setModalOpen,
                closeModal: ()=>setModalOpen(false)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_10__.connect)((state)=>({
        formData: state.form.formData
    }), {
    updateFormData: _store_actions_registerUser__WEBPACK_IMPORTED_MODULE_11__/* .updateFormData */ .Zv
})(UserStory));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StoryModals_ViewStory)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/actions/UsersAction.js
var UsersAction = __webpack_require__(45687);
;// CONCATENATED MODULE: ./utils/helpers/GetStoryTime.js
const moment = __webpack_require__(32245);
function getStatusTime(res) {
    // Parse the input date
    const postTime = moment(res, moment.ISO_8601, true); // Using strict parsing with ISO 8601 format
    // Check if the date is valid
    if (!postTime.isValid()) {
        return "Invalid date";
    }
    const now = moment();
    const duration = moment.duration(now.diff(postTime));
    const seconds = duration.asSeconds();
    const minutes = duration.asMinutes();
    const hours = duration.asHours();
    if (seconds < 60) {
        return "Just now";
    } else if (minutes < 60) {
        return `${Math.floor(minutes)} min ago`;
    } else if (hours < 24 && now.isSame(postTime, "day")) {
        return `Today ${postTime.format("h:mm a")}`;
    } else if (now.subtract(1, "day").isSame(postTime, "day")) {
        return `Yesterday ${postTime.format("h:mm a")}`;
    } else {
        return postTime.format("MMM D, YYYY h:mm a");
    }
}
/* harmony default export */ const GetStoryTime = (getStatusTime);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
;// CONCATENATED MODULE: ./pages/longterm/dashboard/commonCompo/StoryModals/ViewStory.js








function ViewStory({ CloseBtn, Storyimagesrc }) {
    const Text4 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const Username = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const NoVieweYet = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const Activity = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const ViewerUser = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    };
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const dispatch = (0,external_react_redux_.useDispatch)();
    const HanldeDeleteStatus = (data)=>{
        dispatch((0,UsersAction/* DeleteMystatus */.cS)(data.id));
        CloseBtn();
    };
    const [ShowViewer, SetShowViewer] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const GotoProfile = (res)=>{
        switch(res?.storyViewType){
            case "users-story":
                return router.push(`/longterm/dashboard/${res?.Data?.userId?.id || res?.Data?.userId?._id}`);
                break;
            case "currentUser":
                return router.push(`/longterm/dashboard/profile`);
                break;
            default:
                return null;
        }
    };
    const { data, loading } = (0,external_react_redux_.useSelector)((state)=>state.storyviews);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
            sx: {
                backgroundColor: "black"
            },
            className: "w-[full] h-full lg:h-auto 2xl:w-[799px] xl:w-[699px]",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-[black] w-full 2xl:h-[100vh] xl:h-[100vh] space-y-[20px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between pt-[20px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "pl-[40px] flex items-center space-x-[20px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        onClick: ()=>GotoProfile(Storyimagesrc),
                                        alt: "request",
                                        width: 47,
                                        height: 47,
                                        className: "w-[47px] h-[47px] cursor-pointer",
                                        style: {
                                            borderRadius: "50%",
                                            objectFit: "cover"
                                        },
                                        src: Storyimagesrc?.Data ? Storyimagesrc?.Data?.userId?.profilePic : "/assests/dashboard/request/req-3.svg"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-left text-[#FFF]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                style: Username,
                                                className: "text-[14px] cursor-pointer",
                                                onClick: ()=>GotoProfile(Storyimagesrc),
                                                children: Storyimagesrc?.Data ? Storyimagesrc?.Data.userId.name : "NA"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                style: Activity,
                                                children: GetStoryTime(Storyimagesrc?.Data ? Storyimagesrc.Data?.statusAddTime : "NA")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center pr-[40px]",
                                children: ShowViewer ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group cursor-pointer",
                                        onClick: ()=>SetShowViewer(false),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute opacity-[0.2] h-[40px] w-[40px] right-[35px] mt-[-5px] rounded-full group-hover:bg-[#F2F7FF] p-[5px]"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                alt: "img",
                                                className: "cursor-pointer",
                                                width: 30,
                                                height: 30,
                                                onClick: ()=>SetShowViewer(false),
                                                src: "/assests/dashboard/story/arrow-left.svg"
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: Storyimagesrc?.storyViewType == "currentUser" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                onClick: (event)=>handleClick(event),
                                                className: "group cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute opacity-[0.2] h-[40px] w-[40px] right-[34px] mt-[-5px] rounded-full group-hover:bg-[#F2F7FF] p-[5px]"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: 1.5,
                                                        stroke: "white",
                                                        className: "w-[30px] h-[30px]",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Popover, {
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
                                                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                        borderRadius: "10px",
                                                        marginLeft: "10px",
                                                        marginTop: "20px"
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "bg-[#FFF] rounded-[10px] w-[128px] h-[80px]",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "flex flex-col justify-center space-y-[4px]  ",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                style: Text3,
                                                                className: "p-[5px] pl-[10px] cursor-pointer hover:bg-[#F2F7FF] flex  items-center space-x-[12px] text-[14px] mt-[8px]",
                                                                onClick: CloseBtn,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        strokeWidth: 1.5,
                                                                        stroke: "currentColor",
                                                                        className: "w-[15px] h-[15px]",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                        })
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        children: "Close"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                style: Text3,
                                                                className: "p-[5px] pl-[10px] cursor-pointer hover:bg-[#F2F7FF] flex  items-center space-x-[12px] text-[14px] ",
                                                                onClick: ()=>HanldeDeleteStatus(Storyimagesrc.Data),
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        fill: "none",
                                                                        viewBox: "0 0 23 23",
                                                                        strokeWidth: 1.5,
                                                                        stroke: "currentColor",
                                                                        className: "w-[15px] h-[15px]",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                                        })
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        children: "Delete"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group cursor-pointer",
                                            onClick: CloseBtn,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute opacity-[0.2] h-[40px] w-[40px] right-[30px] mt-[-9px] rounded-full group-hover:bg-[#F2F7FF] p-[5px]"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    alt: "cross-icon",
                                                    width: 20,
                                                    height: 20,
                                                    className: "cursor-pointer",
                                                    src: "/assests/dashboard/story/cross-icon.svg"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    ShowViewer ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-[16px]",
                            children: data?.results?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "h-full lg:h-[full] 2xl:w-auto 2xl:h-[500px] xl:h-[350px]",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex flex-col items-center space-y-[10px]",
                                        children: data?.results?.map((res, index)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                onClick: ()=>router.push(`/longterm/dashboard/${res?.viewerId?.id}`),
                                                className: "flex justify-between items-center w-[80%] cursor-pointer duration-100 hover:opacity-70 hover:bg-[#383838] bg-[#1E1E1E] rounded-[10px] p-[20px]",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-[29px]",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "ml-[12px]",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                    width: 47,
                                                                    height: 47,
                                                                    src: res?.viewerId?.profilePic,
                                                                    style: {
                                                                        objectFit: "cover",
                                                                        borderRadius: "50%",
                                                                        width: "45px",
                                                                        height: "45px"
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                                    style: ViewerUser,
                                                                    className: "cursor-pointer",
                                                                    children: res?.viewerId?.name
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "group",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            width: 30,
                                                            height: 30,
                                                            src: "/assests/stories/Stories-UserIcon.svg"
                                                        })
                                                    })
                                                ]
                                            });
                                        })
                                    })
                                })
                            }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full 2xl:h-[50vh] xl:h-[40vh] h-[50vh] grid place-items-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            style: NoVieweYet,
                                            className: "text-[12px] text-center text-[#FFF]",
                                            children: "No one views Yet"
                                        })
                                    })
                                })
                            })
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-center space-x-[90px] pt-[20px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: " flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            alt: "img",
                                            width: 48,
                                            height: 48,
                                            src: "/assests/dashboard/story/arrow-left.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            alt: "img",
                                            width: 346,
                                            height: 450,
                                            style: {
                                                width: "400px",
                                                objectFit: "cover"
                                            },
                                            className: "h-full lg:h-[full]  2xl:h-[450px] xl:h-[350px]",
                                            src: Storyimagesrc?.Data?.content
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: " flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            alt: "img",
                                            width: 48,
                                            height: 48,
                                            src: "/assests/dashboard/story/arrow-right.svg"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-center text-[white]",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    style: Text4,
                                    children: Storyimagesrc?.Data?.caption ? Storyimagesrc?.Data?.caption : ""
                                })
                            })
                        ]
                    }),
                    Storyimagesrc?.storyViewType == "currentUser" ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full grid place-items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "cursor-pointer flex justify-center absolute items-center bottom-[30px] space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        onClick: ()=>SetShowViewer(!ShowViewer),
                                        width: 22,
                                        height: 15,
                                        src: "/assests/stories/Story-countview.svg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-[white]",
                                            children: data?.totalResults
                                        })
                                    })
                                ]
                            })
                        })
                    }) : null
                ]
            })
        })
    });
}
/* harmony default export */ const StoryModals_ViewStory = (ViewStory);


/***/ }),

/***/ 78454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _ImageCropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84891);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ImageCropper__WEBPACK_IMPORTED_MODULE_1__]);
_ImageCropper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Modal = ({ setModalOpen, updateAvatar, closeModal })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-[101]",
        "aria-labelledby": "crop-image-dialog",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 bg-[black] bg-opacity-30 transition-all "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid place-items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-[50px]  fixed inset-0 z-10 w-[90%] overflow-y-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex min-h-[600px] justify-center px-2 py-12 text-center ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-[95%] sm:w-[50%] min-h-[554px] rounded-2xl bg-[#FFF] text-slate-100 text-left shadow-xl transition-all",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-5 py-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2",
                                        onClick: closeModal,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Close menu"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageCropper__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        updateAvatar: updateAvatar,
                                        closeModal: closeModal,
                                        setModalOpen: setModalOpen
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ ViewstoryPost),
/* harmony export */   Z: () => (/* binding */ Getstoryviewsdata)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77484);


const ViewstoryPost = (Viewrdata)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .VIEW_STORY_POST */ .jLs
        });
        const currentUser = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("userid");
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        const axios = __webpack_require__(52167);
        let data = JSON.stringify({
            "statusId": Viewrdata?.id,
            "viewerId": currentUser
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/story-view/create-view`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .VIEW_STORY_POST_SUCCESS */ .SMV
            });
        }).catch((error)=>{
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .VIEW_STORY_POST_FAILURE */ .R68
            });
            console.log(error);
        });
    };
};
const Getstoryviewsdata = (storyID)=>{
    return async (dispatch)=>{
        dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_STORY_VIEWS_DETAILS */ .uqe
        });
        const axios = __webpack_require__(52167);
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("authtoken");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/story-view/paginated/${storyID}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_STORY_VIEWS_DETAILS_SUCCESS */ .Bcb,
                payload: response.data.data
            });
        }).catch((error)=>{
            console.log(error);
            dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_STORY_VIEWS_DETAILS_FAILURE */ .pzG
            });
        });
    };
};


/***/ })

};
;