import { useState } from "react";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import axios from "axios";
import { BASE_URL } from "../../constants/apiUrl";
import { ContentP, LikeAndCommentsQuantity, LikeAndDislikesDiv, LikeDislkeButton, PrincipalDiv, SentUserP } from "./CardCommentsStyles";


export const CardComments = ({comment}) => {

    const {content, likes, dislikes, creator, id } = comment

    const [likesQuantity, setLikesQuantity] = useState(likes)

    const LikeOrDislikeComment = async (likeOrDislike) => {
        const body = {
            like: likeOrDislike
        }
        try {
                await axios.put(`${BASE_URL}/comments/${id}/like`, body,
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

    return (
        <PrincipalDiv>
            <SentUserP>Enviado por: {creator.name}</SentUserP>
            <ContentP>{content}</ContentP>
                <LikeAndDislikesDiv>
                    <LikeDislkeButton 
                        onClick={
                            () => LikeOrDislikeComment(true)
                        }
                    > <TbArrowBigUp/> </LikeDislkeButton>

                    <LikeAndCommentsQuantity>{likesQuantity}</LikeAndCommentsQuantity>
                    <LikeDislkeButton
                        onClick={
                            () => LikeOrDislikeComment(false)
                        }
                    > <TbArrowBigDown/> </LikeDislkeButton>
                </LikeAndDislikesDiv>
        </PrincipalDiv>
    )
}