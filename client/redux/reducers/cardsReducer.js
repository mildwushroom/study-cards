import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'cards',
    initialState: {id: null, words: null, definition: null},
    reducers: {
        createCard(state, action) {
            state[id] = payload.id,
            state[words] = payload.words,
            state[definition] = payload.definition
        },
        editCard(state, action) {
            state[id] = payload.id,
            state[words] = payload.words,
            state[definition] = payload.definition
        },
        deleteCard(state, action) {
            state[id] = payload.id
        },
    },
})

console.log(cardSlice)

const { actions, reducer } = cardSlice;
const { createCard, editCard, deleteCard} = actions

export default reducer;
