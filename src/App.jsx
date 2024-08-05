// import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Notes from './components/Notes/Notes'
import ShowNotes from './components/ShowNotes/ShowNotes'
import { useContext } from 'react'
import Notescontext from './context/Notes'
function App() {

  const {handleNotes,handleShowNotes,createNotes,showNotes,editNote} = useContext(Notescontext)
 
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <Sidebar handleNotes={handleNotes} handleShowNotes={handleShowNotes} />
        </div>
        <div className='col-9'>
          {createNotes && <Notes  />}
          {showNotes && <ShowNotes />}
          {editNote && <Notes  />}

        </div>
      </div>
    </>
  )
}

export default App
