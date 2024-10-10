import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { LabelStyle } from "../../../../utils/options/styles/SelectBoxStyle";
import {
    CountryOptions,
    DegreeOption,
} from "../../../../utils/options/Register/EducationSectionOptions";
import { occupationOptions } from "../../../../utils/options/Register/ProfessionalSectionOptions";
import { updateDatingFormData } from "../../../../store/dating-services/Redux-actions/register/registerAction";
import { connect } from "react-redux";
import { getCookie } from "cookies-next";
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });

function AdditionalDetailsSection({ datingForm, updateDatingFormData }) {
    const [Uemail, setUemail] = useState();

    useEffect(() => {
        setUemail(getCookie("email"));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // datingData: [{
        //     educationLevel: "",
        //     CurrentlyLiving: "",
        //     Occupation: ""
        //   }],

        if (name === "educationLevel") {
            updateDatingFormData({
                address: {
                    ...datingForm.address,
                    datingData: [{
                        ...datingForm.address.datingData[0],
                        educationLevel: value,
                    }],
                },
            });

        } else if (name === "CurrentlyLiving") {
            updateDatingFormData({
                address: {
                    ...datingForm.address,
                    datingData: [{
                        ...datingForm.address.datingData[0],
                        CurrentlyLiving: value,
                    }],
                },
            });

        } else if (name === "Occupation") {
            updateDatingFormData({
                address: {
                    ...datingForm.address,
                    datingData: [{
                        ...datingForm.address.datingData[0],
                        Occupation: value,
                    }],
                },
            });

        } else {
            updateDatingFormData({
                address: {
                    ...datingForm.address,
                    [name]: value,
                },
            });
        }


    };
    return (
        <>
            <div className="pb-[100px]">
                <div className="mt-[80px] w-full h-full ">
                    <div>
                        <ul className="w-full space-y-[50px]">
                            <li className="flex justify-between w-full">
                                <div className="">
                                    <div
                                        style={{ width: "300px" }}
                                        className="the-input-container"
                                    >
                                        <input
                                            onChange={handleInputChange}
                                            type="text"
                                            id="mobileNumber"
                                            name="mobileNumber"
                                            required
                                        />
                                        <label for="mobileNumber" className="label">
                                            Mobile Number
                                        </label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                                <div className="">
                                    <div
                                        style={{ width: "300px" }}
                                        className="the-input-container"
                                    >
                                        <input
                                            value={Uemail}
                                            onChange={handleInputChange}
                                            type="text"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                        <label for="email" className="label">
                                            Email Address
                                        </label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <DynamicSelect
                                    className="w-[647px]"
                                    placeholder="Currently Living" //religion
                                    styles={LabelStyle}
                                    options={CountryOptions}
                                    onChange={(selectedOption) =>
                                        handleInputChange({
                                            target: {
                                                name: "CurrentlyLiving",
                                                value: selectedOption?.value,
                                            },
                                        })
                                    }
                                />
                            </li>
                            <li className="flex justify-between">
                                <DynamicSelect
                                    className="w-[300px]"
                                    placeholder="Education Level" //religion
                                    styles={LabelStyle}
                                    options={DegreeOption}
                                    onChange={(selectedOption) =>
                                        handleInputChange({
                                            target: {
                                                name: "educationLevel",
                                                value: selectedOption?.value,
                                            },
                                        })
                                    }
                                />
                                <DynamicSelect
                                    className="w-[300px]"
                                    placeholder="Occupation"
                                    styles={LabelStyle}
                                    options={occupationOptions}
                                    onChange={(selectedOption) =>
                                        handleInputChange({
                                            target: {
                                                name: "Occupation",
                                                value: selectedOption?.value,
                                            },
                                        })
                                    }
                                />
                            </li>
                        </ul>
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
)(AdditionalDetailsSection);