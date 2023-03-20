import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getRedirectResult, signInWithPopup, signInWithRedirect, onAuthStateChanged } from "firebase/auth"
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode
}

const AuthChecker = ({children}: Props) => {

    const navigate = useNavigate();

    useEffect(() => {

        // if(!auth.currentUser) {
        //     navigate('../')
        
        //     Providers.google.setCustomParameters({
        //         prompt: 'select_account'
        //     });

        //     signInWithPopup(auth, Providers.google)
        // }

    }, [])

    return (
        <>{children}</>
    )
}

export default AuthChecker