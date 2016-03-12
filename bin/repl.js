'use strict'

// inicializa o proto bot
const ProtoBot = require('../lib/protobot')
var bot = new ProtoBot()

// inicializa o repl
const repl = require('repl')

const server = repl.start({
  prompt: ' > ',
  eval: callBot
})

// envia os comandos do repl para o proto bot
function callBot (cmd, context, filename, callback) {
  let lines = cmd.split('\n')
  let text = lines[0]

  // envia a resposta do proto bot ao repl
  let answer = bot.talk(text)
  callback(null, answer)
}
