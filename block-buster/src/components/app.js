import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Header from './header.js'
import Actions from './actions.js'
import Search from './search.js'
import Filters from './filters.js'

const AppStyled = styled.div``

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [
            new Search(),
            new Filters(),
          ]
        })
      ]
    })
  }
}

export default App