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
	    return <div className="board">testtesttest</div>;
	  }
}
export default Board;