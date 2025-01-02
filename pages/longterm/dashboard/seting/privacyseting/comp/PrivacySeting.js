import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Getprivacyquestions,
  UpdateDisplayName
} from '../../../../../../store/actions/UserSettingAction'
import { Dialog } from '@mui/material'

function PrivacySeting () {
  const dispatch = useDispatch()
  const { loading, data } = useSelector(
    state => state.userseting.privacyquestions
  )
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    dispatch(Getprivacyquestions())
  }, [dispatch])

  useEffect(() => {
    // Update local state when 'data' changes
    setFormData(data)
  }, [data])

  const [changedQuestionId, setChangedQuestionId] = useState(null)
  const [showbtn, setshowbtn] = useState(false)

  const handleOptionChange = (questionIndex, optionIndex) => {
    setshowbtn(true)
    // Update the selected option in the state
    const updatedFormData = [...formData]
    updatedFormData[questionIndex].options.forEach((option, index) => {
      option.isSelected = index === optionIndex
    })
    setFormData(updatedFormData)

    // Set the ID of the changed question
    setChangedQuestionId(updatedFormData[questionIndex].id)
  }

  const { NameChangeloading, status, error } = useSelector(
    state => state?.userseting.DisplayName
  )
  const [openShortlistModal, setopenShortlistModal] = React.useState(false)

  const Urlmodaltext = {
    color: '#000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  useEffect(() => {
    console.log('start')
    if (status != '') {
      console.log('done')
      setshowbtn(false)

      setopenShortlistModal(true)

      setTimeout(() => {
        setopenShortlistModal(false)
      }, 900)
    }
  }, [status])

  const postDataToApi = () => {
    dispatch(UpdateDisplayName(SelectedDisplayName))
  }
  const TextHeading = {
    color: '#6A6A6A',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const smallText = {
    color: '#818181',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineheight: 'normal'
  }

  const QuestionText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [SelectedDisplayName, SetSelectedDisplayName] = useState()

  const HandleChangeUserName = e => {
    // dispatch(UpdateDisplayName(e.target.value))
    SetSelectedDisplayName(e.target.value)
    setshowbtn(true)
  }

  return (
    <>
      <div className='mb-[80px]'>
        <div className='flex mt-[-17px]'>
          <h1
            id='setting-text-grad'
            className='text-[15px] xl:text-[16px]  ml-[0px]'
          >
            Privacy Setting
          </h1>
        </div>
        <div className='w-[500px] lg:w-[640px] xl:w-[700px]'>
          <h1 style={TextHeading} className=' mt-[20px]'>
            This menu enables users to conceal or delete their profile from
            public visibility
          </h1>
        </div>
        <div className=' mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]'></div>

        <div className='space-y-[29px] mt-[21px]'>
          <div>
            <h1>Select Profile Privacy Option</h1>
          </div>
          <ul className='space-y-[24px]'>
            <li className='flex space-x-[16px]'>
              <input
                className='relative top-1 w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]'
                type='radio'
                id={`id-1`}
                name={`question1`}
              />
              <ul>
                <li style={QuestionText}>Private Profile</li>
                <li style={smallText}> Only Full Name will be visible</li>
              </ul>
            </li>
            <li className='flex space-x-[16px]'>
              <input
                className='relative top-1 w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]'
                type='radio'
                id={`id-1`}
                name={`question1`}
              />
              <ul>
                <li style={QuestionText}>Visible to Premium Members Only</li>
                <li style={smallText}>
                  Full Name, Photo Gallery, Contact, Address will be hidden to
                  unregistered members.
                </li>
              </ul>
            </li>
            <li className='flex space-x-[16px]'>
              <input
                className='relative top-1 w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]'
                type='radio'
                id={`id-1`}
                name={`question1`}
              />
              <ul>
                <li style={QuestionText}>Only Accepted Members</li>
                <li style={smallText}>
                  Full Name and Photos will be visible and contact, address will
                  not be visible
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Dialog
        open={openShortlistModal}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        PaperProps={{
          style: {
            backgroundColor: 'transparent', // or 'none' if you prefer
            boxShadow: 'none'
          }
        }}
        BackdropProps={{
          style: { opacity: 0, backgroundColor: 'none', boxShadow: 'none' }
        }}
      >
        <div
          style={{ padding: '17px 19px 17px 20px' }}
          className='bg-[#333333] w-[full] rounded-[100px] text-center grid place-items-center'
        >
          <div className='text-[14px]' style={Urlmodaltext}>
            <span className='text-[#fff]'>
              {' '}
              {'Your Display Name Has Been Updated!'}
            </span>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default PrivacySeting
