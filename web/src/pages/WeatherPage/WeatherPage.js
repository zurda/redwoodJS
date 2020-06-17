import { Form, TextField, Submit } from '@redwoodjs/web'
import { useState } from 'react'
import WeatherCell from 'src/components/WeatherCell'
import BlogLayout from 'src/layouts/BlogLayout'

const WeatherPage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <BlogLayout>
      Please enter a valid US zipcode
      <Form onSubmit={onSubmit} style={{ fontSize: '20rem' }}>
        <TextField
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit>Go</Submit>
      </Form>
      {zip && <WeatherCell zip={zip} />}
    </BlogLayout>
  )
}

export default WeatherPage
