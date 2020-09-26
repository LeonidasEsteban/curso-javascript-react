function render(element, container) {
  if (typeof element === 'string' || element instanceof Element) {
    return container.append(element)
  }
  const childElement = element.render()
  container.append(childElement)
}


export {
  render
}