import React from 'react';
import ReactDOM from 'react-dom';
import {
	createMuiTheme,
	CssBaseline,
	MuiThemeProvider,
} from '@material-ui/core';
import higTheme from './framework/higTheme';
import IconView from './components/IconView';
import IntroWidget from './components/IntroWidget';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={createMuiTheme(higTheme)}>
				<CssBaseline />
				<IntroWidget />
				<IconView />
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
