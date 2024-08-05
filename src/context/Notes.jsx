import { createContext, useState,useEffect } from "react";

const Notescontext = createContext();

export function Provider({ children }) {
  const [createNotes, setCreateNotes] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
});
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
}, [notes]);


  const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleNewNotes = (note) => {
    const newNote = {
      ...note,
      color: generateColor() // Add a random color to the note
    };
    setNotes([...notes, newNote]);
    setCreateNotes(false)
    setShowNotes(true)
  };

  const handleNotes = () => {
    setCreateNotes(true);
    setShowNotes(false);
    setEditNote(null); // Clear editNote when creating a new note
  };

  const handleDeleteNotesById = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? {...updatedNote,color : note.color} : note
    );
    setNotes(updatedNotes);
    setEditNote(null);
    setCreateNotes(false);
    setShowNotes(true); // Show notes after updating
  };

  const handleEditNote = (note) => {
    setEditNote(note);
    setCreateNotes(false); // Show form when editing
    setShowNotes(false); // Hide notes list when editing
  };

  const handleShowNotes = () => {
    setShowNotes(!showNotes);
    setCreateNotes(false); // Hide form when showing notes
  };

  const valueToShare = {
    notes,
    showNotes,
    createNotes,
    editNote,
    handleNewNotes,
    handleNotes,
    handleDeleteNotesById,
    handleUpdateNote,
    handleEditNote,
    handleShowNotes
  };

  return <Notescontext.Provider value={valueToShare}>{children}</Notescontext.Provider>;
}

export default Notescontext;
