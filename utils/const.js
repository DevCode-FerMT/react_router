import HomePage from '../src/pages/Home'
import AboutPage from '../src/pages/About'
import SearchPage from '../src/pages/Search'

export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const BUTTONS = {
  primary: 0
}

export const ROUTES = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]
