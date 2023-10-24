import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/loginPage/loginReducer";
import myProfileFetchUserReducer from "../reducers/myProfile/myProfileFetchUserReducer";
import myProfileUpdateUserReducer from "../reducers/myProfile/myProfileUpdateUserReducer";
import myProfileChangePasswordReducer from "../reducers/myProfile/myProfileChangePasswordReducer"; // 1. Import the new reducer

const initialStateFromLocalStorage = {
  auth: {
    token: localStorage.getItem("jwtToken") || null,
    error: null,
  },
  profile: {
    data: null,
    isLoading: true,
    error: null,
  },
  myProfile: {
    isUpdating: false,
    updateError: null,
  },
  passwordChange: {
    isUpdating: false,
    updateError: null,
  },
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: myProfileFetchUserReducer,
  myProfile: myProfileUpdateUserReducer,
  passwordChange: myProfileChangePasswordReducer,
});

const store = legacy_createStore(
  rootReducer,
  initialStateFromLocalStorage,
  applyMiddleware(thunk),
);

export default store;
