import React, { useContext, useEffect } from "react"
import { LogoImg, PrincipalDiv, TitleH1, Span, LoginInput, DivInputs, DivButtons, ButtonContinue, Line, ButtonSignup, ErrorP } from "./LoginStyles"
import Logo from "../../assets/logo-labeddit.svg"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToSignupPage } from "../../Router/coordinator"
import { GlobalContext } from "../../contexts/GlobalContext"
import axios from "axios"
import { Spinner } from '@chakra-ui/react'
import { BASE_URL } from "../../constants/apiUrl"

export const Login = () => {
    
    const context = useContext(GlobalContext)

    const {
        getUsers,
        users,
        email,
        setEmail,
        password,
        setPassword,
        inLoading,
        setInLoading,
        error,
        setError,
    } = context

    useEffect(() => {
        setError("")
    }, [])

    const navigate = useNavigate()

    const login = async () => {
        const body = {
            email,
            password
        }
        try {
            setInLoading(true)
            const response = await axios.post(`${BASE_URL}/users/login`, body)

            setEmail("")
            setPassword("")
            setError("")
            setInLoading(false)  
            goToFeedPage(navigate)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userId)
        } catch (error) {
            setInLoading(false)
            console.log(error)
            setError(error.response.data)
        }
    }


    return (
        <PrincipalDiv>
            <LogoImg src={Logo}/>
            <TitleH1>LabEddit</TitleH1>
            <Span>O projeto de rede social da Labenu</Span>
            <DivInputs>
                <LoginInput 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                <LoginInput 
                    placeholder="Senha" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
                {error ? <ErrorP>{error}</ErrorP> : <></>}
            </DivInputs>
            <DivButtons>
                {inLoading ? 
                    <Spinner /> 
                    : 
                    <ButtonContinue onClick={() => login()}>Continuar</ButtonContinue>
                }
                <Line></Line>
                <ButtonSignup onClick={() => goToSignupPage(navigate)}>Crie uma conta!</ButtonSignup>
            </DivButtons>
            
        </PrincipalDiv>
    )
}