import React from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
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
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                    <input
                        className="form-check-input primary"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked"
                        defaultChecked=""
                    />
                    <label
                        className="form-check-label text-dark"
                        htmlFor="flexCheckChecked"
                    >
                        Remeber this Device
                    </label>
                </div>
                <Link
                    className="text-primary fw-medium"
                    to="#"
                >
                    Forgot Password ?
                </Link>
            </div>
            <Link
                to="#submit"
                className="btn btn-primary w-100 py-8 mb-4 rounded-2"
            >
                Sign In
            </Link>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">New Librarian?</p>
                <Link
                    className="text-primary fw-medium ms-2"
                    to="/register"
                >
                    Create an account
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;