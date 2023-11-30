export default function Content() {
    return (
        <div className="body-wrapper">
            {/*  Header Start */}
            <header className="app-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item d-block d-xl-none">
                            <a
                                className="nav-link sidebartoggler nav-icon-hover"
                                id="headerCollapse"
                                href="javascript:void(0)"
                            >
                                <i className="ti ti-menu-2"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                                <i className="ti ti-bell-ringing"/>
                                <div className="notification bg-primary rounded-circle"/>
                            </a>
                        </li>
                    </ul>
                    <div
                        className="navbar-collapse justify-content-end px-0"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                            <a
                                href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/"
                                target="_blank"
                                className="btn btn-primary" rel="noreferrer"
                            >
                                Download Free
                            </a>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link nav-icon-hover"
                                    href="javascript:void(0)"
                                    id="drop2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="/images/profile/user-1.jpg"
                                        alt=""
                                        width={35}
                                        height={35}
                                        className="rounded-circle"
                                    />
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                                    aria-labelledby="drop2"
                                >
                                    <div className="message-body">
                                        <a
                                            href="javascript:void(0)"
                                            className="d-flex align-items-center gap-2 dropdown-item"
                                        >
                                            <i className="ti ti-user fs-6"/>
                                            <p className="mb-0 fs-3">My Profile</p>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="d-flex align-items-center gap-2 dropdown-item"
                                        >
                                            <i className="ti ti-mail fs-6"/>
                                            <p className="mb-0 fs-3">My Account</p>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="d-flex align-items-center gap-2 dropdown-item"
                                        >
                                            <i className="ti ti-list-check fs-6"/>
                                            <p className="mb-0 fs-3">My Task</p>
                                        </a>
                                        <a
                                            href="./authentication-login.html"
                                            className="btn btn-outline-primary mx-3 mt-2 d-block"
                                        >
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/*  Header End */}
            <div className="container-fluid">
                <div className="row">
                    <h3 className="fw-bolder fs-8 mb-9 py-9">Book Of the Month</h3>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s4.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">Boat Headphone</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $50{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$65</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s5.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">MacBook Air Pro</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $650{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$900</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s7.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">Red Valvet Dress</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $150{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$200</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s11.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">Cute Soft Teddybear</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $285{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$345</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}