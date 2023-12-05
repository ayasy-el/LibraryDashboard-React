const OverdueDetails = () => {
    const users = [
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg',
            name: 'Sunil Joshi',
            role: '00001',
            project: 'Book Title 1',
            priority: '1 Day',
            budget: '$3',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-2.jpg',
            name: 'John Deo',
            role: '00002',
            project: 'Book Title 2',
            priority: '2 Days',
            budget: '$6',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-3.jpg',
            name: 'Nirav Joshi',
            role: '00003',
            project: 'Book Title 3',
            priority: '6 Days',
            budget: '$18',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg',
            name: 'Yuvraj Sheth',
            role: '00004',
            project: 'Book Title 4',
            priority: '4 Days',
            budget: '$12',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-5.jpg',
            name: 'Micheal Doe',
            role: '00005',
            project: 'Book Title 5',
            priority: '10 Days',
            budget: '$30',
        },
    ];

    return (
        <div className="col-lg-7 d-flex align-items-stretch">
            <div className="card w-100">
                <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                        <h5 className="card-title fw-semibold">Overdue Details</h5>
                        <a href="#">
                            <i className="ti m-0 ti-chevron-right text-black fs-8"/>
                        </a>
                    </div>
                    <div className="table-responsive">
                        <table className="table align-middle text-nowrap mb-0">
                            <thead>
                            <tr className="text-muted fw-semibold">
                                <th scope="col" className="ps-0">
                                    Borrower
                                </th>
                                <th scope="col">Book</th>
                                <th scope="col">Overdue</th>
                                <th scope="col">Fine</th>
                            </tr>
                            </thead>
                            <tbody className="border-top">

                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="ps-0">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 pe-1">
                                                <img
                                                    src={user.imageUrl}
                                                    className="rounded-circle"
                                                    width={40}
                                                    height={40}
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">{user.name}</h6>
                                                <p className="fs-2 mb-0 text-muted">{user.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 fs-3">{user.project}</p>
                                    </td>
                                    <td>
                                        <span
                                            className={`badge fw-semibold py-1 w-85 bg-warning-subtle text-warning`}>
                                            {user.priority}
                                        </span>
                                    </td>
                                    <td>
                                        <p className="fs-3 text-dark mb-0">{user.budget}</p>
                                    </td>
                                </tr>
                            ))}
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
    );
};

export default OverdueDetails;
