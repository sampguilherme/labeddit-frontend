import { A, ExitButton, PrincipalDiv } from "./HeaderStyle"
import Logo from "../../assets/logo-labeddit.svg"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToLoginPage } from "../../Router/coordinator"


export const Header = (props) => {

    const navigate = useNavigate()

    return (
        <PrincipalDiv>
            {
                props.isOnCommentPage 
                ? <ExitButton onClick={() => goToFeedPage(navigate)}>X</ExitButton>
                : <></>
            }
            
            <img src={Logo} alt="Logo labeddit"/>
            {
                props.isOnSignupPage
                ? <A href="#" onClick={() => goToLoginPage(navigate)}>Entrar</A>
                : <A href="#" onClick={() => goToLoginPage(navigate)}>Logout</A> 
            }
        </PrincipalDiv>
    )
}