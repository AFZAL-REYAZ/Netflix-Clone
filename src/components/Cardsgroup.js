import React from 'react'
import Card from './Card'
import Cardarray from './Cardarray'
import './cardsgroup.css'

export function Netcard({value,index}){
    // console.log("h1",props.value.imgsrc)
    return(
        <Card 
      key={value.index}
      imgsrc={value.imgsrc}
      tittle={value.tittle}
      sname={value.sname}
      link={value.link}
      />
    )
}

const Cardsgroup = () => {
  return (
    <div className='group'>
      {/* {Cardarray.map(netcard)} */}
      {
        Cardarray.map((value,index)=>{
          return<Netcard value={value} index={index}/>
        })
      }
    </div>
  )
}

export default Cardsgroup
