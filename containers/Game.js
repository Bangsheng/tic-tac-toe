import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/game'
import Board from '../components/Board'
import NewGameButton from '../components/NewGameButton'

class Game extends Component {
  render () {
    const {game, newGame} = this.props
    return (
      <div id='game'>
        <NewGameButton newGame={newGame} />
        <Board board={game.board} />
      </div>
    )
  }
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  newGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, actions)(Game)
