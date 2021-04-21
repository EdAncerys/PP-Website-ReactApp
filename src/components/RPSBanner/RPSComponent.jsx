import React, { useContext } from "react";
import { RPSContext } from "../../pages/RPSPage";
import RPSAvatar from "./RPSAvatar";

import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import PlayButton from "./PlayButton";

import colors from "../../config/colors";

export default function RPSComponent({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const playerChoice = manageRPSContext.playerChoice
    ? manageRPSContext.playerChoice["name"]
    : false;
  const fade = playerChoice ? 0.2 : 1;

  const handleClick = (name) => {
    if (!playerChoice) manageRPSContext.setPlayerChoice(name);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div
          style={{ opacity: playerChoice === "Rock" ? 1 : fade }}
          onClick={() =>
            handleClick({ name: "Rock", avatar: <FaRegHandRock /> })
          }
        >
          <RPSAvatar name="Rock" avatar={<FaRegHandRock size="6vh" />} />
        </div>
        <div
          style={{ opacity: playerChoice === "Paper" ? 1 : fade }}
          onClick={() =>
            handleClick({ name: "Paper", avatar: <FaRegHandPaper /> })
          }
        >
          <RPSAvatar name="Paper" avatar={<FaRegHandPaper size="6vh" />} />
        </div>
        <div
          style={{ opacity: playerChoice === "Scissors" ? 1 : fade }}
          onClick={() =>
            handleClick({ name: "Scissors", avatar: <FaRegHandScissors /> })
          }
        >
          <RPSAvatar
            name="Scissors"
            avatar={<FaRegHandScissors size="6vh" />}
          />
        </div>
      </div>
      <div style={styles.btnWrapper}>
        <PlayButton
          title="Play Again"
          btnColor={colors.yellow}
          onClick={() => {
            if (manageRPSContext.R2D2Choice) {
              manageRPSContext.setPlayerChoice();
              manageRPSContext.setR2D2Choice();
            }
          }}
        />
        <PlayButton
          title="New Game"
          btnColor={colors.darkBlue}
          onClick={() => {
            if (manageRPSContext.R2D2Choice || !manageRPSContext.playerChoice) {
              manageRPSContext.setPlayerChoice();
              manageRPSContext.setR2D2Choice();
              manageRPSContext.setRound(0);
              manageRPSContext.setPlayerScore(0);
              manageRPSContext.setTiesScore(0);
              manageRPSContext.setRobotScore(0);
              manageRPSContext.setR2D2Choice(false);
            }
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "center",
    alignItems: "center",
    gridGap: "30px",
  },
  btnWrapper: {
    display: "grid",
    justifyContent: "center",
  },
};
