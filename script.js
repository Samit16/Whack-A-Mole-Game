const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const startButton = document.getElementById('start-btn');

let score = 0;
let timeLeft = 30;
let timerId;
let moleTimer;
let activeMole;

function randomHole() {
  if (activeMole) activeMole.classList.remove('up');

  const index = Math.floor(Math.random() * holes.length);
  const mole = holes[index].querySelector('.mole');
  mole.classList.add('up');
  activeMole = mole;
}

holes.forEach(hole => {
  const mole = hole.querySelector('.mole');
  mole.addEventListener('click', () => {
    if (mole.classList.contains('up')) {
      score++;
      scoreDisplay.textContent = score;
      mole.classList.remove('up');
    }
  });
});

function moveMole() {
  moleTimer = setInterval(randomHole, 800);
}

function countDown() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerId);
    clearInterval(moleTimer);
    if (activeMole) activeMole.classList.remove('up');
    alert("Game Over! 🎉 Your score: " + score);
    startButton.disabled = false;
  }
}

startButton.addEventListener('click', () => {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = timeLeft;
  if (activeMole) activeMole.classList.remove('up');

  moveMole();
  timerId = setInterval(countDown, 1000);
  startButton.disabled = true;
});