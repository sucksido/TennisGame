"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTheTennisGame = startTheTennisGame;
exports.playerOneScores = playerOneScores;
exports.playerTwoScores = playerTwoScores;
exports.getScore = getScore;

var _utils = require("./utils.js");

let score;
let gameOver;
let error;

function startTheTennisGame() {
  score = [0, 0];
  gameOver = false;
  error = false;
}

function playerOneScores() {
  if (gameOver) {
    error = "The Game is already over. You cannot score anymore.";
    return;
  }

  score[0]++;
  getScore();
}

function playerTwoScores() {
  if (gameOver) {
    error = "The Game is already over. You cannot score anymore.";
    return;
  }

  score[1]++;
  getScore();
}

function getScore() {
  if (error) return error;
  const playerOneScore = (0, _utils.getScoreInTextFormat)(score[0]);
  const playerTwoScore = (0, _utils.getScoreInTextFormat)(score[1]);

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