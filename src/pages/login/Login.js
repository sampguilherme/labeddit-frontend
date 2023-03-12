import React from "react"
import { LogoImg, PrincipalDiv, TitleH1, Span, LoginInput, DivInputs, DivButtons, ButtonContinue, Hr, ButtonSignup } from "./LoginStyles"
import Logo from "../../assets/logo-labeddit.svg"

export const Login = () => {
    
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
                <ButtonContinue>Continuar</ButtonContinue>
                <Hr/>
                <ButtonSignup>Crie uma conta!</ButtonSignup>
            </DivButtons>
            
        </PrincipalDiv>
    )
}