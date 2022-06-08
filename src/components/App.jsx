import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles.css';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './';

const App = () => {
	return (
		<div className="root">
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
