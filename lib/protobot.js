'use strict'

const Levenshtein = require('levenshtein')
const classify = require('./classify')
const actions = require('./actions')

/**
 * Bot de protocolo responsável por intermediar conversas
 * entre humanos e computadores.
 */
function ProtoBot () {
  let self = this
  self.brain = []
  self.body = []

  /**
   * Ensina o bot de protocolo a interpretar algo.
   * @param  {String} keys      Sentenças a serem ensinadas.
   * @param  {Object} answer    String a ser respondida, ou função a ser executada.
   * @return {String}           Resposta do bot.
   */
  self.teach = function (keys, answer) {
    if (!keys) throw new Error('Must supply the keys to teach!')
    if (!answer) throw new Error('Must supply the answer to teach!')

    if (typeof keys === 'object' && Array.isArray(keys)) {
      keys = keys.map((i) => i.toLowerCase())
    } else {
      keys = [ keys.toLowerCase() ]
    }

    self.brain.push({
      keys: keys,
      answer: answer
    })
  }

  /**
   * Ensina o bot de protocolo a realizar alguma ação.
   * @param  {String} verb        Verbo de ação.
   * @param  {String} predicate   Predicado da ação.
   * @param  {Object} action      Função da ação em si.
   * @return {String}             Resposta do bot em relação a ação executada.
   */
  self.action = function (verb, predicate, action) {
    if (!verb) throw new Error('Must supply the action verb!')
    if (!predicate) throw new Error('Must supply the action predicate!')
    if (!action) throw new Error('Must supply the action itself')

    self.body.push({
      verb: verb,
      predicate: predicate,
      action: action
    })
  }

  /**
   * Fala algo para o bot de protocolo.
   * @param  {String} phrase Frase a ser dita para o bot.
   * @return {String}        Resposta do bot.
   */
  self.talk = function (phrase) {
    phrase = phrase.toLowerCase()

    // tenta entender a frase a partir do vocabulário de conversa fiada
    for (var i = 0; i < self.brain.length; i++) {
      let item = self.brain[i]

      for (var j = 0; j < item.keys.length; j++) {
        let key = item.keys[j]

        // permite até 20% de tolerância
        let distance = new Levenshtein(phrase, key)
        let similar = Math.round(phrase.length * 0.2)

        // verifica se a frase é igual ou similar
        if (distance === 0 || distance <= similar) {
          if (typeof item.answer === 'function') {
            return item.answer()
          } else {
            return item.answer
          }
        }
      }
    }

    // se não for conversa fiada, tenta classificar a frase
    let what = classify(phrase)

    if (what) {
      if (what.action) {
        return DoSomething(what)
      } else if (what.message) {
        return what.message
      }
    }

    return 'Desculpe, não entendi!'
  }

  /**
   * Tenta executar uma ação que já está classificada.
   * @param  {String} phrase Classificação da ação a tentar executar.
   */
  function DoSomething (what) {
    let it = self.body.filter((i) => {
      return i.verb === what.action && i.terms === what.predicate
    })

    // Não sabe o que fazer
    if (it.length === 0) {
      return 'Sinto muito, não consigo fazer isto!'
    }

    // Gerou dúvida pois encontrou mais de uma ação
    // (Hoje não é possível devido a comparação do filtro, mas logo isto será alterado)
    if (it.length > 1) {
      return 'Estou em dúvida sobre o que você quer. Pode simplificar por favor?'
    }

    // Executa a ação e retorna a mensagem
    let answer = it[0].action()
    return answer
  }

  // Ensina algumas coisas básicas para o bot de protocolo.
  self.teach([ 'oi', 'olá', 'opa' ], 'Olá! Em que posso ajudá-lo?')
  self.teach([ 'tchau', 'até mais', 'falou', 'falow', 'flw', 'bye' ], 'Estarei sempre a sua disposição!')
  self.teach([ 'obrigado', 'valeu', 'valew', 'vlw'], 'Fico feliz em poder ajudar!')

  // Comando de ajuda para consultar as ações conhecidas
  self.teach('ajuda', function () {
    if (self.body.length > 0) {
      let sb = 'Eu posso lhe ajudar com:\n'

      for (var i of self.body) {
        sb += ` * ${i.verb} ${i.predicate}\n`
      }

      return sb
    } else {
      return 'Que pena, eu adoraria poder lhe ajudar!'
    }
  })

  // Ensina algumas ações
  self.action('consultar', 'status', actions.consultarStatus)
}

module.exports = ProtoBot
