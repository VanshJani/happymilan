import React, { useEffect, useState } from 'react'
import { updateDatingFormData } from '../../../../store/dating-services/Redux-actions/register/registerAction';
import { connect } from 'react-redux';
import { LabelStyle } from '../../../../utils/options/styles/SelectBoxStyle';
import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });



function PreferencesSection({ datingForm, updateDatingFormData }) {

    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const EnumOfInterest = {
        MEET_NEW_FRIENDS: 'meet-new-friends',
        LOOKING_FOR_LOVE: 'looking-for-love',
        MOVIE_DATE: 'movie-date',
        FOODIES: 'foodies',
        TRAVEL_BUDDIES: 'travel-buddies',
        GAME_LOVER: 'game-lover',
        CHITCHAT: 'chit-chat',
        ADVENTUROUS: 'adventurous',
    };

    const InterestedOptions = [
        { label: "Meet new friends", value: EnumOfInterest.MEET_NEW_FRIENDS },
        { label: "Looking For Love", value: EnumOfInterest.LOOKING_FOR_LOVE },
        { label: "Movie Date", value: EnumOfInterest.MOVIE_DATE },
        { label: "Foodies", value: EnumOfInterest.FOODIES },
        { label: "Travel Buddies", value: EnumOfInterest.TRAVEL_BUDDIES },
        { label: "Game Lover", value: EnumOfInterest.GAME_LOVER },
        { label: "Chit Chat", value: EnumOfInterest.CHITCHAT },
        { label: "Adventurous", value: EnumOfInterest.ADVENTUROUS },

    ]


    const [selectedOptions, setSelectedOptions] = useState([]);
    const [datastore, setdatastore] = useState([])

    useEffect(() => {
        const selectedValues = selectedOptions.map(option => option.value);
        setdatastore(selectedValues)

        updateDatingFormData({
            partnerpref: {
                ...datingForm.partnerpref,
                interestedIn: selectedValues

            }
        })

    }, [selectedOptions, setSelectedOptions])

    const handleSelectChange = (selected) => {
        setSelectedOptions(selected || []);
    };

    // Handle removal of selected option
    // const handleRemoveOption = (optionToRemove) => {
    //     setSelectedOptions(selectedOptions.filter(option => option.value !== optionToRemove.value));
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        if (name == "agemin") {
            updateDatingFormData({
                partnerpref: {
                    ...datingForm.partnerpref,
                    age: {
                        ...datingForm.partnerpref.age,
                        min: parseInt(value)
                    }
                }
            })
        }
        else if (name == "agemax") {
            updateDatingFormData({
                partnerpref: {
                    ...datingForm.partnerpref,
                    age: {
                        ...datingForm.partnerpref.age,
                        max: parseInt(value)
                    }
                }
            })
        }
        else if (name == "distancemin") {
            updateDatingFormData({
                partnerpref: {
                    ...datingForm.partnerpref,
                    distanceRange: {
                        ...datingForm.partnerpref.distanceRange,
                        min: parseInt(value)
                    }
                }
            })
        }
        else if (name == "distancemax") {
            updateDatingFormData({
                partnerpref: {
                    ...datingForm.partnerpref,
                    distanceRange: {
                        ...datingForm.partnerpref.distanceRange,
                        max: parseInt(value)
                    }
                }
            })
        }
        else if (name == "interestedIn") {
            updateDatingFormData({
                partnerpref: {
                    ...datingForm.partnerpref,
                    distanceRange: {
                        ...datingForm.partnerpref.distanceRange,
                        interestedIn: value
                    }
                }
            })
        }
    }

    return (
        <>
            <div className='pb-[100px]'>
                <div className='mt-[80px] w-full h-full '>

                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between w-full'>
                                <div className="">
                                    {/* <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="mobileNumber" name='mobileNumber' required />
                                        <label for="mobileNumber" className="label">Interested In</label>
                                        <div className="underline"></div>
                                    </div> */}
                                    <DynamicSelect
                                        className="w-[647px]"
                                        placeholder="interested In" //religion
                                        styles={LabelStyle}
                                        options={InterestedOptions}
                                        isMulti
                                        // onChange={(selectedOption) =>
                                        //     handleInputChange({
                                        //         target: {
                                        //             name: "interestedIn",
                                        //             value: selectedOption?.value,
                                        //         },
                                        //     })
                                        // }
                                        onChange={handleSelectChange}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="mt-[-20px]">
                                    {/* <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="email" name='email' required />
                                        <label for="email" className="label">Age Range</label>
                                        <div className="underline"></div>
                                    </div> */}
                                    <div className='w-[647px] space-y-[12px]'>
                                        <p style={TitleText}>Select Age Range</p>
                                        <ul className='flex justify-between'>
                                            <li>
                                                <input type='number' name='agemin' onChange={handleInputChange} placeholder='min' id='num-input' className='pl-[2px] pb-[10px] w-[300px]  outline-none border-b-[2px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                            </li>
                                            <li>
                                                <div className='text-[#000]'>-</div>
                                            </li>
                                            <li>
                                                <input type='number' name='agemax' onChange={handleInputChange} placeholder='max' id='num-input' className='pl-[2px] pb-[10px] w-[300px]  outline-none border-b-[2px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className=''>
                                <div className="">
                                    {/* <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="email" name='email' required />
                                        <label for="email" className="label">Distance Range</label>
                                        <div className="underline"></div>
                                    </div> */}
                                    <div className='w-[647px] space-y-[12px]'>
                                        <p style={TitleText}>Distance Range</p>
                                        <ul className='flex justify-between'>
                                            <li>
                                                <input type='number' name='distancemin' onChange={handleInputChange} placeholder='min' id='num-input' className='pl-[2px] pb-[10px] w-[300px]  outline-none border-b-[2px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                            </li>
                                            <li>
                                                <div className='text-[#000]'>-</div>
                                            </li>
                                            <li>
                                                <input type='number' name='distancemax' onChange={handleInputChange} placeholder='max' id='num-input' className='pl-[2px] pb-[10px] w-[300px]  outline-none border-b-[2px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(
    (state) => ({
        datingForm: state?.datingregister?.datingForm, // Access datingformData from Redux state
    }),
    { updateDatingFormData } // Map the action creator to props
)(PreferencesSection);