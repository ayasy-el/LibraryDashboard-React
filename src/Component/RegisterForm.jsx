import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {apiUrl} from "../config.js";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerError, setRegisterError] = useState(false)
    const [validateMsg, setValidateMsg] = useState({name: '', email: '', password: ''})

    const navigate = useNavigate();

    const performLoginActions = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/');
    }

    useEffect(() => {
        if (Object.keys(validateMsg).length === 0) {

            axios.post(`${apiUrl}/register.php`, {
                name, email, password
            }).then((data) => {
                performLoginActions(data)
            }).catch(() => {
                setRegisterError(true)
            })
        }
    }, [validateMsg]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};

        if (!name)
            errors.name = "name is required";
        else if (name.length < 3)
            errors.name = "email must be at least 3 characters long";


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
            setRegisterError(false)
            setValidateMsg({email: '', name: '', password: ''})
        }}>
            {registerError && <div
                className="alert alert-dismissible alert-light-danger bg-danger-subtle text-danger fade show">
                <div className="d-flex align-items-center font-medium me-3 me-md-0">
                    <i className="ti ti-info-circle fs-5 me-2 text-danger"></i>
                    This E-mail already in use!
                </div>
            </div>}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className={`form-control ${validateMsg.name && 'is-invalid'}`}
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="textHelp"
                />
                <div className="invalid-feedback">
                    {validateMsg.name}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
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
            <button
                type="submit"
                className="btn btn-primary w-100 py-2 mb-4 rounded-2"
            >
                Sign Up
            </button>
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