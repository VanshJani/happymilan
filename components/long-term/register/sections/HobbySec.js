import React from 'react'
import { connect } from 'react-redux';
import MultiSelect from '../../../../pages/alert';
import { updateFormData } from '../../../../store/actions/registerUser';


function HobbySec({ formData, updateFormData, SetActiveTab }) {


    return (
        <>

            <div className='pb-[100px]'>
                <div className='mt-[80px] w-full h-full '>
                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='w-[647px]'>
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
