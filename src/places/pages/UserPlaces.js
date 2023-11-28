import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const UserPlaces = () => {
	const PLACES = [
		{
			id: 'p1',
			title: 'Accra',
			description: 'Best City in Ghana',
			imageUrl:
				'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
			address: 'Indepence Square, Accra, Ghana',
			location: {
				lat: 5.5490267,
				lng: -0.2752163,
			},
            creator:'u1',
		},
        {
			id: 'p2',
			title: 'Tena',
			description: 'Best City in Ghana',
			imageUrl:
				'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
			address: 'Indepence Square, Accra, Ghana',
			location: {
				lat: 5.5490267,
				lng: -0.2752163,
			},
            creator:'u2',
		},
        {
			id: 'p3',
			title: 'Kumasi',
			description: 'Best City in Ghana',
			imageUrl:
				'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
			address: 'GRX4+JV7, Accra, Ghana',
			location: {
				lat: 5.5490267,
				lng: -0.2752163,
			},
            creator:'u3',
		},
        {
			id: 'p4',
			title: 'Takoridi',
			description: 'Best City in Ghana',
			imageUrl:
				'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
			address: 'Indepence Square, Accra, Ghana',
			location: {
				lat: 5.5490267,
				lng: -0.2752163,
			},
            creator:'u4',
		},
      
	];
    const userId = useParams().uid;
    const loadedPlaces = PLACES.filter(place => place.creator === userId)
	return (
		<>
			<PlaceList places={loadedPlaces} />
		</>
	);
};

export default UserPlaces;
