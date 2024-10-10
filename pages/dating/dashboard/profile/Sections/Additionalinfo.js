import React, { useState } from 'react'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import Image from 'next/image';

function Additionalinfo() {

    const { data, status, totalLikes } = useSelector((state) => state?.myprofile);
    const { darkMode, toggleDarkMode } = useDarkMode();

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



    const [showForm, setshowForm] = useState(false)



    return (
        <>
            <div className='space-y-[20px] w-full h-[240px] rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] '>
                <div>
                    <ul className='flex justify-between items-center'>
                        <li><p>Professional Details</p></li>
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
                <div className='pr-11 space-y-8'>
                    <div className=''>
                        <ul className='flex justify-between'>
                            <li className='space-y-[5px]'>
                                <p style={FildsTitle}>Education Level</p>
                                <h1 style={FiledsValue}>{"Bachelor"}</h1>
                            </li>
                            <li className='space-y-[5px]'>
                                <p style={FildsTitle}>Occupation</p>
                                <h1 style={FiledsValue}>{capitalizeFirstLetter(data?.datingData[0]?.Occupation) || "NA"}</h1>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-[5px]'>
                            <li>
                                <p style={FildsTitle}>Annual Income</p>
                            </li>
                            <li>
                                <h1 style={FiledsValue}>30 Lacs above</h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Additionalinfo