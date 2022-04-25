import React, { useState } from 'react';
import PropTypes from 'prop-types';

StudentForm.propTypes = {
    addStudent: PropTypes.func
};

StudentForm.defaultProps = {
    addStudent: null
}

function StudentForm({addStudent}) {
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const onSubmitForm = (e) => {
        e.preventDefault();
        const student = {
            name: name,
            phone: phone,
            email: email
        }
        if (addStudent) {
            addStudent(student)
        }
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={onNameChange} />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" onChange={onPhoneChange} />
                </div>
                <div>
                    <label htmlFor="" >Email</label>
                    <input type="text" onChange={onEmailChange} />
                </div>
                <button onClick={onSubmitForm} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;