import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

SignUpForm.propTypes = {};

function SignUpForm(props) {
    const formValidator = Yup.object().shape({
        username: Yup.string()
            .required("Please fill out all the fields!!!")
            .min(2, "Minimum 2 character")
            .matches(/^[A-Za-z]+$/, "Only contain A-Z and a-z"),
        email: Yup.string()
            .required("Please fill out all the fields!!!")
            .matches(/^([A-Za-z0-9+-])+@([A-Za-z0-9-])+\.([A-Za-z0-9-])+$/, 'Please enter a valid email address'),
        password: Yup.string()
            .required("Please fill out all the fields!!!")
            .matches(/^([A-Za-z0-9!@#$%^&+=._-])+$/, "Please enter a valid password")
            .min(6, "Minimum 6 character"),
        confirmPassword: Yup.string()
            .required("Please fill out all the fields!!!")
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const formikProps = {
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            if (values.username === '' || values.email === '' || values.password === '' || values.confirmPassword === '') {
                alert('Please fill out all the fields!!!')
            }else {
                alert("“Sign up successfully!!!”")
            }
        },
        validationSchema: formValidator
    }
    return (
        <Formik {...formikProps}>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <Form>
                        <h4 className="mb-3">Sign Up</h4>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Username</label>
                                <FastField
                                    name="username"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage component="div" className="text-danger" name="username"></ErrorMessage>
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
                                <label htmlFor="firstname">Password</label>
                                <FastField
                                    name="password"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage component="div" className="text-danger" name="password"></ErrorMessage>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Confirm password</label>
                                <FastField
                                    name="confirmPassword"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage component="div" className="text-danger" name="confirmPassword"></ErrorMessage>
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

export default SignUpForm;
