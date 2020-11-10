import React, { useContext } from 'react';
import { AppContext } from '../../App';
import ImageContainer from '../ImageContainer';
import Coding from '../../img/PPPhoto.jpg';
import textDescription from '../../text/ProjectDescription';
import PagePalette from '../../config/PagePalette';
import HeaderForBanner from '../HeaderForBanner';

import FooterForBanner from '../FooterForBanner';

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
				<HeaderForBanner color={PagePalette[2].secondary} pageNumber="002" />
				<div style={styles.imageContainer}>
					<ImageContainer
						img={Coding}
						altText="Tick-Tack-Toe"
						text={textDescription.AboutInfoBanner}
						color={PagePalette[2].secondary}
					/>
				</div>
				<FooterForBanner
					name="See What I Can Do"
					type="Informational"
					color={PagePalette[2].secondary}
					page={2}
				/>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: 'grid',
		justifyContent: 'center',
		backgroundColor: PagePalette[2].primary,
		width: '100%'
	},
	imageContainer: {
		display: 'grid',
		alignItems: 'center',
		justifyContent: 'center'
	}
};
