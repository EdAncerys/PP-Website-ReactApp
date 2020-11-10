import React, { useContext } from 'react';
import { AppContext } from '../../App';
import ImageContainer from '../ImageContainer';
import LegoManImg from '../../img/Lego-Man.png';
import textDescription from '../../text/ProjectDescription';
import FooterForBanner from '../FooterForBanner';

import PagePalette from '../../config/PagePalette';
import HeaderForBanner from '../HeaderForBanner';

export default function TickTackToeBanner({ props }) {
	const { manageAppContext } = useContext(AppContext);
	const mediaQuery = manageAppContext.mediaQuery;

	return (
		<div className="bangers" style={styles.container}>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: '50px auto 100px',
					height: 550,
					width: mediaQuery ? '95vw' : 600
				}}
			>
				<HeaderForBanner color={PagePalette[1].secondary} pageNumber="001" />
				<div style={styles.imageContainer}>
					<ImageContainer
						img={LegoManImg}
						altText="Tick-Tack-Toe"
						text={textDescription.AboutInfoBanner}
						color={PagePalette[1].secondary}
					/>
				</div>
				<FooterForBanner name="About" type="Informational" color={PagePalette[1].secondary} page={1} />
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: 'grid',
		justifyContent: 'center',
		backgroundColor: PagePalette[1].primary,
		width: '100%'
	},
	imageContainer: {
		display: 'grid',
		alignItems: 'center',
		justifyContent: 'center'
	}
};
