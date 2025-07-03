// Selecting DOM elements
const againButton = document.querySelector('.again');
const numberBox = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreSpan = document.querySelector('.score');
const highscoreSpan = document.querySelector('.highscore');

// Initial game state
let score = 20;
let highscore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber)

// Function to display a message
const displayMessage = (msg) => {
  message.textContent = msg;
};

// Check button click event
checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // No input
  if (!guess) {
    displayMessage('⛔ No number entered!');
  } 
  // Correct guess
  else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    numberBox.textContent = randomNumber;
    document.body.style.backgroundColor = '#60b347';
    numberBox.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreSpan.textContent = highscore;
    }
  } 
  // Wrong guess
  else {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreSpan.textContent = score;
    } else if(score==0){
        displayMessage('💥 You lost the game ');
        scoreSpan.textContent=0;
        guessInput.style.display = 'none';
        checkButton.style.display = 'none';
    }
    else {
      displayMessage('💥 You lost the game!');
      scoreSpan.textContent = 0;
      guessInput.style.display = 'none';
      checkButton.style.display = 'none';
    }
  }
});

// Again button click event (reset game)
  againButton.addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreSpan.textContent = score;
  numberBox.textContent = '?';
  guessInput.value = '';
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  numberBox.style.width = '15rem';
  guessInput.style.display = '';
  checkButton.style.display = '';
});
