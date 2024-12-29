import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import SaveButton from '../../../../../../components/common/Buttons/SaveButton'
import { useSelector } from 'react-redux'
import { Tooltip } from '@mui/material'
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

const ContactTab = () => {
  const { data, status, totalLikes } = useSelector(state => state.myprofile)

  const SectionStyle = useMemo(
    () => ({
      Text2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
      },

      Text5: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '505',
        lineHeight: 'normal'
      },
      labelText: {
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
      }
    }),
    []
  )

  const [showForm, setShowForm] = useState(false)

  const handleEditClick = () => {
    setShowForm(!showForm)
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
      boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
      outline: 'none', // Remove outline
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

  const options = [
    { value: '+91', label: '+91' },
    { value: '+92', label: '+92' },
    { value: '+93', label: '+93' }
  ]

  const [formdata, setformdata] = useState({
    email: data?.email && data.email,
    mobileNumber: data?.mobileNumber,
    homeMobileNumber: data?.homeMobileNumber
  })

  const [ShowPhoneNumber, SetShowPhoneNumber] = useState(null)
  const [showMobileNumber, SetShowMobileNumber] = useState(null)

  let phoneNumber
  let mobileNumber

  useEffect(() => {
    if (data?.mobileNumber) {
      phoneNumber = data?.homeMobileNumber.toString()

      // Insert a space after the country code (e.g., "91")
      phoneNumber = phoneNumber.replace(/^(\d{2})/, '$1 ')

      SetShowPhoneNumber(phoneNumber)
    } else {
      SetShowPhoneNumber(null)
    }

    if (data?.mobileNumber) {
      mobileNumber = data?.mobileNumber.toString()

      // Insert a space after the country code (e.g., "91")
      mobileNumber = mobileNumber.replace(/^(\d{2})/, '$1 ')
      SetShowMobileNumber(mobileNumber)
    } else {
      SetShowMobileNumber(null)
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target

    setformdata(() => ({
      ...formdata,
      [name]: value
    }))
  }

  return (
    <>
      <div
        className={`w-full h-[270px] ${
          showForm ? 'lg:h-[450px]' : 'lg:h-[369px]'
        }  border-[1px] border-[#F1F1F1] rounded-[10px] 2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}
      >
        <div className='pt-[10px] grid place-items-center'>
          <ul className='w-[90%] flex justify-between items-center m-[10px]'>
            <li>
              <h1
                style={SectionStyle?.Text2}
                className='dark:text-[#FFF]  2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]'
              >
                {showForm ? 'Modify Contact Details' : 'Contact Details'}
              </h1>
            </li>
            <li>
              <div className='cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                {!showForm ? (
                  <Image
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
            <div className='flex flex-col items-center justify-center'>
              <div className='w-[90%]'>
                <h1
                  className='text-[#000] pb-[10px]'
                  style={SectionStyle?.labelText}
                >
                  Mobile Number
                </h1>
                <div className='flex justify-between'>
                  <div>
                    <DynamicSelect
                      className='h-[50px] w-[280px] 2xl:w-[170px] xl:w-[135px] lg:w-[200px] flex justify-end'
                      styles={customStyles}
                      placeholder='+91'
                      options={options}
                    />
                  </div>
                  <div>
                    <input
                      name='mobileNumber'
                      type='text'
                      value={formdata?.mobileNumber}
                      onChange={handleChange}
                      className='outline-none border-b-[1px] h-[50px] w-[280px] 2xl:w-[350px] xl:w-[300px] lg:w-[300px]  border-b-[#000] pl-[10px]'
                    />
                  </div>
                </div>
              </div>
              <div className='w-[90%] pt-[20px]'>
                <h1
                  className='text-[#000] pb-[10px]'
                  style={SectionStyle?.labelText}
                >
                  Home Number
                </h1>
                <div className='flex justify-between'>
                  <div>
                    <DynamicSelect
                      className='h-[50px] w-[280px] 2xl:w-[170px] xl:w-[135px] lg:w-[200px] flex justify-end'
                      styles={customStyles}
                      placeholder='+91'
                      options={options}
                    />
                  </div>
                  <div>
                    <input
                      name='homeMobileNumber'
                      type='text'
                      value={formdata?.homeMobileNumber}
                      onChange={handleChange}
                      className='outline-none border-b-[1px] h-[50px] w-[280px] 2xl:w-[350px] xl:w-[300px] lg:w-[300px]  border-b-[#000] pl-[10px]'
                    />
                  </div>
                </div>
              </div>
              <div className='w-[90%] pt-[20px]'>
                <h1
                  className='text-[#000] pb-[10px]'
                  style={SectionStyle?.labelText}
                >
                  Email Address
                </h1>
                <div className='relative'>
                  <input
                    name='Enter Email Address'
                    type='text'
                    value={formdata?.email}
                    placeholder='First Name'
                    className='outline-none border-b-[1px] border-b-[black] h-[50px] w-full  '
                  />
                  <Tooltip title='Verified' placement='top' color='white'>
                    <img
                      className='absolute top-5 right-5'
                      src='/assests/dashboard/seting/Verified-icon.svg'
                      alt='Verified Icon'
                    />
                  </Tooltip>
                </div>
              </div>

              <div className='w-[90%] flex justify-center pb-[10px] mt-[20px]'>
                <SaveButton
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
            <div className='grid place-items-center'>
              <div className='w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]'>
                <div>
                  <p
                    style={SectionStyle?.Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Mobile Number
                  </p>
                  {/* <h1 style={SectionStyle?.Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>+{data?.mobileNumber ? data.mobileNumber : 'NA'}</h1> */}
                  <h1
                    style={SectionStyle?.Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                  >
                    +{ShowPhoneNumber || 'NA'}
                  </h1>
                </div>
                <div>
                  <p
                    style={SectionStyle?.Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Home Number
                  </p>
                  {/* <h1 style={SectionStyle?.Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.homeMobileNumber ? data.homeMobileNumber : "NA"}</h1> */}
                  <h1
                    style={SectionStyle?.Text5}
                    className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                  >
                    +{showMobileNumber || 'NA'}
                  </h1>
                </div>
                <div className='relative col-span-2'>
                  <p
                    style={SectionStyle?.Text2}
                    className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                  >
                    Email Address
                  </p>
                  <ul className='flex items-center space-x-2'>
                    <li>
                      <h1
                        style={SectionStyle?.Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data.email || 'NA'}
                      </h1>
                    </li>
                    <li>
                      <Tooltip title='Verified' placement='top' color='white'>
                        <img
                          className=''
                          src='/assests/dashboard/seting/Verified-icon.svg'
                          alt='Verified Icon'
                        />
                      </Tooltip>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default ContactTab
