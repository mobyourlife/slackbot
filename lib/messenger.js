'use strict'

var Repository = require('./repository')

/**
 * Messenger handles incoming and outcomings messages.
 */
function Messenger () {
  let incoming = new Repository()
  let outcoming = new Repository()

  /**
   * Receive a message from somebody.
   * @param {String} from    Username whom this message was received.
   * @param {Date}   date    Date and time when the message was received.
   * @param {String} message Message body.
   */
  this.Receive = function (from, date, message) {
    incoming.Push(from, date, message)
  }

  /**
   * Send a new message to somebody.
   * @param {String} to      Username to send this message to.
   * @param {String} message Message body.
   */
  this.Send = function (to, message) {
    outcoming.Push(to, new Date(), message)
  }
}

module.exports = Messenger
