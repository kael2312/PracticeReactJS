import React, { useEffect } from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Formik, Form, FastField, ErrorMessage } from "formik";

BookForm.propTypes = {
    submitForm: PropTypes.func,
    initialValues: PropTypes.object,
};

BookForm.defaultProps = {
    submitForm: null,
    initialValues: {
        id: "",
        title: "",
        quantity: 0,
    },
};

function BookForm(props) {
    const { submitForm, initialValue } = props;
    const formValidation = yup.object().shape({
        title: yup.string().required("This field is required"),
        quantity: yup.number().min(1, "Quantity more than 0"),
    });

    

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValue}
            onSubmit={(values, { resetForm }) => {
                    if (submitForm) {
                        submitForm(values);
                    }
                resetForm();
            }}
            validationSchema={formValidation}
        >
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
