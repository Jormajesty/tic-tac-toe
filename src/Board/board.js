import React from 'react'
import Square from '../Square/square'

class Board extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      squares: Array(9).fill(null)
	    }
	  }
	render() {
	    return (
		 <div className="board"> 
		    <div className="board-row">
	          1
	        </div>
	        <div className="board-row">
	          2
	        </div>
	        <div className="board-row">
	          3
	        </div>
	      </div>
	    );
	  }
	}
export default Board;