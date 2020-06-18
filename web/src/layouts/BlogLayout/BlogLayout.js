import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <div className="main">
        <div className="header">
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
                <Link to={routes.weather()}>Weather</Link>
              </li>
              <li>
                <Link to={routes.movie()}>Movie</Link>
              </li>
              <li>
                <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                  {isAuthenticated ? 'Log Out' : 'Log In'}
                </a>
              </li>
              {isAuthenticated && <li>{currentUser.email}</li>}
            </ul>
          </nav>
        </div>
        <div className="content">{children}</div>
      </div>
      <footer>
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
