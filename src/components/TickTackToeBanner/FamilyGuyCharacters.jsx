import React, { useContext, useEffect } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';

import PagePalette from '../../config/PagePalette';
import Character from './Character';

export default function FamilyGuyCharacters({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);

  useEffect(() => {
    manageTickTackToeContext.setFamilyCharacters(
      manageTickTackToeContext.characters
    );
  }, []);

  const handleImageClick = (data) => {
    if (!manageTickTackToeContext.playerOne) {
      manageTickTackToeContext.setPlayerOne(data);

      const playerOne = data.name;
      const characters = manageTickTackToeContext.characters.filter(
        (img, i) => img.name !== playerOne
      );
      manageTickTackToeContext.setFamilyCharacters(characters);
    } else manageTickTackToeContext.setPlayerTwo(data);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{ color: PagePalette[manageAppContext.page].secondary },
      }}
    >
      <div style={styles.title}>Pick Your Player</div>
      <div style={styles.wrapper}>
        {manageTickTackToeContext.familyCharacters.map((img, i) => (
          <div
            key={img.id}
            style={8 !== i ? styles.img : styles.lastChild}
            onClick={() => handleImageClick(img)}
          >
            <Character src={img.img} name={img.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    rowGap: '8vh',
    justifyContent: 'space-around',
    width: 600,
    maxWidth: '95vw',
    cursor: 'pointer',
  },
  lastChild: {
    display: 'grid',
    gridColumn: '1 / 5',
    justifyContent: 'center',
    height: '15vh',
  },
  img: {
    display: 'grid',
    justifyContent: 'center',
    height: '15vh',
  },
  name: {
    display: 'grid',
    justifyContent: 'center',
  },
  title: {
    fontSize: '4vh',
    marginBottom: '4vh',
  },
};
