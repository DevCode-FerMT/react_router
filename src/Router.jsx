import { useEffect, useState } from 'react'
import { EVENTS } from '../utils/const'
import { match } from 'path-to-regexp'

export function Router ({ routes = [], DefaultComponent }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if (!matched) return false
    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}