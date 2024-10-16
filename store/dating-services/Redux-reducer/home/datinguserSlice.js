import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export const datinguserSlice = createSlice({
  name: 'datingUsers',
  initialState: {
    users: [],
    minAge: 0,
    maxAge: 90,
    loading: false,
    error: null,
  },
  reducers: {
    setAgeRange: (state, action) => {
      state.minAge = action.payload.minAge;
      state.maxAge = action.payload.maxAge;
    },
    fetchUsersRequest: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setAgeRange, fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = datinguserSlice.actions;

export const fetchUsers = (minAge, maxAge) => async (dispatch) => {
  console.log("🚀 ~ fetchUsers ~ maxAge:", maxAge)
  console.log("🚀 ~ fetchUsers ~ minAge:", minAge)
  dispatch(fetchUsersRequest());
  try {

    const Token = getCookie("authtoken")
    let data = JSON.stringify({
      minAge,
      maxAge,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://stag.mntech.website/api/v1/user/user/getUserByGenderDatingAge',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    dispatch(fetchUsersSuccess(response.data?.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export default datinguserSlice.reducer;
