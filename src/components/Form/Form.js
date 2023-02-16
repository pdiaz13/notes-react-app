import React, { useState } from 'react';
import './Form.css';

const Form = ({ setNotes, notes }) => {
	// useState hook to keep track of the input value in the form
	const [inputValue, setInputValue] = useState('');

	// function to update the input value when user types into the input field
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	// function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// check if input value is empty
		if (inputValue.trim() === '') {
			alert('Note must have a value!');
			return;
		}
		const newNote = {
			text: inputValue,
			id: notes.length + 1,
			status: 'pending',
		};
		setNotes([...notes, newNote]);
		setInputValue('');
	};

	return (
		<form className='note-form' onSubmit={(e) => handleSubmit(e, inputValue)}>
			<input
				className='note-input'
				type='text'
				autoComplete='off'
				placeholder='write a note'
				name='text'
				onChange={handleChange}
				value={inputValue}
			/>
			<button className='note-button' onClick={handleSubmit}>
				Add Note
			</button>
		</form>
	);
};

export default Form;
