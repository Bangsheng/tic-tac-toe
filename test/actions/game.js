import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/game'
import * as types from '../../constants/game'
import assert from 'assert'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
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
})
