import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/loginPage/loginReducer";
import myProfileFetchUserReducer from "../reducers/myProfile/myProfileFetchUserReducer";
import myProfileUpdateUserReducer from "../reducers/myProfile/myProfileUpdateUserReducer";

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
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: myProfileFetchUserReducer,
  myProfile: myProfileUpdateUserReducer,
});

const store = legacy_createStore(
  rootReducer,
  initialStateFromLocalStorage,
  applyMiddleware(thunk),
);

export default store;
