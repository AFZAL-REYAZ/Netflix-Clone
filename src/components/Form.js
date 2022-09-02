import React,{useState} from 'react'
import './Form.css'

const Form = () => {
  const [array1, setarray1] = useState([])
    const [Data1, setData1] = useState({
        'name':'',
        'number':'',
        'email':'',   
    })
    const sendData = ()=>{
        setarray1((val)=>{
            return [...val,Data1]
        })
    }
    
    const updateData1=(event)=>{
        setData1({
            ...Data1,
            [event.target.name] : [event.target.value]
        })
    }
    console.log("a1",Data1);
    
    console.log('a2',array1);
  return (
    <>
    <div className='formbox'>
        <div className="formbox2">
          <hi className="formheading">LOGIN</hi>
        <div className="form_input">
            <input  type='text' placeholder='Enter your name' value={Data1.name} onChange={(e)=>{updateData1(e)}} name="name"/>
        </div>
        <div className="form_input">
            <input  type='text' placeholder='Enter your Number' value={Data1.number} onChange={(e)=>{updateData1(e)}} name="number"/>
        </div>
        <div className="form_input">
            <input  type='text' placeholder='Enter your Email' value={Data1.email} onChange={(e)=>{updateData1(e)}} name="email"/>
        </div>
        <button className='formbtn' onClick={()=>{sendData()}}>SUBMIT</button>
        </div>
    </div>
    </>
  )
}

export default Form