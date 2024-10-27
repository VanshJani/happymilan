import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import KycDocUpload from '../../../../../components/long-term/seting/sections/KycDocUpload';
import { CheckDocumentStatus, RemoveKycDocument, UploadKycDocument } from '../../../../../store/actions/KycDocumentsActions';
import SetingLayout from '../../../../../components/Dating/seting/SetingLayout';

function KycSection() {
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


    const documents = useSelector((state) => state.kyc?.documents)
    const { loading, documentstatus, KycUpload, documentname } = useSelector((state) => state?.kyc)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(CheckDocumentStatus())
    }, [])


    const UploadedUI = () => {



        const RemoveDocument = () => {
            dispatch(RemoveKycDocument())
        }

        const HandleUploadDocument = () => {
            dispatch(UploadKycDocument(documentname, documents))
        }
        return (
            <>

                <li className='flex space-x-[65px] items-center space-y-[9px]'>
                    <div>
                        <div className='grid place-items-center w-[370px]  h-[50px] xl:h-[50px] rounded-[25px] border-[1px] border-[#E5E5E5]  mt-[10px] bg-[#F7F8FF]'>
                            <ul className='w-full flex justify-between items-center pl-5 pr-5'>
                                <li>{documents?.key}</li>
                                <li className=''>
                                    <svg className='cursor-pointer' onClick={RemoveDocument} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M9 0C4.023 0 0 4.023 0 9C0 13.977 4.023 18 9 18C13.977 18 18 13.977 18 9C18 4.023 13.977 0 9 0ZM13.5 12.231L12.231 13.5L9 10.269L5.769 13.5L4.5 12.231L7.731 9L4.5 5.769L5.769 4.5L9 7.731L12.231 4.5L13.5 5.769L10.269 9L13.5 12.231Z" fill="#5F6368" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button
                            id={"grad-button"}
                            onClick={HandleUploadDocument}
                            disabled={KycUpload?.loading}
                            className={`w-[112px] h-[50px] rounded-[25px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]"}`}>
                            {
                                KycUpload?.loading ?
                                    <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                                    :
                                    "Upload"
                            }</button>
                    </div>
                </li>

            </>
        )
    }

    return (
        <>
            <SetingLayout>
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
                            <ul className="space-y-[15px]">
                                <li>
                                    <h1 style={Heading2}>Upload ID</h1>
                                </li>

                                {loading ? null : (
                                    <>
                                        {documentstatus?.isDocUpload ? (
                                            <li>
                                                <p style={Text} className="text-[#000]">
                                                    Thank you for submitting documents. We will review and update you within 24 hours.
                                                </p>
                                            </li>
                                        ) : (
                                            <>
                                                <li>
                                                    <p style={Text} className="text-[#000]">
                                                        Please submit a government-issued ID. Your ID will be deleted once we verify your identity.
                                                    </p>
                                                </li>

                                                {documents === null ? (
                                                    <KycDocUpload />
                                                ) : (
                                                    <UploadedUI />
                                                )}
                                            </>

                                        )}


                                    </>
                                )}
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

export default KycSection