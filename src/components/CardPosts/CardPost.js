import { useState } from "react";
import { 
    CommentButton,
    CommentsDiv,
    ContentP,
    LikeAndCommentsDiv,
    LikeAndDislikesDiv,
    LikeDislkeButton,
    LikeAndCommentsQuantity,
    PrincipalDiv,
    SentUserP,
    TopDiv,
    Textarea, 
    EditArea 
} from "./CardPostStyles"
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import axios from "axios";
import { BASE_URL } from "../../constants/apiUrl";
import { goToCommentsPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { useDisclosure } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    IconButton
} from '@chakra-ui/react'
import { DeleteModal } from "../DeleteModal/DeleteModal";

export const CardPost = ({post, isOnCommentPage, commentsQuantity}) => {

    const userId = localStorage.getItem('userId')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {content, likes, creator, id, comments } = post

    const [likesQuantity, setLikesQuantity] = useState(likes)

    

    const [ postEdited, setPostEdited ] = useState(content)
    const [ postInEdit, setPostInEdit ] = useState(false)
    const [ postHasBeenEdited, setPostHasBeenEdited ] = useState(false)
    const [ postDeleted, setPostDeleted ] = useState(false)

    const navigate = useNavigate()

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const LikeOrDislikePost = async (likeOrDislike) => {
        const body = {
            like: likeOrDislike
        }
        try {
                await axios.put(`${BASE_URL}/posts/${id}/like`, body, headers)
                setLikesQuantity(likes)
        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async () => {
        const body = {
            content: postEdited
        }
        try{
            await axios.put(`${BASE_URL}/posts/${id}`, body, headers)
            setPostInEdit(false)
            setPostHasBeenEdited(true)
        } catch (error) {
            console.log(error)
        }
    }

return (
        <>
            { postDeleted 
                ? <></>
                : <PrincipalDiv>
                
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
                                <MenuItem icon={<FiEdit />} onClick={() => setPostInEdit(true)}>
                                    Editar post
                                </MenuItem>
        
                                <MenuItem  icon={<MdDelete />} onClick={onOpen}>
                                    Deletar post
                                </MenuItem>
                                <DeleteModal isOpen={isOpen}
                                    onClose={onClose}
                                    setPostDeleted={setPostDeleted}
                                    isOnCommentPage={isOnCommentPage}
                                    id={id}/>
                                        
                            </MenuList>
                        </Menu>
                        : <></>}
                </TopDiv>
                {postInEdit 
                    ? <>
                        <Textarea type="text" value={postEdited} onChange={(e) => setPostEdited(e.target.value)}/>
                        <EditArea>
                            <Button
                                bgColor={"#FBFBFB"}
                                border={"1px solid #3182CE"}
                                h="32px"
                                _hover={{bgColor: "#3182CE", color: "white"}}
                                onClick={() => editPost()}>
                                    Salvar
                            </Button>
                            <Button
                                bgColor={"#FBFBFB"}
                                border={"1px solid #41484B"}
                                h="32px"
                                _hover={{bgColor: "#e0e0e0"}}
                                onClick={() => setPostInEdit(false)}>
                                    Cancelar
                            </Button>
                        </EditArea>
                        
                    </>
                    : <ContentP>
                        {postHasBeenEdited 
                            ? postEdited
                            : content
                        }
                    </ContentP>}
                
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
                    <CommentsDiv>
                    {isOnCommentPage 
                        ? <><TfiComment opacity="70%"/></>
                        : <><CommentButton onClick={() => goToCommentsPage(navigate, id)}> <TfiComment/> </CommentButton></>
                        }
                        <LikeAndCommentsQuantity>{isOnCommentPage ? commentsQuantity : comments}</LikeAndCommentsQuantity>
                    </CommentsDiv>
                </LikeAndCommentsDiv>
            </PrincipalDiv>
            }
        </>
    )
}