import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import ReusableMultiSelect from '../../../../../components/Dating/register/sections/MusltiSelectDating';
import { updateUserDetails } from '../../../../../store/dating-services/Redux-reducer/home/MyprofileReducer';

function PurposeTab() {

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


    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }



    const FildsTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
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
            <div className={`space-y-[20px] w-full ${showForm ? "h-full" : "h-[169px]"} rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px]`}>
                <div className=''>
                    <ul className='mt-2 h-full flex justify-between items-center'>
                        <li><p style={TitleText}>Purpose</p></li>
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
                <div className='flex justify-center'>
                    <div className='grid place-items-center w-full h-[1px] bg-[#F1F1F1]'></div>
                </div>
                {
                    showForm ?
                        <>
                            <div className='space-y-8 pb-5'>
                                <div className='pt-0 pb-7'>
                                    <ul className='space-y-[40px]'>
                                        <li style={{ width: "100%" }}>

                                            <ReusableMultiSelect
                                                options={options}
                                                setSelectedValues={setSelectedInterests}
                                            // initialSelected={initialSelected}

                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='grid place-items-end w-full mt-5 pb-5'>
                                <button onClick={UpdateData} className='w-[100px] h-[40px] rounded-[20px] bg-custom-gradient text-[#FFF] hover:opacity-75'>Update</button>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <ul className=''>

                                    <li>
                                        <ul className='flex space-x-[15px]'>
                                            {
                                                details?.datingData[0]?.interestedIn?.map((res, index) => {
                                                    return (
                                                        <li key={index} style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full bg-[#FFF] border-[1px] border-[#DEDEDE] text-[#000]'>{res}</li>

                                                    )
                                                })
                                            }
                                        </ul>

                                    </li>
                                </ul>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default PurposeTab