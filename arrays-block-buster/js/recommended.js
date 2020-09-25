import movies from './movies.js'
import render from './render.js'

const $button = window.recommended
// const $button = document.querySelector('#recommended')
// const $button = document.getElementById('recommended')

$button.addEventListener('click', () => {
  render(setRecomendedMovies(movies))
})

function setRecomendedMovies(movies) {
  return movies.map((movie, index) => {
    return { ...movie, recommended: movie.vote_average > 7 }
    // if (movie.vote_average > 7) {
    //   return { ...movie, recommended: true }
    // }
    // return movie
  })
  // console.table(newMovies, ['title', 'vote_average', 'recommended'])
}