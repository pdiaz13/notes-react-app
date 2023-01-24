import React, { useState } from 'react';
import Note from '../Note/Note';
import Form from '../Form/Form';
import './NoteList.css';

function NoteList() {
	const [notes, setNotes] = useState([
		{
			text: 'pepe',
			id: 1,
			status: 'pending',
		},
		{
			text: 'pepa',
			id: 2,
			status: 'done',
		},
		{
			text: 'Hola',
			id: 3,
			status: 'pending',
		},
	]);

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
					<div key={note.id}>
						<input
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
