import React, {useState, useRef} from 'react';

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
    </>

};

export default AddBook;
