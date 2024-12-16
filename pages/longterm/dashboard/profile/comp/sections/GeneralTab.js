import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { updateMyProfileData } from '../../../../../../store/reducers/MyProfile'
import moment from 'moment-timezone'
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize'
import {
  GenderOptions,
  MaritalOptions,
  profileOptions,
  Religionoptions,
  subcastOption
} from '../../../../../../utils/options/ProfileOptions/GeneralSection'
import SaveButton from '../../../../../../components/common/Buttons/SaveButton'
import { getFormattedTime } from '../../../../../../utils/helpers/getFormattedTime'
import { getFormattedDate } from '../../../../../../utils/helpers/GetFormatedDate'
import { useDispatch, useSelector } from 'react-redux'
import { useDarkMode } from '../../../../../../ContextProvider/DarkModeContext'
import { Box, Button, Slider } from '@mui/material'
import CustomModal from '../../../../../../components/common/Models/CustomModals'
import KycDocUpload from '../../../../../../components/long-term/seting/sections/KycDocUpload'
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

const GeneralTab = () => {
  const { data, status, totalLikes } = useSelector(state => state.myprofile)

  const { darkMode, toggleDarkMode } = useDarkMode()

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [userdata, setuserdata] = useState({
    caste: data?.caste && data?.caste,
    religion: data?.religion && data.religion,
    dateOfBirth: data?.dateOfBirth && data.dateOfBirth,
    birthTime: data?.birthTime && data.birthTime,
    name: data && data.name,
    gender: data?.gender && data.gender,
    writeBoutYourSelf: data?.writeBoutYourSelf && data.writeBoutYourSelf,
    creatingProfileFor: data?.creatingProfileFor,
    weight: data?.weight,
    height: data?.height
  })

  const handleUpdateGenProfile = () => {
    dispatch(updateMyProfileData(userdata))
  }

  const [CharCount, setCharCount] = useState(0)
  const [birthTime, SetBirthTime] = useState()

  const handleInputChange = e => {
    const value = e.target.value
    const name = e.target.name
    if (name === 'gender') {
      setuserdata(prevValue => ({ ...prevValue, [name]: value }))
    } else if (name === 'religion') {
      const selectedReligion = Religionoptions.find(
        option => option.value === value
      )
      setSelectValue(selectedReligion)
      setuserdata(prevValue => ({ ...prevValue, [name]: value }))
    } else if (name === 'caste') {
      console.log(userdata)

      const selectedcast = subcastOption.find(option => option.value === value)
      SetSubCastValue(selectedcast)
      setuserdata(prevValue => ({ ...prevValue, [name]: value }))
    } else if (name == 'birthTime') {
      // Get the current date
      const currentDate = moment()

      // Extract the date parts
      const year = currentDate.year()
      const month = String(currentDate.month() + 1).padStart(2, '0') // Months are 0-based in moment.js
      const day = String(currentDate.date()).padStart(2, '0')

      // Combine the date with the input time (value) to form an ISO string in UTC
      const isoDateString = moment(`${year}-${month}-${day}T${value}:00`)
        .tz('Asia/Kolkata')
        .format()

      // Update state with the ISO date string
      setuserdata(prevValue => ({
        ...prevValue,
        [name]: isoDateString // Use the field 'name' and ISO string
      }))

      // Also update birth time state (if needed)
      SetBirthTime(value)
    } else if (name === 'writeBoutYourSelf') {
      const maxChars = 150
      if (value.length <= maxChars) {
        setuserdata(prevValue => ({ ...prevValue, [name]: value }))
        setCharCount(value.length)
      }
    } else {
      setuserdata(prevValue => ({ ...prevValue, [name]: value }))
    }
  }

  const [showForm, setShowForm] = useState(false)

  const handleEditClick = () => {
    setShowForm(!showForm)
  }

  const labelText = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const Text2 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const Text5 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '505',
    lineHeight: 'normal'
  }

  const InputFonts = {
    fontFamily: 'Poppins'
  }

  const InputTexts = {
    color: '#858585',
    fontFamily: 'Poppins',
    // fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const InputText2 = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }
  const ModalTitle = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal'
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      //   paddingRight: '10px',
      //   paddingLeft: '-115px',
      width: '300px',
      height: '50px',
      borderRadius: '0px',
      borderBottom: '1px solid #000',
      borderColor: 'none',
      borderWidth: '0',
      borderStyle: 'none',
      backgroundColor: darkMode ? '#141516' : '#FFF',
      outline: 'none', // Remove outline
      boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Remove blue line on focus
      borderColor: 'transparent' // Remove default border color
    }),
    valueContainer: provided => ({
      ...provided,
      paddingLeft: '0px' // Remove padding inside the container
    }),

    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
      paddingRight: '20px'
      // Hide the vertical line behind the arrow
    })
  }

  const [selectValue, setSelectValue] = useState(
    data?.religion
      ? Religionoptions.find(option => option.value === data.religion)
      : null
  )

  const [SubCastValue, SetSubCastValue] = useState(
    data?.cast ? subcastOption.find(option => option.value === data.cast) : null
  )

  return (
    <>
      <div
        className={`w-full ${
          showForm
            ? ''
            : '2xl:h-[360px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]'
        } border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}
      >
        <div className='pt-[10px] grid place-items-center'>
          <ul className='w-[90%] flex justify-between items-center m-[10px]'>
            <li>
              <h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>
                {showForm
                  ? 'Modify General Information'
                  : 'General Information'}
              </h1>
            </li>
            <li>
              <div className='cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                {!showForm ? (
                  <Image
                    alt='editIcon'
                    width={20}
                    height={20}
                    onClick={handleEditClick}
                    src={
                      darkMode
                        ? '/assests/dashboard/icon/edit-details-icon-white.svg'
                        : '/assests/dashboard/icon/edit-details-icon.svg'
                    }
                  />
                ) : (
                  <Image
                    loading='lazy'
                    alt='modifyIcon'
                    width={15}
                    height={15}
                    onClick={handleEditClick}
                    src={
                      darkMode
                        ? '/assests/profile/cross-edit-icon-white.svg'
                        : '/assests/profile/cross-edit-icon.svg'
                    }
                  />
                )}
              </div>
            </li>
          </ul>
        </div>

        {showForm ? (
          <>
            <div className=' flex flex-col justify-center items-center'>
              <div className='w-[90%] flex justify-between'>
                <div>
                  <h1
                    className='dark:text-[#FFF] text-[#000] pb-[10px]'
                    style={labelText}
                  >
                    Create Profile for
                  </h1>
                  <DynamicSelect
                    className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                    styles={customStyles}
                    options={profileOptions}
                    defaultValue={data?.creatingProfileFor}
                    placeholder={
                      data && data?.creatingProfileFor
                        ? data?.creatingProfileFor
                        : 'Choose an option'
                    }
                    onChange={selectedOption =>
                      handleInputChange({
                        target: {
                          name: 'creatingProfileFor',
                          value: selectedOption?.value
                        }
                      })
                    }
                  />
                </div>
                <div>
                  <h1
                    className='dark:text-[#FFF] text-[#000] pb-[10px]'
                    style={labelText}
                  >
                    Gender
                  </h1>
                  <DynamicSelect
                    className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                    styles={customStyles}
                    options={GenderOptions}
                    defaultValue={data?.gender}
                    placeholder={
                      data && data?.gender ? data?.gender : 'Choose an option'
                    }
                    onChange={selectedOption =>
                      handleInputChange({
                        target: {
                          name: 'gender',
                          value: selectedOption?.value
                        }
                      })
                    }
                  />
                </div>
              </div>
              <div className='w-[90%] pt-[20px]'>
                <div className='flex justify-between items-center space-x-[20px]'>
                  <div>
                    <h1
                      style={labelText}
                      className='dark:text-[#FFF] text-[#000] pb-[10px]'
                    >
                      Full Name
                    </h1>
                    <input
                      style={InputFonts}
                      value={userdata.name}
                      onChange={handleInputChange}
                      name='name'
                      type='text'
                      placeholder='First Name'
                      disabled
                      className='text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-b-[#787878] outline-none focus:border-b-[1px] focus:border-b-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-b-[1px] border-b-[#000]'
                    />
                  </div>

                  <div className='w-full h-full grid place-items-center'>
                    <div className='relative top-3'>
                      <button
                        onClick={handleOpen}
                        className='border-[1px] border-[#8225AF] hover:bg-[#EFF5FF] duration-200 rounded-[23px] w-[278px] h-[50px]'
                      >
                        Change Name Request
                      </button>
                    </div>
                  </div>
                </div>
                <div className='pt-[20px] flex justify-between'>
                  <div>
                    <h1
                      style={labelText}
                      className='dark:text-[#FFF] text-[#000] pb-[10px]'
                    >
                      Date Of Birth
                    </h1>
                    <input
                      name='dateOfBirth'
                      value={userdata.dateOfBirth}
                      onChange={handleInputChange}
                      type='date'
                      placeholder='First Name'
                      className='dark:text-[#FFF] dark:bg-[#141516] dark:border-b-[#787878] outline-none focus:border-b-[1px] focus:border-b-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-b-[1px] border-b-[#000]'
                    />
                  </div>
                  <div>
                    <h1
                      style={labelText}
                      className='dark:text-[#FFF] text-[#000] pb-[10px]'
                    >
                      Time of Birth
                    </h1>
                    <input
                      name='birthTime'
                      onChange={handleInputChange}
                      value={birthTime}
                      type='time'
                      placeholder='First Name'
                      className='dark:text-[#FFF] dark:bg-[#141516] dark:border-b-[#787878] outline-none focus:border-b-[1px] focus:border-b-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-b-[1px] border-b-[#000] pl-[10px]'
                    />
                  </div>
                </div>
                <div className='pt-[20px] flex justify-between space-x-[20px]'>
                  <div>
                    <h1
                      className='dark:text-[#FFF] text-[#000] pb-[10px]'
                      style={labelText}
                    >
                      Religion
                    </h1>
                    <DynamicSelect
                      className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex pl-[-50px] justify-end'
                      styles={customStyles}
                      options={Religionoptions}
                      defaultValue={selectValue}
                      placeholder={
                        data && data.religion
                          ? data.religion
                          : 'Choose an option'
                      }
                      onChange={selectedOption =>
                        handleInputChange({
                          target: {
                            name: 'religion',
                            value: selectedOption?.value
                          }
                        })
                      }
                    />
                  </div>
                  <div>
                    <h1
                      style={labelText}
                      className='dark:text-[#FFF] text-[#000] pb-[10px]'
                    >
                      Caste / Sub Caste
                    </h1>
                    <DynamicSelect
                      className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                      styles={customStyles}
                      options={subcastOption}
                      defaultValue={SubCastValue}
                      placeholder={
                        data && data.caste ? data.caste : 'Choose an option'
                      }
                      onChange={selectedOption =>
                        handleInputChange({
                          target: {
                            name: 'caste',
                            value: selectedOption?.value
                          }
                        })
                      }
                    />
                  </div>
                </div>
                <div className='pt-[20px] flex justify-between space-x-[20px]'>
                  <div className='w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]'>
                    <div>
                      <ul className='flex justify-between'>
                        <li>
                          <h1
                            className='dark:text-[#FFF] text-[#000] pb-[10px]'
                            style={labelText}
                          >
                            Height (ft)
                          </h1>
                        </li>
                        <li>{userdata?.height}</li>
                      </ul>
                    </div>
                    <Slider
                      sx={{
                        '& .MuiSlider-track': {
                          backgroundImage:
                            'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                          height: '2px'
                        },
                        '& .MuiSlider-rail': {
                          height: '1px'
                        },
                        '& .MuiSlider-thumb': {
                          backgroundImage:
                            'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                          height: '16px',
                          width: '16px',
                          '&:hover': {
                            boxShadow: 'none' // Removes hover shadow
                          },
                          '&:focus': {
                            boxShadow: 'none' // Removes focus shadow
                          },
                          '&:active': {
                            boxShadow: 'none' // Removes active shadow
                          }
                        }
                      }}
                      name='height'
                      defaultValue={data?.height || 0}
                      value={userdata?.height} // Use values from Redux
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* </div> */}

                  <div className='w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]'>
                    <div>
                      <ul className='flex justify-between'>
                        <li>
                          <h1
                            className='dark:text-[#FFF] text-[#000] pb-[10px]'
                            style={labelText}
                          >
                            Weight (kg)
                          </h1>
                        </li>
                        <li>{userdata?.weight}</li>
                      </ul>
                    </div>

                    <Slider
                      sx={{
                        '& .MuiSlider-track': {
                          backgroundImage:
                            'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                          height: '2px'
                        },
                        '& .MuiSlider-rail': {
                          height: '1px'
                        },
                        '& .MuiSlider-thumb': {
                          backgroundImage:
                            'linear-gradient(103deg, #0F52BA -25.03%, #BA0FA9 137.92%)',
                          height: '16px',
                          width: '16px',
                          '&:hover': {
                            boxShadow: 'none' // Removes hover shadow
                          },
                          '&:focus': {
                            boxShadow: 'none' // Removes focus shadow
                          },
                          '&:active': {
                            boxShadow: 'none' // Removes active shadow
                          }
                        }
                      }}
                      name='weight'
                      defaultValue={[data?.weight] || [0]}
                      value={userdata?.weight} // Use values from Redux
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <h1
                      className='dark:text-[#FFF] text-[#000] pb-[10px]'
                      style={labelText}
                    >
                      MaritalStatus
                    </h1>

                    <DynamicSelect
                      className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                      styles={customStyles}
                      options={MaritalOptions}
                      placeholder={
                        data?.maritalStatus ? data.maritalStatus : 'Select'
                      }
                      onChange={selectedOption =>
                        handleInputChange({
                          target: {
                            name: 'maritalStatus',
                            value: selectedOption?.value
                          }
                        })
                      }
                    />
                  </div>
                </div>
                <div className='pt-[20px]'>
                  <h1
                    style={labelText}
                    className='dark:text-[#FFF] text-[#000] pb-[10px]'
                  >
                    Write About Yourself
                  </h1>
                  <textarea
                    style={InputFonts}
                    type='text'
                    name='writeBoutYourSelf'
                    value={userdata.writeBoutYourSelf}
                    onChange={handleInputChange}
                    className='text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#000] pl-[10px] rounded-[8px]'
                  />
                  <span className='dark:text-[#FFF] text-[#000]'>
                    {CharCount}/150
                  </span>
                </div>
                <div className='flex justify-center pb-[30px] mt-[10px]'>
                  <SaveButton
                    onClick={handleUpdateGenProfile}
                    className={
                      'rounded-[100px] text-[white] w-[194px] h-[50px]'
                    }
                  >
                    Save Changes
                  </SaveButton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex justify-center '>
              <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
            </div>
            <div className='grid place-items-center'>
              <div className='w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]'>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Date of Birth
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'
                  >
                    {data?.birthTime
                      ? getFormattedDate(data?.dateOfBirth)
                      : 'NA'}
                  </h1>
                </div>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Birth of Time
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'
                  >
                    {data?.birthTime ? getFormattedTime(data?.birthTime) : 'NA'}
                  </h1>
                </div>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Religion
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'
                  >
                    {data && data.religion
                      ? capitalizeFirstLetter(data.religion)
                      : 'NA'}
                  </h1>
                </div>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Caste/Sub Caste
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'
                  >
                    {data && data.caste
                      ? capitalizeFirstLetter(data.caste)
                      : 'NA'}
                  </h1>
                </div>
              </div>
            </div>
            <div className='grid place-items-center'>
              <div className='w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]'>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >{`Height & Weight`}</p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'
                  >
                    {data?.height + ' ' + 'ft' || 'NA'}, &nbsp;
                    {data?.weight + ' ' + 'kg' || 'NA'}{' '}
                  </h1>
                </div>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >{`Marital Status`}</p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'
                  >
                    {capitalizeFirstLetter(data?.maritalStatus) || 'NA'}
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <CustomModal
        open={open}
        onClose={handleClose}
        // title='Change Name Request'
      >
        <div className='w-[595px]'>
          <div className='space-y-12'>
            <div className='relative left-[43px]'>
              <h1 style={ModalTitle}>Change Name Request</h1>
            </div>
            <div className='space-y-7'>
              <ul className='flex justify-evenly'>
                <li>
                  <div className='space-y-2'>
                    <p
                      className='relative left-1 text-[14px]'
                      style={InputTexts}
                    >
                      New First Name
                    </p>
                    <span className='relative left-1 bottom-1'>-</span>
                    <input className='pl-4 pt-1 pb-2 w-[232px] border-b-[1px] border-b-[black] outline-none' />
                  </div>
                </li>
                <li>
                  <div className='space-y-2'>
                    <p
                      className='relative left-1 text-[14px]'
                      style={InputTexts}
                    >
                      New Last Name
                    </p>
                    <span className='relative left-1 bottom-1'>-</span>
                    <input className='pl-4 pt-1 pb-2 w-[232px] border-b-[1px] border-b-[black] outline-none' />
                  </div>
                </li>
              </ul>

              <div className='space-y-7 relative left-[43px]'>
                <div className='space-y-2'>
                  <h1 style={InputText2}>Upload ID</h1>
                  <p style={InputTexts} className='text-[12px]'>
                    Please upload Government issued ID as per your new name
                  </p>
                </div>
                <div className='relative'>
                  <KycDocUpload Profile={true} />
                </div>
              </div>
            </div>
            <div className='text-center space-x-[21px]'>
              <button onClick={handleClose} className='w-[125px] h-[49px] text-[14px] rounded-[24.5px] border-[1px] hover:bg-[#EFF5FF] duration-200 border-[black]'>
                Not Now
              </button>
              <button
                className='w-[125px] h-[49px] rounded-[24.5px] text-[14px]'
                id='grad-button'
              >
                Send Request
              </button>
            </div>
          </div>
        </div>

        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant='contained' color='error' onClick={handleClose}>
            Close
          </Button>
        </Box> */}
      </CustomModal>
    </>
  )
}
export default GeneralTab
