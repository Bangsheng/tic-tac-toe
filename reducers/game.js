import {
  NEW_GAME
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
  switch (action.type) {
  case NEW_GAME:
    return defaultState
  default:
    return state
  }
}
