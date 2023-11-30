import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function OverviewPage() {
    return (
        <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
            <Sidebar/>
            <div className="body-wrapper">
                <Header/>
                <div className="container-fluid">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}