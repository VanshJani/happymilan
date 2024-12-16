import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
  updateFormData,
  updateHobbies,
  updatehobbiesData
} from '../../../../../../store/actions/registerUser'
import {
  fetchMyhoobies,
  updateMyHobbies
} from '../../../../../../store/reducers/MyProfile'
import SaveButton from '../../../../../../components/common/Buttons/SaveButton'
import ReusableMultiSelect from '../../../../../../components/Dating/register/sections/MusltiSelectDating'
import MultiSelect from '../../../../../alert'
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize'

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

function HobbiesTab ({ formData, updateFormData }) {
  const Text2 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [showForm, setShowForm] = useState(false)

  const handleEditClick = () => {
    setShowForm(!showForm)
  }

  const Text1 = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: 'normal'
  }
  const HobbyValue = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const dispatch = useDispatch()

  const { data, status, totalLikes } = useSelector(state => state.myprofile)

  const { hobby } = useSelector(state => state.form?.formData)

  const SubmitChanges = () => {
    dispatch(updateMyHobbies({ data, hobbies: hobby?.hobbyval }))
    setShowForm(false)
  }

  return (
    <>
      <div
        className={`w-full ${
          showForm ? 'h-[450px]' : 'h-[369px]'
        } border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}
      >
        <div className='pt-[10px] grid place-items-center'>
          <ul className='w-[90%] flex justify-between items-center m-[10px]'>
            <li>
              <h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>
                {showForm
                  ? 'Modify Hobbies and Interests'
                  : 'Hobbies and Interests'}
              </h1>
            </li>
            <li>
              <div className='cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                {!showForm ? (
                  <Image
                    loading='lazy'
                    alt='editIcon'
                    width={20}
                    height={20}
                    onClick={handleEditClick}
                    src={'/assests/dashboard/icon/edit-details-icon.svg'}
                  />
                ) : (
                  <Image
                    loading='lazy'
                    alt='modifyIcon'
                    width={15}
                    height={15}
                    onClick={handleEditClick}
                    src={'/assests/profile/cross-edit-icon.svg'}
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
        {showForm ? (
          <>
            <div className='space-y-[20px] flex flex-col items-center justify-center'>
              <div className='w-[90%]'>
                {/* <h1 className='font-semibold' style={Text1}>
                  Hobby
                </h1> */}
                <div className='w-full mt-[10px]'>
                  <MultiSelect
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                </div>
              </div>
              <div className='w-[90%] flex justify-center  pb-[10px] mt-[20px]'>
                <SaveButton
                  onClick={SubmitChanges}
                  className={'rounded-[100px] text-[white] w-[194px] h-[50px]'}
                >
                  Save Changes
                </SaveButton>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex justify-center '>
              <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
            </div>
            <div className='relative left-8'>
              <ul className='flex flex-wrap  gap-3'>
                {data?.hobbies?.map((res, index) => {
                  return (
                    <li
                      key={index}
                      className='p-[10px] pl-[15px] inline-block pr-[15px] rounded-full bg-[#F2F2F2] text-[#000]'
                      style={HobbyValue}
                    >
                      {capitalizeFirstLetter(res)}
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  )
}

// export default HobbiesTab

export default connect(state => ({ formData: state.form.formData }), {
  updateFormData
})(HobbiesTab)
