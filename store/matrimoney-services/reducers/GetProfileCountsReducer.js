import { GET_PROFILE_COUNT_FAILURE, GET_PROFILE_COUNT_REQUEST, GET_PROFILE_COUNT_SUCCESS } from "../../type";

const initialState = {
    data: {
        Likes: 0,
        Sent: 0,
        Received: 0,
        Accepted: 0,
    },
    loading: false,
    error: null,
};

const GetProfileCounts = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_COUNT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE_COUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    Likes: action.payload.Likes,
                    Sent: action.payload.Sent,
                    Accepted: action.payload.Accepted

                }
            }
        case GET_PROFILE_COUNT_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Some thing went Wrong !"
            }

        default:
            return state;
    }
}

export default GetProfileCounts