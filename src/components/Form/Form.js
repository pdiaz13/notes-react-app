import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ setNotes, notes }) => {
	// useState hook to keep track of the input value in the form
	const [inputValue, setInputValue] = useState('');
	const [selectedDate, setSelectedDate] = useState('');

	// function to update the input value when user types into the input field
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	// funtion to handle date change
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	// function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// check if input value is empty
		if (inputValue.trim() === '') {
			alert('Note must have a value!');
			return;
		}
		async function addNotes() {
			const newNote = {
				id: notes.length + 1,
				text: inputValue,
				status: 'pending',
				date: selectedDate ? selectedDate.toLocaleDateString() : '',
			};
			try {
				const response = await axios.post(
					'http://localhost:3005/notes',
					newNote
				);
				console.log(response.data);
				setNotes([...notes, response.data]);
				setInputValue('');
			} catch (error) {
				console.log(error);
			}
		}
		addNotes();
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
			<DatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				dateFormat='dd/MM/yyyy'
				placeholderText='select a date'
				className='note-datepicker'
			/>
			<button className='note-button' onClick={handleSubmit}>
				Add
			</button>
		</form>
	);
};

export default Form;
