import { useContext, useEffect } from "react"
import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { DivInputs, H1, PrincipalDiv, SignupInput, Span, A, RegisterButton, NotificationDiv, P, ErrorP } from "./SignupStyles"
import { useState } from "react";
import axios from "axios"
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../Router/coordinator";
import { BASE_URL } from "../../constants/apiUrl";

export const Signup = () => {

    const isOnSignupPage = true

    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    const {
        getUsers,
        users,
        error,
        setError,
        email,
        setEmail,
        password,
        setPassword,
        inLoading,
        setInLoading
    } = context

    useEffect(() => {
        setError("")
    }, [])


    const [nickname, setNickname] = useState("")
    
    const createUser = async () => {
        const body ={
            nickname,
            email,
            password,
        }
        try {
                setInLoading(true)
                const response = await axios.post(`${BASE_URL}/users/signup`, body)

                localStorage.setItem('token', response.data.token)

                setNickname("")
                setEmail("")
                setPassword("")
                setError("")
                setInLoading(false)
                goToFeedPage(navigate)
        } catch(error) {
            setInLoading(false)
            console.log(error)
            setError(error.response.data)
        }
    }

    

    return(
            <PrincipalDiv>
                <Header isOnSignupPage={isOnSignupPage}/>
                <H1>Olá, boas vindas ao LabEddit {';)'}</H1>
                <DivInputs>
                    <SignupInput placeholder="Apelido" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                    <SignupInput placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <SignupInput placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </DivInputs>
                {error ? <ErrorP>{error}</ErrorP> : <></>}
                <Span>Ao continuar você concorda com o nosso <A href="#">Contrato de usuário </A>
                    e a nossa <A href="#">Politica de Privacidade</A>
                </Span>
                <NotificationDiv>
                    <input type="checkbox"/>
                    <P>Eu concordo em receber emails sobre coisas legais no Labeddit</P>
                </NotificationDiv>
                <div>
                    {inLoading ? <Spinner marginTop={"24px"}/> : <RegisterButton 
                        background-color="white"
                    onClick={() => createUser()}>Cadastrar</RegisterButton>}
                </div>
                
            </PrincipalDiv>
    )
}