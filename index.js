console.log("Hello zainul!");

// 2

function getComputerChoice() {
  let computerRandom = Math.floor(Math.random() * 3);
  if (computerRandom == 0) {
    return "rock";
  } else if (computerRandom == 1) {
    return "paper";
  } else if (computerRandom == 2) {
    return "scissors";
  }
}

// 3
function getHumanChoice() {
  let answer = prompt(
    "Lets play a game, 0-Rock, 1-Paper, 2-Scissors"
  ).toLowerCase();

  if (answer == "rock") {
    return "rock";
  } else if (answer == "paper") {
    return "paper";
  } else if (answer == "scissors") {
    return "scissors";
  } else {
    alert("Please enter only rock, paper or scissors!");
  }
}

// 4
let humanScore = 0;
let computerScore = 0;

// 5

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    console.log("Its a tie!");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer wins, paper beats rock");
    return computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer wins, scissors beats paper");
    return computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer wins, rock beats scissors");
    return computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Player wins, paper beats rock");
    return humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Player wins, scissors beats paper");
    return humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Player wins, rock beats scissors");
    return humanScore++;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(humanSelection, computerSelection);
console.log(computerSelection);

// 6
function playGame() {
  // call play round 5 times
}
playGame();
playGame();
playGame();
playGame();
playGame();
