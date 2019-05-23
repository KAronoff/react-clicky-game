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
  const newCharacterList = this.state.characterList.forEach(element => {
    if (characterListId === this.state.characterList.id){
      if (this.state.characterList.clicked){
        return this.setState({
          characterList: newCharacterList
        })
      }
      
    }
    

  });
  
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
