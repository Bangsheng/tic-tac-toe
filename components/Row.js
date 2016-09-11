import React, {PropTypes, Component} from 'react'
import Tile from './Tile'

class Row extends Component {

  renderTiles () {
    const {row, rowNumber, onClick} = this.props

    return row.map((tile, i) => {
      return (
        <Tile key={i} player={row[i]} position={[rowNumber, i]} onClick={() => {
          onClick([rowNumber, i])
        }} />
      )
    })
  }

  render() {
    return (
      <div className='row'>
        {this.renderTiles()}
      </div>
    )
  }
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
  rowNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Row
