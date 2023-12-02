import React, {useState, useRef} from 'react';

const BorrowedBook = () => (
    <div className='mt-5'>
        <h2 className='pb-3 fw-bolder text-center'>Daftar Peminjam</h2>
        <div className="mt-3 rounded-3 card-hover">
            <a href="">
                <div className="d-flex align-items-center px-5 pb-3 border-bottom">
                    <span className="flex-shrink-0"><i className="ti ti-users text-success display-6"></i></span>
                    <div className="ms-4 col-2">
                        <h4 className="card-title text-dark">Jane Smith</h4>
                        <span className="fs-2 mt-1 fw-bolder"><b>ID : </b> &nbsp;A0023</span>
                    </div>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        janesmith@mail.com
                    </span>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        0824390200
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
                    <div className="ms-4 col-2">
                        <h4 className="card-title text-dark">Jane Smith</h4>
                        <span className="fs-2 mt-1 fw-bolder"><b>ID : </b> &nbsp;A0023</span>
                    </div>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        janesmith@mail.com
                    </span>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        0824390200
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
                    <div className="ms-4 col-2">
                        <h4 className="card-title text-dark">Jane Smith</h4>
                        <span className="fs-2 mt-1 fw-bolder"><b>ID : </b> &nbsp;A0023</span>
                    </div>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        janesmith@mail.com
                    </span>
                    <span className="fw-semibold mb-0 fs-3 fw-normal mt-1 text-dark col-3">
                        0824390200
                    </span>

                    <span
                        className="fs-3 mt-1 fw-semibold text-danger-emphasis col-2"><b>Fine Due : </b> &nbsp; $20</span>
                    <span className="fs-2 mt-1 text-danger"><b>Limits : </b> &nbsp; 10/12/2023</span>
                </div>
            </a>
        </div>
    </div>
)

const AddBook = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const imgRef = useRef(null);

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setSelectedFile(file);

        const objectUrl = URL.createObjectURL(file);
        setImageUrl(objectUrl);
    };

    const handleResetImage = () => {
        setSelectedFile(null);
        setImageUrl("");
        imgRef.current.value = '';
    };

    const inputName = ['Title', 'Publisher', 'Author', 'Category', 'ISBN']

    return <>
        <h2 className='fw-bolder text-center mb-5'>Add Book</h2>
        <div className='row'>
            <div className="col-lg-4 mb-4 d-flex align-items-stretch">
                <div className="card w-100 h-100 position-relative overflow-hidden">
                    <div className="card-body p-4">
                        <h5 className="card-title fw-semibold">Book Cover</h5>
                        <p className="card-subtitle mb-4">
                            Add cover of the book from here
                        </p>
                        <div className="d-flex flex-column align-items-center">
                            {imageUrl && <img
                                src={imageUrl}
                                alt=""
                                className="img-fluid"
                                width={320}
                            />}

                            <div className="input-group my-3">
                                <input className="form-control" ref={imgRef} onChange={handleFileChange}
                                       accept="image/*" type="file"/>
                                <button className="btn bg-danger-subtle text-danger" onClick={handleResetImage}
                                        type="button">
                                    <i className="fill-white ti ti-trash fs-6"></i>
                                </button>
                            </div>

                            <p className="mb-0">
                                Only Image Files Allowed (e.g. PNG, JPG, etc.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 mb-4">
                <div className="card h-100">
                    <div className="px-4 py-3 border-bottom">
                        <h5 className="card-title fw-semibold mb-0">Book Data</h5>
                    </div>
                    <div className="card-body p-4">
                        {inputName.map((item, index) => (
                            <div className="mb-4 row align-items-center">
                                <label
                                    htmlFor={item.toLowerCase()}
                                    className="form-label ps-5 fw-semibold col-sm-3 col-form-label"
                                >
                                    {item}
                                </label>
                                <div className="col-sm-9 pe-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={item.toLowerCase()}
                                        id={item.toLowerCase()}
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="row">
                            <div className="col-sm-3"/>
                            <div className="col-sm-9">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BorrowedBook/>
    </>

};

export default AddBook;
