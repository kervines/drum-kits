const kick = document.querySelector('.kick');
const crash = document.querySelector('.crash');
const tom = document.querySelector('.tom');
const ride = document.querySelector('.ride');
const snare = document.querySelector('.snare');
const sticks = document.querySelector('.sticks');

kick.addEventListener('click', playKick);
function playKick() {
  const play = document.querySelector('.kick-audio');
  play.play();
}
tom.addEventListener('click', playTom);
function playTom() {
  const play = document.querySelector('.tom-audio');
  play.play();
}
crash.addEventListener('click', playCrash);
function playCrash() {
  const play = document.querySelector('.crash-audio');
  play.play();
}
ride.addEventListener('click', playRide);
function playRide() {
  const play = document.querySelector('.ride-audio');
  play.play();
}
snare.addEventListener('click', playSnare);
function playSnare() {
  const play = document.querySelector('.snare-audio');
  play.play();
}
sticks.addEventListener('click', playSticks);
function playSticks() {
  const play = document.querySelector('.sticks-audio');
  play.play();
}
