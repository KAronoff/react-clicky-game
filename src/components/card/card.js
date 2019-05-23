import React from "react";
import "./style.css"



function Card (props){
  return (

    <div className="col-2 col-md-2">
    <div class="card">
      <img src={props.image} className="card-img-top"
      alt={props.name}
      onClick={() => props.handleCharachterClick(props.id)}/>
    </div>
    </div>
  )
}

export default Card;