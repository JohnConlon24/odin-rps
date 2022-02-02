const choices = ["rock", "paper", "scissors"];
const winners = [];
//Play the Game
//Play Five Rounds
//Console Based
function game() {
  for ( let i = 0; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector('button').textContent = "Play New Game";
  logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

//Get input from Player
function playerChoice() {
  let input = prompt('Type Rock, Paper or Scissors');
  while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt('Type Rock, Paper or Scissors');
    input = input.toLowerCase();
    check = validateInput(input);
  }
  //Returns Player Choice to play against Computer
  return input;
}

//Random Computer Choice 
function computerChoice() { 
  return choices[Math.floor(Math.random()*3 )]   
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if ((choiceP === 'rock' && choiceC == 'scissors') ||
              (choiceP === 'paper' && choiceC == 'rock') ||
              (choiceP === 'scissors' && choiceC == 'paper'))
     {
        return 'Player Wins'
    } else {
        return 'Computer Wins'
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round)
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("----------");

}

game();