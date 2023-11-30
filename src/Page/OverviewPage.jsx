import Header from "../layout/Header.jsx";
import VisitorsGraph from "../Component/VisitorsGraph.jsx";
import StatsCard from "../Component/StatsCard.jsx";
import BooksGraph from "../Component/BooksGraph.jsx";
import BookFavGraph from "../Component/BookFavGraph.jsx";

export default function OverviewPage() {
    return (
        <div className="body-wrapper">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <StatsCard color='primary' icon='grid-dots' value='450' isIncrease={true} percentage='+9%'
                               timeline='this month'>Total Visitors</StatsCard>
                    <StatsCard color='success' icon='grid-dots' value='50' isIncrease={false} percentage='-3%'
                               timeline='this month'>Total Borrowed</StatsCard>
                    <StatsCard color='danger' icon='grid-dots' value='20' isIncrease={true} percentage='+5%'
                               timeline='this month'>Total Books Overdue</StatsCard>
                </div>
                <div className="row">
                    <VisitorsGraph/>
                    <div className="col-lg-4 row">
                        <BooksGraph/>
                        <BookFavGraph/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="card w-100">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="card-title fw-semibold">Request Book</h5>
                                    <a href="#">
                                        <i className="ti ti-chevron-right text-black fs-8"/>
                                    </a>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-middle text-nowrap mb-0">
                                        <thead>
                                        <tr className="text-muted fw-semibold">
                                            <th>Books</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody className="border-top">
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img1.jpg"
                                                        className="rounded-2"
                                                        width={42}
                                                        height={42}
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="fw-semibold mb-1">Top Authors</h6>
                                                        <span className="fw-normal">Successful Fellas</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    type="button"
                                                    className="btn me-2 mb-1 btn-primary btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-check"/>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn mb-1 btn-danger btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-x"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img2.jpg"
                                                        className="rounded-2"
                                                        width={42}
                                                        height={42}
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="fw-semibold mb-1">
                                                            Popular Authors
                                                        </h6>
                                                        <span className="fw-normal">Most Successful</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    type="button"
                                                    className="btn me-2 mb-1 btn-primary btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-check"/>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn mb-1 btn-danger btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-x"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img3.jpg"
                                                        className="rounded-2"
                                                        width={42}
                                                        height={42}
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="fw-semibold mb-1">New Users</h6>
                                                        <span className="fw-normal">Awesome Users</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    type="button"
                                                    className="btn me-2 mb-1 btn-primary btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-check"/>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn mb-1 btn-danger btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-x"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img4.jpg"
                                                        className="rounded-2"
                                                        width={42}
                                                        height={42}
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="fw-semibold mb-1">
                                                            Active Customers
                                                        </h6>
                                                        <span className="fw-normal">Best Customers</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    type="button"
                                                    className="btn me-2 mb-1 btn-primary btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-check"/>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn mb-1 btn-danger btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-x"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img5.jpg"
                                                        className="rounded-2"
                                                        width={42}
                                                        height={42}
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="fw-semibold mb-1">
                                                            Bestseller Theme
                                                        </h6>
                                                        <span className="fw-normal">Amazing Templates</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    type="button"
                                                    className="btn me-2 mb-1 btn-primary btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-check"/>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn mb-1 btn-danger btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fs-5 ti ti-x"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <button
                                                    type="button"
                                                    className="btn rounded-pill w-100 bg-primary-subtle text-primary"
                                                >
                                                    View All
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-strech">
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                                    <div className="mb-3 mb-sm-0">
                                        <h5 className="card-title fw-semibold">Overdue Details</h5>
                                    </div>
                                    <a href="#">
                                        <i className="ti ti-chevron-right text-black fs-8"/>
                                    </a>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-middle text-nowrap mb-0">
                                        <thead>
                                        <tr className="text-muted fw-semibold">
                                            <th scope="col" className="ps-0">
                                                Assigned
                                            </th>
                                            <th scope="col">Project</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Budget</th>
                                        </tr>
                                        </thead>
                                        <tbody className="border-top">
                                        <tr>
                                            <td className="ps-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 pe-1">
                                                        <img
                                                            src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
                                                            className="rounded-circle"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Sunil Joshi</h6>
                                                        <p className="fs-2 mb-0 text-muted">Web Designer</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 fs-3">Elite Admin</p>
                                            </td>
                                            <td>
                                                <span
                                                    className="badge fw-semibold py-1 w-85 bg-primary-subtle text-primary">
                                                    Low
                                                </span>
                                            </td>
                                            <td>
                                                <p className="fs-3 text-dark mb-0">$3.9K</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ps-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 pe-1">
                                                        <img
                                                            src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-2.jpg"
                                                            className="rounded-circle"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">John Deo</h6>
                                                        <p className="fs-2 mb-0 text-muted">
                                                            Web Developer
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 fs-3">Flexy Admin</p>
                                            </td>
                                            <td>
                                                <span
                                                    className="badge fw-semibold py-1 w-85 bg-warning-subtle text-warning">
                                                    Medium
                                                </span>
                                            </td>
                                            <td>
                                                <p className="fs-3 text-dark mb-0">$24.5K</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ps-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 pe-1">
                                                        <img
                                                            src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-3.jpg"
                                                            className="rounded-circle"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Nirav Joshi</h6>
                                                        <p className="fs-2 mb-0 text-muted">Web Manager</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 fs-3">Material Pro</p>
                                            </td>
                                            <td>
                                                <span
                                                    className="badge fw-semibold py-1 w-85 bg-info-subtle text-info">
                                                    High
                                                </span>
                                            </td>
                                            <td>
                                                <p className="fs-3 text-dark mb-0">$12.8K</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ps-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 pe-1">
                                                        <img
                                                            src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg"
                                                            className="rounded-circle"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Yuvraj Sheth</h6>
                                                        <p className="fs-2 mb-0 text-muted">
                                                            Project Manager
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 fs-3">Xtreme Admin</p>
                                            </td>
                                            <td>
                                                <span
                                                    className="badge fw-semibold py-1 w-85 bg-success-subtle text-success">
                                                    Low
                                                </span>
                                            </td>
                                            <td>
                                                <p className="fs-3 text-dark mb-0">$4.8K</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-0 ps-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 pe-1">
                                                        <img
                                                            src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-5.jpg"
                                                            className="rounded-circle"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Micheal Doe</h6>
                                                        <p className="fs-2 mb-0 text-muted">
                                                            Content Writer
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-0">
                                                <p className="mb-0 fs-3">Helping Hands WP Theme</p>
                                            </td>
                                            <td className="border-0">
                                                <span
                                                    className="badge fw-semibold py-1 w-85 bg-danger-subtle text-danger">
                                                    High
                                                </span>
                                            </td>
                                            <td className="border-0">
                                                <p className="fs-3 text-dark mb-0">$9.3K</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                <button
                                                    type="button"
                                                    className="btn rounded-pill w-100 bg-primary-subtle text-primary"
                                                >
                                                    View All
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="fw-bolder fs-8 mb-9 py-9">Book Of the Month</h3>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s4.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">Boat Headphone</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $50{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$65</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s5.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">MacBook Air Pro</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $650{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$900</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s7.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">Red Valvet Dress</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $150{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$200</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card overflow-hidden rounded-2">
                            <div className="position-relative">
                                <a href="javascript:void(0)">
                                    <img
                                        src="/images/products/s11.jpg"
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Add To Cart"
                                >
                                    <i className="ti ti-chevron-right fs-4"/>
                                </a>
                            </div>
                            <div className="card-body pt-3 p-4">
                                <h6 className="fw-semibold fs-4">Cute Soft Teddybear</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-semibold fs-4 mb-0">
                                        $285{" "}
                                        <span className="ms-2 fw-normal text-muted fs-3">
                                            <del>$345</del>
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}