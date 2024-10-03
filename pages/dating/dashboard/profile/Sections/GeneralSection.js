import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { useSelector } from 'react-redux';
import { getCookie } from 'cookies-next';
import ProfileModal from '../../../../longterm/dashboard/commonCompo/HandleProfileUpload/Modal';
import BasicInfo from './BasicInfo';
// import Modal from '../../../../longterm/dashboard/commonCompo/storyUploadcomp/components/Modal';

function GeneralSection() {

    const { data, status, totalLikes } = useSelector((state) => state.myprofile);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const Username = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const Text = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
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

    const FiledsValue = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const HobbyValue = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
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
            <div className='w-full h-full grid place-items-center'>
                <div className='xl:w-[631px] w-full'>
                    <div className='bg-custom-gradient xl:w-[631px] w-full h-[138px] rounded-[10px]'>
                        <div className='w-full h-full flex justify-center'>
                            <div onClick={handleOpen} className='translate-y-10'>
                                {
                                    token ? (
                                        <>
                                            {data?.profilePic ? (
                                                <>
                                                    <Image loading='lazy'
                                                        alt='userProfile'
                                                        width={184}
                                                        height={184}
                                                        className=' rounded-[50%] mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]'
                                                        src={data.profilePic}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <Avatar
                                                        name={getCookie("userName")}
                                                        size="184"
                                                        round={true}
                                                    />
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <Avatar
                                            name={getCookie("userName")}
                                            size="180"
                                            round={true}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className='mt-[90px]'>
                        <div className='pb-[10px]'>
                            <ul className='text-center space-y-[20px]'>
                                <li>
                                    {data && data.name ? (
                                        <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >{data?.name}</h1>
                                    ) : (
                                        <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >NA</h1>
                                    )}
                                </li>
                                <li>

                                    <h1 style={Text} className='text-[12px]'>Software Engineer</h1>
                                </li>
                                <li>

                                    <p style={Text} className='text-[14px]'>I'm a passionate and caring person who is always looking for new experiences</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-[20px] mt-[27px]'>
                        <div>
                            <BasicInfo />
                        </div>
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

                            <div className=''>
                                <ul className='flex justify-between'>
                                    <li className='space-y-[5px]'>
                                        <p style={FildsTitle}>Current Designation</p>
                                        <h1 style={FiledsValue}>Software Engineer</h1>
                                    </li>
                                    <li className='space-y-[5px]'>
                                        <p style={FildsTitle}>Company Name</p>
                                        <h1 style={FiledsValue}>N.A</h1>
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
                        <div className='space-y-[20px] w-full h-[168px] rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] '>
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
                            <div>
                                <ul className='flex space-x-[15px]'>
                                    <li className='p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]' style={HobbyValue}>Writing</li>
                                    <li className='p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]' style={HobbyValue}>Yoga</li>
                                    <li className='p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]' style={HobbyValue}>Travel</li>
                                    <li className='p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]' style={HobbyValue}>Movies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ProfileModal
                handleClose={handleClose}
                handleOpen={handleOpen}
                setOpenProfileModal={setOpenProfileModal}
                openProfileModal={openProfileModal}
            />
        </>
    )
}

export default GeneralSection