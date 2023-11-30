import './assets/scss/styles.scss'
import './assets/js/main.js'

import {Routes, Route} from "react-router-dom";

import Sidebar from './layout/Sidebar.jsx'
import Overview from "./Page/OverviewPage.jsx";
import Content2 from "./Page/Content2.jsx";

function App() {
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
            <Routes>
                <Route path='/' element={<Overview/>}/>
                <Route path={'/books'} element={<Content2/>}/>
            </Routes>

        </div>
    )
}

export default App
