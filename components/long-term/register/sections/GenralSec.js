import React, { useState } from 'react'
import { CasteOptions, GenderOption, MaritalOptions, motherTongueOption, religionOptions } from '../../../../utils/options/Register/GenralSectionOptions'
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { LabelStyle } from '../../../../utils/options/styles/SelectBoxStyle';
import { updateFormData } from '../../../../store/actions/registerUser';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function GenralSec({ formData, updateFormData, SetActiveTab }) {

    const [CharCount, setCharCount] = useState(0)

    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name == "writeBoutYourSelf") {
            const maxChars = 150
            if (value.length <= maxChars) {
                // setuserdata(prevValue => ({ ...prevValue, [name]: value }))
                updateFormData({
                    ...formData,
                    general: {
                        ...formData.general,
                        writeBoutYourSelf: value,

                    }
                });
                setCharCount(value.length);
            }
        } else {

            updateFormData({
                ...formData,
                general: {
                    ...formData.general,
                    [name]: value,

                }
            });
        }
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
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Marital Status" //maritalStatus
                                    styles={LabelStyle}
                                    options={MaritalOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "maritalStatus", value: selectedOption?.value } })}
                                />
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
                                    placeholder="Caste"
                                    styles={LabelStyle}
                                    options={CasteOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "cast", value: selectedOption?.value } })}
                                />
                            </li>
                            <li className='h-[40px]'>
                                <div className='flex justify-between'>
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <span className='absolute right-[10px] text-[#AFAFAF]'>
                                            CM
                                        </span>
                                        <input type="text" id="height" name='height' onChange={handleInputChange} required />
                                        <label for="height" className="label">Height</label>
                                        <div className="underline"></div>
                                    </div>

                                    <div>
                                        <div style={{ width: "300px" }} className="the-input-container">
                                            <span className='absolute right-[10px] text-[#AFAFAF]'>
                                                KG
                                            </span>
                                            <input type="text" id="weight" name='weight' onChange={handleInputChange} required />
                                            <label for="weight" className="label">Weight</label>
                                            <div className="underline"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <div style={{ width: "647px" }} className="the-input-container">
                                        <span className='absolute right-[10px] text-[14px] text-[#AFAFAF]'>
                                            {CharCount}&nbsp;/&nbsp;150
                                        </span>
                                        <input type="text" id="writeBoutYourSelf" name='writeBoutYourSelf' onChange={handleInputChange} value={formData?.general.writeBoutYourSelf} required />
                                        <label for="writeBoutYourSelf" className="label"> About Your Self</label>
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

// export default GenralSec
export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(GenralSec);
