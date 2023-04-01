import { CommentButton, CommentsDiv, ContentP, LikeAndCommentsDiv, LikeAndDislikesDiv, LikeDislkeButton, LikeAndCommentsQuantity, PrincipalDiv, SentUserP } from "./CardPostStyles"
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";


export const CardPost = ({post}) => {

    const {content, likes, creator, comments, id } = post

    return (
        <PrincipalDiv>
            <SentUserP>Enviado por: {creator.name}</SentUserP>
            <ContentP>{content}</ContentP>
            <LikeAndCommentsDiv>
                <LikeAndDislikesDiv>
                    <LikeDislkeButton> <TbArrowBigUp/> </LikeDislkeButton>
                    <LikeAndCommentsQuantity>{likes}</LikeAndCommentsQuantity>
                    <LikeDislkeButton> <TbArrowBigDown/> </LikeDislkeButton>
                </LikeAndDislikesDiv>
                <CommentsDiv>
                    <CommentButton> <TfiComment/> </CommentButton>
                    <LikeAndCommentsQuantity>100</LikeAndCommentsQuantity>
                </CommentsDiv>
            </LikeAndCommentsDiv>
        </PrincipalDiv>
    )
}