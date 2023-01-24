import React from 'react';
import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Note = ({ id, text, status }) => {
	return (
		<div
			className={status === 'done' ? 'note-container done' : 'note-container'}
		>
			<div className='note-text'>{text}</div>
			<div className='note-id'> {id}</div>
			<div className='note-status'>{status}</div>

			<FontAwesomeIcon icon={faCircleXmark} className='note-icon' />
		</div>
	);
};

export default Note;
