import styled from "styled-components";

export const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`

export const InputComment = styled.input`
    display: flex;
    width: 364px;
    height: 131px;
    background-color: #ededed;
    border-radius: 12px;
    padding: 18px;    
    ::placeholder {
        position: absolute;
        top: 18px;
        left: 14px;
    }
`

export const CommentButton = styled.button`
    margin-top: 14px;
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
`

export const Line = styled.div`
    width: 364px;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 20%, #F9B24E 100%);
    margin-top: 28px;
    margin-bottom: 28px;
`