import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyProfileData } from '../../../../../store/reducers/MyProfile';
import { Skeleton } from '@mui/material';

function SkeletonProfile() {

    const Username = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

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

    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }



    const GeneralTab = () => {

        return (
            <>
                <div className={`w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>

                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <li><Skeleton variant='h1' style={Text2} className='text-[16px]'></Skeleton></li>
                            <li>

                                <Skeleton className='cursor-pointer w-[37px] h-[37px] bg-[#F0F9FF] rounded-[5px] flex items-center justify-center'>

                                    <Image alt='icon' width={37} height={37} src={'/assests/dashboard/icon/modify-icon.svg'} />

                                </Skeleton>
                            </li>
                        </ul>
                    </div>



                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Date of Birth</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>02 . 03. 1986</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Birth of Time</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>10:01:20 AM</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Religion</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>Hindu</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Caste/Sub Caste</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>Patel, Kadva Patidar</h1>
                            </Skeleton>
                        </div>
                    </div>

                    <div className='hidden md:flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div className="w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <div>
                                <Skeleton variant="p" style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'></Skeleton>
                                <Skeleton variant='h1' style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'></Skeleton>
                            </div>
                            <div>
                                <Skeleton variant='p' style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'></Skeleton>
                                <Skeleton variant='h1' style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'></Skeleton>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }


    const dispatch = useDispatch();

    const { data, status } = useSelector((state) => state.myprofile);





    useEffect(() => {
        dispatch(fetchMyProfileData());


    }, []);



    const router = useRouter();


    return (
        <>

            <div className=" dark:bg-[#18191a] 2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[0px] lg:pr-[30px] pl-[0px] pr-[20px] relative 2xl:left-[40px] xl:left-[45px] lg:left-0 left-[0px]">
                <div className={` flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:w-full w-full dark:bg-[#18191a] bg-[#FFF]`}>
                    <div
                        className='bg-custom-gradient w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]'>

                        <div className='flex justify-between pb-[50px]'>
                            <div className='block lg:hidden cursor-pointer pr-[20px] pt-[20px]'>
                                <span className=" h-12 w-12 text-lg text-white "><i className={`bx bx-cog `}></i></span>
                            </div>

                        </div>
                        <div>
                        </div>
                        <div className=' grid place-items-center'>
                            <Skeleton variant="circular" width={184} height={184} className='mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]' />
                            <Skeleton className='pb-[10px] pt-[15px]'>
                                <h1 style={Username} className='text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >Riya Shah </h1></Skeleton>
                        </div>
                        <div className='space-y-[5px]'>
                            <div className='pb-[10px]'>
                                <ul className='mt-[10px] flex justify-center items-center space-x-[20px] md:space-x-[40px] lg:space-x-[40px] xl:space-x-[40px] 2xl:space-x-[40px]'>
                                    <li>
                                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
                                    </li>
                                    <li>
                                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
                                    </li>
                                    <li>
                                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
                                    </li>
                                </ul>
                            </div>

                            <div className='h-[1px] w-full bg-[#EDEDED]'></div>
                            <div className='pt-[10px]'>
                                <ul className='flex justify-center items-center space-x-[8px] md:space-x-[40px]'>
                                    <li>
                                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28 "></div>

                                    </li>
                                    <li>
                                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28 "></div>

                                    </li>
                                    <li>
                                        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28 "></div>
                                    </li>
                                </ul>



                            </div>
                            <Skeleton className='text-center pt-[10px]'>
                                <p className='text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]' style={Text2}>{"I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile on the face. I am a big Nature & Animal lover. I have lived in different parts of India and appreciate all cultures & customs. "}</p>
                            </Skeleton>

                            <div className='hidden lg:flex space-x-[25px] 2xl:space-x-[25px] xl:space-x-[20px] lg:space-x-[35px] pt-[20px]'>

                                <Skeleton className={` w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[10px]`}>

                                </Skeleton>
                                <Skeleton className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[10px]`}>

                                </Skeleton>
                                <Skeleton className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[10px]`}>

                                </Skeleton>

                                <Skeleton className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[10px]`}>

                                </Skeleton>
                                <Skeleton className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[10px]`}>

                                </Skeleton>
                                <Skeleton className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[10px]`}>

                                </Skeleton>

                                <Skeleton className={`w-[200px] h-[50px] cursor-pointer   flex justify-center items-center space-x-[15px] rounded-[10px]`}>
                                </Skeleton>

                            </div>

                            <div className='hidden lg:block pt-[10px] pb-[30px]'>
                                {/* <GeneralTab/> */}
                                <GeneralTab />
                            </div>
                            <div className='block lg:hidden pt-[10px] pb-[30px]'>
                                {/* <GeneralTab/> */}
                                <div className='flex flex-col space-y-[30px] pb-[50px]'>
                                    <div>
                                        <GeneralTab />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default SkeletonProfile