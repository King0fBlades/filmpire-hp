import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import styled from './styles.css';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './';

const App = () => {
	return (
		<div className="root">
			<CssBaseline />
			<NavBar />
			<main className="content">
				<div className="toolbar" />
				<Routes>
					<Route path="/movie/:id" element={<MovieInformation />} />
					<Route path="/actors/:id" element={<Actors />} />
					<Route path="/" element={<Movies />} />
					<Route path="/profile/:id" element={<Profile />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
