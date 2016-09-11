import React, {PropTypes, Component} from 'react'
import Tile from './Tile'

class Row extends Component {

  renderTiles () {
    const {row} = this.props
    let tiles = []

    for(let i = 0; i < row.length; i++) {
      tiles.push(
        <Tile key={i} />
      )
    }
    return tiles
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
  row: PropTypes.array.isRequired
}

export default Row
