export const schema = gql`
  type Movie {
    title: String!
    poster_path: String!
    overview: String
    id: Int
  }

  type Query {
    getMovie: Movie!
  }
`
