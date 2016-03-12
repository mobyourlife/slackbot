'use strict'

// inicializa o proto bot
const ProtoBot = require('../lib/protobot')
var bot = new ProtoBot()

// carrega o módulo do slack bot
const slack = require('@slack/client')
const RtmClient = slack.RtmClient
const RTM_EVENTS = slack.RTM_EVENTS
const token = process.env.SLACK_TOKEN

// inicializa o slack bot
const rtm = new RtmClient(token, {
  // logLevel: 'debug'
})

// escuta as mensagens enviadas para o bot
rtm.on(RTM_EVENTS.MESSAGE, (data) => {
  let answer = bot.talk(data.text)
  rtm.sendMessage(answer, data.channel)
})

// habilita o slack bot
rtm.start()
