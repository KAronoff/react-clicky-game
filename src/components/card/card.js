import React from "react";
import "./style.css"

function Card (props){
  return (
  <div className="card">
    <div 
    src={props.image}
    alt={props.name}
    onClick={() => props.handleCharachterClick(props.id)}
    className="card-img-top">
    </div>
  </div>
  )
}

export default Card;