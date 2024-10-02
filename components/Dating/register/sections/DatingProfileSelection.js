import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { getCookie } from "cookies-next";
import { updateDatingFormData } from "../../../../store/dating-services/Redux-actions/register/registerAction";
import { LabelStyle2 } from "../../../../utils/options/styles/SelectBoxStyle";
import DatingMultiSelect from "./MultiSelect";
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });

function DatingProfileSelection({
    datingForm,
    updateDatingFormData,
    goToNextStep,
}) {
    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };

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

    const profileOptions = [
        { id: 1, label: "Meet New Friends", value: EnumOfInterest.MEET_NEW_FRIENDS },
        { id: 2, label: "Looking for Love", value: EnumOfInterest.LOOKING_FOR_LOVE },
        { id: 3, label: "Movie Date", value: EnumOfInterest.MOVIE_DATE },
        { id: 4, label: "Foodies", value: EnumOfInterest.FOODIES },
        { id: 5, label: "Travel Buddies", value: EnumOfInterest.TRAVEL_BUDDIES },
        { id: 6, label: "Game Lover", value: EnumOfInterest.GAME_LOVER },
        { id: 7, label: "Chit Chat", value: EnumOfInterest.CHITCHAT },
        { id: 8, label: "Adventurous", value: EnumOfInterest.ADVENTUROUS },
    ];

    function splitName(fullName) {
        const nameParts = fullName?.trim()?.split(" ") || [];
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || ""; // Handles cases with middle or multiple last names
        return { firstName, lastName };
    }

    // Initializing local state for credentials
    const [Credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
    });

    // Using useEffect to split the name from the cookie and update credentials and Redux state
    useEffect(() => {
        const { firstName, lastName } = splitName(getCookie("uname"));
        setCredentials({
            firstName,
            lastName,
        });

        // Update the Redux state immediately after setting local state

        updateDatingFormData({
            ...datingForm,
            general: {
                ...datingForm?.general,
                firstName: firstName,
                lastName: lastName,
            },
        });
    }, []);

    const [Validate, SetValidate] = useState({
        creatingProfileFor: "",
    });

    // Handling input changes and updating both local state and Redux state
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));

        updateDatingFormData({
            general: {
                ...datingForm.general,
                [name]: value,
            },
        });


        SetValidate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Validating fields before submission
    const validateFields = () => {
        return Object.values(Validate).every((value) => value.trim() !== "");
    };

    // Handling form submission and checking validation
    const HandleSubmit = () => {
        if (validateFields()) {
            SetActiveTab(1);
        } else {
            alert("Please fill out all required fields.");
        }
    };


    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-evenly w-full h-[100vh]">
                    <div>
                        <h1 style={Title}>I’m looking for?</h1>
                    </div>

                    <div className="flex flex-col items-center space-y-[79px]">
                        <div className="hidden">
                            <DynamicSelect
                                className={`h-[50px] w-[500px]`}
                                placeholder="Profile Creating for"
                                isMulti
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        paddingRight: "0px",
                                        paddingLeft: "0px", // Ensure no padding on the left
                                        width: "500px",
                                        height: "50px",
                                        borderRadius: "0px", // Removes the border-radius
                                        borderColor: "black",
                                        borderTop: "none", // No top border
                                        borderLeft: "none", // No left border
                                        borderRight: "none", // No right border
                                        backgroundColor: "transparent", // No background
                                        boxShadow: "none", // No box-shadow
                                        borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
                                        transition: "border-color 0.3s ease-in-out", // Animation for border color
                                        "&:hover": {
                                            borderBottomColor: state.isFocused ? "black" : "#C0C0C0",
                                        },
                                    }),
                                    valueContainer: (provided) => ({
                                        ...provided,
                                        paddingLeft: "0px", // Ensure no padding in the value container
                                    }),
                                    input: (provided) => ({
                                        ...provided,
                                        paddingLeft: "0px",
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        paddingLeft: "0px",
                                    }),
                                    indicatorSeparator: () => ({
                                        display: "none",
                                    }),
                                }}
                                options={profileOptions}
                                onChange={(selectedOption) =>
                                    handleInputChange({
                                        target: {
                                            name: "creatingProfileFor",
                                            value: selectedOption?.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div>
                            <DatingMultiSelect datingForm={datingForm} updateDatingFormData={updateDatingFormData} />
                        </div>


                        <ul className="h-[30px] flex space-x-[37px]">
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    {/* <input type="text" id="firstName" name='firstName' required /> */}
                                    <input
                                        value={datingForm?.general?.firstName}
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label for="firstName" className="label">
                                        First Name
                                    </label>
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    {/* <input type="text" id="lastName" name='lastName' required /> */}
                                    <input
                                        value={datingForm?.general?.lastName}
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label for="lastName" className="label">
                                        Last Name
                                    </label>
                                    <div className="underline"></div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <input name="dateOfBirth" onChange={handleInputChange} type="date" className="2xl:w-[500px] w-[450px] pb-4 pr-4 pl-1 outline-none border-b-[1px] border-b-[black]" />
                        </div>
                        <div>
                            <button
                                onClick={goToNextStep}
                                className="w-[153px] h-[44px] bg-[#000] rounded-[22px] text-[#FFF] text-center"
                            >
                                Start Now
                                <Image
                                    width={24}
                                    height={24}
                                    alt="next"
                                    src={"/assests/login/Arrow-reg.svg"}
                                    className="relative left-[8px] inline"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default connect(
    (state) => ({
        datingForm: state?.datingregister?.datingForm, // Access datingformData from Redux state
    }),
    { updateDatingFormData }, // Map the action creator to props
)(DatingProfileSelection);
