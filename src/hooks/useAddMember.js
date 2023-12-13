import {useNavigate} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../config.js";
import {useForm, FormProvider} from "react-hook-form";

export const useAddMember = () => {
    const navigate = useNavigate()
    const methods = useForm()

    const handleSubmit = async (form) => {
        form = {
            ...form,
            img: form.img ?? "",
            status: "not borrowing"
        }

        try {
            const member = await postMember(form);
            if (form.img) await postProfile(form)
            navigate("/members/" + member.memberId);
        } catch {
            alert('Maaf terjadi Error saat menambahkan member')
        }
    }

    return {handleSubmit, methods, FormProvider}
}

const postMember = async (form) => {
    try {
        const response = await axios.post(`${apiUrl}/members.php`, form);
        return response.data;
    } catch (error) {
        return error;
    }
};

const postProfile = async (form) => {
    try {
        const response = await axios.post(`${apiUrl}/upload.php`, form, {
            headers: {"Content-Type": "multipart/form-data"}
        })
        return response.data;
    } catch (error) {
        return error
    }
}

