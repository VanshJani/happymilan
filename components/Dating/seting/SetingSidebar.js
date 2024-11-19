import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import DatingNav from '../layout/DatingNavbar';

function SetingSidebar() {

    const router = useRouter();

    const menuItem = [
        {
            id: 1,
            path: "/dating/dashboard/seting/credentials",
            name: "Login Details",
            icon: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/privacy-icon.svg' />,
            icon2: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/privacy-icon-2.svg' />
        },
        {
            id: 2,
            path: "/dating/dashboard/seting/profileseting",
            name: "Profile Setting",
            icon: <Image alt='delete' loading="lazy" width={13} height={14} src='/assests/dashboard/seting/before-profile-seting.svg' />,
            icon2: <Image alt='delete' loading="lazy" width={13} height={14} src='/assests/dashboard/seting/after-profile-seting.svg' />
        },
        {
            id: 3,
            path: "/dating/dashboard/seting/privacy",
            name: "Privacy Setting",
            icon: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/before-privacy-seting.svg' />,
            icon2: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/after-privacy-seting.svg' />
        },
        {
            id: 4,
            path: "/dating/dashboard/seting/notifications",
            name: "Notifications",
            icon: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/before-notification-seting.svg' />,
            icon2: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/after-notification-seting.svg' />,
        },
        {
            id: 5,
            path: "/dating/dashboard/seting/plans",
            name: "Plan Details",
            icon: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/before-plans-details.svg' />,
            icon2: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/after-plans-details.svg' />,
        },
        {
            id: 6,
            path: "/dating/dashboard/seting/kyc",
            name: "KYC Details",
            icon: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/before-kyc-icon.svg' />,
            icon2: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/after-kyc-icon.svg' />,
        }
    ]


    const TextTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    return (
        <>
            <div>
                <DatingNav />
            </div>

            <aside id="separator-sidebar" className=" hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="ml-[18px] mt-[40px] h-full flex flex-col space-y-[10px] overflow-y-auto bg-[#FFF] dark:bg-gray-800">
                    <div>
                        <h1 style={TextTitle}>Account Setting</h1>
                    </div>
                    <div>
                        {
                            menuItem.map((item, index) => (
                                <div className="hover:bg-[#F2F7FF] rounded-[22px] w-[200px] p-1 pl-5  items-center cursor-pointer link flex mt-[10px]" activeclassname="active">

                                    {
                                        router.pathname === item.path ?
                                            <div className='icon w-[30px] '>{item.icon2}</div>
                                            :
                                            <div className='icon w-[30px] '>{item.icon}</div>
                                    }
                                    <div id={router.pathname === item.path ? 'Seting-menu-grad' : 'Seting-menu-grad-before'} className={`mt-[0px] ml-[5px]`}>
                                        <Link href={item.path}>{item.name}</Link>
                                    </div>

                                </div>

                            ))
                        }


                    </div>
                </div>
            </aside>


        </>
    )
}

export default SetingSidebar

