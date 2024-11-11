import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateFormData, updateHobbies, updatehobbiesData } from '../../../../../../store/actions/registerUser';
import { fetchMyhoobies, updateMyHobbies } from '../../../../../../store/reducers/MyProfile';
import SaveButton from '../../../../../../components/common/Buttons/SaveButton';
import ReusableMultiSelect from '../../../../../../components/Dating/register/sections/MusltiSelectDating';
import MultiSelect from '../../../../../alert';
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function HobbiesTab({ formData, updateFormData }) {



    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }

    const creativeOption = [
        { value: "Writing", label: "Writing" },
        { value: "PlayInstrument", label: "Play Instrument" },
        { value: "Poetry", label: "Poetry" }
    ]

    const hobbyOptions = [
        { value: "Reading", label: "Reading" },
        { value: "Cooking", label: "Cooking" },
        { value: "Traveling", label: "Traveling" },
        { value: "Photography", label: "Photography" },
        { value: "Gardening", label: "Gardening" },
        { value: "Painting", label: "Painting" },
        { value: "Drawing", label: "Drawing" },
        { value: "Hiking", label: "Hiking" },
        { value: "Cycling", label: "Cycling" },
        { value: "Dancing", label: "Dancing" },
        { value: "Fishing", label: "Fishing" },
        { value: "Knitting", label: "Knitting" },
        { value: "Sewing", label: "Sewing" },
        { value: "Baking", label: "Baking" },
        { value: "Yoga", label: "Yoga" },
        { value: "Meditation", label: "Meditation" },
        { value: "Chess", label: "Chess" },
        { value: "PlayingGuitar", label: "Playing Guitar" },
        { value: "WritingPoetry", label: "Writing Poetry" },
        { value: "Calligraphy", label: "Calligraphy" },
        { value: "BirdWatching", label: "Bird Watching" }
    ];




    // const { data, status, totalLikes } = useSelector((state) => state.myprofile);

    const [TheData, SetData] = useState()

    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(!showForm);

    };

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        lineHeight: "normal",
    };
    const HobbyValue = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }


    const [selectedInterests, setSelectedInterests] = useState([]);
    // let initialSelected = ["meet-new-friends"]

    const handleInterestsChange = (selected) => {
        setSelectedInterests(selected);
    };


    const dispatch = useDispatch();


    const { data, status, totalLikes } = useSelector((state) => state.myprofile);

    const { hobby } = useSelector((state) => state.form?.formData)


    const SubmitChanges = () => {
        dispatch(updateMyHobbies({ data, hobbies: hobby?.hobbyval }))
        setShowForm(false)
    }

    // useEffect(() => {
    //     dispatch(fetchMyhoobies())
    // }, [])

    return (
        <>
            <div className={`w-full ${showForm ? "h-[450px]" : "h-[369px]"} border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>{showForm ? "Modify Hobbies and Interests" : "Hobbies and Interests"}</h1></li>
                        <li>
                            <div className='cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                {!showForm ?
                                    <Image loading='lazy' alt='editIcon' width={20} height={20} onClick={handleEditClick} src={'/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={handleEditClick} src={'/assests/profile/cross-edit-icon.svg'} />

                                }
                            </div>
                        </li>
                    </ul>
                </div>
                {showForm ?
                    <>
                        <div className="space-y-[20px] flex flex-col items-center justify-center">

                            <div className='w-[90%]'>
                                <h1 className="font-semibold" style={Text1}>Hobby</h1>
                                <div className='w-full mt-[10px]'>
                                    <MultiSelect formData={formData} updateFormData={updateFormData} />
                                </div>
                            </div>
                            <div className='w-[90%] flex justify-end pb-[10px] mt-[10px]'>

                                <SaveButton onClick={SubmitChanges}>Save</SaveButton>

                            </div>
                        </div>
                    </>
                    : <>
                        <div className='flex justify-center '>
                            <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                        </div>
                        <div className='relative left-8'>
                            <ul className='flex space-x-[15px]'>
                                {
                                    data?.hobbies?.map((res, index) => {
                                        return (
                                            <li key={index} className='p-[10px] pl-[15px] pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]' style={HobbyValue}>{capitalizeFirstLetter(res)}</li>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>}
            </div>
        </>
    )
}

// export default HobbiesTab

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(HobbiesTab);
