const elsPianoKeys = document.querySelectorAll('.piano__key');

elsPianoKeys.forEach(key => {
  key.addEventListener('click', () => {
    new Audio(`./audio/key-${key.dataset.key}.mp3`).play();
  })
})