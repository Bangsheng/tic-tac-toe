'use strict'
import React from 'react'
import {shallow} from 'enzyme'
import Board from '../../components/Board'
import Row from '../../components/Row'
import assert from 'assert'
import sinon from 'sinon'

describe('components/Board', () => {
  let props
  let onPlayerMove
  before(() => {
    onPlayerMove = sinon.spy()
    props = {
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      onPlayerMove
    }
  })
  it('should render', () => {
    const wrapper = shallow(<Board {...props} />)
    assert.equal(wrapper.find('#board').length, 1)
  })

  it('should contain 3 rows', () => {
    const wrapper = shallow(<Board {...props} />)
    assert.equal(wrapper.find(Row).length, 3)
  })
})
