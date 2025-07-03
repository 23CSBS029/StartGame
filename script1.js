// Select player sections
const player0Section = document.querySelector('.player-0-section');
const player1Section = document.querySelector('.player-1-section');

// Select elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game state variables
let scores, currentScore, activePlayer, playing;

// Initialize the game
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0Section.classList.add('player--active');
  player1Section.classList.remove('player--active');
  player0Section.classList.remove('player--winner');
  player1Section.classList.remove('player--winner');

  diceEl.style.display = 'none';
}

init();

// Switch player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
}

// Roll Dice button click
btnRoll.addEventListener('click', function () {
  if (!playing) return;

  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.style.display = 'block';
  diceEl.src = `images/dice${dice}.jpg`;
 

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

// Hold score button
btnHold.addEventListener('click', function () {
  if (!playing) return;

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.style.display = 'none';
    document.querySelector(`.player-${activePlayer}-section`).classList.add('player--winner');
    player0Section.classList.remove('player--active');
    player1Section.classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

// New game button
btnNew.addEventListener('click', init);
