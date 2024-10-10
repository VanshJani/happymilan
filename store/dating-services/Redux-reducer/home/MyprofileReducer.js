import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

// Fetch user details
export const fetchUserDetails = createAsyncThunk('dating/user/fetchUserDetails', async () => {
    try {
        const token = getCookie('authtoken');

        if (token) {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/me`, requestOptions);

            if (response.ok) {
                const result = await response.json();
                return result.data.user;
            } else if (response.status === 401) {

                throw new Error('Unauthorized');
            } else {
                console.error('API request failed:', response.statusText);
                throw new Error('API request failed');
            }
        } else {
            throw new Error('Token not found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

// Update user details
export const updateUserDetails = createAsyncThunk('dating/user/updateUserDetails', async (updatedData) => {
    console.log("🚀 ~ updateUserDetails ~ updatedData:", updatedData)
    // const response = await axios.post('/api/user/update', updatedData); // Your API endpoint for updating user data
    // return response.data;

    try {
        const authToken = getCookie("authtoken");

        if (!authToken) {
            throw new Error('Authentication token not found. Please login.');
        }

        // Prepare the updated data payload



        // Prepare the request options
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        };

        // Send the PUT request to update user data
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);
        // Handle response errors
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized access. Please login again.');
            } else {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${errorMessage}`);
            }
        }

        // Parse and return the updated data
        const result = await response.json();
        console.log("🚀 ~ updateUserDetails ~ result.userData:", result.userData)

        return result.userData;

    } catch (error) {
        console.error('Error updating data:', error.message);
        throw error;  // Re-throw to handle further up in the application
    }

});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        details: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handle fetching user details
        builder.addCase(fetchUserDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.details = action.payload;
        });
        builder.addCase(fetchUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // Handle updating user details
        builder.addCase(updateUserDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.details = { ...state.details, ...action.payload }; // Update details after editing
        });
        builder.addCase(updateUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;
