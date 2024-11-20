// My requirement
// keep track of scores
// Best of 7, first to 5 wins
// declare winner

console.log("Welcome to rock paper and scissors!");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const roundResult = document.querySelector(".result");
let resultGame = document.createElement("p");
roundResult.append(resultGame);

const scoreContainer = document.querySelector(".result");
let gameScore = document.createElement("p");
scoreContainer.appendChild(gameScore);

const gameWinner = document.querySelector(".result");
let winner = document.createElement("p");
gameWinner.appendChild(winner);

function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  console.log("Computer's Choice: ", computerChoice);
  console.log("Player's Choice: ", humanChoice);
  if (humanChoice == computerChoice) {
    console.log("It's a DRAW!");
    resultGame.textContent = `It's a DRAW! You choose ${humanChoice} AND Computer choose ${computerChoice}`;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    resultGame.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    resultGame.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    resultGame.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    resultGame.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    resultGame.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    resultGame.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
  console.log(humanScore, computerScore);
  gameScore.textContent = `Your score is ${humanScore} and Computer score is ${computerScore}`;
}

const btnRock = document.querySelector(".rock-choice");
btnRock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

const btnPaper = document.querySelector(".paper-choice");
btnPaper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});
const btnScissors = document.querySelector(".scissors-choice");
btnScissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});

function checkWinner(scoreHuman, scoreComputer) {
  if (scoreHuman >= 5) {
    winner.textContent = `You win the game!`;
  } else if (scoreComputer >= 5) {
    winner.textContent = `You lose the game. Try again`;
  }
}

checkWinner(humanScore, computerScore);
