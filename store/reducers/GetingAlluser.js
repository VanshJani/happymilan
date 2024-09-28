// reducers/allUsersReducer.js
import {
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  ADD_TO_SHORTLIST,
  LIKE_USER,
  UNLIKE_USER,
  SEND_REQUEST,
  REMOVE_REQUEST,
  FETCH_ALL_USERS_PAGINATED_REQUEST,
  FETCH_ALL_USERS_PAGINATED_SUCCESS,
  FETCH_ALL_USERS_PAGINATED_FAILURE,
} from '../actions/GetingAlluser';
import { GET_INFINIT_SCROLL_USER_FAILURE, GET_INFINIT_SCROLL_USER_REQUEST, GET_INFINIT_SCROLL_USER_SUCCESS, GET_MORESUGGESTION_USERS_FAILURE, GET_MORESUGGESTION_USERS_REQUEST, GET_MORESUGGESTION_USERS_SUCCESS } from '../type';

const initialState = {
  users: [],
  loading: false,
  error: null,
  data: [],
  Paginated: {
    loading: false,
    userData: [],
    totalPages: 0,
    currentPage: 0,
    limit: 0,
  },
  Ifinit: {
    data: [],
    page: 1,
    loading: false,
    error: ""
  },
  MoreSuggestion: {
    data: [],
    page: 1,
    loading: false,
    error: ""
  }
};

const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ALL_USERS_PAGINATED_REQUEST:
      return {
        ...state,
        Paginated: {
          ...state.Paginated,
          loading: true
        }
      }
    case FETCH_ALL_USERS_PAGINATED_SUCCESS:
      return {
        ...state,
        Paginated: {
          ...state.Paginated,
          userData: action.payload.userData, // Append new users to existing list
          totalPages: action.payload.totalPages,   // Update total pages
          currentPage: action.payload.currentPage, // Update current page
          limit: action.payload.limit,             // Set limit per page
          loading: false,                          // Set loading false after success
        }
      };
    case FETCH_ALL_USERS_PAGINATED_FAILURE:
      return {
        ...state,
        Paginated: {
          ...state.Paginated,
          loading: false

        }
      }
    case GET_INFINIT_SCROLL_USER_REQUEST: {
      return {
        ...state,
        Ifinit: {
          loading: true,
        }
      }
    }
    case GET_INFINIT_SCROLL_USER_SUCCESS: {
      return {
        ...state,
        Ifinit: {
          data: action.payload,
          loading: false
        }
      }
    }
    case GET_INFINIT_SCROLL_USER_FAILURE: {
      return {
        ...state,
        Ifinit: {
          loading: false,
          error: "Something Went Wrong.."
        }
      }
    }
    case GET_MORESUGGESTION_USERS_REQUEST: {
      return {
        ...state,
        MoreSuggestion: {
          loading: true,
        }
      }
    }
    case GET_MORESUGGESTION_USERS_SUCCESS: {
      return {
        ...state,
        MoreSuggestion: {
          loading: false,
          data: action.payload
        }
      }
    }
    case GET_MORESUGGESTION_USERS_FAILURE: {
      return {
        ...state,
        MoreSuggestion: {
          loading: false,
          error: "Something Went Wrong"
        }
      }
    }

    case ADD_TO_SHORTLIST:
      // Logic to add user to shortlist
      return {
        ...state,
        // Update state with new shortlisted user
      };
    case LIKE_USER:
      // Logic to like a user
      return {
        ...state,
        // Update state with user liked
      };
    case UNLIKE_USER:
      // Logic to unlike a user
      return {
        ...state,
        // Update state with user unliked
      };
    case SEND_REQUEST:
      // Logic to send a request to a user
      return {
        ...state,
        // Update state with user request sent
      };
    case REMOVE_REQUEST:
      // Logic to remove a request sent to a user
      return {
        ...state,
        // Update state with request removed
      };
    default:
      return state;
  }
};

export default allUsersReducer;
