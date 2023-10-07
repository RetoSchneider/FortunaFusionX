import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "../reducers/loginPage/loginReducer";
import thunk from "redux-thunk";

const initialStateFromLocalStorage = {
  auth: {
    token: localStorage.getItem("jwtToken") || null,
    error: null,
  },
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(
  rootReducer,
  initialStateFromLocalStorage,
  applyMiddleware(thunk),
);

export default store;
