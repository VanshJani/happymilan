import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { updateMyPartnerPrefdata } from '../../../../../../store/reducers/MyProfile'
import { updateFormData } from '../../../../../../store/actions/registerUser'
import SaveButton from '../../../../../../components/common/Buttons/SaveButton'
import MultiSelect from '../../../../../alert'
import { useDarkMode } from '../../../../../../ContextProvider/DarkModeContext'
import { Slider } from '@mui/material'

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

const PartnerPreferenceTab = ({ formData, updateFormData }) => {
  const { darkMode } = useDarkMode()
  const disptach = useDispatch()

  const { loading, data } = useSelector(
    state => state.myprofile.profileData.PartnerPrefData
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

  const IncomeText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
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

  const Country = [
    { value: 'india', label: 'India' },
    { value: 'us', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'china', label: 'China' },
    { value: 'myanmar', label: 'Myanmar' },
    { value: 'nepal', label: 'Nepal' },
    { value: 'sri-lanka', label: 'Sri-lanka' },
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'afghanistan', label: 'Afghanistan' }
  ]

  const states = [
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'assam', label: 'Assam' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'goa', label: 'Goa' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'alberta', label: 'Alberta' },
    { value: 'british-columbia', label: 'British Columbia' },
    { value: 'manitoba', label: 'Manitoba' },
    { value: 'new-brunswick', label: 'New Brunswick' },
    { value: 'newfound-land', label: 'Newfound Land' },
    { value: 'nova-scotia', label: 'Nova Scotia' },
    { value: 'ontario', label: 'Ontario' },
    { value: 'prince-edward-island', label: 'Prince Edward Island' },
    { value: 'quebec', label: 'Quebec' },
    { value: 'saskatchewan', label: 'Saskatchewan' },
    { value: 'alabama', label: 'Alabama' },
    { value: 'alaska', label: 'Alaska' },
    { value: 'arizona', label: 'Arizona' },
    { value: 'arkansas', label: 'Arkansas' },
    { value: 'california', label: 'California' },
    { value: 'colorado', label: 'Colorado' },
    { value: 'connecticut', label: 'Connecticut' },
    { value: 'delaware', label: 'Delaware' },
    { value: 'florida', label: 'Florida' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'hawaii', label: 'Hawaii' },
    { value: 'idaho', label: 'Idaho' },
    { value: 'illinois', label: 'Illinois' }
  ]

  const city = [
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'surat', label: 'Surat' },
    { value: 'toronto', label: 'Toronto' }
  ]

  const dietOptions = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'non_vegetarian', label: 'Non-Vegetarian' }
    // Add more diet options as needed
  ]

  //   const { partnerpref } = useSelector(state => state.form?.formData)

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: '10px',
      paddingLeft: '0px',
      width: '100%',
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

  const [income, setincome] = useState([
    data?.income?.min || 0,
    data?.income?.max || 10
  ])
  const [agevalue, setagevalue] = useState([0, 30])
  const [heightvalue, setheightvalue] = useState([0, 30])

  const [selectedStates, setSelectedStates] = useState([])
  const [selectedCountry, setSelectedCountry] = useState([])

  // Convert backend data to react-select format
  useEffect(() => {
    if (data?.state && Array.isArray(data?.state)) {
      const formattedData = data?.state.map(value =>
        states.find(option => option.value === value)
      )
      setSelectedStates(formattedData.filter(Boolean)) // Ensure valid matches
    }
    if (data?.country && Array.isArray(data?.country)) {
      const formattedData = data?.country.map(value =>
        Country.find(option => option.value === value)
      )
      setSelectedCountry(formattedData.filter(Boolean)) // Ensure valid matches
    }
  }, [data])

  const [PrefData, SetPrefData] = useState({
    age: {
      min: 0,
      max: 0
    },
    height: {
      min: 0,
      max: 0
    },
    income: {
      min: 0,
      max: 0
    },
    country: selectedCountry,
    state: selectedStates,
    city: [],
    // income: 0,
    // creative: [],
    // fun: [],
    hobbies: [],
    diet: []
  })

  const handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    if (name == 'height') {
      SetPrefData(prevValue => ({
        ...prevValue,
        height: {
          ...prevValue.PrefData?.height,
          min: value[0],
          max: value[1]
        }
      }))

      setheightvalue(value)
    } else if (name == 'age') {
      SetPrefData(prevValue => ({
        ...prevValue,
        age: {
          ...prevValue.PrefData?.age,
          min: value[0],
          max: value[1]
        }
      }))

      setagevalue(value)
    } else if (name == 'income') {
      SetPrefData(prevValue => ({
        ...prevValue,
        income: {
          ...prevValue.PrefData?.income,
          min: value[0],
          max: value[1]
        }
      }))

      setincome(value)
    } else if (name == 'state') {
      setSelectedStates(value)

      // If you need to send this data back to the backend
      const backendData = value.map(option => option.value)

      SetPrefData(prevValue => ({
        ...prevValue,
        state: backendData
      }))

      // setSelectedStates(values)
    } else if (name == 'country') {
      setSelectedCountry(value)

      // If you need to send this data back to the backend
      const backendData = value.map(option => option.value)

      SetPrefData(prevValue => ({
        ...prevValue,
        country: backendData
      }))

      // setSelectedStates(values)
    } else {
      const values = value?.map(item => item.value)
      //   disptach(updatePartnerPref(name, values))

      SetPrefData(prevvalue => ({
        ...prevvalue,
        [name]: values
      }))
    }
  }

  const SubmitChanges = () => {
    setShowForm(false)
    disptach(
      updateMyPartnerPrefdata({
        partnerPrefId: data?.id,
        UpdatedDataforPartnerPrefdata: PrefData
      })
    )
  }

  return (
    <>
      <div
        className={`w-full ${
          showForm ? 'h-[800px]' : 'h-[400px]'
        } border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}
      >
        <div className='pt-[10px] grid place-items-center'>
          <ul className='w-[90%] flex justify-between items-center m-[10px]'>
            <li>
              <h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>
                {showForm ? 'Modify Partner Preference' : 'Partner Preference'}
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
                  <div className='w-[90%] flex justify-between'>
                    <div>
                      <ul className='flex justify-between'>
                        <li>
                          <h1
                            className='text-[#000] pb-[10px]'
                            style={labelText}
                          >
                            Choose Age
                          </h1>
                        </li>
                        <li>
                          <h1>
                            {agevalue[0]} - {agevalue[1]}
                          </h1>
                        </li>
                      </ul>

                      <div className='w-full lg:w-[200px]'>
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
                          name='age'
                          value={agevalue} // Use values from Redux
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <ul className='flex justify-between'>
                        <li>
                          {' '}
                          <h1
                            className='text-[#000] pb-[10px]'
                            style={labelText}
                          >
                            Choose Height
                          </h1>
                        </li>
                        <li>
                          <h1>
                            {heightvalue[0]} - {heightvalue[1]} (ft)
                          </h1>
                        </li>
                      </ul>

                      <div className='w-full lg:w-[200px]'>
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
                          value={heightvalue} // Use values from Redux
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='w-[90%] h-full'>
                    <div className='space-y-[15px] py-[15px]'>
                      <div className=''>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Choose country
                        </h1>

                        <DynamicSelect
                          options={Country}
                          placeholder='Select..'
                          styles={customStyles}
                          value={selectedCountry}
                          onChange={selectedOption =>
                            handleInputChange({
                              target: { name: 'country', value: selectedOption }
                            })
                          }
                          isSearchable={true}
                          isMulti
                        />
                      </div>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Choose state
                        </h1>

                        <DynamicSelect
                          options={states}
                          placeholder='Select..'
                          styles={customStyles}
                          value={selectedStates}
                          onChange={selectedOption =>
                            handleInputChange({
                              target: { name: 'state', value: selectedOption }
                            })
                          }
                          isSearchable={true}
                          isMulti
                        />
                      </div>
                      <div>
                        <h1 className='text-[#000] pb-[10px]' style={labelText}>
                          Choose City
                        </h1>

                        <DynamicSelect
                          options={city}
                          placeholder='Select..'
                          styles={customStyles}
                          onChange={selectedOption =>
                            handleInputChange({
                              target: { name: 'city', value: selectedOption }
                            })
                          }
                          isSearchable={true}
                          isMulti
                        />
                      </div>
                      <div>
                        <ul className='flex justify-between pb-[10px]'>
                          <li>
                            <h1 className='text-[#000]' style={labelText}>
                              Prefer Income
                            </h1>
                          </li>
                          <li>
                            <h1 style={IncomeText}>
                              {income[0]}-{income[1]} Lacs
                            </h1>
                          </li>
                        </ul>

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
                          name='income'
                          value={income} // Use values from Redux
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <h1 style={labelText} className='pb-[10px]'>
                          Prefer Diet
                        </h1>
                        <DynamicSelect
                          options={dietOptions}
                          placeholder='Select..'
                          styles={customStyles}
                          onChange={selectedOption =>
                            handleInputChange({
                              target: { name: 'diet', value: selectedOption }
                            })
                          }
                          isSearchable={true}
                          isMulti
                        />
                      </div>
                      <div>
                        <h1 style={labelText} className='pb-[10px]'>
                          Prefer Hobbies
                        </h1>
                        <MultiSelect
                          formData={PrefData}
                          Section={'partnerProfile'}
                          updateFormData={SetPrefData}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='w-[90%] flex justify-center pb-[10px] mt-[10px]'>
                    <SaveButton
                      className={
                        'rounded-[100px] text-[white] w-[194px] h-[50px]'
                      }
                      onClick={SubmitChanges}
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
                        Age
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.age?.min} - {data?.age?.max}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Prefer Height
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.height?.min} to {data?.height?.max} ft
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Prefer City State
                      </p>
                      <ul className='flex'>
                        {data?.state.map(val => {
                          return (
                            <li>
                              <span
                                style={Text5}
                                className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                              >
                                {val} ,
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Prefer Country
                      </p>
                      <ul className='flex'>
                        {data?.country.map(val => {
                          return (
                            <li>
                              <span
                                style={Text5}
                                className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                              >
                                {val} ,
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Prefer Income
                      </p>
                      <h1
                        style={Text5}
                        className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                      >
                        {data?.income?.min} - {data?.income?.max} lacs
                      </h1>
                    </div>

                    <div>
                      <p
                        style={Text2}
                        className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'
                      >
                        Prefer Diet
                      </p>
                      <ul className='flex'>
                        {data?.diet.map(val => {
                          return (
                            <li>
                              <span
                                style={Text5}
                                className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'
                              >
                                {val} ,
                              </span>
                            </li>
                          )
                        })}
                      </ul>
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

// export default PartnerPreferenceTab;
export default connect(state => ({ formData: state.form.formData }), {
  updateFormData
})(PartnerPreferenceTab)
