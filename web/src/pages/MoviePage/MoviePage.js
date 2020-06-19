import { useState } from 'react'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import BlogLayout from 'src/layouts/BlogLayout'
import MovieCell from 'src/components/MovieCell'

const CREATE_REVIEW = gql`
  mutation CreateReviewMutation($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
    }
  }
`

const MoviePage = () => {
  const formMethods = useForm()
  const [movieTitle, setMovieTitle] = useState('')
  const [create, { loading, error }] = useMutation(CREATE_REVIEW, {
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    create({
      variables: {
        input: { ...data, rating: parseInt(data.rating), movie: movieTitle },
      },
    })
  }
  return (
    <BlogLayout>
      <MovieCell setMovieTitle={setMovieTitle} />
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        Submit a review for {movieTitle}:
        <Label name="rating" />
        <TextField
          name="rating"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /^(0|[0-5]*)$/,
            },
            message: 'Please enter a number between 0 and 5',
          }}
        />
        <FieldError name="rating" />
        <Label name="message" />
        <TextAreaField name="message" errorClassName="error" />
        <FieldError name="message" />
        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </BlogLayout>
  )
}

export default MoviePage
