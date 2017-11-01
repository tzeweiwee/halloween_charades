import React, { Component } from 'react';
import './App.css';
import CharadeViewer from './components/CharadeViewer/CharadeViewer';
import {actions, characters} from './words';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters :characters,
      actions: actions,
      words: "",
      instructionDisplay: "block",
      gameDisplay : "none",
      score: 0
    };
    this.showNext = this.showNext.bind(this);
    this.startGame = this.startGame.bind(this);
    this.minusScore = this.minusScore.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  minusScore(e){
    let score = this.state.score - 1;
    this.setState({
      score: score,
    });
  }

  addScore(e){
    let score = this.state.score + 1;
    this.setState({
      score: score,
    });
  }

  showNext(e){
    let character = Math.floor(Math.random() * this.state.characters.length);
    let action = Math.floor(Math.random() * this.state.actions.length);
    let sentence = this.state.characters[character] + " " + this.state.actions[action];
    this.setState({
      words: sentence,
    });
  }

  startGame(e){
    this.setState({
      instructionDisplay: "none",
      gameDisplay : "flex"
    })
    this.showNext();
  }

  render() {
    return (
      <div className="App">
          <div className="InitialScreenWrapper" style={{display: this.state.instructionDisplay}}>
              <p className="gameTitle animated infinite tada">Halloween Charades by BOF</p>    
              <p className="instructionTitle"> Rules of the Game </p>
              <li className="instructionDetails"> You have 2 mins to win the game </li>
              <li className="instructionDetails"> Team that guess the most words win the game </li>
              <li className="instructionDetails"> Actors must shout 'PASS' to skip the words</li>
              <li className="instructionDetails"> (Optional) Rotate the guesser and actors </li>
              <button className="startButton gameButton" onClick={this.startGame}> Start </button>
          </div>
          <div className="GameScreenWrapper" style={{display: this.state.gameDisplay}}>
              <CharadeViewer charadewords={this.state.words} />
              <div className="buttonControls">
                <div className="buttonWrapper">
                  <button className="nextButton gameButton" onClick={this.showNext}> Next </button>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
