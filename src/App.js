import React, {Component} from 'react';
import PlayerCard from "./PlayerCard.js";

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "paper", "scissors"];
    this.state = {
      // good practice to initialize with value to make sure program is actually accepting these values
      playerOne: "rock",
      playerTwo: "paper",
      winner: "Player Two wins!",
    }
  }

  // method
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*this.signs.length)],
      playerTwo: this.signs[Math.floor(Math.random()*this.signs.length)],
    })
  }
  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;
    if (playerOne === playerTwo) {
      this.setState({
        winner: "It's a tie!",
      })
    } else if (playerOne === "rock" & playerTwo === "scissors") {
      this.setState({
        winner: "Player One wins!!",
      })
    }
  }
  /*  if (this.state.playerOne === "rock") {
      if (this.state.playerTwo === "paper") {
        this.setState({
          winner: "Player Two wins!",
        })
      } else if (this.state.playerTwo === "scissors") {
        this.setState({
          winner: "Player One wins!",
        })
      } else if (this.state.playerTwo === "rock") {
        this.setState({
          winner: "It's a tie!",
        })
      }
    } else if (this.state.playerOne === "scissors") {
      if (this.state.playerTwo === "paper") {
        this.setState({
          winner: "Player One wins!",
        })
      } else if (this.state.playerTwo === "rock") {
        this.setState({
          winner: "Player Two wins!",
        })
      } else if (this.state.playerTwo === "scissors") {
        this.setState({
          winner: "It's a tie!",
        })
      }
    } else if (this.state.playerOne === "paper") {
      if (this.state.playerTwo === "paper") {
        this.setState({
          winner: "It's a tie!",
        })
      } else if (this.state.playerTwo === "rock") {
        this.setState({
          winner: "Player One wins!",
        })
      } else if (this.state.playerTwo === "scissors") {
        this.setState({
          winner: "Player Two wins!",
        })
      }
    }
  }*/
    /*if ((this.playerOne = "rock") && (this.playerOne = "paper")) {
      this.setState({
        winner: "Player One wins!",
      })
    } else if ((this.playerOne = "rock") && (this.playerOne = "scissors")) {
      this.setState({
        winner: "Player One wins!",
      })
    }
  }*/

  // render
  render () {
    return (
    <div className="style">
      <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
      </div>
      <div className="winner">
        {this.state.winner}
        // {this.decideWinner()}
      </div>
      <button type="button" onClick={this.playGame}>Play the game</button>
    </div>
    );
  }
}

export default Game;


/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/
