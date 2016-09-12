'use strict'
import React from 'react'
import {shallow} from 'enzyme'
import Tile from '../../components/Tile'
import Row from '../../components/Row'
import assert from 'assert'
import sinon from 'sinon'

describe('components/Row', () => {
  let onClick
  let props
  before(() => {
    onClick = sinon.spy()
    props = {
      row: [0, 0, 0],
      rowNumber: 2,
      onClick: onClick
    }
  })
  it('should render', () => {
    const wrapper = shallow(<Row {...props} />)
    assert.equal(wrapper.hasClass('row'), true)
  })

  it('should contain 3 tiles', () => {
    const wrapper = shallow(<Row {...props} />)
    assert.equal(wrapper.find(Tile).length, 3)
  })

  it('row click', () => {
    const wrapper = shallow(<Row {...props} />)
    wrapper.find(Tile).at(1).simulate('click')
    assert.deepEqual(onClick.lastCall.args[0], [2, 1])
  })
})
