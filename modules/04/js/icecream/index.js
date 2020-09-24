import { makeIcecream } from './icream-machine.js'

const $flavors = document.querySelectorAll('.flavor')
// console.log($flavors)
$flavors.forEach($el => $el.addEventListener('click', selectFlavor))
function selectFlavor() {
  this.classList.toggle('is-active')
}

window.btn.addEventListener('click', () => {
  const $flavors = document.querySelectorAll('.flavor.is-active')
  console.log($flavors)
  try {
    makeIcecream($flavors[0], $flavors[1])
  } catch (error) {
    alert('Aun no completa los sabores para preparar tu helado')
  }
})