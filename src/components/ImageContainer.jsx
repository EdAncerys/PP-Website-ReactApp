import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";

import colors from "../config/colors";

export default function ImageContainer({
  img,
  altText,
  text,
  color,
  backgroundColor,
}) {
  const [hover, setHover] = useState(false);

  const phoneBackgroundColor = backgroundColor;

  const handleShadow = hover ? `` : `5px 10px 45px -10px ${colors.black}`;

  const handleChange = () => {
    setHover(!hover);
  };

  const ServePhoneContent = ({}) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: hover ? 220 : "40vh",
          maxWidth: 400,
          overflow: "hidden",
          transition: "all 0.8s ease-in-out",
        }}
      >
        {!hover && (
          <img
            style={{
              width: "25vh",
            }}
            src={img}
            alt={altText}
          />
        )}
        {hover && (
          <div style={{ color: color, padding: 10, overflow: "hidden" }}>
            {text}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: hover ? "auto auto auto" : "",
        width: hover ? "" : 200,
        border: `4px solid ${color}`,
        borderRadius: "30px 30px 30px 30px",
        boxShadow: handleShadow,
        overflow: "hidden",
        transition: "all 1.2s ease-in-out",
        cursor: "pointer",
        backgroundColor: phoneBackgroundColor,
      }}
      onClick={() => handleChange()}
    >
      <div style={styles.wrapper}>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: hover ? 20 : 100,
            height: hover ? 100 : 20,
            borderRadius: hover ? "0px 20px 20px 0px" : "0px 0px 20px 20px",
            backgroundColor: color,
          }}
        >
          <div
            style={{
              width: hover ? 5 : 50,
              height: hover ? 50 : 5,
              borderRadius: "5px 5px 5px 5px",
              backgroundColor: phoneBackgroundColor,
            }}
          ></div>
        </div>
      </div>
      <ServePhoneContent />
      <div style={styles.wrapper}>
        <div
          style={{
            width: hover ? 6 : 100,
            height: hover ? 100 : 6,
            borderRadius: "5px 5px 5px 5px",
            marginBottom: 5,
            marginRight: 5,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
};
