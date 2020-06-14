import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query {
    posts {
      id
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h3>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h3>
        <p>
          Posted at: <time>{post.createdAt}</time>
        </p>
      </header>
    </article>
  ))
}
