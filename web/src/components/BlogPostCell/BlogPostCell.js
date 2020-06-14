export const QUERY = gql`
  query($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return (
    <article>
      <header>
        <h3>{post.title}</h3>
      </header>
      <p>{post.body}</p>
      <p>
        Posted at: <time>{post.createdAt}</time>
      </p>
    </article>
  )
}
