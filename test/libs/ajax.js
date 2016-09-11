'use strict'

import {
  postJSON
} from '../../libs/ajax'
import assert from 'assert'
import sinon from 'sinon'
let requests

describe('libs/ajax', function () {
  before(function () {
    global.XMLHttpRequest = sinon.useFakeXMLHttpRequest()
    requests = []
    global.XMLHttpRequest.onCreate = function (req) {
      requests.push(req)
    }
  })
  after(function () {
    global.XMLHttpRequest.restore();
  })

  it('should post', function (done) {
    let data = {
      player: 1
    }
    let response = {
      win: 1,
      noTileLeft: false
    }
    postJSON('url', data, function (status, res) {
      if (JSON.stringify(response) === JSON.stringify(res)) {
        done()
      } else {
        done('response not equal')
      }
    })
    requests[0].respond(200, '', JSON.stringify(response))
    assert.equal(requests[0].requestBody, JSON.stringify(data))
    assert.equal(requests[0].url, 'url')
  })
})
