import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookList from './book-list';
import BookForm from './book-form';
import casual from "casual-browserify";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, updateBook } from './bookSlice';

BookManagement.propTypes = {
    
};

function BookManagement(props) {

    const bookList = useSelector(state => state.bookList)
    const dispatch = useDispatch()
    const [initialValue, setnitialValue] = useState({
        id: "",
        title: "",
        quantity: 0,
    })
    const [isAddBook, setIsAddBook] = useState(true)


    const submitBookForm = (value) => {
        if (value.id === '') {
            const id = casual.uuid
            const newBook = {...value, id: id}
            dispatch(addBook(newBook)) 
        }else{
            dispatch(updateBook(value))
        }            
    }    

    const editBook = (value) => {
        setIsAddBook(false)
        if (value) {
            setnitialValue(value) 
        }
    }

    const deleteCurrentBook = (value) => {
        dispatch(deleteBook(value))
    }
    return (
        <div>
            <BookForm key={initialValue} submitForm={submitBookForm} initialValue={initialValue}></BookForm>
            <BookList bookList={bookList} editBook={editBook} deleteBook={deleteCurrentBook}></BookList>
        </div>
    );
}

export default BookManagement;