import React, { useState } from 'react';
import Input from '../../shared/FormElements/Input';
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/Util/validator';
import useForm from '../../shared/hooks/useForm';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/components/UIElements/Card/Card';
import './Auth.css';

const Auth = () => {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [formState, handleInput, setFormData] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const handleAuthSumbit = (e) => {
		e.preventDefault();
		console.log(formState.inputs);
	};

	const handleSwitchMode = () => {
		if (!isLoginMode) {
			setFormData(
				{
					...formState.inputs,
					name: undefined,
				},
				formState.inputs.email.isValid && formState.inputs.password.isValid
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isValid: false,
					},
				},
				false
			);
		}
		setIsLoginMode((prevMode) => !prevMode);
	};

	return (
		<>
			<Card className="authentication">
				<h2>Login Required</h2>
				<hr />
				<form onSubmit={handleAuthSumbit}>
					{!isLoginMode && (
						<Input
							id="name"
							element="input"
							type="text"
							label="Full Name"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter your full name"
							onInput={handleInput}
						/>
					)}
					<Input
						id="email"
						element="input"
						type="email"
						label="E-Mail"
						validators={[VALIDATOR_EMAIL()]}
						errorText="Please enter a valid Email Address"
						onInput={handleInput}
					/>
					<Input
						id="password"
						element="input"
						type="password"
						label="Password"
						validators={[VALIDATOR_MINLENGTH(8)]}
						errorText="Please enter a valid password, at least 8 characters"
						onInput={handleInput}
					/>
					<Button type="submit" disabled={!formState.isValid}>
						{isLoginMode ? 'LOGIN' : 'SIGNUP'}
					</Button>
				</form>
				<Button inverse onClick={handleSwitchMode}>
					SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
				</Button>
			</Card>
		</>
	);
};

export default Auth;
