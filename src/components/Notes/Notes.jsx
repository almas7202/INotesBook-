import React, { useState, useContext, useEffect } from 'react';
import Notescontext from '../../context/Notes';

const Notes = () => {
    const { handleNewNotes, handleUpdateNote, editNote } = useContext(Notescontext);
    const [note, setNote] = useState({ title: '', notes: '' });
    const [error, setErrors] = useState({});

    useEffect(() => {
        if (editNote) {
            setNote({
                title: editNote.title,
                notes: editNote.notes
            });
        } else {
            setNote({ title: '', notes: '' });
        }
    }, [editNote]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => ({ ...prevNote, [name]: value }));
    };

    const validationForm = (data) => {
        const errors = {};
        if (!data.title.trim()) {
            errors.title = 'Title is Required';
        }
        if (!data.notes.trim()) {
            errors.notes = 'Notes are Required';
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validationForm(note);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const newNotes = {
                id: editNote ? editNote.id : Math.floor(Math.random() * 1000),
                ...note
            };
            if (editNote) {
                handleUpdateNote(newNotes);
            } else {
                handleNewNotes(newNotes);
            }
            setNote({ title: '', notes: '' });
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    console.log('Rendering Notes component');

    return (
        <div className='mt-2'>
            <div className="card" style={{ width: '100%', marginBottom: '1rem' }}>
                <div className="card-header">
                    <h5 className="card-title">{editNote ? 'Edit Note' : 'Add Note'}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type='text'
                                value={note.title}
                                name='title'
                                className='form-control mb-2'
                                placeholder='Enter Title'
                                onChange={handleInputChange}
                            />
                            {error.title && <div className="text-danger">{error.title}</div>}
                            <textarea
                                className="form-control mt-2"
                                name='notes'
                                rows="5"
                                placeholder="Enter your notes here..."
                                value={note.notes}
                                onChange={handleInputChange}
                            ></textarea>
                            {error.notes && <div className="text-danger">{error.notes}</div>}
                            <button type="submit" className='btn btn-primary mt-2 p-2'>
                                {editNote ? 'Update Note' : 'Add Note'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Notes;
