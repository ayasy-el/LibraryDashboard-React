import React, {useState} from 'react';

function CreateTable({Data, RowsElement, TableElement}) {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(Data);
    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(Data, {sortBy: field, reversed, search}));
    };

    const handleSearchChange = (event) => {
        const {value} = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(Data, {sortBy, reversed: reverseSortDirection, search: value}));
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
        <RowsElement {...{row, index}} />
    ));

    return (
        <TableElement {...{search, handleSearchChange, setSorting, sortBy, reverseSortDirection, rows}}/>
    );
}

export default CreateTable;
