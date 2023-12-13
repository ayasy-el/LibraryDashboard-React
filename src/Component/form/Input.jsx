import {useFormContext} from "react-hook-form";

export function Input({name, type, label, placeholder, iconElement, validation}) {
    const {register, formState: {errors}} = useFormContext();

    return (
        <>
            <label htmlFor={name} className="control-label pt-0 pb-1 col-form-label">
                {label} {validation && <span className="text-danger">*</span>}
            </label>
            <div className={`input-group border rounded-3 ${errors[name] ? " is-invalid border-danger" : " mb-3"}`}>
                <span className="input-group-text bg-transparent px-6 border-0">
                    {iconElement}
                </span>
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className="form-control border-0 ps-2"
                    {...register(name, validation)}
                />
            </div>
            {errors[name] && <div className="invalid-feedback mb-2">{errors[name].message}</div>}
        </>
    );
}
