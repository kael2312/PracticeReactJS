import React from "react";
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table'

Students.propTypes = {
    studentList: PropTypes.array,
};

Students.defaultProps = {
    studentList: [],
};

function Students({ studentList }) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student) => {
                        return <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                })}
            </tbody>
        </Table>
    );
}

export default Students;
