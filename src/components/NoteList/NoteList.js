import React from 'react';
import Note from '../Note/Note';
import Form from '../Form/Form';
import './NoteList.css';

function NoteList() {
  const arrayNotes = [
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
    {
      text: 'pepe',
      id: 1,
    },
  ];

  return (
    <div>
      <Form />
      <div className="note-list-container">
        {arrayNotes.map((i) => (
          <Note text={i.text} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
