'use strict'

/**
 * Repository holds an array of messages.
 * In the future it should store the messages in a Redis instance.
 */
function Repository () {
  let messages = []

  /**
   * Count how many messages are there in the list.
   */
  this.Count = function () {
    return messages.length
  }

  /**
   * Add a new message to the list.
   * @param {String} username Username of the contacted part.
   * @param {Date}   date     Date and time when the message was added.
   * @param {String} message  Message body.
   */
  this.Push = function (username, date, message) {
    let item = {
      username: username,
      date: date,
      message: message
    }

    messages.push(item)

    return item
  }

  /**
   * Gets the first message in the queue.
   */
  this.Take = function () {
    if (messages.length > 0) {
      let item = messages.shift()
      return item
    } else {
      return undefined
    }
  }
}

module.exports = Repository
