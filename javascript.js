function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  let playerString = playerSelection.toLowerCase();
  let player = playerString.replace(playerString[0],playerString[0].toUpperCase());
  if (player === computerSelection) {
    return `Tie!`
  } else if (
    (player === 'Rock' && computerSelection === 'Paper') ||
    (player === 'Paper' && computerSelection === 'Scissors') || 
    (player === 'Scissors' && computerSelection === 'Rock')) {
    return `You Lose!`
  } else if (
    (player === 'Rock' && computerSelection === 'Scissors') ||
    (player === 'Scissors' && computerSelection === 'Paper') ||
    (player === 'Paper' && computerSelection === 'Rock')) {
    return `You Win!`
  } else {
    return `You Lose! Invalid option`
  }
}
let choices = document.querySelector('#choices');
let resultDiv = document.querySelector('#result');
let runningScore = document.querySelector('#running-score')
let playerScore = 0;
let computerScore = 0;

choices.addEventListener('click', function (e) {
  let target = e.target;
  let roundText = document.createElement('p');
  let computerSelection = getComputerChoice();
  let playerSelection = '';

  switch (target.value) {
    case 'Rock':
      playerSelection = 'Rock';
      break;
    case 'Paper':
      playerSelection = 'Paper';
      break;
    case 'Scissors':
      playerSelection = 'Scissors';
      break;
  }

  let result = playRound(playerSelection, computerSelection);

  if (result === 'Tie!') {
    roundText.textContent = `Tie! Both chose ${computerSelection}`;
  } else if (result === 'You Lose!') {
    roundText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    roundText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  
  let playerWon = playerScore > 4;
  let computerWon = computerScore > 5;
  let gameOver = playerWon || computerWon;
  
  runningScore.textContent = `You: ${playerScore} - Computer: ${computerScore}`

  if (!gameOver) {
    resultDiv.appendChild(roundText);
  } else if (playerWon) {
    resultDiv.appendChild(roundText);
    let finalResult = document.createElement('p');
    finalResult.textContent = `Game Over. You win, ${playerScore} to ${computerScore}`;
    resultDiv.appendChild(finalResult);
    playerScore = 0;
    computerScore = 0;
  } else {
    resultDiv.appendChild(roundText);
    let finalResult = document.createElement('p');
    finalResult.textContent = `Game Over. Computer wins, ${computerScore} to ${playerScore}`;
    resultDiv.appendChild(finalResult);
    playerScore = 0;
    computerScore = 0;
  }
});
