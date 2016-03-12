'use strict'

/**
 * Bot de protocolo responsável por intermediar conversas
 * entre humanos e computadores.
 */
function ProtoBot () {
  this.brain = []

  /**
   * Ensina o bot de protocolo a interpretar algo.
   * @param  {String} key       Sentença a ser ensinada.
   * @param  {Object} answer    String a ser respondida, ou função a ser executada.
   * @return {String}           Resposta do bot.
   */
  this.teach = function (key, answer) {
    key = key.toLowerCase()
    this.brain.push({
      key: key,
      answer: answer
    })
  }

  /**
   * Fala algo para o bot de protocolo.
   * @param  {String} phrase Frase a ser dita para o bot.
   * @return {String}        Resposta do bot.
   */
  this.talk = function (phrase) {
    phrase = phrase.toLowerCase()

    for (var i = 0; i < this.brain.length; i++) {
      let item = this.brain[i]

      if (item.key === phrase) {
        if (typeof item.answer === 'function') {
          return item.answer()
        } else {
          return item.answer
        }
      }
    }

    return 'Me desculpe, não entendi!'
  }

  /* Ensina algumas coisas básicas para o bot de protocolo. */
  this.teach('olá', 'Olá! Em que posso ajudá-lo?')
  this.teach('até mais', 'Estarei sempre a sua disposição!')
}

module.exports = ProtoBot
