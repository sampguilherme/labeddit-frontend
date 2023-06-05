import { useState } from "react";
import axios from "axios"
import { BASE_URL } from "../constants/apiUrl";

export const GlobalState = () => {

    const [inLoading, setInLoading] = useState(false)

    const [users, setUsers] = useState("")
    const [error, setError] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const getUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users`)
            setUsers(response.data)
        } catch (error){
            console.log(error)
        }
    }


    return {
        getUsers,
        users,
        error,
        setError,
        email,
        setEmail,
        password,
        setPassword,
        inLoading,
        setInLoading,
    }
}