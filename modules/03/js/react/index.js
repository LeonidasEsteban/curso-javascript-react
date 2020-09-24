function component(strings, ...dynamicValues) {
  return function (props) {
    let newContent = strings.slice()
    console.log(newContent)
    dynamicValues.forEach((value, index) => {
      newContent[index] += props[value]
    })
    return newContent.join('')
  }
}

export {
  component
}
