import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { fetchUsers, setAgeRange } from '../../../store/dating-services/Redux-reducer/home/datinguserSlice';
import { useDarkMode } from '../../../ContextProvider/DarkModeContext';

const DatingProfileImage = dynamic(() => import("../../../pages/_components/common/profile/DatingProfileImage"));


function DatingSideBar() {
    const RangeSlider2 = () => {

        const dispatch = useDispatch();
        const { minAge, maxAge } = useSelector((state) => state.rangeuser);

        useEffect(() => {
            dispatch(fetchUsers(minAge, maxAge));

        }, [])

        const handleAgeChange = (event) => {
            console.log("🚀 ~ handleAgeChange ~ event:", event)
            // const newMinAge = event.target.value[0];

            const newMinAge = event.target.value[0] < 18 ? 18 : event.target.value[0];

            const newMaxAge = event.target.value[1];

            dispatch(setAgeRange({ minAge: newMinAge, maxAge: newMaxAge }));
            dispatch(fetchUsers(newMinAge, newMaxAge));
        };


        return (
            <>

                <div className='w-[220px]'>
                    <ul className='flex justify-between'>
                        <li><h1 style={Text3} className='text-[14px] dark:text-[#FFF]'>Age</h1></li>
                        <li><h1 style={Text3} className='text-[14px] text-[#0F52BA]'>{minAge}-{maxAge}</h1></li>
                    </ul>
                </div>
                <div>

                    <Slider
                        sx={{
                            '& .MuiSlider-track': {
                                backgroundImage: 'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                                height: "2px"
                            },
                            '& .MuiSlider-rail': {
                                height: "1px",
                            },
                            '& .MuiSlider-thumb': {
                                backgroundImage: 'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                                height: "16px",
                                width: "16px",
                                '&:hover': {
                                    boxShadow: 'none', // Removes hover shadow
                                },
                                '&:focus': {
                                    boxShadow: 'none', // Removes focus shadow
                                },
                                '&:active': {
                                    boxShadow: 'none', // Removes active shadow
                                },
                            },
                        }}
                        value={[minAge, maxAge]} // Use values from Redux
                        onChange={handleAgeChange}

                    />
                </div>

            </>
        )
    }



    const RangeSlider = () => {

        const [value, setValue] = useState(50);
        const handleChange = (event, newValue) => {
            setValue(newValue);
        }
        return (
            <>

                <div className='w-[220px]'>
                    <ul className='flex justify-between'>
                        <li><h1 style={Text3} className='text-[14px] dark:text-[#FFF]'>Distance</h1></li>
                        <li><h1 style={Text3} className='text-[14px] text-[#0F52BA]'>{value} km</h1></li>
                    </ul>
                </div>
                <div>

                    <Slider
                        sx={{
                            '& .MuiSlider-track': {
                                backgroundImage: 'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                                height: "2px"
                            },
                            '& .MuiSlider-rail': {
                                height: "1px",
                            },
                            '& .MuiSlider-thumb': {
                                backgroundImage: 'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                                height: "16px",
                                width: "16px",
                                '&:hover': {
                                    boxShadow: 'none', // Removes hover shadow
                                },
                                '&:focus': {
                                    boxShadow: 'none', // Removes focus shadow
                                },
                                '&:active': {
                                    boxShadow: 'none', // Removes active shadow
                                },
                            },
                        }}
                        defaultValue={50}
                        onChange={handleChange} />
                </div>
            </>
        )
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "22px"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px"
    }
    const router = useRouter();


    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state


    const { darkMode, toggleDarkMode } = useDarkMode();


    return (
        <>

            <aside id="separator-sidebar" className=" hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div id="sidebarScroll" className="h-full px-3 py-4 overflow-y-auto bg-[#FFF] dark:bg-[#18191A]">

                    <div className="p-[10px] space-y-[20px]">
                        <div className="cursor-pointer rounded-full h-[50px] w-[50px] hover:opacity-90 duration-100">
                            <DatingProfileImage size={47} />
                        </div>
                        <div>
                            <div className="group cursor-pointer duration-100 inline-block">
                                <Link href={"/dating/dashboard/profile"}>
                                    <h1 className="group-hover:opacity-75 text-[#000] dark:text-[#FFF]" style={Text2}>{details?.name}</h1>
                                </Link>
                            </div>
                            <div className="space-x-[5px] pt-[10px]">
                                <Link href={"/dating/dashboard/profile"}>
                                    <span style={Text3} className="text-[14px] text-[#50545A] dark:text-[#616161]">
                                        ID: {details?.userUniqueId?.toUpperCase()}
                                    </span>{" "}
                                </Link>
                                <span className="text-[#E3E3E3]">|</span>{" "}
                                <Link href={"/dating/dashboard/profile"}>
                                    <span className="text-[14px] text-[#0F52BA] dark:text-[#FFF]  hover:text-[#0645A3]">My Profile</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <ul className="flex flex-col items-center space-y-[8px] pb-[20px] font-medium border-t  border-gray-200 dark:border-gray-700 p-[10px]">

                        <li className='pt-[8px] pb-[10px]'>
                            <div className='flex'>
                                <input type='text' placeholder='Search By Location' className='border-[1px] border-[#E3E3E3] rounded-[20px] h-[40px] w-[240px] outline-none pl-[15px] pr-[30px] dark:bg-[#373636] dark:border-none' />
                                <Image width={15} height={14} src="/assests/Black/Search.svg" className="relative right-[30px]" />
                            </div>
                        </li>

                        {/* <li>
                            <div>
                                <RangeSlider />
                            </div>
                        </li> */}
                        <li>
                            <div>
                                <RangeSlider2 />
                            </div>
                        </li>
                    </ul>
                    <ul className="relative left-[-20px] pb-[20px] pt-2 mt-0 p-[10px] space-y-[10px] font-medium border-t border-gray-200 dark:border-gray-700">
                        {/* <li id='dt-sec-1' className='pt-[8px] space-x-[4px] flex items-center  '> */}
                        <li  className={`cursor-pointer p-[5px] rounded-[15px] pl-2 flex items-center ${darkMode ? "" : "hover:bg-[#F2F7FF]"}  `}>
                            <svg className='dt-sec-1-icon' xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                <path d="M0.647934 13.3521H4.25785V7.93719H8.14545V13.3521H11.7554V5.02149L6.20165 0.809917L0.647934 5.02149V13.3521ZM0 14V4.69752L6.20165 0L12.4033 4.69752V14H7.49752V8.58512H4.90579V14H0Z" fill='black'/>
                            </svg>
                            <Link href="/dating/dashboard"><h1 style={Text3} className={`dark:text-[#FFF] text-[14px] pl-[10px]  ${router.pathname === "/dating/dashboard" ? "text-[#0F52BA]" : ""}`}>Home</h1></Link>
                        </li>
                        {/* <li id='dt-sec-2' className='pt-[8px] flex items-center  '> */}
                        <li className={`cursor-pointer p-[5px] rounded-[15px] pl-2 flex items-center ${darkMode ? "" : "hover:bg-[#F2F7FF]"}  `}>

                            <Image className='dt-sec-2-icon' width={15} height={14} src='/assests/Black/RightTick.svg' />
                            <Link href="/dating/dashboard/accepted">
                                <h1 style={Text3} className={`dark:text-[#FFF] text-[14px] pl-[10px]  ${router.pathname === "/dating/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}>Accepted</h1>
                            </Link>
                        </li>
                        <li className={`cursor-pointer p-[5px] rounded-[15px] pl-2 flex items-center ${darkMode ? "" : "hover:bg-[#F2F7FF]"}  `}>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_576_128)">
                                    <path d="M1.72727 14C1.3822 14 1.09139 13.8817 0.854841 13.6452C0.61828 13.4086 0.5 13.1178 0.5 12.7727V1.22727C0.5 0.882197 0.61828 0.591379 0.854841 0.354818C1.09139 0.118273 1.3822 0 1.72727 0H13.2727C13.6178 0 13.9086 0.118273 14.1452 0.354818C14.3817 0.591379 14.5 0.882197 14.5 1.22727V12.7727C14.5 13.1178 14.3817 13.4086 14.1452 13.6452C13.9086 13.8817 13.6178 14 13.2727 14H1.72727ZM1.72727 13.5H13.2727C13.4848 13.5 13.6591 13.4318 13.7955 13.2955C13.9318 13.1591 14 12.9848 14 12.7727V10.2045H10.4091C10.1364 10.7955 9.73331 11.25 9.19993 11.5682C8.66654 11.8864 8.09836 12.0455 7.49539 12.0455C6.8924 12.0455 6.32576 11.8864 5.79545 11.5682C5.26515 11.25 4.86364 10.7955 4.59091 10.2045H1V12.7727C1 12.9848 1.06818 13.1591 1.20455 13.2955C1.34091 13.4318 1.51515 13.5 1.72727 13.5ZM7.50395 11.5455C8.09223 11.5455 8.625 11.375 9.10227 11.0341C9.57955 10.6932 9.93182 10.25 10.1591 9.70455H14V1.22727C14 1.01515 13.9318 0.840909 13.7955 0.704545C13.6591 0.568182 13.4848 0.5 13.2727 0.5H1.72727C1.51515 0.5 1.34091 0.568182 1.20455 0.704545C1.06818 0.840909 1 1.01515 1 1.22727V9.70455H4.84091C5.06818 10.25 5.42177 10.6932 5.90168 11.0341C6.38159 11.375 6.91568 11.5455 7.50395 11.5455ZM7.5 7.84091L4.72727 5.06818L5.09091 4.72727L7.25 6.88636V2.31818H7.75V6.88636L9.90909 4.72727L10.2727 5.06818L7.5 7.84091ZM1.72727 13.5H1H14H1.72727Z"
                                        fill={router.pathname === "/longterm/dashboard/newrequest" ? "#0F52BA" : "black"} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_576_128">
                                        <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <Link href="/dating/dashboard/newrequest"><h1 style={Text3} className={`dark:text-[#FFF] pl-[10px] text-[14px]  ${router.pathname === "/dating/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}>New Requests</h1></Link>
                        </li>
                        {/* <li className='pt-[8px] flex items-center '> */}
                        <li className={`cursor-pointer p-[5px] rounded-[15px] pl-2 flex items-center ${darkMode ? "" : "hover:bg-[#F2F7FF]"}  `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M0 5.71053L3.31579 0L6.63158 5.71053H0ZM3.33626 14C2.55848 14 1.90351 13.7339 1.37135 13.2018C0.839181 12.6696 0.573099 12.0176 0.573099 11.2456C0.573099 10.462 0.839181 9.80409 1.37135 9.27193C1.90351 8.73977 2.55848 8.47368 3.33626 8.47368C4.11404 8.47368 4.76901 8.73977 5.30117 9.27193C5.83333 9.80409 6.09942 10.4591 6.09942 11.2368C6.09942 12.0146 5.83333 12.6696 5.30117 13.2018C4.76901 13.7339 4.11404 14 3.33626 14ZM3.33626 13.4269C3.95029 13.4269 4.46881 13.2154 4.89181 12.7924C5.31482 12.3694 5.52632 11.8509 5.52632 11.2368C5.52632 10.6228 5.31482 10.1043 4.89181 9.68129C4.46881 9.25828 3.95029 9.04678 3.33626 9.04678C2.72222 9.04678 2.2037 9.25828 1.7807 9.68129C1.3577 10.1043 1.1462 10.6228 1.1462 11.2368C1.1462 11.8509 1.3577 12.3694 1.7807 12.7924C2.2037 13.2154 2.72222 13.4269 3.33626 13.4269ZM1.00292 5.13743H5.64912L3.31579 1.1462L1.00292 5.13743ZM8.73977 14V8.47368H14.2661V14H8.73977ZM9.31287 13.4269H13.693V9.04678H9.31287V13.4269ZM11.5029 5.71053C11.0799 5.38304 10.674 5.06238 10.2851 4.74854C9.8962 4.4347 9.55166 4.11745 9.25146 3.79678C8.95127 3.47612 8.71248 3.15205 8.53509 2.82456C8.3577 2.49708 8.26901 2.15595 8.26901 1.80117C8.26901 1.35088 8.41228 0.982456 8.69883 0.695906C8.98538 0.409357 9.3538 0.266082 9.80409 0.266082C10.1178 0.266082 10.4111 0.344542 10.684 0.501462C10.957 0.658382 11.23 0.900585 11.5029 1.22807C11.7758 0.91423 12.0556 0.675439 12.3421 0.511696C12.6287 0.347953 12.922 0.266082 13.2222 0.266082C13.6537 0.266082 14.014 0.420272 14.3031 0.728655C14.5923 1.03704 14.7368 1.41501 14.7368 1.86257C14.7368 2.2037 14.6481 2.5346 14.4708 2.85526C14.2934 3.17593 14.0546 3.49318 13.7544 3.80702C13.4542 4.12086 13.1096 4.4347 12.7208 4.74854C12.3319 5.06238 11.9259 5.38304 11.5029 5.71053ZM11.5029 4.97368C12.4444 4.26413 13.1233 3.66374 13.5395 3.17251C13.9557 2.68129 14.1637 2.23782 14.1637 1.84211C14.1637 1.55556 14.0716 1.31676 13.8874 1.12573C13.7032 0.934698 13.4747 0.839181 13.2018 0.839181C13.0136 0.839181 12.8301 0.897174 12.6512 1.01316C12.4724 1.12914 12.2193 1.35088 11.8918 1.67836L11.5029 2.06725L11.114 1.67836C10.7729 1.33723 10.5171 1.11209 10.3465 1.00292C10.1759 0.893762 9.99513 0.839181 9.80409 0.839181C9.51754 0.839181 9.28557 0.924464 9.10819 1.09503C8.9308 1.26559 8.8421 1.50097 8.8421 1.80117C8.8421 2.22417 9.05019 2.68129 9.46637 3.17251C9.88255 3.66374 10.5614 4.26413 11.5029 4.97368Z" fill="black" />
                            </svg>
                            <Link href="/dating/dashboard/category">
                                <h1 style={Text3} className={`text-[14px] pl-[10px] dark:text-[#FFF]  ${router.pathname.startsWith("/dating/dashboard/category") ? "text-[#0F52BA]" : ""}`}>By Category</h1>
                            </Link>
                        </li>

                    </ul>

                </div>
            </aside>


            {/* <Link href="/longterm/dashboard/searchmember">
                {" "}
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/searchmember" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px]  dark:hover:text-[#FFF] pl-[10px]  
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/searchmember"
                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/searchmember"
                        ? ""
                        : ""}`}
                >
                  Search Member
                </h1>
              </Link> */}

        </>
    )
}

export default DatingSideBar