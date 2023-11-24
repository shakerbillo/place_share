import React from 'react';
import './UsersList';
import UserItem from './UserItem';
import './UsersList.css'
import Card from '../../shared/components/UIElements/Card/Card';

const UsersList = ({ users }) => {
	if (users.length === 0) {
		return (
			<div className="center">
                <Card>
				<h2>No users found</h2>
                </Card>
			</div>
		);
	}
	return (
		<ul className='users-list'>
			{users.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					image={user.image}
					name={user.name}
					placeCount={user.places}
				/>
			))}
		</ul>
	);
};

export default UsersList;
