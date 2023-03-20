import { useEffect, useState } from "react"
import Button from "./Button"
import { Link } from 'react-router-dom'
import { auth, Providers } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

interface Props {
    loggedIn: boolean
}

function Nav({ loggedIn }: Props) {
    const [ isVisible, setIsVisible ] = useState(false)

    function toggleMenu() {
        setIsVisible(!isVisible)
    }

    function googleSignOut() {
        signOut(auth)
        toggleMenu()
     }

     const googleSignIn = async () => {
        const response = await signInWithPopup(auth, Providers.google)
        if(response.user) {
            location.reload()
        }
    }

    const currentUser = loggedIn

    return (
        <nav className='flex flex-row items-center justify-between flex-wrap w-full fixed p-3 bg-[#3C3549] text-white z-10'>
        <div className='mr-3 text-2xl h-8'>
            Caffeinated!
        </div>
        <div>
            <button 
                onClick={toggleMenu}
                className='flex items-center justify-center text-gray-400 border border-[#3C3549] rounded hover:text-white hover:border-white py-1 px-2 text-xl'
            >
                <i className='fas fa-bars'></i>
            </button>
        </div>
        {
            isVisible? (
                <div className='w-full block'>
                    <div className="flex flex-col items-end">
                        <Button className="py-3 px-1 text-gray-400 hover:text-white">
                            <Link to='/' onClick={toggleMenu}>
                                Home
                            </Link>
                        </Button>
                        <Button className="py-3 px-1 text-gray-400 hover:text-white">
                            <Link to='/about' onClick={toggleMenu}>
                                About
                            </Link>
                        </Button>
                        <Button className="py-3 px-1 text-gray-400 hover:text-white">
                            <Link to='/dashboard' onClick={toggleMenu}>
                                Dashboard
                            </Link>
                        </Button>
                        {
                            !currentUser? (
                                <Button className="py-3 px-1 text-gray-400 hover:text-white">
                                    <Link to='/' onClick={googleSignIn}>
                                    Login
                                    </Link>
                                </Button>
                            ) : (
                                <Button className="py-3 px-1 text-gray-400 hover:text-white">
                                    <Link to='/' onClick={googleSignOut}>
                                        Sign Out
                                    </Link>
                                </Button>
                            )
                        }
                        
                    </div>
                </div>
            ) : (
                <></>
            )
        }
        
        </nav>
  )
}

export default Nav