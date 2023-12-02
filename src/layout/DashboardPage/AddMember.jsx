import React, {useState, useRef} from 'react';

const BorrowedBook = () => (
    <div className='mt-5'>
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
    </div>
)

const AddMember = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const imgRef = useRef(null);

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setSelectedFile(file);

        const objectUrl = URL.createObjectURL(file);
        setImageUrl(objectUrl);
    };

    const handleResetImage = () => {
        setSelectedFile(null);
        setImageUrl('');
        imgRef.current.value = '';
    };

    const inputName = ['Title', 'Publisher', 'Author', 'Category', 'ISBN'];

    const toggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode); // Toggle the edit mode
    };

    return (
        <>
            <div className="row">
                <div className="card pb-5 h-100">
                    <h2 className="fw-semibold mt-3 text-center">Member Profile</h2>
                    <p className="card-subtitle text-center mb-5">Member Profile Information</p>

                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                            <img
                                src={imageUrl || '/images/profile/profile-placeholder.jpg'}
                                alt=""
                                className="mb-3 rounded-circle object-fit-cover"
                                width={180}
                                height={180}
                            />
                            {isEditMode && (
                                <div>
                                    <label htmlFor='file' className="btn me-2 bg-primary-subtle text-primary">
                                        <i className="fill-white ti ti-edit fs-6"></i>
                                        <input type="file" id='file' name='file' onChange={handleFileChange}
                                               className="d-none"/>
                                    </label>
                                    <button
                                        className="btn bg-danger-subtle text-danger"
                                        onClick={handleResetImage}
                                        type="button"
                                    >
                                        <i className="fill-white ti ti-trash fs-6"></i>
                                    </button>
                                </div>)}
                        </div>
                        <div className="col-7">
                            {isEditMode ? (
                                <>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Full Name</label>
                                    <div className="input-group border mb-3 rounded-3">
                                        <span className="input-group-text bg-transparent px-6 border-0"
                                              id="basic-addon1"><i
                                            className="ti ti-user fs-6"></i></span>
                                        <input type="text" name='name' id='name' className="form-control border-0 ps-2"
                                               placeholder="John Deo"/>
                                    </div>

                                    <label htmlFor="email"
                                           className="control-label pt-0 pb-1 col-form-label">Email</label>
                                    <div className="input-group border mb-3 rounded-3">
                                        <span className="input-group-text bg-transparent px-6 border-0"
                                              id="basic-addon1"><i
                                            className="ti ti-mail fs-6"></i></span>
                                        <input type="text" id='email' name='email'
                                               className="form-control border-0 ps-2"
                                               placeholder="Johndeo@example.com"/>
                                    </div>

                                    <label htmlFor="phone"
                                           className="control-label pt-0 pb-1 col-form-label">Phone Number</label>
                                    <div className="input-group border mb-3 rounded-3">
                                        <span className="input-group-text bg-transparent px-6 border-0"
                                              id="basic-addon1"><i
                                            className="ti ti-phone fs-6"></i></span>
                                        <input type="text" id='phone' name='phone'
                                               className="form-control border-0 ps-2"
                                               placeholder="083234321"/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Full Name</label>
                                    <div className="input-group rounded-3">
                                        <p className='ps-3 mb-2 fs-5 fw-bolder'>John Deo</p>
                                    </div>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Email</label>
                                    <div className="input-group rounded-3">
                                        <p className='ps-3 fs-5 mb-2 fw-bolder'>Johndeo@example.com</p>
                                    </div>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Phone Number</label>
                                    <div className="input-group rounded-3">
                                        <p className='ps-3 mb-0 fs-5 fw-bolder'>083234321</p>
                                    </div>
                                </>
                            )}

                            <div className="d-flex mt-4 justify-content-start">
                                <button className="btn me-3 btn-light" onClick={toggleEditMode}>
                                    {isEditMode ? 'Cancel' : 'Edit'}
                                </button>
                                {isEditMode && (
                                    <button className="btn btn-primary">Save</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BorrowedBook/>
        </>
    );
};

export default AddMember;
