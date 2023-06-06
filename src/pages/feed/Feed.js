import { CardPost } from "../../components/CardPosts/CardPost"
import { Header } from "../../components/Header/Header"
import { Line, PostButton, PrincipalDiv, Textarea } from "./FeedStyles"
import { useContext, useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Spinner, useDisclosure } from '@chakra-ui/react'
import { BASE_URL } from "../../constants/apiUrl"
import { GlobalContext } from "../../contexts/GlobalContext"

export const Feed = () => {

    const context = useContext(GlobalContext)
    const { token } = context

    const isOnFeed = true

    const [posts, setPosts] = useState([])

    const [newPost, setNewPost] = useState("")

    const [postsInLoading, setPostsInLoading] = useState(false)
    const [createInLoading, setCreateInLoading] = useState(false)

    const headers = {
        headers: {
            Authorization: token
        }
    }

    console.log(token)

    const getPosts = async () => {
        try {
                setPostsInLoading(true)
                const response = await axios.get(`${BASE_URL}/posts`, headers)
                setPostsInLoading(false)
                setPosts(response.data.reverse())
        } catch (error) {
            setPostsInLoading(false)
            console.log(error)
        }
    }

    const createPost = async () => {
        const body = {
            content: newPost
        }
        try {
            setCreateInLoading(true)
            await axios.post(`${BASE_URL}/posts`, body, headers)
            setCreateInLoading(false)
            setNewPost("")
            getPosts()
        } catch (error) {
            setCreateInLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return(
        <PrincipalDiv>
            <Header/>
            <Textarea placeholder="Digite seu post..." value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
            {createInLoading ? 
                <Spinner marginTop={"14px"} marginBottom={"28px"}/>
                :
                <PostButton onClick={() => createPost()}>Postar</PostButton>
            }
            <Line/>
            {postsInLoading ? 
                <Spinner marginTop={"14px"} marginBottom={"28px"}/>
                :
                posts.map((post) => (
                    <CardPost
                        post={post}
                        key={post.id}
                    />
                ))
            }
            
            
        </PrincipalDiv>
    )
}