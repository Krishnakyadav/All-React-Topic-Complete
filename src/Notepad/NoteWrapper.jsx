import React from 'react'
import CreateNotePad from './CreateNotePad'
import DisplayedNote from './DisplayedNote'

const NoteWrapper = () => {
  return (
    <div>
      <CreateNotePad/>
      <hr />
      <DisplayedNote/>
    </div>
  )
}

export default NoteWrapper
