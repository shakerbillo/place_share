import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			let formIsValid = true;
			for (const inputId in state.inputs) {
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: { value: action.value, isValid: action.isValid },
				},
				isValid: formIsValid,
			};
		case 'SET_DATA':
			return {
				inputs: action.inputs,
				isValid: action.formIsValid,
			};
		default:
			return state;
	}
};

const useForm = (initialInputs, initialFormValidity) => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: initialInputs,
		isValid: initialFormValidity,
	});

	const handleInput = useCallback((id, value, isValid) => {
		dispatch({
			type: 'CHANGE_INPUT',
			value: value,
			isValid: isValid,
			inputId: id,
		});
	}, []);

	const setFormData = useCallback((inputData, formValidity) => {
        console.log('Setting Form Data:', inputData, formValidity);
		dispatch({
			type: 'SET_DATA',
			inputs: inputData,
			formIsValid: formValidity,
		});
	}, []);

	return [formState, handleInput, setFormData];
};

export default useForm;
