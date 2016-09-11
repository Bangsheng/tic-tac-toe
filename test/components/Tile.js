import React from 'react'
import {shallow} from 'enzyme'
import Tile from '../../components/Tile'
import assert from 'assert'

function setup() {
  const props = {
    player: 1,
    onClick: () => true
  }
  const enzymeWrapper = shallow(<Tile {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Tile', () => {
  it('should self', () => {
    const {enzymeWrapper} = setup()

    assert(enzymeWrapper.hasClass('tile'), true)
  })
})
