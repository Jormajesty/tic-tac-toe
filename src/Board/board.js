import React from 'react'
import Square from '../Square/square'

class Board extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      squares: Array(9).fill(null)
	    }
	  };
	renderSquare(i) {
	    return (
	    	<Square value={i} className="boardSquare"/>
	  	)}
	render(){
	    return (
		 <div className="board"> 
		    <div className="board-row">
	          {this.renderSquare(0)}
	          {this.renderSquare(1)}
	          {this.renderSquare(2)}
	        </div>
	        <div className="board-row">
	          {this.renderSquare(0)}
	          {this.renderSquare(1)}
	          {this.renderSquare(2)}
	        </div>
	        <div className="board-row">
	          {this.renderSquare(0)}
	          {this.renderSquare(1)}
	          {this.renderSquare(2)}
	        </div>
	      </div>
	    );
	  }
	}
export default Board;