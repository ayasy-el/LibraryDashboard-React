export function MemberInformation({formData}) {
    return <>
        <label htmlFor="name"
               className="control-label pt-0 pb-1 col-form-label">Full Name</label>
        <div className="input-group rounded-3">
            <p className="ps-3 mb-2 fs-5 fw-bolder">{formData.name}</p>
        </div>
        <label htmlFor="name"
               className="control-label pt-0 pb-1 col-form-label">Email</label>
        <div className="input-group rounded-3">
            <p className="ps-3 fs-5 mb-2 fw-bolder">{formData.email}</p>
        </div>
        <label htmlFor="name"
               className="control-label pt-0 pb-1 col-form-label">Phone Number</label>
        <div className="input-group rounded-3">
            <p className="ps-3 mb-0 fs-5 fw-bolder">{formData.phone}</p>
        </div>
    </>;
}