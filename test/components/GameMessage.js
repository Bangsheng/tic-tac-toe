'use strict'
import React from 'react'
import {shallow} from 'enzyme'
import GameMessage from '../../components/GameMessage'
import assert from 'assert'

describe('components/GameMessage', () => {
  it('should render', () => {
    const props = {
      win: 0,
      player: 1,
      noTileLeft: false
    }
    const wrapper = shallow(<GameMessage {...props} />)
    assert.equal(wrapper.find('#game-message-box').length, 1)
  })

  it('player X move', () => {
    const props = {
      win: 0,
      player: 1,
      noTileLeft: false
    }
    const wrapper = shallow(<GameMessage {...props} />)
    assert.equal(wrapper.text(), 'Player X move!')
  })

  it('Player O wins', () => {
    const props = {
      win: 2,
      player: 1,
      noTileLeft: false
    }
    const wrapper = shallow(<GameMessage {...props} />)
    assert.equal(wrapper.text(), 'Player O wins!')
  })

  it('no tile left', () => {
    const props = {
      win: 0,
      player: 1,
      noTileLeft: true
    }
    const wrapper = shallow(<GameMessage {...props} />)
    assert.equal(wrapper.text(), 'Game Over! No one wins!')
  })
})
