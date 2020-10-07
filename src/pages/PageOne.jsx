import React from 'react';
import Text from '../text/ProjectDescription';
import Footer from '../components/Footer';

import colors from '../config/colors';

export default function PageOne({ props }) {
  return (
    <div className="teko" style={styles.container}>
      <div>header</div>
      <div style={styles.content}>
        <p>
          I am a Retail Manager turned Software Engineer. My new-found passion
          for programming has stemmed from a desire to turn ideas into reality
          and to contribute to building great products. Much of my work
          experience has involved working within a team- based culture and I
          thrive collaborating with others. Coding allows me to be constantly
          learning, creating, and problem-solving.
        </p>
        <p>
          I am a fast learner and extremely enthusiastic about technology and
          digital products. Enjoying challenges and don't shy away from
          time-consuming challenges that can deliver better results and
          continuous learning process it involves. Currently looking for
          opportunities to continue to learn, challenge myself, and work with
          great people.
        </p>
        <p>
          I am a strong believer in the use of agile methodologies that helps to
          drive and manage team projects. Enjoying challenges and don't shy away
          from time-consuming challenges that can deliver better results and
          continuous learning process it involves.
        </p>
        <p>
          <a style={styles.link} target="blank" href="https://makers.tech/">
            Makers Academy
          </a>{' '}
          graduate where I have grown as a person and as a developer. Learned
          best practices and methodologies: TDD, Agile development, XP values,
          team projects, code reviews, pair programming.
        </p>
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateRows: '50px 80vh 100px',
  },
  content: {
    display: 'grid',
    alignItems: 'top',
    // justifyContent: 'center',
    // marginTop: '10vh',
    // height: '80vh',
    width: 600,
    // textAlign: 'justify',
    // color: colors.mediumGrey,
    backgroundColor: 'tomato',
  },
  footer: {
    // width: '100vw',
  },
  link: {
    color: colors.darkBlue,
    textDecoration: 'none',
  },
};
