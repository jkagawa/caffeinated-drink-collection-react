import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() };
export function googleSignout(setLoggedIn: any) {
    auth.signOut()
     
    .then(function() {
       console.log('Signout Succesfull')
       setLoggedIn(false)
    }, function(error) {
       console.log('Signout Failed')  
    });
 }