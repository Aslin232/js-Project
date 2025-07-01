const dice = document.getElementById("dice");
const rollbtn = document.getElementById("roll-dice");
const playerScoreE1 = document.getElementById("player-score");
const computerScoreE1 = document.getElementById("Computer-score");
const winnerE1 = document.getElementById("winner");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let playerScore = 0;
let computerScore = 0;
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function updateDice(value) {
  dice.textContent = diceFaces[value - 1];
}
function checkWin() {
  if (playerScore === 40) {
    winnerE1.textContent = "You won!";
    rollbtn.disabled = true;
    return true;
  }
  if (computerScore === 40) {
    winnerE1.textContent = "computer won!";
    rollbtn.disabled = true;
    return true;
  }
  return false;
}
function playerTurn() {
  const roll = rollDice();
  updateDice(roll);
  if (playerScore + roll <= 40) {
    playerScore += roll;
    playerScoreE1.textContent = playerScore;
  }
  if (!checkWin()) {
    setTimeout(computerTurn, 1000);
  }
}
function computerTurn() {
  const roll = rollDice();
  updateDice(roll);
  if (computerScore + roll <= 40) {
    computerScore += roll;
    computerScoreE1.textContent = computerScore;
  }
  checkWin();
}
rollbtn.addEventListener("click", playerTurn);
