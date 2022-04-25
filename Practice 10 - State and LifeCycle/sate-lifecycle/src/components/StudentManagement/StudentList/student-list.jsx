import React from "react";
import PropTypes from "prop-types";

StudentList.propTypes = {
    studentList: PropTypes.array,
};

StudentList.defaultProps = {
    studentList: [],
};

function StudentList({ studentList }) {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                {studentList.map((student) => {
                    return (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default StudentList;
