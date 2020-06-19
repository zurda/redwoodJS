import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ReviewForm from 'src/components/ReviewForm'

const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReviewMutation($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
    }
  }
`

const NewReview = () => {
  const [createReview, { loading, error }] = useMutation(
    CREATE_REVIEW_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.reviews())
      },
    }
  )

  const onSave = (input) => {
    createReview({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Review</h2>
      </header>
      <div className="rw-segment-main">
        <ReviewForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewReview
