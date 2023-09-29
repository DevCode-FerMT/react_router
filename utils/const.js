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
    path: '/search/:query',
    Component: SearchPage
  }
]
