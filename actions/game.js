import {
  NEW_GAME,
  PLAYER_CLICK,
  CLICK_RESULT
} from '../constants/game'
import {
  postJSON
} from '../libs/ajax'
export function newGame() {
  return dispatch => {
    dispatch({
      type: NEW_GAME
    })
  }
}

export function playerMove(position) {
  return (dispatch, getState) => {
    const [row, column] = position
    let game = getState().game
    if (game.board[row][column] === 0 && !game.win) {
      game.board[row][column] = game.player
      dispatch({
        type: PLAYER_CLICK,
        board: game.board
      });
      postJSON('/result-check', {
        board: game.board,
        marks: game.marks,
        position: position,
        player: game.player
      }, function (status, res) {
        dispatch({
          type: CLICK_RESULT,
          res: res
        })
      })
    }
  }
}
