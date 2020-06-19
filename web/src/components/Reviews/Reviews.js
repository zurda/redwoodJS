import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReviewMutation($id: Int!) {
    deleteReview(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const ReviewsList = ({ reviews }) => {
  const [deleteReview] = useMutation(DELETE_REVIEW_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete review ' + id + '?')) {
      deleteReview({ variables: { id }, refetchQueries: ['REVIEWS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>movie</th>
            <th>name</th>
            <th>rating</th>
            <th>message</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{truncate(review.id)}</td>
              <td>{truncate(review.movie)}</td>
              <td>{truncate(review.name)}</td>
              <td>{truncate(review.rating)}</td>
              <td>{truncate(review.message)}</td>
              <td>{timeTag(review.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.review({ id: review.id })}
                    title={'Show review ' + review.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editReview({ id: review.id })}
                    title={'Edit review ' + review.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete review ' + review.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(review.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReviewsList
