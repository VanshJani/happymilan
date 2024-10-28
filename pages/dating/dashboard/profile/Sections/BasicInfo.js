import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';
import { getFormattedDate } from '../../../../../utils/helpers/GetFormatedDate';
import { LabelStyle } from '../../../../../utils/options/styles/SelectBoxStyle';
import { GenderOption } from '../../../../../utils/options/Register/GenralSectionOptions';
import dynamic from 'next/dynamic';
import { CityOptions, CountryOptions } from '../../../../../utils/options/Register/EducationSectionOptions';
import { updateUserDetails } from '../../../../../store/dating-services/Redux-reducer/home/MyprofileReducer';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import ReusableMultiSelect from '../../../../../components/Dating/register/sections/MusltiSelectDating';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function BasicInfo() {

    const { darkMode } = useDarkMode();

    const EnumOfInterest = {
        MEET_NEW_FRIENDS: 'meet-new-friends',
        LOOKING_FOR_LOVE: 'looking-for-love',
        MOVIE_DATE: 'movie-date',
        FOODIES: 'foodies',
        TRAVEL_BUDDIES: 'travel-buddies',
        GAME_LOVER: 'game-lover',
        CHITCHAT: 'chit-chat',
        ADVENTUROUS: 'adventurous',
    };

    const options = [
        { id: 1, label: "Meet New Friends", value: EnumOfInterest.MEET_NEW_FRIENDS },
        { id: 2, label: "Looking for Love", value: EnumOfInterest.LOOKING_FOR_LOVE },
        { id: 3, label: "Movie Date", value: EnumOfInterest.MOVIE_DATE },
        { id: 4, label: "Foodies", value: EnumOfInterest.FOODIES },
        { id: 5, label: "Travel Buddies", value: EnumOfInterest.TRAVEL_BUDDIES },
        { id: 6, label: "Game Lover", value: EnumOfInterest.GAME_LOVER },
        { id: 7, label: "Chit Chat", value: EnumOfInterest.CHITCHAT },
        { id: 8, label: "Adventurous", value: EnumOfInterest.ADVENTUROUS },
    ];







    const FildsTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const FiledsValue = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const FiledsValue2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const labelText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [showForm, setshowForm] = useState(false);

    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state



    const [selectedInterests, setSelectedInterests] = useState([]);
    const [UpdatedData, setUpdatedData] = useState({
        name: "",
        writeBoutYourSelf: "",
        gender: "",
        religion: "",
        datingData: [
            {
                interestedIn: [],
                CurrentlyLiving: "",
                Ethnicity: ""
            }]

    });

    // UseEffect that updates `updatedData` when `details` changes
    useEffect(() => {
        if (details) {
            setUpdatedData({
                name: details?.name || "",
                religion: details?.religion || "",
                writeBoutYourSelf: details?.writeBoutYourSelf || "",
                gender: details?.gender || "",
                datingData: [
                    {
                        ...details?.datingData[0],
                        interestedIn: details?.datingData[0]?.interestedIn || [],
                        Ethnicity: details?.datingData[0]?.Ethnicity || "",
                        CurrentlyLiving: details?.datingData[0]?.CurrentlyLiving || ""
                    }
                ]

            });
        }
    }, [details]); // Add `details` as a dependency

    const [CharCount, setCharCount] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "Ethnicity") {
            setUpdatedData((prev) => ({
                ...prev,
                datingData: [
                    {
                        ...prev.datingData[0],
                        Ethnicity: value
                    }]

            }));
        }
        else if (name === "CurrentlyLiving") {
            setUpdatedData((prev) => ({
                ...prev,
                datingData: [
                    {
                        ...prev.datingData[0],
                        CurrentlyLiving: value
                    }]

            }));
        } else if (name === "interestedIn") {
            setUpdatedData((prev) => ({
                ...prev,
                datingData: [
                    {
                        ...prev.datingData[0],
                        interestedIn: selectedInterests
                    }]

            }));
        }
        else {
            setUpdatedData((prev) => ({
                ...prev,
                [name]: value
            }));

            if (name === "writeBoutYourSelf") {
                setCharCount(value.length);
            }
        }
    };

    useEffect(() => {
        setUpdatedData((prev) => ({
            ...prev,
            datingData: [
                {
                    ...prev.datingData[0],
                    interestedIn: selectedInterests
                }]

        }));
    }, [selectedInterests]);



    const dispatch = useDispatch()

    const UpdateData = () => {
        dispatch(updateUserDetails(UpdatedData))
        setshowForm(false)
    }



    return (
        <>
            <div className={`space-y-[20px] w-full ${showForm ? "h-full" : "h-[440px]"} rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px]`}>
                <div className=''>
                    <ul className='mt-2 h-full flex justify-between items-center'>
                        <li><p>Basic Info</p></li>
                        <li>
                            <div className='cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                {!showForm ?
                                    <Image alt='editIcon' width={20} height={20} onClick={() => setshowForm(!showForm)} src={darkMode ? '/assests/dashboard/icon/edit-details-icon-white.svg' : '/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={() => setshowForm(!showForm)} src={darkMode ? '/assests/profile/cross-edit-icon-white.svg' : '/assests/profile/cross-edit-icon.svg'} />

                                }
                            </div>

                        </li>
                    </ul>
                </div>
                {
                    showForm ?
                        <>
                            <div className='w-full h-[1px] bg-[#F1F1F1]'></div>
                            <div className='pt-0 pb-7'>
                                <ul className='space-y-[40px]'>
                                    <li style={{ width: "100%" }}>
                                        <p style={FildsTitle}>Purpose</p>
                                        <ReusableMultiSelect
                                            options={options}
                                            setSelectedValues={setSelectedInterests}
                                        // initialSelected={initialSelected}

                                        />
                                    </li>
                                    <li>
                                        <div className='flex justify-between items-center space-x-[20px]'>
                                            <div style={{ width: "260px" }} className="the-input-container">
                                                <input
                                                    value={UpdatedData?.name}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    onChange={handleInputChange}
                                                    required
                                                    style={labelText}
                                                />
                                                <label for="name" style={labelText} className="label text-[16px]">
                                                    First Name
                                                </label>
                                            </div>

                                            <div style={{ position: "relative" }} className=' w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[260px]'>
                                                <p className='absolute top-[-16px]' style={FildsTitle}>Gender</p>
                                                <DynamicSelect
                                                    className='w-[260px]'
                                                    placeholder={UpdatedData?.gender} //gender
                                                    styles={LabelStyle}
                                                    options={GenderOption}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "gender", value: selectedOption?.value } })}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li clssName=''>

                                        <div className='flex items-center justify-between'>
                                            <div style={{ width: "260px" }}>
                                                <p className='relative top-[-10px]' style={labelText}>Date of Birth</p>
                                                <input style={{ width: "260px" }} type="date" name="dateOfBirth" onChange={handleInputChange} className="pb-[5px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000]" required />
                                            </div>

                                            <div className='w-[260px]' style={{ position: "relative", top: "5px" }}>
                                                <p className='absolute top-[-16px]' style={FildsTitle}>Currently Living</p>
                                                <DynamicSelect
                                                    className="w-[260px]"
                                                    placeholder={UpdatedData?.datingData[0]?.CurrentlyLiving || "Select your location"}
                                                    //religion
                                                    styles={LabelStyle}
                                                    options={CountryOptions}
                                                    onChange={(selectedOption) =>
                                                        handleInputChange({
                                                            target: {
                                                                name: "CurrentlyLiving",
                                                                value: selectedOption?.value,
                                                            },
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li clssName=''>

                                        <div className='flex items-center justify-between'>
                                            <div style={{ width: "260px" }}>
                                                <p className='relative top-[-8px]' style={labelText}>Religion</p>
                                                <input style={{ width: "260px" }} type="text" value={UpdatedData?.religion} name="religion" onChange={handleInputChange} className="pb-[5px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000]" required />
                                            </div>

                                            <div className='w-[260px]' style={{ position: "relative", top: "5px" }}>
                                                <p className='absolute top-[-16px]' style={FildsTitle}>Ethnicity</p>
                                                <DynamicSelect
                                                    className="w-[260px]"
                                                    placeholder={UpdatedData?.datingData[0]?.Ethnicity || "Select your location"}
                                                    styles={LabelStyle}
                                                    options={CityOptions}
                                                    onChange={(selectedOption) =>
                                                        handleInputChange({
                                                            target: {
                                                                name: "Ethnicity",
                                                                value: selectedOption?.value,
                                                            },
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <div style={{ width: "100%" }} className="the-input-container">
                                                <span className='absolute right-[10px] text-[14px] text-[#AFAFAF]'>
                                                    {CharCount}&nbsp;/&nbsp;150
                                                </span>
                                                <input style={labelText} value={UpdatedData?.writeBoutYourSelf} onChange={handleInputChange} type="text" id="writeBoutYourSelf" name='writeBoutYourSelf' required />
                                                <label for="writeBoutYourSelf" className="label" style={labelText}>Short Bio</label>
                                                <div className="underline"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className='grid place-items-end w-full mt-5'>
                                    <button onClick={UpdateData} className='w-[100px] h-[40px] rounded-[20px] bg-custom-gradient text-[#FFF] hover:opacity-75'>Update</button>
                                </div>
                            </div>
                        </>
                        : <>
                            <div className='flex justify-center'>
                                <div className='grid place-items-center w-full h-[1px] bg-[#F1F1F1]'></div>
                            </div>

                            <div className='space-y-8'>
                                <div>
                                    <ul className='space-y-[5px]'>
                                        <li>
                                            <p style={FildsTitle}>Purpose</p>
                                        </li>
                                        <li>
                                            <ul className='flex space-x-[15px]'>
                                                {
                                                    details?.datingData[0]?.interestedIn?.map((res, index) => {
                                                        return (
                                                            <li key={index} style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#F2F2F2] text-[#000]'>{res}</li>

                                                        )
                                                    })
                                                }
                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className=''>
                                        <ul className='flex justify-between'>
                                            <li className='space-y-[5px]'>
                                                <p style={FildsTitle}>Date of Birth</p>
                                                <h1 style={FiledsValue}>{getFormattedDate(details?.dateOfBirth) || "NA"}</h1>
                                            </li>
                                            <li className='space-y-[5px] w-[200px]'>
                                                <p style={FildsTitle}>Currently Living</p>
                                                <h1 style={FiledsValue}>{capitalizeFirstLetter(details?.datingData?.[0]?.CurrentlyLiving) || "NA"}</h1>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className=''>
                                        <ul className='space-y-[5px]'>
                                            <li>
                                                <p style={FildsTitle}>Language Spoken</p>
                                            </li>
                                            <li>
                                                <ul className='flex space-x-[15px]'>
                                                    <li style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#F2F2F2] text-[#000]'>{"Casual Dating"}</li>
                                                    <li style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#F2F2F2] text-[#000]'>{"Meet New Friends"}</li>

                                                </ul>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className=''>
                                        <ul className='flex justify-between'>
                                            <li className='space-y-[5px]'>
                                                <p style={FildsTitle}>Religion</p>
                                                <h1 style={FiledsValue}>{capitalizeFirstLetter(details?.religion) || "NA"}</h1>
                                            </li>
                                            <li className='space-y-[5px] w-[200px]'>
                                                <p style={FildsTitle}>Ethnicity</p>
                                                <h1 style={FiledsValue}>{capitalizeFirstLetter(details?.datingData?.[0]?.Ethnicity) || "NA"}</h1>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </>
                }
            </div>
        </>
    )
}

export default BasicInfo