'use strict'
import {
  NEW_GAME,
  PLAYER_CLICK,
  CLICK_RESULT
} from '../../constants/game'
import reducer from '../../reducers/game'
import assert from 'assert'

describe('reducers/game', () => {
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
    assert.deepEqual(reducer({}, {
      type: NEW_GAME
    }), expteced)
  })
  it('player click before request', () => {
    const state = {
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
    const expteced = {
      player: 1,
      win: 0,
      marks: 3,
      noTileLeft: false,
      judging: true,
      board: [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
    assert.deepEqual(reducer(state, {
      type: PLAYER_CLICK,
      board: [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }), expteced)
  })

  it('player click after request', () => {
    const state = {
      player: 1,
      win: 0,
      marks: 3,
      noTileLeft: false,
      judging: false,
      board: [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
    const expteced = {
      player: 2,
      win: 0,
      marks: 3,
      noTileLeft: false,
      judging: false,
      board: [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
    assert.deepEqual(reducer(state, {
      type: CLICK_RESULT,
      res: {
        win: 0,
        noTileLeft: false
      }
    }), expteced)
  })

  it('player click after request win', () => {
    const state = {
      player: 1,
      win: 0,
      marks: 3,
      noTileLeft: false,
      judging: false,
      board: [
        [1, 2, 0],
        [0, 1, 2],
        [0, 0, 1]
      ]
    }
    const expteced = {
      player: 2,
      win: 1,
      marks: 3,
      noTileLeft: false,
      judging: false,
      board: [
        [1, 2, 0],
        [0, 1, 2],
        [0, 0, 1]
      ]
    }
    assert.deepEqual(reducer(state, {
      type: CLICK_RESULT,
      res: {
        win: 1,
        noTileLeft: false
      }
    }), expteced)
  })
})
