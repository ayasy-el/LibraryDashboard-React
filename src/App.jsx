import './assets/scss/styles.scss'
import './assets/js/main.js'

import {Routes, Route} from "react-router-dom";

import Overview from "./layout/DashboardPage/OverviewPage.jsx";
import Dashboard from "./layout/Dashboard.jsx";
import BooksTable from "./layout/DashboardPage/BooksTableView.jsx";
import MembersTable from "./layout/DashboardPage/MembersTableView.jsx";
import Auth from "./layout/Auth.jsx";
import AccountSetting from "./layout/DashboardPage/AccountSetting.jsx";
import AddBook from "./layout/DashboardPage/AddBook.jsx";
import MemberEdit from "./layout/DashboardPage/AddMember.jsx";
import AddMember from "./layout/DashboardPage/Member2.jsx";
import StepForm from "./layout/DashboardPage/LendBook.jsx";
import TestTable from "./layout/DashboardPage/TestTable.jsx";

function App() {
    return (
        <Routes>
            <Route path='/login' element={<Auth type='login'/>}/>
            <Route path='/register' element={<Auth type='register'/>}/>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Overview/>}/>
                <Route path={'/account-setting'} element={<AccountSetting/>}/>
                <Route path={'/books'} element={<BooksTable/>}/>
                <Route path={'/add-book'} element={<AddBook/>}/>
                <Route path={'/members'} element={<MembersTable/>}/>
                <Route path={'/add-member'} element={<AddMember/>}/>
                <Route path={'/edit-member'} element={<MemberEdit/>}/>
                <Route path={'/lend-book'} element={<StepForm/>}/>
                <Route path={'/test'} element={<TestTable/>}/>
            </Route>
        </Routes>
    )
}

export default App
