import { useState } from "react";
import { CommentButton, CommentsDiv, ContentP, LikeAndCommentsDiv, LikeAndDislikesDiv, LikeDislkeButton, LikeAndCommentsQuantity, PrincipalDiv, SentUserP } from "./CardPostStyles"
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import axios from "axios";


export const CardPost = ({post}) => {

    const {content, likes, dislikes, creator, comments, id } = post

    const [likesQuantity, setLikesQuantity] = useState(likes)

    const LikePost = async () => {
        const body = {
            like: true
        }
        try {
                await axios.put(`https://labeddit-backend-ka62.onrender.com/posts/${id}/like`, body,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                setLikesQuantity(likes + 1)
        } catch (error) {
            console.log(error)
        }
    }

    const DislikePost = async () => {
        const body = {
            like: false
        }
        try {
                await axios.put(`https://labeddit-backend-ka62.onrender.com/posts/${id}/like`, body,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PrincipalDiv>
            <SentUserP>Enviado por: {creator.name}</SentUserP>
            <ContentP>{content}</ContentP>
            <LikeAndCommentsDiv>
                <LikeAndDislikesDiv>
                    <LikeDislkeButton 
                        onClick={
                            () => LikePost()
                        }
                    > <TbArrowBigUp/> </LikeDislkeButton>

                    <LikeAndCommentsQuantity>{likesQuantity} / {dislikes}</LikeAndCommentsQuantity>
                    <LikeDislkeButton
                        onClick={
                            () => DislikePost()
                        }
                    > <TbArrowBigDown/> </LikeDislkeButton>
                </LikeAndDislikesDiv>
                <CommentsDiv>
                    <CommentButton> <TfiComment/> </CommentButton>
                    <LikeAndCommentsQuantity>100</LikeAndCommentsQuantity>
                </CommentsDiv>
            </LikeAndCommentsDiv>
        </PrincipalDiv>
    )
}