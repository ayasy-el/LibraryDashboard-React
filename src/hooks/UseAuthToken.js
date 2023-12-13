import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../config.js";


export const useAuthToken = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserData(setUser)
            .then((data) => {
                setUser(data);
            })
            .catch(() => {
                setUser(false)
            })
    }, [navigate]);

    return {user};
}

const fetchUserData = async () => {
    const storedUserData = localStorage.getItem('user');
    if (!storedUserData) throw new Error("Token not exist in localStorage")

    const {data: userJSON} = JSON.parse(storedUserData);
    const {data} = await axios.get(`${apiUrl}/auth.php`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userJSON.token}`
        }
    });
    return data
};