import React from "react";
import PropTypes from "prop-types";

BookList.propTypes = {
    bookList: PropTypes.array,
    editBook: PropTypes.func,
    deleteBook: PropTypes.func
};

BookList.defaultProps = {
    bookList: [],
    editBook: null,
    deleteBook: null,
};

function BookList(props) {
    const { bookList, editBook, deleteBook } = props;

    const onEditBook = (bookId) => {
        if (editBook) {
            editBook(bookId)
        }
    }

    const onDeleteBook = (bookId) => {
        if (deleteBook) {
            deleteBook(bookId)
        }
    }
    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Number</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book) => {
                                return (
                                    <tr key={book.bookId}>
                                        <td>{book.title}</td>
                                        <td>{book.quantity}</td>
                                        <td>
                                            <button className="btn btn-warning mr-2" onClick={() => {onEditBook(book.bookId)}}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => {onDeleteBook(book.bookId)}}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BookList;
