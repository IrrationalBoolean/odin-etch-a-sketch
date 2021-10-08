const container = document.querySelector('.container')

function changeTile(){
  this.classList.toggle("alt")
}

function resetBoard(){
  active = document.getElementsByClassName('alt')
  for (i=0; i < active.length;){
    active[i].classList.remove('alt')
  }
}

function makeBoard(num){
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {

      const box = document.createElement('div')

      box.classList.add('box')
      box.addEventListener('mouseover', changeTile)
      container.appendChild(box)
    }
  }
  divs = document.getElementsByClassName('box')
  for (i=0; i < divs.length; i++){
    divs[i].style.width = `${100 / num}%`
  }
}
makeBoard(25)
