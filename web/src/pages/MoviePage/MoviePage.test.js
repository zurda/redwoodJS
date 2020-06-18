import { render, cleanup } from '@redwoodjs/testing'

import MoviePage from './MoviePage'

describe('MoviePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<MoviePage />)
    }).not.toThrow()
  })
})
