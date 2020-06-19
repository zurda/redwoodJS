import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReviewMutation($id: Int!) {
    deleteReview(id: $id) {
      id
    }
  }
`

const Review = ({ review }) => {
  const [deleteReview] = useMutation(DELETE_REVIEW_MUTATION, {
    onCompleted: () => {
      navigate(routes.reviews())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete review ' + id + '?')) {
      deleteReview({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Review {review.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{review.id}</td>
            </tr>
            <tr>
              <th>movie</th>
              <td>{review.movie}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{review.name}</td>
            </tr>
            <tr>
              <th>rating</th>
              <td>{review.rating}</td>
            </tr>
            <tr>
              <th>message</th>
              <td>{review.message}</td>
            </tr>
            <tr>
              <th>createdAt</th>
              <td>{review.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editReview({ id: review.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(review.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Review
