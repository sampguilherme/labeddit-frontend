import { useContext, useEffect } from "react"
import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { DivInputs, H1, PrincipalDiv, SignupInput, Span, A, RegisterButton, NotificationDiv, P, ErrorP } from "./SignupStyles"

export const Signup = () => {



    const context = useContext(GlobalContext)

    const {
        getUsers,
        users,
        createUser,
        nickname,
        setNickname,
        email,
        setEmail,
        password,
        setPassword,
        error
    } = context

    useEffect(() => {
        getUsers()
    }, [])

    const emailRegex = /\S+@\S+\.\S+/
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    return(
        <body>
            <Header/>
            <PrincipalDiv>
                <H1>Olá, boas vindas ao LabEddit {';)'}</H1>
                <DivInputs>
                    <SignupInput placeholder="Apelido" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                    <SignupInput placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <SignupInput placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </DivInputs>
                {error ? <ErrorP>{error}</ErrorP> : <></>}
                <Span>Ao continuar você concorda com o nosso <A href="#">Contrato de usuário </A>
                    e a nossa <A href="#">Politica de Privacidade</A>
                </Span>
                <NotificationDiv>
                    <input type="checkbox"/>
                    <P>Eu concordo em receber emails sobre coisas legais no Labeddit</P>
                </NotificationDiv>
                <RegisterButton onClick={() => createUser()}>Cadastrar</RegisterButton>
            </PrincipalDiv>
        </body>
    )
}