const dataUser = {
    name: 'John Due',
    img: "/images/profile/user-1.jpg"
};

function HamburgerMenu() {
    return (
        <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2"/>
            </a>
        </li>
    );
}

function Notification() {
    return (
        <li className="nav-item">
            <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                <i className="ti ti-bell-ringing"/>
                <div className="notification bg-primary rounded-circle"/>
            </a>
        </li>
    );
}

function UsernameElement() {
    return (
        <h5 className="m-0 fw-bolder cursor-pointer" href="javascript:void(0)" id="drop2"
            data-bs-toggle="dropdown" aria-expanded="false">
            {dataUser.name}
        </h5>
    );
}

function ProfileElement() {
    return (
        <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
           aria-expanded="false">
            <img src={dataUser.img} alt="" width={35} height={35} className="rounded-circle"/>
        </a>
    );
}

function DropdownUserItem({item}) {
    return (
        <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
            <i className={`ti ti-${item.icon} fs-6`}/>
            <p className="mb-0 fs-3">{item.title}</p>
        </a>
    );
}

function RightNav() {
    const configDropdownUser = [
        {
            title: 'My Profile',
            icon: 'user',
        },
        {
            title: 'Account Setting',
            icon: 'mail',
        },
        {
            title: 'Switch Account',
            icon: 'list-check',
        }
    ];

    const DropdownUser = configDropdownUser.map((item, idx) => (
        <DropdownUserItem key={idx} item={item}/>
    ));

    return (
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <UsernameElement/>
                <li className="nav-item dropdown">
                    <ProfileElement/>
                    <div
                        className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                        aria-labelledby="drop1"
                        data-bs-popper="static"
                    >
                        <div className="profile-dropdown position-relative" data-simplebar="init">
                            <div className="simplebar-wrapper" style={{margin: 0}}>
                                <div className="simplebar-height-auto-observer-wrapper">
                                    <div className="simplebar-height-auto-observer"/>
                                </div>
                                <div className="simplebar-mask">
                                    <div className="simplebar-offset" style={{right: 0, bottom: 0}}>
                                        <div
                                            className="simplebar-content-wrapper"
                                            tabIndex={0}
                                            role="region"
                                            aria-label="scrollable content"
                                            style={{height: "auto", overflow: "hidden"}}
                                        >
                                            <div className="simplebar-content" style={{padding: 0}}>
                                                <div className="py-3 px-7 pb-0">
                                                    <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
                                                </div>
                                                <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                                    <img
                                                        src="/images/profile/user-1.jpg"
                                                        className="rounded-circle"
                                                        width={80}
                                                        height={80}
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h5 className="mb-1 fs-3">John Due</h5>
                                                        <span className="mb-1 d-block">Librarian</span>
                                                        <p className="mb-0 d-flex align-items-center gap-2">
                                                            <i className="ti ti-mail fs-4"/> info@modernize.com
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="message-body">
                                                    <a
                                                        href="/profile"
                                                        className="py-8 px-7 mt-8 d-flex align-items-center"
                                                    >
                                                        <span
                                                            className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                                            <img
                                                                src="/images/user-profile.svg"
                                                                alt=""
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                        <div className="w-75 d-inline-block v-middle ps-3">
                                                            <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                                                My Profile
                                                            </h6>
                                                            <span className="fs-2 d-block text-body-secondary">
                                                                Account Settings
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="d-grid py-4 px-7 pt-8">
                                                    <a
                                                        href="/logout"
                                                        className="btn btn-outline-primary"
                                                    >
                                                        Log Out
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="simplebar-placeholder"
                                    style={{width: 360, height: 307}}
                                />
                            </div>
                            <div
                                className="simplebar-track simplebar-horizontal"
                                style={{visibility: "hidden"}}
                            >
                                <div
                                    className="simplebar-scrollbar"
                                    style={{width: 0, display: "none"}}
                                />
                            </div>
                            <div
                                className="simplebar-track simplebar-vertical"
                                style={{visibility: "hidden"}}
                            >
                                <div
                                    className="simplebar-scrollbar"
                                    style={{height: 0, display: "none"}}
                                />
                            </div>
                        </div>
                    </div>

                    {/*<div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">*/}
                    {/*    <div className="message-body">*/}
                    {/*        {DropdownUser}*/}
                    {/*        <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">*/}
                    {/*            Logout*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </li>
            </ul>
        </div>
    );
}

function LeftNav() {
    return (
        <ul className="navbar-nav">
            <HamburgerMenu/>
            <Notification/>
        </ul>
    );
}

function Header() {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <LeftNav/>
                <RightNav/>
            </nav>
        </header>
    );
}

export default Header;
