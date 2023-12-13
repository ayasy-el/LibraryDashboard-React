import {HeaderCard} from "../../Component/form/HeaderCard.jsx";
import {MemberInformation} from "../../Component/form/MemberInformation.jsx";
import {FormProvider} from "react-hook-form";
import {ImgInput} from "../../Component/form/ImgInput.jsx";
import {Input} from "../../Component/form/Input.jsx";
import {useEditMember} from "../../hooks/UseEditMember.js";
import {BorrowedBook} from "../../Component/BorrowedBook.jsx";

const inputFields = [
    {
        name: 'name',
        label: 'Full Name',
        iconElement: <i className="ti ti-user fs-6"></i>,
        validation: {
            required: "Name is required",
            minLength: {
                value: 3,
                message: 'name must be at least 3 characters long'
            }
        }
    }, {
        name: 'email',
        label: 'Email',
        iconElement: <i className="ti ti-mail fs-6"></i>,
        validation: {
            required: "Email is required",
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
            }
        }
    }, {
        name: 'phone',
        label: 'Phone',
        iconElement: <i className="ti ti-phone fs-6"></i>,
    }]

const EditMember = () => {
    const {
        methods,
        handleSubmit, isEditMode,
        deleteHandler, toggleEditMode
    } = useEditMember();

    return (
        <FormProvider {...methods}>
            <div className="row">
                <div className="card pb-5 h-100">
                    <HeaderCard header='Member' subheader='Member Information Details'/>

                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                            <ImgInput initImg={methods.getValues("img")} editMode={isEditMode}/>
                        </div>
                        <div className="col-7">
                            {isEditMode ? (
                                <>{inputFields.map((field, idx) => <Input key={idx} {...field}/>)}</>
                            ) : (
                                <MemberInformation formData={methods.getValues()}/>
                            )}

                            <div className="d-flex mt-4 justify-content-start">
                                <button className="btn me-3 btn-light" onClick={toggleEditMode}>
                                    {isEditMode ? 'Cancel' : 'Edit'}
                                </button>
                                {isEditMode && (
                                    <div className='d-flex w-100 justify-content-between'>
                                        <button className="btn btn-primary"
                                                onClick={methods.handleSubmit(handleSubmit)}>
                                            Save
                                        </button>
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
        </FormProvider>
    );
};

export default EditMember;
