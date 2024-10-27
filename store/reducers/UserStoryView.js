// reducers/UserStoryView.js

import { ADD_SUCCESS_STORIES_IMAGES, FETCH_SUCCESS_STORIES_FAILURE, FETCH_SUCCESS_STORIES_REQUEST, FETCH_SUCCESS_STORIES_SUCCESS, GET_STORY_VIEWS_DETAILS, GET_STORY_VIEWS_DETAILS_FAILURE, GET_STORY_VIEWS_DETAILS_SUCCESS, SUCCESS_STORIES_FAILURE, SUCCESS_STORIES_REQUEST, SUCCESS_STORIES_SUCCESS, VIEW_STORY_POST, VIEW_STORY_POST_FAILURE, VIEW_STORY_POST_SUCCESS } from "../type";

const initialState = {
    StoryViews: {
        data: null,
        loading: false,
        error: null,
    },
    storydata: {
        data: null,
        loading: false,
        error: ""
    },
    successstory: {
        data: null,
        loading: false,
        error: null
    },
    successstoryUpload: {
        data: null,
        loading: false,
        error: null
    }

};

const UserStoryView = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_STORY_POST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case VIEW_STORY_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case VIEW_STORY_POST_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload,
            };
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
                error: "error..."
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
                    loading: true,
                }
            }
        case SUCCESS_STORIES_SUCCESS:
            return {
                ...state,
                successstoryUpload: {
                    loading: false,
                }
            }
        case SUCCESS_STORIES_FAILURE:
            return {
                ...state,
                successstoryUpload: {
                    loading: false,
                    error: "Something Went Wrong !"
                }
            }
        case FETCH_SUCCESS_STORIES_REQUEST:
            return {
                ...state,
                storydata: {
                    loading: true,
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
                    error: "Something Went Wrong !"
                }
            }



        default:
            return state;
    }
};



export default UserStoryView;
