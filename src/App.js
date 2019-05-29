import React from 'react';
import Card from "../src/components/card/card"
import Wrapper from "../src/components/wrapper/wrapper"
import characterList from "../src/stuff.json"

import './App.css';

class App extends React.Component {
  state = {
    characterList: characterList,
    currentScore: 0,
    highScore: 0
  }

handleCharachterClick = (characterListId) => {
  let correctguess = false;
  // make copy of this.state.charactList
  const newCharacterList = [...this.state.characterList];
  newCharacterList.forEach(element => {
    
    if (element.id === characterListId){
      if (element.clicked === false){
        element.clicked = true;
        correctguess = true;
        return ;
      }
    }
  })

  correctguess ? this.handleCorrectGuess(newCharacterList) : this.handleIncorrectGuess(newCharacterList)
  
}

handleIncorrectGuess = (newCharacterList) => {
  alert("You lose.")
  this.setState({
    currentScore: 0,
    characterList: characterList
  })
  
}

handleCorrectGuess = (newCharacterList) => {
  // increase score in state by one
  const newScore = this.state.currentScore + 1;
  // if score is greater than the high score in state, high score is now set to the current score
  let highScore = this.state.highScore;
  if (newScore >= this.state.highScore) {
    highScore = newScore;
  }
  // shuffle newCharacterList
  const shuffledCharacters = newCharacterList.sort(() => 0.5 - Math.random());

  // use this.setState to update state with new values
  this.setState({
    currentScore: newScore,
    highScore: highScore,
    characterList: shuffledCharacters
  })
  console.log("correct")
}
render (){
  return (
    <Wrapper 
    currentScore={this.state.currentScore}
    highScore={this.state.highScore}>
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
