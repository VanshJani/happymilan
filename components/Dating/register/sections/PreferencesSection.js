import React, { useEffect, useState } from 'react'
import { updateDatingFormData } from '../../../../store/dating-services/Redux-actions/register/registerAction';
import { connect } from 'react-redux';
import { LabelStyle } from '../../../../utils/options/styles/SelectBoxStyle';
import dynamic from 'next/dynamic';
import ReusableMultiSelect from './MusltiSelectDating';
import { CityOptions } from '../../../../utils/options/Register/EducationSectionOptions';
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

    const [selectedInterests, setSelectedInterests] = useState([]);
    // let initialSelected = ["meet-new-friends"]

    const handleInterestsChange = (selected) => {
        setSelectedInterests(selected);
    };

    // Use an effect to log selectedInterests once they update
    useEffect(() => {

        // updateDatingFormData({
        //     partnerpref: {
        //         ...datingForm.partnerpref,
        //         distanceRange: {
        //             ...datingForm.partnerpref,
        //             preferredLocation: selectedInterests
        //         }
        //     }
        // })

        updateDatingFormData({
            partnerpref: {
                ...datingForm.partnerpref,
                preferredLocation: selectedInterests
            }
        })
        console.log("Selected Interests after update: ", selectedInterests);
    }, [selectedInterests]); // This will log the state after it has changed

    return (
        <>
            <div className='pb-[100px]'>
                <div className='mt-[80px] w-full h-full '>

                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between w-full'>
                                <div className="">

                                    <DynamicSelect
                                        className="w-[647px]"
                                        placeholder="interested In" //religion
                                        styles={LabelStyle}
                                        options={InterestedOptions}
                                        isMulti
                                        onChange={handleSelectChange}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="mt-[-20px]">
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
                                    <div className='w-[647px] space-y-[12px]'>
                                        <ReusableMultiSelect
                                            options={CityOptions}
                                            setSelectedValues={setSelectedInterests}
                                        // initialSelected={initialSelected}
                                        placeholder='select prefer location'
                                        />
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