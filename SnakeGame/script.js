const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 9 * box, y: 10 * box }];
let direction = null;
let score = 0;
let gameInterval;
let speed = 100;

let food = {
  x: Math.floor(Math.random() * (canvas.width / box)) * box,
  y: Math.floor(Math.random() * (canvas.height / box)) * box,
};

function drawSnake() {
  let snakeColor = "lime";
  if (speed <= 90 && speed > 70) snakeColor = "yellow";
  else if (speed <= 70 && speed > 50) snakeColor = "orange";
  else if (speed <= 50) snakeColor = "red";
  ctx.fillStyle = snakeColor;

  snake.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, box, box);
  });
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";
  ctx.fillText("score:" + score, 10, 20);
  ctx.fillText("speed: " + (1000 / speed).toFixed(1) + "moves/sec", 10, 40);
}

function collison(head, snake) {
  return snake.some((segment) => head.x === segment.x && head.y === segment.y);
}

function gameOver() {
  clearInterval(gameInterval);
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
  ctx.fillText("score:" + score, canvas.width / 2 - 60, canvas.height / 2 + 40);

  setTimeout(() => {
    location.reload();
  }, 2000);
}

function checkSpeedIncrease() {
  if (score % 5 === 0 && speed > 40) {
    speed -= 10;
    clearInterval(gameInterval);
    gameInterval = setInterval(update, speed);
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
  drawScore();

  if (direction) {
    let head = { ...snake[0] };

    if (direction === "LEFT") head.x -= box;
    if (direction === "UP") head.y -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "DOWN") head.y += box;

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= canvas.width ||
      head.y >= canvas.height ||
      collison(head, snake)
    ) {
      gameOver();
      return;
    }

    if (head.x === food.x && head.y === food.y) {
      score++;
      checkSpeedIncrease();

      food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box,
      };
    } else {
      snake.pop();
    }
    snake.unshift(head);
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (e.key === "ArrowDown" && direction !== "DOWN") direction = "DOWN";
});

gameInterval = setInterval(update, 100);
