import { createStore, combineReducers } from '@reduxjs.toolkit';
import loginReducer from '../reducers/loginReducer';

const rootReducer = combineReducers({
    login: loginReducer
});

const store = createStore(rootReducer);

export default store;
