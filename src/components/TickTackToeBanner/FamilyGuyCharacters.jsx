import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function FamilyGuyCharacters({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  return (
    <div style={styles.container}>
      {manageTickTackToeContext.characters[0].id}
    </div>
  );
}

const styles = {
  container: {},
};
