import { createElement } from './react/index.js'

const styled = {}

const elements = [
  'h1',
  'p',
  'div',
  'img',
  'article',
  'footer',
  'header'
]


elements.forEach((tag) => {
  styled[tag] = function (styles) {
    return function (props, content) {
      return createElement(tag, {
        ...props,
        style: styles,
      }, content)

    }
  }
})




export default styled
