'use strict'

function Repository () {
  let messages = []

  /**
   * Add a new message to the list.
   * @param {String} username Username of the contacted part.
   * @param {Date}   date     Date and time when the message was added.
   * @param {String} message  Message body.
   */
  this.Push = function (username, date, message) {
    messages.push({
      username: username,
      date: date,
      message: message
    })
  }

  /**
   * Count how many messages are there in the list.
   */
  this.Count = function () {
    return messages.length
  }
}

module.exports = Repository
