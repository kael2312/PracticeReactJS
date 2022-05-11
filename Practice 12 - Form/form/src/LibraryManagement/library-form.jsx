import React from 'react';
import PropTypes from 'prop-types';
import * as yup from "yup";
import { Formik, Form, FastField, ErrorMessage } from "formik";

LibraryForm.propTypes = {
    
};

function LibraryForm(props) {
    
    const { submitForm, initialFormValue } = props;

    const formValidation = yup.object().shape({
        title: yup.string().required("This field is required"),
        quantity: yup.number()
            .required("This field is required")
            .min(1, "Quantity more than 0"),
    });    

    return (
        <Formik
            enableReinitialize={true} // Khi các giá trị trên form thay đổi sẽ re render lại form
            initialValues={initialFormValue} // Các giá trị init trên Form sẽ được nhận từ component LibraryManagement qua props
            onSubmit={(values, { resetForm }) => {
                    if (submitForm) {
                        submitForm(values); // Gửi các giá trị trên form cho component LibraryManagement qua props
                    }
                resetForm(); // Khi submit xong thì xóa các giá trị trên form
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

export default LibraryForm;