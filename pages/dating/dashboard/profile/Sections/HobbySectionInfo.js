import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import ReusableMultiSelect from '../../../../../components/Dating/register/sections/MusltiSelectDating';
import { updateUserDetails } from '../../../../../store/dating-services/Redux-reducer/home/MyprofileReducer';

function HobbySectionInfo() {


    const { darkMode } = useDarkMode();

    const options = [
        { value: 'reading', label: 'Reading' },
        { value: 'traveling', label: 'Traveling' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'gaming', label: 'Gaming' },
        { value: 'photography', label: 'Photography' },
        { value: 'art', label: 'Art' },
        { value: 'gardening', label: 'Gardening' },
        { value: 'dancing', label: 'Dancing' },
    ];


    const [showForm, setshowForm] = useState(false);

    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state

    const [selectedInterests, setSelectedInterests] = useState([]);

    const HobbyValue = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
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

    const [UpdatedData, setUpdatedData] = useState({
        hobbies: []
    })


    useEffect(() => {
        setUpdatedData((prev) => ({
            hobbies: selectedInterests
        }));
    }, [selectedInterests]);



    const dispatch = useDispatch()

    const UpdateData = () => {
        dispatch(updateUserDetails(UpdatedData))
        setshowForm(false)
    }


    return (
        <>
            <div className={`space-y-[20px] w-full ${!showForm ? "h-[168px]" : "h-[250px]"} rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] `}>
                <div>
                    <ul className='flex justify-between items-center'>
                        <li><p>Hobbies & Interests</p></li>
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
                <div className='w-full h-[1px] bg-[#F1F1F1]'></div>
                {
                    showForm ?
                        <>
                            <div>
                                <div style={{ width: "100%" }}>
                                    <p style={FildsTitle}>Purpose</p>
                                    <ReusableMultiSelect
                                        options={options}
                                        setSelectedValues={setSelectedInterests}
                                    />
                                </div>
                            </div>

                            <div className='grid place-items-end w-full mt-5'>
                                <button onClick={UpdateData} className='w-[100px] h-[40px] rounded-[20px] bg-custom-gradient text-[#FFF] hover:opacity-75'>Update</button>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <ul className='flex space-x-[15px]'>
                                    {
                                        details?.hobbies?.map((res, index) => {
                                            return (
                                                <li key={index} className='p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]' style={HobbyValue}>{capitalizeFirstLetter(res)}</li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>


                        </>
                }

            </div>
        </>
    )
}

export default HobbySectionInfo