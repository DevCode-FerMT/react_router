import { Router } from './Router'
import { ROUTES } from '../utils/const'
import { Route } from './Route'
import Page404 from './pages/Page404'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

function App () {
  return (
    <main>
      <Router
        routes={ROUTES}
        DefaultComponent={Page404}
      >
        <Route
          path='/'
          Component={HomePage}
        />
        <Route
          path='/about'
          Component={AboutPage}
        />
      </Router>
    </main>
  )
}

export default App
