import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <div className='formbox'>
        <div className="formbox2">
        <div>
            <input className="form_input" type='text' placeholder='Enter your name' />
        </div>
        <div>
            <input className="form_input" type='text' placeholder='Enter your Email' />
        </div>
        <div>
            <input className="form_input" type='text' placeholder='Enter your Number' />
        </div>
        </div>
    </div>
    </>
  )
}

export default Form