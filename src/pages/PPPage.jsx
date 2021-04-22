import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import colors from "../config/colors";

export default function PPPage({ props }) {
  return (
    <div style={styles.bodyWrapper} className="bodyContainer">
      <Header color={colors.white} />
      <div className="bodyWrapper">
        <div className="features OrelegaOne">
          <div className="flex-container-90">
            <div style={styles.title}>About</div>
            <div style={styles.paragraph}>
              I've detailed some of my favorite projects bellow, things I'm
              proud of, and all the skills I've developed since beginning to
              code. I'm always learning and evolving, faster than I can update
              my portfolio on the WebSite, so the best place to ﬁnd out what I'm
              currently working on is my GitHub. I'm always Improving my
              projects, and it's the best place to see what I'm learning day by
              day.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys"
              >
                Follow this link to the project on GitHub
              </a>
            </div>

            <div style={styles.title}>ThereAndBack</div>
            <div style={styles.paragraph}>
              The final project created by team JAZE (Jed Stanton, Andrew Hulme,
              Zsofia Szonyi, Ed Ancerys) at Makers Academy.
            </div>
            <div style={styles.paragraph}>
              The app aims to solve the problem of the user who wants to find a
              circular route for outdoor activities (walking, cycling, hiking).
              The user can view the map and search for routes without logging
              in, either circular routes or routes between a start and end
              point. Different activity types can be selected, and the result
              can be randomized. Once the user is logged in, favorite routes can
              be saved in My Routes and can be viewed on the map, or they can be
              removed from the list.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://thereandback.surge.sh/"
              >
                Follow this link to ThereAndBack WebSite
              </a>
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/AndrewHulme/route_planner"
              >
                Follow this link to the project on GitHub
              </a>
            </div>

            <div style={styles.title}>AceBook</div>
            <div style={styles.paragraph}>
              Project created by the team: (Ed Ancerys, Catriona Bennett, Gareth
              Woodman, Marius Brad, Paula Darias, Asifur Rahman) at Makers
              Academy.
            </div>
            <div style={styles.paragraph}>
              Create a clone app of Facebook in Ruby on Rails. This is a group
              project focused on pair programming and delivering MVP, utilizing
              XP principles.
            </div>
            <div style={styles.paragraph}>
              The app aims to imitate similar user experience and have similar
              features as per its 'big brother'. User able to do the following
              on a web app: signup, sign in, delete the profile, add a profile
              picture up on sign up or add it later on, make a post, share
              pictures and post them one at a time or multiple ones, like a
              post, add friends, update a user profile, change password,
              username, etc.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/acebook-HoneyBunnies"
              >
                Follow this link to the project on GitHub
              </a>
            </div>

            <div style={styles.title}>MakersBnB</div>
            <div style={styles.paragraph}>
              Project created by the team: (Ed Ancerys, Andrew Hulme, Ellis
              Trickett, Colin Muir, ) at Makers Academy.
            </div>
            <div style={styles.paragraph}>
              Create a clone app of Airbnb in Ruby on Rails. This is a group
              project focused on pair programming and delivering MVP and
              utilizing XP principles.
            </div>
            <div style={styles.paragraph}>
              The app is a clone of the AirBnB website and aims to imitate a
              similar user experience. User able to do the following on a web
              app: signup, sign in, Once we are identified by the system we can
              create a space or book one. As part of our implementation, we can
              add a name to renting space, a price, and a description.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/MakersBnB"
              >
                Follow this link to the project on GitHub
              </a>
            </div>
            <div style={styles.title}>Airport Challenge</div>
            <div style={styles.paragraph}>
              We have a request from a client to write the software to control
              the flow of planes at an airport. The planes can land and take off
              provided that the weather is sunny. Occasionally it may be stormy,
              in which case no planes can land or take off. Here are some of the
              user stories that we worked out in collaboration with the client:
            </div>
            <div style={styles.paragraph}>User Stories:</div>
            <div style={styles.paragraph}>
              As an air traffic controller, So I can get passengers to a
              destination, I want to instruct a plane to land at an airport.
            </div>
            <div style={styles.paragraph}>
              As an air traffic controller, So I can get passengers on the way
              to their destination, I want to instruct a plane to take off from
              an airport and confirm that it is no longer in the airport.
            </div>
            <div style={styles.paragraph}>
              As the system designer So that the software can be used for many
              different airports I would like a default airport capacity that
              can be overridden as appropriate.
            </div>
            <div style={styles.paragraph}>
              Task is to test drive the creation of a set of classes/modules to
              satisfy all the user stories. Need to use a random number
              generator to set the weather (it is normally sunny but on rare
              occasions it may be stormy). In tests, I use a stub to override
              random weather to ensure consistent test behavior.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/airport_challenge"
              >
                Follow this link to the project on GitHub. Coded with Ruby.
              </a>
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/Airport-Challenge-in-JavaScript"
              >
                Follow this link to the project on GitHub. Coded with
                JavaScript.
              </a>
            </div>
            <div style={styles.title}>Takeaway Challenge</div>
            <div style={styles.paragraph}>
              We have a request from a client to write the software for the
              takeaway business. The takeaway shop should be able to accept
              customer orders, check availability, calculate the total of the
              order, and confirm the estimated time. Here are some of the user
              stories that we worked out in collaboration with the client:
            </div>
            <div style={styles.paragraph}>User Stories:</div>
            <div style={styles.paragraph}>
              As a customer, So that I can check if, I want to order something I
              would like to see a list of dishes with prices.
            </div>
            <div style={styles.paragraph}>
              As a customer, So that I can order the meal, I want I would like
              to be able to select some number of several available dishes.
            </div>
            <div style={styles.paragraph}>
              As a customer, So that I can verify that my order is correct, I
              would like to check that the total I have been given matches the
              sum of the various dishes in my order.
            </div>
            <div style={styles.paragraph}>
              Task is to test drive the creation of a set of classes/modules to
              satisfy all the user stories above and deliver working product to
              the client.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/takeaway-challenge"
              >
                Follow this link to the project on GitHub
              </a>
            </div>

            <div style={styles.title}>Bank tech test</div>
            <div style={styles.paragraph}>
              Producing the best code quality when there is a minimal time
              pressure. Practice OO design and TDD skills. Work alone, and
              review your own code to practice reflecting on and improving your
              own work.
            </div>
            <div style={styles.paragraph}>Requirements:</div>
            <div style={styles.paragraph}>
              Able to interact with your code via a REPL like IRB or the
              JavaScript console. (No need to implement a command line interface
              that takes input from STDIN.) Deposits, withdrawal. Account
              statement (date, amount, balance) printing. Data can be kept in
              memory (it doesn't need to be stored to a database or anything).
            </div>
            <div>Acceptance criteria:</div>
            <div style={styles.paragraph}>
              Given a client makes a deposit of 1000 on 10-01-2012 And a deposit
              of 2000 on 13-01-2012 and a withdrawal of 500 on 14-01-2012.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/bank_tech_test"
              >
                Follow this link to the project on GitHub
              </a>
            </div>

            <div style={styles.title}>Gilded Rose Refactoring Kata</div>
            <div style={styles.paragraph}>
              Hi and welcome to team Gilded Rose. As you know, we are a small
              inn with a prime location in a prominent city ran by a friendly
              innkeeper named Allison. We also buy and sell only the finest
              goods. Unfortunately, our goods are constantly degrading in
              quality as they approach their sell by date. We have a system in
              place that updates our inventory for us. It was developed by a
              no-nonsense type named Leeroy, who has moved on to new adventures.
              Your task is to add the new feature to our system so that we can
              begin selling a new category of items.
            </div>
            <div>First an introduction to our system:</div>
            <div style={styles.paragraph}>
              All items have a SellIn value which denotes the number of days we
              have to sell the item.
            </div>
            <div style={styles.paragraph}>
              All items have a Quality value which denotes how valuable the item
              is.
            </div>
            <div style={styles.paragraph}>
              At the end of each day our system lowers both values for every
              item.
            </div>
            <div style={styles.paragraph}>
              Once the sell by date has passed, Quality degrades twice as fast.
            </div>
            <div>The Quality of an item is never negative.</div>
            <div style={styles.paragraph}>
              "Aged Brie" actually increases in Quality the older it gets.
            </div>
            <div>The Quality of an item is never more than 50.</div>
            <div style={styles.paragraph}>
              "Sulfuras", being a legendary item, never has to be sold or
              decreases in Quality.
            </div>
            <div style={styles.paragraph}>
              "Backstage passes", like aged brie, increases in Quality as it's
              SellIn value approaches; Quality increases by 2 when there are 10
              days or less and by 3 when there are 5 days or less but Quality
              drops to 0 after the concert "Conjured" items degrade in Quality
              twice as fast as normal items.
            </div>
            <div style={styles.paragraph}>
              <a
                style={styles.link}
                target="blank"
                href="https://github.com/EdAncerys/GildedRose-Refactoring-Kata"
              >
                Follow this link to the project on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  paragraph: {
    padding: "10px 0",
  },
  title: {
    fontSize: 30,
    marginTop: 30,
  },
  link: {
    color: colors.darkBlue,
    textDecoration: "none",
  },
  bodyWrapper: {
    height: "100%",
    overflow: "auto",
  },
};
