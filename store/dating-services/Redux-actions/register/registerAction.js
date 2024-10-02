import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { UPDATE_DATING_HOBBIES_VALUES } from "../../types";
import { uploadImagesFailure, uploadImagesStart, uploadImagesSuccess } from "../../../reducers/ImageSlice";

export const updateDatingFormData = (data) => ({
    type: 'UPDATE_DATING_FORM_DATA',
    payload: data,
});

export const removeDatingUploadData = () => ({
    type: 'REMOVE_DATING_UPLOAD_DATA'
});

export const addAppUsesType = (appUsesType) => ({
    type: 'ADD_APPUSES_TYPE',
    payload: appUsesType
});


export const updateHobbies = (category, values) => ({
    type: UPDATE_DATING_HOBBIES_VALUES,
    payload: { category, values },
});


export const DatingGenerealInfo = createAsyncThunk(
    '/dating/register/datingGeneralinfo',
    async (generalData, thunkAPI) => {
       
        try {
            const authToken = getCookie("authtoken");

            if (!authToken) {
                throw new Error('Token not found');
            }
            const updatedGeneralData = {
                ...generalData?.general,
                userProfileCompleted: true,
                // appUsesType: generalData?.userType?.appUsesType
            };
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedGeneralData)
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized');
                } else {
                    const errorMessage = await response.text();
                    throw new Error(`API request failed: ${errorMessage}`);
                }
            }

            const result = await response.json();
            localStorage.setItem("flName", result.userData.firstName + " " + result.userData.lastName)
            return result.data;

        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }
);

export const PostAppUsesType = createAsyncThunk(
    '/platform/usertype',
    async (generalData, thunkAPI) => {
       
        try {
            const authToken = getCookie("authtoken");

            if (!authToken) {
                throw new Error('Token not found');
            }
            const updatedGeneralData = {
                appUsesType: generalData
            };
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedGeneralData)
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized');
                } else {
                    const errorMessage = await response.text();
                    throw new Error(`API request failed: ${errorMessage}`);
                }
            }

            const result = await response.json();
            // localStorage.setItem("flName", result.userData.firstName + " " + result.userData.lastName)
            return result.data;

        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }
);


export const DatingAdditionalInfo = createAsyncThunk(
    '/dating/register/datingAdditionalinfo',
    async (addressdata, thunkAPI) => {
       
        try {
            const authToken = getCookie("authtoken");

            if (!authToken) {
                throw new Error('Token not found');
            }
            const updatedGeneralData = {
                ...addressdata,
            };
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedGeneralData)
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized');
                } else {
                    const errorMessage = await response.text();
                    throw new Error(`API request failed: ${errorMessage}`);
                }
            }

            const result = await response.json();
            return result.data;

        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }
);

export const DatingHobbyInfo = createAsyncThunk(
    '/dating/register/datingHobbyinfo',
    async (Hobbyinfo, thunkAPI) => {
   
        try {
            const authToken = getCookie("authtoken");

            if (!authToken) {
                throw new Error('Token not found');
            }
            const updatedGeneralData = {
                hobbies: Hobbyinfo
            };
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedGeneralData)
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized');
                } else {
                    const errorMessage = await response.text();
                    throw new Error(`API request failed: ${errorMessage}`);
                }
            }

            const result = await response.json();
            return result.data;

        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }
);

export const DatingImageUpload = createAsyncThunk(
    'register/ImageUpload',
    async (theimageData, thunkAPI) => {


        try {
            thunkAPI.dispatch(uploadImagesStart());


            // Iterate through the imageDataArray and make POST requests for each image
            theimageData.images.forEach(imageData => {

                const authToken = getCookie("authtoken");
                if (imageData.contentType == "video/mp4") {
                    console.log("Video File")
                } else { console.log("Image File") }

                // Assuming imageData is the image data you want to send in the request
                const data = {
                    "key": imageData.key,
                    "contentType": imageData.contentType,
                    "isProfilePic": imageData.isProfile,
                    // "profileType": "profileVideo"
                    "profileType": imageData.contentType == "video/mp4" ? "profileVideo" : "profileImage"
                }


                // Construct the fetch options
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    },
                    body: JSON.stringify(data)
                };

                // Make the fetch request
                fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/s3/presignedurl/`, options)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(JSON.stringify(data));

                        if (data.status === "Success") {
                            console.log("After Success", data.data.url);
                            console.log("Buffer data : ", theimageData.bufferdata);

                            const token = getCookie("authtoken");

                            // Fetch the image data from the Blob URL


                            fetch(imageData.data)
                                .then(response => response.blob())
                                .then(blobData => {

                                    // Now you have the binary image data in `blobData`
                                    // You can proceed to send it in your request
                                    const formData = new FormData();
                                    formData.append('image', blobData);

                                    // Make your request with Axios
                                    const axios = require('axios');
                                    let config = {
                                        method: 'put',
                                        maxBodyLength: Infinity,
                                        url: data.data.url,
                                        headers: {
                                            'Content-Type': imageData.contentType,
                                            'x-amz-acl': 'public-read',
                                        },
                                        data: blobData
                                    };

                                    axios.request(config)
                                        .then((response) => {
                                            console.log(JSON.stringify(response.data));
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                })
                                .catch(error => {
                                    console.error('There was a problem with your fetch operation:', error);
                                });


                        } else {
                            console.log("ERROR");
                        }
                    })
                    .catch(error => {
                        console.error('There was a problem with your fetch operation:', error);
                    });

            });

            console.log("Waiting for images...")
            thunkAPI.dispatch(uploadImagesSuccess());

        } catch (error) {

            thunkAPI.dispatch(uploadImagesFailure());
        }

    }
);

export const DatingPreferencesInfo = createAsyncThunk(
    '/dating/register/datingPreferencesinfo',
    async (preferencedata, thunkAPI) => {

        try {
            const authToken = getCookie("authtoken");

            if (!authToken) {
                throw new Error('Token not found');
            }

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferencedata)
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/dating-partner/`, requestOptions);


            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized');
                } else {
                    const errorMessage = await response.text();
                    throw new Error(`API request failed: ${errorMessage}`);
                }
            }

            const result = await response.json();
            return result.data;

        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }
);