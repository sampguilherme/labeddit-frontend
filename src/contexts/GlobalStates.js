import { useState } from "react";
import axios from "axios"

export const GlobalState = () => {

    const [users, setUsers] = useState()

    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const getUsers = () => {
        axios.get("https://labeddit-backend-ka62.onrender.com/users")
        .then((response) => {
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const createUser = async () => {
        const body ={
            nickname,
            email,
            password
        }

        await axios.post("https://labeddit-backend-ka62.onrender.com/users/signup", body)
        .then((response) => {
            getUsers()
            setNickname("")
            setEmail("")
            setPassword("")
            setError("")
        })
        .catch((error) => {
            setError(error.response.data)
        })
    }

    return {
        getUsers,
        users,
        createUser,
        nickname,
        setNickname,
        email,
        setEmail,
        password,
        setPassword,
        error
    }
}