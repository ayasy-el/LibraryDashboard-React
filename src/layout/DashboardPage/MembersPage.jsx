import React from 'react';
import style from "../../assets/css/Table.module.css";
import {useTableLogic} from "../../Component/FilterTableLib.js";

const membersData = [
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
        "name": "John Doe",
        "memberId": "M001",
        "email": "johndoe@example.com",
        "phone": "+1234567890",
        "status": "borrowing"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-3.jpg",
        "name": "Jane Smith",
        "memberId": "M002",
        "email": "janesmith@example.com",
        "phone": "+1987654321",
        "status": "not borrowing"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg",
        "name": "Alice Johnson",
        "memberId": "M003",
        "email": "alicejohnson@example.com",
        "phone": "+1122334455",
        "status": "overdue"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg",
        "name": "Michael Brown",
        "memberId": "M004",
        "email": "michaelbrown@example.com",
        "phone": "+1654321890",
        "status": "not borrowing"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-2.jpg",
        "name": "Eliza Emily",
        "memberId": "M005",
        "email": "emilydavis@example.com",
        "phone": "+1789456231",
        "status": "borrowing"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-5.jpg",
        "name": "David Wilson",
        "memberId": "M006",
        "email": "davidwilson@example.com",
        "phone": "+1908765432",
        "status": "not borrowing"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-6.jpg",
        "name": "Sophia Martinez",
        "memberId": "M007",
        "email": "sophiamartinez@example.com",
        "phone": "+1543210987",
        "status": "overdue"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg",
        "name": "James Lee",
        "memberId": "M008",
        "email": "jameslee@example.com",
        "phone": "+1324354657",
        "status": "not borrowing"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-6.jpg",
        "name": "Olivia Garcia",
        "memberId": "M009",
        "email": "oliviagarcia@example.com",
        "phone": "+1876543210",
        "status": "overdue"
    },
    {
        "img": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg",
        "name": "William Rodriguez",
        "memberId": "M010",
        "email": "williamrodriguez@example.com",
        "phone": "+1987654321",
        "status": "not borrowing"
    }
];

function MembersPage() {
    const {
        search,
        sortedData,
        sortBy,
        reverseSortDirection,
        setSorting,
        handleSearchChange,
    } = useTableLogic(membersData);

    const rows = sortedData.map((row, index) => (
        <tr key={index}>
            <td><img className='rounded-circle' src={row.img} alt={row.name} width={40} height={40}/></td>
            <td className='text-start'>
                <h6 className="fw-semibold mb-1">{row.name}</h6>
                <p className="mb-0 fs-2 text-muted">{row.memberId}</p>
            </td>
            <td><p className="mb-0 fs-3 text-dark">{row.email}</p></td>
            <td><p className="mb-0 fs-3 text-dark">{row.phone}</p></td>
            <td>
                <span
                    className={`badge fw-semibold py-1 w-85 bg-${row.status.toLowerCase() === 'not borrowing' ? 'success' : (row.status.toLowerCase() === 'borrowing' ? 'primary' : 'danger')}-subtle text-${row.status.toLowerCase() === 'not borrowing' ? 'success' : (row.status.toLowerCase() === 'borrowing' ? 'primary' : 'danger')}`}>{row.status}</span>
            </td>
            <td>
                <button className='btn me-2 btn-light'>
                    <i className='ti ti-edit fs-6'></i>
                </button>
                <button className='btn me-2 btn-light'>
                    <i className='ti ti-trash fs-6'></i>
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="container mt-2">
            <h2 className='text-center mb-4 fw-bolder'>All Members</h2>
            <div className="input-group border rounded-3 mb-4">
                <span className="input-group-text bg-transparent px-6 border-0">
                    <i className="ti ti-search fs-6"></i>
                </span>
                <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search by any field"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <div className={`${style.tableView} table-responsive rounded-2 mb-4`}>
                <table className="table align-middle text-nowrap mb-0 table-hover">
                    <thead>
                    <tr className='text-muted fw-semibold'>
                        <th className={style.tHeader} colSpan={2} onClick={() => setSorting('name')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Name</span>
                                <i className={`ti ti-${sortBy === 'name' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.tHeader} onClick={() => setSorting('email')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Email</span>
                                <i className={`ti ti-${sortBy === 'email' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.tHeader} onClick={() => setSorting('phone')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Phone</span>
                                <i className={`ti ti-${sortBy === 'phone' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.tHeader} onClick={() => setSorting('status')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Status</span>
                                <i className={`ti ti-${sortBy === 'status' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.tHeader}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <tr>
                            <td colSpan={Object.keys(membersData[0]).length}>Nothing found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MembersPage;
