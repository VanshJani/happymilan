import { getCookie } from 'cookies-next'
import {
  ADD_SUCCESS_STORIES_IMAGES,
  CREATE_LIKE_FAIL,
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_SUCCESS,
  DISLIKE_STORY_FAIL,
  DISLIKE_STORY_REQUEST,
  DISLIKE_STORY_SUCCESS,
  FETCH_IS_LIKE_FAIL,
  FETCH_IS_LIKE_REQUEST,
  FETCH_IS_LIKE_SUCCESS,
  FETCH_SUCCESS_STORIES_FAILURE,
  FETCH_SUCCESS_STORIES_FAILURE_BY_ID,
  FETCH_SUCCESS_STORIES_REQUEST,
  FETCH_SUCCESS_STORIES_REQUEST_BY_ID,
  FETCH_SUCCESS_STORIES_SUCCESS,
  FETCH_SUCCESS_STORIES_SUCCESS_BY_ID,
  GET_LIKES_FAIL,
  GET_LIKES_REQUEST,
  GET_LIKES_SUCCESS,
  GET_STORY_VIEWS_DETAILS,
  GET_STORY_VIEWS_DETAILS_FAILURE,
  GET_STORY_VIEWS_DETAILS_SUCCESS,
  STORY_VIEW_FAIL,
  STORY_VIEW_REQUEST,
  STORY_VIEW_SUCCESS,
  SUCCESS_STORIES_FAILURE,
  SUCCESS_STORIES_REQUEST,
  SUCCESS_STORIES_SUCCESS,
  TOTAL_READ_COUNT_FAIL,
  TOTAL_READ_COUNT_REQUEST,
  TOTAL_READ_COUNT_SUCCESS,
  VIEW_STORY_POST,
  VIEW_STORY_POST_FAILURE,
  VIEW_STORY_POST_SUCCESS
} from '../type'
import axios from 'axios'

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

// Action Creator
export const readStory = storyId => {
  return async (dispatch, getState) => {
    try {
      // Dispatching the loading action
      dispatch({ type: STORY_VIEW_REQUEST })
      const authToken = getCookie('authtoken')
      const ViewerID = getCookie('userid')

      // Preparing the request data
      const data = JSON.stringify({
        storyId: storyId,
        viewerId: ViewerID // Replace this with dynamic viewerId if required
      })

      // Axios configuration
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/success-story-View/create-view`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}` // Use dynamic token if required
        },
        data: data
      }

      // API request
      const response = await axios.request(config)

      // Dispatch success action with response data
      dispatch({
        type: STORY_VIEW_SUCCESS,
        payload: response.data
      })

      console.log('Story viewed successfully:', response.data)
    } catch (error) {
      console.error('Error while viewing story:', error)

      // Dispatch fail action with error message
      dispatch({
        type: STORY_VIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
}

// Action Creator
export const getTotalReadCounts = storyId => {
  return async dispatch => {
    try {
      // Dispatch loading action
      dispatch({ type: TOTAL_READ_COUNT_REQUEST })

      const authToken = getCookie('authtoken')

      // Axios configuration
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/success-story-View/paginated-all/${storyId}`,
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }

      // API request
      const response = await axios.request(config)

      // Dispatch success action with data
      dispatch({
        type: TOTAL_READ_COUNT_SUCCESS,
        payload: response.data?.data?.totalResults
      })

      //   console.log('Total Read Counts:', response.data?.data.results)
    } catch (error) {
      console.error('Error fetching total read counts:', error)

      // Dispatch fail action with error message
      dispatch({
        type: TOTAL_READ_COUNT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
}

// Action Creator for Check Is Like
export const FetchIsLike = storyId => {
  return async dispatch => {
    try {
      // Dispatch loading state
      dispatch({ type: FETCH_IS_LIKE_REQUEST })

      const authToken = getCookie('authtoken')

      // Axios Configuration
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story-Like/get-like-story/${storyId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      }

      // API Request
      const response = await axios.request(config)

      // Dispatch success action with response data
      dispatch({
        type: FETCH_IS_LIKE_SUCCESS,
        payload: {
          isLike: response?.data?.data[0]?.isLike || false,
          LikeID: response?.data?.data[0]?.id
        }
      })

      console.log('Is Like Fetched Successfully:', response.data)
    } catch (error) {
      console.error('Error Fetching Is Like:', error)

      // Dispatch fail action with error message
      dispatch({
        type: FETCH_IS_LIKE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
}

// Action Creator for Getting Tota Likes Count

export const getTotalLikes = storyId => {
  return async dispatch => {
    try {
      // Dispatch loading state
      dispatch({ type: GET_LIKES_REQUEST })

      const authToken = getCookie('authtoken')

      // Axios Configuration
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story-Like/get-likes-paginated/${storyId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      }

      // API Request
      const response = await axios.request(config)

      // Dispatch success action with response data
      dispatch({
        type: GET_LIKES_SUCCESS,
        payload: response.data?.data?.totalResults
      })

      console.log('Total Likes Fetched Successfully:', response.data)
    } catch (error) {
      console.error('Error Fetching Total Likes:', error)

      // Dispatch fail action with error message
      dispatch({
        type: GET_LIKES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
}

// Action Creator for Creating Like
export const createLike = (storyId, isLike = true) => {
  return async dispatch => {
    try {
      // Dispatch loading state
      dispatch({ type: CREATE_LIKE_REQUEST })

      const authToken = getCookie('authtoken')

      // Prepare payload
      const data = JSON.stringify({
        storyId: storyId,
        isLike: isLike
      })

      // Axios Configuration
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story-Like/create-like`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        data: data
      }

      // API Request
      const response = await axios.request(config)

      // Dispatch success action with response data
      dispatch({
        type: CREATE_LIKE_SUCCESS
        // payload: response.data
      })

      dispatch(getTotalLikes(storyId))
      dispatch(FetchIsLike(storyId))

      console.log('Like Created Successfully:', response.data)
    } catch (error) {
      console.error('Error Creating Like:', error)

      // Dispatch fail action with error message
      dispatch({
        type: CREATE_LIKE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
}

// Action Creator for Creating Like
export const DislikeStory = (storyId, LikeID, isLike = false) => {
  return async dispatch => {
    try {
      // Dispatch loading state
      dispatch({ type: DISLIKE_STORY_REQUEST })

      const authToken = getCookie('authtoken')

      // Prepare payload
      const data = JSON.stringify({
        storyId: storyId,
        isLike: isLike
      })

      // Axios Configuration
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/story-Like/update-like/${LikeID}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        data: data
      }

      // API Request
      const response = await axios.request(config)

      // Dispatch success action with response data
      dispatch({
        type: DISLIKE_STORY_SUCCESS
        // payload: response.data
      })

      dispatch(getTotalLikes(storyId))
      dispatch(FetchIsLike(storyId))

      console.log('Like Created Successfully:', response.data)
    } catch (error) {
      console.error('Error Creating Like:', error)

      // Dispatch fail action with error message
      dispatch({
        type: DISLIKE_STORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
}

// const axios = require('axios');
// let data = JSON.stringify({
//   "storyId": "671b60590c041f6c403f2842",
//   "isLike": false
// });

// let config = {
//   method: 'put',
//   maxBodyLength: Infinity,
//   url: 'https://stag.mntech.website/api/v1/user/story-Like/update-like/676015c4cefe85a671db485b',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU4NmFiMTVhOGRiMmE0ZGI1YWIyMGMiLCJpYXQiOjE3MzM4NDc4OTcsImV4cCI6MTczNjQzOTg5N30.4WOFIzFe9TXBHTTjBe3k3b12usW-tGJvLZWrmRhAg7M'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
