import { GET_DATING_USERS_FAILURE, GET_DATING_USERS_REQUEST, GET_DATING_USERS_SUCCESS } from "../../types";

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
        default:
            return state;
    }
}

export default GetDatingUsersReducer