// My requirement
// keep track of scores
// Best of 5, first to 3 wins
// declare winner

console.log("Welcome to rock paper and scissors!");

function getComputerChoice() {
  // Get random computer choices based on number 0, 1, and 2
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

function score() {
  let scoring = document.createElement("score");
  scoring.textContent = `Player score ${humanScore} Computer Score ${computerScore}`;
  scoring.append(score);
  console.log("Player Score: ", humanScore);
  console.log("Computer Score: ", computerScore);
}
function playRound(humanChoice, computerChoice) {
  // 5 Play a single round
  computerChoice = getComputerChoice();
  console.log("Computer's Choice: ", computerChoice);
  console.log("Player's Choice: ", humanChoice);
  // Get round winners
  if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Draw!");
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Paper") {
    console.log("Draw!");
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    console.log("Draw!");
  }
}

const btnRock = document.querySelector(".rock-choice");
btnRock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
  score();
});

const btnPaper = document.querySelector(".paper-choice");
btnPaper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
  score();
});
const btnScissors = document.querySelector(".scissors-choice");
btnScissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
  score();
});
