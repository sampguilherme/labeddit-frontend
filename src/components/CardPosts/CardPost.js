import { useState } from "react";
import { CommentButton, CommentsDiv, ContentP, LikeAndCommentsDiv, LikeAndDislikesDiv, LikeDislkeButton, LikeAndCommentsQuantity, PrincipalDiv, SentUserP } from "./CardPostStyles"
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import axios from "axios";
import { BASE_URL } from "../../constants/apiUrl";
import { goToCommentsPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const CardPost = ({post, isOnCommentPage}) => {

    const {content, likes, creator, id } = post

    const [likesQuantity, setLikesQuantity] = useState(likes)

    const [commentsQuantity, setCommentsQuantity] = useState([])

    const navigate = useNavigate()

    const LikeOrDislikePost = async (likeOrDislike) => {
        const body = {
            like: likeOrDislike
        }
        try {
                await axios.put(`${BASE_URL}/posts/${id}/like`, body,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                setLikesQuantity(likes)

                
        } catch (error) {
            console.log(error)
        }
    }

    const getComments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/comments/${id}`,
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }
            )
            setCommentsQuantity(response.data.length)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <PrincipalDiv>
            <SentUserP>Enviado por: {creator.name}</SentUserP>
            <ContentP>{content}</ContentP>
            <LikeAndCommentsDiv>
                <LikeAndDislikesDiv>
                    <LikeDislkeButton 
                        onClick={
                            () => LikeOrDislikePost(true)
                        }
                    > <TbArrowBigUp/> </LikeDislkeButton>

                    <LikeAndCommentsQuantity>{likesQuantity}</LikeAndCommentsQuantity>
                    <LikeDislkeButton
                        onClick={
                            () => LikeOrDislikePost(false)
                        }
                    > <TbArrowBigDown/> </LikeDislkeButton>
                </LikeAndDislikesDiv>
                {isOnCommentPage 
                    ? <></>
                    : <CommentsDiv>
                        <CommentButton onClick={() => goToCommentsPage(navigate, id)}> <TfiComment/> </CommentButton>
                        <LikeAndCommentsQuantity>{commentsQuantity}</LikeAndCommentsQuantity>
                    </CommentsDiv>
                }
                
            </LikeAndCommentsDiv>
        </PrincipalDiv>
    )
}