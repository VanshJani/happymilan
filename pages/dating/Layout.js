import React from 'react'
import DatingNavBar from './component/NavBar'
import SideBar from './component/SideBar'
import UnlockProfile from './component/UnlockProfile'
import CommonNavbar from '../_components/layout/AuthNavbar'
import DatingNav from '../../components/Dating/layout/DatingNavbar'
import Image from 'next/image'

function Layout({ children, HideSection }) {
    return (
        <>
            {/* <DatingNavBar /> */}
            <DatingNav />
            {/* <CommonNavbar /> */}

            <SideBar />

            <div id='main-centerlized-content' className='flex justify-center flex-col'>
                <div id='first-child' className=' pl-[0px] lg:pl-[245px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>


                    <div className='h-full'>
                        {/* Side Section 1 */}

                        <div id='centerlized-content' className=' 2xl:block xl:block lg:block  hidden'>
                            <div className='relative w-full 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>
                                {children}
                            </div>
                        </div>

                    </div>
                    {
                        HideSection ?
                            <div className='hidden  z-[-10]  fixed 2xl:top-[110px] xl:top-[95px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full'>
                                <Image width={300} height={381} className='2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px]' alt='image' loading='lazy' src={"/dating/Side-Image.svg"} />
                            </div>

                            :

                            <div className='hidden  z-[-10]  absolute 2xl:top-[180px] xl:top-[245px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
                                {/* Side Section 2 */}
                                <UnlockProfile />
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Layout