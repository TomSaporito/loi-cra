import React, { Component } from 'react';
//views

import StartGame from './views/start-game';
import PlayGame from './views/play-game';

import {genCard} from './GameData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'START_SCREEN',
      rulesCollapse: true,
      age: 0,
      gameWon: false,
      currentCard: {
        trueOutcome:  null,
        falseOutcome: null,
        cost:null,
        action:null,
        dieNums: [],
        ministryEffected:null,
        borderColor: 'black'
      },
      prevCard: null,
      nextCard: null,
      cards: [],
      currentCardIndex: -1
    };
  
  }

  startGame = ()=>{
    this.setState({
      view: 'PLAY_SCREEN'
    });
  }

  generateCard = ()=>{
    const card = genCard();

    if(typeof card === 'number'){
      const age = ((this.state.age + card));

      if(age >= 1000){
        this.setState({
          age: age,
          gameWon: true,
          yearsToGain: card
        });
      } else {
        this.setState({
          yearsToGain: card,
          currentCard: card,
          age: age,
          prevCard: this.state.card,
          cards: this.state.cards.concat(this.state.currentCard),
          currentCardIndex: parseInt((this.state.currentCardIndex + 1), 10)
        });
      }
    } else {
      
      this.setState({
        currentCard: card,
        prevCard: this.state.card,
        cards: this.state.cards.concat(this.state.currentCard),
        currentCardIndex: parseInt((this.state.currentCardIndex + 1), 10)
      });
    }
    
  }

  handleRulesClick = () =>{
    this.setState({
      rulesCollapse: !this.state.rulesCollapse
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.view === 'START_SCREEN'? <StartGame startGame={this.startGame}/> : null}
        {this.state.view === 'PLAY_SCREEN'? <PlayGame {...this.state} generateCard={this.generateCard} getRules={this.handleRulesClick}/> : null}
      </div>
    );
  }
}

export default App;
