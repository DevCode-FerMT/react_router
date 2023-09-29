import { useEffect, useState } from 'react'
import { EVENTS } from '../utils/const'

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

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}
