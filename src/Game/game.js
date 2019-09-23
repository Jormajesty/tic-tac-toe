import React, { Component } from "react";
import Board from "../Board/board";

class Game extends Component {
  render() {
    return <div className="Game"> 
      <h1 className="tictactoeHeader">Let's play Tic Tac Toe</h1>
      <Board className="boardComp"/>
    </div>;
  }
}

export default Game;
