import store from './store.js'
import { BURN } from './actions/index.js'

store.subscribe(() => {
  // console.log('ha cambiado algo en el store', store.getState())
  window.result.textContent = `Haz quemado ${store.getState()} calorías`
})

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  })
}

window.burn.addEventListener('click', burn)
