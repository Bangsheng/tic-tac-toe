import React, {PropTypes, Component} from 'react'
import Row from './Row'

class Board extends Component {

  renderRows () {
    const {board, onPlayerMove} = this.props
    return board.map((row, i) => {
      return (
        <Row key={i} row={row} rowNumber={i} onClick={onPlayerMove} />
      )
    })
  }

  render() {
    return (
      <div id='board'>
        {this.renderRows()}
      </div>
    )
  }
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onPlayerMove: PropTypes.func.isRequired
}

export default Board
