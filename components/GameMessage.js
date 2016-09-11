import React, {
  PropTypes,
  Component
} from 'react'

class GameMessage extends Component {

  render() {
    const {
      win,
      player,
      noTileLeft
    } = this.props
    let message = (
      <a>Player {player} move!</a>
    )
    let winPlayer = player === 1 ? 2 : 1
    if (win !== 0) {
      message = (
        <a>Player {winPlayer} wins!</a>
      )
    } else if (noTileLeft) {
      message = (
        <a>Game Over! No one wins!</a>
      )
    }
    return (
      <div id='game-message-box'>
        {message}
      </div>
    )
  }
}

GameMessage.propTypes = {
  win: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
  noTileLeft: PropTypes.bool.isRequired
}

export default GameMessage
