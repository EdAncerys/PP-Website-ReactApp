import React from 'react';
import colors from '../config/colors';

export default function PPPage({ props }) {
  return (
    <div className="teko" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>ThereAndBack</div>
        <div>
          The final project created by team JAZE (Jed Stanton, Andrew Hulme,
          Zsofia Szonyi, Ed Ancerys) at Makers Academy.
        </div>
        <div>
          The app aims to solve the problem of the user who wants to find a
          circular route for outdoor activities (walking, cycling, hiking). The
          user can view the map and search for routes without logging in, either
          circular routes or routes between a start and end point. Different
          activity types can be selected, and the result can be randomized. Once
          the user is logged in, favorite routes can be saved in My Routes and
          can be viewed on the map, or they can be removed from the list.
        </div>
        <div style={styles.content}>
          <a
            style={styles.link}
            target="blank"
            href="https://thereandback.surge.sh/"
          >
            Follow this link to ThereAndBack WebSite
          </a>
          <a
            style={styles.link}
            target="blank"
            href="https://github.com/AndrewHulme/route_planner"
          >
            Follow this link to the project on GitHub
          </a>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.title}>AceBook</div>
        <div>
          Project created by the team: (Ed Ancerys, Catriona Bennett, Gareth
          Woodman, Marius Brad, Paula Darias, Asifur Rahman) at Makers Academy.
        </div>
        <div>
          Create a clone app of Facebook in Ruby on Rails. This is a group
          project focused on pair programming and delivering MVP, utilizing XP
          principles.
        </div>
        <div>
          The app aims to imitate similar user experience and have similar
          features as per its 'big brother'. User able to do the following on a
          web app: signup, sign in, delete the profile, add a profile picture up
          on sign up or add it later on, make a post, share pictures and post
          them one at a time or multiple ones, like a post, add friends, update
          a user profile, change password, username, etc.
        </div>
        <div style={styles.content}>
          <a
            style={styles.link}
            target="blank"
            href="https://github.com/EdAncerys/acebook-HoneyBunnies"
          >
            Follow this link to the project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'default',
    marginTop: 100,
    marginBottom: 100,
  },
  title: {
    fontSize: 30,
    marginTop: 30,
  },
  content: {
    display: 'grid',
    width: 600,
    gridGap: 10,
    textAlign: 'justify',
  },
  link: {
    color: colors.darkBlue,
    textDecoration: 'none',
  },
};
