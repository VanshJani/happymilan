import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })
import { Checkbox } from '@material-tailwind/react'
import { updateMyAddressData } from '../../../../../../store/reducers/MyProfile'
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize'
import { useDarkMode } from '../../../../../../ContextProvider/DarkModeContext'
import SaveButton from '../../../../../../components/common/Buttons/SaveButton'
import { StateOptions } from '../../../../../../utils/options/Register/EducationSectionOptions'

const AddressTab = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const dispatch = useDispatch()

  const { loading, data } = useSelector(
    state => state.myprofile.profileData.adressData
  )

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

  const InputFonts = {
    fontFamily: 'Poppins'
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: '10px',
      //   paddingLeft: '8px',
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
      //   boxShadow: state.isFocused ? 'none' : provided.boxShadow // Add padding on the right side
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

  const currentcityOption = [
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'surat', label: 'Surat' },
    { value: 'toronto', label: 'Toronto' }
    // Add more cities as needed
  ]

  // Countries
  const countryoflivingOptions = [
    { value: 'india', label: 'India' },
    { value: 'us', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'mexico', label: 'Mexico' }
    // Add more countries as needed
  ]

  const [CurrentAddressData, SetCurrentAddressData] = useState({
    currentResidenceAddress: data?.currentResidenceAddress || '',
    currentCity: data?.currentCity || '',
    currentState: data?.currentState || '',
    currentCountry: data?.currentCountry || ''
  })

  const handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    // updateFormData({
    //   address: { ...formData.address, [name]: value }
    // });
    SetCurrentAddressData(prevData => ({ ...prevData, [name]: value }))
  }

  const SaveUpdateDataBtn = () => {
    dispatch(
      updateMyAddressData({
        AdressID: data?.id,
        UpdatedDataforAddress: CurrentAddressData
      })
    )
    setShowForm(false)
  }

  return (
    <>
      <div
        className={`w-full pb-10 ${
          showForm
            ? 'h-[500px]'
            : '2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]'
        } border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}
      >
        <div className='pt-[10px] grid place-items-center'>
          <ul className='w-[90%] flex justify-between items-center m-[10px]'>
            <li>
              <h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>
                {showForm ? 'Modify Address Details' : 'Address Details'}
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
              <div className='w-[90%]'>
                <div className=''>
                  <h1 style={labelText} className='dark:text-[#FFF] pb-[10px]'>
                    Current Residing Address
                  </h1>
                  <textarea
                    style={InputFonts}
                    name='currentResidenceAddress'
                    onChange={handleInputChange}
                    value={CurrentAddressData.currentResidenceAddress}
                    type='text'
                    className='hover:border-[#000] text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#000] pl-[10px] rounded-[8px]'
                  />
                </div>
              </div>
              <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                <div>
                  <h1
                    className='text-[#000] dark:text-[#FFF] pb-[10px]'
                    style={labelText}
                  >
                    Current City
                  </h1>

                  <DynamicSelect
                    className='dark:text-[#FFF] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                    styles={customStyles}
                    options={currentcityOption}
                    placeholder={CurrentAddressData.currentCity}
                    onChange={selectedOption =>
                      handleInputChange({
                        target: {
                          name: 'currentCity',
                          value: selectedOption?.value
                        }
                      })
                    }
                  />
                </div>
                <div>
                  <h1
                    className='text-[#000] dark:text-[#FFF] pb-[10px]'
                    style={labelText}
                  >
                    Current State
                  </h1>

                  <DynamicSelect
                    className='dark:text-[#FFF] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                    styles={customStyles}
                    options={StateOptions}
                    placeholder={CurrentAddressData.currentState}
                    onChange={selectedOption =>
                      handleInputChange({
                        target: {
                          name: 'currentState',
                          value: selectedOption?.value
                        }
                      })
                    }
                  />
                </div>
              </div>

              <div className='w-[90%] pt-[20px]'>
                <div>
                  <h1
                    className='text-[#000] pb-[10px] dark:text-[#FFF]'
                    style={labelText}
                  >
                    Country of Living
                  </h1>

                  <DynamicSelect
                    className='dark:text-[#FFF] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                    styles={customStyles}
                    options={countryoflivingOptions}
                    placeholder={CurrentAddressData.currentCountry}
                    onChange={selectedOption =>
                      handleInputChange({
                        target: {
                          name: 'currentCountry',
                          value: selectedOption?.value
                        }
                      })
                    }
                  />
                </div>
              </div>

              <div className='w-[90%]  pt-[20px] space-x-[20px]'>
                <div className='flex justify-center pb-[20px] mt-[10px]'>
                  <SaveButton
                    className={
                      'rounded-[100px] text-[white] w-[194px] h-[50px]'
                    }
                    onClick={SaveUpdateDataBtn}
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
              <div className='w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]'>
                <div className='col-span-2'>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Current Residing Address
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                  >
                    {CurrentAddressData?.currentResidenceAddress
                      ? capitalizeFirstLetter(
                          CurrentAddressData.currentResidenceAddress
                        )
                      : 'NA'}
                  </h1>
                </div>

                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Current City
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                  >
                    {CurrentAddressData?.currentCity
                      ? capitalizeFirstLetter(CurrentAddressData.currentCity)
                      : 'NA'}
                  </h1>
                </div>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Current State
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                  >
                    {CurrentAddressData?.currentState
                      ? capitalizeFirstLetter(CurrentAddressData.currentState)
                      : 'NA'}
                  </h1>
                </div>
                <div>
                  <p
                    style={Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Current Residing Country
                  </p>
                  <h1
                    style={Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                  >
                    {CurrentAddressData?.currentCountry
                      ? capitalizeFirstLetter(CurrentAddressData.currentCountry)
                      : 'NA'}
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AddressTab
