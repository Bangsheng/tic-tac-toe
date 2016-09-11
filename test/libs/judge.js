'use strict'

const assert = require('assert')
const judge = require('../../libs/judge')

describe('judge hasWon', () => {
  it('should return false when empty board', () => {
    let game = {
      position: [0, 0],
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), false)
  })

  it('should return false not win', () => {
    let game = {
      position: [0, 0],
      board: [
        [2, 2, 0],
        [1, 1, 0],
        [0, 0, 0]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), false)
  })

  it('win on row 3, 3, 3', () => {
    let game = {
      position: [1, 1],
      board: [
        [2, 2, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), true)
  })

  it('win on column 3, 3, 3', () => {
    let game = {
      position: [1, 0],
      board: [
        [1, 2, 0],
        [1, 2, 0],
        [1, 0, 0]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), true)
  })

  it('win on diagonal 3, 3, 3', () => {
    let game = {
      position: [1, 1],
      board: [
        [2, 1, 0],
        [1, 2, 1],
        [0, 0, 2]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), true)
  })

  it('win on back-diagonal 3, 3, 3', () => {
    let game = {
      position: [0, 2],
      board: [
        [1, 0, 2],
        [1, 2, 1],
        [2, 0, 0]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), true)
  })

  it('win on row 5, 5, 5', () => {
    let game = {
      position: [1, 1],
      board: [
        [1, 1, 0, 0, 0],
        [2, 2, 2, 2, 2],
        [1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      marks: 5
    }
    assert.equal(judge.hasWon(game), true)
  })

  it('win on diagonal 5, 5, 3', () => {
    let game = {
      position: [0, 2],
      board: [
        [0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2],
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0]
      ],
      marks: 3
    }
    assert.equal(judge.hasWon(game), true)
  })
})

describe('judge noTileLeft', () => {
  it('should return false if there is tiles left', () => {
    let board = [
      [1, 0, 2],
      [1, 2, 1],
      [2, 0, 0]
    ]
    assert.equal(judge.noTileLeft(board), false)
  })

  it('should return false if there is tiles left', () => {
    let board = [
      [1, 2, 2],
      [1, 2, 1],
      [2, 1, 1]
    ]
    assert.equal(judge.noTileLeft(board), true)
  })
})
