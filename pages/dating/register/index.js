import Image from 'next/image';
import React from 'react'
import dynamic from 'next/dynamic';
// import { profileOptions } from '../../../utils/options/ProfileOptions/GeneralSection';
import { useRouter } from 'next/router';
import { updateDatingFormData } from '../../../store/dating-services/Redux-actions/register/registerAction';
import { connect } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function index({ formData, updateDatingFormData }) {

    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const router = useRouter();

    const EnumAppUsesTypeOfUsers = {
        MARRIAGE: 'marriage',
        DATING: 'dating',
        CASUAL_DATING: 'casualDating',
        LONG_TERM_RELATIONSHIP: 'long-Term-Relationship',
        FRIENDSHIP: 'friendship',
        OPEN_TO_EXPLORING: 'OpenToExploring',
        JUST_CHATTING: 'just-chatting',
    };

    const profileOptions = [
        { id: 1, label: 'Marriage', value: EnumAppUsesTypeOfUsers.MARRIAGE },
        { id: 2, label: 'Dating', value: EnumAppUsesTypeOfUsers.DATING },
        { id: 3, label: 'Casual Dating', value: EnumAppUsesTypeOfUsers.CASUAL_DATING },
        { id: 4, label: 'Long Term Relationship', value: EnumAppUsesTypeOfUsers.LONG_TERM_RELATIONSHIP },
        { id: 5, label: 'Friendship', value: EnumAppUsesTypeOfUsers.FRIENDSHIP },
        { id: 6, label: 'Open to Exploring', value: EnumAppUsesTypeOfUsers.OPEN_TO_EXPLORING },
        { id: 7, label: 'Just Chatting', value: EnumAppUsesTypeOfUsers.JUST_CHATTING },
    ];



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
                                        borderRadius: "0px",  // Removes the border-radius
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


                            />

                        </div>

                        <ul className='h-[30px] flex space-x-[37px]'>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    <input type="text" id="firstName" name='firstName' required />
                                    <label for="firstName" className="label">First Name</label>
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    <input type="text" id="lastName" name='lastName' required />
                                    <label for="lastName" className="label">Last Name</label>
                                    <div className="underline"></div>
                                </div>


                            </li>
                        </ul>
                        <div>
                            <button onClick={() => router.push("/dating/register/general")} className='w-[153px] h-[44px] bg-[#000] rounded-[22px] text-[#FFF] text-center'>Start Now
                                <Image width={24} height={24} alt='next' src={"/assests/login/Arrow-reg.svg"} className='relative left-[8px] inline' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

// export default ProfileSelection

// export default index;
export default connect((state) => ({ formData: state.form?.formData }), { updateDatingFormData })(index);

