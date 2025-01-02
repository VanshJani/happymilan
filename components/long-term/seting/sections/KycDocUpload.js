import React, { useCallback, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'
import {
  AddKycDocument,
  AddKycDocumentname
} from '../../../../store/actions/KycDocumentsActions'
import dynamic from 'next/dynamic'
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

function KycDocUpload ({ Profile }) {
  const dispatch = useDispatch()

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: '10px',
      paddingLeft: '8px',
      width: '370px',
      height: '50px',
      borderRadius: '25px', // Add padding on the right side
      border: '1px solid #E5E5E5',
      borderColor: state.isFocused ? 'black' : provided.borderColor,
      '&:hover': {
        borderColor: 'black'
      },
      boxShadow: state.isFocused ? 'none' : provided.boxShadow
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
      paddingRight: '20px'
      // Hide the vertical line behind the arrow
    })
  }

  const [Data, Setdata] = useState({
    documentname: ''
  })

  const HandleChange = selectedoption => {
    Setdata({ ...Data, documentname: selectedoption.value })

    dispatch(AddKycDocumentname(selectedoption.value))
  }

  const options1 = [
    {
      value: 'passport',
      label: 'Passport'
    },
    {
      value: 'driving-license',
      label: 'Driving License'
    },
    {
      value: 'aadhar-card',
      label: 'Aadhar Card'
    },
    {
      value: 'election-card',
      label: 'Election Card'
    }
  ]

  const inputFileRef = useRef(null) // Ref for the file input

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0] // Since we're accepting only one file

      if (!file) return

      const isValidType = file.type.startsWith('image/')
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB

      if (!isValidType) {
        alert(`Invalid file type: ${file.name}`)
        return
      } else if (!isValidSize) {
        alert(`File size exceeds 10MB: ${file.name}`)
        return
      }

      // Create an object for the selected file
      const selectedFile = {
        id: 1,
        key: file.name,
        contentType: file.type,
        data: URL.createObjectURL(file)
      }

      dispatch(AddKycDocument(selectedFile))

      // You can dispatch the selected file to the store if needed
      // dispatch(yourAction(selectedFile));

      const reader = new FileReader()
      reader.onabort = () => console.log('File reading was aborted')
      reader.onerror = () => console.log('File reading has failed')
      reader.onload = () => {
        // Handle the file's data (e.g., dispatch or process the file)
      }

      reader.readAsArrayBuffer(file)
    },
    [dispatch]
  )

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: 'image/*', // Accept only images
    maxFiles: 1, // Allow only one file
    noClick: true, // Disable automatic click on dropzone
    noKeyboard: true // Disable keyboard triggers
  })

  const handleButtonClick = () => {
    open() // Trigger the file dialog when button is clicked
  }

  return (
    <>
      <li
        className={`flex ${
          Profile ? 'space-x-[30px]' : 'space-x-[65px]'
        }  items-center space-y-[9px]`}
      >
        {/* <li className='flex space-x-[65px] items-center space-y-[9px]'> */}
        <div>
          <DynamicSelect
            className='w-[100%] h-[50px] xl:h-[50px]  mt-[10px]  text-[16px] placeholder:text-[black]'
            styles={customStyles}
            placeholder='Select ID Type'
            options={options1}
            onChange={HandleChange}
          />
        </div>
        <div>
          <div>
            <button
              onClick={handleButtonClick} // Trigger file selection on button click
              id={Data.documentname !== '' ? 'grad-button' : 'DisableBTN'}
              disabled={Data.documentname === ''}
              className={`w-[112px] h-[50px] rounded-[25px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]`}
            >
              Select File
            </button>
            <div {...getRootProps()}>
              <input {...getInputProps()} ref={inputFileRef} />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default KycDocUpload
