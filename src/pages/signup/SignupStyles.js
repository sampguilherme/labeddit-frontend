import styled from "styled-components";

export const PrincipalDiv =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 33px;
    font-weight: bold;
    margin: 18px 18px 150px 18px;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SignupInput = styled.input`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding: 10px;
`

export const ErrorP = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    color: red;
    font-size: 14px;
    margin-top: 25px;
`

export const Span = styled.span`
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 25px 10px 10px 10px;
`

export const A = styled.a`
    color: #4088CB;
    &:hover {
        text-decoration: underline;
    }
`

export const NotificationDiv = styled.div`
    display: flex;
    padding: 8px 10px 10px 10px;
`

export const P = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
`

export const RegisterButton = styled.button`
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 18px;
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    margin-top: 24px;
    &:hover{
        opacity: 90%;
    }
`

