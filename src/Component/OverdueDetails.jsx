const OverdueDetails = () => {
    const users = [
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg',
            name: 'Sunil Joshi',
            role: 'Web Designer',
            project: 'Elite Admin',
            priority: 'Low',
            budget: '$3.9K',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-2.jpg',
            name: 'John Deo',
            role: 'Web Developer',
            project: 'Flexy Admin',
            priority: 'Medium',
            budget: '$24.5K',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-3.jpg',
            name: 'Nirav Joshi',
            role: 'Web Manager',
            project: 'Material Pro',
            priority: 'High',
            budget: '$12.8K',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg',
            name: 'Yuvraj Sheth',
            role: 'Project Manager',
            project: 'Xtreme Admin',
            priority: 'Low',
            budget: '$4.8K',
        },
        {
            imageUrl: 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-5.jpg',
            name: 'Micheal Doe',
            role: 'Content Writer',
            project: 'Helping Hands WP Theme',
            priority: 'High',
            budget: '$9.3K',
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
                                    Assigned
                                </th>
                                <th scope="col">Project</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Budget</th>
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
