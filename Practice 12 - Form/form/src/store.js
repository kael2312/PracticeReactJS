import { configureStore } from "@reduxjs/toolkit";
import bookListReducer  from "./BookManagement/bookSlice";

const store = configureStore({
    reducer: {
        bookList: bookListReducer
    }
})

export default store