import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function FamilyGuyCharacters({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {manageTickTackToeContext.characters.map((img) => (
          <div key={img.id} style={styles.imgContainer}>
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
    gridGap: 10,
    justifyContent: 'space-around',
    width: '60vw',
    height: '60vh',
    overflow: 'auto',
  },
  imgContainer: {
    backgroundColor: 'tomato',
    alignSelf: 'center',
  },
  img: {
    width: 80,
  },
};
