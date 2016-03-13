'use strict'

// Lista inicial de verbos, é bem limitada mas é o que precisamos por enquanto
const verbos = [
  'instalar',
  'atualizar',
  'criar',
  'remover',
  'testar',
  'consultar',
  'deletar',
  'alterar',
  'mudar',
  'modificar'
]

const artigos = [ 'a', 'as', 'o', 'os', 'um', 'uns', 'uma', 'umas' ]

/**
 * Tenta classificar uma frase.
 * @param  {String} phrase Frase a ser classificada.
 * @return {String} Classificação de frase.
 */
function Classify (phrase) {
  if (!phrase) {
    return {
      message: 'O que você dises?'
    }
  }

  // Remove pontuação e capitalização, e divide as palavras
  let words = phrase.replace(/([^\w\s]+)/gi, '').toLowerCase().split(' ')

  // Remove os artigos, definidos e indefinidos
  words = words.filter((i) => artigos.indexOf(i) === -1)

  // Procura os verbos na frase
  let verbs = words.filter((i) => verbos.indexOf(i) !== -1)

  // Precisa de pelo menos um verbo para tentar entender
  if (verbs.length === 0) {
    return {
      message: 'Desculpe, não entendi!'
    }
  }

  // Por enquanto só tenta compreender um verbo por vez
  if (verbs.length > 1) {
    return {
      message: 'Não entendi muito bem, você poderia dizer uma frase por vez, por favor?'
    }
  }

  // Separa os termos classificados
  let action = verbs[0]
  let terms = words.filter((i) => i.localeCompare(action) !== 0)

  // Retorna a classificação
  return {
    action: action,
    terms: terms
  }
}

module.exports = Classify
