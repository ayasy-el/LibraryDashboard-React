import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {apiUrl} from "../config.js";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState(false)
    const [validateMsg, setValidateMsg] = useState({email: '', password: ''})

    const navigate = useNavigate();


    const performLoginActions = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/');
    }

    useEffect(() => {
        if (Object.keys(validateMsg).length === 0) {

            axios.post(`${apiUrl}/login.php`, {
                email, password
            }).then((data) => {
                performLoginActions(data)
            }).catch(() => {
                setLoginError(true)
            })
        }
    }, [validateMsg]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};

        if (!email)
            errors.email = "email is required";

        if (!password)
            errors.password = "password is required";
        else if (password.length < 8)
            errors.password = "password  must be at least 8 characters long";

        setValidateMsg(errors)
    };

    return (
        <form onSubmit={handleSubmit} onChange={() => {
            setLoginError(false)
            setValidateMsg({email: '', password: ''})
        }}>
            {loginError && <div
                className="alert alert-dismissible alert-light-danger bg-danger-subtle text-danger fade show">
                <div className="d-flex align-items-center font-medium me-3 me-md-0">
                    <i className="ti ti-info-circle fs-5 me-2 text-danger"></i>
                    Your password or email is incorrect
                </div>
            </div>}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className={`form-control ${validateMsg.email && 'is-invalid'}`}
                    id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                    {validateMsg.email}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className={`form-control ${validateMsg.password && 'is-invalid'}`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="invalid-feedback">
                    {validateMsg.password}
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <Link
                    className="text-primary fw-medium"
                    to="#"
                >
                    Forgot Password?
                </Link>
            </div>
            <button
                type="submit"
                className="btn btn-primary w-100 py-2 mb-4 rounded-2"
            >
                Sign In
            </button>
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
