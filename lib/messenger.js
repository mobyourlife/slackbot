'use strict'

var Repository = require('./repository')

/**
 * Messenger handles incoming and outcomings messages.
 */
function Messenger () {
  let incoming = new Repository()
  let outcoming = new Repository()

  /**
   * Count how many received messages are pending in the queue.
   */
  this.CountReceived = function () {
    return incoming.Count()
  }

  /**
   * Count how many messages are pending to be sent.
   */
  this.CountSent = function () {
    return outcoming.Count()
  }

  /**
   * Receive a message from somebody.
   * @param {String} from    Username whom this message was received.
   * @param {Date}   date    Date and time when the message was received.
   * @param {String} message Message body.
   */
  this.Receive = function (from, date, message) {
    return incoming.Push(from, date, message)
  }

  /**
   * Send a new message to somebody.
   * @param {String} to      Username to send this message to.
   * @param {String} message Message body.
   */
  this.Send = function (to, message) {
    return outcoming.Push(to, new Date(), message)
  }
}

module.exports = Messenger
