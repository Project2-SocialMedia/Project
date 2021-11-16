import { createStore, combineReducers } from "redux";
import authenticationReducer from "./auth";

const reducers = combineReducers({ 
    authenticationReducer
});
const store = createStore(reducers);

export default store;