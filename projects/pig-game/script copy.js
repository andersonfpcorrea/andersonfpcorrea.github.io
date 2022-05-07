"use strict";

// Player's score elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
// Current scores elements
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
// Dice element
const diceEl = document.querySelector(".dice");
// Buttons elements
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// =====================================================

// ROLLING THE DICE FUNCTIONALITY
btnRoll.addEventListener("click", function () {
  // 1. Generating a ramdom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

// HOLD THE SCORE FUNCTIONALITY
btnHold.addEventListener("click", function () {
  // a) functionality to save the current score to the game score
  if (activePlayer === 0) {
    score0El.textContent = Number(score0El.textContent) + currentScore;
    scores[activePlayer] = Number(score0El.textContent);
  } else {
    score1El.textContent = Number(score1El.textContent) + currentScore;
    scores[activePlayer] = Number(score1El.textContent);
  }
  console.log(scores);

  // b) Funcionality for the winner event
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle("player--winner");
    // Disabling the Hold and the Roll buttons
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }
  // c) Functionality for pressing HOLD with no winner
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

// NEW GAME FUNCTIONALITY
btnNew.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  btnHold.disabled = false;
  btnRoll.disabled = false;
  if (player1El.contains("player--active")) player0El.add("player-active");
});
