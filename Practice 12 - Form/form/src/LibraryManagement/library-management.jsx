import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LibraryForm from './library-form';
import LibraryList from './library-list';
import casual from "casual-browserify";


LibraryManagement.propTypes = {
    
};

function LibraryManagement(props) {

    // Khởi tạo state danh sách Book
    const [bookList, setBookList] = useState([]) 

    // Khởi tạo state các giá trị trên form
    const [initialFormValue, setInitialFormValue] = useState({
        id: "",
        title: "",
        quantity: 0,
    })

    const submitBookForm = (bookObject) => {
        // Kiểm tra id trong bookObject có giá trị hay chưa, nếu chưa có thì thêm mới, nếu có id thì là update
        if (bookObject.id === '') {
            // Thêm mới book 
            const id = casual.uuid // sử dụng thư viện "casual-browserify" để tạo ra ngẫu nhiên id bất kỳ
            const newBook = {...bookObject, id: id}
            const newBookList = [...bookList] // clone ra mảng mới trước khi thao tác trên mảng
            newBookList.push(newBook)
            setBookList(newBookList)
        }else{
            // Update book
            const index = bookList.findIndex(book => book.id === bookObject.id) // tìm ra vị trí của book cần update trong bookList
            if (index >= 0) {
                const newBookList = [...bookList] // clone ra mảng mới trước khi thao tác trên mảng
                newBookList[index] = bookObject // thay thế giá trị của book mới vào vị trí cần update trong bookList
                setBookList(newBookList)
            }
        }
    }    

    // Khi người dùng click nút edit sẽ truyền theo giá trị book cần update
    const editBook = (value) => {
        if (value) {
            // Set lại các giá trị lấy được vào state
            setInitialFormValue(value) 
        }
    }

    const deleteCurrentBook = (bookId) => {
        // Delete book
        const index = bookList.findIndex(book => book.id === bookId) // tìm ra vị trí của book cần delete trong bookList
        const newBookList = [...bookList] // clone ra mảng mới trước khi thao tác trên mảng
        newBookList.splice(index, 1) // Xóa đi phần tử tại vị trí index vừa tìm được
        setBookList(newBookList)
    }
    return (
        <div>
            <LibraryForm  submitForm={submitBookForm} initialFormValue={initialFormValue}></LibraryForm>
            <LibraryList bookList={bookList} editBook={editBook} deleteBook={deleteCurrentBook}></LibraryList>
        </div>
    );
}

export default LibraryManagement;