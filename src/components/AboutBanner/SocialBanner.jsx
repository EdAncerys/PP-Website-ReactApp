import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function SocialBanner({ props }) {
  return (
    <div style={styles.container}>
      <div>Social links</div>
      <AiFillGithub />
    </div>
  );
}

const styles = {
  container: {},
};
