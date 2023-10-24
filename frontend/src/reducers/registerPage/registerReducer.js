import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REDIRECT_TO_LOGIN,
} from "../../actions/registerPage/registerActions";

const initialRegisterState = {
  isRegistered: false,
  error: null,
  shouldRedirect: false,
};

export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        error: action.payload,
      };
    case REDIRECT_TO_LOGIN:
      return {
        ...state,
        shouldRedirect: true,
      };
    default:
      return state;
  }
};
