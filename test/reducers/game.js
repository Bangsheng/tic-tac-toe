import {
  NEW_GAME
} from '../../constants/game'
import reducer from '../../reducers/game'
import assert from 'assert'

describe('game reducer', () => {
  it('should create new game', () => {
    const expteced = {
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
    assert(reducer({}, {
      type: NEW_GAME
    }), expteced)
  })
})
