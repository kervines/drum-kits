export default function initEventClick() {
  const drumItens = document.querySelectorAll('[data-key]');

  drumItens.forEach((item) => {
    item.addEventListener('click', initPlaySound);
  });

  function initPlaySound() {
    const startSound = document.querySelector(`.${this.className}-audio`);
    startSound.currentTime = 0;
    startSound.play();
  }

  //nome dos itens da bateria
  drumItens.forEach((item) => {
    const p = document.createElement('p');
    p.innerText = `${item.className} (${item.dataset.key})`;
    item.appendChild(p);
  });
}
