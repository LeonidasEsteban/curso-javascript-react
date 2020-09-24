video.addEventListener('click', function () {
  console.log('click')
  this.classList.add('hidden')
  import('./player.js').then(({ player }) => {
    // console.log(player.play())
    setTimeout(() => {
      player.play()
    }, 100)
  })
})