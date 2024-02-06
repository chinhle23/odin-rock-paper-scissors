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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let i = 0;
  while (i < 5) {
    let playerSelection = prompt('rock, paper, or scissors?');
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === 'Tie!') {
      console.log(`Tie! Both chose ${computerSelection}`);
    } else if (result === 'You Lose! Invalid option') {
      console.log(`You Lose! Invalid option entered`);
      computerScore++;
      i++;
    } else if (result === 'You Lose!') {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
      i++;
    } else {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      i++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`Game Over. You win, ${playerScore} to ${computerScore}`)
  } else {
    console.log(`Game Over. Computer wins, ${computerScore} to ${playerScore}`)
  }
}

playGame();