import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Formik, Form, FastField, ErrorMessage } from "formik";

BookForm.propTypes = {
    addBook: PropTypes.func,
    bookItem: PropTypes.object,
};

BookForm.defaultProps = {
    addBook: null,
    bookItem: null
}

function BookForm(props) {
    const {addBook, bookItem} = props
    const formValidation = yup.object().shape({
        title: yup.string().required("This field is required"),
        quantity: yup.number().min(1, "Quantity more than 0"),
    });
    const formikProps = {
        initialValues: {
            title: bookItem ? bookItem.title : "",
            quantity: bookItem ? bookItem.quantity : 0,
        },
        onSubmit: (values, {resetForm}) => {
            if (addBook) {
                addBook(values)
            }
            resetForm();
        },
        validationSchema: formValidation,
    };
    return (
        <Formik {...formikProps}>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <Form>
                        <h4 className="mb-3">Library</h4>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Tiêu đề</label>
                                <FastField
                                    name="title"
                                    type="text"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage
                                    component="div"
                                    className="text-danger"
                                    name="title"
                                ></ErrorMessage>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstname">Số lượng</label>
                                <FastField
                                    name="quantity"
                                    type="number"
                                    className="form-control"
                                ></FastField>
                                <ErrorMessage
                                    component="div"
                                    className="text-danger"
                                    name="quantity"
                                ></ErrorMessage>
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

export default BookForm;
