// reducers/UserStoryView.js

import {
  ADD_SUCCESS_STORIES_IMAGES,
  CREATE_LIKE_FAIL,
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_SUCCESS,
  FETCH_IS_LIKE_FAIL,
  FETCH_IS_LIKE_REQUEST,
  FETCH_IS_LIKE_SUCCESS,
  FETCH_SUCCESS_STORIES_FAILURE,
  FETCH_SUCCESS_STORIES_FAILURE_BY_ID,
  FETCH_SUCCESS_STORIES_REQUEST,
  FETCH_SUCCESS_STORIES_REQUEST_BY_ID,
  FETCH_SUCCESS_STORIES_SUCCESS,
  FETCH_SUCCESS_STORIES_SUCCESS_BY_ID,
  GET_LIKES_FAIL,
  GET_LIKES_REQUEST,
  GET_LIKES_SUCCESS,
  GET_STORY_VIEWS_DETAILS,
  GET_STORY_VIEWS_DETAILS_FAILURE,
  GET_STORY_VIEWS_DETAILS_SUCCESS,
  SUCCESS_STORIES_FAILURE,
  SUCCESS_STORIES_REQUEST,
  SUCCESS_STORIES_SUCCESS,
  TOTAL_READ_COUNT_FAIL,
  TOTAL_READ_COUNT_REQUEST,
  TOTAL_READ_COUNT_SUCCESS,
  VIEW_STORY_POST,
  VIEW_STORY_POST_FAILURE,
  VIEW_STORY_POST_SUCCESS
} from '../type'

const initialState = {
  StoryViews: {
    data: null,
    loading: false,
    error: null
  },
  storydata: {
    data: null,
    loading: false,
    error: ''
  },
  successstory: {
    data: null,
    loading: false,
    error: null
  },
  successstoryByID: {
    data: null,
    loading: false,
    error: null
  },
  successstoryUpload: {
    data: null,
    loading: false,
    status: null,
    error: null
  },
  storyReadcount: {
    reads: 0,
    loading: false,
    error: null
  },
  storyLikecount: {
    totalLike: 0,
    loading: false,
    error: null
  },
  IsLike: {
    isLike: false,
    loading: false,
    likeID: null,
    error: null
  }
}

const UserStoryView = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_STORY_POST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case VIEW_STORY_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case VIEW_STORY_POST_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      }
    case GET_STORY_VIEWS_DETAILS:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_STORY_VIEWS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case GET_STORY_VIEWS_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: 'error...'
      }
    case ADD_SUCCESS_STORIES_IMAGES:
      return {
        ...state,
        successstory: {
          data: action.payload
        }
      }

    case SUCCESS_STORIES_REQUEST:
      return {
        ...state,
        successstoryUpload: {
          loading: true
        }
      }
    case SUCCESS_STORIES_SUCCESS:
      return {
        ...state,
        successstoryUpload: {
          loading: false,
          status: 'Success'
        }
      }
    case SUCCESS_STORIES_FAILURE:
      return {
        ...state,
        successstoryUpload: {
          loading: false,
          error: 'Something Went Wrong !'
        }
      }
    case FETCH_SUCCESS_STORIES_REQUEST:
      return {
        ...state,
        storydata: {
          loading: true
        }
      }
    case FETCH_SUCCESS_STORIES_SUCCESS:
      return {
        ...state,
        storydata: {
          loading: false,
          data: action.payload
        }
      }
    case FETCH_SUCCESS_STORIES_FAILURE:
      return {
        ...state,
        storydata: {
          loading: false,
          error: 'Something Went Wrong !'
        }
      }
    case FETCH_SUCCESS_STORIES_REQUEST_BY_ID:
      return {
        ...state,
        successstoryByID: {
          loading: true
        }
      }
    case FETCH_SUCCESS_STORIES_SUCCESS_BY_ID:
      return {
        ...state,
        successstoryByID: {
          loading: false,
          data: action.payload
        }
      }
    case FETCH_SUCCESS_STORIES_FAILURE_BY_ID:
      return {
        ...state,
        successstoryByID: {
          loading: false,
          error: action.payload
        }
      }
    case TOTAL_READ_COUNT_REQUEST:
      return {
        ...state,
        storyReadcount: {
          loading: true
        }
      }
    case TOTAL_READ_COUNT_SUCCESS:
      return {
        ...state,
        storyReadcount: {
          loading: false,
          reads: action.payload
        }
      }
    case TOTAL_READ_COUNT_FAIL:
      return {
        ...state,
        storyReadcount: {
          loading: false,
          error: action.payload
        }
      }
    // case CREATE_LIKE_REQUEST:
    //   return {
    //     ...state,
    //     storyLikecount: {
    //       loading: true
    //     }
    //   }
    // case CREATE_LIKE_SUCCESS:
    //   return {
    //     ...state,
    //     storyLikecount: {
    //       loading: false,
    //       totalLike: action.payload
    //     }
    //   }
    // case CREATE_LIKE_FAIL:
    //   return {
    //     ...state,
    //     storyLikecount: {
    //       loading: false,
    //       error: action.payload
    //     }
    //   }
    case FETCH_IS_LIKE_REQUEST: {
      return {
        ...state,
        IsLike: {
          loading: true
        }
      }
    }
    case FETCH_IS_LIKE_SUCCESS: {
      return {
        ...state,
        IsLike: {
          isLike: action.payload.isLike,
          loading: false,
          likeID: action.payload.LikeID
        }
      }
    }
    case FETCH_IS_LIKE_FAIL: {
      return {
        ...state,
        IsLike: {
          loading: false,
          error: action.payload
        }
      }
    }
    case GET_LIKES_REQUEST: {
      return {
        ...state,
        storyLikecount: {
          loading: true
        }
      }
    }
    case GET_LIKES_SUCCESS: {
      return {
        ...state,
        storyLikecount: {
          loading: false,
          totalLike: action.payload
        }
      }
    }
    case GET_LIKES_FAIL: {
      return {
        ...state,
        storyLikecount: {
          loading: false,
          // totalLike : action.payload
          error: action.payload
        }
      }
    }

    default:
      return state
  }
}

export default UserStoryView
