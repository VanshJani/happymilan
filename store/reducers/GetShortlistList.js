import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./MyProfile";
import { RemoveShortlist } from "../actions/GetingAlluser";


const ShortlistData = createSlice({
    name: "shortlist",
    initialState: {
        status: STATUSES.IDLE,
        data: null,
        shortlistUserdata: [],
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(RemoveShortlist.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(RemoveShortlist.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE

            })
            .addCase(RemoveShortlist.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })

    },

})



export default ShortlistData.reducer;