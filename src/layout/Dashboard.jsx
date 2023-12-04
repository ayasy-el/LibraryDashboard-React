import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function OverviewPage() {
    const [resData, setResData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const {data: user} = JSON.parse(userData);
                axios.get("http://127.0.0.1:3000/API/auth.php", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                    .then((res) => {
                        setResData(res.data);
                    })
                    .catch(() => {
                        navigate('/login');
                    });
            } catch (error) {
                console.error('Invalid user data in localStorage:', error);
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const data = {
        id: resData?.id,
        name: resData?.name,
        email: resData?.email,
    }

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
                <Header data={data}/>
                <div className="container-fluid">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
