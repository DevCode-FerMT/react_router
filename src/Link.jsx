import { EVENTS } from '../utils/const'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado para avisar que se ha cambiado la URL
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // enviar el evento para que se pueda escuchar
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
