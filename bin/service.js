'use strict'

const Messenger = require('../lib/messenger')

const slack = require('@slack/client')
const RtmClient = slack.RtmClient
const RTM_EVENTS = slack.RTM_EVENTS

const token = process.env.SLACK_TOKEN

const msg = new Messenger()

const rtm = new RtmClient(token, {
  // logLevel: 'debug'
})

rtm.on(RTM_EVENTS.MESSAGE, (data) => {
  console.log(data)
  msg.Receive(data.user, data.ts, data.text)
})

rtm.start()
