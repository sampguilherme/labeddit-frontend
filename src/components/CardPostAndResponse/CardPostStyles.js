import styled from "styled-components";

export const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fbfbfb;
    width: 364px;
    min-height: 121px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    margin-bottom: 18px;
`

export const SentUserP = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #6f6f6f;
    font-weight: 400;
    font-size: 12px;
    margin: 8px 0px 12px 8px;
`

export const ContentP = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    margin: 0px 0px 12px 8px;
`

export const LikeAndCommentsDiv = styled.div`
    display: flex;
    margin: 0px 0px 12px 8px;
    gap: 10px;
`

export const LikeAndDislikesDiv = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 4px;
    gap: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 18px;

`

export const LikeDislkeButton = styled.button`
    font-size: 22px;
    color: #6f6f6f;
    opacity: 70%;
    &:hover{
        opacity: 50%;
    }
`

export const LikeAndCommentsQuantity = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #6F6F6F;
    text-align: center;
`

export const CommentsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 80px;
    padding: 4px;
    gap: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 18px;
`

export const CommentButton = styled.button`
    font-size: 18px;
    color: #6f6f6f;
    opacity: 70%;
    &:hover{
        opacity: 50%;
    }
`