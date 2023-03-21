import React, { useState, useEffect } from 'react';
import Note from '../Note/Note';
import Form from '../Form/Form';
import './NoteList.css';
import axios from 'axios';

function NoteList() {
	const [notes, setNotes] = useState([]);

	// send a get request to get notes from the server
	useEffect(() => {
		const fetchNotes = async () => {
			const response = await axios.get('http://localhost:3005/notes');
			setNotes(response.data);
		};
		fetchNotes();
	}, []);

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
		const updatedNotes = updateNoteStatus(noteId, notes);
		setNotes(updatedNotes);

		// send a put request to update the status on the server
		async function updateNotes() {
			const noteToUpdate = updatedNotes.find((note) => note.id === noteId);
			try {
				const response = await axios.put(
					`http://localhost:3005/notes/${noteId}`,
					noteToUpdate
				);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		}
		updateNotes();
	};

	// function to delete notes
	const handleClick = async (id) => {
		try {
			await axios.delete(`http://localhost:3005/notes/${id}`);
			// Filter the notes to exclude the one we have just deleted
			const updatedNotes = notes.filter((note) => note.id !== id);
			// Update status without the notes we deleted before
			setNotes(updatedNotes);
		} catch (error) {
			console.error(error);
		}
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
						<Note
							id={note.id}
							text={note.text}
							status={note.status}
							handleClick={handleClick}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default NoteList;
