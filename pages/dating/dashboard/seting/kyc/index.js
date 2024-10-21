import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import SetingLayout from '../../../../../components/Dating/seting/SetingLayout';
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });

function index() {
    const Text = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Heading = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    const Heading2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: "10px",
            paddingLeft: "8px",
            width: "370px",
            height: "50px",
            borderRadius: "25px", // Add padding on the right side
            border: "1px solid #E5E5E5",
            borderColor: state.isFocused ? "black" : provided.borderColor,
            "&:hover": {
                borderColor: "black",
            },
            boxShadow: state.isFocused ? "none" : provided.boxShadow,
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none",
            paddingRight: "20px",
            // Hide the vertical line behind the arrow
        }),
    };

    const options1 = [
        {
            value: "passport",
            label: "Passport"
        },
        {
            value: "driving-license",
            label: "Driving License"
        },
        {
            value: "aadhar-card",
            label: "Aadhar Card"
        },
        {
            value: "election-card",
            label: "Election Card"
        }
    ];

    return (
        <>
            <SetingLayout Section={"kyc"}>
                <div className='space-y-[20px]'>
                    <div className='space-y-[10px] mt-[-17px]'>
                        <h1 id="setting-text-grad" style={Heading}>KYC Details</h1>
                        <p style={Text} className='text-[#6A6A6A]'>This menu lets users update and manage authentication info for secure account access</p>
                    </div>
                    <div className='h-[1px] bg-[#ECECEC] w-[100%]'></div>
                    <div>
                        <div className='flex space-x-[20px]'>
                            <ul className=''>
                                <li>
                                    <Image width={18} height={18} alt='kyc-icon' src={'/assests/dashboard/seting/after-kyc-icon.svg'} />
                                </li>

                            </ul>
                            <ul className='space-y-[15px]'>
                                <li>
                                    <h1 style={Heading2}>Upload ID</h1>
                                </li>
                                <li>
                                    <p style={Text} className='text-[#000]'> Please submit a government issued-ID. Your ID will be deleted once we verify your identity.</p>
                                </li>
                                <li className='flex space-x-[65px] items-center space-y-[9px]'>
                                    <div>
                                        <DynamicSelect
                                            className="w-[100%] h-[50px] xl:h-[50px]  mt-[10px]  text-[16px] placeholder:text-[black]"
                                            styles={customStyles}
                                            placeholder="Select ID Type"
                                            options={options1}
                                        />
                                    </div>
                                    <div>
                                        <button className='w-[112px] h-[50px] rounded-[25px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]'>Upload</button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='h-[1px] bg-[#ECECEC] w-[100%]'></div>
                    <div>
                        <div className='flex space-x-[20px]'>
                            <div className='relative top-[3px]'>
                                <ul className=''>
                                    <li>
                                        <Image width={18} height={18} alt='kyc-icon' src={'/assests/dashboard/seting/photo-verify-icon.svg'} />
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-[15px]'>
                                    <li>
                                        <h1 style={Heading2}>Photo Verify</h1>
                                    </li>
                                    <li>
                                        <p style={Text} className='text-[#000]'> To verify your profile photo with a selfie. Download app and Complete Verification</p>
                                    </li>
                                    <li>
                                        <ul className='flex space-x-[10px] relative left-[-8px]'>
                                            <li>
                                                <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[140.5px] h-[36px]' src={"/heroSec/assests/app-store.svg"} />
                                            </li>
                                            <li>
                                                <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[140.5px] h-[36px]' src={"/heroSec/assests/play-store.svg"} />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </SetingLayout>
        </>
    )
}

export default index