import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddMember = () => {
    // ===================== FORM STATE ================================
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        img: "",
        name: "",
        email: "",
        phone: "",
        status: "not borrowing",
    });
    const [validateMsg, setValidateMsg] = useState({email: "", name: ""});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};

        if (!formData.name) errors.name = "name is required";
        else if (formData.name.length < 3)
            errors.name = "name must be at least 3 characters long";

        if (!formData.email) errors.email = "email is required";

        setValidateMsg(errors);
    };

    const performSubmitActions = (data) => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);

            try {
                axios
                    .post("http://localhost:3000/api/upload.php", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then(() => {
                        alert("Gambar berhasil di upload");
                    })
                    .then(() => {
                        navigate("/members/" + data.data.memberId, {
                            state: {data: data.data},
                        });
                    })
                    .catch(() => {
                        alert("Error dalam mengirim gambar");
                    });
            } catch (error) {
                console.error("Error uploading file: ", error);
                alert("Gambar gagal di-upload");
            }
        } else {
            console.log(data.data);
            navigate("/members/" + data.data.memberId, {
                state: {data: data.data},
            });
        }
    };

    useEffect(() => {
        if (Object.keys(validateMsg).length === 0) {
            console.log(formData);
            axios
                .post("http://127.0.0.1:3000/API/members.php", formData)
                .then((data) => {
                    performSubmitActions(data);
                })
                .catch(() => {
                    alert("Maaf Terjadi Error Saat Menambahkan Data ke Database");
                });
        }
    }, [validateMsg]);

    // =============== FILE STATE  ===================================
    const [blobImgUrl, setBlobImgUrl] = useState("");

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setSelectedFile(file);
        setFormData({...formData, img: "/images/" + file.name});

        const objectUrl = URL.createObjectURL(file);
        setBlobImgUrl(objectUrl);
        console.log(formData);
    };

    const handleResetImage = () => {
        setFormData({...formData, img: ""});
        setBlobImgUrl("");
        setSelectedFile(null);
    };

    return (
        <>
            <div className="row">
                <div className="card px-5">
                    <div className="py-3 text-center border-bottom">
                        <h2 className="fw-semibold text-center">Member</h2>
                        <p className="card-subtitle text-center">
                            Member Profile Information
                        </p>
                    </div>

                    <form
                        className="card-body pt-2 px-5 d-flex flex-column justify-content-center"
                        onSubmit={handleSubmit}
                        onChange={() => {
                            setValidateMsg({email: "", password: ""});
                        }}
                    >
                        <div className="text-center mt-4">
                            <img
                                src={blobImgUrl || "/images/profile/profile-placeholder.jpg"}
                                alt=""
                                className="mb-3 rounded-circle object-fit-cover"
                                width={180}
                                height={180}
                            />
                            <div>
                                <label
                                    htmlFor="file"
                                    className="btn me-2 bg-primary-subtle text-primary"
                                >
                                    <i className="fill-white ti ti-edit fs-6"></i>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        onChange={handleFileChange}
                                        className="d-none"
                                    />
                                </label>
                                <button
                                    className="btn bg-danger-subtle text-danger"
                                    onClick={handleResetImage}
                                    type="button"
                                >
                                    <i className="fill-white ti ti-trash fs-6"></i>
                                </button>
                            </div>
                        </div>
                        <div className="px-5">
                            <label
                                htmlFor="name"
                                className="control-label pt-0 pb-2 col-form-label"
                            >
                                Full Name <span className="text-danger">*</span>
                            </label>
                            <div
                                className={`input-group border rounded-3 ${
                                    validateMsg.name ? " is-invalid " : " mb-3"
                                }`}
                            >
                                <span
                                    className="input-group-text bg-transparent px-6 border-0"
                                    id="basic-addon1"
                                >
                                    <i className="ti ti-user fs-6"></i>
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Deo"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({...formData, name: e.target.value})
                                    }
                                    className="form-control border-0 ps-2"
                                />
                            </div>
                            <div className="invalid-feedback mb-2">{validateMsg.name}</div>

                            <label
                                htmlFor="email"
                                className="control-label pt-0 pb-2 col-form-label"
                            >
                                Email <span className="text-danger">*</span>
                            </label>
                            <div
                                className={`input-group border rounded-3 ${
                                    validateMsg.email ? " is-invalid " : " mb-3"
                                }`}
                            >
                                <span
                                    className="input-group-text bg-transparent px-6 border-0"
                                    id="basic-addon1"
                                >
                                    <i className="ti ti-mail fs-6"></i>
                                </span>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="JohnDeo@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({...formData, email: e.target.value})
                                    }
                                    className="form-control border-0 ps-2"
                                />
                            </div>
                            <div className="invalid-feedback mb-2">{validateMsg.email}</div>

                            <label
                                htmlFor="phone"
                                className="control-label pt-0 pb-2 col-form-label"
                            >
                                Phone Number
                            </label>
                            <div className="input-group border rounded-3">
                                <span
                                    className="input-group-text bg-transparent px-6 border-0"
                                    id="basic-addon1"
                                >
                                    <i className="ti ti-phone fs-6"></i>
                                </span>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    className="form-control border-0 ps-2"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({...formData, phone: e.target.value})
                                    }
                                    placeholder="John Deo"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn align-self-center w-25 mt-4 mb-5 btn-primary"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddMember;
