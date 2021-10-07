const container = document.querySelector('.container')


for (i = 0; i < 16; i++) {
  for (j = 0; j < 16; j++) {

    const box = document.createElement('div')
box.classList.add('box')
    container.appendChild(box)
  }
}

