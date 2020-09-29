import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Header from './header.js'

const AppStyled = styled.div``

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header()
      ]
    })
  }
}

export default App