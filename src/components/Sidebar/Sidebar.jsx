import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import './Sidebar.css'
const Sidebar = ({handleNotes,handleShowNotes}) => {
  return (
    <>
      <div className="sidebar border-end mt-0.5" style={{ height: '100vh' }}>
        <h3 className='text-center'> INotes</h3>
        <div className="card" id='sidebar' style={{ width: '100%' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-2 d-flex align-items-center" style={{cursor:"pointer"}} onClick={handleNotes}>
              <FaPlus className="me-2" /> Add Notes
            </li>
          </ul>
        </div>
        <div className="card mt-0.5" id='sidebar' style={{ width: '100%' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-2 d-flex align-items-center" style={{cursor:"pointer"}} onClick={handleShowNotes}>
              <FaBookmark className="me-2" /> Saved Notes
            </li>
          </ul>
       
      
        </div>
      </div>
 


    </>
  )
}

export default Sidebar