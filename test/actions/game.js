import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/game'
import * as types from '../../constants/game'
import sinon from 'sinon'
import assert from 'assert'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let requests
describe('actions/game', () => {
  before(() => {
    global.XMLHttpRequest = sinon.useFakeXMLHttpRequest()
    requests = []
    global.XMLHttpRequest.onCreate = function (req) {
      requests.push(req)
    }
  })
  after(() => {
    global.XMLHttpRequest.restore()
  })

  it('create new game', () => {
    const store = mockStore({
      game: {
        player: 1,
        win: 0,
        noTileLeft: false,
        marks: 3,
        judging: false,
        board: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
      }
    })
    store.dispatch(actions.newGame())

    assert.deepEqual(store.getActions(), [{
      type: types.NEW_GAME
    }])
  })
  it('click on a clicked tile', () => {
    const store = mockStore({
      game: {
        player: 1,
        win: 0,
        noTileLeft: false,
        marks: 3,
        judging: false,
        board: [
          [1, 2, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
      }
    })
    store.dispatch(actions.playerMove([0, 0]))
    assert.deepEqual(store.getActions(), [])
  })
  it('player1 click no win', () => {
    const store = mockStore({
      game: {
        player: 1,
        win: 0,
        noTileLeft: false,
        marks: 3,
        judging: false,
        board: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
      }
    })
    const expected = [{
      type: types.PLAYER_CLICK,
      board: [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }, {
      type: types.CLICK_RESULT,
      res: {
        win: 0,
        noTileLeft: false
      }
    }]
    let response = {
      win: 0,
      noTileLeft: false
    }
    store.dispatch(actions.playerMove([0, 0]))

    requests[0].respond(200, '', JSON.stringify(response))
    assert.deepEqual(store.getActions(), expected)
    requests.pop()
  })

  it('player1 click win', () => {
    const store = mockStore({
      game: {
        player: 1,
        win: 0,
        noTileLeft: false,
        marks: 3,
        judging: false,
        board: [
          [1, 2, 0],
          [0, 1, 2],
          [0, 0, 0]
        ]
      }
    })
    const expected = [{
      type: types.PLAYER_CLICK,
      board: [
        [1, 2, 0],
        [0, 1, 2],
        [0, 0, 1]
      ]
    }, {
      type: types.CLICK_RESULT,
      res: {
        win: 1,
        noTileLeft: false
      }
    }]
    let response = {
      win: 1,
      noTileLeft: false
    }
    store.dispatch(actions.playerMove([2, 2]))

    requests[0].respond(200, '', JSON.stringify(response))
    assert.deepEqual(store.getActions(), expected)
    requests.pop()
  })
})
