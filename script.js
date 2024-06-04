"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

//Rolling Dice
const dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);
let currenScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currenScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  // random dice roll
  if (playing === true) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //console.log(dice);

    diceEl.classList.remove("hidden");

    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currenScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currenScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currenScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check player score > 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
    }

    //switch player`
  }
});

// reset game
btnNew.addEventListener("click", function () {
  currenScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player0El.classList.remove("player-active");
});
