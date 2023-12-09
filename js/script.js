const drumItens = document.querySelectorAll('.drum-item div');

drumItens.forEach((item) => {
  item.addEventListener('click', playSound);
});

// drumItens.forEach((item) => {
//   document.addEventListener('keypress', playKeypress);
// });

function playSound() {
  const startSound = document.querySelector(`.${this.className}-audio`);
  startSound.currentTime = 0;
  startSound.play();
}

// function playKeypress(event) {
//   console.log(event.key);
// }

//nome dos itens da bateria
drumItens.forEach((item) => {
  const p = document.createElement('p');
  p.innerText = item.className;
  item.appendChild(p);
});
