import {
  GET_PRIVACY_QUESTIONS,
  GET_PRIVACY_QUESTIONS_FAILURE,
  GET_PRIVACY_QUESTIONS_SUCCESS,
  HIDE_MY_PROFILE,
  HIDE_MY_PROFILE_CLOSEMODAL,
  HIDE_MY_PROFILE_FAILURE,
  HIDE_MY_PROFILE_SUCCESS,
  RESET_USER_CRED,
  SHOW_MISSING_FIELDS_REQUEST,
  SHOW_MISSING_FIELDS_SUCCESS,
  UPDATE_DISPLAY_NAME,
  UPDATE_DISPLAY_NAME_FAILURE,
  UPDATE_DISPLAY_NAME_SUCCESS,
  UPDATE_DISPLAY_STATUS,
  UPDATE_EMAIL_FIRST_STEP_FALIURE,
  UPDATE_EMAIL_FIRST_STEP_REQUEST,
  UPDATE_EMAIL_FIRST_STEP_SUCCESS,
  UPDATE_EMAIL_SECOND_STEP_FALIURE,
  UPDATE_EMAIL_SECOND_STEP_REQUEST,
  UPDATE_EMAIL_SECOND_STEP_SUCCESS,
  UPDATE_USER_PASSWORD_FALIURE,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS
} from '../type'

const initialState = {
  loading: false,
  data: null,
  error: null,
  Profilehide: {
    loading: false,
    error: null,
    data: null,
    closemodal: false
  },
  privacyquestions: {
    loading: false,
    error: null,
    data: null
  },
  DisplayName: {
    NameChangeloading: false,
    error: null,
    status: ''
  },
  MissingFields: {
    loading: false,
    data: null,
    status: null,
    error: null
  },
  UpdateEmail: {
    loading: false,
    success: '',
    error: null,
    step: 0
  },
  UpdateUserPassword: {
    loading: false,
    success: null,
    error: null,
    step: 0
  }
}

const Userseting = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_MY_PROFILE:
      return {
        ...state,
        Profilehide: {
          loading: true,
          error: null,
          data: null,
          closemodal: false
        }
      }
    case HIDE_MY_PROFILE_SUCCESS: {
      return {
        ...state,
        Profilehide: {
          loading: false,
          error: null,
          closemodal: true,
          data: action.payload
        }
      }
    }
    case HIDE_MY_PROFILE_FAILURE: {
      return {
        ...state,
        Profilehide: {
          loading: false,
          error: action.payload,
          data: null
        }
      }
    }
    case HIDE_MY_PROFILE_CLOSEMODAL: {
      return {
        ...state,
        Profilehide: {
          ...state.Profilehide,
          closemodal: false
        }
      }
    }
    case GET_PRIVACY_QUESTIONS: {
      return {
        ...state,
        privacyquestions: {
          loading: true,
          error: null,
          data: null
        }
      }
    }
    case GET_PRIVACY_QUESTIONS_SUCCESS: {
      return {
        ...state,
        privacyquestions: {
          loading: false,
          error: null,
          data: action.payload
        }
      }
    }
    case GET_PRIVACY_QUESTIONS_FAILURE: {
      return {
        ...state,
        privacyquestions: {
          loading: false,
          error: action.payload,
          data: null
        }
      }
    }
    case UPDATE_DISPLAY_NAME: {
      return {
        ...state,
        DisplayName: {
          NameChangeloading: true
        }
      }
    }
    case UPDATE_DISPLAY_NAME_SUCCESS: {
      return {
        ...state,
        DisplayName: {
          NameChangeloading: false,
          status: 'Success'
        }
      }
    }
    case UPDATE_DISPLAY_NAME_FAILURE: {
      return {
        ...state,
        DisplayName: {
          NameChangeloading: false,
          error: action.payload
        }
      }
    }
    case UPDATE_DISPLAY_STATUS: {
      return {
        ...state,
        DisplayName: {
          // NameChangeloading: false,
          status: ''
          // error: action.payload
        }
      }
    }
    case SHOW_MISSING_FIELDS_REQUEST: {
      return {
        ...state,
        MissingFields: {
          loading: true
        }
      }
    }
    case SHOW_MISSING_FIELDS_SUCCESS: {
      return {
        ...state,
        MissingFields: {
          loading: false,
          data: action.payload?.data,
          status: action?.payload?.status
        }
      }
    }
    case SHOW_MISSING_FIELDS_REQUEST: {
      return {
        ...state,
        MissingFields: {
          loading: false,
          error: action.payload
        }
      }
    }
    case UPDATE_EMAIL_FIRST_STEP_REQUEST: {
      return {
        ...state,
        UpdateEmail: {
          loading: true
        }
      }
    }
    case UPDATE_EMAIL_FIRST_STEP_SUCCESS: {
      return {
        ...state,
        UpdateEmail: {
          loading: false,
          step: 1,
          success: action.payload
        }
      }
    }
    case UPDATE_EMAIL_FIRST_STEP_FALIURE: {
      return {
        ...state,
        UpdateEmail: {
          loading: false,
          error: action.payload
        }
      }
    }

    case UPDATE_EMAIL_SECOND_STEP_REQUEST: {
      return {
        ...state,
        UpdateEmail: {
          loading: true
        }
      }
    }
    case UPDATE_EMAIL_SECOND_STEP_SUCCESS: {
      return {
        ...state,
        UpdateEmail: {
          loading: false,
          step: 2,
          success: action.payload
        }
      }
    }
    case UPDATE_EMAIL_SECOND_STEP_FALIURE: {
      return {
        ...state,
        UpdateEmail: {
          loading: false,
          error: action.payload
        }
      }
    }
    case UPDATE_USER_PASSWORD_REQUEST: {
      return {
        ...state,
        UpdateUserPassword: {
          loading: true
        }
      }
    }
    case UPDATE_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        UpdateUserPassword: {
          loading: false,
          step: 1,
          success: 'Password Change Sucessfully !'
        }
      }
    }
    case UPDATE_USER_PASSWORD_FALIURE: {
      return {
        ...state,
        UpdateUserPassword: {
          loading: false,
          step: 0,
          success: null,
          error: action.payload
        }
      }
    }
    case RESET_USER_CRED: {
      return {
        ...state,
        UpdateUserPassword: {
          loading: false,
          success: null,
          error: null,
          step: 1
        }
      }
    }

    default:
      return state
  }
}

export default Userseting

// FOR UPDATE EMAIL

// STEP 1 - /v1/user/auth/forgot-password  -> add Email
// STEP 2 - /v1/user/auth/reset-password - > add  data = JSON.stringify({
//           email: ChnagedEmail.currentEmail,
//           newMail: ChnagedEmail.NewEmail,
//           otp: otpNumber
//         })
