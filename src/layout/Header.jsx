import {Link, useNavigate} from "react-router-dom";

const dataUser = {
    name: 'John Due',
    img: "/images/profile/user-1.jpg"
};

function DropdownElement({data}) {
    const navigate = useNavigate()
    return (
        <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
            <div className="py-3 px-7 pb-0">
                <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
            </div>
            <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                <img src="/images/profile/user-1.jpg" className="rounded-circle" width={80}
                     height={80} alt=""/>
                <div className="ms-3">
                    <h5 className="mb-1 fs-3">{data.name}</h5>
                    <span className="mb-1 d-block">Librarian</span>
                    <p className="mb-0 d-flex align-items-center gap-2">
                        <i className="ti ti-mail fs-4"/> {data.email}
                    </p>
                </div>
            </div>
            <div className="message-body">
                <Link to="/account-setting" className="py-8 px-7 mt-8 d-flex align-items-center">
                    <span
                        className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                        <img src="/images/user-profile.svg" alt="" width={24} height={24}/>
                    </span>
                    <div className="w-75 d-inline-block v-middle ps-3">
                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                            My Profile
                        </h6>
                        <span className="fs-2 d-block text-body-secondary">
                            Account Settings
                        </span>
                    </div>
                </Link>
            </div>
            <div className="d-grid py-4 px-7 pt-8">
                <button onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/login')
                }} className="btn btn-outline-primary">
                    Log Out
                </button>
            </div>
        </div>
    )
}

function RightNav({data}) {
    const UsernameElement = () => (
        <h5 className="m-0 fw-bolder cursor-pointer" id="drop2"
            data-bs-toggle="dropdown" aria-expanded="false">
            {data.name}
        </h5>
    );
    const ProfileElement = () => (
        <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
           aria-expanded="false">
            <img src={dataUser.img} alt="" width={35} height={35} className="rounded-circle"/>
        </a>
    );

    return (
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <UsernameElement/>
                <li className="nav-item dropdown">
                    <ProfileElement/>
                    <DropdownElement data={data}/>
                </li>
            </ul>
        </div>
    );
}

function LeftNav() {
    const HamburgerMenu = () => (
        <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2"/>
            </a>
        </li>
    );
    const Notification = () => (
        <li className="nav-item">
            <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                <i className="ti ti-bell-ringing"/>
                <div className="notification bg-primary rounded-circle"/>
            </a>
        </li>
    );


    return (
        <ul className="navbar-nav">
            <HamburgerMenu/>
            <Notification/>
        </ul>
    );
}

function Header({data}) {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <LeftNav/>
                <RightNav data={data}/>
            </nav>
        </header>
    );
}

export default Header;
