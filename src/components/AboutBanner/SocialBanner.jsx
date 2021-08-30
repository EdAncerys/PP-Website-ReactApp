import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";

import colors from "../../config/colors";
import IconComponent from "./IconComponent";

export default function SocialBanner({ props }) {
  return (
    <div style={styles.container}>
      <IconComponent
        icon={<AiFillLinkedin size={36} />}
        hoverColor={colors.darkBlue}
        onClick={() =>
          window.open("https://www.linkedin.com/in/ancerys/", "_blank")
        }
      />
      <IconComponent
        icon={<AiFillGithub size={36} />}
        hoverColor={colors.black}
        onClick={() => window.open("https://github.com/EdAncerys/", "_blank")}
      />
      <IconComponent
        icon={<AiOutlineInstagram size={36} />}
        hoverColor={colors.danger}
        onClick={() =>
          window.open("https://www.instagram.com/edtheanchor", "_blank")
        }
      />
      <IconComponent
        icon={<AiFillMediumSquare size={36} />}
        hoverColor={colors.black}
        onClick={() =>
          window.open("https://medium.com/@lookatemail/", "_blank")
        }
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    padding: "20px 0",
  },
};
