import rawMoviesList from './movies.js'

const movieList = rawMoviesList.reduce((list, movie) => {
  list.set(movie.id, movie)
  return list
}, new Map())


const all = rawMoviesList.map(movie => movie.id)

const popular = rawMoviesList.reduce((list, movie) => {
  if (movie.vote_average > 7) {
    list.push(movie.id)
  }
  return list
}, [])

const notPopular = rawMoviesList.reduce((list, movie) => {
  if (movie.vote_average <= 7) {
    list.push(movie.id)
  }
  return list
}, [])

export {
  movieList,
  all,
  popular,
  notPopular
}