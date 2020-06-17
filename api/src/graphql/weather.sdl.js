export const schema = gql`
  type Weather {
    zip: String!
    city: String!
    conditions: String!
    tempC: Int!
    tempF: Int!
    icon: String!
  }

  type Query {
    getWeather(zip: String!): Weather!
  }
`
