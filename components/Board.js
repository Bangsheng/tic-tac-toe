import React, {PropTypes, Component} from 'react'
import Row from './Row'

class Board extends Component {

  renderRows () {
    const {board} = this.props
    let tileRows = board.map((row, i) => {
      return (
        <Row key={i} row={row} />
      )
    })

    return tileRows
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
  board: PropTypes.array.isRequired
}

export default Board
