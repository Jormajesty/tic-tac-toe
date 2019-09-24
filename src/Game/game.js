import React from 'react'
import Board from "../Board/board";

class Game extends React.Component{
  render() {
    return (
      <div className="Game">
          <h1 className="ticTacToeHeader">Let's play Tic Tac Toe!</h1>
          <Board />
      </div>
      );
  };
}

export default Game;
