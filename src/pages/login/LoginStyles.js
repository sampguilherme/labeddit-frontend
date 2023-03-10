import styled from "styled-components";

export const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`

export const TitleH1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 36px;
    font-weight: bold;
`

export const Span = styled.span`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: lighter;
    line-height: 21px;
    margin-bottom: 100px;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const LoginInput = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding: 10px;
`
export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 365px;
    gap: 20px;
`

export const ButtonContinue = styled.button`
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
`

export const Hr = styled.hr`
    width: 363px;
`

export const ButtonSignup = styled.button`
    color: #FE7E02;
    font-family: 'Noto sans', sans-serif;
    font-size: 18px;
    width: 365px;
    height: 51px;
    background-color: white;
    border: 1px solid #FE7E02;
    border-radius: 27px;
`