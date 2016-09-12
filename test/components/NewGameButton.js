'use strict'
import React from 'react'
import {shallow} from 'enzyme'
import NewGameButton from '../../components/NewGameButton'
import assert from 'assert'
import sinon from 'sinon'

describe('components/NewGameButton', () => {
  it('should render', () => {
    const props = {
      newGame: () => true
    }
    const wrapper = shallow(<NewGameButton {...props} />)
    assert.equal(wrapper.find('#new-game-button').length, 1)
  })

  it('click', () => {
    let newGame = sinon.spy()
    const props = {
      newGame: newGame
    }
    const wrapper = shallow(<NewGameButton {...props} />)
    wrapper.find('#new-game-button').simulate('click')
    assert.equal(newGame.callCount, 1)
  })
})
