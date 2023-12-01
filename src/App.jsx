import './assets/scss/styles.scss'
import './assets/js/main.js'

import {Routes, Route} from "react-router-dom";

import Overview from "./layout/DashboardPage/OverviewPage.jsx";
import Dashboard from "./layout/Dashboard.jsx";
import BooksTable from "./layout/DashboardPage/BooksTableView.jsx";
import MembersTable from "./layout/DashboardPage/MembersTableView.jsx";
import Auth from "./layout/Auth.jsx";
import AccountSetting from "./layout/AccountSetting.jsx";

function App() {
    return (
        <Routes>
            <Route path='/login' element={<Auth type='login'/>}/>
            <Route path='/register' element={<Auth type='register'/>}/>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Overview/>}/>
                <Route path={'/account-setting'} element={<AccountSetting/>}/>
                <Route path={'/books'} element={<BooksTable/>}/>
                <Route path={'/members'} element={<MembersTable/>}/>
            </Route>
        </Routes>
    )
}

export default App
