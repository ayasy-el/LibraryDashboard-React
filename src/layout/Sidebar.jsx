import {Link, NavLink} from "react-router-dom";
import {toggleSidebar, setSidebarType} from "../Component/sidebarToggler.js";
import {useEffect} from "react";

const navConfig = [
    {
        title: "dashboard",
        type: "divider",
    },
    {
        title: "Overview",
        type: "link",
        path: "/",
        icon: "device-analytics",
    },
    {
        title: "Books",
        type: "link",
        path: "/books",
        icon: "library",
    },
    {
        title: "Members",
        type: "link",
        path: "/members",
        icon: "users",
    },
    {
        title: "",
        type: "divider",
    },
    {
        title: "Lend Book",
        path: "/lend-book",
        icon: "book",
    },
    {
        title: "Add Member",
        path: "/add-member",
        icon: "user-plus",
    },
    {
        title: "Add Books",
        path: "/add-book",
        icon: "book-upload",
    },
];

function DividerItem({title}) {
    return (
        <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4"/>
            <span className="hide-menu">{title}</span>
        </li>
    );
}

function SidebarLink({item}) {
    return (
        <li className="sidebar-item">
            <NavLink
                className={`sidebar-link ${({isActive}) =>
                    isActive ? "selected" : ""}`}
                to={item.path}
                aria-expanded="false"
            >
                <span>
                    <i className={`ti ti-${item.icon}`}/>
                </span>
                <span className="hide-menu">{item.title}</span>
            </NavLink>
        </li>
    );
}

function NavHead() {

    useEffect(() => {
        setSidebarType();
        window.addEventListener('resize', setSidebarType);

        return () => {
            window.removeEventListener('resize', setSidebarType);
        };
    }, []);

    return (
        <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img">
                <img src="/images/logos/dark-logo.svg" width={180} alt=""/>
            </Link>
            <div
                onClick={toggleSidebar}
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
            >
                <i className="ti ti-x fs-8"/>
            </div>
        </div>
    );
}

function NavItems() {
    return navConfig.map((item, idx) =>
        item.type === "divider" ? (
            <DividerItem key={idx} title={item.title}/>
        ) : (
            <SidebarLink key={idx} item={item}/>
        )
    );
}

export default function Sidebar() {
    return (
        <aside className="left-sidebar">
            <NavHead/>
            <nav className="sidebar-nav scroll-sidebar">
                <ul id="sidebarnav">
                    <NavItems/>
                </ul>
            </nav>
        </aside>
    );
}
