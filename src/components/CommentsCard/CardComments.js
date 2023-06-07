import { useState } from "react";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import axios from "axios";
import { BASE_URL } from "../../constants/apiUrl";
import { ContentP, LikeAndCommentsQuantity, LikeAndDislikesDiv, LikeDislkeButton, PrincipalDiv, SentUserP, TopDiv } from "./CardCommentsStyles";
import { MdDelete } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    IconButton
} from '@chakra-ui/react'

export const CardComments = ({comment}) => {

    const userId = localStorage.getItem('userId')

    const {content, likes, creator, id } = comment

    const [likesQuantity, setLikesQuantity] = useState(likes)

    const [ commentInEdit, setCommentInEdit ] = useState(false)

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const LikeOrDislikeComment = async (likeOrDislike) => {
        const body = {
            like: likeOrDislike
        }
        try {
                await axios.put(`${BASE_URL}/comments/${id}/like`, body, headers)
                setLikesQuantity(likes + 1)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PrincipalDiv>
            <TopDiv>
                <SentUserP>Enviado por: {creator.name}</SentUserP>
                {creator.id === userId 
                    ? <Menu bgColor='black' mg="20px">
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HiOutlineDotsHorizontal />}
                            height="30px"
                            mr="8px"
                            variant='outline'
                            border="none"
                            borderRadius="50%"
                            opacity="80%"
                        />
                        <MenuList>
                            <MenuItem icon={<FiEdit />} onClick={() => setCommentInEdit(true)}>
                                Editar comentário
                            </MenuItem>

                            <MenuItem  icon={<MdDelete />}>
                                Deletar comentário
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    : <></>}
            </TopDiv>
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