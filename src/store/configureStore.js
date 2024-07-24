import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import {thunk} from 'redux-thunk';

import authReducer from "./auth/authSlice";
import chatboxReducer from "./chatbox/chatboxSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  chatbox: chatboxReducer,
  // additional reducers could be added here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
