import SearchPage from '../pages/Search'
import AboutPage from '../pages/About'

export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const BUTTONS = {
  primary: 0
}

export const ROUTES = [
  {
    path: '/search/:query',
    Component: SearchPage
  },
  {
    path: '/:lang/about',
    Component: AboutPage
  }
]

export const i18n = {
  es: {
    title: 'Acerca de',
    link: 'Inicio'
  },
  en: {
    title: 'About',
    link: 'Home'
  }
}
