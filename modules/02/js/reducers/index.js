import { BURN } from '../actions/index.js'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      return state + payload
    default:
      return state
  }
}

export default reducer