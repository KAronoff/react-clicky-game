import React from "react";
import "./style.css"

function Wrapper (props){
  return (
  <div className="container">
  <div className="row">
    <div className="col-12 col-md-12">
    <span>{`Current Score: ${props.currentScore}`}
    </span> || 

    <span>{`High Score: ${props.highScore}`}
    </span>
    
    </div>
  </div>
  <div className="row">
      {props.children}
    
  </div>
  
  </div>
  )
}

export default Wrapper;