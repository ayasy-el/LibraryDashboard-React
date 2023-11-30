const dataUser = {
    name: 'John Due',
    img: "/images/profile/user-1.jpg"
}


function LeftNav() {
    return <ul className="navbar-nav">
        {/* Hamburger Menu */}
        <li className="nav-item d-block d-xl-none">
            <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2"/>
            </a>
        </li>

        {/*  Notification  */}
        <li className="nav-item">
            <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                <i className="ti ti-bell-ringing"/>
                <div className="notification bg-primary rounded-circle"/>
            </a>
        </li>
    </ul>
}

function RightNav() {
    const UsernameElement = (
        <h5 className="m-0 fw-bolder cursor-pointer" href="javascript:void(0)" id="drop2"
            data-bs-toggle="dropdown" aria-expanded="false">{dataUser.name}</h5>
    )

    const ProfileElement = (
        <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
           aria-expanded="false">
            <img src={dataUser.img} alt="" width={35} height={35} className="rounded-circle"/>
        </a>
    )


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
    ]


    const DropdownUser = configDropdownUser.map((item, idx) => (
        <a href="javascript:void(0)" key={idx} className="d-flex align-items-center gap-2 dropdown-item">
            <i className={`ti ti-${item.icon} fs-6`}/>
            <p className="mb-0 fs-3">{item.title}</p>
        </a>
    ))


    return (
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                {UsernameElement}
                <li className="nav-item dropdown">
                    {ProfileElement}
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                        <div className="message-body">
                            {DropdownUser}
                            <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">
                                Logout
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default function Header() {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <LeftNav/>
                <RightNav/>
            </nav>
        </header>
    )
}