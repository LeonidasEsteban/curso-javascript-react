const styled = {
  h1: function (styles) {
    return function (content) {
      return `
        <h1 style="${styles}">
          ${content}
        </h1>
      `
    }
  },
  h2: '',
  div: '',
}

export default styled