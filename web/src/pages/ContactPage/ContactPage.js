import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
  useMutation,
  FormError,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <BlogLayout>
      <p>
        Contact me: <a href="https://github.com/zurda">@zurda</a> on Github
      </p>
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
        <Label name="name" />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" />
        <Label name="email" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
            },
            message: 'Please enter a valid email address',
          }}
        />
        <FieldError name="email" />
        <Label name="message" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" />
        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
