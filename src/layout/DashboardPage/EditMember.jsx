import {useState, useMemo, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

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

const EditMember = () => {
    const {memberId} = useParams();

    const [memberData, setMemberData] = useState({}) // menyimpan dari API
    const [formData, setFormData] = useState({})     // menyimpan input form
    const [validateMsg, setValidateMsg] = useState({email: '', name: ''})

    const [selectedFile, setSelectedFile] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate()


    useMemo(() => {
        try {
            axios.get(`http://127.0.0.1:3000/API/members.php/${memberId}`)
                .then((res) => {
                    setMemberData({...res.data[0]})
                    setFormData({...res.data[0]})
                })
                .catch((error) => {
                    console.error('User tidak ditemukan:', error);
                    navigate('/members');
                });
        } catch (error) {
            console.error('User tidak ditemukan:', error);
            navigate('/members');
        }

    }, []);

    const performSubmitActions = (data) => {

        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);

            try {
                axios.post(
                    "http://localhost:3000/api/upload.php",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                ).then(() => {
                    alert('Gambar berhasil di upload')
                }).then(() => {
                    window.location.reload(false)
                }).catch(() => {
                    alert('Error dalam mengirim gambar')
                })
            } catch (error) {
                console.error("Error uploading file: ", error);
                alert("Gambar gagal di-upload");
            }
        } else {
            console.log(data.data)
            navigate("/members")
        }

    }

    useEffect(() => {
        if (Object.keys(validateMsg).length === 0) {
            console.log(formData)
            axios.patch(`http://127.0.0.1:3000/API/members.php/${memberId}`, formData)
                .then((data) => {
                    performSubmitActions(data)
                }).catch(() => {
                alert('Maaf Terjadi Error Saat Menambahkan Data ke Database')
            })
        }
    }, [validateMsg]);


    const deleteHandler = () => {
        if (confirm('Apakah anda yakin akan menghapus member ini'))
            axios.delete(`http://127.0.0.1:3000/API/members.php/${memberId}`)
                .then(() => {
                    navigate('/members')
                }).catch(() => {
                alert('Error: Member gagal dihapus')
            })
    }

    const saveHandler = () => {
        let errors = {};
        if (selectedFile)
            setFormData({...formData, img: '/images/' + selectedFile.name})

        if (!formData.name)
            errors.name = "name is required";
        else if (formData.name.length < 3)
            errors.name = "name must be at least 3 characters long";

        if (!formData.email)
            errors.email = "email is required";


        setValidateMsg(errors)
    }

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setSelectedFile(file);

        const objectUrl = URL.createObjectURL(file);
        setFormData({...formData, img: objectUrl})
    };

    const handleResetImage = () => {
        setSelectedFile(null);
        setFormData({...formData, img: '/images/profile/profile-placeholder.png'})
        // imgRef.current.value = '';
    };

    const toggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode); // Toggle the edit mode
        setFormData({...memberData})

        setSelectedFile(null);
        // imgRef.current.value = '';
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
                                src={formData.img || '/images/profile/profile-placeholder.png'}
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
                                        className="btn bg-danger-subtle  text-danger"
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
                                        <input type="text" name='name' id='name' value={formData.name}
                                               onChange={(e) => setFormData({...formData, name: e.target.value})}
                                               className="form-control border-0 ps-2"/>
                                    </div>

                                    <label htmlFor="email"
                                           className="control-label pt-0 pb-1 col-form-label">Email</label>
                                    <div className="input-group border mb-3 rounded-3">
                                        <span className="input-group-text bg-transparent px-6 border-0"
                                              id="basic-addon1"><i
                                            className="ti ti-mail fs-6"></i></span>
                                        <input type="text" id='email' name='email'
                                               onChange={(e) => setFormData({...formData, email: e.target.value})}
                                               className="form-control border-0 ps-2" value={formData.email}/>
                                    </div>

                                    <label htmlFor="phone"
                                           className="control-label pt-0 pb-1 col-form-label">Phone Number</label>
                                    <div className="input-group border mb-3 rounded-3">
                                        <span className="input-group-text bg-transparent px-6 border-0"
                                              id="basic-addon1"><i
                                            className="ti ti-phone fs-6"></i></span>
                                        <input type="text" id='phone' name='phone'
                                               onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                               className="form-control border-0 ps-2" value={formData.phone}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Full Name</label>
                                    <div className="input-group rounded-3">
                                        <p className='ps-3 mb-2 fs-5 fw-bolder'>{formData.name}</p>
                                    </div>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Email</label>
                                    <div className="input-group rounded-3">
                                        <p className='ps-3 fs-5 mb-2 fw-bolder'>{formData.email}</p>
                                    </div>
                                    <label htmlFor="name"
                                           className="control-label pt-0 pb-1 col-form-label">Phone Number</label>
                                    <div className="input-group rounded-3">
                                        <p className='ps-3 mb-0 fs-5 fw-bolder'>{formData.phone}</p>
                                    </div>
                                </>
                            )}

                            <div className="d-flex mt-4 justify-content-start">
                                <button className="btn me-3 btn-light" onClick={toggleEditMode}>
                                    {isEditMode ? 'Cancel' : 'Edit'}
                                </button>
                                {isEditMode && (
                                    <div className='d-flex w-100 justify-content-between'>
                                        <button onClick={saveHandler} className="btn btn-primary">Save</button>
                                        <button onClick={deleteHandler} className="btn btn-danger">Delete This Member
                                        </button>
                                    </div>
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

export default EditMember;
