import { GET_DATING_CATEGORY_FALIURE, GET_DATING_CATEGORY_REQUEST, GET_DATING_CATEGORY_SUCCESS } from "../../types";

const initialState = {
    loading: false,
    error: null,
    users: [],

};

const Datingcategoryreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATING_CATEGORY_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case GET_DATING_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        }
        case GET_DATING_CATEGORY_FALIURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;
    }
}

export default Datingcategoryreducer