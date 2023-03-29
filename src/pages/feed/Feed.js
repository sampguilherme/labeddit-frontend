import { CardPost } from "../../components/CardPostAndResponse/CardPost"
import { Header } from "../../components/Header/Header"
import { Line, InputPost, PostButton, PrincipalDiv } from "./FeedStyles"

export const Feed = () => {


    const isOnFeed = true

    return(
        <PrincipalDiv>
            <Header isOnFeed={isOnFeed}/>
            <InputPost placeholder="Escreva seu post..."/>
            <PostButton>Postar</PostButton>
            <Line/>
            <CardPost/>
        </PrincipalDiv>
    )
}