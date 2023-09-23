import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/combineReducers";


const store = configureStore({
    reducers
})


export default store;