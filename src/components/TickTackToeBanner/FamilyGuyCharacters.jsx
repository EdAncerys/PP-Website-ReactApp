import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function FamilyGuyCharacters({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const numOfImg = manageTickTackToeContext.characters.length;

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {manageTickTackToeContext.characters.map((img, i) => (
          <div
            key={img.id}
            style={numOfImg - i - 1 !== 0 ? styles.img : styles.lastChild}
          >
            <img
              style={styles.img}
              key={img.id}
              onClick={(e) => console.log(img.id)}
              alt={img.name}
              src={img.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridGap: 15,
    justifyContent: 'space-around',
    width: '60vw',
    height: '60vh',
    overflow: 'auto',
  },
  lastChild: {
    height: '15vh',
    display: 'grid',
    gridColumn: '1 / 5',
    justifyContent: 'center',
  },
  img: {
    height: '15vh',
  },
};
