import Image from 'next/image'
import React from 'react'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import calculateAge from '../../../../../utils/helpers/CalculateAge'
import { useSelector } from 'react-redux';

function ProfileDetails({ data }) {


    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state


    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    return (
        <>
            <div className='my-4 pb-[10px]'>
                <ul className='flex justify-center items-center space-x-[20px] md:space-x-[40px] lg:space-x-[40px] xl:space-x-[40px] 2xl:space-x-[40px]'>
                    <li>
                        <div className='flex items-center space-x-[10px]'>
                            <Image loading='lazy' alt='heartIcon' width={16} height={14} src='/assests/dashboard/icon/heart-icon.svg' />
                            <h1 style={Text3} id='live-count' className='dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]'>{0}<span style={Text2} className='pl-[5px] text-[14px] text-[#8B8B8B]'> Likes </span></h1>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-[10px]'>
                            <Image loading='lazy' alt='upIcon' width={14} height={14} src='/assests/dashboard/icon/up-arrow.svg' />
                            {/* Pending--v2  */}
                            <h1 style={Text3} className='dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]'>{0}<span style={Text2} className='pl-[5px] text-[14px] text-[#8B8B8B]'>Sent</span></h1>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-[10px]'>
                            <Image loading='lazy' alt='downIcon' width={14} height={14} src='/assests/dashboard/icon/down-arrow.svg' />
                            <h1 style={Text3} className='dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]'>{0}<span style={Text2} className='pl-[5px] text-[14px] text-[#8B8B8B]'>Received</span></h1>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='h-[1px] w-full bg-[#EDEDED]'></div>
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
                            <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{capitalizeFirstLetter(details?.datingData[0]?.Occupation) || "NA"}</h1>
                        </div>
                    </li>
                    <li className=''>
                        <div className='flex items-center space-x-[10px]'>
                            <Image loading='lazy' alt='loactionIcon' width={10} height={12} src='/assests/dashboard/icon/location-icon.svg' />
                            <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{capitalizeFirstLetter(details?.datingData[0]?.Ethnicity) || "NA"} , {capitalizeFirstLetter(details?.datingData[0]?.CurrentlyLiving) || ""}</h1>
                        </div>
                    </li>
                </ul>

                <div className='text-center pt-[13px]'>
                    <p className='dark:text-[#FFF] text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]' style={Text2}>{capitalizeFirstLetter(data?.writeBoutYourSelf) || "About yourSelf"}</p>
                </div>

            </div>
        </>
    )
}

export default ProfileDetails