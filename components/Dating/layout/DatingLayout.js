import React from 'react'
import DatingSideBar from './DatingSidebar'
import DatingNav from './DatingNavbar'
import UnlockProfile from '../common/LockProfiles'
import ProfileImagesViewer from '../../common/Models/ProfileImagesViewer'
import { useSelector } from 'react-redux'

function DatingLayout({ children, HideSection }) {

    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state

    return (
        <>


            <DatingNav />

            <DatingSideBar />

            <div id='main-centerlized-content' className='flex justify-center flex-col'>
                <div id='first-child' className=' pl-[0px] lg:pl-[245px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>


                    <div className='h-full'>

                        <div id='centerlized-content' className=' 2xl:block xl:block lg:block  hidden'>
                            <div className='relative w-full 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>
                                {children}
                            </div>
                        </div>

                    </div>
                    {
                        HideSection ?
                            <div className='absolute right-10'>
                                <ProfileImagesViewer details={details} />
                            </div>
                            :

                            <div className='hidden z-30  absolute 2xl:top-[180px] xl:top-[245px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
                                <UnlockProfile />
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default DatingLayout