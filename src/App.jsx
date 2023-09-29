import { Router } from './Router'
import { ROUTES } from '../utils/const'
import Page404 from './pages/Page404'

function App () {
  return (
    <main>
      <Router
        routes={ROUTES}
        DefaultComponent={Page404}
      />
    </main>
  )
}

export default App
