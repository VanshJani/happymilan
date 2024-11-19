import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import Image from 'next/image';
import calculateAge from '../../../../../utils/helpers/CalculateAge';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import { getFormattedDate } from '../../../../../utils/helpers/GetFormatedDate';
import { GetDatingUserById } from '../../../../../store/dating-services/Redux-actions/home/DatingUsersActions';
import UserProfileMenu from '../../../../../components/long-term/common/Model/UserPopover';
import ViewProfile from '../../../../../components/common/Models/ViewProfile';


function Userprofile() {

    const Username = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };




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




    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const router = useRouter();

    const { userprofile } = router.query;
    console.log("🚀 ~ Userprofile ~ userprofile:", userprofile)

    const { data, loading, error } = useSelector((state) => state.datingusers?.Userdata);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetDatingUserById(userprofile));
    }, [userprofile, dispatch]);

    return (
        <div className='w-full h-full grid place-items-center'>
            <div className='xl:w-[631px] w-full'>
                <div className='bg-custom-gradient xl:w-[631px] w-full h-[138px] rounded-[10px]'>
                    <div className='relative right-0 left-2'>
                        <UserProfileMenu Privacy={true} res={data} />
                    </div>
                    <div className='w-full h-full flex justify-center'>
                        <div onClick={openModal} className='cursor-pointer translate-y-10'>

                            {data?.profilePic ? (
                                <>
                                    <Image loading='lazy'
                                        alt='userProfile'
                                        width={184}
                                        height={184}
                                        className=' rounded-[50%] mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]'
                                        src={data?.profilePic}
                                        style={{ objectFit: "cover" }}
                                    />
                                </>
                            ) : (
                                <>
                                    <Avatar
                                        name={data?.name}
                                        size="184"
                                        round={true}
                                    />
                                </>
                            )}

                        </div>
                    </div>
                </div>

                <div className='mt-[90px]'>
                    <div className='pb-[10px]'>
                        <ul className='text-center space-y-[20px]'>
                            <li>
                                {data && data?.name ? (
                                    <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >{data?.name}</h1>
                                ) : (
                                    <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >NA</h1>
                                )}
                            </li>
                        </ul>
                        <div className='w-full pt-[10px]'>
                            <ul className='translate-x-[10px] w-full flex justify-center items-center space-x-[8px] md:space-x-[50px]'>
                                <li className=''>
                                    <div className='flex items-center space-x-[10px]'>
                                        <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{data?.gender ? capitalizeFirstLetter(data?.gender) : "NA"}&nbsp;,&nbsp;{calculateAge(data?.dateOfBirth) || "NA"}</h1>
                                    </div>
                                </li>
                                <li className=''>
                                    <div className='flex items-center space-x-[10px]'>
                                        <Image loading='lazy' alt='bagIcon' width={14} height={12} src='/assests/dashboard/icon/bag-icon.svg' />
                                        <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{capitalizeFirstLetter(data?.datingData?.[0]?.Occupation) || "NA"}</h1>
                                    </div>
                                </li>
                                <li className=''>
                                    <div className='flex items-center space-x-[10px]'>
                                        <Image loading='lazy' alt='loactionIcon' width={10} height={12} src='/assests/dashboard/icon/location-icon.svg' />
                                        <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{capitalizeFirstLetter(data?.datingData?.[0]?.Ethnicity) || "NA"} , {capitalizeFirstLetter(data?.datingData?.[0]?.CurrentlyLiving) || ""}</h1>
                                    </div>
                                </li>
                            </ul>

                            <div className='text-center pt-[13px]'>
                                <p className='dark:text-[#FFF] text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]' style={Text2}>{capitalizeFirstLetter(data?.writeBoutYourSelf) || "About yourSelf"}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='space-y-[20px] mt-[27px]'>

                    <div className={`space-y-[20px] w-full h-[169px] rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px]`}>
                        <div className='pt-4'>
                            <ul className='flex justify-between items-center'>
                                <li><p>Purpose</p></li>
                            </ul>
                        </div>
                        <div className='flex justify-center'>
                            <div className='grid place-items-center w-full h-[1px] bg-[#F1F1F1]'></div>
                        </div>
                        <div>
                            <ul className='flex space-x-[15px]'>
                                {
                                    data?.datingData?.[0]?.interestedIn?.map((res, index) => {
                                        return (
                                            <li key={index} style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full border-[1px] border-[#DEDEDE] text-[#000]'>{res}</li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>

                    <div className={`space-y-[20px] w-full h-[357px] rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px]`}>
                        <div className='pt-4'>
                            <ul className='flex justify-between items-center'>
                                <li><p>Basic Info</p></li>
                            </ul>
                        </div>
                        <div className='flex justify-center'>
                            <div className='grid place-items-center w-full h-[1px] bg-[#F1F1F1]'></div>
                        </div>

                        <div className='space-y-8'>
                            <div>
                                <div className=''>
                                    <ul className='flex justify-between'>
                                        <li className='space-y-[5px]'>
                                            <p style={FildsTitle}>Date of Birth</p>
                                            <h1 style={FiledsValue}>{getFormattedDate(data?.dateOfBirth) || "NA"}</h1>
                                        </li>
                                        <li className='space-y-[5px] w-[150px]'>
                                            <p style={FildsTitle}>Currently Living</p>
                                            <h1 style={FiledsValue}>{capitalizeFirstLetter(data?.datingData?.[0]?.CurrentlyLiving) || "NA"}</h1>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className=''>
                                    <ul className='flex justify-between'>
                                        <li className='space-y-[5px]'>
                                            <p style={FildsTitle}>Religion</p>
                                            <h1 style={FiledsValue}>{capitalizeFirstLetter(data?.religion) || "NA"}</h1>
                                        </li>
                                        <li className='space-y-[5px] w-[150px]'>
                                            <p style={FildsTitle}>Ethnicity</p>
                                            <h1 style={FiledsValue}>{capitalizeFirstLetter(data?.datingData?.[0]?.Ethnicity) || "NA"}</h1>
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
                                                <li style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full border-[1px] border-[#DEDEDE] text-[#000]'>{"Casual Dating"}</li>
                                                <li style={FiledsValue2} className='p-[8px] pl-[10px] pr-[10px] rounded-full border-[1px] border-[#DEDEDE] text-[#000]'>{"Meet New Friends"}</li>

                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={`space-y-[20px] w-full h-[169px]  rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] `}>
                            <div className='pt-4'>
                                <ul className='flex justify-between items-center'>
                                    <li><p>Professional Details</p></li>
                                </ul>
                            </div>
                            <div className='flex justify-center'>
                                <div className='grid place-items-center w-full h-[1px] bg-[#F1F1F1]'></div>
                            </div>


                            <div className='space-y-8'>
                                <div>
                                    <div className=''>
                                        <ul className='flex justify-between'>
                                            <li className='space-y-[5px]'>
                                                <p style={FildsTitle}>Education Level</p>
                                                <h1 style={FiledsValue}>{capitalizeFirstLetter(data?.datingData?.[0]?.educationLevel) || "NA"}</h1>
                                            </li>
                                            <li className='space-y-[5px] w-[150px]'>
                                                <p style={FildsTitle}>Occupation</p>
                                                <h1 style={FiledsValue}>{capitalizeFirstLetter(data?.datingData?.[0]?.Occupation) || "NA"}</h1>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`space-y-[20px] w-full h-[168px] rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] `}>
                            <div className='pt-4'>
                                <ul className='flex justify-between items-center'>
                                    <li><p>Hobbies & Interests</p></li>

                                </ul>
                            </div>
                            <div className='w-full h-[1px] bg-[#F1F1F1]'></div>
                            <div>
                                <ul className='flex space-x-[15px]'>
                                    {
                                        data?.hobbies?.map((res, index) => {
                                            return (
                                                <li key={index} className='p-[10px] pl-[15px] pr-[15px] rounded-full border-[1px] border-[#DEDEDE] text-[#000]' style={FiledsValue2}>{capitalizeFirstLetter(res)}</li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ViewProfile Wsize={347} Hsize={450} isOpen={isModalOpen} onClose={closeModal}>
                <div style={{ width: '347px', height: '450px', position: 'relative', borderRadius: "10px" }}>
                    <Image
                        // width={347}
                        // height={450}
                        style={{ borderRadius: "10px" }}
                        layout="fill"  // Ensure the image fills the container
                        objectFit='cover'  // Crop to fit without distortion
                        alt='profile'
                        src={data?.profilePic}
                    // Ensure this points to a valid source
                    />
                </div>
            </ViewProfile>

        </div >



    )
}

export default Userprofile