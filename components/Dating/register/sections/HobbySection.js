import React from "react";
import MultiSelect from "../../../../pages/alert";
import { updateDatingFormData } from "../../../../store/dating-services/Redux-actions/register/registerAction";
import { connect } from "react-redux";

const HobbySection = ({ datingForm, updateDatingFormData }) => {
    return (
        <>
            <div className="pb-[100px]">
                <div className="mt-[80px] w-full h-full ">
                    <div>
                        <ul className="w-full space-y-[50px]">
                            <li className="w-[647px]">
                                <MultiSelect
                                    formData={datingForm}
                                    updateFormData={updateDatingFormData}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default connect(
    (state) => ({
        datingForm: state?.datingregister?.datingForm, // Access datingformData from Redux state
    }),
    { updateDatingFormData }, // Map the action creator to props
)(HobbySection);