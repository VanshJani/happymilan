import { getCookie } from 'cookies-next'
import {
  ADD_SUCCESS_STORIES_IMAGES,
  FETCH_SUCCESS_STORIES_FAILURE,
  FETCH_SUCCESS_STORIES_FAILURE_BY_ID,
  FETCH_SUCCESS_STORIES_REQUEST,
  FETCH_SUCCESS_STORIES_REQUEST_BY_ID,
  FETCH_SUCCESS_STORIES_SUCCESS,
  FETCH_SUCCESS_STORIES_SUCCESS_BY_ID,
  GET_STORY_VIEWS_DETAILS,
  GET_STORY_VIEWS_DETAILS_FAILURE,
  GET_STORY_VIEWS_DETAILS_SUCCESS,
  SUCCESS_STORIES_FAILURE,
  SUCCESS_STORIES_REQUEST,
  SUCCESS_STORIES_SUCCESS,
  VIEW_STORY_POST,
  VIEW_STORY_POST_FAILURE,
  VIEW_STORY_POST_SUCCESS
} from '../type'

export const ViewstoryPost = Viewrdata => {
  return async dispatch => {
    dispatch({ type: VIEW_STORY_POST })
    const currentUser = getCookie('userid')
    const token = getCookie('authtoken')
    const axios = require('axios')

    let data = JSON.stringify({
      statusId: Viewrdata?.id,
      viewerId: currentUser
    })

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story-view/create-view`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: data
    }

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data))
        dispatch({ type: VIEW_STORY_POST_SUCCESS })
      })
      .catch(error => {
        dispatch({ type: VIEW_STORY_POST_FAILURE })

        console.log(error)
      })
  }
}

export const Getstoryviewsdata = storyID => {
  return async dispatch => {
    dispatch({ type: GET_STORY_VIEWS_DETAILS })
    const axios = require('axios')
    const token = getCookie('authtoken')

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story-view/paginated/${storyID}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data))
        dispatch({
          type: GET_STORY_VIEWS_DETAILS_SUCCESS,
          payload: response.data.data
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: GET_STORY_VIEWS_DETAILS_FAILURE })
      })
  }
}

export const UploadSuccessStories = (Details, requestDataArray) => {
  return async dispatch => {
    dispatch({ type: SUCCESS_STORIES_REQUEST })

    try {
      const axios = require('axios')
      const authToken = getCookie('authtoken') // Get the auth token
      const docUrls = [] // Array to store document URLs

      // Loop through each image data and make API calls
      for (const requestData of requestDataArray) {
        const data = JSON.stringify({
          key: requestData.key,
          contentType: requestData.contentType,
          name: requestData.key
        })

        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.NEXT_PUBLIC_API_URL}/v1/s3/uploadkycdoc`,
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
          docUrls.push(docUrl) // Store each successful docUrl

          const uploadUrl = response.data.data?.url // S3 upload URL
          const fileBlob = await fetch(requestData.data).then(res => res.blob())

          const uploadConfig = {
            method: 'put',
            url: uploadUrl,
            headers: {
              'Content-Type': requestData.contentType,
              'x-amz-acl': 'public-read'
            },
            data: fileBlob
          }

          await axios.request(uploadConfig) // Upload file to S3
          console.log('Uploaded to S3:', docUrl) // Log each successful upload
        } else {
          console.log(
            'Error while uploading document for key:',
            requestData.key
          )
        }
      }

      // Call the second API after all images are processed
      if (docUrls.length > 0) {
        // Call second API after all images are processed

        console.log('images URL :', docUrls)
        console.log('Details : ', Details)

        //Sample Names

        // content :"Hello guys"
        // date :"26/10/1998"
        // partnerID :"67053c13cb26b6ff9951656d"
        // partnerName :"Priya Sharma & Jimmy Patel"

        let data = JSON.stringify({
          partnerUserId: Details?.partnerID,
          images: docUrls,
          content: Details?.content,
          title: Details?.partnerName,
          marriageDate: Details?.date
        })

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story/create-story`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          },
          data: data
        }

        axios
          .request(config)
          .then(response => {
            console.log(JSON.stringify(response.data))

            dispatch({ type: SUCCESS_STORIES_SUCCESS })
          })
          .catch(error => {
            console.log(error)
            dispatch({ type: SUCCESS_STORIES_FAILURE })
          })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const UploadStoryImages = image => ({
  type: ADD_SUCCESS_STORIES_IMAGES,
  payload: image
})

export const FetchSuccessStories = () => {
  return async dispatch => {
    dispatch({ type: FETCH_SUCCESS_STORIES_REQUEST })

    const axios = require('axios')
    const authToken = getCookie('authtoken') // Get the auth token

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story/get-story`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    }

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data))
        dispatch({
          type: FETCH_SUCCESS_STORIES_SUCCESS,
          payload: response.data?.data
        })
      })
      .catch(error => {
        console.log(error)

        dispatch({ type: FETCH_SUCCESS_STORIES_FAILURE })
      })
  }
}

export const FetchSuccessStoriesByID = StoryID => {
  return async dispatch => {
    dispatch({ type: FETCH_SUCCESS_STORIES_REQUEST_BY_ID })

    const axios = require('axios')
    const authToken = getCookie('authtoken') // Get the auth token

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story/get-story-by-id/${StoryID}`,
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data))
        dispatch({
          type: FETCH_SUCCESS_STORIES_SUCCESS_BY_ID,
          payload: response.data?.data
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: FETCH_SUCCESS_STORIES_FAILURE_BY_ID, payload: error })
      })
  }
}
