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
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }
    return (
        <>
            <div style={ShadowBox} className='flex flex-col space-y-[25px] w-[300px] h-[235px]'>
                <div className='ml-[20px] mt-[10px] p-[10px]'>
                    <h1 style={Text1} className='text-[12px]'>See who visited you</h1>
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
                        <p style={Text1} className='text-[8px]'>1h ago</p>
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-[10px]'>
                        <div className='w-[47px] h-[47px] rounded-[50px] bg-[gray]'>
                            
                            <Image width={47} height={47} src="/assests/dating/img-3.svg" />
                        </div>
                        <div>
                        <p style={Text1} className='text-[8px]'>2d ago</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-[10px]'>
                        <div className='w-[47px] h-[47px] rounded-[50px] relative top-[-5px]'>
                            <Image width={47} height={47} src="/assests/dating/img-4.svg" />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button  style={Text1} className='text-[14px] rounded-[23px] w-[149px] h-[44px]  border-[1px] border-[#8225AF]'>Unlock Profiles</button>
                </div>
            </div>
        </>
    )
}

export default UnlockProfile