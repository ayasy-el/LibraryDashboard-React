import React, {useState} from 'react';
import style from '../assets/css/sortTable.module.css';

const bookData = [
    {
        "img": "url_gambar_1",
        "name": "John Doe",
        "memberId": "M001",
        "email": "johndoe@example.com",
        "phone": "+1234567890",
        "status": "borrowing"
    },
    {
        "img": "url_gambar_2",
        "name": "Jane Smith",
        "memberId": "M002",
        "email": "janesmith@example.com",
        "phone": "+1987654321",
        "status": "not borrowing"
    },
    {
        "img": "url_gambar_3",
        "name": "Alice Johnson",
        "memberId": "M003",
        "email": "alicejohnson@example.com",
        "phone": "+1122334455",
        "status": "overdue"
    },
    {
        "img": "url_gambar_4",
        "name": "Michael Brown",
        "memberId": "M004",
        "email": "michaelbrown@example.com",
        "phone": "+1654321890",
        "status": "not borrowing"
    },
    {
        "img": "url_gambar_5",
        "name": "Emily Davis",
        "memberId": "M005",
        "email": "emilydavis@example.com",
        "phone": "+1789456231",
        "status": "borrowing"
    },
    {
        "img": "url_gambar_6",
        "name": "David Wilson",
        "memberId": "M006",
        "email": "davidwilson@example.com",
        "phone": "+1908765432",
        "status": "not borrowing"
    },
    {
        "img": "url_gambar_7",
        "name": "Sophia Martinez",
        "memberId": "M007",
        "email": "sophiamartinez@example.com",
        "phone": "+1543210987",
        "status": "overdue"
    },
    {
        "img": "url_gambar_8",
        "name": "James Lee",
        "memberId": "M008",
        "email": "jameslee@example.com",
        "phone": "+1324354657",
        "status": "not borrowing"
    },
    {
        "img": "url_gambar_9",
        "name": "Olivia Garcia",
        "memberId": "M009",
        "email": "oliviagarcia@example.com",
        "phone": "+1876543210",
        "status": "overdue"
    },
    {
        "img": "url_gambar_10",
        "name": "William Rodriguez",
        "memberId": "M010",
        "email": "williamrodriguez@example.com",
        "phone": "+1987654321",
        "status": "not borrowing"
    }
];


function BookTable() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(bookData);
    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(bookData, {sortBy: field, reversed, search}));
    };

    const handleSearchChange = (event) => {
        const {value} = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(bookData, {sortBy, reversed: reverseSortDirection, search: value}));
    };

    const filterData = (data, search) => {
        const query = search.toLowerCase().trim();
        return data.filter((item) =>
            Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(query))
        );
    };

    const sortData = (data, payload) => {
        const {sortBy} = payload;

        if (!sortBy) {
            return filterData(data, payload.search);
        }

        return filterData(
            [...data].sort((a, b) => {
                if (payload.reversed) {
                    return b[sortBy].localeCompare(a[sortBy]);
                }
                return a[sortBy].localeCompare(b[sortBy]);
            }),
            payload.search
        );
    };

    const rows = sortedData.map((row, index) => (
        <tr key={index}>
            <td><img src={row.img} alt={row.name} width={80}/></td>
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
        <div className="container mt-4">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by any field"
                value={search}
                onChange={handleSearchChange}
            />
            <div className={`${style.Booktb} table-responsive rounded-2 mb-4`}>
                <table className="table align-middle text-nowrap mb-0 table-hover">
                    <thead>
                    <tr className='text-muted fw-semibold'>
                        <th className={style.theader} colSpan={2} onClick={() => setSorting('name')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Name</span>
                                <i className={`ti ti-${sortBy === 'name' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader} onClick={() => setSorting('email')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Email</span>
                                <i className={`ti ti-${sortBy === 'email' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader} onClick={() => setSorting('phone')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Phone</span>
                                <i className={`ti ti-${sortBy === 'phone' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader} onClick={() => setSorting('status')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Status</span>
                                <i className={`ti ti-${sortBy === 'status' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <tr>
                            <td colSpan={Object.keys(bookData[0]).length}>Nothing found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookTable;
