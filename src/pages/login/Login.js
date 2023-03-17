import React, { useContext, useEffect } from "react"
import { LogoImg, PrincipalDiv, TitleH1, Span, LoginInput, DivInputs, DivButtons, ButtonContinue, Hr, ButtonSignup } from "./LoginStyles"
import Logo from "../../assets/logo-labeddit.svg"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToSignupPage } from "../../Router/coordinator"
import { GlobalContext } from "../../contexts/GlobalContext"

export const Login = () => {
    
    const context = useContext(GlobalContext)

    const {
        getUsers,
        users
    } = context

    const navigate = useNavigate()


    return (
        <PrincipalDiv>
            <LogoImg src={Logo}/>
            <TitleH1>LabEddit</TitleH1>
            <Span>O projeto de rede social da Labenu</Span>
            <DivInputs>
                <LoginInput placeholder="E-mail"/>
                <LoginInput placeholder="Senha" type="password"/>
            </DivInputs>
            <DivButtons>
                <ButtonContinue onClick={() => goToHomePage(navigate)}>Continuar</ButtonContinue>
                <Hr/>
                <ButtonSignup onClick={() => goToSignupPage(navigate)}>Crie uma conta!</ButtonSignup>
            </DivButtons>
            
        </PrincipalDiv>
    )
}