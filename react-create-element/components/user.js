import { Component, createElement } from '../lib/react/index.js'

class User extends Component {
  displayName = 'User'
  state = {
    age: this.props.age
  }
  componentDidMount() {
    console.log(`el componente ${this.displayName} se renderizó`)
  }
  componentWillMount() {
    console.log(`el componente ${this.displayName} se va a renderizar por primera vez`)
  }
  componentDidUpdate() {
    console.log(`el componente ${this.displayName} se actualizó`)
  }
  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick(event) {
  //   console.log(this.props.name, event)
  // }
  handleClick = (event) => {
    console.log(this.state.age)
    this.setState({
      age: this.state.age + 1,
    })
  }
  render() {

    const { avatar, name } = this.props
    const { age } = this.state
    return createElement('div', {
      class: 'user',
      onClick: this.handleClick,
      children: [
        createElement('div', {
          class: 'avatar',
          children: createElement('img', {
            src: avatar
          })
        }),
        createElement('h2', null, `Hola soy ${name} y tengo ${age} años`)
      ]
    })
  }
}

export default User