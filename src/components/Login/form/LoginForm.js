import React, { Component } from "react";

import { Form, Field } from "formik";
import {MasterContext} from "./../../../context/index";

class LoginForm extends Component {
  static contextType = MasterContext;

  render() {
    return (
      <React.Fragment>
        <div className="page-content--bge5 login">
            <div className="container">
                <div className="login__login-wrap">
                    <div className="login__login-content">
                        <div className="login__login-logo">
                            <a href="#/">
                                <img src="images/icon/logo.png" alt="Client Starter" />
                            </a>
                        </div>
                        <div className="login__login-form">
                            <Form className="form_fields">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <Field type="email" name="email" placeholder="Email" className="au-input au-input--full" />
                                    {this.props.touched.email && this.props.errors.email && <p className="login--error">{this.props.errors.email}</p>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field type="password" name="password" placeholder="Password" className="au-input au-input--full" />
                                    {this.props.touched.password && this.props.errors.password && <p className="login--error">{this.props.errors.password}</p>}
                                </div>
                                <div className="login__login-checkbox" style={{display:'none'}}>
                                    <label>
                                        <input type="checkbox" name="remember" />Remember Me
                                    </label>
                                    <label>
                                        <a href="#/">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button type="submit" disabled={this.props.isSubmitting} className="au-btn au-btn--block au-btn--green m-b-20">
                                  sign in
                                </button>
                            </Form>
                            <div className="login__register-link" style={{display:'none'}}>
                                <p>
                                    Don't you have account?
                                    <a href="#/">Sign Up Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;