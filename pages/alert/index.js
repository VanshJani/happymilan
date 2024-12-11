import React, { useEffect, useState } from 'react'
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })
import { LabelStyle2 } from '../../utils/options/styles/SelectBoxStyle'
import dynamic from 'next/dynamic'

const MultiSelect = ({ Section, formData, updateFormData }) => {
  const options = [
    { value: 'reading', label: 'Reading' },
    { value: 'traveling', label: 'Traveling' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'photography', label: 'Photography' },
    { value: 'art', label: 'Art' },
    { value: 'gardening', label: 'Gardening' },
    { value: 'dancing', label: 'Dancing' }
  ]

  const [selectedOptions, setSelectedOptions] = useState([])
  const [datastore, setdatastore] = useState([])

  useEffect(() => {
    const selectedValues = selectedOptions.map(option => option.value)
    setdatastore(selectedValues)

    if (Section === 'partner') {
      updateFormData({
        partnerpref: {
          ...formData.partnerpref,
          hobbies: selectedValues
        }
      })
    } else if (Section === 'partnerProfile') {
      //   updateFormData({
      //     partnerpref: {
      //       ...formData,
      //       hobbies: selectedValues
      //     }
      //   })

      updateFormData(prevvalue => ({
        ...prevvalue,
        hobbies: selectedValues
      }))
    } else {
      updateFormData({
        hobby: {
          ...formData.hobby,
          hobbyval: selectedValues
        }
      })
    }
  }, [selectedOptions, setSelectedOptions])

  // Handle selection
  const handleSelectChange = selected => {
    setSelectedOptions(selected || [])
  }

  // Handle removal of selected option
  const handleRemoveOption = optionToRemove => {
    setSelectedOptions(
      selectedOptions.filter(option => option.value !== optionToRemove.value)
    )
  }

  // Filter options to not show already selected options
  const filteredOptions = options.filter(
    option =>
      !selectedOptions.some(
        selectedOption => selectedOption.value === option.value
      )
  )

  return (
    <>
      <div className='relative'>
        <DynamicSelect
          options={filteredOptions}
          isMulti
          value={selectedOptions}
          onChange={handleSelectChange}
          placeholder='Select your options'
          components={{ MultiValueContainer }}
          styles={LabelStyle2}
          closeMenuOnSelect={false}
          //   menuPortalTarget={document.body} // Append to body to ensure it overlays
          //   menuPosition='fixed' // Prevents issues with overflow
          menuPlacement='auto' // Positions the dropdown based on available space
        />
        <div className='selected-options mt-2 flex flex-wrap'>
          {selectedOptions.map(option => (
            <div
              key={option.value}
              className='bg-[#FFF] text-[black] rounded-full px-4 py-1 mr-2 mb-2 cursor-pointer border-[1px] border-[#DEDEDE]'
              onClick={() => handleRemoveOption(option)}
            >
              {option.label} <span className='ml-2'>&times;</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// Custom MultiValueContainer to hide selected items in the input
const MultiValueContainer = ({ children, ...props }) => {
  return null // Hide selected options in the input itself
}

// export default MultiSelect;
export default MultiSelect
