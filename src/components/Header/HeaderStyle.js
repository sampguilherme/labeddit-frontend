import styled from "styled-components";

export const PrincipalDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #ededed;
    position: relative;
` 

export const A = styled.a`
    display: flex;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    color: #4088CB;
    position: absolute;
    right: 16px;
    &:hover {
        text-decoration: underline;
    }
`

export const ExitButton = styled.button`
    font-family: 'Noto Sans', sans-serif;
    position: absolute;
    left: 16px;
    font-weight: 600;
    font-size: 22px;
`
