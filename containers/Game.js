import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/game'
import Board from '../components/Board'
import NewGameButton from '../components/NewGameButton'
import GameMessage from '../components/GameMessage'

class Game extends Component {
  render() {
    const {game, playerMove, newGame} = this.props
    return(
      <div id='game'>
        <NewGameButton newGame={newGame} />
        <Board board={game.board} onPlayerMove={playerMove} />
        <GameMessage win={game.win} player={game.player} noTileLeft={game.noTileLeft} />
      </div>
    )
  }
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  playerMove: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, actions)(Game)
