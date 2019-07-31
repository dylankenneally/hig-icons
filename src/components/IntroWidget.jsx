import React from 'react';
import { Grid } from '@material-ui/core';

function IntroWidget() {
	return (
		<>
			<h1>Icons</h1>
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<Grid container spacing={4}>

							<Grid item xs={12}>
								The HIG icon system is designed to accomplish three goals:
							</Grid>

							<Grid item xs={4}>
								<strong>Be easy on the eyes</strong><br />
								Our customers spend a lot of time staring at their applications. The icons should not become annoying or tiring to look at over time.
							</Grid>
							<Grid item xs={4}>
								<strong>Don’t overpower the canvas</strong><br />
								These icons surround a canvas area that should be the focus of the user’s attention. We don’t want the icons to compete with the design data.
							</Grid>
							<Grid item xs={4}>
								<strong>Complement our tool icons</strong><br />
								Autodesk tool icons have a distinctive style. Although  they don’t need to communicate complex interactions, the HIG icons should complement these icons, and look like they belong to the same family of products.
							</Grid> 
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<strong>Related content</strong><br />
					<small>This content is only available to Autodesk employees, on the Autodesk network.</small>
					<ul>
						<li><a target="_blank" rel="noopener noreferrer" href='https://hig.autodesk.com/web/basics/icons'>HIG Icons</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href='https://share.autodesk.com/:f:/s/HIGDesignerToolkit/EnzL1kM-j6BDoCrSY9vP--EBbrlLn-cijus34ATFOMT7HA?e=Rrj8Nb'>View in abstract</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href='http://storybook.hig.autodesk.com/selectedKind=Icon'>Code samples</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href='https://git.autodesk.com/hig/icon-svg'>Download SVG's</a></li>
					</ul>
				</Grid>
			</Grid>
		</>
	);
}

export default IntroWidget;