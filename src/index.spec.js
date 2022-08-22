import {
  playerOneScores,
  getScore,
  startTheTennisGame,
  playerTwoScores,
} from "./index";

describe("Tennis Scoring Tests", () => {
  test("playerOne scores", () => {
    startTheTennisGame();
    playerOneScores();
    expect(getScore()).toBe("15 - Love");
  });

  test("playerOne scores 2 times", () => {
    startTheTennisGame();
    playerOneScores();
    playerOneScores();
    expect(getScore()).toBe("30 - Love");
  });

  test("playerTwo scores 3 times", () => {
    startTheTennisGame();
    playerTwoScores();
    playerTwoScores();
    playerTwoScores();
    expect(getScore()).toBe("Love - 40");
  });

  test("playerOne scores 3 times and Opponent scores 2 times.", () => {
    startTheTennisGame();
    playerOneScores();
    playerOneScores();
    playerOneScores();
    playerTwoScores();
    playerTwoScores();
    expect(getScore()).toBe("40 - 30");
  });

  test("playerOne scores 4 times", () => {
    startTheTennisGame();
    playerOneScores();
    playerOneScores();
    playerOneScores();
    playerOneScores();
    expect(getScore()).toBe("Game - Player One");
  });

  test("playerOne scores 5 times", () => {
    startTheTennisGame();
    playerOneScores();
    playerOneScores();
    playerOneScores();
    playerOneScores();
    playerOneScores();
    expect(getScore()).toBe("The Game is already over. You cannot score anymore.");
  });
});
