import { GET_DATING_USERS_FAILURE, GET_DATING_USERS_REQUEST, GET_DATING_USERS_SUCCESS, UPDATE_GENERAL_SECTION_FALIURE, UPDATE_GENERAL_SECTION_REQUEST, UPDATE_GENERAL_SECTION_SUCCESS } from "../../types";

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
        default:
            return state;
    }
}

export default GetDatingUsersReducer