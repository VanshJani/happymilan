import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { UploadStoryImages, UploadSuccessStories } from '../../../store/actions/UserStoryAction';
import { useDispatch, useSelector } from 'react-redux';

function UploadImage() {
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const Text3 = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const [ImagesData, SetImagesData] = useState([])
    const [ImageHover, SetImageHover] = useState({
        UploadImageHover: false
    })


    const dispatch = useDispatch();

    const data = useSelector((state) => state.storyviews.successstory?.data)

    const HandleUploadImage = () => {
        dispatch(UploadSuccessStories(data))
    }

    useEffect(() => {
        dispatch(UploadStoryImages(ImagesData))
    }, [ImagesData])

    const HandleDeleteImage = (res, indexval) => {
        const FilteredData = ImagesData?.filter((item, index) => index !== indexval)
        SetImagesData(FilteredData)
    }

    const onDrop = useCallback((acceptedFiles) => {
        // Check if more than 5 files are selected
        if (acceptedFiles.length > 3) {
            alert("Please select only 3 images");
            return;
        }

        // Filter for valid files based on type and size
        const validFiles = acceptedFiles.filter(file => {
            const isValidType = file.type.startsWith('image/') || file.type.startsWith('video/');
            const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit

            // Show alerts for invalid files
            if (!isValidType) {
                alert(`Invalid file type: ${file.name}`);
            } else if (!isValidSize) {
                alert(`File size exceeds 10MB: ${file.name}`);
            }

            return isValidType && isValidSize;
        });

        // Stop processing if some files are invalid
        if (validFiles.length === 0) {
            return;
        }

        // Generate the selectedFiles object with unique IDs
        const selectedFiles = validFiles.map((file, index) => ({
            id: index,
            key: file.name,
            contentType: file.type,
            data: URL.createObjectURL(file),
            isProfile: false
        }));

        // Update ImagesData once after all files are read
        SetImagesData((prev) => (prev.length === 0 ? selectedFiles : [...prev, ...selectedFiles]));

        // Process the valid files using FileReader
        validFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('File reading was aborted');
            reader.onerror = () => console.log('File reading has failed');
            reader.onload = () => {
                // Process file content here if needed
            };

            reader.readAsArrayBuffer(file); // You can adjust this if you need the file content later
        });
    }, [ImagesData]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    return (
        <>
            <div className="relative top-[80px] flex h-full justify-center flex-wrap w-full lg:w-full 2xl:w-[300px] xl:w-[415px]  pt-[0px] lg:pt-0  gap-y-[20px] gap-x-[17px]">

                {
                    ImagesData?.length > 0 ?
                        <>
                            <div>
                                <Swiper
                                    pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                    className="mySwiper w-[300px] h-[350px] border-[1px] rounded-[10px] border-gray-300"
                                >
                                    {
                                        ImagesData.map((item, index) => (

                                            <SwiperSlide key={index} className=''>
                                                <div className='w-[300px] h-[350px]'>
                                                    <Image className='absolute top-[15px] z-10 right-[20px] cursor-pointer' onClick={() => HandleDeleteImage(item, index)} loading='lazy' alt='delete' width={24} height={24} src="/assests/dashboard/icon/Trash-icon.svg" />
                                                    <Image
                                                        src={item?.data}
                                                        alt="Image description"
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className='rounded-[10px]'
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>

                                <div className={`flex justify-end mt-[5px] ${ImagesData.length >= 3 ? "hidden" : ""}`} {...getRootProps()}>
                                    <input {...getInputProps()} className="hidden" />
                                    <Image onMouseEnter={() => SetImageHover({ UploadImageHover: true })} onMouseLeave={() => SetImageHover({ UploadImageHover: false })} alt='drag-drop' width={34.818} height={24} className='cursor-pointer w-[34.818px] h-[24px]' src={ImageHover.UploadImageHover ? '/assests/profile/after-imageupload-icon.svg' : '/assests/profile/before-imageupload-icon.svg'} />
                                </div>
                            </div>

                        </>

                        :
                        <>
                            <div {...getRootProps()} className="border-dashed border-[1px] border-[#B5B5B5] w-[45%] lg:w-[300px] h-[266px] rounded-[8px] ">
                                <input {...getInputProps()} className="hidden" />
                                <div className="flex justify-center flex-col items-center h-full">
                                    <Image
                                        loading="lazy"
                                        alt="add-pic"
                                        width={24}
                                        height={24}
                                        src="/assests/stories/gradient-drag-icon.svg"
                                        className="  h-[31.473px]  w-[31.47px]"
                                    />
                                    <h1
                                        className="w-[92px] text-center text-[12px] text-[#000] pt-[10px]"
                                        style={TitleText}
                                    >
                                        Select or drag
                                        Wedding Photo
                                    </h1>
                                </div>
                            </div>

                            <div>
                                <h1 style={Text3}>Max. 3 Photos (JPEG, PNG)</h1>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default UploadImage