import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookList from './book-list';
import BookForm from './book-form';
import casual from "casual-browserify";
import { useDispatch, useSelector } from "react-redux";

BookManagement.propTypes = {
    
};

function BookManagement(props) {

    const bookList = useSelector(state => state.bookList)
    const dispatch = useDispatch()



    const addBook = (value) => {
        const id = casual.uuid
        const newBook = {...value, id: id}
        dispatch(addBook(newBook))       
    }

    

    const editBook = (value) => {
        
    }

    const deleteBook = (value) => {
        
    }
    return (
        <div>
            <BookForm addBook={addBook}></BookForm>
            <BookList bookList={bookList} editBook={editBook} deleteBook={deleteBook}></BookList>
        </div>
    );
}

export default BookManagement;