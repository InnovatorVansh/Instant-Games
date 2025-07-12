// // Game Constants and Variables
// let direction = {x: 0, y: 0};
// const foodsound = new Audio('food.mp3');
// const gameOverSound = new Audio('gameover.mp3');
// const moveSound = new Audio('move.mp3');
// const musicSound = new Audio('game_music.mp3');
// let speed = 2;
// let lastPaintTime = 0;

// //Game Functions
// function main(ctime){
//     window.requestAnimationFrame(main);
//     if((ctime - lastPaintTime) < 1/speed){
//         return;
//     }
//     console.log(ctime)
//     lastPaintTime = ctime;
//     gameEngine();
// }

// function gameEngine(){
//     // Part 1: Uodating the snake array & Food

//     // Part 2: Display the snake and Food
// }










// //Main logic starts here
// window.requestAnimationFrame(main);

stopGame()
  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  direction = 'right';
  gameSpeedDelay = 200;
  updateScore();


function updateScore() {
  const currentScore = snake.length - 1;
  score.textContent = currentScore.toString().padStart(3, '0');
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = 'block';
  logo.style.display = 'block';
}

function updateHighScore() {
  const currentScore = snake.length - 1;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = highScore.toString().padStart(3, '0');
  }
  highScoreText.style.display = 'block';
}