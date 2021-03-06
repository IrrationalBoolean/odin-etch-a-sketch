
function changeTile(){
  this.classList.toggle("alt")
}

function resetBoard(){
  active = document.getElementsByClassName('alt')
  for (i=0; i < active.length;){
    active[i].classList.remove('alt')
  }
}

function makeBoxes(num){
  container = document.querySelector('.container')
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {

      const box = document.createElement('div')

      box.classList.add('box')
      box.addEventListener('mouseover', changeTile)
      container.appendChild(box)
    }
  }
}

function styleBoxes(num){
  divs = document.getElementsByClassName('box')
  for (i=0; i < divs.length; i++){
    divs[i].style.width = `${100 / num}%`
  }
}

function removeBoxes(){
  divs = document.getElementsByClassName('box')
  while (0 < divs.length){
    divs[0].remove()
  }
}

function makeBoard(num){
  removeBoxes()
  makeBoxes(num)
  styleBoxes(num)
}

function resetPrompt(){
  edge = parseInt(prompt('How many boxes wide?'))
  if (edge > 100) {
    edge = 100
  }

  makeBoard(edge)
}


makeBoard(10)
