import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/places/new" element={<NewPlace />} />
					<Route path='/:uid/places' element={<UserPlaces/>} />
				</Routes>
			</main>
		</>
	);
};

export default App;
