import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  return (
    <div style={styles.container}>
      Hello
    </div>
  );
}

const styles = {
  container: {}
};
