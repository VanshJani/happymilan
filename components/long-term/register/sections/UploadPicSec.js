// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { connect } from 'react-redux'
// import { updateFormData } from '../../../../store/actions/registerUser'
// import Image from "next/image";
// import UploadContainer from "./UploadContainer";

// function GridphotoSec({ formData, updateFormData, }) {
//     const Text = {
//         color: "#000",
//         fontFamily: "Poppins",
//         fontSize: "14px",
//         fontStyle: "normal",
//         fontWeight: "400",
//         lineHeight: "normal",
//     }

//     const data = useSelector((state) => state.form.formData.upload);
//     const [TheImages, SetTheImages] = useState([]);

//     useEffect(() => {
//         SetTheImages(data?.images)
//     }, [data]);


//     const HandleRemove = (res) => {
//         const filteredArray = TheImages.filter(item => item.id !== res.id)
//         SetTheImages(filteredArray)

//         updateFormData({
//             ...formData,
//             upload: {
//                 ...formData.upload,
//                 images: filteredArray
//             }
//         });
//         console.log(res)
//     };

//     const [SelectedGridImage, SetSelectedGridImage] = useState(null);

//     const HandleGridImageClick = (index, items) => {

//         if (items.contentType.startsWith('video/')) {
//             return null
//                 ;
//         } else {

//             if (SelectedGridImage === index) {
//                 SetSelectedGridImage(null); // Unselect if already selected
//             } else {
//                 SetSelectedGridImage(index); // Select the clicked image
//                 updateFormData({
//                     ...formData,
//                     upload: {
//                         ...formData.upload,
//                         images: TheImages.map((image, theindex) => ({
//                             ...image,
//                             isProfile: theindex === index, // Set isProfile to true for the selected image
//                         }))
//                     }
//                 });

//             }
//         }
//     };
//     return (
//         <>
//             <div className='pb-[100px]'>
//                 <div className='mt-[90px] w-full h-full'>
//                     <div className="absolute mt-[-40px]">
//                         {TheImages?.length > 0 ? <>  <p style={Text}>Select any photo as profile</p> </> : ""}
//                     </div>
//                     <div className="flex flex-wrap gap-[30px] max-w-[647px] mx-auto">
//                         <UploadContainer />
//                         {TheImages?.map((item, index) => {
//                             return (
//                                 <li key={index} className="flex-shrink-0 list-none">
//                                     <div className="w-[150px] h-[150px] lg:w-[115px] lg:h-[117px] rounded-[10px] relative">
//                                         <div
//                                             className={`${SelectedGridImage === index ? "block" : "hidden"}  grid place-items-center  absolute  rounded-[8px]  w-[150px] h-[150px] lg:w-[115px] lg:h-[117px] bg-[#0F52BACC] `}
//                                         >
//                                             <img
//                                                 src="/assests/common/Select-Right.svg"
//                                                 className="w-[30px] h-[35px]"
//                                             />
//                                         </div>
//                                         <Image width={0} height={0} alt={index} src={item?.data}
//                                             style={{ objectFit: "cover", width: "115px", height: "117px" }}
//                                             className=" w-[150px]  h-[150px] lg:w-[115px] lg:h-[117px] rounded-[10px]"
//                                             id="photo-grid-item"
//                                             onClick={() => HandleGridImageClick(index, item)}
//                                         />
//                                         <div className="absolute top-[5px] right-[5px]">
//                                             <Image onClick={() => HandleRemove(item)} className="cursor-pointer" width={24} height={24} alt="delete" src={"/assests/login/Delete-icon.png"} />
//                                         </div>
//                                     </div>
//                                 </li>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(GridphotoSec);



//Dating 

import React, { useEffect, useState } from "react";
import Image from "next/image";
import UploadContainer from "./UploadContainer";
import { connect, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/actions/registerUser";
// import { updateDatingFormData } from "../../../../store/dating-services/Redux-actions/register/registerAction";

function GridphotoSec({ formData, updateFormData, }) {
    console.log("🚀 ~ GridphotoSec ~ formData:", formData)
    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    // const data = useSelector((state) => state.datingregister.datingForm.upload);
    const data = useSelector((state) => state.form.formData.upload);

    const [TheImages, SetTheImages] = useState([]);

    useEffect(() => {
        SetTheImages(data?.images)
    }, [data]);


    const HandleRemove = (res, index) => {
        const filteredArray = TheImages.filter((item, i) => i !== index)
        SetTheImages(filteredArray)

        const updatedImages = formData.upload.images.filter((item, i) => i !== index);

        // Update the Redux state with the new images array
        updateFormData({
            ...formData,
            upload: {
                ...formData.upload,
                images: updatedImages, // Update images in Redux state
            },
        });

    };

    const [SelectedGridImage, SetSelectedGridImage] = useState(null);
    const [ItsSelected, SetitsSelected] = useState(false)

    const HandleGridImageClick = (index, items) => {

        if (items.contentType.startsWith('video/')) {
            return null
                ;
        } else {

            if (SelectedGridImage === index) {
                console.log("🚀 ~ HandleGridImageClick ~ SelectedGridImage: 1", SelectedGridImage)

                SetSelectedGridImage(null); // Unselect if already selected
            } else {
                SetSelectedGridImage(index); // Select the clicked image
                console.log("🚀 ~ HandleGridImageClick ~ SelectedGridImage:", SelectedGridImage)

                updateFormData({
                    ...formData,
                    upload: {
                        ...formData.upload,
                        images: TheImages.map((image, theindex) => ({
                            ...image,
                            isProfile: theindex === index, // Set isProfile to true for the selected image
                        }))
                    }
                });

                SetitsSelected(true)

            }
        }
    };
    return (
        <>
            <div className='pb-[100px]'>
                <div className='mt-[90px] w-full h-full'>
                    <div className="absolute mt-[-40px]">
                        {TheImages?.length > 0 ? <>  <p style={Text}>Select any photo as profile</p> </> : ""}
                    </div>
                    <div className={`flex flex-wrap gap-[30px] ${data?.images?.length >= 4 ? "lg:justify-between" : ""}  max-w-[647px] mx-auto`}>
                        {
                            data?.images?.length >= 5 ? "" : <>  <UploadContainer /></>
                        }

                        {TheImages?.map((item, index) => {
                            return (
                                <li key={index} className="flex-shrink-0 list-none">
                                    <div className="w-[150px] h-[150px] lg:w-[135px] lg:h-[137px] rounded-[10px] relative">
                                        <div
                                            className={`${SelectedGridImage === index ? "block" : "hidden"}  grid place-items-center  absolute  rounded-[8px]  w-[150px] h-[150px] lg:w-[115px] lg:h-[117px] bg-[#0F52BACC] `}
                                        >
                                            <img
                                                src="/assests/common/Select-Right.svg"
                                                className="w-[30px] h-[35px]"
                                            />
                                        </div>
                                        <Image width={0} height={0} alt={index} src={item?.data}
                                            style={{ objectFit: "cover", width: "115px", height: "117px" }}
                                            className=" w-[150px]  h-[150px] lg:w-[135px] lg:h-[137px] rounded-[10px]"
                                            id="photo-grid-item"
                                            onClick={() => HandleGridImageClick(index, item)}
                                        />
                                        <div className="absolute top-[5px] right-[25px]">
                                            <Image onClick={() => HandleRemove(item, index)} className="cursor-pointer" width={24} height={24} alt="delete" src={"/assests/login/Delete-icon.png"} />
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

// export default connect(
//     (state) => ({
//         datingForm: state?.datingregister?.datingForm, // Access datingformData from Redux state
//     }),
//     { updateDatingFormData } // Map the action creator to props
// )(UploadSection);

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(GridphotoSec);


