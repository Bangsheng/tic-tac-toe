import React, {PropTypes, Component} from 'react'

class Tile extends Component {

  render() {
    const {player, onClick} = this.props
    let inside
    if (player === 2) {
      inside = (
        <i className='fa fa-circle-o' aria-hidden='true' />
      )
    } else if (player === 1) {
      inside = (
        <i className='fa fa-times' aria-hidden='true' />
      )
    }
    return (
      <div className='tile' onClick={onClick}>
        {inside}
      </div>
    )
  }
}

Tile.propTypes = {
  player: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

export default Tile
