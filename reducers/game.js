import {
  NEW_GAME,
  PLAYER_CLICK,
  CLICK_RESULT
} from '../constants/game'

const defaultState = {
  player: 1,
  win: 0,
  marks: 3,
  noTileLeft: false,
  judging: false,
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}

export default function game(state = defaultState, action) {
  let newState
  switch (action.type) {
  case NEW_GAME:
    return defaultState
  case PLAYER_CLICK:
    newState = Object.assign({}, state, {
      judging: true,
      board: action.board
    })
    return newState
  case CLICK_RESULT:
    const {
      win,
      noTileLeft
    } = action.res
    newState = Object.assign({}, state, {
      judging: false,
      win,
      noTileLeft,
      player: state.player === 1 ? 2 : 1
    })
    return newState
  default:
    return state
  }
}
