import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import colors from "../config/colors";

export default function AboutMePage({ props }) {
  return (
    <div className="teko" style={styles.container}>
      <div>
        <Header color={colors.white} />
      </div>
      <div style={styles.content}>
        <div style={styles.wrapper}>
          <div style={styles.paragraph}>
            I am a Retail Manager turned Software Engineer. My new-found passion
            for programming has stemmed from a desire to turn ideas into reality
            and to contribute to building great products. Much of my work
            experience has involved working within a team- based culture and I
            thrive collaborating with others. Coding allows me to be constantly
            learning, creating, and problem-solving.
          </div>
          <div style={styles.paragraph}>
            I am a fast learner and extremely enthusiastic about technology and
            digital products. Enjoying challenges and don't shy away from
            time-consuming challenges that can deliver better results and
            continuous learning process it involves. Currently looking for
            opportunities to continue to learn, challenge myself, and work with
            great people.
          </div>
          <div style={styles.paragraph}>
            I am a strong believer in the use of agile methodologies that helps
            to drive and manage team projects. Enjoying challenges and don't shy
            away from time-consuming challenges that can deliver better results
            and continuous learning process it involves.
          </div>
          <div style={styles.paragraph}>
            <a style={styles.link} target="blank" href="https://makers.tech/">
              Makers Academy
            </a>
            graduate where I have grown as a person and as a developer. Learned
            best practices and methodologies: TDD, Agile development, XP values,
            team projects, code reviews, pair programming.
          </div>
        </div>
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    width: "100vw",
    height: "100vh",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",

    userSelect: "none",
    cursor: "default",
  },
  content: {
    display: "grid",
    justifyContent: "center",
    gridColumn: "span 6",
    gridRow: "1 / 6",
    marginTop: "10vh",
    textAlign: "justify",
  },
  wrapper: {
    width: 600,
    maxWidth: "95vw",
  },
  paragraph: {
    marginTop: "2vh",
  },
  footer: {
    gridRow: "6 / 6",
    gridColumn: "span 6",
  },
  link: {
    color: colors.darkBlue,
    textDecoration: "none",
  },
};
