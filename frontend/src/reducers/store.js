import { createStore, combineReducers } from "redux";
import authenticationReducer from "./auth";

const reducers = combineReducers({ 
    auth: authenticationReducer
});
const store = createStore(reducers);

export default store;