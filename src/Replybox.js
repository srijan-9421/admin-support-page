import React from 'react'
import './Replybox.css'

function Replybox() {
  return (
    <div className='reply'>
        <input placeholder='Enter your comment here '></input>
        <button type='submit'>
            Submit
        </button>
    </div>
  )
}

export default Replybox