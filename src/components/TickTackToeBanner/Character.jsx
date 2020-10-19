import React from 'react';

export default function Character({ props }) {
  return (
    <div style={styles.container}>
        <div style={{...styles.img, ...{ transform: clickEffect ? 'scale(0.90)' : 'scale(1)'}}}>
          <div style={styles.name}>
            {manageTickTackToeContext.playerOne.name}
          </div>
          <img
            style={{ height: '15vh' }}
            alt={manageTickTackToeContext.playerOne.id}
            src={manageTickTackToeContext.playerOne.img}
            onClick={(data) => handleImageClick()}
          />
        </div>
    </div>
  );
}

const styles = {
  container: {}
};
