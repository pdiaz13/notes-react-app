import React from 'react';
import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Note = ({ id, text, status, handleClick }) => {
	return (
		<div
			className={status === 'done' ? 'note-container done' : 'note-container'}
		>
			<div className='note-text'>{text}</div>

			<FontAwesomeIcon
				icon={faCircleXmark}
				className='note-icon'
				onClick={() => handleClick(id)}
			/>
		</div>
	);
};

export default Note;
