import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import { GenderOption, motherTongueOption, religionOptions } from '../../../../utils/options/Register/GenralSectionOptions';
import { LabelStyle } from '../../../../utils/options/styles/SelectBoxStyle';
import { cityOptions } from '../../../../utils/options/Register/PartnerPreferenceOptions';
import { updateDatingFormData } from '../../../../store/dating-services/Redux-actions/register/registerAction';
import { connect } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function GeneralSection({ datingForm, updateDatingFormData }) {
    const [CharCount, setCharCount] = useState(0)
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        updateDatingFormData({
            general: {
                ...datingForm.general,
                [name]: value,
            }
        });
    }

    return (
        <>
            <div className='pb-[100px]'>
                <div className='mt-[80px] w-full h-full '>

                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Gender" //gender
                                    styles={LabelStyle}
                                    options={GenderOption}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "gender", value: selectedOption?.value } })}
                                />
                                <div>
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <span className='absolute right-[10px] text-[#AFAFAF]'>
                                            CM
                                        </span>
                                        <input type="text" id="height" onChange={handleInputChange} name='height' required />
                                        <label for="height" className="label">Heights</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Religion" //religion
                                    styles={LabelStyle}
                                    options={religionOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "religion", value: selectedOption?.value } })}
                                />
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Ethnicity"
                                    styles={LabelStyle}
                                    options={cityOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "Ethnicity", value: selectedOption?.value } })}
                                />

                            </li>
                            <li>
                                <DynamicSelect
                                    className='w-[full]'
                                    placeholder="Language Spoken"
                                    styles={LabelStyle}
                                    options={motherTongueOption}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "motherTongue", value: selectedOption?.value } })}
                                />
                            </li>
                            <li>
                                <div className="">
                                    <div style={{ width: "647px" }} className="the-input-container">
                                        <span className='absolute right-[10px] text-[14px] text-[#AFAFAF]'>
                                            {CharCount}&nbsp;/&nbsp;150
                                        </span>
                                        <input onChange={handleInputChange} type="text" id="writeBoutYourSelf" name='writeBoutYourSelf' required />
                                        <label for="writeBoutYourSelf" className="label">Short Bio</label>
                                        <div className="underline"></div>
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
        datingForm: state?.datingregister?.datingForm,
    }),
    { updateDatingFormData }
)(GeneralSection);

