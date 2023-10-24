import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
} from "../../actions/myProfile/myProfileFetchUserActions";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };

    case FETCH_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default profileReducer;
