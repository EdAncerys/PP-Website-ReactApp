import React from "react";
import Header from "../components/Header";

import { ImSpinner9 } from "react-icons/im";
import SocialBanner from "../components/AboutBanner/SocialBanner";
import colors from "../config/colors";

export default function AboutMePage({}) {
  const [repoData, setRepoData] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    void (async function fetchData() {
      try {
        const url = "https://api.github.com/users/edancerys/repos";
        const response = await fetch(url);
        const responseData = await response.json();
        const data = responseData.filter((repo) => !repo.name.includes("CV"));

        setRepoData(data);
      } catch (error) {
        console.log("error ", error);
      }
    })();
    return () => {
      abortController.abort(); // cancel pending fetch request on component unmount
    };
  }, []);

  const HandleRepoData = ({ repo, index }) => {
    const { name, description, language, html_url, updated_at } = repo;
    const lastUpdate = new Date(updated_at).toLocaleDateString("en-US");

    return (
      <div style={{ paddingBottom: "15px" }}>
        <div style={styles.paragraph}>
          <div style={styles.title}>{name}</div>
        </div>
        <div style={styles.paragraph}>
          <span style={{ color: colors.darkGrey }}>{description} </span>
        </div>
        <div style={styles.paragraph}>
          Coded in <span style={{ color: "#D95E5A" }}>{language} </span>
          language. Last push & code update been on: {lastUpdate}
        </div>
        <div style={styles.paragraph}>
          Find out more about the project by following the link to
          <a style={styles.link} target="blank" href={html_url}>
            Project Git Repository
          </a>
        </div>
      </div>
    );
  };

  if (!repoData)
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImSpinner9 size="35px" className="spinner" />
      </div>
    );

  return (
    <div className="bodyContainer">
      <div className="bodyWrapper">
        <div className="banner OrelegaOne">
          <div className="page-content">
            <Header />
            {repoData.map((repo, index) => (
              <HandleRepoData repo={repo} index={index} key={index} />
            ))}
            <SocialBanner />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    marginTop: "10px",
  },
  title: {
    textTransform: "uppercase",
    // backgroundColor: "pink",
    padding: "5px 0",
  },
  link: {
    color: colors.darkBlue,
    paddingLeft: "4px",
    textDecoration: "none",
  },
  contentText: { display: "flex", fontSize: 16, paddingTop: 10 },
};
