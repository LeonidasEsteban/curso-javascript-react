import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'

const store = createStore(reducer, 0)

export default store
