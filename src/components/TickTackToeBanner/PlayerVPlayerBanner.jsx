import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

 const handleImageClick = () => {
   console.log('click')
 } 

  return (
    <div style={styles.container}>
  
       <img
              style={{height: '15vh'}}
              alt={manageTickTackToeContext.playerOne.id}
              src={manageTickTackToeContext.playerOne.name}
              onClick={(data) => handleImageClick()}
            />
                <img
              style={{height: '15vh'}}
              alt={manageTickTackToeContext.playerOne.id}
              src={manageTickTackToeContext.playerTwo.name}
              onClick={(data) => handleImageClick()}
            />
    
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    backgroundColor: 'tomato',
  }
};
