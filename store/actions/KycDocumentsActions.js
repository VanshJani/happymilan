// actions.js
import { getCookie } from 'cookies-next'
import {
  ADD_KYC_DOCUMENTS,
  ADD_KYC_DOCUMENTS_NAME,
  CHECK_KYC_DOCUMENT_STATUS,
  CHECK_KYC_DOCUMENT_STATUS_FAILURE,
  CHECK_KYC_DOCUMENT_STATUS_SUCCESS,
  REMOVE_KYC_DOCUMENT,
  UPLOAD_KYC_DOCUMENT_FAILURE,
  UPLOAD_KYC_DOCUMENT_REQUEST,
  UPLOAD_KYC_DOCUMENT_SUCCESS
} from '../type'

// Action to upload an image
export const AddKycDocument = image => ({
  type: ADD_KYC_DOCUMENTS,
  payload: image
})

export const AddKycDocumentname = docname => ({
  type: ADD_KYC_DOCUMENTS_NAME,
  payload: docname
})

// Action to remove an image
export const RemoveKycDocument = () => ({
  type: REMOVE_KYC_DOCUMENT
})

export const UploadKycDocument = (documentname, requestdata) => {
  return async dispatch => {
    dispatch({ type: UPLOAD_KYC_DOCUMENT_REQUEST })

    try {
      const axios = require('axios')
      const authToken = getCookie('authtoken') // Get the auth token
      const data = JSON.stringify({
        key: requestdata.key,
        contentType: requestdata.contentType,
        name: requestdata.key
      })

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/s3/uploadkycdoc`, // Use env variables for URLs
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        data: data
      }

      const response = await axios.request(config)
      const docUrl = response.data.data?.docUrl
      const status = response.data.status

      if (docUrl && status === 'Success') {
        // const axios = require('axios');
        let data = JSON.stringify({
          kycDocName: documentname,
          kycDocImagePath: docUrl
        })
     
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/kyc/`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          },
          data: data
        }

        axios
          .request(config)
          .then(response => {})
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('Error While Upload Document..')
      }

      const uploadUrl = response.data.data?.url // Extract the S3 upload URL

      // Proceed to upload the file data to S3
      const fileBlob = await fetch(requestdata.data).then(res => res.blob())

      const uploadConfig = {
        method: 'put',
        url: uploadUrl,
        headers: {
          'Content-Type': requestdata.contentType,
          'x-amz-acl': 'public-read'
        },
        data: fileBlob
      }

      const s3Response = await axios.request(uploadConfig)

      // Dispatch success action
      dispatch({ type: UPLOAD_KYC_DOCUMENT_SUCCESS, payload: 'success' })
      dispatch(CheckDocumentStatus())
    } catch (error) {
      console.error('Error uploading KYC document:', error)
      dispatch({ type: UPLOAD_KYC_DOCUMENT_FAILURE, payload: error.message })
    }
  }
}

export const CheckDocumentStatus = request => {
  return async dispatch => {
    dispatch({
      type: CHECK_KYC_DOCUMENT_STATUS
    })

    const axios = require('axios')
    const token = getCookie('authtoken')
    const userID = getCookie('userid')

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/kyc/by-user/${userID}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        dispatch({
          type: CHECK_KYC_DOCUMENT_STATUS_SUCCESS,
          payload: response.data.data?.[0]
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: CHECK_KYC_DOCUMENT_STATUS_FAILURE
        })
      })
  }
}
