export function BorrowedBook() {
    return <div className='mt-5'>
        <h2 className='pb-3 fw-bolder text-center'>Daftar Buku yang Dipinjam</h2>
        <div className="mt-3 rounded-3 card-hover">
            <a href="">
                <div className="d-flex align-items-center px-5 pb-3 border-bottom">
                    <span className="flex-shrink-0"><i className="ti ti-users text-success display-6"></i></span>
                    <div className="ms-4 col-3">
                        <h4 className="fs-4 mb-0 text-dark">Psychology Of Money</h4>
                        <span className="fs-2 mt-1 fw-bolder"><b>ID : </b> &nbsp;A0023</span>
                    </div>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        Author Name
                    </span>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-2">
                        Publisher
                    </span>

                    <span
                        className="fs-3 mt-1 fw-semibold text-danger-emphasis col-2"><b>Fine Due : </b> &nbsp; $20</span>
                    <span className="fs-2 mt-1 text-danger"><b>Limits : </b> &nbsp; 10/12/2023</span>
                </div>
            </a>
        </div>
        <div className="mt-3 rounded-3 card-hover">
            <a href="">
                <div className="d-flex align-items-center px-5 pb-3 border-bottom">
                    <span className="flex-shrink-0"><i className="ti ti-users text-success display-6"></i></span>
                    <div className="ms-4 col-3">
                        <h4 className="fs-4 mb-0 text-dark">Jane Smith</h4>
                        <span className="fs-2 mt-1 fw-bolder"><b>ID : </b> &nbsp;A0023</span>
                    </div>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        Author Name
                    </span>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-2">
                        Publisher
                    </span>

                    <span
                        className="fs-3 mt-1 fw-semibold text-danger-emphasis col-2"><b>Fine Due : </b> &nbsp; $20</span>
                    <span className="fs-2 mt-1 text-danger"><b>Limits : </b> &nbsp; 10/12/2023</span>
                </div>
            </a>
        </div>
        <div className="mt-3 rounded-3 card-hover">
            <a href="">
                <div className="d-flex align-items-center px-5 pb-3 border-bottom">
                    <span className="flex-shrink-0"><i className="ti ti-users text-success display-6"></i></span>
                    <div className="ms-4 col-3">
                        <h4 className="fs-4 mb-0 text-dark">Jane Smith</h4>
                        <span className="fs-2 mt-1 fw-bolder"><b>ID : </b> &nbsp;A0023</span>
                    </div>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        Author Name
                    </span>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-2">
                        Publisher
                    </span>

                    <span
                        className="fs-3 mt-1 fw-semibold text-danger-emphasis col-2"><b>Fine Due : </b> &nbsp; $20</span>
                    <span className="fs-2 mt-1 text-danger"><b>Limits : </b> &nbsp; 10/12/2023</span>
                </div>
            </a>
        </div>
    </div>;
}