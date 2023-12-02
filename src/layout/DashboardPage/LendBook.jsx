import React, {useRef} from 'react';
import {membersData} from './MembersTableView.jsx'
import style from "../../assets/css/Table.module.css";
import CreateTable from "../../Component/CreateTable.jsx";

const MembersRows = ({row, index}) => {

    return <tr key={index}>
        <td><img className='rounded-circle' src={row.img} alt={row.name} width={40} height={40}/></td>
        <td><h6 className="fw-semibold mb-1">{row.name}</h6></td>
        <td><p className="mb-0 fs-3 text-dark">{row.memberId}</p></td>
        <td>
            <label className='btn me-2 btn-primary'>
                {selectedRef.current ? 'Selected' : 'Select'}
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
}
const MembersTable = ({search, handleSearchChange, setSorting, sortBy, reverseSortDirection, rows}) => (
    <div className="mt-5">
        <div className='d-flex gap-5 justify-content-center'>
            <h3 className='fw-bolder'>Member Id</h3>
            <input
                type="text"
                className="form-control w-50 mb-3"
                id="memberId"
                name="memberId"
                // value={formData.memberId}
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
)

const StepForm = () => {

    return (
        <div className="card">
            <h2 className='fw-bolder text-center mt-5'>Lend a Book</h2>
            <div className="d-flex flex-row gap-3 justify-content-between">
                <div className="card-body pt-0">
                    <CreateTable Data={membersData} TableElement={MembersTable} RowsElement={MembersRows}/>
                </div>
                <div className="card-body pt-0">
                    <CreateTable Data={membersData} TableElement={MembersTable} RowsElement={MembersRows}/>
                </div>
            </div>
        </div>
    );
};

export default StepForm;
