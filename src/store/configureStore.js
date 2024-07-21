import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import {thunk} from 'redux-thunk';

import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // additional reducers could be added here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
