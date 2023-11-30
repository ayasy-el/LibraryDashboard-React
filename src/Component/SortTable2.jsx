import React, {useState} from 'react';
import style from '../assets/css/sortTable.module.css';

const bookData = [
    {
        thumbnail: '/images/products/s1.jpg',
        title: 'Book Title 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        bookId: 'ID001',
        isbn: 'ISBN001',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s4.jpg',
        title: 'Book Title 2',
        author: 'Author 2',
        publisher: 'Publisher 2',
        bookId: 'ID002',
        isbn: 'ISBN002',
        status: 'Borrowed',
    },
    {
        thumbnail: '/images/products/s1.jpg',
        title: 'Book Title 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        bookId: 'ID001',
        isbn: 'ISBN001',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s4.jpg',
        title: 'Book Title 2',
        author: 'Author 2',
        publisher: 'Publisher 2',
        bookId: 'ID002',
        isbn: 'ISBN002',
        status: 'Borrowed',
    },
    {
        thumbnail: '/images/products/s1.jpg',
        title: 'Book Title 1',
        author: 'Author 1',
        publisher: 'Publisher 1',
        bookId: 'ID001',
        isbn: 'ISBN001',
        status: 'Available',
    },
    {
        thumbnail: '/images/products/s4.jpg',
        title: 'Book Title 2',
        author: 'Author 2',
        publisher: 'Publisher 2',
        bookId: 'ID002',
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
            <td>
                <h6 className="fw-semibold mb-1">{row.title}</h6>
                <p className="fs-2 mb-0 text-muted">{row.author}</p>
            </td>
            <td>{row.publisher}</td>
            <td>{row.bookId}</td>
            <td>{row.isbn}</td>
            <td>{row.status}</td>
            <td>
                <button className='btn btn-info'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
                <button className='btn btn-primary'>Show</button>
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
            <table className="table align-middle table-striped table-hover">
                <thead>
                <tr>
                    <th className={style.theader} colSpan={2} onClick={() => setSorting('title')}>Title</th>
                    <th className={style.theader} onClick={() => setSorting('publisher')}>Publisher</th>
                    <th className={style.theader} onClick={() => setSorting('bookId')}>Book ID</th>
                    <th className={style.theader} onClick={() => setSorting('isbn')}>ISBN</th>
                    <th className={style.theader} onClick={() => setSorting('status')}>Status</th>
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

    );
}

export default BookTable;
