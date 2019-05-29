import React from 'react';
import Card from "../src/components/card/card"
import Wrapper from "../src/components/wrapper/wrapper"
import characterList from "../src/stuff.json"

import './App.css';

class App extends React.Component {
  state = {
    characterList: characterList,
    currentScore: 0,
    totalScore: 0
  }

handleCharachterClick = (characterListId) => {
  let correctguess = false;
  const newCharacterList = this.state.characterList.map(element => {
    

    if (element.id === characterListId){
      if (element.clicked === true){
        return ;
      }
      else {
        correctguess = true;
        return ;
      }
    }
    
  })
  correctguess ? this.handleCorrectGuess(newCharacterList) : this.handleIncorrectGuess(newCharacterList)
  
}

handleIncorrectGuess = (newCharacterList) => {
  console.log("wrong")
}

handleCorrectGuess = (newCharacterList) => {
  console.log("correct")
}
render (){
  return (
    <Wrapper>
      {
        this.state.characterList.map(character => {
          return (
            <Card 
            key={character.id}
            name={character.name}
            image={character.image}
            id={character.id}
            handleCharachterClick={this.handleCharachterClick}
            />
        )}
        )}
    </Wrapper>
  )
}
}

export default App;
