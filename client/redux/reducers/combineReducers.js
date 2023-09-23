// THIS COMBINES ALL REDUCERS (CURRENTLY ONLY 1 REDUCER)
import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';

const reducers = combineReducers({
    cards: cardsReducer,
})

export default reducers