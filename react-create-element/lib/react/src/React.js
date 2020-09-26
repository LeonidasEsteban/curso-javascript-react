class Component {
  constructor(props = {}, state = {}) {
    this.props = props
    this.state = state
  }
  update() {}
  #updater(){
    this.update(this.render())

  }
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.#updater()
  }
}

export {
  Component
}