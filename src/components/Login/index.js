import React from 'react';
import { withRouter } from 'react-router'

import { withFormik } from "formik";
import Yup from "yup";
import {MyProvider} from "./../../context";

import "./scss/Login.scss"; 
import LoginConnect from "./connect/LoginConnect";
import LoginForm from "./form/LoginForm";

const LoginWrapper = ({ values, errors, touched, isSubmitting }) => (
    <MyProvider>
      <LoginForm values={values} errors={errors} touched={touched} isSubmitting={isSubmitting} />
    </MyProvider>
);

const MyForm = withRouter(LoginWrapper);

const LoginIndex = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email("Email not valid")
        .required("Email not valid"),
        password: Yup.string()
        .min(5, "Password must be 5 characters or longer")
        .required("Password is required")
    }),
    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
        const { history } = props;
        
        setTimeout(() => {
        
            //setErrors({ email: "That email is already taken" });
            const connect = new LoginConnect(values, history);
            connect.requestHttp();
            resetForm();
            setSubmitting(false);

        }, 2000);
    }
})(MyForm);

export default LoginIndex;