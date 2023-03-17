import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../Router/coordinator"
import { ButtonContinue } from "../login/LoginStyles"

export const Home = () => {

    const navigate = useNavigate()

    return(
        <>
            <h1>Home</h1>
            <ButtonContinue onClick={() => goToLoginPage(navigate)}>Login</ButtonContinue>
        </>
    )
}