import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillMediumSquare } from 'react-icons/ai';

import colors from '../../config/colors';
import IconComponent from '../IconComponent';

export default function SocialBanner({ props }) {
  return (
    <div style={styles.container}>
      <IconComponent
        icon={<AiFillLinkedin size={36} />}
        hoverColor={colors.blue}
        onClick={() => console.log('click')}
      />
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
    marginTop: 50,
    marginBottom: 50,
  },
};
