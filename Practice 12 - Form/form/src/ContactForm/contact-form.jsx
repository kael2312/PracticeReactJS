import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup'
import {Formik, Form, FastField, ErrorMessage} from 'formik'

ContactForm.propTypes = {
    
};

function ContactForm(props) {
    const formValidation = yup.object().shape({
        name: yup.string()
            .required('Required'),
        email: yup.string()
            .required('Required')
            .matches(/^([A-Za-z0-9+-])+@([A-Za-z0-9-])+\.([A-Za-z0-9-])+$/, "Invalid email"),
        phone: yup.string()
            .required('Required')
        
    })
    const formikProps = {
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        onSubmit: (values) => {
            alert('Add contact successfully!!!')
        },
        validationSchema: formValidation
    }
    return (
        <Formik {...formikProps}>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <Form>
                        <h4 className="mb-3">Contact Form</h4>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Name</label>
                                <FastField
                                    name="name"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage component="div" className="text-danger" name="name"></ErrorMessage>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Email</label>
                                <FastField
                                    name="email"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage component="div" className="text-danger" name="email"></ErrorMessage>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">phone</label>
                                <FastField
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage component="div" className="text-danger" name="phone"></ErrorMessage>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Message</label>
                                <FastField
                                    name="message"
                                    type="text"
                                    className="form-control"
                                    as="textarea"
                                ></FastField>
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                        >
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </Formik>
    );
}

export default ContactForm;