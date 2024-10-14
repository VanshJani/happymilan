"use strict";
exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 20391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ comp_ModifySearch)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(48982);
// EXTERNAL MODULE: ./store/type.js
var type = __webpack_require__(77484);
;// CONCATENATED MODULE: ./store/actions/SearchUsersActions.js


const updateSearchData = (data)=>({
        type: "UPDATE_SEARCH_DATA",
        payload: data
    });
const GetSearchUsersData = (searchData)=>{
    return async (dispatch)=>{
        dispatch({
            type: type/* GET_SEARCHUSERS_DATA */.h09
        });
        const axios = __webpack_require__(52167);
        const authToken = (0,external_cookies_next_.getCookie)("authtoken");
        let data = {
            "minAge": searchData?.minAge,
            "maxAge": searchData?.maxAge,
            "maxHeight": searchData?.maxHeight,
            "minHeight": searchData?.minHeight,
            "maritalStatus": [
                ...searchData.maritalStatus
            ],
            "religion": [
                ...searchData.religion
            ],
            "community": [
                ...searchData.community
            ],
            "motherTongue": [
                ...searchData.motherTongue
            ],
            "currentCountry": [
                ...searchData.currentCountry
            ],
            "currentCity": [
                ...searchData.currentCity
            ]
        };
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/search/search-user`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: type/* GET_SEARCHUSERS_DATA_SUCCESS */.P9M,
                payload: response.data.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const GetSearchUsersDataSuccess = (response)=>({
        type: GET_SEARCHUSERS_DATA_SUCCESS,
        payload: response
    });
const GetSearchUsersDataFailure = (error)=>({
        type: GET_SEARCHUSERS_DATA_FAILURE,
        payload: error
    });
const FetchSaveSearchData = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: type/* FETCH_SAVESEARCH_DATA */.iFM
        });
        const axios = __webpack_require__(52167);
        const authtoken = (0,external_cookies_next_.getCookie)("authtoken");
        const userID = (0,external_cookies_next_.getCookie)("userid");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/search-history/get-by-user/${userID}`,
            headers: {
                "Authorization": `Bearer ${authtoken}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch(GetSaveSearchData(response.data.data));
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const GetSaveSearchData = (response)=>({
        type: type/* FETCH_SAVESEARCH_DATA_SUCCESS */.R07,
        payload: response
    });
const SaveUserSearchPost = (searchData)=>{
    return async (dispatch)=>{
        dispatch({
            type: type/* POST_SAVESEARCH_DATA */.TQg
        });
        const axios = __webpack_require__(52167);
        const authToken = (0,external_cookies_next_.getCookie)("authtoken");
        let data = {
            "minAge": {
                "min": searchData.minAge,
                "max": searchData.maxAge
            },
            "height": {
                "min": searchData.minHeight,
                "max": searchData.maxHeight
            },
            "weight": {
                "min": searchData.minWeight,
                "max": searchData.maxWeight
            },
            "maritalStatus": [
                ...searchData.maritalStatus
            ],
            "religion": [
                ...searchData.religion
            ],
            "community": [
                ...searchData.community
            ],
            "motherTongue": [
                ...searchData.motherTongue
            ],
            "currentCountry": [
                ...searchData.currentCountry
            ],
            "currentCity": [
                ...searchData.currentCity
            ],
            "state": [
                ...searchData.stateofLiving
            ],
            "saveSearch": searchData?.saveSearch
        };
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/search-history/`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            data: data
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: type/* POST_SAVESEARCH_DATA_SUCCESS */.ik_,
                payload: response.data.data
            });
            dispatch(FetchSaveSearchData());
        }).catch((error)=>{
            console.log(error);
        });
    };
};
const DeleteSaveSearchData = (SearchID)=>{
    return async (dispatch)=>{
        dispatch({
            type: type/* DELETE_SAVESEARCH_DATA */.FRr
        });
        const axios = __webpack_require__(52167);
        const authtoken = (0,external_cookies_next_.getCookie)("authtoken");
        let config = {
            method: "delete",
            maxBodyLength: Infinity,
            url: `${"https://stag.mntech.website/api"}/v1/user/search-history/${SearchID}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authtoken}`
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            dispatch({
                type: type/* DELETE_SAVESEARCH_DATA_SUCCESS */.MHL
            });
            dispatch(FetchSaveSearchData());
        }).catch((error)=>{
            console.log(error);
        });
    };
};

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./ContextProvider/DarkModeContext.js
var DarkModeContext = __webpack_require__(50228);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./utils/options/UserSearch/SearchMemberOptions.js
const MaritalStatus = [
    {
        label: "Single",
        value: "single"
    },
    {
        label: "Never Married",
        value: "never-married"
    },
    {
        label: "Married",
        value: "married"
    }
];
const communityOptions = [
    {
        value: "patel",
        label: "Patel"
    },
    {
        value: "shah",
        label: "Shah"
    },
    {
        value: "mehta",
        label: "Mehta"
    }
];
const countryoflivingOptions = [
    {
        value: "india",
        label: "India"
    },
    {
        value: "us",
        label: "United States"
    },
    {
        value: "canada",
        label: "Canada"
    },
    {
        value: "mexico",
        label: "Mexico"
    }
];
const motherTongueOption = [
    {
        value: "english",
        label: "English"
    },
    {
        value: "hindi",
        label: "Hindi"
    },
    {
        value: "gujarati",
        label: "Gujarati"
    }
];
const religionOptions = [
    {
        value: "hindu",
        label: "Hinduism"
    },
    {
        value: "muslim",
        label: "Islam"
    },
    {
        value: "sikh",
        label: "Sikhism"
    }
];
const statesOptions = [
    {
        value: "gujarat",
        label: "Gujarat"
    },
    {
        value: "otava",
        label: "Otava"
    },
    {
        value: "Assam",
        label: "Assam"
    }
];
const cityOptions = [
    {
        value: "ahmedabad",
        label: "Ahmedabad"
    },
    {
        value: "surat",
        label: "Surat"
    },
    {
        value: "toronto",
        label: "Toronto"
    }
];

// EXTERNAL MODULE: ./utils/options/styles/SelectBoxStyle.js
var SelectBoxStyle = __webpack_require__(99938);
;// CONCATENATED MODULE: ./pages/longterm/dashboard/searchmember/comp/ModifySearch.js










// import { SearchMemberSelectBoxStyle } from '../../../../../utils/options/styles/SelectBoxStyle';
const DynamicSelect = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "longterm\\dashboard\\searchmember\\comp\\ModifySearch.js -> " + "react-select"
        ]
    },
    ssr: false
});
function ModifySearch({ state, updateSearchData: updateSearchData1, setFormOpen }) {
    const { darkMode, toggleDarkMode } = (0,DarkModeContext/* useDarkMode */.v)();
    const SearchMemberSelectBoxStyle = {
        control: (provided, state)=>({
                ...provided,
                paddingRight: "10px",
                paddingLeft: "8px",
                backgroundColor: darkMode ? "#141516" : "#FFF",
                height: "50px",
                borderRadius: "8px",
                // border: "1px solid #e6e6e6",
                borderColor: state.isFocused ? "black" : provided.borderColor,
                "&:hover": {
                    borderColor: "black"
                },
                boxShadow: state.isFocused ? "none" : provided.boxShadow
            }),
        multiValue: (provided)=>({
                ...provided,
                borderRadius: "10px"
            }),
        indicatorSeparator: (provided)=>({
                ...provided,
                display: "none",
                paddingRight: "20px"
            }),
        multiValueLabel: (provided)=>({
                ...provided,
                backgroundColor: "#F9F9F9",
                borderRadius: "5px"
            }),
        multiValueRemove: (provided)=>({
                ...provided,
                backgroundColor: "#F9F9F9",
                borderRadius: "5px"
            })
    };
    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px" /* 122.222% */ 
    };
    const saveSearchText = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "22px" /* 122.222% */ 
    };
    const SaveText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px" /* 122.222% */ 
    };
    const [selectedOptions, setSelectedOptions] = (0,external_react_.useState)();
    const [selectedmaritalstatus, setSelectedmaritalstatus] = (0,external_react_.useState)();
    const [selectedReligion, setSelectedReligion] = (0,external_react_.useState)([]);
    const [selectCommunity, setSelectCommunity] = (0,external_react_.useState)();
    const [selectMotherTongue, setSelectMotherTongue] = (0,external_react_.useState)();
    const [selectStateofLiving, setSelectStateofLiving] = (0,external_react_.useState)();
    const [selectCityeofLiving, setSelectCityeofLiving] = (0,external_react_.useState)();
    const [Userage, SetUserage] = (0,external_react_.useState)({
        minAge: null,
        maxAge: null,
        minHeight: null,
        maxHeight: null,
        minWeight: null,
        maxWeight: null
    });
    const [SearchSave, SetSearchSave] = (0,external_react_.useState)("");
    const { status, data } = (0,external_react_redux_.useSelector)((state)=>state.searchform.Searchsave);
    const SaveButtonClick = (res)=>{
        const maritalStatusData = MaritalStatus.filter((option)=>res?.maritalStatus.includes(option.value));
        const religionData = religionOptions.filter((option)=>res?.religion.includes(option.value));
        const commnunitydata = communityOptions.filter((option)=>res?.community.includes(option.value));
        const mothertonguedata = motherTongueOption.filter((option)=>res?.motherTongue.includes(option.value));
        const countryoflivingdata = countryoflivingOptions.filter((option)=>res?.currentCountry.includes(option.value));
        const currentCitydata = cityOptions.filter((option)=>res?.currentCity.includes(option.value));
        const currentStateData = statesOptions.filter((option)=>res?.state.includes(option.value));
        updateSearchData1({
            ...state.searchform,
            minAge: res?.minAge?.min,
            maxAge: res?.minAge?.max,
            minHeight: res?.height?.min,
            maxHeight: res?.height?.max,
            community: res?.community,
            maritalStatus: res?.maritalStatus,
            religion: res?.religion,
            motherTongue: res?.motherTongue,
            currentCountry: res?.currentCountry,
            currentCity: res?.currentCity,
            stateofLiving: res?.state
        });
        setSelectedReligion(religionData);
        setSelectedmaritalstatus(maritalStatusData);
        setSelectCommunity(commnunitydata);
        setSelectMotherTongue(mothertonguedata);
        setSelectedOptions(countryoflivingdata);
        setSelectCityeofLiving(currentCitydata);
        SetSearchSave(res?.saveSearch);
        setSelectStateofLiving(currentStateData);
        SetUserage({
            minAge: res?.minAge?.min,
            maxAge: res?.minAge?.max,
            minHeight: res?.height?.min,
            maxHeight: res?.height?.max,
            maxWeight: res?.weight?.max,
            minWeight: res?.weight?.min
        });
    };
    const DeleteList = (res)=>{
        dispatch(DeleteSaveSearchData(res?.id));
    };
    function handleSelect(data) {
        const values = data.map((item)=>item.value);
        setSelectedOptions(data);
        updateSearchData1({
            ...state.searchform,
            currentCountry: [
                ...values
            ]
        });
    }
    const handleMaritalstatus = (data)=>{
        const values = data.map((item)=>item.value);
        setSelectedmaritalstatus(data);
        updateSearchData1({
            ...state.searchform,
            maritalStatus: [
                ...values
            ]
        });
    };
    const handleReligion = (data)=>{
        const values = data.map((item)=>item.value);
        setSelectedReligion(data);
        updateSearchData1({
            ...state.searchform,
            religion: [
                ...values
            ]
        });
    };
    const handleCommunity = (data)=>{
        const values = data.map((item)=>item.value);
        setSelectCommunity(data);
        updateSearchData1({
            ...state.searchform,
            community: [
                ...values
            ]
        });
    };
    const handleMotherTongue = (data)=>{
        const values = data.map((item)=>item.value);
        setSelectMotherTongue(data);
        updateSearchData1({
            ...state.searchform,
            motherTongue: [
                ...values
            ]
        });
    };
    const handleStateofLiving = (data)=>{
        const values = data.map((item)=>item.value);
        setSelectStateofLiving(data);
        updateSearchData1({
            ...state.searchform,
            stateofLiving: [
                ...values
            ]
        });
    };
    const handleCityeofLiving = (data)=>{
        const values = data.map((item)=>item.value);
        setSelectCityeofLiving(data);
        updateSearchData1({
            ...state.searchform,
            currentCity: [
                ...values
            ]
        });
    };
    const SearchData = (0,external_react_redux_.useSelector)((state)=>state.searchform);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch(FetchSaveSearchData());
    }, []);
    const CLearAllData = ()=>{
        setSelectedOptions(null);
        setSelectedmaritalstatus(null);
        setSelectedReligion(null);
        setSelectCommunity(null);
        setSelectMotherTongue(null);
        setSelectStateofLiving(null);
        setSelectCityeofLiving(null);
        SetUserage({
            minAge: "",
            maxAge: "",
            maxHeight: "",
            minHeight: "",
            minWeight: "",
            maxWeight: ""
        });
        SetSearchSave("");
        // updateSearchData({
        //     ...state.searchform,
        //     stateofLiving: [...values], // Set the religion field to the updated value
        // });
        updateSearchData1({
            minAge: 0,
            maxAge: 0,
            minHeight: 0,
            maxHeight: 0,
            minWeight: 0,
            maxWeight: 0,
            maritalStatus: [],
            religion: [],
            community: [],
            stateofLiving: [],
            motherTongue: [],
            currentCountry: [],
            currentCity: [],
            stateofLiving: [],
            loading: false,
            searchResults: null,
            error: null
        });
    };
    // Hanlde Modal For Save Search 
    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
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
    const SearchDataHandle = ()=>{
        handleClickDeleteImageModal();
    };
    const [openLogoutModal, setOpenLogoutModal] = external_react_default().useState(false);
    const handleClickDeleteImageModal = (res)=>{
        setOpenLogoutModal(true);
    };
    const handleCloseLogout = ()=>{
        setOpenLogoutModal(false);
    };
    const HandleLogout = (e)=>{
        if (e.target.name != "stay") {
            dispatch(SaveUserSearchPost(SearchData));
            dispatch(GetSearchUsersData(SearchData));
            setFormOpen(false);
            setTimeout(()=>{
                CLearAllData();
            }, 2000);
            console.log(SearchData);
            setOpenLogoutModal(false);
        }
        setOpenLogoutModal(false);
        dispatch(GetSearchUsersData(SearchData));
        setTimeout(()=>{
            CLearAllData();
        }, 2000);
        setFormOpen(false);
    };
    const HanldeInputChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        updateSearchData1({
            ...state.searchform,
            [name]: parseInt(value) // Update the minAge or maxAge field based on the input name
        });
        SetUserage((prevState)=>({
                ...prevState,
                [name]: value
            }));
        if (name == "saveSearch") {
            SetSearchSave(value);
            updateSearchData1({
                ...state.searchform,
                saveSearch: value // Update the minAge or maxAge field based on the input name
            });
        }
    };
    const [currentPage, SetcurrentPage] = (0,external_react_.useState)(1);
    const DataperPage = 3;
    const totalPage = Math.ceil(data.length / DataperPage);
    const currentData = data.slice((currentPage - 1) * DataperPage, currentPage * DataperPage);
    const handlePrev = ()=>{
        SetcurrentPage((prevPage)=>Math.max(prevPage - 1, 1));
    };
    const handleNext = ()=>{
        SetcurrentPage((prevPage)=>Math.min(prevPage + 1, totalPage));
    };
    const titleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "dark:bg-[#18191a] flex w-full justify-evenly ml-[40px] items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "2xl:ml-[210px] xl:ml-[210px] lg:ml-[150px] flex flex-col space-y-[35px] w-full  md:w-[600px] 2xl:mr-[110px] mt-[120px] pb-[50px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: "text-[#000] dark:text-[#FFF]",
                                    style: Text1,
                                    children: "Search Your Match"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "2xl:w-[700px] xl:w-[600px] lg:w-[500px] border-[1px] border-[#E3E3E3] rounded-[18px] pt-[40px] pb-[40px] flex flex-col space-y-[35px] justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full flex justify-evenly space-x-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-[10px]",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        style: titleText,
                                                        children: "Select Age Range"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "space-x-[31px] flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "number",
                                                                    onChange: HanldeInputChange,
                                                                    value: Userage.minAge,
                                                                    name: "minAge",
                                                                    placeholder: "min",
                                                                    id: "num-input",
                                                                    className: "2xl:w-[110px] xl:w-[94px] w-[50px] pb-[10px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-[#000]",
                                                                    children: "-"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "number",
                                                                    onChange: HanldeInputChange,
                                                                    value: Userage.maxAge,
                                                                    name: "maxAge",
                                                                    placeholder: "max",
                                                                    id: "num-input",
                                                                    className: "2xl:w-[110px] xl:w-[94px] w-[50px] pb-[10px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] "
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-[10px]",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        style: titleText,
                                                        children: "Select Prefer Heights"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "space-x-[31px] flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "number",
                                                                    name: "minHeight",
                                                                    value: Userage.minHeight,
                                                                    onChange: HanldeInputChange,
                                                                    placeholder: "min",
                                                                    id: "num-input",
                                                                    className: "2xl:w-[110px] xl:w-[94px] w-[50px] pb-[10px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-[#000]",
                                                                    children: "-"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "number",
                                                                    name: "maxHeight",
                                                                    value: Userage.maxHeight,
                                                                    onChange: HanldeInputChange,
                                                                    placeholder: "max",
                                                                    id: "num-input",
                                                                    className: "2xl:w-[110px] xl:w-[94px] w-[50px] pb-[10px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] "
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "w-full flex justify-evenly space-x-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            style: titleText,
                                                            children: "Marital Status"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(DynamicSelect, {
                                                            className: "2xl:w-[290px] xl:w-[255px]",
                                                            options: MaritalStatus,
                                                            placeholder: "Select..",
                                                            styles: SelectBoxStyle/* LabelStyle */.gF,
                                                            value: selectedmaritalstatus,
                                                            onChange: handleMaritalstatus,
                                                            isSearchable: true,
                                                            isMulti: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            style: titleText,
                                                            children: "Religion"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(DynamicSelect, {
                                                            className: "2xl:w-[290px] xl:w-[255px]",
                                                            options: religionOptions,
                                                            placeholder: "Select..",
                                                            styles: SelectBoxStyle/* LabelStyle */.gF,
                                                            value: selectedReligion,
                                                            onChange: handleReligion,
                                                            isSearchable: true,
                                                            isMulti: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    style: titleText,
                                                    children: "Mother Tongue"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "2xl:w-[630px] xl:w-[550px] w-full",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(DynamicSelect, {
                                                        options: motherTongueOption,
                                                        placeholder: "Select..",
                                                        styles: SelectBoxStyle/* LabelStyle */.gF,
                                                        value: selectMotherTongue,
                                                        onChange: handleMotherTongue,
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    style: titleText,
                                                    children: "Country Living"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "2xl:w-[630px] xl:w-[550px] w-full",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(DynamicSelect, {
                                                        options: countryoflivingOptions,
                                                        placeholder: "Select..",
                                                        styles: SelectBoxStyle/* LabelStyle */.gF,
                                                        value: selectedOptions,
                                                        onChange: handleSelect,
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    style: titleText,
                                                    children: "City Living"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "2xl:w-[630px] xl:w-[550px] w-full",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(DynamicSelect, {
                                                        options: cityOptions,
                                                        placeholder: "Select..",
                                                        styles: SelectBoxStyle/* LabelStyle */.gF,
                                                        value: selectCityeofLiving,
                                                        onChange: handleCityeofLiving,
                                                        isSearchable: true,
                                                        isMulti: true
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "2xl:w-[700px] xl:w-[600px] lg:w-[500px]  border-[1px] border-[#E3E3E3 rounded-[18px] p-[30px]",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-[30px] pl-[5px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                            style: titleText,
                                            children: "Save Search?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-full md:w-[479px]",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                name: "saveSearch",
                                                value: SearchSave,
                                                onChange: HanldeInputChange,
                                                type: "text",
                                                placeholder: "My Matches",
                                                id: "num-input",
                                                className: "pb-[10px] 2xl:w-[630px] xl:w-[540px] lg:w-full outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] "
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "w-[700px] flex justify-between space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: CLearAllData,
                                            className: ` border-[1px] border-[#8225AF] hover:bg-[#F2F7FF] dark:hover:bg-[#141516] w-[130px] h-[50px] dark:text-[#FFF] text-[black] rounded-[25px]`,
                                            children: "Clear All"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            id: "grad-btn",
                                            className: ` border-[1px] border-[#0F52BA] bg-[#0F52BA] text-[white] w-[130px] h-[50px] rounded-[25px]`,
                                            onClick: SearchDataHandle,
                                            children: "Search"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative top-[-200px]",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                width: "280px",
                                height: "260px"
                            },
                            className: "border-[1px] border-[#E3E3E3] rounded-[18px] dark:bg-[#242526]",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "pb-[13px] relative pt-[14px] left-[16px]",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "text-[#000] dark:text-[#FFF]",
                                        style: saveSearchText,
                                        children: "My Saved Search"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "pb-[14px] w-full grid place-items-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-[#F2F2F2] h-[1px] w-[90%]"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "h-[160px] flex justify-center",
                                    children: status ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            className: "flex flex-col justify-start items-start space-y-[15px]",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Skeleton, {
                                                className: "text-[#000] dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px]",
                                                children: "                            "
                                            })
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: data.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                className: "flex flex-col justify-start items-start space-y-[15px]",
                                                children: currentData?.map((res, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    onClick: ()=>SaveButtonClick(res),
                                                                    className: "text-[#000] dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px] dark:hover:bg-[#383838] hover:bg-[#F2F7FF] ",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "",
                                                                            style: SaveText,
                                                                            children: res?.saveSearch
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "cursor-pointer absolute top-[11px] right-10",
                                                                    onClick: ()=>DeleteList(res),
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "18",
                                                                        height: "18",
                                                                        viewBox: "0 0 18 18",
                                                                        fill: "none",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                clipPath: "url(#clip0_1066_324)",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    d: "M4.5 14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25H4.5V14.25ZM6 6.75H12V14.25H6V6.75ZM11.625 3L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625Z",
                                                                                    fill: "#5F6368"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                                                                                    id: "clip0_1066_324",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                        width: "18",
                                                                                        height: "18",
                                                                                        fill: "white"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }, index)
                                                    });
                                                })
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "h-[full] grid place-items-center mt-[10%]",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid place-items-center space-y-[5px]",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            alt: "not-found",
                                                            width: 34,
                                                            height: 34,
                                                            src: "/assests/dashboard/icon/NotFound-img.svg"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                            className: "inline",
                                                            style: ImageNotFoundText,
                                                            children: "No Data Found"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }),
                                data.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    onClick: handlePrev,
                                                    style: {
                                                        display: currentPage === 1 ? "none" : ""
                                                    },
                                                    className: "relative left-[15px] hover:bg-[#F2F7FF] cursor-pointer w-[30px] h-[30px] rounded-full grid place-items-center",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 12,
                                                        height: 22,
                                                        className: "",
                                                        alt: "next-light",
                                                        src: "/assests/scorematch/Next-btn.svg"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    onClick: handleNext,
                                                    style: {
                                                        display: currentPage === totalPage ? "none" : ""
                                                    },
                                                    className: "relative right-[15px] hover:bg-[#F2F7FF] cursor-pointer w-[30px] h-[30px] rounded-full grid place-items-center",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 12,
                                                        height: 22,
                                                        className: "transform scale-x-[-1]",
                                                        alt: "next-light",
                                                        src: "/assests/scorematch/Next-btn.svg"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }) : ""
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Dialog, {
                open: openLogoutModal,
                onClose: handleCloseLogout,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.DialogContent, {
                        className: "text-center w-[400px] mt-[20px]",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            id: "alert-dialog-description",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                style: LogoutModalText,
                                children: "Do you want to save your current search criteria for future use?"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-evenly p-[20px] mb-[20px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    onClick: HandleLogout,
                                    name: "stay",
                                    id: "grad-button",
                                    className: "rounded-[24px] w-[122px] h-[50px]",
                                    children: "No"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    onClick: HandleLogout,
                                    name: "exit",
                                    className: "border-[black] border-[1px] rounded-[24px] w-[122px] h-[50px]",
                                    children: "Yes"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// export default ModifySearch
// searchformReducer
/* harmony default export */ const comp_ModifySearch = ((0,external_react_redux_.connect)((state)=>({
        state
    }), {
    updateSearchData: updateSearchData
})(ModifySearch));


/***/ })

};
;