console.log("Welcome to rock paper and scissors!");

// 2
function getComputerChoice() {
  // Get random computer choices based on number 0, 1, and 3
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
  // Get human choice based on user prompt
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
  // 4 Score counter
  let humanScore = 0;
  let computerScore = 0;

  function score() {
    console.log("Human score is ", humanScore);
    console.log("Computer score is ", computerScore);
  }

  // 5 Play a single round
  function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log("Computer's Choice: ", computerChoice);
    console.log("Player's Choice: ", humanChoice);

    // Get round winners
    if (computerChoice === humanChoice) {
      console.log("Its a tie!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("Computer wins, paper beats rock");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("Computer wins, scissors beats paper");
      computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("Computer wins, rock beats scissors");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("Player wins, paper beats rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("Player wins, scissors beats paper");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("Player wins, rock beats scissors");
      humanScore++;
    }
  }
  playRound();
  score();
  playRound();
  score();
  playRound();
  score();
  playRound();
  score();
  playRound();
  score();

  if (computerScore > 3 || computerScore > humanScore) {
    console.log("COMPUTER WIN!");
  } else if (humanScore > 3 || humanScore > computerScore) {
    console.log("YOU WIN!");
  } else {
    console.log("It's a TIE!");
  }
}

playGame();

// My requirement
// keep track of scores
// Best of 5, first to 3 wins
// declare winner
