import { useContext } from "react"
import { CardPost } from "../../components/CardPostAndResponse/CardPost"
import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Line, InputPost, PostButton, PrincipalDiv } from "./FeedStyles"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Spinner } from '@chakra-ui/react'

export const Feed = () => {

    const isOnFeed = true

    const [posts, setPosts] = useState([])

    const [newPost, setNewPost] = useState("")

    const [postsInLoading, setPostsInLoading] = useState(false)
    const [createInLoading, setCreateInLoading] = useState(false)

    const getPosts = async () => {
        try {
                setPostsInLoading(true)
                const response = await axios.get(`https://labeddit-backend-ka62.onrender.com/posts`,
                    {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    }
                )
                setPostsInLoading(false)
                setPosts(response.data)
        } catch (error) {
            setPostsInLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const createPost = async () => {
        const body = {
            token: localStorage.getItem('token'),
            content: newPost
        }
        try {
            setCreateInLoading(true)
            await axios.post(`https://labeddit-backend-ka62.onrender.com/posts`, body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            setCreateInLoading(false)
            setNewPost("")
            getPosts()
        } catch (error) {
            setCreateInLoading(false)
            console.log(error)
        }
    }

    return(
        <PrincipalDiv>
            <Header isOnFeed={isOnFeed}/>
            <InputPost placeholder="Escreva seu post..." value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
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