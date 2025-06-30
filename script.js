const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');

let score = 0;
let timeLeft = 30;
let currentHole;
let timerId;
let moleTimer;

function randomHole() {
  holes.forEach(hole => hole.classList.remove('mole'));
  const randomIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[randomIndex];
  hole.classList.add('mole');
  currentHole = hole;
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === currentHole && hole.classList.contains('mole')) {
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('mole');
    }
  });
});

function moveMole() {
  moleTimer = setInterval(randomHole, 800);
}

function countDown() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timerId);
    clearInterval(moleTimer);
    alert('⏰ Time\'s up! Your final score is: ' + score);
  }
}
moveMole();
timerId = setInterval(countDown, 1000);
