import React, { useContext } from 'react';
import ListNotes from './ListNotes';
import Notescontext from '../../context/Notes';
import './ShowNotes.css';

const ShowNotes = () => {
    const { notes, handleDeleteNotesById, handleEditNote } = useContext(Notescontext);

    return (
        <div className='container'>
            <div className='grid-container'>
                {notes.map((note) => (
                    <div key={note.id} className="card-wrapper">
                        <ListNotes note={note} onDelete={handleDeleteNotesById} onEdit={handleEditNote} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowNotes;
