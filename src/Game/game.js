import React from 'react'
import Board from "../Board/board";

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
      }
    }
  render() {
    return (
      <div className="Game">
          <h1 className="ticTacToeHeader">Let's play Tic Tac Toe!</h1>
          <Board className="boardComp" squares={this.state.squares}/>
      </div>
      );
  };
}

export default Game;
