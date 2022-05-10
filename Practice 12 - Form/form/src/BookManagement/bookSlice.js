import { createSlice } from "@reduxjs/toolkit";

const bookList = createSlice({
    name: 'bookList',
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
        deleteBook: (state, action) => {
            const index = state.findIndex(book => book.id === action.payload)
            state.splice(index, 1)
        },
        updateBook: (state, action) => {
            const index = state.findIndex(book => book.id === action.payload)
            if (index >= 0) {
                state[index] = action.payload
            }
        }
    }
})

const { reducer, actions } = bookList;
export const { addBook, deleteBook, updateBook } = actions;
export default reducer