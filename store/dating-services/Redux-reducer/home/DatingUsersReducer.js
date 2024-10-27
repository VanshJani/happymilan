import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "../../../type";
import { GET_ACCEPTED_DATING_REQUEST_DATA_FAILURE, GET_ACCEPTED_DATING_REQUEST_DATA_REQUEST, GET_ACCEPTED_DATING_REQUEST_DATA_SUCCESS, GET_DATING_USER_BY_ID_FALIURE, GET_DATING_USER_BY_ID_REQUEST, GET_DATING_USER_BY_ID_SUCCESS, GET_DATING_USERS_FAILURE, GET_DATING_USERS_REQUEST, GET_DATING_USERS_SUCCESS, UPDATE_GENERAL_SECTION_FALIURE, UPDATE_GENERAL_SECTION_REQUEST, UPDATE_GENERAL_SECTION_SUCCESS } from "../../types";

const initialState = {
    users: [],
    loading: false,
    error: null,
    Paginated: {
        loading: false,
        userData: [],
        totalPages: 0,
        currentPage: 0,
        limit: 0,
    },
    Sections: {
        generalSection: {
            loading: false,
            data: [],
            error: null
        }
    },
    Userdata: {
        loading: false,
        data: [],
        error: null
    },
    Requests: {
        users: [],
        loading: false,
        error: null
    },
    Accepted: {
        users: [],
        loading: false,
        error: null
    }

};

const GetDatingUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATING_USERS_REQUEST: {
            return {
                ...state,
                Paginated: {
                    ...state.Paginated,
                    loading: true
                }
            }
        }
        case GET_DATING_USERS_SUCCESS: {

            return {
                ...state,
                Paginated: {
                    ...state.Paginated,
                    loading: false,
                    userData: action.payload
                }
            }

        }
        case GET_DATING_USERS_FAILURE: {
            return {
                ...state,
                Paginated: {
                    ...state.Paginated,
                    loading: false,
                    error: "something Went Wrong !"
                }
            }
        }
        case UPDATE_GENERAL_SECTION_REQUEST: {
            return {
                ...state,
                Sections: {
                    ...state.Sections,
                    generalSection: {
                        loading: true,
                    }
                }
            }
        }
        case UPDATE_GENERAL_SECTION_SUCCESS: {
            return {
                ...state,
                Sections: {
                    ...state.Sections,
                    generalSection: {
                        loading: false,
                        data: action.payload,
                    }
                }
            }
        }
        case UPDATE_GENERAL_SECTION_FALIURE: {
            return {
                ...state,
                Sections: {
                    ...state.Sections,
                    generalSection: {
                        loading: false,
                        error: "Something went wrong !",
                    }
                }
            }
        }
        case GET_DATING_USER_BY_ID_REQUEST: {
            return {
                ...state,
                Userdata: {
                    loading: true
                }

            }
        }
        case GET_DATING_USER_BY_ID_SUCCESS: {
            return {
                ...state,
                Userdata: {
                    loading: false,
                    data: action.payload
                }

            }
        }
        case GET_DATING_USER_BY_ID_FALIURE: {
            return {
                ...state,
                Userdata: {
                    loading: false,
                    error: "Something Went Wrong !"
                }

            }
        }
        case GET_REQUEST: {
            return {
                ...state,
                Requests: {
                    loading: true
                }
            }
        }
        case GET_REQUEST_SUCCESS: {
            return {
                ...state,
                Requests: {
                    loading: false,
                    users: action.payload
                }
            }
        }
        case GET_REQUEST_FAILURE: {
            return {
                ...state,
                Requests: {
                    loading: false,
                    error: "Something Went Wrong !"
                }
            }
        }
        case GET_ACCEPTED_DATING_REQUEST_DATA_REQUEST: {
            return {
                ...state,
                Accepted: {
                    loading: true
                }
            }
        }
        case GET_ACCEPTED_DATING_REQUEST_DATA_SUCCESS: {
            return {
                ...state,
                Accepted: {
                    loading: false,
                    users: action.payload

                }
            }
        }
        case GET_ACCEPTED_DATING_REQUEST_DATA_FAILURE: {
            return {
                ...state,
                Accepted: {
                    loading: false,
                    error: action.payload
                }
            }
        }
        default:
            return state;
    }
}

export default GetDatingUsersReducer