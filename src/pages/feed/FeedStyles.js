import styled from "styled-components";

export const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Textarea = styled.textarea`
    margin-top: 24px;
    padding: 12px;
    width: 364px;
    height: 132px;
    border-radius: 12px;
    background-color: #ededed;
    resize: none;
    @media (min-width: 700px){
        width: 564px;
    }
`

export const PostButton = styled.button`
    margin-top: 14px;
    margin-bottom: 28px;
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 18px;
    width: 364px;
    height: 47px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 12px;
    &:hover{
        opacity: 90%;
    }
    @media (min-width: 700px){
        width: 564px;
    }
`

export const Line = styled.div`
    width: 364px;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 20%, #F9B24E 100%);
    margin-bottom: 28px;
    @media (min-width: 700px){
        width: 564px;
    }
`