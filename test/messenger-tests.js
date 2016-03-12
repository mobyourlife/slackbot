/* global describe, it */

'use strict'

const expect = require('expect.js')

const Messenger = require('../lib/messenger')

describe('Messenger tests', function () {
  it('should create an empty messenger', function (done) {
    let msg = new Messenger()

    expect(msg.CountReceived()).to.be(0)
    expect(msg.CountSent()).to.be(0)

    done()
  })

  it('should receive a message', function (done) {
    let msg = new Messenger()
    msg.Receive('foo', new Date(), 'lorem ipsum')

    expect(msg.CountReceived()).to.be(1)
    expect(msg.CountSent()).to.be(0)

    done()
  })

  it('should send a message', function (done) {
    let msg = new Messenger()
    msg.Send('foo', new Date(), 'lorem ipsum')

    expect(msg.CountSent()).to.be(1)
    expect(msg.CountReceived()).to.be(0)

    done()
  })
})
