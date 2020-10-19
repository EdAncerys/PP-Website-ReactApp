import React, { useState } from 'react';

export default function Character({ src, name }) {
	const [ clickEffect, setClickEffect ] = useState(false);

	const handleImageClick = () => {
		setClickEffect(true);
		setTimeout(() => {
			setClickEffect(false);
		}, 200);
	};

	return (
		<div style={{ transform: clickEffect ? 'scale(0.95)' : 'scale(1)' }} key={name}>
			<div style={styles.name}>{name}</div>
			<img style={{ height: '15vh' }} alt={name} src={src} onClick={() => handleImageClick()} />
		</div>
	);
}

const styles = {
	name: {
		display: 'grid',
		justifyContent: 'center',
		marginBottom: 10
	}
};
