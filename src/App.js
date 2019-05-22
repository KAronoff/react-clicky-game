import React from 'react';
import Card from "../src/components/card"
import Wrapper from "../src/components/wrapper"
import characterList from "../src/stuff.json"

import './App.css';

class App extends React.Component {
  state = {
    characterList: characterList,
    currentScore: 0,
    totalScore: 0
  }

handleCharachterClick = (characterListId) => {
  this.state.characterList.forEach(element => {
    if (characterListId === this.state.characterList.id){
      if (this.state.characterList.clicked){
        
      }
    }
  });
  
}
}

export default App;
