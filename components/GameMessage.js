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
    let curPlayer
    let winPlayer
    if(player === 1) {
      curPlayer = 'X'
      winPlayer = 'O'
    } else {
      curPlayer = 'O'
      winPlayer = 'X'
    }
    let message = (
      <a>Player {curPlayer} move!</a>
    )
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
