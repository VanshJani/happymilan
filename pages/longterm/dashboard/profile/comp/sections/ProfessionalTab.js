import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMyProfessionalData } from '../../../../../../store/reducers/MyProfile'
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize'
import SaveButton from '../../../../../../components/common/Buttons/SaveButton'
import { useDarkMode } from '../../../../../../ContextProvider/DarkModeContext'
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

const ProfessionalTab = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const { loading, data } = useSelector(
    state => state.myprofile.profileData?.ProfessionalData
  )

  const dispatch = useDispatch()

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
      borderColor: 'transparent', // Remove default border color
      boxShadow: state.isFocused ? 'none' : provided.boxShadow // Add padding on the right side
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

  const jobTypeOptions = [
    { value: 'full_time', label: 'Full-time' },
    { value: 'part_time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'remote', label: 'Remote' }
  ]

  const currentDesignationOptions = [
    { value: 'junior_engineer', label: 'Junior Engineer' },
    { value: 'senior_analyst', label: 'Senior Analyst' },
    { value: 'team_lead', label: 'Team Lead' },
    { value: 'project_manager', label: 'Project Manager' },
    { value: 'director', label: 'Director' }
  ]
  const currentcityOption = [
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'surat', label: 'Surat' },
    { value: 'toronto', label: 'Toronto' }
    // Add more cities as needed
  ]

  const countryoflivingOptions = [
    { value: 'india', label: 'India' },
    { value: 'us', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'mexico', label: 'Mexico' }
    // Add more countries as needed
  ]

  // ProfessionalId, UpdatedDataforProfessional

  const [AllProfessionalData, SetAllProfessionalData] = useState({
    jobTitle: data?.jobTitle || '',
    jobType: data?.jobType || '',
    companyName: data?.companyName || '',
    currentSalary: data?.currentSalary || '',
    workCity: data?.workCity || '',
    workCountry: data?.workCountry || ''
  })

  const handleInputChange = e => {
    const value = e.target.value
    const name = e.target.name

    SetAllProfessionalData(prevData => ({ ...prevData, [name]: value }))
  }

  const UpdateDataBtn = () => {
    dispatch(
      updateMyProfessionalData({
        ProfessionalId: data?.id,
        UpdatedDataforProfessional: AllProfessionalData
      })
    )
    setShowForm(false)
  }

  return (
    <>
      <div
        className={`w-full ${
          showForm ? 'h-[470px]' : 'h-[369px]'
        } border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}
      >
        <div className='pt-[10px] grid place-items-center'>
          <ul className='w-[90%] flex justify-between items-center m-[10px]'>
            <li>
              <h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>
                {showForm
                  ? 'Modify Professional Details'
                  : 'Professional Details'}
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
        {loading == 'loading' ? (
          <>
            <div className='w-full h-full grid place-items-center'>
              <div>
                <Image
                  loading='lazy'
                  alt='loader'
                  width={25}
                  height={25}
                  className='animate-spin inline relative left-[0px]'
                  src='/assests/animation/gradient-loader.svg'
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {showForm ? (
              <>
                <div className='flex flex-col items-center'>
                  <div className=''>
                    <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Current Designation (Job Title)
                        </h1>
                        <DynamicSelect
                          className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                          styles={customStyles}
                          options={currentDesignationOptions}
                          placeholder={
                            AllProfessionalData?.jobTitle || 'Select Job Title'
                          }
                          onChange={selectedOption =>
                            handleInputChange({
                              target: {
                                name: 'jobTitle',
                                value: selectedOption?.value
                              }
                            })
                          }
                        />
                      </div>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Job Type
                        </h1>
                        <DynamicSelect
                          className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                          styles={customStyles}
                          options={jobTypeOptions}
                          placeholder={
                            AllProfessionalData?.jobType || 'Select Job Type'
                          }
                          onChange={selectedOption =>
                            handleInputChange({
                              target: {
                                name: 'jobType',
                                value: selectedOption?.value
                              }
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Company Name
                        </h1>

                        <input
                          onChange={handleInputChange}
                          type='text'
                          name='companyName'
                          placeholder={
                            AllProfessionalData?.companyName ||
                            'Enter Company Name'
                          }
                          className='outline-none focus:border-b-[1px] focus:border-b-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-b-[1px] border-b-[#000] pl-[10px] '
                        />
                      </div>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Annual Salary
                        </h1>

                        <input
                          type='number'
                          onChange={handleInputChange}
                          name='currentSalary'
                          placeholder={
                            AllProfessionalData?.currentSalary ||
                            'Enter Current Salary'
                          }
                          className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end border-b-[1px]  outline-none pl-[20px] border-b-[#000]'
                        />
                      </div>
                    </div>
                    <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Work In City
                        </h1>

                        <DynamicSelect
                          className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                          styles={customStyles}
                          options={currentcityOption}
                          placeholder={
                            AllProfessionalData?.workCity || 'Select WorkCity'
                          }
                          onChange={selectedOption =>
                            handleInputChange({
                              target: {
                                name: 'workCity',
                                value: selectedOption?.value
                              }
                            })
                          }
                        />
                      </div>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Work In Country
                        </h1>

                        <DynamicSelect
                          className='h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end'
                          styles={customStyles}
                          options={countryoflivingOptions}
                          placeholder={
                            AllProfessionalData?.workCountry ||
                            'Select Work Country'
                          }
                          onChange={selectedOption =>
                            handleInputChange({
                              target: {
                                name: 'workCountry',
                                value: selectedOption?.value
                              }
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className='w-[90%] flex justify-center pb-[10px] mt-[20px]'>
                    <SaveButton
                      onClick={UpdateDataBtn}
                      className={
                        'rounded-[100px] text-[white] w-[194px] h-[50px]'
                      }
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
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Current Designation
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.jobTitle
                          ? capitalizeFirstLetter(data.jobTitle)
                          : 'NA'}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Job Type
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.jobType
                          ? capitalizeFirstLetter(data.jobType)
                          : 'NA'}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Company Name
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.companyName
                          ? capitalizeFirstLetter(data.companyName)
                          : 'NA'}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Annual Salary
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.currentSalary ? data.currentSalary : 'NA'}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Work in City
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.workCity
                          ? capitalizeFirstLetter(data.workCity)
                          : 'NA'}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Work in Country
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.workCountry
                          ? capitalizeFirstLetter(data.workCountry)
                          : 'NA'}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ProfessionalTab
