import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    entities: [],
    loading: false,
}

// fetch('/api/cards', header)
// .then((data) => data.json())
// .then((data) => console.log('DATA', data))
// .catch((err) => console.error(err))

// let defaultHeader = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(card)
// }

export const postCardThunk = createAsyncThunk('cards/createCard', async (card, thunkAPI) =>{
    let defaultHeader = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
      }
    const parsedData = await fetch('/api/cards', defaultHeader).then((data) => data.json())
    console.log('PARSED DATA', parsedData)
    return parsedData;
});

export const getCardThunk = createAsyncThunk('cards/createCard', async (thunkAPI) =>{
  let defaultHeader = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  const parsedData = await fetch('/api/cards', defaultHeader).then((data) => data.json())
//   console.log('PARSED DATA', parsedData)
  return parsedData;
});

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        // createCard(state, action) {
        //     const { payload } = action;
        //     console.log('ACTION', action)
        //     // const { id, word, definition, user_id } = payload;
        //     // state.id = payload.id,
        //     // state.word = payload.word,
        //     // state.definition = payload.definition,
        //     // state.user_id = payload.user_id
        //     // state.entities = payload;

        //     console.log('STATE FROM REDUCER', state)
        // },
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
    extraReducers: {
        [postCardThunk.pending]: (state) => {
          state.loading = true
        },
        [postCardThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.entities = payload;
            // console.log('PROMISE WAS FULFILLED')
            // console.log('STATE', state.entities)
        },
        [postCardThunk.rejected]: (state) => {
          state.loading = false
        },
        [getCardThunk.pending]: (state) => {
          state.loading = true
        },
        [getCardThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.entities = payload;
            console.log('GET PROMISE WAS FULFILLED')
            // console.log('GET STATE', state.entities)
        },
        [getCardThunk.rejected]: (state) => {
          state.loading = false
        },
      },
})

// console.log(cardSlice)

const { actions, reducer } = cardSlice;
const { createCard, editCard, deleteCard} = actions

// export default cardSlice.reducer








