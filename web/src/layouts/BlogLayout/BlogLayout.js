import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <h1>
          <Link to={routes.home()}>Zurda RW</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </a>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
        {children}
      </div>
      <footer style={{ textAlign: 'center' }}>
        <p>
          Built with RedwoodJs
          <br />
          Michal Weisman | June 2020
        </p>
      </footer>
    </>
  )
}

export default BlogLayout
