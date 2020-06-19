import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ReviewForm from 'src/components/ReviewForm'

export const QUERY = gql`
  query FIND_REVIEW_BY_ID($id: Int!) {
    review: review(id: $id) {
      id
      movie
      name
      rating
      message
      createdAt
    }
  }
`
const UPDATE_REVIEW_MUTATION = gql`
  mutation UpdateReviewMutation($id: Int!, $input: UpdateReviewInput!) {
    updateReview(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ review }) => {
  const [updateReview, { loading, error }] = useMutation(
    UPDATE_REVIEW_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.reviews())
      },
    }
  )

  const onSave = (input, id) => {
    updateReview({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Review {review.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ReviewForm
          review={review}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
