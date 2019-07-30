import React from 'react';
import { Grid } from '@material-ui/core';

function IntroWidget() {
	return (
		<>
			<h1>Icons</h1>
			The HIG icon system is designed to accomplish three goals:<br /><br />
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<strong>Be easy on the eyes</strong><br />
					Our customers spend a lot of time staring at their applications. The icons should not become annoying or tiring to look at over time.<br /><br />
				</Grid>
				<Grid item xs={4}>
					<strong>Don’t overpower the canvas</strong><br />
					These icons surround a canvas area that should be the focus of the user’s attention. We don’t want the icons to compete with the design data.<br /><br />
				</Grid>
				<Grid item xs={4}>
					<strong>Complement our tool icons</strong><br />
					Autodesk tool icons have a distinctive style. Although  they don’t need to communicate complex interactions, the HIG icons should complement these icons, and look like they belong to the same family of products.
				</Grid>
			</Grid>
		</>
	);
}

export default IntroWidget;
