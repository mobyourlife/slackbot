'use strict'

var Repository = require('./repository')

/**
 * Messenger handles incoming and outcomings messages.
 */
function Messenger () {
  let incoming = new Repository()
  let outcoming = new Repository()
}

module.exports = Messenger
