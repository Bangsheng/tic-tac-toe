import {
  NEW_GAME
} from '../constants/game'

export function newGame() {
  return dispatch => {
    dispatch({
      type: NEW_GAME
    })
  }
}
