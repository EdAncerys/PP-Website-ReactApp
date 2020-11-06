import React from 'react';
import { FaPlay } from 'react-icons/fa';
import GoToPageButton from '../components/GoToPageButton';

import colors from '../config/colors';

export default function FooterForBanner({ color }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '95% auto',
        alignItems: 'center',
        fontSize: 18,
        color: color,
      }}
    >
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
  footerText: {
    display: 'grid',
  },
};
