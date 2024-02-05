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
    return `Tie! Both selected ${player}`
  } else if (
    (player === 'Rock' && computerSelection === 'Paper') ||
    (player === 'Paper' && computerSelection === 'Scissors') || 
    (player === 'Scissors' && computerSelection === 'Rock')) {
    return `You Lose! ${computerSelection} beats ${player}`
  } else if (
    (player === 'Rock' && computerSelection === 'Scissors') ||
    (player === 'Scissors' && computerSelection === 'Paper') ||
    (player === 'Paper' && computerSelection === 'Rock')) {
    return `You Win! ${player} beats ${computerSelection}`
  } 
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));