import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'cards',
    initialState: {id: null, word: null, definition: null, user_id: null},
    reducers: {
        createCard(state, action) {
            const { payload } = action;
            console.log('ACTION', action)
            // const { id, word, definition, user_id } = payload;

            // state.id = payload.id,
            // state.word = payload.word,
            // state.definition = payload.definition,
            // state.user_id = payload.user_id

            console.log('STATE FROM REDUCER', state)
        },
        // editCard(state, action) {
        //     const { payload } = action;

        //     state[id] = payload.id,
        //     state[word] = payload.word,
        //     state[definition] = payload.definition,
        //     state[user_id] = payload.user_id
        // },
        // deleteCard(state, action) {
        //     const { payload } = action;

        //     state[id] = payload.id
        // },
    },
})

console.log(cardSlice)

const { actions, reducer } = cardSlice;
const { createCard, editCard, deleteCard} = actions

export default cardSlice;
