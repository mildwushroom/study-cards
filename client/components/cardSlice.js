import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    cards: [],
    categories: [],
    card_total: 0,
    consecutivelyCorrect: 0, //future state for tracking success rate
    isCategoriesFetched: false, // renders loading on false, renders all categories on true
    areCardsFetched: false,// renders loading on false, renders all cards on true
    isCorrect: false, //causes the next button to be available
    showHint: false, //flips to the hint specifically
    showAnswer: false //flips the card

}

// thunks / aka async action creators
//getCategories
export const getCategories = createAsyncThunk('/api/categories', async () => {

    try {
        const response = await fetch('/api/categories')
            .then((res) => res.json())

        return response;
    }

    catch (error) {
        console.log(error);
    }
});

// getCategoryCards
export const getCategoryCards = createAsyncThunk('/api/cards', async (category) => {
    try {
        const response = await fetch(`/api/cards/${category}`)
            .then((data) => data.json());

        console.log('response is', response)
        return response;
    }
    catch (error) {
        console.log(error);
    }
});

// createCard
export const createCard = createAsyncThunk('/api/cards', async (card) => {
    let defaultHeader = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    }
    try {
        const response = await fetch('/api/cards', defaultHeader)
            .then((data) => data.json());
        return response;
    }
    catch (err) {
        console.log(err);
    }
})
// editCard
export const editCard = createAsyncThunk('/api/cards', async (id, card) => {
    let defaultHeader = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    }
    try {
        const response = await fetch(`/api/cards/${id}`, defaultHeader)
            .then((data) => data.json());
        return response;
    }
    catch (err) {
        console.log(err);
    }
})

// deleteCard
export const deleteCard = createAsyncThunk('/api/cards', async (id) => {
    let defaultHeader = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const response = await fetch(`/api/cards/${id}`, defaultHeader)
            .then((data) => data.json());
        return response;
    }
    catch (err) {
        console.log(err);
    }
});

function findIndex(target, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]._id === target) {
            return i;
        }
    }
}


export const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {},
    //Below reducers not necessary given our utilization of extra reducers!

    // addCard: (state, action) => {

    //     let newCard = {

    //         id: action.payload._id,
    //         data: {
    //             category: action.payload.category,
    //             question: action.payload.question,
    //             answer: action.payload.answer,
    //             hint: action.payload.hint
    //         }
    //     };

    //     state.cards.push(newCard);
    //     state.cards.card_total++;
    //     if (!state.categories.includes(action.payload.category)) {
    //         state.categories.push(action.payload.category)
    //     }
    // },

    // deleteCard: (state, action) => {

    //     const index = findIndex(action.payload._id, state.cards);
    //     state.cards = state.cards.slice(0, index).concat(state.cards.slice(index + 1));
    //     state.card_total--;

    // },

    // editCard: (state, action) => {
    //     const index = findIndex(action.payload._id, state.cards);
    //     const updatedCard = {

    //         id: action.payload._id,
    //         data: {
    //             category: action.payload.category,
    //             question: action.payload.question,
    //             answer: action.payload.answer,
    //             hint: action.payload.hint
    //         }
    //     };
    //     state.cards[index] = updatedCard;
    //     if(!state.categories.includes(action.payload.category)) {
    //         state.categories.push(action.payload.category)
    //     }
    // },

    // getCategoryCards: (state, action) => {
    //     //action.payload = array of card objects
    //     state.cards = action.payload;
    //     state.card_total = state.cards.length;
    // }

    extraReducers: {
        //--------------------- InitialState: isCatergoriesFetched --------------------------------------------------------------
        [getCategories.fulfilled]: (state, action) => {
            state.isCategoriesFetched = true;
            state.categories = action.payload;
        },
        [getCategories.pending]: (state, action) => {
            state.isCategoriesFetched = false;
        },
        [getCategories.rejected]: (state, action) => {
            state.isCategoriesFetched = false;
        },
        //---------------------- InitialState: areCardsFetched -----------------------------------------------------------
        [getCategoryCards.fulfilled]: (state, action) => {
            state.areCardsFetched = true;
            state.cards = action.payload;
        },

        [getCategoryCards.pending]: (state, action) => {
            state.areCardsFetched = false;
        },

        [getCategoryCards.rejected]: (state, action) => {
            state.areCardsFetched = false;
        },
        //------------------- InitialState: cards (created and added to the cards array)---------------------------------
        [createCard.fulfilled]: (state, action) => {
            let newCard = {
                id: action.payload._id,
                data: {
                    category: action.payload.category,
                    question: action.payload.question,
                    answer: action.payload.answer,
                    hint: action.payload.hint
                }
            };
            state.cards.push(newCard);
            state.cards.card_total++;
            if (!state.categories.includes(action.payload.category)) {
                state.categories.push(action.payload.category)
            }
        },
        //------------------- editCard Reducer -----------------------------------------------------------------------
        [editCard.fulfilled]: (state, action) => {
            console.log('action payload is', action.payload);
            const index = findIndex(action.payload._id, state.cards);
            const updatedCard = {

                id: action.payload._id,
                data: {
                    category: action.payload.category,
                    question: action.payload.question,
                    answer: action.payload.answer,
                    hint: action.payload.hint
                }
            };
            state.cards[index] = updatedCard;
            if (!state.categories.includes(action.payload.category)) {
                state.categories.push(action.payload.category)
            }
        },
        //------------------- deleteCard reducer -----------------------------------------------------------------------
        [deleteCard.fulfilled]: (state, action) => {
            const index = findIndex(action.payload._id, state.cards);
            state.cards = state.cards.slice(0, index).concat(state.cards.slice(index + 1));
            state.card_total--;
        }
    }
})

export default cardSlice.reducer;