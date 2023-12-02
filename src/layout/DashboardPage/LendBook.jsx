import React, {useState} from 'react';

const StepForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        location: '',
        dateOfBirth: '',
        companyName: '',
        companyUrl: '',
        shortDescription: '',
        interviewFor: '',
        interviewType: '',
        interviewLocation: '',
        interviewDate: '',
        interviewRequirements: '',
        behavior: '',
        confidence: '',
        result: '',
        comments: '',
        interviewerRating: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        location: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleNext = () => {
        const newErrors = {};
        let hasError = false;

        if (currentStep === 1) {
            if (!formData.firstName) {
                newErrors.firstName = 'This field is required.';
                hasError = true;
            } else {
                newErrors.firstName = '';
            }

            if (!formData.lastName) {
                newErrors.lastName = 'This field is required.';
                hasError = true;
            } else {
                newErrors.lastName = '';
            }
        }

        if (currentStep === 2) {
            if (!formData.emailAddress) {
                newErrors.emailAddress = 'This field is required.';
                hasError = true;
            } else {
                newErrors.emailAddress = '';
            }

            if (!formData.location) {
                newErrors.location = 'This field is required.';
                hasError = true;
            } else {
                newErrors.location = '';
            }
        }


        if (hasError) {
            setErrors(newErrors);
            return;
        }

        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Additional submission logic can be added here
    };

    return (
        <div className="card">
            <div className="card-body wizard-content">
                <h4 className="card-title">Step wizard with validation</h4>
                <form onSubmit={handleSubmit} className="validation-wizard wizard-circle mt-5 wizard clearfix"
                      role="application" id="steps-uid-7" noValidate>
                    {/* Step 1 */}
                    {currentStep === 1 && (
                        <section id="steps-uid-7-p-0" role="tabpanel" aria-labelledby="steps-uid-7-h-0"
                                 className="body current" aria-hidden="false">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="wfirstName2">
                                            First Name : <span className="danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control required"
                                            id="wfirstName2"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="wlastName2">
                                            Last Name : <span className="danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control required"
                                            id="wlastName2"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={handleNext}>Next</button>
                        </section>
                    )}


                    {/* Add other sections (steps) similarly */}

                    {/* Final Step */}
                    {currentStep === 2 && (
                        <div className="actions clearfix">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="wemailAddress2">
                                            Email Address : <span className="danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control required"
                                            id="wemailAddress2"
                                            name="emailAddress"
                                            value={formData.emailAddress}
                                            onChange={handleInputChange}
                                        />
                                        {errors.emailAddress &&
                                            <span className="error-message">{errors.emailAddress}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="wphoneNumber2">Phone Number :</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="wphoneNumber2"
                                            name='phoneNumber'
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="wlocation2">
                                            Select City : <span className="danger">*</span>
                                        </label>
                                        <select
                                            className="form-select required"
                                            id="wlocation2"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select City</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="Dubai">Dubai</option>
                                        </select>
                                        {errors.location && <span className="error-message">{errors.location}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="wdate2">Date of Birth :</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="wdate2"
                                            // value={formData.dateOfBirth}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={handlePrevious}>Previous</button>
                            <button type="submit" onClick={handleNext}>Submit</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default StepForm;
