import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function FamilyGuyCharacters({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  return <div style={styles.container}>{manageTickTackToeContext.test}</div>;
}

const styles = {
  container: {},
};
