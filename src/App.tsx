import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import routes from './config/routes'
import AuthChecker from './auth/AuthChecker'
import { useState } from 'react'

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <BrowserRouter>
      <Nav 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        { routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected? (
                <AuthChecker setLoggedIn={setLoggedIn}>
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