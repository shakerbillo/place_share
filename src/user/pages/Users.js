import React from 'react';
import UsersList from '../components/UsersList';



const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Emmanuel Gyan',
            image: 'https://tinyurl.com/2vtbmn2e',
            places: 4,
        },
    ];
	return (
		<>
			<UsersList users={USERS} />
		</>
	);
};

export default Users;
