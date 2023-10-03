import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>404 not found</h1>
        <img
          src='https://midu.dev/images/this-is-fine-404.gif'
          alt='gif'
        />
      </div>
      <Link to='/'>Home</Link>
    </>
  )
}
