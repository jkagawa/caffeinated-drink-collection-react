import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getRedirectResult, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode,
    setLoggedIn: (value: boolean) => void
}

const AuthChecker = (prop: Props) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.currentUser) {
            navigate('../')

            Providers.google.setCustomParameters({
                prompt: 'select_account'
            });

            signInWithPopup(auth, Providers.google)
            .then((result) => {
                console.log('Login Succesfull')
                console.log(result)
                prop.setLoggedIn(true)
            }).catch((error) => {
                console.log('Login Failed')
                console.log(error)
            });
        }
    }, [])

    return (
        <>{prop.children}</>
    )
}

export default AuthChecker