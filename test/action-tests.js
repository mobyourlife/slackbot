/* global describe, it */

'use strict'

const ProtoBot = require('../lib/protobot')

const expect = require('expect.js')

describe('Action tests', function () {
  it('consultar status', function (done) {
    let bot = new ProtoBot()
    let answer = bot.talk('consultar status')

    expect(answer).to.be('Ok, vou verificar!')

    done()
  })
})
