import React, { Component } from "react";
import Board from "../Board/board";

class Game extends Component {
  render() {
    return <div className="Game"> 
      <Board className="boardComp"/>
    </div>;
  }
}

export default Game;
