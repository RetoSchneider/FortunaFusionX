import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "../reducers/loginPage/loginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
