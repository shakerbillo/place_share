import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import './PlaceForm.css';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/Util/validator';
import useForm from '../../shared/hooks/useForm';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../../shared/components/UIElements/Card/Card';
const PLACES = [
	{
		id: 'p1',
		title: 'Accra',
		description: 'Best City in Ghana',
		imageUrl: 'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
		address: 'Indepence Square, Accra, Ghana',
		location: {
			lat: 5.5490267,
			lng: -0.2752163,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Tema',
		description: 'Best City in Ghana',
		imageUrl: 'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
		address: 'Indepence Square, Accra, Ghana',
		location: {
			lat: 5.5490267,
			lng: -0.2752163,
		},
		creator: 'u2',
	},
	{
		id: 'p3',
		title: 'Kumasi',
		description: 'Best City in Ghana',
		imageUrl: 'https://www.gpsmycity.com/img/gd_sight/44016.jpg',
		address: 'GRX4+JV7, Accra, Ghana',
		location: {
			lat: 5.5490267,
			lng: -0.2752163,
		},
		creator: 'u3',
	},
];

const UpdatePlace = () => {
	const [isLoading, setIsLoading] = useState(true);
	const placeId = useParams().placeId;

	const [formState, handleInput, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
		false
	);
	const identifiedPlace = PLACES.find((place) => place.id === placeId);

	useEffect(() => {
		if (identifiedPlace) {
			setFormData(
				{
					title: {
						value: identifiedPlace.title,
						isValid: true,
					},
					description: {
						value: identifiedPlace.description,
						isValid: true,
					},
				},
				true
			);
		}

		setIsLoading(false);
	}, [setFormData, identifiedPlace]);

	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		console.log(formState.inputs);
	};

	if (!identifiedPlace) {
		return (
			<div className="center">
				<Card>
				<h2>Could not find place!</h2>
				</Card>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="center">
				<h2>Loading...</h2>
			</div>
		);
	}

	return (
		<>
			<form className="place-form" onSubmit={handleUpdateSubmit}>
				<Input
					id="title"
					element="input"
					type="text"
					label="Title"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid title."
					onInput={handleInput}
					value={formState.inputs.title.value}
					valid={formState.inputs.title.isValid}
				/>
				<Input
					id="description"
					element="textarea"
					label="Description"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid description (at least 5 characters)."
					onInput={handleInput}
					value={formState.inputs.description.value}
					valid={formState.inputs.description.isValid}
				/>
				<Button type="submit" disabled={!formState.isValid}>
					UPDATE PLACE
				</Button>
			</form>
		</>
	);
};

export default UpdatePlace;
//
