import fetch from 'node-fetch'

import { getRandom } from 'src/utils/helpers'

const RESULTS_PAGES = 20

export const getMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.API_MOVIEDB_KEY
    }&language=en-US&include_adult=false&sort_by=vote_count.desc&include_video=false&page=${
      getRandom(RESULTS_PAGES) + 1
    }`
  )
  const json = await response.json()

  if (!json.total_results) {
    return new Error(`Something isn't right, please try again`)
  }

  let filmPosition = getRandom(json.results.length)
  const movie = json.results[filmPosition]

  return {
    title: movie.title,
    poster_path: `http://image.tmdb.org/t/p/w154${movie.poster_path}`,
  }
}
