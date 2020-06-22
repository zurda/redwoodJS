export const QUERY = gql`
  query {
    movie: getMovie {
      title
      poster_path
      id
      overview
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ movie, setMovieTitle }) => {
  setMovieTitle(movie.title)
  return (
    <section>
      <h1 className="movieTitle">{movie.title}</h1>
      <h5>id: {movie.id}</h5>
      <h2
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <img src={movie.poster_path} style={{ maxWidth: '80rem' }} />
      </h2>
      <p style={{ maxWidth: '30rem' }}>{movie.overview}</p>
    </section>
  )
}
