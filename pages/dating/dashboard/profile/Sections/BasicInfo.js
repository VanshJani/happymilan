import { getCookie } from 'cookies-next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';

function BasicInfo() {

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

    const [token, settoken] = useState("")


    useEffect(() => {
        settoken(getCookie("authtoken"))
    }, [])

    const [showForm, setshowForm] = useState(false)

    const [openProfileModal, setOpenProfileModal] = React.useState(false);
    const handleOpen = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);

    return (
        <>
            <div className='space-y-[20px] w-full h-[240px] rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] '>
                <div>
                    <ul className='flex justify-between items-center'>
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

                        </>
                        : <>
                            <div className='w-full h-[1px] bg-[#F1F1F1]'></div>
                            <div>
                                <ul className='space-y-[5px]'>
                                    <li>
                                        <p style={FildsTitle}>Purpose</p>
                                    </li>
                                    <li>
                                        <h1 style={FiledsValue}>Meet New Friends, Movie Date</h1>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul className='flex justify-between'>
                                    <li className='space-y-[5px]'>
                                        <p style={FildsTitle}>Date of Birth</p>
                                        <h1 style={FiledsValue}>16 August</h1>
                                    </li>
                                    <li className='space-y-[5px]'>
                                        <p style={FildsTitle}>Currently Living</p>
                                        <h1 style={FiledsValue}>Ahmedabad, India</h1>
                                    </li>
                                </ul>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default BasicInfo