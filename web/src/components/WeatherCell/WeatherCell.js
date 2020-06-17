export const QUERY = gql`
  query($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      tempC
      tempF
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <span
    style={{
      backgroundColor: '#ffdfdf',
      color: '#990000',
      padding: '0.5rem',
      display: 'inline-block',
    }}
  >
    {error.message.replace('GraphQL error: ', '')}
  </span>
)

export const Success = ({ weather }) => {
  return (
    <section>
      <h1>{weather.city}</h1>
      <h2
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <img src={weather.icon} style={{ maxWidth: '4rem' }} />
        <span>
          {weather.tempF}°F ({weather.tempC}°C) and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
