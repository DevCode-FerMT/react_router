import { Link } from '../components/Link'
import { i18n } from '../utils/const'

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <h1>{i18n.title}</h1>
      <Link to='/'>{i18n.link}</Link>
    </>
  )
}
