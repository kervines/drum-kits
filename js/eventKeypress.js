// import initPlaySound from './playSound.js';
export default function initKeypress() {}
const keys = document.querySelectorAll('[data-key]');

keys.forEach((elem) => {
  addEventListener('keypress', (e) => {
    if (elem.dataset.key === e.key) {
      const startSound = document.querySelector(`.${elem.className}-audio`);
      elem.style.scale = '0.95';
      setTimeout(() => {
        elem.style.scale = '1';
      }, 100);
      startSound.currentTime = 0;
      startSound.play();
    }
  });
});
