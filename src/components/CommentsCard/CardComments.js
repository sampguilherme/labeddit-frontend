import { useState } from "react";
import { TbArrowBigUp, TbArrowBigUpFilled, TbArrowBigDown, TbArrowBigDownFilled } from "react-icons/tb";
import axios from "axios";
import { BASE_URL } from "../../constants/apiUrl";
import { ContentP, EditArea, LikeAndCommentsQuantity, LikeAndDislikesDiv, LikeDislkeButton, PrincipalDiv, SentUserP, Textarea, TopDiv } from "./CardCommentsStyles";
import { MdDelete } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    IconButton,
    useDisclosure
} from '@chakra-ui/react'
import { DeleteModal } from "../DeleteModal/DeleteModal";

export const CardComments = ({comment, setCommentsQuantity, commentsQuantity}) => {

    const userId = localStorage.getItem('userId')

    const {content, likes, creator, id, likedOrDisliked } = comment

    const [likesQuantity, setLikesQuantity] = useState(likes)
    const [dislikedOrLiked, setDislikedOrLiked] = useState(likedOrDisliked)

    const [ commentInEdit, setCommentInEdit ] = useState(false)
    const [ commentEdited, setCommentEdited ] = useState(content)
    const [ commentDeleted, setCommentDeleted ] = useState(false)
    const [ commentHasBeenEdited, setCommentHasBeenEdited ] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const isComment = true

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
                
                if(likeOrDislike){
                    if(dislikedOrLiked !== "ALREADY LIKED"){
                        setDislikedOrLiked("ALREADY LIKED")
                        setLikesQuantity(likesQuantity+1)
                    } else {
                        setDislikedOrLiked(null)
                        setLikesQuantity(likesQuantity - 1)
                    }
                } else if(likeOrDislike === false){
                    if(dislikedOrLiked !== "ALREADY DISLIKED"){
                        setDislikedOrLiked("ALREADY DISLIKED")
                        if(dislikedOrLiked === "ALREADY LIKED"){
                            setLikesQuantity(likesQuantity - 1)
                        }
                    } else {
                        setDislikedOrLiked(null)
                    }
                }

        } catch (error) {
            console.log(error)
        }
    }

    const editComment = async () => {
        const body = {
            content: commentEdited
        }
        try{
            await axios.put(`${BASE_URL}/comments/${id}`, body, headers)
            setCommentInEdit(false)
            setCommentHasBeenEdited(true)
        } catch (error) {
            console.log(error)
        }
    }

return (
    <>
    {commentDeleted 
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
                        <MenuItem icon={<FiEdit />} onClick={() => setCommentInEdit(true)}>
                            Editar comentário
                        </MenuItem>

                        <MenuItem  icon={<MdDelete />} onClick={onOpen}>
                            Deletar comentário
                        </MenuItem>
                        <DeleteModal isOpen={isOpen}
                            onClose={onClose}
                            setCommentDeleted={setCommentDeleted}
                            id={id}
                            setCommentsQuantity={setCommentsQuantity}
                            commentsQuantity={commentsQuantity}
                            isComment={isComment}/>
                    </MenuList>
                </Menu>
                : <></>}
        </TopDiv>
        {commentInEdit
            ? <>
                <Textarea type="text" value={commentEdited} onChange={(e) => setCommentEdited(e.target.value)}/>
                <EditArea>
                    <Button
                        bgColor={"#FBFBFB"}
                        border={"1px solid #3182CE"}
                        h="32px"
                        _hover={{bgColor: "#3182CE", color: "white"}}
                        onClick={() => editComment()}>
                            Salvar
                    </Button>
                    <Button
                        bgColor={"#FBFBFB"}
                        border={"1px solid #41484B"}
                        h="32px"
                        _hover={{bgColor: "#e0e0e0"}}
                        onClick={() => setCommentInEdit(false)}>
                            Cancelar
                    </Button>
                </EditArea>
            </>
            : <ContentP>
                {commentHasBeenEdited 
                    ? commentEdited
                    : content
                }
            </ContentP>}
        
            <LikeAndDislikesDiv>
                <LikeDislkeButton 
                    onClick={
                        () => LikeOrDislikeComment(true)
                    }
                > {dislikedOrLiked === "ALREADY LIKED" ? <TbArrowBigUpFilled color="blue"/> : <TbArrowBigUp className="arrowLike"/>} </LikeDislkeButton>

                <LikeAndCommentsQuantity>{likesQuantity}</LikeAndCommentsQuantity>
                <LikeDislkeButton
                    onClick={
                        () => LikeOrDislikeComment(false)
                    }
                > {dislikedOrLiked === "ALREADY DISLIKED" ? <TbArrowBigDownFilled color="red"/> : <TbArrowBigDown className="arrowDislike"/>} </LikeDislkeButton>
            </LikeAndDislikesDiv>
    </PrincipalDiv>
    }
    
    </>
)
}