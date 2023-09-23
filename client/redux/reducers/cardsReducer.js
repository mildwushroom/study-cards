import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'cards',
    initialState: {id: null, word: null, definition: null, user_id: null},
    reducers: {
        createCard(state, action) {
            state[id] = payload.id,
            state[word] = payload.word,
            state[definition] = payload.definition
            state[user_id] = payload.user_id
        },
        editCard(state, action) {
            state[id] = payload.id,
            state[word] = payload.word,
            state[definition] = payload.definition
            state[user_id] = payload.user_id
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
