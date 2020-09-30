import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Wrapper from './wrapper.js'
import Movie from './movie.js'
import store from '../store.js'
// import movies from '../movies.js'

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component {
  state = {
  }
  render() {
    const state = store.getState()
    const movieListId = state.list[state.filter]
    const movieList = state.movieList
    console.log(state)
    return Wrapper({
      children: MovieListStyled({
        children: movieListId.map(id => new Movie(movieList.get(id)))
      })
    })
  }
}

export default MovieList
