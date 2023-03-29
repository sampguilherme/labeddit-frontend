import { ContentP, LikeAndCommentsDiv, LikeAndDislikesDiv, LikeDislkeP, LikeQuantity, PrincipalDiv, SentUserP } from "./CardPostStyles"
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";


export const CardPost = () => {
    return (
        <PrincipalDiv>
            <SentUserP>Enviado por: guilherme</SentUserP>
            <ContentP>Eu estou testando o labbedit</ContentP>
            <LikeAndCommentsDiv>
                <LikeAndDislikesDiv>
                    <LikeDislkeP> <TbArrowBigUp/> </LikeDislkeP>
                    <LikeQuantity>1.4k</LikeQuantity>
                    <LikeDislkeP> <TbArrowBigDown/> </LikeDislkeP>
                </LikeAndDislikesDiv>
                <p>comments</p>
            </LikeAndCommentsDiv>
        </PrincipalDiv>
    )
}