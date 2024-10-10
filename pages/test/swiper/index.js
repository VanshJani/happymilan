import React, { useState, useEffect } from 'react';
import MultiSelectDating from '../../../components/Dating/register/sections/MusltiSelectDating';
import { CityOptions } from '../../../utils/options/Register/EducationSectionOptions';

const ParentComponent = () => {

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

    const [selectedInterests, setSelectedInterests] = useState([]);
    // let initialSelected = ["meet-new-friends"]

    const handleInterestsChange = (selected) => {
        setSelectedInterests(selected);
    };

    // Use an effect to log selectedInterests once they update
    useEffect(() => {
        console.log("Selected Interests after update: ", selectedInterests);
    }, [selectedInterests]); // This will log the state after it has changed

    return (
        <div>
            <h2>Select Interests</h2>
            <MultiSelectDating
                options={CityOptions}
                setSelectedValues={setSelectedInterests}
            // initialSelected={initialSelected}
            />
            <button onClick={() => console.log(selectedInterests)}>Submit</button>
        </div>
    );
};

export default ParentComponent;
