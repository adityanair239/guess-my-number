"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".number").textContent = "?";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayNumber = function (num) {
  document.querySelector(".number").textContent = num;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess);

  if (!guess) {
    displayMessage("No Number");
  } else if (guess == secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage("Correct Number");

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost the Game");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayScore(0);
  displayMessage("Start Guessing...");
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
