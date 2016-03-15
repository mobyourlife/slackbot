'use strict'

var self = {}

/**
 * Consulta o status dos serviços.
 * @return {String} Informação sobre o status dos serviços.
 */
self.consultarStatus = () => {
  return 'Vixi, nem sei! Assim que souber te aviso!'
}

/**
 * Resposta padrão para comandos reservados, mas que ainda não estão prontos.
 * @return {String} Resposta padrão.
 */
self.estouAprendendo = () => {
  return 'Hum, ainda estou aprendendo como fazer isso... pode ser daqui alguns dias?'
}

module.exports = self
