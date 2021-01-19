import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing,setIsEditing] = useState(false)
  const [editID,setEditID] =useState(null)
  const [alert,setAlert] = useState({show: false, msg: '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){

    }else if(name && isEditing) {

    }else{
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList(...list,newItem)
      setName('')
    }
  }
  return (
    <section className='section-center'>
      <form className='grocery' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g cheese' onChange={(e) => setName(e.target.value)} />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list}/>
        <button className='clear-btn'>Clear items</button>
      </div>
    </section>
  )
}

export default App
