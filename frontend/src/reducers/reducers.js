const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
