import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StudentList from './StudentList/student-list';
import StudentForm from './StudentForm/student-form';

Student.propTypes = {
    
};

function Student(props) {
    const [studentList, setStudentList] = useState([])

    const addStudent = (student) => {
        const newStudentList = [...studentList]
        newStudentList.push(student)
        setStudentList(newStudentList)
        console.log(student);
    }
    return (
        <div>
            <StudentList studentList={studentList}></StudentList>
            <StudentForm addStudent={addStudent}></StudentForm>
        </div>
    );
}

export default Student;