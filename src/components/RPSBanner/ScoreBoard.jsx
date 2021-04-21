import React, { useContext } from "react";
import { RPSContext } from "../../pages/RPSPage";

import colors from "../../config/colors";

export default function Scorewrapper({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;
  const playerScore = manageRPSContext.playerScore;
  const robotScore = manageRPSContext.robotScore;
  const ties = manageRPSContext.tiesScore;
  const round = manageRPSContext.round;

  return (
    <div>
      {!game && <div style={styles.vs}>vs</div>}
      {game && (
        <div>
          <div style={styles.roundScore}>
            <div style={styles.title}>Round</div>
            <div style={styles.title}>{round}</div>
          </div>
          <div style={styles.container}>
            <div style={styles.wrapper}>
              <div style={styles.title}>Wins</div>
              <div style={styles.score}>{playerScore}</div>
            </div>
            <div style={{ display: "grid", color: colors.red }}>
              <div style={styles.title}>Ties</div>
              <div style={styles.score}>{ties}</div>
            </div>
            <div style={styles.wrapper}>
              <div style={styles.title}>Wins</div>
              <div style={styles.score}>{robotScore}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  roundScore: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto auto",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "30px",
  },
  vs: {
    fontSize: "30px",
  },
  wrapper: {
    display: "grid",
    color: colors.red,
  },
  title: {
    alignSelf: "end",
    fontSize: "20px",
  },
  score: {
    display: "grid",
    alignContent: "start",
    fontSize: "30px",
  },
};
