
function setProperties(prop, value, element) {
  console.log(prop, value, element)
  const attribute = value
  return element.setAttribute(prop, attribute)
}

export function createElement(type, props, content) {
  // Creando tipo de elemento
  const element = document.createElement(type)

  // Contenido
  if (content) {
    element.textContent = content
  }
  // Propiedades
  Object.keys(props).forEach(prop => setProperties(prop, props[prop], element ))

  // console.log(Object.keys(props))

  return element
}

