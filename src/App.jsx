import { Router } from './components/Router'
import { ROUTES } from './utils/const'
import { Route } from './components/Route'
import { Suspense, lazy } from 'react'

const lazyHomePage = lazy(() => import('./pages/Home.jsx'))
const lazyAboutPage = lazy(() => import('./pages/About.jsx'))
const lazyPage404 = lazy(() => import('./pages/Page404.jsx'))

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router
          routes={ROUTES}
          defaultComponent={lazyPage404}
        >
          <Route
            path='/'
            Component={lazyHomePage}
          />
          <Route
            path='/about'
            Component={lazyAboutPage}
          />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
