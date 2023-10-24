import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from "../../actions/registerPage/registerActions";
  
  const initialRegisterState = {
    isRegistered: false,
    error: null,
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
      default:
        return state;
    }
  };
  