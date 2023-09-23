// THIS COMBINES ALL REDUCERS (CURRENTLY ONLY 1 REDUCER)
import { combineReducers } from 'redux';
import reducer from './cardsReducer';

const reducers = combineReducers({
    cardsReducer: reducer,
});

export default reducers;