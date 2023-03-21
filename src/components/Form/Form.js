import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

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
			id: notes.length + 1,
			text: inputValue,
			status: 'pending',
		};
		axios
			.post('http://localhost:3005/notes', newNote)
			.then((response) => {
				console.log(response.data);
				setNotes([...notes, response.data]);
				setInputValue('');
			})
			.catch((error) => {
				console.log(error);
			});
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
