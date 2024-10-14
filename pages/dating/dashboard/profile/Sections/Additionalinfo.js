import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import Image from 'next/image';
import { LabelStyle } from '../../../../../utils/options/styles/SelectBoxStyle';
import { occupationOptions } from '../../../../../utils/options/Register/ProfessionalSectionOptions';
import dynamic from 'next/dynamic';
import { updateUserDetails } from '../../../../../store/dating-services/Redux-reducer/home/MyprofileReducer';
import { DegreeOption } from '../../../../../utils/options/Register/EducationSectionOptions';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function Additionalinfo() {

    // const { data, status, totalLikes } = useSelector((state) => state?.myprofile);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const FildsTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const FiledsValue = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }



    const [showForm, setshowForm] = useState(false)

    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state


    const [UpdatedData, setUpdatedData] = useState({
        currentSalary: "",
        datingData: [
            {
                educationLevel: "",
                Occupation: ""
            }]

    });

    // UseEffect that updates `updatedData` when `details` changes
    useEffect(() => {
        if (details) {
            setUpdatedData({
                currentSalary: details?.currentSalary,
                datingData: [
                    {
                        ...details?.datingData[0],
                        educationLevel: details?.datingData[0]?.educationLevel || "",
                        Occupation: details?.datingData[0]?.Occupation || ""
                    }
                ]

            });
        }
    }, [details]); // Add `details` as a dependency


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "Occupation") {
            setUpdatedData((prev) => ({
                ...prev,
                datingData: [
                    {
                        ...prev.datingData[0],
                        Occupation: value
                    }]

            }));
        }
        else if (name === "educationLevel") {
            setUpdatedData((prev) => ({
                ...prev,
                datingData: [
                    {
                        ...prev.datingData[0],
                        educationLevel: value
                    }]

            }));
        }
        else {
            setUpdatedData((prev) => ({
                ...prev,
                [name]: value
            }));
        }

    }


    const dispatch = useDispatch()

    const UpdateData = () => {
        dispatch(updateUserDetails(UpdatedData))
        setshowForm(false)
    }


    return (
        <>
            <div className={`space-y-[20px] w-full ${!showForm ? "h-[240px]" : "h-full"}  rounded-[10px] border-[1px] border-[#F1F1F1] pl-[20px] pr-[20px] pt-[10px] `}>
                <div>
                    <ul className='flex justify-between items-center'>
                        <li><p>Professional Details</p></li>
                        <li>
                            <div className='cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                {!showForm ?
                                    <Image alt='editIcon' width={20} height={20} onClick={() => setshowForm(!showForm)} src={darkMode ? '/assests/dashboard/icon/edit-details-icon-white.svg' : '/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={() => setshowForm(!showForm)} src={darkMode ? '/assests/profile/cross-edit-icon-white.svg' : '/assests/profile/cross-edit-icon.svg'} />

                                }
                            </div>

                        </li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <div className='grid place-items-center w-full h-[1px] bg-[#F1F1F1]'></div>
                </div>

                {showForm ?
                    <>
                        <div className='space-y-8 pb-5'>
                            <ul className='pt-4 flex justify-between'>
                                <li>
                                    <div style={{ position: "relative" }} className=' w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[260px]'>
                                        <p className='absolute top-[-16px]' style={FildsTitle}>Education Level</p>
                                        <DynamicSelect
                                            className='w-[260px]'
                                            placeholder={UpdatedData?.datingData[0].educationLevel} //gender
                                            styles={LabelStyle}
                                            options={DegreeOption}
                                            onChange={(selectedOption) => handleInputChange({ target: { name: "educationLevel", value: selectedOption?.value } })}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div style={{ position: "relative" }} className=' w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[260px]'>
                                        <p className='absolute top-[-16px]' style={FildsTitle}>Occupation</p>
                                        <DynamicSelect
                                            className='w-[260px]'
                                            placeholder={UpdatedData?.datingData[0].Occupation} //gender
                                            styles={LabelStyle}
                                            options={occupationOptions}
                                            onChange={(selectedOption) => handleInputChange({ target: { name: "Occupation", value: selectedOption?.value } })}
                                        />
                                    </div>
                                </li>
                            </ul>
                            <div>
                                <div className="the-input-container">
                                    <input type="text" id="currentSalary" name='currentSalary' onChange={handleInputChange} required />
                                    <label for="currentSalary" className="label">Annual Salary</label>
                                    <div className="underline"></div>
                                </div>
                            </div>
                            <div className='grid place-items-end w-full mt-5'>
                                <button onClick={UpdateData} className='w-[100px] h-[40px] rounded-[20px] bg-custom-gradient text-[#FFF] hover:opacity-75'>Update</button>
                            </div>
                        </div>

                    </>
                    :
                    <>

                        <div className='space-y-8'>
                            <div>
                                <div className=''>
                                    <ul className='flex justify-between'>
                                        <li className='space-y-[5px]'>
                                            <p style={FildsTitle}>Education Level</p>
                                            <h1 style={FiledsValue}>{capitalizeFirstLetter(details?.datingData[0]?.educationLevel) || "NA"}</h1>
                                        </li>
                                        <li className='space-y-[5px] w-[150px]'>
                                            <p style={FildsTitle}>Occupation</p>
                                            <h1 style={FiledsValue}>{capitalizeFirstLetter(details?.datingData[0]?.Occupation) || "NA"}</h1>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <ul className='space-y-[5px]'>
                                        <li>
                                            <p style={FildsTitle}>Annual Income</p>
                                        </li>
                                        <li>
                                            <h1 style={FiledsValue}>{details?.currentSalary || "NA"}</h1>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Additionalinfo