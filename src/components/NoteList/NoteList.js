import React, { useState } from 'react';
import Note from '../Note/Note';
import Form from '../Form/Form';
import './NoteList.css';

function NoteList() {
	const [notes, setNotes] = useState([]);

	// function to update the status of a note
	const updateNoteStatus = (noteId, notes) => {
		return notes.map((note) => {
			if (note.id === noteId) {
				return {
					...note,
					status: note.status === 'done' ? 'pending' : 'done',
				};
			}
			return note;
		});
	};

	// function to toggle the status of a note
	const toggleNoteStatus = (noteId) => {
		setNotes((prevNotes) => updateNoteStatus(noteId, prevNotes));
	};

	return (
		<div>
			<Form setNotes={setNotes} notes={notes} />
			<div className='note-list-container'>
				{notes.map((note) => (
					<div className='note-list-map' key={note.id}>
						<input
							className='input-checkbox'
							type='checkbox'
							checked={note.status === 'done'}
							onChange={() => toggleNoteStatus(note.id)}
						/>
						<Note id={note.id} text={note.text} status={note.status} />
					</div>
				))}
			</div>
		</div>
	);
}

export default NoteList;
