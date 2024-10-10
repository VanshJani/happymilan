import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from 'cookies-next';
import ProfileModal from '../../../../longterm/dashboard/commonCompo/HandleProfileUpload/Modal';
import BasicInfo from './BasicInfo';
import Additionalinfo from './Additionalinfo';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
// import GetDatingUsersReducer from '../../../../../store/dating-services/Redux-reducer/home/DatingUsersReducer';
import { fetchUserDetails } from '../../../../../store/dating-services/Redux-reducer/home/MyprofileReducer';
import ViewProfile from '../../../../../components/common/Models/ViewProfile';
import ProfileDetails from './ProfileDetails';

function GeneralSection() {

    // const { data, status, totalLikes } = useSelector((state) => state.myprofile);
    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state

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
    const dispatch = useDispatch();

    useEffect(() => {
        settoken(getCookie("authtoken"))
        dispatch(fetchUserDetails())
    }, [])

    const [showForm, setshowForm] = useState(false)

    const [openProfileModal, setOpenProfileModal] = React.useState(false);
    const handleOpen = () => {
        setIsModalOpen(false)
        setOpenProfileModal(true)
    };
    const handleClose = () => setOpenProfileModal(false);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className='w-full h-full grid place-items-center'>
                <div className='xl:w-[631px] w-full'>
                    <div className='bg-custom-gradient xl:w-[631px] w-full h-[138px] rounded-[10px]'>
                        <div className='w-full h-full flex justify-center'>
                            <div onClick={openModal} className='cursor-pointer translate-y-10'>
                                {
                                    token ? (
                                        <>
                                            {details?.profilePic ? (
                                                <>
                                                    <Image loading='lazy'
                                                        alt='userProfile'
                                                        width={184}
                                                        height={184}
                                                        className=' rounded-[50%] mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]'
                                                        src={details.profilePic}
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
                                    {details && details?.name ? (
                                        <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >{details?.name}</h1>
                                    ) : (
                                        <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >NA</h1>
                                    )}
                                </li>
                            </ul>
                            <ProfileDetails data={details} />
                        </div>
                    </div>
                    <div className='space-y-[20px] mt-[27px]'>
                        <div>
                            <BasicInfo />
                        </div>
                        <div>
                            <Additionalinfo />
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


            <ViewProfile Wsize={347} Hsize={450} isOpen={isModalOpen} onClose={closeModal}>
                <div style={{ width: '347px', height: '450px', position: 'relative', borderRadius: "10px" }}>
                    <Image
                        // width={347}
                        // height={450}
                        style={{ borderRadius: "10px" }}
                        layout="fill"  // Ensure the image fills the container
                        objectFit='cover'  // Crop to fit without distortion
                        alt='profile'
                        src={details?.profilePic}
                    // Ensure this points to a valid source
                    />
                    <div className='z-10 absolute bottom-6 grid place-items-center w-full'>
                        <ul className=' flex space-x-[19px]'>
                            <li onClick={handleOpen} className='w-[38px] h-[38px] grid place-items-center bg-[#ffffff] rounded-full'>
                                <Image alt='editIcon' width={18} height={18} src={darkMode ? '/assests/dashboard/icon/edit-details-icon-white.svg' : '/assests/dashboard/icon/edit-details-icon.svg'} />
                            </li>
                            <li onClick={() => console.log("")} className='w-[38px] h-[38px] bg-[white] rounded-full grid place-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M3.21326 13.7097C2.82684 13.7097 2.49772 13.5738 2.22589 13.302C1.95407 13.0302 1.81817 12.701 1.81817 12.3146V1.61881H0.954529V0.755173H4.40907V0.0908203H9.59089V0.755173H13.0454V1.61881H12.1818V12.3146C12.1818 12.7121 12.0487 13.044 11.7824 13.3103C11.5161 13.5766 11.1842 13.7097 10.7867 13.7097H3.21326ZM11.3182 1.61881H2.6818V12.3146C2.6818 12.4696 2.73163 12.597 2.83128 12.6966C2.93092 12.7963 3.05825 12.8461 3.21326 12.8461H10.7867C10.9196 12.8461 11.0414 12.7907 11.1521 12.68C11.2628 12.5693 11.3182 12.4475 11.3182 12.3146V1.61881ZM5.10661 11.1188H5.97027V3.34608H5.10661V11.1188ZM8.0297 11.1188H8.89335V3.34608H8.0297V11.1188Z" fill="black" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </ViewProfile>
        </>
    )
}

export default GeneralSection