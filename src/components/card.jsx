import React from 'react'
import './card.css'
const card = (props) => {
  return (
    <div className='card'>
      <div className="image"><img src={`images/${props.image}`} alt="n" /></div>
      <div className="content">
          <div className="itemname">{props.name}</div>
          <div className="price">₹{props.price}</div>
          <div className="pack">{props.pack}</div>
        <div className="info">{props.info}</div>
        </div>
    </div>
  )
}

export default card
