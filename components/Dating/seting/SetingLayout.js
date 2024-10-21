import React from 'react'
import SetingSidebar from './SetingSidebar'
import BackButton from '../../../pages/longterm/dashboard/seting/comp/BackButton'

function SetingLayout({ children, Section }) {
    return (
        <>

            <SetingSidebar />
            <div className='w-full h-full grid place-items-center'>

                <div className='hidden md:block w-[90%] mt-[120px] '>

                    <h1 className='fixed left-10 text-[16px] text-[#716969] font-medium'>{Section}</h1>
                    <div className='fixed right-10'>
                        <BackButton />
                    </div>
                    <div className='flex mt-[20px]'>

                        <div className='fixed w-[1px] ml-[20%] lg:ml-[18%] xl:ml-[250px] mt-[-17px] h-[185px] bg-[#ECECEC]'></div>


                        <main className=' absolute ml-[25%] lg:ml-[23%] xl:ml-[330px]'>{children}</main>
                    </div>
                </div>

                {/* <div className='block md:hidden w-[90% mt-[120px]'>
                    <Sidebar2 />
                </div> */}

            </div>
        </>
    )
}

export default SetingLayout