import React, {useState, useRef} from 'react';

const AddMember = () => {
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
        <div className='row'>
            <div className="card px-5">
                <div className="px-4 pt-4 pb-3 text-center border-bottom">
                    <h2 className="fw-semibold text-center">Member</h2>
                    <p className="card-subtitle text-center">
                        Member Profile Information
                    </p>
                </div>

                <div className='card-body px-5 d-flex flex-column justify-content-center'>
                    <div className="text-center mt-4">
                        <img
                            src={imageUrl || '/images/profile/profile-placeholder.jpg'}
                            alt=""
                            className="img-fluid mb-3 rounded-pill"
                            width={180}
                        />
                        <div>
                            <button className="btn me-2 bg-primary-subtle text-primary" onClick={handleFileChange}
                                    type="button">
                                <i className="fill-white ti ti-edit fs-6"></i>
                            </button>
                            <button className="btn bg-danger-subtle text-danger" onClick={handleResetImage}
                                    type="button">
                                <i className="fill-white ti ti-trash fs-6"></i>
                            </button>
                        </div>
                    </div>
                    <div className='px-5'>
                        <label htmlFor="name" className="control-label pt-0 pb-2 col-form-label">Full Name</label>
                        <div className="input-group mb-3 border rounded-3">
                            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i
                                className="ti ti-user fs-6"></i></span>
                            <input type="text" name='name' id='name' className="form-control border-0 ps-2"
                                   placeholder="John Deo"/>
                        </div>

                        <label htmlFor="email" className="control-label pt-0 pb-2 col-form-label">Email</label>
                        <div className="input-group mb-3 border rounded-3">
                            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i
                                className="ti ti-mail fs-6"></i></span>
                            <input type="text" id='email' name='email' className="form-control border-0 ps-2"
                                   placeholder="JohnDeo@example.com"/>
                        </div>

                        <label htmlFor="phone" className="control-label pt-0 pb-2 col-form-label">Phone Number</label>
                        <div className="input-group border rounded-3">
                            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i
                                className="ti ti-phone fs-6"></i></span>
                            <input type="text" id='phone' name='phone' className="form-control border-0 ps-2"
                                   placeholder="John Deo"/>
                        </div>
                    </div>
                    <button className="btn align-self-center w-25 mt-4 mb-5 btn-primary">Save</button>
                </div>
            </div>


        </div>
    </>

};

export default AddMember;
