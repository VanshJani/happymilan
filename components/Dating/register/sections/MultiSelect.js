import React, { useEffect, useState } from 'react';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
// import { LabelStyle2 } from '../../utils/options/styles/SelectBoxStyle';
import dynamic from 'next/dynamic';
import { LabelStyle2, LabelStyle3 } from '../../../../utils/options/styles/SelectBoxStyle';

const DatingMultiSelect = ({ datingForm, updateDatingFormData }) => {

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

    const options = [
        { id: 1, label: "Meet New Friends", value: EnumOfInterest.MEET_NEW_FRIENDS },
        { id: 2, label: "Looking for Love", value: EnumOfInterest.LOOKING_FOR_LOVE },
        { id: 3, label: "Movie Date", value: EnumOfInterest.MOVIE_DATE },
        { id: 4, label: "Foodies", value: EnumOfInterest.FOODIES },
        { id: 5, label: "Travel Buddies", value: EnumOfInterest.TRAVEL_BUDDIES },
        { id: 6, label: "Game Lover", value: EnumOfInterest.GAME_LOVER },
        { id: 7, label: "Chit Chat", value: EnumOfInterest.CHITCHAT },
        { id: 8, label: "Adventurous", value: EnumOfInterest.ADVENTUROUS },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [datastore, setdatastore] = useState([])

    useEffect(() => {
        const selectedValues = selectedOptions.map(option => option.value);
        setdatastore(selectedValues)

        updateDatingFormData({
            general: {
                ...datingForm.general,
                datingData: [
                    {
                        ...datingForm?.general?.datingData[0],
                        interestedIn: selectedValues,
                    }
                ],
            },
        });

    }, [selectedOptions, setSelectedOptions])

    // Handle selection fennizatauboi-6918@yopmail.com
    const handleSelectChange = (selected) => {
        setSelectedOptions(selected || []);
    };

    // Handle removal of selected option 
    const handleRemoveOption = (optionToRemove) => {
        setSelectedOptions(selectedOptions.filter(option => option.value !== optionToRemove.value));
    };

    // Filter options to not show already selected options
    const filteredOptions = options.filter(option =>
        !selectedOptions.some(selectedOption => selectedOption.value === option.value)
    );

    return (
        <>
            <div className="relative">
                <DynamicSelect
                    options={filteredOptions}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    placeholder="Select your options"
                    components={{ MultiValueContainer }}
                    styles={LabelStyle3}
                    closeMenuOnSelect={false}

                />
                <div className="selected-options mt-2 flex flex-wrap">
                    {selectedOptions.map(option => (
                        <div
                            key={option.value}
                            className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 mr-2 mb-2 cursor-pointer"
                            onClick={() => handleRemoveOption(option)}
                        >
                            {option.label} <span className="ml-2">&times;</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

// Custom MultiValueContainer to hide selected items in the input
const MultiValueContainer = ({ children, ...props }) => {
    return null; // Hide selected options in the input itself
};

// export default MultiSelect;
export default DatingMultiSelect;

