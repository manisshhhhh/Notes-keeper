import React from 'react'

const Note = (props) => {

    
  return (
    <div className="note">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <button className='btn1' onClick={()=>props.onDelete(props.id)}>DELETE</button>
    </div>
  )
}

export default Note
