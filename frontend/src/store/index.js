import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/loginPage/loginReducer";
import profileReducer from "../reducers/myProfile/myProfileFetchUserReducer";

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
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const store = legacy_createStore(
  rootReducer,
  initialStateFromLocalStorage,
  applyMiddleware(thunk),
);

export default store;
