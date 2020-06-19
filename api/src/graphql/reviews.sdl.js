import gql from 'graphql-tag'

export const schema = gql`
  type Review {
    id: Int!
    movie: String!
    name: String
    rating: Int!
    message: String
    createdAt: DateTime!
  }

  type Query {
    reviews: [Review!]!
    review(id: Int!): Review!
  }

  input CreateReviewInput {
    movie: String!
    name: String
    rating: Int!
    message: String
  }

  input UpdateReviewInput {
    movie: String
    name: String
    rating: Int
    message: String
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review!
    updateReview(id: Int!, input: UpdateReviewInput!): Review!
    deleteReview(id: Int!): Review!
  }
`
