import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../actions/loginPage/loginActions";

const initialLoginState = {
  token: null,
  error: null,
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
