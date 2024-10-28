import Image from 'next/image'
import React from 'react'

function UnlockProfile() {
    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const ShadowBox = {
        borderRadius: "10px",
        // background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const ProfileText = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    return (
        <>
            <div style={ShadowBox} className='dark:bg-[#242526] bg-[#FFF] flex flex-col space-y-[25px] w-[300px] h-[235px]'>
                <div className='ml-[20px] mt-[10px] p-[10px]'>
                    <h1 style={Text1} className='text-[14px] dark:text-[#FFF] text-[#000]'>See who visited you</h1>
                </div>
                <div className='flex items-center justify-center space-x-[18px]'>
                    <div className='flex flex-col justify-center items-center space-y-[10px]'>
                        <div className='w-[47px] h-[47px] rounded-[50px] bg-[gray]'>
                            <Image width={47} height={47} src="/assests/dating/img-1.svg" />
                        </div>
                        <div>
                            <p style={Text1} className='text-[8px] text-[#17C270]'>Online</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-[10px]'>
                        <div className='w-[47px] h-[47px] rounded-[50px] bg-[gray]'>
                            <Image width={47} height={47} src="/assests/dating/img-2.svg" />

                        </div>
                        <div>
                            <p style={Text1} className='text-[8px] dark:text-[#FFF] text-[#000]'>1h ago</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-[10px]'>
                        <div className='w-[47px] h-[47px] rounded-[50px] bg-[gray]'>

                            <Image width={47} height={47} src="/assests/dating/img-3.svg" />
                        </div>
                        <div>
                            <p style={Text1} className='text-[8px] dark:text-[#FFF] text-[#000]'>2d ago</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-[10px]'>
                        <div className='border-[1px] border-[#8225AF] grid place-items-center w-[47px] h-[47px] rounded-[50px] relative top-[-5px] bg-[#FFF] dark:bg-[#5E5E5E]'>
                            <h1 style={ProfileText} className='text-[#000] dark:text-[#FFF]'>+6</h1>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button style={Text1} className='dark:text-[#FFF] cursor-pointer hover:bg-[#F2F7FF] text-[#000] text-[14px] rounded-[23px] w-[149px] h-[44px]  border-[1px] border-[#8225AF]'>Unlock Profiles</button>
                </div>
            </div>
        </>
    )
}

export default UnlockProfile