import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import {Outlet, Navigate} from "react-router-dom";
import {useAuthToken} from '../hooks/UseAuthToken.js'

export default function Dashboard() {
    const {user} = useAuthToken()

    // loading
    if (user === null) return

    // forbidden
    if (user === false)
        return <Navigate to='/login'/>

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
                <Header data={user}/>
                <div className="container-fluid">
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}
