import {
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
} from "../../actions/myProfile/myProfileUpdateUserActions";

const initialState = {
  isUpdating: false,
  updateError: null,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        updateError: null,
      };
    case UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
        isUpdating: false,
        updateError: action.payload,
      };
    default:
      return state;
  }
};

export default myProfileReducer;
