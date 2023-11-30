import {Link} from "react-router-dom";

const navConfig = [
    {
        title: 'dashboard',
        type: 'divider',
    },
    {
        title: 'Overview',
        type: 'link',
        path: '/',
        icon: 'device-analytics',
    },
    {
        title: 'Books',
        type: 'link',
        path: '/books',
        icon: 'library',
    },
    {
        title: 'Members',
        type: 'link',
        path: '/members',
        icon: 'users',
    },
    {
        title: 'dashboard',
        type: 'divider',
    },
    {
        title: 'user',
        path: '/user',
        icon: 'affiliate-filled',
    }
];

function NavHead() {
    return (
        <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img">
                <img src="/images/logos/dark-logo.svg" width={180} alt=""/>
            </Link>
            <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
            >
                <i className="ti ti-x fs-8"/>
            </div>
        </div>
    )
}

function NavItems() {
    return navConfig.map((item, idx) => (
        item.type === 'divider' ?
            <li key={idx} className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"/>
                <span className="hide-menu">{item.title}</span>
            </li> : <li key={idx} className="sidebar-item">
                <Link
                    className="sidebar-link"
                    to={item.path}
                    aria-expanded="false"
                >
                    <span>
                        <i className={`ti ti-${item.icon}`}/>
                    </span>
                    <span className="hide-menu">{item.title}</span>
                </Link>
            </li>
    ))
}

export default function Sidebar() {
    return (
        <aside className="left-sidebar">
            <NavHead/>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                <ul id="sidebarnav">
                    <NavItems/>
                </ul>
            </nav>
        </aside>
    )
}
