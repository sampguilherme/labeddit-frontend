import { useState } from "react";
import { CommentButton, CommentsDiv, ContentP, LikeAndCommentsDiv, LikeAndDislikesDiv, LikeDislkeButton, LikeAndCommentsQuantity, PrincipalDiv, SentUserP, TopDiv } from "./CardPostStyles"
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import axios from "axios";
import { BASE_URL } from "../../constants/apiUrl";
import { goToCommentsPage, goToFeedPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    IconButton
  } from '@chakra-ui/react'


export const CardPost = ({post, isOnCommentPage, getPosts, isOnFeed}) => {

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

    const deletePost = async () => {
        try{
            await axios.delete(`${BASE_URL}/posts/${id}`, 
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }
            )
            if(isOnCommentPage){
                goToFeedPage(navigate)
            }
            if(isOnFeed){
                getPosts()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <PrincipalDiv>
            <TopDiv>
                <SentUserP>Enviado por: {creator.name}</SentUserP>
                {creator.id === localStorage.getItem('userId') 
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
                            {/*
                            <MenuItem icon={<FiEdit />}>
                                Edit post
                            </MenuItem>
                            */}
                            <MenuItem  icon={<MdDelete />} onClick={() => deletePost()}>
                                Delete post
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    : <></>}
                </TopDiv>
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
                <CommentsDiv>
                {isOnCommentPage 
                    ? <><TfiComment opacity="70%"/></>
                    : <><CommentButton onClick={() => goToCommentsPage(navigate, id)}> <TfiComment/> </CommentButton></>
                    }
                    <LikeAndCommentsQuantity>{commentsQuantity}</LikeAndCommentsQuantity>
                </CommentsDiv>
            </LikeAndCommentsDiv>
        </PrincipalDiv>
    )
}