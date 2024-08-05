import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
const ListNotes = ({ note, onDelete, onEdit }) => {

    const cardColor = getRandomColor()
    
    return (
        <div className="card mt-2" style={{ backgroundColor: note.color,maxHeight: '300px', overflow: 'auto' }}>
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.notes}</p>
                <MdDelete className="fs-0.7 ml-2" style={{cursor : "pointer"}} onClick={() => onDelete(note.id)} />
                <FaEdit className="fs-0.7" style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => onEdit(note)} />
            </div>
        </div>
    );
}

export default ListNotes;
