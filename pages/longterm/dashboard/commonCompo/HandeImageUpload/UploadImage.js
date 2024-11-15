import { Dialog, DialogContent } from '@mui/material'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useDropzone } from 'react-dropzone'
import { connect, useDispatch, useSelector } from 'react-redux'
import { updateFormData } from '../../../../../store/actions/registerUser'
import { ImageUpload } from '../../../../../store/actions/ImageUpload'
import { fetchMyProfileData } from '../../../../../store/reducers/MyProfile'

function UploadImage({ formData, updateFormData, openUpload, handleCloseUpload }) {

    const TextTitle = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }



    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    }

    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    }

    const [Uname, SetUname] = useState("")
    useEffect(() => {
        const name = getCookie("userName")
        SetUname(name)
    }, [])

    // const activeTab = 2
    const [activeTab, SetActiveTab] = useState(1)
    const [PreviewImage, SetPreviewImage] = useState([])

    const { userProfile, status } = useSelector((state) => state.form?.formData)


    const dispatch = useDispatch();


    const CloseTheModal = () => {
        handleCloseUpload();
        if (PreviewImage.length > 0) {

        } else {
            SetActiveTab(1)
        }

    }


    const HandleNext = () => {
        SetActiveTab(activeTab + 1)
        if (activeTab === 2) {
            handleCloseUpload()
            console.log(PreviewImage)
            dispatch(ImageUpload(userProfile))
            setTimeout(() => {
                dispatch(fetchMyProfileData());
                updateFormData({
                    ...formData,
                    userProfile: {
                        ...formData.userProfile,
                        images: [],
                        bufferdata: ""
                    }
                });
                SetPreviewImage([]);
            }, 2000);
            SetActiveTab(1)

        }
    }



    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 5) {
            alert("Please select only 5 images");
            return;
        }

        const selectedImages2 = Array.from(acceptedFiles).map((file, index) => ({
            id: index,
            key: file.name,
            contentType: file.type,
            data: URL.createObjectURL(file),
            isProfile: false

        }))


        SetPreviewImage(prev => [...prev, ...selectedImages2]);



        acceptedFiles.forEach((file) => {

            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {

                // const binaryData = reader.result;

                updateFormData({
                    ...formData,
                    userProfile: {
                        ...formData.userProfile,
                        images: [...selectedImages2],
                        bufferdata: URL.createObjectURL(file)
                    }
                });

                SetActiveTab(activeTab + 1)

            };

            reader.readAsArrayBuffer(file);


        });
    }, []);

    const UploadComponent = () => {

        const { getRootProps, getInputProps } = useDropzone({ onDrop })
        return (
            <>
                {/* <div className='flex flex-col justify-center items-center space-y-[20px] w-[526px] h-[330px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[18px]'>

                    <div {...getRootProps()}>
                        <Image alt='drag-drop' width={63} height={44} src='/loginassests/register-icons/Drag-Drop.svg' />
                    </div>
                    <input {...getInputProps()} className="hidden" />
                    <div className='text-center'>
                        <h1 className='dark:text-[#FFF] text-[#000]' style={Text4}>Select Photos</h1>
                        <p className='dark:text-[#FFF] text-[#000]' style={Text2}>Or drag and drop a file</p>
                    </div>

                </div> */}
                <div className='md:pb-[20px] lg:pb-0 flex flex-col justify-center items-center space-y-[20px] w-full h-full   md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[257px] 2xl:w-[526px] 2xl:h-[450px] xl:w-[526px] xl:h-[357px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[22px]'>
                    <div {...getRootProps()} className='mt-[10%] lg:mt-0 md:w-[60px] md:h-[60px] lg:w-auto lg:h-auto 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto'>
                        <input {...getInputProps()} className="hidden" />
                        <Image loading='lazy' alt="drag-drop" width={63} height={44} src='/loginassests/register-icons/Drag-Drop.svg' />
                    </div>
                    <div className='text-center'>
                        <h1 style={Text1} className='dark:text-[#FFF] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px]'>Select Photos</h1>
                        <p className='dark:text-[#FFF]' style={Text2}>Or drag and drop a file</p>
                    </div>
                </div>
            </>

        )
    }

    const HandleRemove = (index) => {
        const updatedPreviewImage = PreviewImage.filter(item => item.data !== index);

        // Update the state with the filtered array
        SetPreviewImage(updatedPreviewImage);

    }

    const PreviewComponent = () => {
        const { getRootProps, getInputProps } = useDropzone({ onDrop })
        return (
            <>
                <div className='w-[526px] h-[330px] bg-[#F5F5F5] dark:bg-[#242526] rounded-[18px]'>
                    <div className='flex space-x-[20px]'>
                        {PreviewImage.map((res, index) => {
                            return (
                                <>


                                    <div
                                        key={index}
                                        className="cursor-pointer w-[150px] h-[150px] lg:w-[130px] lg:h-[130px] rounded-[10px] mt-[10px] ml-[10px]"
                                        style={{
                                            backgroundImage: `url(${res.data})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        id="photo-grid-item"

                                    >
                                        <svg
                                            onClick={() => HandleRemove(res.data)}
                                            className="z-[1] cursor-pointer relative ml-[80%] lg:ml-[78%] mt-[5%]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="12"
                                                fill="black"
                                                fill-opacity="0.4"
                                            />
                                            <path
                                                d="M14.1111 10.3333V15.8889H9.66667V10.3333H14.1111ZM13.2778 7H10.5L9.94444 7.55556H8V8.66667H15.7778V7.55556H13.8333L13.2778 7ZM15.2222 9.22222H8.55556V15.8889C8.55556 16.5 9.05556 17 9.66667 17H14.1111C14.7222 17 15.2222 16.5 15.2222 15.8889V9.22222Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </>
                            )
                        })}


                        <div className={`${userProfile?.images?.length > 0 ? "ml-4" : ""} cursor-pointer hover:bg-[#E7E7E7] duration-150 mt-[10px] h-[130px] w-[130px]  rounded-[10px] flex flex-col justify-center items-center dark:bg-[#303133]  bg-[#EBEBEB]`}>
                            <div {...getRootProps()}>
                                <Image alt='drag-drop' width={35} height={35} src='/loginassests/register-icons/Drag-Drop.svg' />
                            </div>
                            <input {...getInputProps()} className="hidden" />
                        </div>

                    </div >
                </div>
            </>
        )
    }

    const RenderComponent = () => {
        switch (activeTab) {
            case 1:
                return <UploadComponent />
            case 2:
                return <PreviewComponent />
            default:
                return null;
        }
    }



    return (
        <>
            <Dialog
                open={openUpload}
                onClose={handleCloseUpload}
                // className='flex justify-center'
                // sx={{ '& .MuiDialog-paper': { borderRadius: '18px' } }} // Apply border radius to Dialog
                className='flex justify-center rounded-[22px]'
                sx={{ '& .MuiDialog-paper': { borderRadius: '18px' } }}

            >

                {/* <DialogContent className='dark:bg-[#303133] ' sx={{ borderRadius: "18px" }}> */}
                <DialogContent className='dark:bg-[#18191a] rounded-[20px]'>
                    <div className='space-y-[20px]'>
                        <div className='flex justify-between'>
                            <div className='p-1'>
                                <h1 className='dark:text-[#FFF]' style={TextTitle}>Upload Photo</h1>
                            </div>
                            <div className='cursor-pointer p-1 w-8 h-8 grid place-items-center rounded-full hover:bg-[#F3F8FF]' onClick={CloseTheModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1.26703 16L0 14.733L6.73297 8L0 1.26703L1.26703 0L8 6.73297L14.733 0L16 1.26703L9.26703 8L16 14.733L14.733 16L8 9.26703L1.26703 16Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className=''>
                            {RenderComponent()}
                            {
                                activeTab > 1 ? <div className='pt-[20px] flex space-x-[28px] justify-center'>
                                    <button style={Text3} onClick={CloseTheModal} className='w-[126px] h-[44px] rounded-[24px] hover:bg-[#F3F8FF] bg-[#FFF] border-[1px] border-[#0F52BA] text-[#000]'>Close</button>
                                    <button id='grad-btn' style={Text3} onClick={HandleNext} className='w-[126px] h-[44px] rounded-[24px] bg-[#0F52BA] border-[1px] border-[#0F52BA] text-[#FFF]'>Publish</button>
                                </div>
                                    : ""}
                        </div>
                    </div>
                </DialogContent>

            </Dialog>
        </>
    )
}

// export default UploadImage
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(UploadImage);