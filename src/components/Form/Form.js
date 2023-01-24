import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import './Form.css';

const Form = ({ setNotes, notes }) => {
	// useState hook to keep track of the input value in the form
	const [inputValue, setInputValue] = useState('');

	// function to update the input value when user types into the input field
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	// function to handle form submission
	const handleSubmit = (e, inputValue) => {
		e.preventDefault();
	};

	return (
		<form className='note-form' onSubmit={(e) => handleSubmit(e, inputValue)}>
			<input
				className='note-input'
				type='text'
				placeholder='write a note'
				name='text'
				onChange={handleChange}
				value={inputValue}
			/>
			<button className='note-button'> Add Note</button>
			<Note text={inputValue} id={Note.id} status={Note.status} />
		</form>
	);
};

export default Form;
