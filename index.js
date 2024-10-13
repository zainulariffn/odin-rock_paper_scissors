// My requirement
// keep track of scores
// Best of 5, first to 3 wins
// declare winner

console.log("Welcome to rock paper and scissors!");

// 2
function getComputerChoice() {
  // Get random choice for computer (rock, paper, scissors)
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
  // Get human choice through prompt
  let answer = prompt("Lets play rock, paper, scissors").toLowerCase();

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

// 6
function playGame() {
  // Play the game for best of 5, who gets 3 rounds wins

  // Odin requirement
  // Your game will play 5 rounds.
  // You will write a function named playGame that calls playRound to play 5 rounds,
  // keeps track of the scores and declares a winner at the end.

  // 4
  let humanScore = 0;
  let computerScore = 0;

  // Logs the winner
  if (humanScore >= 3) {
    console.log("Player wins!");
  } else if (computerScore >= 3) {
    console.log("Computer wins!");
  }

  // 5
  function playRound(humanChoice, computerChoice) {
    // Get round winners
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

  // Log chocies for human and computer
  console.log("Human choose " + humanSelection);
  console.log("Computer choose " + computerSelection);
  // Play each round using humanSelection function and computerFunction as argument for playRound function
  playRound(humanSelection, computerSelection);
  // Logs the score round for computer and human
  console.log("Human score is " + humanScore);
  console.log("Computer score is " + computerScore);
}
// This is wrong and i dont know how to create playGame function
// Play the game for 5 round
playGame();
playGame();
playGame();
playGame();
playGame();
