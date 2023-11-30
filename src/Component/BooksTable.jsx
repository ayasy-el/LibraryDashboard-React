import React, {useState} from 'react';
import style from '../assets/css/sortTable.module.css';

const bookData = [
    {
        thumbnail: '/images/products/s1.jpg',
        title: 'Book Title 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        category: 'Sains',
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
        status: 'Borrowed',
    },
    {
        thumbnail: '/images/products/s5.jpg',
        title: 'Book Title 3',
        author: 'Author 1',
        publisher: 'Publisher 1',
        category: 'Computer',
        isbn: 'ISBN001',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s7.jpg',
        title: 'Book Title 4',
        author: 'Author 2',
        publisher: 'Publisher 2',
        category: 'Social',
        isbn: 'ISBN002',
        status: 'Borrowed',
    },
    {
        thumbnail: '/images/products/s11.jpg',
        title: 'Book Title 5',
        author: 'Author 1',
        publisher: 'Publisher 1',
        category: 'Social',
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
        status: 'Borrowed',
    },
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
            <td><img src={row.thumbnail} alt={row.title} width={80}/></td>
            <td className='text-start'>
                <h6 className="fw-semibold mb-1">{row.title}</h6>
                <p className="mb-0 fs-2 text-muted">{row.author}</p>
            </td>
            <td><p className="mb-0 fs-3 text-dark">{row.publisher}</p></td>
            <td><p className="mb-0 fs-3 text-dark">{row.category}</p></td>
            <td><p className="mb-0 fs-3 text-dark">{row.isbn}</p></td>
            <td><span
                className={`badge fw-semibold py-1 w-85 bg-${row.status.toLowerCase() === 'available' ? 'success' : 'warning'}-subtle text-${row.status.toLowerCase() === 'available' ? 'success' : 'warning'}`}>{row.status}</span>
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
                        <th className={style.theader} colSpan={2} onClick={() => setSorting('title')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Book</span>
                                <i className={`ti ti-${sortBy === 'title' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader} onClick={() => setSorting('publisher')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Publisher</span>
                                <i className={`ti ti-${sortBy === 'publisher' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader} onClick={() => setSorting('category')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>Category</span>
                                <i className={`ti ti-${sortBy === 'category' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
                            </div>
                        </th>
                        <th className={style.theader} onClick={() => setSorting('isbn')}>
                            <div className="table-header d-flex justify-content-evenly">
                                <span>ISBN</span>
                                <i className={`ti ti-${sortBy === 'isbn' && (reverseSortDirection ? "chevron-down" : "chevron-up") || 'selector'}`}></i>
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
