import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

const App = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/:uid/places" element={<UserPlaces />} />
					<Route path="/places/new" element={<NewPlace />} />
					<Route path="/places/:placeId" element={<UpdatePlace />} />
					<Route path="/auth" element={<Auth/>} />
				</Routes>
			</main>
		</>
	);
};

export default App;
