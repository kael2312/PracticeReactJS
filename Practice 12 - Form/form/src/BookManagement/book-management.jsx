import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookList from './book-list';
import BookForm from './book-form';
import casual from "casual-browserify";

BookManagement.propTypes = {
    
};

function BookManagement(props) {

    const [bookList, setBookList] = useState([])
    const [bookItem, setBookItem] = useState({})

    const addBook = (value) => {
        const newBookList = [...bookList]
        const bookId = casual.uuid
        const book = {            
            bookId: bookId,
            title: value.title,
            quantity: value.quantity
        }

        newBookList.push(book)
        setBookList(newBookList)
    }

    const editBook = (value) => {
        setBookItem(value)
    }

    const deleteBook = (value) => {
        console.log(value);
    }
    return (
        <div>
            <BookForm addBook={addBook} bookItem={bookItem}></BookForm>
            <BookList bookList={bookList} editBook={editBook} deleteBook={deleteBook}></BookList>
        </div>
    );
}

export default BookManagement;