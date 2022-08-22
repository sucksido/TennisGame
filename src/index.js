import { getScoreInTextFormat } from "./utils.js";

let score;
let gameOver;
let error;

export function startTheTennisGame() {
  score = [0, 0];
  gameOver = false;
  error = false;
}

export function playerOneScores() {
  if (gameOver) {
    error = "The Game is already over. You cannot score anymore.";
    return;
  }
  score[0]++;
  getScore();
}

export function playerTwoScores() {
  if (gameOver) {
    error = "The Game is already over. You cannot score anymore.";
    return;
  }
  score[1]++;
  getScore();
}

export function getScore() {
  if (error) return error;

  const playerOneScore = getScoreInTextFormat(score[0]);
  const playerTwoScore = getScoreInTextFormat(score[1]);

  if (playerOneScore === "Game") {
    gameOver = true;
    return "Game - Player One";
  }
  if (playerTwoScore === "Game") {
    gameOver = true;
    return "Game - Player Two";
  }

  return `${playerOneScore} - ${playerTwoScore}`;
}
