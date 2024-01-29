import React, { useState } from 'react'

const InputForm = (props) => {

    const [note, setNote] = useState({
        title: "",
        content:""
    })

    function hendler(event) {
        const { name, value } = event.target;
        
        setNote((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    function submitHandler(event) {
        // calling the addNote from the props is eqavalent to calling the addNote from App.js 
        props.onAdd(note);
        event.preventDefault();

        setNote(
            {
              title:"",
              content:""
            }
        )
    }

  return (
    <div className='input-form'>
        <form>
              <input name="title" type="text" onChange={hendler}  placeholder='Enter the title' value={note.title} />
              <textarea  name="content" className='text-area' onChange={hendler} type="text" placeholder='Enter the decription...' value={note.content} />
              <button className="btn" onClick={submitHandler}>Add</button>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        </form>
    </div>
  )
}

export default InputForm
