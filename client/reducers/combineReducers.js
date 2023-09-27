// THIS COMBINES ALL REDUCERS (CURRENTLY ONLY 1 REDUCER)

// WE ARE NO LONGER USING THIS

// IF WE EVER GET TO STRETCH FEATURES WE MAY NEED THIS AGAIN
import { combineReducers } from 'redux';
import reducer from './cardsReducer';

const reducers = combineReducers({
    cardsReducer: reducer,
});

export default reducers;