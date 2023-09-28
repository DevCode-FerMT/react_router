import { useEffect, useState } from 'react'

const NAV_EVNT = 'pushState'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado para avisar que se ha cambiado la URL
  const navigationEvent = new Event(NAV_EVNT)
  // enviar el evento para que se pueda escuchar
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate('/about')}>About</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAV_EVNT, onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener(NAV_EVNT, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App
