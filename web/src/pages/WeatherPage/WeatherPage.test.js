import { render, cleanup } from '@redwoodjs/testing'

import WeatherPage from './WeatherPage'

describe('WeatherPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherPage />)
    }).not.toThrow()
  })
})
