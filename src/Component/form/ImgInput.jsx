import {useImgInput} from "../../hooks/UseImgInput.js";

export function ImgInput({editMode = true, initImg = ""}) {

    const {BlobImgUrl, handleFileChange, handleResetImage} = useImgInput(initImg);

    return <div className="text-center">
        <img
            src={BlobImgUrl || "/images/profile/profile-placeholder.jpg"}
            alt=""
            className="mb-3 rounded-circle object-fit-cover"
            width={180}
            height={180}
        />
        {editMode && <div>
            <label htmlFor="file" className="btn me-2 bg-primary-subtle text-primary">
                <i className="fill-white ti ti-edit fs-6"></i>
                <input type="file" id="file"
                       name="file" className="d-none"
                       onChange={handleFileChange}
                />
            </label>
            <button className="btn bg-danger-subtle text-danger"
                    type="button" onClick={handleResetImage}>
                <i className="fill-white ti ti-trash fs-6"></i>
            </button>
        </div>}
    </div>;
}