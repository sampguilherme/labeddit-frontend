import { useState } from "react";
import axios from "axios"

export const GlobalState = () => {

    const [inLoading, setInLoading] = useState(false)

    const [users, setUsers] = useState("")
    const [error, setError] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getUsers = () => {
        axios.get("https://labeddit-backend-ka62.onrender.com/users")
        .then((response) => {
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
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