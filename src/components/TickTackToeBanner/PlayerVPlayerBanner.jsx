import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';
import Button from '../Button';

import PagePalette from '../../config/PagePalette';
import Character from './Character';

export default function PlayerVPlayerBanner({ props }) {
	const { manageTickTackToeContext } = useContext(TickTackToeContext);
	const { manageAppContext } = useContext(AppContext);

	const handlePlayAgain = () => {
		manageTickTackToeContext.setPlayerOne(false);
		manageTickTackToeContext.setPlayerTwo(false);
	};

	return (
		<div
			style={{
				...styles.container,
				...{ color: PagePalette[manageAppContext.page].primary }
			}}
		>
			<div style={styles.wrapper}>
				<Character
					src={manageTickTackToeContext.playerOne.img}
					name={manageTickTackToeContext.playerOne.name}
				/>
				<div style={styles.vs}>vs</div>
				<Character
					src={manageTickTackToeContext.playerTwo.img}
					name={manageTickTackToeContext.playerTwo.name}
				/>
			</div>
			<div style={styles.buttonComponent}>
				<Button title="Play Again" onClick={() => handlePlayAgain()} />
				<Button title="New Game" solid={false} onClick={() => handlePlayAgain()} />
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: 'grid',
		rowGap: 100
	},
	wrapper: {
		display: 'grid',
		gridTemplateColumns: 'auto auto auto',
		alignContent: 'center',
		justifyItems: 'center',
		columnGap: 100
	},
	vs: {
		display: 'grid',
		justifyContent: 'center',
		alignContent: 'center',
		fontSize: 30
	},
	buttonComponent: {
		display: 'grid',
		gridTemplateColumns: 'auto auto',
		justifyItems: 'center',
		alignContent: 'center'
	}
};
