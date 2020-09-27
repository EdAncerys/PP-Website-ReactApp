import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillMediumSquare } from 'react-icons/ai';

import colors from '../../config/colors';

export default function SocialBanner({ props }) {
  return (
    <div style={styles.container}>
      <AiFillLinkedin size={36} />
      <AiFillGithub size={36} />
      <AiOutlineInstagram size={36} />
      <AiFillMediumSquare size={36} />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    columnGap: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
};
