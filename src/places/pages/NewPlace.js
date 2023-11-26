import React from 'react';
import './PlaceForm.css';
import Input from '../../shared/FormElements/Input';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/Util/validator';

import Button from '../../shared/FormElements/Button';
import useForm from '../../shared/hooks/useForm';

const NewPlace = () => {
 const [formState, handleInput] = useForm({
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
    address: {
      value: '',
      isValid: false,
    },
  }, false)
	

	const handleFormSubmition = (e) => {
		e.preventDefault();
		console.log(formState.inputs); // send to backend
	};

	return (
		<>
			<form className="place-form" onSubmit={handleFormSubmition}>
				<Input
					id="title"
					element="input"
					type="text"
					label="Title"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid title"
					onInput={handleInput}
				/>
				<Input
					id="description"
					element="textarea"
					label="Description"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid description (at least 5 characters)"
					onInput={handleInput}
				/>

				<Input
					id="address"
					element="input"
					type="text"
					label="Address"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid address"
					onInput={handleInput}
				/>
				<Button type="submit" disabled={!formState.isValid}>
					ADD PLACE
				</Button>
			</form>
		</>
	);
};

export default NewPlace;
