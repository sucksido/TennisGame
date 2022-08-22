"use strict";

var _index = require("./index");

describe("Tennis Scoring Tests", () => {
  test("playerOne scores", () => {
    (0, _index.startTheTennisGame)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("15 - Love");
  });
  test("playerOne scores 2 times", () => {
    (0, _index.startTheTennisGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("30 - Love");
  });
  test("playerTwo scores 3 times", () => {
    (0, _index.startTheTennisGame)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    expect((0, _index.getScore)()).toBe("Love - 40");
  });
  test("playerOne scores 3 times and Opponent scores 2 times.", () => {
    (0, _index.startTheTennisGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    expect((0, _index.getScore)()).toBe("40 - 30");
  });
  test("playerOne scores 4 times", () => {
    (0, _index.startTheTennisGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("Game - Player One");
  });
  test("playerOne scores 5 times", () => {
    (0, _index.startTheTennisGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("The Game is already over. You cannot score anymore.");
  });
});