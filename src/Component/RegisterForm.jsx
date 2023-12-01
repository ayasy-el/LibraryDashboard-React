import React from 'react';
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <Link
                to="#submit"
                className="btn btn-primary w-100 py-8 mb-4 rounded-2"
            >
                Sign Up
            </Link>
            <div className="d-flex align-items-center">
                <p className="fs-4 mb-0 text-dark">Already have an Account?</p>
                <Link
                    className="text-primary fw-medium ms-2"
                    to="/login"
                >
                    Sign In
                </Link>
            </div>
        </form>
    );
};

export default RegisterForm;