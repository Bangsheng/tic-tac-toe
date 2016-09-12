'use strict'
import React from 'react'
import {shallow} from 'enzyme'
import Tile from '../../components/Tile'
import assert from 'assert'
import sinon from 'sinon'


describe('compoents/Tile', () => {
  it('should render .tile', () => {
    const props = {
      player: 0,
      onClick: () => true
    }
    const wrapper = shallow(<Tile {...props} />)

    assert.equal(wrapper.hasClass('tile'), true)
    assert.equal(wrapper.find('.fa-circle-o').length, 0)
    assert.equal(wrapper.find('.fa-times').length, 0)
  })

  it('should render .fa-circle-o', () => {
    const props = {
      player: 2,
      onClick: () => true
    }
    const wrapper = shallow(<Tile {...props} />)

    assert.equal(wrapper.hasClass('tile'), true)
    assert.equal(wrapper.find('.fa-circle-o').length, 1)
    assert.equal(wrapper.find('.fa-times').length, 0)
  })

  it('should render .fa-timex', () => {
    const props = {
      player: 1,
      onClick: () => true
    }
    const wrapper = shallow(<Tile {...props} />)

    assert.equal(wrapper.hasClass('tile'), true)
    assert.equal(wrapper.find('.fa-circle-o').length, 0)
    assert.equal(wrapper.find('.fa-times').length, 1)
  })

  it('test click', () => {
    const onClick = sinon.spy()
    const props = {
      player: 1,
      onClick: onClick
    }
    const wrapper = shallow(<Tile {...props} />)

    wrapper.find('.tile').simulate('click')
    assert.equal(onClick.callCount, 1)
  })
})
