import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

 const handleImageClick = () => {
   console.log('click')
 } 

  return (
    <div style={styles.container}>
      <div>
        manageTickTackToeContext.playerOne.name
      </div>
       <div style={styles.wrapper}>
  
        <img
         style={{height: '15vh'}}
         alt={manageTickTackToeContext.playerOne.id}
         src={manageTickTackToeContext.playerOne.img}
         onClick={(data) => handleImageClick()}
       />
           <img
         style={{height: '15vh'}}
         alt={manageTickTackToeContext.playerOne.id}
         src={manageTickTackToeContext.playerTwo.img}
         onClick={(data) => handleImageClick()}
       />

</div>
    </div>
   
  );
}

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    backgroundColor: 'tomato',
  }
};
