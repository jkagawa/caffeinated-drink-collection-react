import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import routes from './config/routes'
import AuthChecker from './auth/AuthChecker'
import { useEffect, useState } from 'react'
import { auth } from './config/firebase'

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)

  const currentUser = auth.currentUser
  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        setLoggedIn(true)
      } else {
          setLoggedIn(false)
      }
    })

  }, [currentUser])

  return (
    <BrowserRouter>
      <Nav loggedIn={loggedIn}/>
      <Routes>
        { routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected? (
                <AuthChecker>
                  <route.component />
                </AuthChecker>
              ) : (
                <route.component />
              )
            }
          />
        )) }
      </Routes>
    </BrowserRouter>
  )
}

export default App