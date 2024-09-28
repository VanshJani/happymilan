import React from 'react'
import { motherTongueOption } from '../../../utils/options/Register/GenralSectionOptions'
import dynamic from 'next/dynamic';
import { LabelStyle, LabelStyle2 } from '../../../utils/options/styles/SelectBoxStyle';
import MultiSelect from '../../alert';
import { updateFormData } from '../../../store/actions/registerUser';
import { connect } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function HobbySec({ formData, updateFormData, SetActiveTab }) {


    return (
        <>

            <div className='pb-[100px]'>
                <div className='mt-[80px] w-full h-full '>
                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='w-[647px]'>
                                {/* <DynamicSelect
                                    className='w-[647px]'
                                    placeholder="Select Hobby"
                                    styles={LabelStyle2}
                                    options={motherTongueOption} 
                                    isMulti/> */}
                                <MultiSelect formData={formData} updateFormData={updateFormData} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default HobbySec
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(HobbySec);
