import React from 'react';

const ProfileSection = () => {
    return (
        <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">Change Profile</h5>
                    <p className="card-subtitle mb-4">
                        Change your profile picture from here
                    </p>
                    <div className="text-center">
                        <img
                            src="/images/profile/user-1.jpg"
                            alt=""
                            className="img-fluid rounded-circle"
                            width={120}
                            height={120}
                        />
                        <div className="d-flex align-items-center justify-content-center my-4 gap-3">
                            <button className="btn btn-primary">Upload</button>
                            <button className="btn btn-outline-danger">Reset</button>
                        </div>
                        <p className="mb-0">
                            Allowed JPG, GIF or PNG. Max size of 800K
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PasswordSection = () => {
    return (
        <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card w-100 position-relative overflow-hidden">
                <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">Change Password</h5>
                    <p className="card-subtitle mb-4">
                        To change your password please confirm here
                    </p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                                Current Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                defaultValue={12345678910}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword2" className="form-label fw-semibold">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword2"
                                defaultValue={12345678910}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="exampleInputPassword3" className="form-label fw-semibold">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword3"
                                defaultValue={12345678910}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const PersonalDetailsSection = () => {
    return (
        <div className="col-12">
            <div className="card w-100 position-relative overflow-hidden mb-0">
                <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">Personal Details</h5>
                    <p className="card-subtitle mb-4">
                        To change your personal detail , edit and save from here
                    </p>
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputtext" className="form-label fw-semibold">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputtext"
                                        placeholder="Mathew Anderson"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Location
                                    </label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">United Kingdom</option>
                                        <option value={1}>United States</option>
                                        <option value={2}>United Kingdom</option>
                                        <option value={3}>India</option>
                                        <option value={3}>Russia</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputtext1" className="form-label fw-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputtext1"
                                        placeholder="info@modernize.com"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputtext2" className="form-label fw-semibold">
                                        Store Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputtext2"
                                        placeholder="Maxima Studio"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Currency
                                    </label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">India (INR)</option>
                                        <option value={1}>US Dollar ($)</option>
                                        <option value={2}>United Kingdom (Pound)</option>
                                        <option value={3}>India (INR)</option>
                                        <option value={3}>Russia (Ruble)</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputtext3" className="form-label fw-semibold">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputtext3"
                                        placeholder="+91 12345 65478"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="">
                                    <label htmlFor="exampleInputtext4" className="form-label fw-semibold">
                                        Address
                                    </label>
                                    <input type="text" className="form-control" id="exampleInputtext4"
                                           placeholder="814 Howard Street, 120065, India"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center justify-content-end mt-4 gap-3">
                                    <button className="btn btn-primary">Save</button>
                                    <button className="btn bg-danger-subtle text-danger">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const AccountSetting = () => {
    return (
        <div className="tab-content">
            <div className="tab-pane fade active show">
                <div className="row">
                    <ProfileSection/>
                    <PasswordSection/>
                    <PersonalDetailsSection/>
                </div>
            </div>
        </div>
    );
};

export default AccountSetting;