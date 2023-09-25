import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers/combineReducers";
// 
import { cardSlice } from "./reducers/cardsReducer";

const store = configureStore({
    reducer: cardSlice.reducer,
})

export default store;