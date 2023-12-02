import React, {useState} from 'react';
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
const booksData = [
    {
        thumbnail: '/images/products/s1.jpg',
        title: 'Book Title 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        category: 'Sains',
        bookId: 'SA0001',
        isbn: 'ISBN001',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s4.jpg',
        title: 'Book Title 2',
        author: 'Author 2',
        publisher: 'Publisher 2',
        category: 'Lifestyle',
        isbn: 'ISBN002',
        bookId: 'LI0002',
        status: 'Borrowed',
    },
    {
        thumbnail: '/images/products/s5.jpg',
        title: 'Book Title 3',
        author: 'Author 1',
        publisher: 'Publisher 1',
        category: 'Computer',
        isbn: 'ISBN001',
        bookId: 'CO0003',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s7.jpg',
        title: 'Book Title 4',
        author: 'Author 2',
        publisher: 'Publisher 2',
        category: 'Social',
        isbn: 'ISBN002',
        bookId: 'SO0004',
        status: 'Borrowed',
    },
    {
        thumbnail: '/images/products/s11.jpg',
        title: 'Book Title 5',
        author: 'Author 1',
        publisher: 'Publisher 1',
        category: 'Social',
        bookId: 'SO0005',
        isbn: 'ISBN001',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s4.jpg',
        title: 'Book Title 6',
        author: 'Author 2',
        publisher: 'Publisher 2',
        category: 'Social',
        isbn: 'ISBN002',
        bookId: 'SO0006',
        status: 'Borrowed',
    },
];

function Members({search, handleSearchChange, setSorting, reverseSortDirection, sortBy, rows, selectMember}) {
    return <div className="mt-5">
        <div className='d-flex gap-5 justify-content-center'>
            <h3 className='fw-bolder'>Member Id</h3>
            <input
                type="text"
                className="form-control w-50 mb-3"
                id="memberId"
                name="memberId"
                value={selectMember}
                // onChange={handleInputChange}
                disabled={true}
            />
        </div>
        {/*{errors.memberId && <span className="error-message">{errors.memberId}</span>}*/}
        <div className="input-group mb-4 border rounded-3">
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

        <div className={`${style.tableView} table-responsive w-100 rounded-2 mb-4`}>
            <table className="table align-middle text-nowrap mb-0 table-hover">
                <thead>
                <tr className='text-muted fw-semibold'>
                    <th className={style.tHeader} colSpan={2} onClick={() => setSorting('name')}>
                        <div className="table-header d-flex justify-content-evenly">
                            <span>Name</span>
                            <i className={`ti ti-${sortBy === 'name' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                        </div>
                    </th>
                    <th className={style.tHeader} onClick={() => setSorting('memberId')}>
                        <div className="table-header d-flex justify-content-evenly">
                            <span>memberId</span>
                            <i className={`ti ti-${sortBy === 'memberId' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                        </div>
                    </th>
                    <th className={style.tHeader}>
                        <div className="table-header d-flex justify-content-evenly">
                            <span>Select</span>
                        </div>
                    </th>
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
}

const StepForm = () => {
    const {
        search,
        sortedData,
        sortBy,
        reverseSortDirection,
        setSorting,
        handleSearchChange,
    } = useTableLogic(membersData);
    const [selectMember, setSelectMember] = useState('')

    const handleRadioChange = (event) => {
        const {value} = event.target
        setSelectMember(value)
    }

    const rows = sortedData.map((row, index) => (
        <tr key={index}>
            <td><img className='rounded-circle' src={row.img} alt={row.name} width={40} height={40}/></td>
            <td><h6 className="fw-semibold mb-1">{row.name}</h6></td>
            <td><p className="mb-0 fs-3 text-dark">{row.memberId}</p></td>
            <td>
                <label className={`btn me-2 ${selectMember === row.memberId ? 'btn-light' : 'btn-primary'}`}>
                    {selectMember === row.memberId ? 'Selected' : 'Select'}
                    <input
                        type='radio'
                        className='d-none'
                        name='select'
                        value={row.memberId}
                        onChange={handleRadioChange}
                    />
                </label>
            </td>
        </tr>
    ))

    return (
        <div className="card">
            <h2 className='fw-bolder text-center mt-5'>Lend a Book</h2>
            <button className='btn btn-primary w-25 mt-4 align-self-center'>Submit</button>
            <div className="d-flex flex-row gap-3 justify-content-between">
                <div className="card-body pt-0 h-50">
                    <Members {...{
                        search,
                        handleSearchChange,
                        setSorting,
                        reverseSortDirection,
                        sortBy,
                        rows,
                        selectMember
                    }}/>
                </div>
                <div className="card-body pt-0">
                    <Members {...{
                        search,
                        handleSearchChange,
                        setSorting,
                        reverseSortDirection,
                        sortBy,
                        rows,
                        selectMember
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default StepForm;
