import { Component, createElement } from '../lib/react/index.js'
// import User from './user.js'
// import Wrapper from './wrapper.js'
// import UserStyled from './user-styled.js'


const element = createElement('h1', {
  class: 'title',
}, 'Hola mundo desde create element!')
console.log(element)

class App extends Component {
  render() {
    return `
      <div class="app">
        <h1>hola mundo!</h1>
      </div>
      `
  }
}

// ${new Wrapper({
//   children: `
//     <h1>React.js ⭐️⭐️⭐️⭐️⭐️</h1>
//     ${new User({
//       name: 'Ash',
//       avatar: './images/ash.jpg'
//     }).render()}
//     ${new UserStyled({
//       name: 'Ash',
//       avatar: './images/ash.jpg'
//     }).render()}
//   `
// }).render()}
export default App
