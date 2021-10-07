const container = document.querySelector('.container')

function changeTile(){
  this.classList.toggle("alt")
}




for (i = 0; i < 16; i++) {
  for (j = 0; j < 16; j++) {

    const box = document.createElement('div')

    box.classList.add('box')
    box.addEventListener('mouseover', changeTile)
    container.appendChild(box)
  }
}

