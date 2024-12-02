import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { profileOptions } from '../../../../utils/options/Register/GenralSectionOptions';
import dynamic from 'next/dynamic';
import { updateFormData } from '../../../../store/actions/registerUser';
import { connect } from 'react-redux';
import { getCookie } from 'cookies-next';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function ProfileSelection({ goToNextStep, formData, updateFormData, SetActiveTab }) {

    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    function splitName(fullName) {
        const nameParts = fullName?.trim()?.split(" ") || [];
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || ""; // Handles cases with middle or multiple last names
        return { firstName, lastName };
    }

    // Initializing local state for credentials
    const [Credentials, setCredentials] = useState({
        firstName: '',
        lastName: ''
    });

    // Using useEffect to split the name from the cookie and update credentials and Redux state
    useEffect(() => {
        const { firstName, lastName } = splitName(getCookie("uname"));
        setCredentials({
            firstName,
            lastName
        });

        // Update the Redux state immediately after setting local state

        updateFormData({
            ...formData,
            general: {
                ...formData.general,
                firstName: firstName,
                lastName: lastName
            }
        });


    }, []);

    const [Validate, SetValidate] = useState({
        creatingProfileFor: "",
    });

    // Handling input changes and updating both local state and Redux state
    const handleInputChange = (e) => {
        let { name, value } = e.target;

        setCredentials((prev) => ({
            ...prev,
            [name]: value
        }));

        updateFormData({
            ...formData,
            general: {
                ...formData.general,
                [name]: value,
            }
        });

        if (name === 'birthTime') {
            // Assuming value is in 'hh:mm' format

            // setselectBoxData(prevState => ({ ...prevState, selectedTime: value }))

            // setselectBoxData(prevState => ({ ...prevState, timeData: value }));
            const [time, period] = value.split(' ');
            const [hours, minutes] = time.split(':');
            const date = new Date();
            // Set the hours and minutes of the date object
            date.setHours(period === 'PM' ? parseInt(hours) + 12 : hours);
            date.setMinutes(minutes);
            // Format the time as desired (you can adjust the format as needed)


            console.log("🚀 ~ handleInputChange ~ toISOString:", date.toISOString())

            updateFormData({
                ...formData,
                general: {
                    ...formData.general,
                    birthTime: date.toISOString()
                }
            });
        }
        else if (name === 'dateOfBirth') {
            const selectedDate = new Date(value);
            const currentDate = new Date();
            const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

            // Check if selected date is in the future
            if (selectedDate > currentDate) {
                alert('Please select a date that is not in the future.');
                // Optionally, you can reset the date input here
                value = null;

            } // Check if user is at least 18 years old
            if (eighteenYearsAgo < selectedDate) {
                alert('You must be at least 18 years old.');
                // Optionally, you can reset the date input here
                value = null

            }
        }


        SetValidate((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Validating fields before submission
    const validateFields = () => {
        return Object.values(Validate).every(value => value.trim() !== '');
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
                <div className='flex flex-col items-center justify-evenly w-full h-[100vh]'>
                    <div>
                        <h1 style={Title}>I’m creating profile for?</h1>
                    </div>
                    <div className='flex flex-col items-center space-y-[98px]'>
                        <div className=''>
                            <DynamicSelect
                                className={`h-[50px] w-[500px]`}
                                placeholder="Profile Creating for"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        paddingRight: '0px',
                                        paddingLeft: "0px", // Ensure no padding on the left
                                        width: "500px",
                                        height: "50px",
                                        borderRadius: "0px", // Removes the border-radius
                                        borderColor: "black",
                                        borderTop: "none", // No top border
                                        borderLeft: "none", // No left border
                                        borderRight: "none", // No right border
                                        backgroundColor: "transparent", // No background
                                        boxShadow: 'none', // No box-shadow
                                        borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
                                        transition: "border-color 0.3s ease-in-out", // Animation for border color
                                        '&:hover': {
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
                                        display: 'none',
                                    }),
                                }}
                                options={profileOptions}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "creatingProfileFor", value: selectedOption?.value } })}
                            />
                        </div>
                        <ul className='h-[30px] flex space-x-[37px]'>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    <input value={formData?.general?.firstName} type="text" id="firstName" name='firstName' onChange={handleInputChange} required />
                                    <label for="firstName" className="label">First Name</label>
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    <input value={formData?.general?.lastName} type="text" id="lastName" name='lastName' onChange={handleInputChange} required />
                                    <label for="lastName" className="label">Last Name</label>
                                    <div className="underline"></div>
                                </div>
                            </li>
                        </ul>
                        <ul className='flex space-x-[36px]'>
                            <li>

                                <div style={{ width: "232px" }}>
                                    <p style={TitleText}>Date of Birth</p>
                                    <input style={{ width: "232px" }} type="date" name="dateOfBirth" onChange={handleInputChange} className="pb-[5px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000]" required />
                                </div>
                            </li>
                            <li>

                                <div style={{ width: "232px" }}>
                                    <p style={TitleText}>Time of Birth</p>
                                    <input style={{ width: "232px" }} type="time" name="birthTime" onChange={handleInputChange} className="pb-[5px] outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000]" required />
                                </div>
                            </li>
                        </ul>
                        <div>
                            <button onClick={goToNextStep} className='w-[153px] h-[44px] bg-[#000] rounded-[22px] text-[#FFF] text-center hover:opacity-70 duration-200'>Start Now
                                <Image width={24} height={24} alt='next' src={"/assests/login/Arrow-reg.svg"} className='relative left-[8px] inline' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(ProfileSelection);