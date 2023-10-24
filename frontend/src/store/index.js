import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginPage/loginReducer";
import { registerReducer } from "../reducers/registerPage/registerReducer";
import myProfileFetchUserReducer from "../reducers/myProfile/myProfileFetchUserReducer";
import myProfileUpdateUserReducer from "../reducers/myProfile/myProfileUpdateUserReducer";
import myProfileChangePasswordReducer from "../reducers/myProfile/myProfileChangePasswordReducer";

const initialStateFromLocalStorage = {
  login: {
    token: localStorage.getItem("jwtToken") || null,
    error: null,
  },
  register: {
    isRegistered: false,
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
  login: loginReducer,
  register: registerReducer,
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
