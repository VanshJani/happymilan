import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';
import axios from 'axios';

// Thunk for fetching friends
export const fetchshortlistUsers = (Pages) => async (dispatch, getState) => {
    dispatch(fetchshortlistrequest());

    try {
        const token = getCookie("authtoken");
        const LoginUserID = getCookie("userid")

        const limit = Pages?.viewType === 'grid' ? 6 : 10;

        const config = {
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/shortlist/get-short-list-paginat/${LoginUserID}?page=${Pages?.currentPage}&limit=${limit}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.request(config);
        const data = response.data;

        dispatch(fetchshortlistsuccess({
            userData: data.data,
            totalPages: data.data.totalPages,
            currentPage: data.data.page,
            limit: data.data.limit,
            pagesdata: data.data
        }));
    } catch (error) {
        dispatch(fetchshortlistfaliure(error.message));
    }
};

// Slice
const shortlistusersSlice = createSlice({
    name: 'shortlist',
    initialState: {
        userData: [],
        totalPages: 1,
        currentPage: 1,
        limit: 0,
        pagesdata: '',
        loading: false,
        error: null,
        status: 'idle',
    },
    reducers: {
        incrementPage: (state) => {
            state.currentPage += 1;
        },
        resetFriends: (state) => {
            state.userData = [];
            state.currentPage = 1;
            state.pagesdata = '';
            state.totalPages = 1;
        },
        fetchshortlistrequest: (state) => {
            state.status = 'loading';
            state.loading = true;
        },
        fetchshortlistsuccess: (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.userData = action.payload.userData;  // Append only new data
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.pagesdata = action.payload.pagesdata;
        },
        fetchshortlistfaliure: (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { incrementPage, resetFriends, fetchshortlistrequest, fetchshortlistsuccess, fetchshortlistfaliure } = shortlistusersSlice.actions;

export default shortlistusersSlice.reducer;