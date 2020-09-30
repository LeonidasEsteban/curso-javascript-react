import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'
import movies from './movies.js'

const initialState = {
  movieList: movies,
  filter: 'all'
}

const store = createStore(reducer, initialState)

export default store
