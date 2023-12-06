import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkReducer from "./slices/darkmoodSlice";
import thunk from "redux-thunk";

const reducer = combineReducers({
  darkState: darkReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
