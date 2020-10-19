import React from 'react';

import colors from '../../config/colors';

export default function GameBoard({ props }) {
	return (
		<div style={styles.container}>
			<div style={styles.lineOne}>
				<div style={styles.horizontal}>s</div>
				<div style={styles.horizontal}>s</div>
				<div style={styles.horizontal}>s</div>
			</div>
			<div style={styles.lineOne}>
				<div style={styles.horizontal}>s</div>
				<div style={styles.horizontal}>s</div>
				<div style={styles.horizontal}>s</div>
			</div>
			<div style={styles.lineTwo}>
				<div style={styles.vertical}>s</div>
				<div style={styles.vertical}>s</div>
				<div style={styles.vertical}>s</div>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: 'grid',
		rowGap: 30
	},
	vertical: {
		display: 'grid',
		justifyContent: 'center',
		alignContent: 'center',
		borderRight: `2px solid ${colors.red}`,
		borderRadius: '0 0 640px 20%/20px',
		width: 80
	},
	horizontal: {
		display: 'grid',
		justifyContent: 'center',
		alignContent: 'center',
		borderBottom: `2px solid ${colors.red}`,
		borderRadius: '0 0 640px 20%/20px',
		width: 80
	},
	lineOne: {
		display: 'grid',
		gridTemplateColumns: 'auto auto auto'
	}
};
