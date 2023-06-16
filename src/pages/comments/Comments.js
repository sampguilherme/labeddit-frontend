import { useParams } from "react-router-dom"
import { CardPost } from "../../components/CardPosts/CardPost"
import { BASE_URL } from "../../constants/apiUrl"
import { useEffect, useState } from "react"
import axios from "axios"
import { Spinner } from "@chakra-ui/react"
import { CardComments } from "../../components/CommentsCard/CardComments"
import { Header } from "../../components/Header/Header"
import { CommentButton, Line, PostDiv, PrincipalDiv, Textarea } from "./CommentsStyles"

export const Comments = () => {

    const isOnCommentPage = true

    const [post, setPost] = useState([])
    const [postInLoading, setPostInLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState()
    const [ commentsQuantity, setCommentsQuantity ] = useState()

    const { postId } = useParams()

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const getPost = async () => {
        try {
                setPostInLoading(true)
                const response = await axios.get(`${BASE_URL}/posts/?q=${postId}`, headers)
                setPostInLoading(false)
                setPost(response.data)
                setCommentsQuantity(response.data[0].comments)
        } catch (error) {
            setPostInLoading(false)
            console.log(error)
        }
    }

    const getComments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/comments/${postId}`, headers)
                setComments(response.data.reverse())
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createComment = async () => {
        const body = {
            content: newComment
        }
        try {
            
            await axios.post(`${BASE_URL}/comments/${postId}`, body, headers)
            setNewComment("")
            getComments()
            setCommentsQuantity(commentsQuantity + 1)
        } catch (error) {
            
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
        getComments()
    }, [])


    return(
        <PrincipalDiv>
            <Header isOnCommentPage={isOnCommentPage}/>
            { postInLoading 
                ? <Spinner marginTop={"14px"} marginBottom={"28px"}/>
                : <PostDiv>
                    {post.map((post) => (
                        <CardPost
                            post={post}
                            key={post.id}
                            commentsQuantity={commentsQuantity}
                            isOnCommentPage={isOnCommentPage}
                         />
                        ))
                    }

                    <Textarea placeholder="Digite seu comentário..." value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                    <CommentButton onClick={() => createComment()}>
                        Responder</CommentButton>
                </PostDiv>
            }
            
                <Line/>
            

            {postInLoading ? 
                <Spinner marginTop={"14px"} marginBottom={"28px"}/>
                :
                comments.map((comment) => (
                    <CardComments
                        setCommentsQuantity={setCommentsQuantity}
                        commentsQuantity={commentsQuantity}
                        comment={comment}
                        key={comment.id}
                    />
                ))
            }

        </PrincipalDiv>
    )
}