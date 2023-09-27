import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers/combineReducers";
// 
import cardReducer from "./components/cardSlice.js";

const store = configureStore({
    reducer: {
        store: cardReducer
    },
})

export default store;