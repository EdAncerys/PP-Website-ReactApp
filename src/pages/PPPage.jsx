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
      <div style={styles.content}>
        <div style={styles.title}>MakersBnB</div>
        <div>
          Project created by the team: (Ed Ancerys, Andrew Hulme, Ellis
          Trickett, Colin Muir, ) at Makers Academy.
        </div>
        <div>
          Create a clone app of Airbnb in Ruby on Rails. This is a group project
          focused on pair programming and delivering MVP and utilizing XP
          principles.
        </div>
        <div>
          The app is a clone of the AirBnB website and aims to imitate a similar
          user experience. User able to do the following on a web app: signup,
          sign in, Once we are identified by the system we can create a space or
          book one. As part of our implementation, we can add a name to renting
          space, a price, and a description.
        </div>
        <div style={styles.content}>
          <a
            style={styles.link}
            target="blank"
            href="https://github.com/EdAncerys/MakersBnB"
          >
            Follow this link to the project on GitHub
          </a>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.title}>Airport Challenge</div>
        <div>
          We have a request from a client to write the software to control the
          flow of planes at an airport. The planes can land and take off
          provided that the weather is sunny. Occasionally it may be stormy, in
          which case no planes can land or take off. Here are some of the user
          stories that we worked out in collaboration with the client:
        </div>
        <div>User Stories:</div>
        <div>
          As an air traffic controller, So I can get passengers to a
          destination, I want to instruct a plane to land at an airport
        </div>
        <div>
          As an air traffic controller, So I can get passengers on the way to
          their destination, I want to instruct a plane to take off from an
          airport and confirm that it is no longer in the airport
        </div>
        <div>
          As the system designer So that the software can be used for many
          different airports I would like a default airport capacity that can be
          overridden as appropriate
        </div>
        <div>
          Task is to test drive the creation of a set of classes/modules to
          satisfy all the user stories. Need to use a random number generator to
          set the weather (it is normally sunny but on rare occasions it may be
          stormy). In tests, I use a stub to override random weather to ensure
          consistent test behavior.
        </div>
        <div style={styles.content}>
          <a
            style={styles.link}
            target="blank"
            href="https://github.com/EdAncerys/airport_challenge"
          >
            Follow this link to the project on GitHub. Coded with Ruby.
          </a>
          <a
            style={styles.link}
            target="blank"
            href="https://github.com/EdAncerys/Airport-Challenge-in-JavaScript"
          >
            Follow this link to the project on GitHub. Coded with JavaScript.
          </a>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.title}>Takeaway Challenge</div>
        <div>
          We have a request from a client to write the software for the takeaway
          business. The takeaway shop should be able to accept customer orders,
          check availability, calculate the total of the order, and confirm the
          estimated time. Here are some of the user stories that we worked out
          in collaboration with the client:
        </div>
        <div>User Stories:</div>
        <div>
          As a customer, So that I can check if, I want to order something I
          would like to see a list of dishes with prices
        </div>
        <div>
          As a customer, So that I can order the meal, I want I would like to be
          able to select some number of several available dishes
        </div>
        <diiv>
          As a customer, So that I can verify that my order is correct, I would
          like to check that the total I have been given matches the sum of the
          various dishes in my order
        </diiv>
        <div>
          Task is to test drive the creation of a set of classes/modules to
          satisfy all the user stories above and deliver working product to the
          client.
        </div>
        <div style={styles.content}>
          <a
            style={styles.link}
            target="blank"
            href="https://github.com/EdAncerys/takeaway-challenge"
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
