import style from "../../assets/css/Table.module.css";
import { useTableLogic } from "../../Component/FilterTableLib.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function MembersPage() {
  const [membersData, setMembersData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`http://127.0.0.1:3000/API/members.php`)
        .then((res) => {
          setMembersData(res.data);
        })
        .catch((error) => {
          console.error("Tidak ada data:", error);
        });
    } catch (error) {
      console.error("Tidak ada data:", error);
    }
  }, []);

  const {
    search,
    sortedData,
    sortBy,
    reverseSortDirection,
    setReverseSortDirection,
    setSorting,
    handleSearchChange,
  } = useTableLogic(membersData);

  useEffect(() => {
    setReverseSortDirection(true);
    setSorting("memberId");
  }, [membersData]);

  // const navigate = useNavigate()

  const deleteHandler = (event) => {
    const id = event.currentTarget.getAttribute("data-id");
    if (confirm("Apakah anda yakin akan menghapus member ini"))
      axios
        .delete(`http://127.0.0.1:3000/API/members.php/${id}`)
        .then(() => {
          window.location.reload(false);
        })
        .catch(() => {
          alert("Error: Member gagal dihapus");
        });
  };

  const rows = sortedData.map((row, index) => (
    <tr key={index}>
      <td>
        <img
          className="rounded-circle"
          src={row.img || "/images/profile/profile-placeholder.png"}
          alt={row.name}
          width={40}
          height={40}
        />
      </td>
      <td className="text-start">
        <h6 className="fw-semibold mb-1">{row.name}</h6>
        <p className="mb-0 fs-2 text-muted">{row.memberId}</p>
      </td>
      <td>
        <p className="mb-0 fs-3 text-dark">{row.email}</p>
      </td>
      <td>
        <p className="mb-0 fs-3 text-dark">{row.phone}</p>
      </td>
      <td>
        <span
          className={`badge fw-semibold py-1 w-85 bg-${
            row.status.toLowerCase() === "not borrowing"
              ? "success"
              : row.status.toLowerCase() === "borrowing"
              ? "primary"
              : "danger"
          }-subtle text-${
            row.status.toLowerCase() === "not borrowing"
              ? "success"
              : row.status.toLowerCase() === "borrowing"
              ? "primary"
              : "danger"
          }`}
        >
          {row.status}
        </span>
      </td>
      <td>
        <NavLink to={`/members/${row.memberId}`} className="btn me-2 btn-light">
          <i className="ti ti-edit fs-6"></i>
        </NavLink>
        <button
          onClick={deleteHandler}
          data-id={row.memberId}
          className="btn me-2 btn-light"
        >
          <i className="ti ti-trash fs-6"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-2 ">
      <h2 className="text-center mb-4 fw-bolder">All Members</h2>
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
            <tr className="text-muted fw-semibold">
              <th
                className={style.tHeader}
                colSpan={2}
                onClick={() => setSorting("name")}
              >
                <div className="table-header d-flex justify-content-evenly">
                  <span>Name</span>
                  <i
                    className={`ti ti-${
                      (sortBy === "name" &&
                        (reverseSortDirection
                          ? "chevron-down"
                          : "chevron-up")) ||
                      "selector"
                    }`}
                  ></i>
                </div>
              </th>
              <th className={style.tHeader} onClick={() => setSorting("email")}>
                <div className="table-header d-flex justify-content-evenly">
                  <span>Email</span>
                  <i
                    className={`ti ti-${
                      (sortBy === "email" &&
                        (reverseSortDirection
                          ? "chevron-down"
                          : "chevron-up")) ||
                      "selector"
                    }`}
                  ></i>
                </div>
              </th>
              <th className={style.tHeader} onClick={() => setSorting("phone")}>
                <div className="table-header d-flex justify-content-evenly">
                  <span>Phone</span>
                  <i
                    className={`ti ti-${
                      (sortBy === "phone" &&
                        (reverseSortDirection
                          ? "chevron-down"
                          : "chevron-up")) ||
                      "selector"
                    }`}
                  ></i>
                </div>
              </th>
              <th
                className={style.tHeader}
                onClick={() => setSorting("status")}
              >
                <div className="table-header d-flex justify-content-evenly">
                  <span>Status</span>
                  <i
                    className={`ti ti-${
                      (sortBy === "status" &&
                        (reverseSortDirection
                          ? "chevron-down"
                          : "chevron-up")) ||
                      "selector"
                    }`}
                  ></i>
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
                <td colSpan={Object.keys(membersData).length}>Nothing found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MembersPage;
