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

  it('should get the reference of the received message', function (done) {
    let data = {
      username: 'foo',
      date: new Date(),
      message: 'lorem ipsum'
    }

    let msg = new Messenger()
    let added = msg.Receive(data.username, data.date, data.message)

    expect(added).to.be.ok()
    expect(added.username).to.be(data.username)
    expect(added.date).to.be(data.date)
    expect(added.message).to.be(data.message)

    done()
  })

  it('should get the reference of the sent message', function (done) {
    let data = {
      username: 'foo',
      date: new Date(),
      message: 'lorem ipsum'
    }

    let msg = new Messenger()
    let added = msg.Send(data.username, data.date, data.message)

    expect(added).to.be.ok()
    expect(added.username).to.be(data.username)
    expect(added.date).to.be(data.date)
    expect(added.message).to.be(data.message)

    done()
  })
})
