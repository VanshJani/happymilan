import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../../reducers/MyProfile";
import { UPDATE_PARTNER_PREF, UPDATE_HOBBIES_VALUES } from "../../../type";
import { UPDATE_DATING_HOBBIES_VALUES } from "../../types";
import { DatingAdditionalInfo, DatingGenerealInfo, DatingHobbyInfo } from "../../Redux-actions/register/registerAction";



const initialState = {
  newShortlists: 0,
  register: {
    email: '',
    name: '',
    otp: '',
    password: ''
  },
  datingForm: {
    userType: {
      appUsesType: ""
    },
    status: STATUSES.IDLE,
    general: {
      interestedIn: "",
      firstName: "",
      lastName: "",
      motherTongue: "",
      gender: "",
      Ethnicity: "",
      dateOfBirth: "",
      // birthTime: "",
      religion: "",
      height: "",
      // currentcity: "",
      // countryofliving: "",
      writeBoutYourSelf: "",

    },
    address: {
      mobileNumber: "",
      educationLevel: "",
      Occupation: "",
      currentlyLiving: "",

    },
    contact: {
      mobileCode: "",
      mobileNumber: "",
      homeCode: "",
      homeMobileNumber: "",
    },
    education: {

      degree: "",
      collage: "",
      city: "",
      state: "",
      country: ""
    },
    professional: {

      jobTitle: "",
      jobType: "",
      companyName: "",
      currentSalary: "",
      workCity: "",
      workCountry: "",
      //currentDesignation: ""

    },
    allhobbies: {
      hobbies: [
        {
          "category": "Creative",
          "values": []
        },
        {
          "category": "Fun",
          "values": []
        },
        {
          "category": "Fitness",
          "values": []
        }
      ],
    },
    hobby: {
      hobbyval: []
    },
    upload: {
      images: [],
      bufferdata: []
    },
    uploadStory: {
      imagesdata: {},
      bufferdata: "",
      CaptionText: "",
    },
    uploadChatImage: {
      imagesdata: {},
      bufferdata: "",
      CaptionText: "",
    },
    uploadChatVideo: {
      imagesdata: {},
      bufferdata: "",
      CaptionText: "",
    },
    UploadChatContent: {
      ContentType: "",
      uploadChatVideo: {
        imagesdata: {},
        bufferdata: "",
        CaptionText: "",
      },
      uploadChatImage: {
        imagesdata: {},
        bufferdata: "",
        CaptionText: "",
      },
    },

    partnerpref: {
      age: {
        min: 0,
        max: 0
      },
      distanceRange: {
        min: 0,
        max: 0
      },
      interestedIn: []
    },
    userProfile: {
      images: [],
      bufferdata: []
    },
    isFormValid: true
  },
};

export const ImagePreview = createAsyncThunk(
  'register/imagepreview',
  async (imgdata, thunkAPI) => {
    // console.log(imgdata);
    console.log(imgdata)
  }
);


export const DatingformReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATING_FORM_DATA':
      return {
        ...state,
        datingForm: {
          ...state.datingForm,
          ...action.payload, // Assuming payload is structured correctly
        },
      };
    case 'ADD_APPUSES_TYPE':
      return {
        ...state,
        datingForm: {
          ...state.datingForm,
          userType: {
            ...state.datingForm.userType,
            appUsesType: action.payload // Update appUsesType with the payload
          },
        }
      }
    case 'REMOVE_UPLOAD_DATA':
      return {
        ...state,
        UploadChatContent: {
          ContentType: "",
          uploadChatVideo: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: "",
          },
          uploadChatImage: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: "",
          }
        }
      };
    case UPDATE_DATING_HOBBIES_VALUES:
      return {
        ...state,
        datingForm: {
          ...state.datingForm,
          allhobbies: {
            ...state.datingForm.allhobbies,
            hobbies: state.datingForm.allhobbies.hobbies.map(hobby =>
              hobby.category?.toLowerCase() === action.payload.category?.toLowerCase()
                ? { ...hobby, values: [...new Set([...hobby.values, ...action.payload.values])] }
                : hobby
            ),
          }
        }
      };
    case UPDATE_PARTNER_PREF:
      const { key, values } = action.payload;

      return {
        ...state,
        datingForm: {
          ...state.datingForm,
          partnerpref: {
            ...state.datingForm.partnerpref,
            [key]: Array.isArray(state.datingForm.partnerpref[key])
              ? [...new Set([...state.datingForm.partnerpref[key], ...values])]
              : values,
          },
        },
      };
    default:
      return state;
  }
};

export const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    updateDatingFormData: (state, action) => {
      state.datingForm = { ...state.datingForm, ...action.payload };
    },
    setFormValidation: (state, action) => {
      state.isFormValid = action.payload;
    },
    setUploadUIVisibility(state, action) {
      const { userId, isVisible } = action.payload;
      state[userId] = isVisible;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(DatingGenerealInfo.pending, (state) => {
        // Handle pending state if needed
        state.datingForm.status = STATUSES.LOADING;
      });
    builder.addCase(DatingGenerealInfo.fulfilled, (state) => {
      // Handle pending state if needed
      state.datingForm.status = STATUSES.IDLE;
    });
    builder.addCase(DatingGenerealInfo.rejected, (state) => {
      // Handle pending state if needed
      state.datingForm.status = STATUSES.ERROR;
    });
    builder.addCase(DatingAdditionalInfo.pending, (state) => {
      state.datingForm.status = STATUSES.LOADING;
    })
    builder.addCase(DatingAdditionalInfo.fulfilled, (state) => {
      state.datingForm.status = STATUSES.IDLE;
    })
    builder.addCase(DatingAdditionalInfo.rejected, (state) => {
      state.datingForm.status = STATUSES.ERROR;
    })
    builder.addCase(DatingHobbyInfo.pending, (state) => {
      state.datingForm.status = STATUSES.LOADING;
    })
    builder.addCase(DatingHobbyInfo.fulfilled, (state) => {
      state.datingForm.status = STATUSES.IDLE;
    })
    builder.addCase(DatingHobbyInfo.rejected, (state) => {
      state.datingForm.status = STATUSES.ERROR;
    })
  }
})




export const { setFormValidation, setUploadUIVisibility } = FormSlice.actions;