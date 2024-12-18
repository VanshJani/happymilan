import { getCookie } from 'cookies-next'
import {
  DELETE_SAVESEARCH_DATA,
  DELETE_SAVESEARCH_DATA_SUCCESS,
  FETCH_SAVESEARCH_DATA,
  FETCH_SAVESEARCH_DATA_SUCCESS,
  GET_SEARCHUSERS_DATA,
  GET_SEARCHUSERS_DATA_FAILURE,
  GET_SEARCHUSERS_DATA_SUCCESS,
  POST_SAVESEARCH_DATA,
  POST_SAVESEARCH_DATA_SUCCESS
} from '../type'

export const updateSearchData = data => ({
  type: 'UPDATE_SEARCH_DATA',
  payload: data
})

export const GetSearchUsersData = searchData => {
  return async dispatch => {
    dispatch({ type: GET_SEARCHUSERS_DATA })

    const axios = require('axios')
    const authToken = getCookie('authtoken')
    let data = {
      minAge: parseInt(searchData?.minAge),
      maxAge: parseInt(searchData?.maxAge),
      maxHeight: parseInt(searchData?.maxHeight),
      minHeight: parseInt(searchData?.minHeight),
      maritalStatus: [...searchData.maritalStatus],
      religion: [...searchData.religion],
      community: [...searchData.community],
      motherTongue: [...searchData.motherTongue],
      currentCountry: [...searchData.currentCountry],
      currentCity: [...searchData.currentCity]
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/search/search-user`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      data: data
    }

    axios
      .request(config)
      .then(response => {
        dispatch({
          type: GET_SEARCHUSERS_DATA_SUCCESS,
          payload: response.data.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const GetSearchUsersDataSuccess = response => ({
  type: GET_SEARCHUSERS_DATA_SUCCESS,
  payload: response
})

export const GetSearchUsersDataFailure = error => ({
  type: GET_SEARCHUSERS_DATA_FAILURE,
  payload: error
})

export const FetchSaveSearchData = () => {
  return async dispatch => {
    dispatch({ type: FETCH_SAVESEARCH_DATA })

    const axios = require('axios')
    const authtoken = getCookie('authtoken')
    const userID = getCookie('userid')

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/search-history/get-by-user/${userID}`,
      headers: {
        Authorization: `Bearer ${authtoken}`
      }
    }

    axios
      .request(config)
      .then(response => {
        dispatch(GetSaveSearchData(response.data.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const GetSaveSearchData = response => ({
  type: FETCH_SAVESEARCH_DATA_SUCCESS,
  payload: response
})

export const SaveUserSearchPost = searchData => {
  return async dispatch => {
    dispatch({ type: POST_SAVESEARCH_DATA })

    const axios = require('axios')
    const authToken = getCookie('authtoken')
    let data = {
      minAge: {
        min: searchData.minAge,
        max: searchData.maxAge
      },
      height: {
        min: searchData.minHeight,
        max: searchData.maxHeight
      },
      weight: {
        min: searchData.minWeight,
        max: searchData.maxWeight
      },
      maritalStatus: [
        ...searchData.maritalStatus
        // 'single'
      ],
      religion: [...searchData.religion],
      community: [...searchData.community],
      motherTongue: [...searchData.motherTongue],
      currentCountry: [...searchData.currentCountry],
      currentCity: [...searchData.currentCity],
      state: [...searchData.stateofLiving],
      saveSearch: searchData?.saveSearch
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/search-history/`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      data: data
    }

    axios
      .request(config)
      .then(response => {
        dispatch({
          type: POST_SAVESEARCH_DATA_SUCCESS,
          payload: response.data.data
        })
        dispatch(FetchSaveSearchData())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const DeleteSaveSearchData = SearchID => {
  return async dispatch => {
    dispatch({ type: DELETE_SAVESEARCH_DATA })

    const axios = require('axios')
    const authtoken = getCookie('authtoken')

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/search-history/${SearchID}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`
      }
    }

    axios
      .request(config)
      .then(response => {
        dispatch({ type: DELETE_SAVESEARCH_DATA_SUCCESS })
        dispatch(FetchSaveSearchData())
      })
      .catch(error => {
        console.log(error)
      })
  }
}
