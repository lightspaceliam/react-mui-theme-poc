import { FC, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header/Header';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './styles/app';

const App:FC = () => {
	const classes = styles({});

	return (
		<>
			<Header />
			<Container className={classes.main}>
				<div id='intoduction'>
					<Typography variant='h1'>React Material UI Theme POC</Typography>
					<Typography variant='body1'>
					The purpose of this POC (Proof of Concept), is to demonstrate how to override the default Material UI styling by implementing <a href='https://material-ui.com/customization/theming/#theme-provider' className={classes.anchor}>Theme Provider</a> to provide a consistent look and feel to all styles in a single point as apposed to overriding per component/styles/… As an added bonus, I have also provided a strategy for overriding the styles for a HTML anchor in a manner that provides reuse of default values and the ability to further override as required per use case.
					</Typography>
					<Typography variant='body1'>
						Overrides include Material UI's:
					</Typography>
					<List>
						<ListItem>
							<ListItemText primary={
								<Fragment>
									<Typography variant='body1'>Typography (h1 | h2 | body1): font size, colour & padding</Typography>
								</Fragment>
							}/>							
						</ListItem>
						<ListItem>
							<ListItemText primary={
								<Fragment>
									<Typography variant='body1'>AppBar: background colour</Typography>
								</Fragment>
							}/>
						</ListItem>
						<ListItem>
							<ListItemText primary={
								<Fragment>
									<Typography variant='body1'>Non theme: Default anchor base styles configured to: text decoration underline only on hover and colour. Implemented and overridden in styles/app.ts. This can also be implemented on react-router-dom's Link</Typography>
								</Fragment>
							}/>
						</ListItem>
					</List>
					<Typography variant='h2'>Examples</Typography>
					<Paper
						elevation={3}
						className={classes.paper}
					>
						<Typography variant='h1'>MUI Variant  &#60;h1&#47;&#62;</Typography>
						<h1>Native HTML &#60;h1&#47;&#62;</h1>
						<Typography variant='h2'>MUI Variant  &#60;h2&#47;&#62;</Typography>
						<h2>Native HTML &#60;h2&#47;&#62;</h2>
						<Typography variant='body1'>MUI Variant body1 - renders to &#60;p&#47;&#62;</Typography>
						<p>Native HTML &#60;p&#47;&#62;</p>
					</Paper>
					<Typography variant='h2'>Technology Stack</Typography>
					<List>
						<ListItem>
							React ^17.0.2
						</ListItem>
						<ListItem>
							Material UI ^4.11.4
						</ListItem>
					</List>
				</div>
			</Container>
		</>
  	);
}

export default App;
