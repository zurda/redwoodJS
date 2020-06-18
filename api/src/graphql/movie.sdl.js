export const schema = gql`
  type Movie {
    title: String!
    poster_path: String!
  }

  type Query {
    getMovie: Movie!
  }
`
