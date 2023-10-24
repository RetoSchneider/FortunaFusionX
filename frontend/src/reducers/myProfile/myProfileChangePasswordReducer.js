// myProfileChangePasswordReducer.js

import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "../../actions/myProfile/myProfileChangePasswordAction";

const initialState = {
  isUpdating: false,
  updateError: null,
};

const myProfileChangePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        isUpdating: true,
        updateError: null,
        passwordChangeSuccess: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        updateError: null,
        passwordChangeSuccess: true,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isUpdating: false,
        updateError: action.payload,
        passwordChangeSuccess: false,
      };
    default:
      return state;
  }
};

export default myProfileChangePasswordReducer;
