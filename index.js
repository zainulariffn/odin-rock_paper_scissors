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

// 3
function getHumanChoice() {
  // Get human choice based on user prompt
  let humanChoice = window.prompt("Make a choice: Rock, Paper, or Scissors");
  if (humanChoice.toLowerCase() === "rock") {
    return "Rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    return "Paper";
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "Scissors";
  }
}
// 6 Play best of 5, first to 3 wins
function playGame() {
  // 4 Score counter
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; true; i++) {
    function score() {
      console.log("Player Score: ", humanScore);
      console.log("Computer Score: ", computerScore);
    }
    function playRound() {
      // 5 Play a single round
      const computerChoice = getComputerChoice();
      const humanChoice = getHumanChoice();
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

    playRound();
    score();
    // Get game winners
    if (humanScore == 3) {
      console.log("YOU WIN!");
      return;
    } else if (computerScore == 3) {
      console.log("YOU LOSE!");
      return;
    }
  }
}

// Inits. and Event Listeners
playGame();
