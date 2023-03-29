import { A, LogoHeader, PrincipalDiv } from "./HeaderStyle"
import Logo from "../../assets/logo-labeddit.svg"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../Router/coordinator"


export const Header = (props) => {

    const navigate = useNavigate()

    return (
        <PrincipalDiv>
            <img src={Logo} alt="Logo labeddit"/>
            {
                props.isOnFeed ? 
                <A href="#" onClick={() => goToLoginPage(navigate)}>Logout</A> 
                :
                <A href="#" onClick={() => goToLoginPage(navigate)}>Entrar</A>
            }
            
        </PrincipalDiv>
    )
}