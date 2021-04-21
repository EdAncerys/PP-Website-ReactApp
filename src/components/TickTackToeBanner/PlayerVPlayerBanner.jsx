import React, { useContext } from "react";
import { TickTackToeContext } from "../../pages/TickTackToePage";
import { AppContext } from "../../App";
import Button from "../Button";

import PagePalette from "../../config/PagePalette";
import Character from "./Character";
import GameBoard from "./GameBoard";

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);

  const handlePlayAgain = () => {
    manageTickTackToeContext.setTakenTiles([]);
    manageTickTackToeContext.setPlayerOneTiles([]);
    manageTickTackToeContext.setPlayerTwoTiles([]);
    manageTickTackToeContext.setGameOn(true);
    manageTickTackToeContext.setWinner(false);
  };

  const handleNewGame = () => {
    manageTickTackToeContext.setPlayerOne(false);
    manageTickTackToeContext.setPlayerTwo(false);
    manageTickTackToeContext.setPlayerOneScore(0);
    manageTickTackToeContext.setPlayerTwoScore(0);
    handlePlayAgain();
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{ color: PagePalette[manageAppContext.page].secondary },
      }}
    >
      <div style={styles.wrapper}>
        <Character
          src={manageTickTackToeContext.playerOne.img}
          name={manageTickTackToeContext.playerOne.name}
        />
        <div style={styles.messageContainer}>
          {manageTickTackToeContext.gameOn && (
            <div style={styles.message}>
              <div className="teko" style={styles.scoreNumber}>
                <div style={styles.title}>Wins</div>
                <div style={styles.score}>
                  {manageTickTackToeContext.playerOneScore}
                </div>
              </div>
              <div style={styles.scoreText}>vs</div>
              <div className="teko" style={styles.scoreNumber}>
                <div style={styles.title}>Wins</div>
                <div style={styles.score}>
                  {manageTickTackToeContext.playerTwoScore}
                </div>
              </div>
            </div>
          )}
          {!manageTickTackToeContext.winner &&
            !manageTickTackToeContext.gameOn &&
            "Game Over: Even Steven"}
          {manageTickTackToeContext.winner &&
            `${manageTickTackToeContext.winner.name} won this round`}
        </div>
        <Character
          src={manageTickTackToeContext.playerTwo.img}
          name={manageTickTackToeContext.playerTwo.name}
        />
      </div>
      <div style={styles.gameBoard}>
        <GameBoard />
      </div>
      <div style={styles.buttonComponent}>
        <Button title="Play Again" onClick={() => handlePlayAgain()} />
        <Button
          title="New Game"
          solid={false}
          onClick={() => handleNewGame()}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    justifyItems: "center",
    gap: "20px",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    alignContent: "center",
    justifyItems: "center",
    columnGap: "5vh",
  },
  messageContainer: {
    display: "grid",
    alignContent: "center",
    justifyItems: "center",
    textAlign: "center",
    fontSize: "20px",
    maxWidth: "250px",
  },
  message: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "30px",
    textAlign: "center",
    minWidth: "50px",
  },
  scoreNumber: {
    display: "grid",
    alignContent: "center",
    justifyItems: "center",
  },
  scoreText: {
    display: "grid",
    alignContent: "center",
    justifyItems: "center",
  },
  gameBoard: {
    display: "grid",
    justifyItems: "center",
    alignContent: "center",
  },
  buttonComponent: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    justifyItems: "center",
    alignContent: "center",
  },
  title: {
    alignSelf: "end",
    fontSize: "25px",
  },
  score: {
    display: "grid",
    alignContent: "start",
    fontSize: "25px",
  },
};
