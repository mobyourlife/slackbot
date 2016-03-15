/* global describe, it */

'use strict'

const ProtoBot = require('../lib/protobot')

const expect = require('expect.js')

describe('Testes do ProtoBot', function () {
  describe('Saudações básicas', function () {
    it('oi', function (done) {
      let bot = new ProtoBot()
      let answer = bot.talk('oi')

      expect(answer).to.be('Olá! Em que posso ajudá-lo?')

      done()
    })

    it('olá', function (done) {
      let bot = new ProtoBot()
      let answer = bot.talk('olá')

      expect(answer).to.be('Olá! Em que posso ajudá-lo?')

      done()
    })

    it('até mais', function (done) {
      let bot = new ProtoBot()
      let answer = bot.talk('até mais')

      expect(answer).to.be('Estarei sempre a sua disposição!')

      done()
    })

    it('o proto bot se esforça para lhe entender', function (done) {
      let bot = new ProtoBot()
      let answer = bot.talk('té mais')

      expect(answer).to.be('Estarei sempre a sua disposição!')

      done()
    })

    it('o proto bot não consegue entender tudo', function (done) {
      let bot = new ProtoBot()
      let answer = bot.talk('Rawr rawr rawr')

      expect(answer).to.be('Desculpe, não entendi!')

      done()
    })
  })
})
