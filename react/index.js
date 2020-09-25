import { render } from './lib/react-dom.js'
import User from './components/user.js'

const container = document.querySelector('#root')

render(new User({
  avatar: './images/ash.jpg',
  name: 'Ash',
}), container)