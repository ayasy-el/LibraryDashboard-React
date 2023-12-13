import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {apiUrl} from "../config.js";

export function useEditMember() {
    const {memberId} = useParams();
    const methods = useForm()

    const memberData = useRef({}) // menyimpan dari API
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${apiUrl}/members.php/${memberId}`)
            .then((res) => {
                memberData.current = res.data[0]
                methods.reset(memberData.current)
            })
            .catch((error) => {
                console.error('User tidak ditemukan:', error);
                navigate('/members');
            });
    }, []);


    const deleteHandler = () => {
        if (confirm('Apakah anda yakin akan menghapus member ini'))
            axios.delete(`${apiUrl}/members.php/${memberId}`)
                .then(() => {
                    navigate('/members')
                }).catch(() => {
                alert('Error: Member gagal dihapus')
            })
    }

    const handleSubmit = async (form) => {
        form = {
            ...form,
            status: "not borrowing"
        }

        try {
            await patchMember(form, form.memberId);
            if (form.img) await postProfile(form)
            window.location.reload(false)
        } catch {
            alert('Maaf terjadi Error saat menambahkan member')
        }
    }

    const toggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode);
        methods.reset(memberData.current)
    };
    return {methods, handleSubmit, isEditMode, deleteHandler, toggleEditMode};
}

const patchMember = async (form, memberId) => {
    try {
        const response = await axios.put(`${apiUrl}/members.php/${memberId}`, form)
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