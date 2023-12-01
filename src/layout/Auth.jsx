import LoginForm from "../Component/LoginForm.jsx";
import RegisterForm from "../Component/RegisterForm.jsx";
import {Link} from "react-router-dom";

function Auth({type}) {
    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
            <div className="position-relative z-index-5">
                <div className="row">
                    <div className="col-xl-7 col-xxl-8">
                        <Link to="/" className="text-nowrap logo-img d-block px-4 py-9 w-100">
                            <img
                                src="/images/logos/dark-logo.svg"
                                className="dark-logo"
                                alt="Logo-Dark"
                            />
                        </Link>
                        <div className="d-none d-xl-flex align-items-center justify-content-center"
                             style={{height: "calc(100vh - 80px)"}}>
                            <img
                                src="/images/backgrounds/login-security.svg"
                                alt=""
                                className="img-fluid"
                                width={800}
                            />
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-4">
                        <div
                            className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                            <div className="col-sm-8 col-md-6 col-xl-9">
                                <h2 className="mb-3 fs-7 fw-bolder">Welcome to Modernize</h2>
                                <p className=" mb-9">Your Admin Dashboard</p>
                                {type === 'login' ? <LoginForm/> : <RegisterForm/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth