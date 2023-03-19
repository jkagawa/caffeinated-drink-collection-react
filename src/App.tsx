import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import routes from './config/routes'
import AuthChecker from './auth/AuthChecker'

function App() {

  return (
    <BrowserRouter>
      <Nav />
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