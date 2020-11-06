import React from 'react';
import { FaPlay } from 'react-icons/fa';
import colors from '../config/colors';
import GoToPageButton from '../components/GoToPageButton';

export default function FooterForBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.footerText}>
        <div>&#123;</div>
        <div>Name : About Me ,</div>
        <div>Type : Informational</div>
        <div>&#125;</div>
      </div>
      <GoToPageButton icon={<FaPlay />} hoverColor={colors.white} page={1} />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '95% auto',
    alignItems: 'center',
    fontSize: 18,
  },
};
