import React, {PropTypes, Component} from 'react'

class NewGameButton extends Component {

  render() {
    const {newGame} = this.props
    return (
      <input id='new-game-button'
        type='button'
        value='New Game'
        onClick={newGame} />
    )
  }
}

NewGameButton.propTypes = {
  newGame: PropTypes.func.isRequired
}

export default NewGameButton
