import React from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';

import useStyles from './styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './';

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					<Route exact path="/movie/:id">
						<MovieInformation />
					</Route>
					<Route exact path="/actors/:id">
						<Actors />
					</Route>
					<Route exact path={['/', '/approved']}>
						<Movies />
					</Route>
					<Route exact path="/profile/:id">
						<Profile />
					</Route>
					<Route exact path={['/:name']}>
						<Movies />
					</Route>
				</Switch>
			</main>
		</div>
	);
};

export default App;
