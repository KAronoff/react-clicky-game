import React from "react";
import "./style.css"

function Wrapper (props){
  return (
  <div className="container">
  <div className="row">
    <div className="col-12 col-md-12">
    <span>{props.currentScore}
    </span> || 

    <span>{props.totalScore}
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