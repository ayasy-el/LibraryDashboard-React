import {ImgInput} from "../../Component/form/ImgInput.jsx";
import {Input} from "../../Component/form/Input.jsx";
import {useAddMember} from "../../hooks/useAddMember.js";
import {HeaderCard} from "../../Component/form/HeaderCard.jsx";


const inputFields = [
    {
        name: 'name',
        label: 'Full Name',
        iconElement: <i className="ti ti-user fs-6"></i>,
        placeholder: "member's name...",
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
        placeholder: "member's email...",
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
        placeholder: "member's phone number..."
    }]

const AddMember = () => {
    const {methods, FormProvider, handleSubmit} = useAddMember()

    return (
        <FormProvider {...methods}>
            <div className="row">
                <div className="card px-5">
                    <HeaderCard header='Add Member' subheader='Enter Member Profile Information'/>
                    <form className="card-body pt-0 px-5 d-flex flex-column justify-content-center"
                          onSubmit={methods.handleSubmit(handleSubmit)}>
                        <ImgInput/>
                        <div className="px-5">
                            {inputFields.map((field, idx) => <Input key={idx} {...field}/>)}
                        </div>
                        <button type="submit" className="btn align-self-center w-25 mt-4 mb-5 btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </FormProvider>
    );
};

export default AddMember;
