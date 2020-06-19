import { Link, routes } from '@redwoodjs/router'

import Reviews from 'src/components/Reviews'

export const QUERY = gql`
  query REVIEWS {
    reviews {
      id
      movie
      name
      rating
      message
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No reviews yet. '}
      <Link to={routes.newReview()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ reviews }) => {
  return <Reviews reviews={reviews} />
}
